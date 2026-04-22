import { AggregateRatingSchema, WebSiteSchema } from "@/components/StructuredData";
import { fetchGoogleReviews } from "@/lib/googleReviews";
import Hero from "@/components/Hero";
import ExperienceCards from "@/components/ExperienceCards";
import GoogleReviews from "@/components/GoogleReviews";
import CaptainPreview from "@/components/CaptainPreview";
import Gallery from "@/components/Gallery";

export default async function HomePage() {
  const { reviews, averageRating, totalReviewCount } = await fetchGoogleReviews();

  return (
    <>
      <WebSiteSchema />
      {averageRating > 0 && (
        <AggregateRatingSchema rating={averageRating} reviewCount={totalReviewCount} />
      )}
      <main>
        <Hero />
        <ExperienceCards />
        <GoogleReviews
          reviews={reviews}
          averageRating={averageRating}
          totalReviewCount={totalReviewCount}
          placeId={process.env.GOOGLE_PLACE_ID}
        />
        {/* <CaptainPreview /> */}
        <Gallery />
      </main>
    </>
  );
}
