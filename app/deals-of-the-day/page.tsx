import type { Metadata } from "next";
import DealsOfTheDayContent from "./_components/DealsOfTheDayContent";

export const metadata: Metadata = {
  title: "Couponsbit Deals of the Day | Today Discount Codes Online",
  description:
    "Shop today's best online deals and today discount codes on Couponsbit. Fresh deals of the day handpicked from 2000+ stores and updated daily at midnight.",

  alternates: {
    canonical: "https://couponsbit.us/deals-of-the-day",
    languages: {
      "en-US": "https://couponsbit.us/deals-of-the-day",
      "x-default": "https://couponsbit.us/deals-of-the-day",
    },
  },

  // ✅ Open Graph
  openGraph: {
    type: "website",
    url: "https://couponsbit.us/deals-of-the-day",
    title: "Couponsbit Deals of the Day | Today Discount Codes Online",
    description:
      "Shop today's best online deals and today discount codes on Couponsbit. Fresh deals of the day handpicked from 2000+ stores and updated daily at midnight.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Couponsbit – Deals of the Day & Today Discount Codes",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Couponsbit Deals of the Day | Today Discount Codes Online",
    description:
      "Shop today's best online deals and today discount codes on Couponsbit. Fresh deals of the day handpicked from 2000+ stores and updated daily at midnight.",
    images: ["https://couponsbit.us/og-image.png"],
    site: "@couponsbit",
  },

  // ✅ Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// ✅ Get today's date dynamically for schema
const today = new Date();
const todayISO = today.toISOString().split("T")[0]; // e.g. 2026-05-27
const tomorrowISO = new Date(today.getTime() + 86400000)
  .toISOString()
  .split("T")[0]; // e.g. 2026-05-28

// ✅ JSON-LD Schema
const dealsOfTheDaySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      // ✅ CollectionPage — correct for a daily deals listing page
      "@type": "CollectionPage",
      "@id": "https://couponsbit.us/deals-of-the-day#collectionpage",
      url: "https://couponsbit.us/deals-of-the-day",
      name: "Couponsbit Deals of the Day | Today Discount Codes Online",
      description:
        "Shop today's best online deals and today discount codes on Couponsbit. Fresh deals of the day handpicked from 2000+ stores and updated daily at midnight.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/deals-of-the-day#breadcrumb",
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".deal-title"],
      },
      mainEntity: {
        "@type": "ItemList",
        name: "Deals of the Day & Today Discount Codes",
        description:
          "Today's handpicked online deals, discount codes, and verified promo codes from 2000+ stores on Couponsbit. Updated daily at midnight.",
        url: "https://couponsbit.us/deals-of-the-day",
        // ✅ Dynamic dates — auto-updates every day, no manual work needed
        startDate: todayISO,
        endDate: tomorrowISO,
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://couponsbit.us/#website",
      url: "https://couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit offers verified deals of the day, today discount codes, and online deals from 2000+ stores updated daily.",
      inLanguage: "en-US",
      publisher: {
        "@id": "https://couponsbit.us/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://couponsbit.us/#organization",
      name: "Couponsbit",
      url: "https://couponsbit.us",
      logo: {
        "@type": "ImageObject",
        url: "https://couponsbit.us/logo.png",
        width: 200,
        height: 60,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        availableLanguage: "English",
        areaServed: "US",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://couponsbit.us/deals-of-the-day#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://couponsbit.us",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Deals of the Day",
          item: "https://couponsbit.us/deals-of-the-day",
        },
      ],
    },
  ],
};

export default function DealsOfTheDayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dealsOfTheDaySchema),
        }}
      />
      <DealsOfTheDayContent />
    </>
  );
}