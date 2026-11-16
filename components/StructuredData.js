import { faqs } from "@/lib/faqData";
import { bowfishingFaqs } from "@/lib/bowfishingFaqData";
import { rodReelFaqs } from "@/lib/rodReelFaqData";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://hookedontailsbowfishing.com/#business",
    name: "Hooked on Tails Bowfishing & Fishing Charters",
    alternateName: "Hooked on Tails",
    description:
      "New Orleans bowfishing and rod & reel fishing charters with Captain John Styron. Nighttime bowfishing and daytime fishing adventures in the Louisiana marshes.",
    url: "https://hookedontailsbowfishing.com",
    telephone: "+1-504-628-0232",
    email: "johnstyron62@gmail.com",
    image: "https://hookedontailsbowfishing.com/images/bowfish_boat.jpg",
    areaServed: [
      { "@type": "City", name: "New Orleans" },
      { "@type": "City", name: "Hopedale" },
      { "@type": "City", name: "Chalmette" },
      { "@type": "City", name: "Metairie" },
      { "@type": "City", name: "Slidell" },
      { "@type": "City", name: "Mandeville" },
    ],
    founder: {
      "@type": "Person",
      name: "Captain John Styron",
      jobTitle: "Charter Captain & Owner",
    },
    sameAs: [
      "https://www.facebook.com/hookedontails",
      "https://www.instagram.com/hookedontails/",
      "https://www.tiktok.com/@hookedontailsbowfishing",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Night Bowfishing Charter",
        description:
          "Nighttime bowfishing near New Orleans. $250 per person, with a 4-person minimum ($1,000 minimum trip total) and 6-person maximum per boat. Equipment, instruction, and fish cleaning included.",
        price: "250",
        priceCurrency: "USD",
        url: "https://hookedontailsbowfishing.com/bowfishing",
      },
      {
        "@type": "Offer",
        name: "Rod & Reel Fishing Charter",
        description:
          "Daytime inshore fishing near New Orleans. $300 per person, with a 3-person minimum and up to 5 anglers. Target redfish and speckled trout.",
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
      "Nighttime bowfishing adventure in the Louisiana marshes near New Orleans, Hopedale, Delacroix, and Shell Beach. Hunt redfish, alligator gar, drum, flounder, and sheepshead under the lights with Captain John Styron. All equipment provided.",
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
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "TouristAttraction",
          name: "Hopedale and Lake Borgne inshore fishing waters",
        },
      ],
    },
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

export function RodReelFAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: rodReelFaqs.map((faq) => ({
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

export function BowfishingFAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bowfishingFaqs.map((faq) => ({
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

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hooked on Tails Bowfishing Charters",
    url: "https://hookedontailsbowfishing.com",
    description:
      "Book nighttime bowfishing and daytime rod & reel fishing charters near New Orleans with Captain John Styron.",
    publisher: {
      "@type": "LocalBusiness",
      "@id": "https://hookedontailsbowfishing.com/#business",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CaptainPersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Captain John Styron",
    jobTitle: "Charter Fishing Captain",
    description:
      "Captain John Styron is a lifelong New Orleans native and active firefighter who has been fishing the waters of Lake Borgne and the Louisiana marshes since childhood. With bowfishing experience since age 15, he guides nighttime bowfishing and daytime rod & reel charters from Hopedale, LA.",
    worksFor: {
      "@type": "LocalBusiness",
      "@id": "https://hookedontailsbowfishing.com/#business",
    },
    url: "https://hookedontailsbowfishing.com/captain",
    knowsAbout: [
      "Bowfishing",
      "Inshore Fishing",
      "Louisiana Marsh Fishing",
      "Redfish",
      "Alligator Gar",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://hookedontailsbowfishing.com",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: item.url,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
