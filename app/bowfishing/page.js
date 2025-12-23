import BowfishingHero from "@/components/bowfishing/BowfishingHero";
import Experience from "@/components/bowfishing/Experience";
import BoatSection from "@/components/bowfishing/BoatSection";
import Species from "@/components/bowfishing/Species";
import Pricing from "@/components/bowfishing/Pricing";
import Gallery from "@/components/bowfishing/Gallery";
import Saints from "@/components/bowfishing/Saints";
import FloatingBookButton from "@/components/FloatingBookButton";

export const metadata = {
  title: "Night Bowfishing | Hooked on Tails",
  description:
    "Experience the Louisiana marshes like never before. Hunt alligator gar, redfish, and more under the stars with an expert guide.",
};

export default function BowfishingPage() {
  return (
    <>
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
