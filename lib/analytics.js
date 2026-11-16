const EVENT_NAMES = new Set([
  "experience_selected", "booking_cta_click", "booking_form_started",
  "booking_request_attempt", "booking_request_submitted", "booking_request_error",
  "booking_phone_click",
]);
const TRIP_TYPES = new Set(["inshore", "offshore", "bowfishing", "not_selected"]);
const GUEST_COUNTS = new Set(["1", "2", "3", "4", "5", "6", "7+", "not_selected"]);
const SOURCES = new Set([
  "direct", "homepage-experience-card", "floating-book-button",
  "bowfishing-hero", "bowfishing-pricing", "bowfishing-floating-button",
  "rod-reel-hero", "rod-reel-pricing", "rod-reel-bottom-cta",
  "rod-reel-small-party-note", "rod-reel-floating-button",
]);
const PAGE_PATHS = new Set(["/", "/bowfishing", "/rod-and-reel", "/captain", "/faq", "/contact"]);

export function normalizeLeadSource(source) {
  return SOURCES.has(source) ? source : "direct";
}

export function getGoogleAnalyticsId() {
  const id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?.trim().toUpperCase();
  return id && /^G-[A-Z0-9]+$/.test(id) ? id : null;
}

function pageParameters(pathname = window.location.pathname) {
  const pagePath = PAGE_PATHS.has(pathname) ? pathname : "/";
  return {
    page_path: pagePath,
    // Do not send booking form values or arbitrary URL query parameters.
    page_location: `${window.location.origin}${pagePath}`,
  };
}

export function initializeGoogleAnalytics(measurementId = getGoogleAnalyticsId()) {
  if (typeof window === "undefined" || !measurementId || !/^G-[A-Z0-9]+$/.test(measurementId)) return false;
  if (window.__hookedOnTailsGA4 === measurementId) return true;

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }

  let referrerOrigin = "";
  try {
    referrerOrigin = document.referrer ? new URL(document.referrer).origin : "";
  } catch {
    // Invalid referrers are omitted.
  }

  try {
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      send_page_view: false,
      ...pageParameters(),
      page_referrer: referrerOrigin,
    });
  } catch {
    return false;
  }
  window.__hookedOnTailsGA4 = measurementId;
  return true;
}

export function trackPageView(pathname) {
  if (!initializeGoogleAnalytics()) return;
  const parameters = pageParameters(pathname);
  if (window.__hookedOnTailsPagePath === parameters.page_path) return;
  try {
    window.gtag("event", "page_view", parameters);
    window.__hookedOnTailsPagePath = parameters.page_path;
  } catch {
    // Analytics must not interrupt navigation.
  }
}

export function trackEvent(eventName, parameters = {}) {
  if (!EVENT_NAMES.has(eventName) || !initializeGoogleAnalytics()) return;

  const eventParameters = pageParameters();
  if ("trip_type" in parameters) eventParameters.trip_type = TRIP_TYPES.has(parameters.trip_type) ? parameters.trip_type : "not_selected";
  if ("guest_count" in parameters) eventParameters.guest_count = GUEST_COUNTS.has(String(parameters.guest_count)) ? String(parameters.guest_count) : "not_selected";
  if ("lead_source" in parameters) eventParameters.lead_source = normalizeLeadSource(parameters.lead_source);
  if ("link_source" in parameters) eventParameters.link_source = normalizeLeadSource(parameters.link_source);
  if (["bowfishing", "rod-and-reel"].includes(parameters.experience)) eventParameters.experience = parameters.experience;

  try {
    window.gtag("event", eventName, eventParameters);
  } catch {
    // An unavailable analytics tag must not interrupt a booking request.
  }
}

export function trackBookingClick({ tripType, source, action = "booking" }) {
  const eventName =
    action === "phone" ? "booking_phone_click" : "booking_cta_click";

  trackEvent(eventName, {
    trip_type: tripType || "not_selected",
    link_source: source,
  });
}
