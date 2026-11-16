import { WebSiteSchema } from "@/components/StructuredData";
import Hero from "@/components/Hero";
import ExperienceCards from "@/components/ExperienceCards";
import ReviewsSection from "@/components/ReviewsSection";
import BowfishingCaptain from "@/components/bowfishing/BowfishingCaptain";
import Gallery from "@/components/Gallery";

export default function HomePage() {
  return (
    <>
      <WebSiteSchema />
      <main>
        <Hero />
        <ExperienceCards />
        <ReviewsSection />
        <BowfishingCaptain />
        <Gallery />
      </main>
    </>
  );
}
