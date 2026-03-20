import { faqs } from "@/lib/faqData";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://hookedontailsbowfishing.com/#business",
    name: "Hooked on Tails Bowfishing & Fishing Charters",
    description:
      "New Orleans bowfishing and rod & reel fishing charters with Captain John Styron. Nighttime bowfishing and daytime fishing adventures in the Louisiana marshes.",
    url: "https://hookedontailsbowfishing.com",
    telephone: "+1-504-628-0232",
    email: "johnstyron62@gmail.com",
    image: "https://hookedontailsbowfishing.com/images/bowfish_boat.png",
    priceRange: "$250 - $1600",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Orleans",
      addressRegion: "LA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.9511,
      longitude: -90.0715,
    },
    areaServed: [
      { "@type": "City", name: "New Orleans" },
      { "@type": "State", name: "Louisiana" },
    ],
    sameAs: [
      "https://www.facebook.com/hookedontails",
      "https://www.instagram.com/hookedontails/",
      "https://www.tiktok.com/@hookedontailsbowfishing",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "06:00",
      closes: "23:00",
    },
    makesOffer: [
      {
        "@type": "Offer",
        name: "Night Bowfishing Charter",
        description:
          "Nighttime bowfishing adventure in the Louisiana marshes near New Orleans. Target redfish, alligator gar, drum, and more.",
        price: "250",
        priceCurrency: "USD",
        url: "https://hookedontailsbowfishing.com/bowfishing",
      },
      {
        "@type": "Offer",
        name: "Rod & Reel Fishing Charter",
        description:
          "Daytime fishing charter in the Louisiana coastal marshes near New Orleans. Target redfish, speckled trout, sheepshead, and more.",
        price: "300",
        priceCurrency: "USD",
        url: "https://hookedontailsbowfishing.com/rod-and-reel",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BowfishingServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "New Orleans Bowfishing Charter",
    description:
      "Nighttime bowfishing adventure in the Louisiana marshes near New Orleans. Hunt redfish, alligator gar, drum, flounder, and sheepshead under the stars with Captain John Styron. All equipment provided.",
    touristType: "Fishing",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://hookedontailsbowfishing.com/#business",
      name: "Hooked on Tails",
    },
    offers: [
      {
        "@type": "Offer",
        price: "250",
        priceCurrency: "USD",
        description: "Per person. 4 person minimum, 6 person maximum. All equipment included.",
      },
    ],
    duration: "PT4H30M",
    subjectOf: {
      "@type": "WebPage",
      url: "https://hookedontailsbowfishing.com/bowfishing",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function RodReelServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "New Orleans Rod & Reel Fishing Charter",
    description:
      "Daytime fishing charter in the Louisiana coastal marshes near New Orleans. Target redfish, speckled trout, sheepshead, and more with Captain John Styron. All equipment provided.",
    touristType: "Fishing",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://hookedontailsbowfishing.com/#business",
      name: "Hooked on Tails",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Inshore Fishing Charter",
        price: "300",
        priceCurrency: "USD",
        description:
          "Per person. 3-5 person groups. Target redfish and speckled trout.",
      },
      {
        "@type": "Offer",
        name: "Offshore Fishing Charter",
        price: "1600",
        priceCurrency: "USD",
        description:
          "For 4 people. $200 per additional person, up to 6. Target red snapper.",
      },
    ],
    duration: "PT5H",
    subjectOf: {
      "@type": "WebPage",
      url: "https://hookedontailsbowfishing.com/rod-and-reel",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
