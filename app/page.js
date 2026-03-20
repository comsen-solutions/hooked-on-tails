import { WebSiteSchema } from "@/components/StructuredData";
import Hero from "@/components/Hero";
import ExperienceCards from "@/components/ExperienceCards";
import CaptainPreview from "@/components/CaptainPreview";
import Gallery from "@/components/Gallery";

export default function HomePage() {
  return (
    <>
      <WebSiteSchema />
      <main>
        <Hero />
        <ExperienceCards />
        {/* <CaptainPreview /> */}
        <Gallery />
      </main>
    </>
  );
}
