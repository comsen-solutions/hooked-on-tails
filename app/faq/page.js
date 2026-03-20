import { FAQSchema, BreadcrumbSchema } from "@/components/StructuredData";
import FAQ from "@/components/faq/FAQ";

export const metadata = {
  title: "FAQ | Hooked on Tails",
  description:
    "Frequently asked questions about Louisiana fishing charters with Captain John Styron.",
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'FAQ | Hooked on Tails',
    description: 'Frequently asked questions about Louisiana fishing charters with Captain John Styron.',
    url: 'https://hookedontailsbowfishing.com/faq',
  },
};

export default function FAQPage() {
  return (
    <>
      <FAQSchema />
      <BreadcrumbSchema items={[{ name: "FAQ", url: "https://hookedontailsbowfishing.com/faq" }]} />
      <main>
        <FAQ />
      </main>
    </>
  );
}
