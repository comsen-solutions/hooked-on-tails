import { CaptainPersonSchema, BreadcrumbSchema } from "@/components/StructuredData";
import Captain from "@/components/captain/Captain";

export const metadata = {
  title: "Meet Captain John | Hooked on Tails",
  description:
    "Meet Captain John Styron, New Orleans firefighter and lifelong waterman with decades of experience fishing Louisiana waters.",
};

export default function CaptainPage() {
  return (
    <>
      <CaptainPersonSchema />
      <BreadcrumbSchema items={[{ name: "Meet Captain John", url: "https://hookedontailsbowfishing.com/captain" }]} />
      <main>
        <Captain />
      </main>
    </>
  );
}
