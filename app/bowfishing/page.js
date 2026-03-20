import { BowfishingServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";
import BowfishingHero from "@/components/bowfishing/BowfishingHero";
import Experience from "@/components/bowfishing/Experience";
import BoatSection from "@/components/bowfishing/BoatSection";
import Species from "@/components/bowfishing/Species";
import Pricing from "@/components/bowfishing/Pricing";
import Gallery from "@/components/bowfishing/Gallery";
import Saints from "@/components/bowfishing/Saints";
import FloatingBookButton from "@/components/FloatingBookButton";

export const metadata = {
  title: "New Orleans Bowfishing Charters | Hooked on Tails",
  description:
    "Book a New Orleans bowfishing charter with Captain John Styron. Nighttime bowfishing adventures in the Louisiana marshes — redfish, alligator gar, drum & more. All equipment provided. $250/person.",
  alternates: {
    canonical: '/bowfishing',
  },
  openGraph: {
    title: 'New Orleans Bowfishing Charters | Hooked on Tails',
    description: 'Nighttime bowfishing adventures in the Louisiana marshes near New Orleans. Redfish, alligator gar, drum & more with Captain John Styron.',
    url: 'https://hookedontailsbowfishing.com/bowfishing',
  },
};

export default function BowfishingPage() {
  return (
    <>
      <BowfishingServiceSchema />
      <BreadcrumbSchema items={[{ name: "Nighttime Bowfishing Charter", url: "https://hookedontailsbowfishing.com/bowfishing" }]} />
      <FloatingBookButton />
      <main>
        <BowfishingHero />
        <Experience />
        <BoatSection />
        <Species />
        <Pricing />
        {/* <Gallery /> */}
        <Saints />
      </main>
    </>
  );
}
