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
    priceRange: "$250/person",
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
    offers: {
      "@type": "Offer",
      price: "250",
      priceCurrency: "USD",
      description: "Per person. 4 person minimum, 6 person maximum. All equipment included.",
    },
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
    mainEntity: [
      {
        "@type": "Question",
        name: "What's the best time of year to fish?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Louisiana offers great fishing year-round! Spring and fall are particularly excellent for redfish and speckled trout. Captain John will advise on the best times based on current conditions.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need rod-and-reel fishing experience?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not at all! Captain John welcomes anglers of all skill levels. He'll teach beginners the basics and help experienced anglers target trophy fish.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need fishing or bowfishing experience?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not at all! Captain John welcomes everyone from complete beginners to experienced anglers. He'll teach you everything you need to know and help you have a successful trip.",
        },
      },
      {
        "@type": "Question",
        name: "What should I wear and bring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dress for the weather in comfortable, non-marking shoes. Bring sunscreen, sunglasses, a hat, rain gear if needed, your Louisiana fishing license, food and drinks, and an ice chest for your catch. All fishing equipment, bait, and tackle are provided.",
        },
      },
      {
        "@type": "Question",
        name: "Can I keep the fish I catch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! All legal catches are yours to keep. Captain John can clean and fillet your fish at the end of the trip so they're ready for the table.",
        },
      },
      {
        "@type": "Question",
        name: "Where do we meet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The boat launches from Patriot Lodge in New Orleans. Exact directions and meeting time will be provided upon booking.",
        },
      },
      {
        "@type": "Question",
        name: "What if the weather is bad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Safety is the top priority. If conditions are unsafe, Captain John will work with you to reschedule. Light rain usually doesn't stop the fish from biting!",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a fishing license?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you'll need a valid Louisiana fishing license. You can obtain a 3-day charter pass for $20 from the Louisiana Department of Wildlife and Fisheries.",
        },
      },
      {
        "@type": "Question",
        name: "Is there an age requirement for bowfishing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The youngest age for bowfishing with Captain John is 8 years old. Both fishing and bowfishing are great family outings!",
        },
      },
      {
        "@type": "Question",
        name: "How do I pay the deposit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "After submitting your booking request, Captain John will contact you with payment details. A deposit is required to hold your date, with the balance due on the day of the trip.",
        },
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
