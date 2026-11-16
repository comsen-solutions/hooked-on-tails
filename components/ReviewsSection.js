import { Suspense } from "react";
import GoogleReviews from "@/components/GoogleReviews";
import { fetchGoogleReviews, getGoogleReviewsUrl } from "@/lib/googleReviews";

async function ReviewContent() {
  const reviews = await fetchGoogleReviews();
  return <GoogleReviews {...reviews} />;
}

export default function ReviewsSection() {
  return (
    <Suspense fallback={<GoogleReviews reviewsUrl={getGoogleReviewsUrl()} />}>
      <ReviewContent />
    </Suspense>
  );
}
