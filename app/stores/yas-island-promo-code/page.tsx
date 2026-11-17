import type { Metadata } from "next";
import { Suspense } from "react";
import YasIslandCouponsContent from "./_components/StoreCouponsContent";
import { YAS_ISLAND_COUPONS } from "./_components/offers";

const TITLE = "Yas Island Promo Code: 25% Dining Off + Pass From AED 134 | Nov 20266";
const DESCRIPTION =
  "Use Yas Island Promo Code for an Annual Pass from AED 134/month and get 25% off dining with annual membership perks. Verified Nov 2026 savings.";
const CANONICAL = "https://www.couponsbit.us/stores/yas-island-promo-code";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: CANONICAL,
    languages: {
      "en-US": CANONICAL,
      "en-GB": CANONICAL,
      "en-IN": CANONICAL,
      "x-default": CANONICAL,
    },
  },

  openGraph: {
    type: "website",
    url: CANONICAL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1788248210/yas-island-logo_krotjw.webp",
        width: 1200,
        height: 630,
        alt: "Yas Island Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1788248210/yas-island-logo_krotjw.webp"],
    site: "@couponsbit",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  other: {
    "geo.region": "US",
    "geo.country": "US",
  },
};

const storeOffers = YAS_ISLAND_COUPONS.map((coupon, index) => ({
  "@type": "ListItem",
  position: index + 1,
  item: {
    "@type": "Offer",
    name: coupon.title,
    description: coupon.description,
    url: CANONICAL,
    seller: {
      "@id": "https://www.yasisland.com/#brand",
    },
  },
}));

const yasIslandSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": `${CANONICAL}#breadcrumb` },
    },

    {
      "@type": "ItemList",
      "@id": `${CANONICAL}#offerlist`,
      name: "Yas Island Promo Codes & Coupon Codes",
      description: "Latest Yas Island promo codes and offers for theme park tickets, attractions and hotel packages.",
      url: CANONICAL,
      numberOfItems: YAS_ISLAND_COUPONS.length,
      itemListElement: storeOffers,
    },

    {
      "@type": "WebSite",
      "@id": "https://www.couponsbit.us/#website",
      url: "https://www.couponsbit.us",
      name: "Couponsbit",
      description: "Couponsbit is one of the best coupon websites offering verified coupons, deals, and coupon help for top brands worldwide.",
      inLanguage: "en-US",
      publisher: { "@id": "https://www.couponsbit.us/#organization" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/#organization",
      name: "Couponsbit",
      url: "https://www.couponsbit.us",
      logo: { "@type": "ImageObject", url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/couponsbit-logo_kxqyir.webp", width: 200, height: 60 },
      contactPoint: { "@type": "ContactPoint", contactType: "Customer Support", availableLanguage: "English" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.yasisland.com/#brand",
      name: "Yas Island",
      url: "https://www.yasisland.com",
      logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788248210/yas-island-logo_krotjw.webp",
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Yas Island Coupons", item: CANONICAL },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Yas Island?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yas Island is Abu Dhabi's leisure and entertainment island, home to Ferrari World, Yas Waterworld, SeaWorld Abu Dhabi, Warner Bros. World, and the Yas Marina F1 Circuit.",
          },
        },
        {
          "@type": "Question",
          name: "Does Yas Island offer promo codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Yas Island runs promotions such as multi-park ticket offers, hotel & stay packages, and promotional discount codes on eligible experiences and bookings.",
          },
        },
        {
          "@type": "Question",
          name: "What is a Yas Island promo code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Yas Island promo code is a promotional code that may provide a discount or special offer on eligible Yas Island products, tickets, experiences, or bookings.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Yas Island promo codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can check Couponsbit for available Yas Island discount codes, coupons, promo codes, ticket deals, and other offers before booking.",
          },
        },
        {
          "@type": "Question",
          name: "What attractions are available on Yas Island?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yas Island is home to Ferrari World Yas Island, Warner Bros. World Yas Island, Yas Waterworld, and SeaWorld Yas Island.",
          },
        },
        {
          "@type": "Question",
          name: "Can I visit multiple Yas Island theme parks on one ticket?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Visitors can choose from individual attraction tickets or multi-park tickets covering Ferrari World, Yas Waterworld, Warner Bros. World, and SeaWorld Abu Dhabi.",
          },
        },
        {
          "@type": "Question",
          name: "Does Yas Island offer hotel packages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Yas Island offers packages combining hotel stays with theme park tickets, event passes, and attraction access.",
          },
        },
        {
          "@type": "Question",
          name: "Can I stay at a hotel on Yas Island?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Yas Island has multiple hotels, allowing visitors to stay close to the theme parks, restaurants, shopping, and other attractions.",
          },
        },
        {
          "@type": "Question",
          name: "Does Yas Island have an annual pass?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Yas Island currently offers annual pass options with year-round access benefits and additional privileges, subject to applicable terms and blackout dates.",
          },
        },
        {
          "@type": "Question",
          name: "What are the benefits of a Yas Annual Pass?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Benefits vary by tier but can include unlimited park access, restaurant discounts, retail discounts, family and friend ticket benefits, selected experience discounts, and other island-wide privileges.",
          },
        },
        {
          "@type": "Question",
          name: "Does Yas Island offer dining discounts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Selected Yas Annual Pass tiers currently include discounts at participating restaurants and cafés. The exact benefits vary by pass tier and current terms.",
          },
        },
        {
          "@type": "Question",
          name: "Is Yas Island suitable for children?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Yas Island offers several family-oriented attractions, including Warner Bros. World, Yas Waterworld, SeaWorld, and selected family-friendly experiences at Ferrari World.",
          },
        },
        {
          "@type": "Question",
          name: "Does Yas Island have a beach?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Yas Beach is one of the island's main leisure attractions, and selected annual-pass holders can receive beach-related benefits under the current program.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use a Yas Island promo code on every attraction?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. Promotional codes and offers can have restrictions regarding specific attractions, ticket types, travel dates, or booking conditions. Always check the terms before purchasing.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers.",
          },
        },
      ],
    },
  ],
};

export default function YasIslandStorePage() {
  return (
    <Suspense fallback={null}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(yasIslandSchema) }} />
      <YasIslandCouponsContent />
    </Suspense>
  );
}
