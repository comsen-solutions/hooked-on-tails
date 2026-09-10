import {
  RodReelServiceSchema,
  RodReelFAQSchema,
  BreadcrumbSchema,
  AggregateRatingSchema,
} from "@/components/StructuredData";
import { fetchGoogleReviews } from "@/lib/googleReviews";
import RodReelHero from "@/components/rod-and-reel/RodReelHero";
import Experience from "@/components/rod-and-reel/Experience";
import TripDetails from "@/components/rod-and-reel/TripDetails";
import BoatSection from "@/components/rod-and-reel/BoatSection";
import Species from "@/components/rod-and-reel/Species";
import Pricing from "@/components/rod-and-reel/Pricing";
import RodReelHighlights from "@/components/rod-and-reel/RodReelHighlights";
import RodReelFAQ from "@/components/rod-and-reel/RodReelFAQ";
import FishingBookingCTA from "@/components/rod-and-reel/FishingBookingCTA";
import FloatingBookButton from "@/components/FloatingBookButton";
import GoogleReviews from "@/components/GoogleReviews";

export const metadata = {
  title: "New Orleans Fishing Charters | Hooked on Tails",
  description:
    "Book a New Orleans fishing charter with Captain John Styron. Inshore redfish and speckled trout or seasonal offshore red snapper trips from Hopedale.",
  alternates: {
    canonical: "/rod-and-reel",
  },
  openGraph: {
    title: "New Orleans Fishing Charters | Hooked on Tails",
    description:
      "Daytime inshore and offshore fishing charters near New Orleans with Captain John Styron. Gear, bait, tackle, and fish cleaning provided.",
    url: "https://hookedontailsbowfishing.com/rod-and-reel",
  },
};

export default async function RodAndReelPage() {
  const { reviews, averageRating, totalReviewCount } = await fetchGoogleReviews();

  return (
    <>
      <RodReelServiceSchema />
      <RodReelFAQSchema />
      {averageRating > 0 && (
        <AggregateRatingSchema
          rating={averageRating}
          reviewCount={totalReviewCount}
        />
      )}
      <BreadcrumbSchema items={[{ name: "Rod & Reel Fishing Charter", url: "https://hookedontailsbowfishing.com/rod-and-reel" }]} />
      <FloatingBookButton
        tripType="inshore"
        source="rod-reel-floating-button"
        label="Book a Trip"
      />
      <main>
        <RodReelHero />
        <TripDetails />
        <Experience />
        <BoatSection />
        <Species />
        <Pricing />
        <RodReelHighlights />
        <GoogleReviews
          reviews={reviews}
          averageRating={averageRating}
          totalReviewCount={totalReviewCount}
          placeId={process.env.GOOGLE_PLACE_ID}
        />
        <RodReelFAQ />
        <FishingBookingCTA />
      </main>
    </>
  );
}
