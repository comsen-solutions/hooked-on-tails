import RodReelHero from "@/components/rod-and-reel/RodReelHero";
import Experience from "@/components/rod-and-reel/Experience";
import BoatSection from "@/components/rod-and-reel/BoatSection";
import Species from "@/components/rod-and-reel/Species";
import Pricing from "@/components/rod-and-reel/Pricing";
import FloatingBookButton from "@/components/FloatingBookButton";

export const metadata = {
  title: "Rod & Reel Fishing | Hooked on Tails",
  description:
    "Experience classic Louisiana fishing in the beautiful coastal marshes. Target redfish, speckled trout, and more with an expert local guide.",
};

export default function RodAndReelPage() {
  return (
    <>
      <FloatingBookButton />
      <main>
        <RodReelHero />
        <Experience />
        <BoatSection />
        <Species />
        <Pricing />
      </main>
    </>
  );
}
