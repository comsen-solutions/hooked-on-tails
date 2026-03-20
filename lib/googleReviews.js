const EMPTY_RESULT = { reviews: [], averageRating: 0, totalReviewCount: 0 };

export async function fetchGoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn("[GoogleReviews] Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID");
    return EMPTY_RESULT;
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "reviews,rating,userRatingCount",
        },
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) {
      console.error(`[GoogleReviews] API error: ${res.status} ${res.statusText}`);
      return EMPTY_RESULT;
    }

    const data = await res.json();

    const reviews = (data.reviews || []).map((review) => ({
      authorName: review.authorAttribution?.displayName || "Anonymous",
      profilePhotoUrl: review.authorAttribution?.photoUri
        ? review.authorAttribution.photoUri.startsWith("//")
          ? `https:${review.authorAttribution.photoUri}`
          : review.authorAttribution.photoUri
        : null,
      rating: review.rating || 5,
      text: review.text?.text || "",
      relativeTime: review.relativePublishTimeDescription || "",
    }));

    return {
      reviews,
      averageRating: data.rating || 0,
      totalReviewCount: data.userRatingCount || 0,
    };
  } catch (error) {
    console.error("[GoogleReviews] Fetch failed:", error.message);
    return EMPTY_RESULT;
  }
}
