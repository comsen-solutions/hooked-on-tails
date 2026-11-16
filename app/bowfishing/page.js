import { BowfishingServiceSchema, BowfishingFAQSchema, BreadcrumbSchema } from "@/components/StructuredData";
import BowfishingHero from "@/components/bowfishing/BowfishingHero";
import Experience from "@/components/bowfishing/Experience";
import BoatSection from "@/components/bowfishing/BoatSection";
import Species from "@/components/bowfishing/Species";
import Pricing from "@/components/bowfishing/Pricing";
import Saints from "@/components/bowfishing/Saints";
import SocialTripHighlights from "@/components/SocialTripHighlights";
import BowfishingServiceArea from "@/components/bowfishing/BowfishingServiceArea";
import BowfishingFAQ from "@/components/bowfishing/BowfishingFAQ";
import FloatingBookButton from "@/components/FloatingBookButton";
import BowfishingCaptain from "@/components/bowfishing/BowfishingCaptain";
import BowfishingFirstTrip from "@/components/bowfishing/BowfishingFirstTrip";
import ReviewsSection from "@/components/ReviewsSection";

const description = "New Orleans night bowfishing with Captain John: $250 per person, 4-person minimum, 4–4.5 hours. Gear, instruction and fish cleaning included. Ages 8+.";

export const metadata = {
  title: "New Orleans Bowfishing Charters | Night Trips from Hooked on Tails",
  description,
  alternates: {
    canonical: '/bowfishing',
  },
  openGraph: {
    title: 'New Orleans Bowfishing Charters | Night Trips from Hooked on Tails',
    description,
    url: 'https://hookedontailsbowfishing.com/bowfishing',
  },
};

export default function BowfishingPage() {
  return (
    <>
      <BowfishingServiceSchema />
      <BowfishingFAQSchema />
      <BreadcrumbSchema items={[{ name: "Nighttime Bowfishing Charter", url: "https://hookedontailsbowfishing.com/bowfishing" }]} />
      <FloatingBookButton
        tripType="bowfishing"
        source="bowfishing-floating-button"
      />
      <main>
        <BowfishingHero />
        <Pricing />
        <BowfishingCaptain />
        <ReviewsSection />
        <Experience />
        <BowfishingFirstTrip />
        <BowfishingServiceArea />
        <BoatSection />
        <Species />
        <BowfishingFAQ />
        <SocialTripHighlights compact />
        <Saints />
      </main>
    </>
  );
}
