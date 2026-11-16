const BUSINESS_SEARCH = "Hooked on Tails Bowfishing Charters";

function safeHttpsUrl(value) {
  if (typeof value !== "string") return null;
  try {
    const url = new URL(value.startsWith("//") ? `https:${value}` : value);
    return url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}

export function getGoogleReviewsUrl(placeId = process.env.GOOGLE_PLACE_ID) {
  const query = new URLSearchParams({ api: "1", query: BUSINESS_SEARCH });
  if (placeId?.trim()) query.set("query_place_id", placeId.trim());
  return `https://www.google.com/maps/search/?${query}`;
}

export async function fetchGoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();
  const placeId = process.env.GOOGLE_PLACE_ID?.trim();
  const fallback = {
    reviews: [],
    averageRating: 0,
    totalReviewCount: 0,
    reviewsUrl: getGoogleReviewsUrl(placeId),
    attributions: [],
  };

  if (!apiKey || !placeId) {
    console.warn("[GoogleReviews] Configure GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID on the server.");
    return fallback;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "reviews,rating,userRatingCount,googleMapsUri,attributions",
        },
        // Fetch review content fresh instead of storing a persistent snapshot.
        cache: "no-store",
        signal: controller.signal,
      },
    );

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      const reason = data.error?.details?.find((detail) => detail.reason)?.reason;
      const safeReason = typeof reason === "string" && /^[A-Z_]+$/.test(reason)
        ? ` (${reason})`
        : "";
      console.error(`[GoogleReviews] Places API returned ${response.status}${safeReason}. Check API access, billing, key restrictions, and the place ID.`);
      return fallback;
    }

    const data = await response.json();
    const reviews = (Array.isArray(data.reviews) ? data.reviews : [])
      .filter((review) => Number.isFinite(review.rating) && review.rating >= 1 && review.rating <= 5)
      .map((review) => ({
        id: review.name || review.googleMapsUri || `${review.authorAttribution?.displayName}-${review.publishTime}`,
        authorName: review.authorAttribution?.displayName || "Google Maps reviewer",
        authorUrl: safeHttpsUrl(review.authorAttribution?.uri),
        profilePhotoUrl: safeHttpsUrl(review.authorAttribution?.photoUri),
        reviewUrl: safeHttpsUrl(review.googleMapsUri),
        rating: review.rating,
        text: review.text?.text || "",
        relativeTime: review.relativePublishTimeDescription || "",
        translated: Boolean(review.text?.languageCode && review.originalText?.languageCode && review.text.languageCode !== review.originalText.languageCode),
      }));

    return {
      reviews,
      averageRating: Number.isFinite(data.rating) && data.rating >= 1 && data.rating <= 5 ? data.rating : 0,
      totalReviewCount: Number.isInteger(data.userRatingCount) && data.userRatingCount > 0 ? data.userRatingCount : 0,
      reviewsUrl: safeHttpsUrl(data.googleMapsUri) || fallback.reviewsUrl,
      attributions: (Array.isArray(data.attributions) ? data.attributions : [])
        .map((attribution) => ({ name: attribution.provider, url: safeHttpsUrl(attribution.providerUri) }))
        .filter((attribution) => attribution.name && attribution.url),
    };
  } catch {
    console.error(controller.signal.aborted
      ? "[GoogleReviews] Places request timed out; showing the Google Maps link."
      : "[GoogleReviews] Places request failed; showing the Google Maps link.");
    return fallback;
  } finally {
    clearTimeout(timeout);
  }
}
