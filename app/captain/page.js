import Captain from "@/components/captain/Captain";

export const metadata = {
  title: "Meet Captain John | Hooked on Tails",
  description:
    "Meet Captain John Styron, New Orleans firefighter and lifelong waterman with decades of experience fishing Louisiana waters.",
  alternates: {
    canonical: '/captain',
  },
  openGraph: {
    title: 'Meet Captain John | Hooked on Tails',
    description: 'Meet Captain John Styron, New Orleans firefighter and lifelong waterman with decades of experience fishing Louisiana waters.',
    url: 'https://hookedontailsbowfishing.com/captain',
  },
};

export default function CaptainPage() {
  return (
    <main>
      <Captain />
    </main>
  );
}
