import type { Metadata } from "next";
import DealsOfTheWeekContent from "./_components/DealsOfTheWeekContent";

export const metadata: Metadata = {
  title: "Couponsbit Deals of the Week | Best Deals & Discount Codes",
  description:
    "Discover the best deals this month on Couponsbit. Browse top discount codes this month from 2000+ stores with verified online deals updated daily.",

  alternates: {
    canonical: "https://www.couponsbit.us/deals-of-the-week",
    languages: {
      "en-US": "https://www.couponsbit.us/deals-of-the-week",
      "x-default": "https://www.couponsbit.us/deals-of-the-week",
    },
  },

  // ✅ Open Graph
  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/deals-of-the-week",
    title: "Couponsbit Deals of the Week | Best Deals & Discount Codes",
    description:
      "Discover the best deals this month on Couponsbit. Browse top discount codes this month from 2000+ stores with verified online deals updated daily.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://www.couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Couponsbit – Best Deals of the Week & Top Discount Codes",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Couponsbit Deals of the Week | Best Deals & Discount Codes",
    description:
      "Discover the best deals this month on Couponsbit. Browse top discount codes this month from 2000+ stores with verified online deals updated daily.",
    images: ["https://www.couponsbit.us/og-image.png"],
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

// ✅ JSON-LD Schema
const dealsOfTheWeekSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      // ✅ CollectionPage — correct for a curated deals listing page
      "@type": "CollectionPage",
      "@id": "https://www.couponsbit.us/deals-of-the-week#collectionpage",
      url: "https://www.couponsbit.us/deals-of-the-week",
      name: "Couponsbit Deals of the Week | Best Deals & Discount Codes",
      description:
        "Discover the best deals this month on Couponsbit. Browse top discount codes this month from 2000+ stores with verified online deals updated daily.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/deals-of-the-week#breadcrumb",
      },
      // ✅ SpecialAnnouncement signals time-sensitive curated deals to Google
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".deal-title"],
      },
      mainEntity: {
        "@type": "ItemList",
        name: "Best Deals This Month & Top Discount Codes",
        description:
          "A curated list of the best online deals, top discount codes, and verified promo codes this month from 2000+ stores on Couponsbit.",
        url: "https://www.couponsbit.us/deals-of-the-week",
        // ✅ Update this monthly — reflects how many deals are live this month
        numberOfItems: 500,
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.couponsbit.us/#website",
      url: "https://www.couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is a trusted coupon website offering the best online deals, top discount codes this month, and verified promo codes from 2000+ stores.",
      inLanguage: "en-US",
      publisher: {
        "@id": "https://www.couponsbit.us/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/#organization",
      name: "Couponsbit",
      url: "https://www.couponsbit.us",
      logo: {
        "@type": "ImageObject",
        url: "https://www.couponsbit.us/logo.png",
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
      "@id": "https://www.couponsbit.us/deals-of-the-week#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.couponsbit.us",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Deals of the Week",
          item: "https://www.couponsbit.us/deals-of-the-week",
        },
      ],
    },
  ],
};

export default function DealsOfTheWeekPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dealsOfTheWeekSchema),
        }}
      />
      <DealsOfTheWeekContent />
    </>
  );
}