import { BreadcrumbSchema } from "@/components/StructuredData";
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
    images: ['/opengraph-image.jpg'],
  },
};

const allowedTripTypes = new Set(["inshore", "offshore", "bowfishing"]);

export default function ContactPage({ searchParams }) {
  const requestedTrip = Array.isArray(searchParams?.trip)
    ? searchParams.trip[0]
    : searchParams?.trip;
  const requestedSource = Array.isArray(searchParams?.source)
    ? searchParams.source[0]
    : searchParams?.source;
  const initialTripType = allowedTripTypes.has(requestedTrip)
    ? requestedTrip
    : "";
  const initialSource =
    requestedSource
      ?.replace(/[^a-z0-9_-]/gi, "")
      .slice(0, 80) || "direct";

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Book Now", url: "https://hookedontailsbowfishing.com/contact" }]} />
      <main>
        <BookingForm
          initialTripType={initialTripType}
          initialSource={initialSource}
        />
      </main>
    </>
  );
}
