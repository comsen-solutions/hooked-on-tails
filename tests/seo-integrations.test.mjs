import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test, { afterEach } from "node:test";

async function loadSource(relativePath) {
  const source = await readFile(new URL(relativePath, import.meta.url), "utf8");
  return import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`);
}

const analytics = await loadSource("../lib/analytics.js");
const reviews = await loadSource("../lib/googleReviews.js");
const originalFetch = globalThis.fetch;
const originalWindow = globalThis.window;
const originalDocument = globalThis.document;
const originalWarn = console.warn;
const originalError = console.error;
const environmentKeys = ["NEXT_PUBLIC_GOOGLE_ANALYTICS_ID", "GOOGLE_PLACES_API_KEY", "GOOGLE_PLACE_ID"];
const originalEnvironment = Object.fromEntries(environmentKeys.map((key) => [key, process.env[key]]));

afterEach(() => {
  globalThis.fetch = originalFetch;
  globalThis.window = originalWindow;
  globalThis.document = originalDocument;
  console.warn = originalWarn;
  console.error = originalError;
  for (const key of environmentKeys) {
    if (originalEnvironment[key] === undefined) delete process.env[key];
    else process.env[key] = originalEnvironment[key];
  }
});

function browser() {
  globalThis.window = {
    location: { origin: "https://example.test", pathname: "/contact", search: "?email=private@example.test" },
  };
  globalThis.document = { referrer: "https://www.google.com/search?q=private@example.test" };
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID = "G-TEST123456";
}

test("booking events queue valid gtag commands after configuration, without personal data", () => {
  browser();
  analytics.trackEvent("booking_request_submitted", {
    trip_type: "bowfishing", guest_count: "4", lead_source: "private@example.test",
    name: "Private Guest", email: "private@example.test", phone: "5551234567",
    message: "Private message", date: "2030-01-01",
  });

  const commands = window.dataLayer.map((entry) => Array.from(entry));
  assert.deepEqual(commands.map((entry) => entry[0]), ["js", "config", "event"]);
  assert.equal(commands[1][1], "G-TEST123456");
  assert.equal(commands[1][2].page_referrer, "https://www.google.com");
  assert.deepEqual(commands[2], ["event", "booking_request_submitted", {
    page_path: "/contact", page_location: "https://example.test/contact",
    trip_type: "bowfishing", guest_count: "4", lead_source: "direct",
  }]);
  assert.doesNotMatch(JSON.stringify(commands), /Private|private@|5551234567|2030-01-01/);
});

test("missing or malformed GA4 ID does not create an orphan event queue", () => {
  browser();
  delete process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  analytics.trackEvent("booking_request_attempt");
  assert.equal(window.dataLayer, undefined);
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID = "not-a-measurement-id";
  analytics.trackEvent("booking_request_attempt");
  assert.equal(window.dataLayer, undefined);
});

test("client navigation records page views once per path change", () => {
  browser();
  analytics.trackPageView("/contact");
  analytics.trackPageView("/contact");
  analytics.trackPageView("/bowfishing");
  analytics.trackPageView("/contact");
  const events = window.dataLayer.map((entry) => Array.from(entry)).filter((entry) => entry[0] === "event");
  assert.deepEqual(events.map((entry) => entry[2].page_path), ["/contact", "/bowfishing", "/contact"]);
  assert.equal(window.dataLayer.filter((entry) => entry[0] === "config").length, 1);
});

test("unknown events and freeform parameter values are not collected", () => {
  browser();
  analytics.trackEvent("private@example.test", { email: "private@example.test" });
  assert.equal(window.dataLayer, undefined);
  analytics.trackBookingClick({ tripType: "private@example.test", source: "bowfishing-pricing", action: "phone" });
  const event = Array.from(window.dataLayer.at(-1));
  assert.equal(event[1], "booking_phone_click");
  assert.equal(event[2].trip_type, "not_selected");
  assert.equal(event[2].link_source, "bowfishing-pricing");
});

test("a failing analytics tag cannot interrupt a booking or navigation", () => {
  browser();
  window.gtag = () => { throw new Error("Analytics unavailable"); };
  assert.doesNotThrow(() => analytics.trackEvent("booking_request_attempt"));
  assert.doesNotThrow(() => analytics.trackPageView("/contact"));
  window.__hookedOnTailsGA4 = "G-TEST123456";
  assert.doesNotThrow(() => analytics.trackEvent("booking_request_submitted"));
});

test("Places reviews preserve low ratings and source attribution without persistent caching", async () => {
  process.env.GOOGLE_PLACES_API_KEY = "test-key-not-a-secret";
  process.env.GOOGLE_PLACE_ID = "test-place-id";
  let request;
  globalThis.fetch = async (url, options) => {
    request = { url, options };
    return { ok: true, json: async () => ({
      rating: 4.2, userRatingCount: 12,
      googleMapsUri: "https://maps.google.com/place/test",
      reviews: [{
        name: "places/test/reviews/1", rating: 2,
        authorAttribution: { displayName: "Example reviewer", uri: "https://maps.google.com/contrib/test", photoUri: "//example.test/avatar.png" },
        text: { text: "Example API fixture review", languageCode: "en" },
        originalText: { languageCode: "en" },
        googleMapsUri: "https://maps.google.com/review/test",
        relativePublishTimeDescription: "a month ago",
      }],
    }) };
  };
  const result = await reviews.fetchGoogleReviews();
  assert.equal(request.options.cache, "no-store");
  assert.equal(request.options.next, undefined);
  assert.equal(result.reviews[0].rating, 2);
  assert.equal(result.reviews[0].authorUrl, "https://maps.google.com/contrib/test");
  assert.equal(result.reviews[0].reviewUrl, "https://maps.google.com/review/test");
  assert.equal(result.reviews[0].profilePhotoUrl, "https://example.test/avatar.png");
  assert.equal(result.totalReviewCount, 12);
});

test("missing review configuration retains a useful Maps link without inventing ratings", async () => {
  delete process.env.GOOGLE_PLACES_API_KEY;
  delete process.env.GOOGLE_PLACE_ID;
  console.warn = () => {};
  globalThis.fetch = async () => { throw new Error("Must not request without credentials"); };
  const result = await reviews.fetchGoogleReviews();
  assert.equal(result.reviews.length, 0);
  assert.equal(result.averageRating, 0);
  assert.equal(result.totalReviewCount, 0);
  const url = new URL(result.reviewsUrl);
  assert.equal(url.hostname, "www.google.com");
  assert.match(url.searchParams.get("query"), /Hooked on Tails/);
  assert.equal(url.searchParams.has("query_place_id"), false);
});

test("API failure returns the configured listing link and logs no credential or raw response", async () => {
  process.env.GOOGLE_PLACES_API_KEY = "test-key-not-a-secret";
  process.env.GOOGLE_PLACE_ID = "test-place-id";
  const messages = [];
  console.error = (message) => messages.push(message);
  globalThis.fetch = async () => ({ ok: false, status: 403, json: async () => ({
    error: { message: "test-key-not-a-secret", details: [{ reason: "API_KEY_SERVICE_BLOCKED" }] },
  }) });
  const result = await reviews.fetchGoogleReviews();
  assert.equal(new URL(result.reviewsUrl).searchParams.get("query_place_id"), "test-place-id");
  assert.equal(result.reviews.length, 0);
  assert.match(messages[0], /403.*API_KEY_SERVICE_BLOCKED/);
  assert.doesNotMatch(messages[0], /test-key-not-a-secret/);
});

test("network failure also preserves the review destination", async () => {
  process.env.GOOGLE_PLACES_API_KEY = "test-key-not-a-secret";
  process.env.GOOGLE_PLACE_ID = "test-place-id";
  console.error = () => {};
  globalThis.fetch = async () => { throw new Error("Offline"); };
  const result = await reviews.fetchGoogleReviews();
  assert.equal(result.reviews.length, 0);
  assert.match(result.reviewsUrl, /query_place_id=test-place-id/);
});
