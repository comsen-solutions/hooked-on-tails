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
  title: "New Orleans Bowfishing Charters | Night Trips from Hooked on Tails",
  description:
    "Book a nighttime New Orleans bowfishing charter with Captain John Styron. All equipment provided, family-friendly trips, Louisiana marsh action. Call 504-628-0232.",
  alternates: {
    canonical: '/bowfishing',
  },
  openGraph: {
    title: 'New Orleans Bowfishing Charters | Night Trips from Hooked on Tails',
    description: 'Book a nighttime New Orleans bowfishing charter with Captain John Styron. All equipment provided, family-friendly trips, Louisiana marsh action. Call 504-628-0232.',
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
