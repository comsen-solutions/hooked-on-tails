import BookingForm from "@/components/contact/BookingForm";

export const metadata = {
  title: "Contact & Booking | Hooked on Tails",
  description:
    "Book your Louisiana fishing adventure with Captain John Styron. Rod & reel fishing, night bowfishing, and offshore trips available.",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact & Booking | Hooked on Tails',
    description: 'Book your Louisiana fishing adventure with Captain John Styron. Rod & reel fishing, night bowfishing, and offshore trips available.',
    url: 'https://hookedontailsbowfishing.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main>
      <BookingForm />
    </main>
  );
}
