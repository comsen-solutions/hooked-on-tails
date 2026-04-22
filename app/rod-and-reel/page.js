import { RodReelServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";
import RodReelHero from "@/components/rod-and-reel/RodReelHero";
import Experience from "@/components/rod-and-reel/Experience";
import BoatSection from "@/components/rod-and-reel/BoatSection";
import Species from "@/components/rod-and-reel/Species";
import Pricing from "@/components/rod-and-reel/Pricing";
import FloatingBookButton from "@/components/FloatingBookButton";

export const metadata = {
  title: "New Orleans Fishing Charters - Rod & Reel | Hooked on Tails",
  description:
    "Book a New Orleans fishing charter with Captain John Styron. Target redfish, speckled trout, sheepshead & more in the Louisiana coastal marshes. All skill levels welcome.",
  alternates: {
    canonical: '/rod-and-reel',
  },
  openGraph: {
    title: 'New Orleans Fishing Charters - Rod & Reel | Hooked on Tails',
    description: 'Daytime fishing charters in the Louisiana marshes near New Orleans. Redfish, speckled trout, sheepshead & more with Captain John Styron.',
    url: 'https://hookedontailsbowfishing.com/rod-and-reel',
  },
};

export default function RodAndReelPage() {
  return (
    <>
      <RodReelServiceSchema />
      <BreadcrumbSchema items={[{ name: "Rod & Reel Fishing Charter", url: "https://hookedontailsbowfishing.com/rod-and-reel" }]} />
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
