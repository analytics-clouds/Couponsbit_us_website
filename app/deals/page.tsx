import type { Metadata } from "next";
import DealsPageContent from "./_components/DealsPageContent";

export const metadata: Metadata = {
  title: "Couponsbit Deals | Online Deals & Shopping Deals USA Today",
  description:
    "Browse 15,000+ verified online deals and shopping deals USA shoppers love. Find the best coupon websites discounts, flash sales, and exclusive offers daily.",

  alternates: {
    canonical: "https://www.couponsbit.us/deals",
    languages: {
      "en-US": "https://www.couponsbit.us/deals",
      "x-default": "https://www.couponsbit.us/deals",
    },
  },

  // ✅ Open Graph
  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/deals",
    title: "Couponsbit Deals | Online Deals & Shopping Deals USA Today",
    description:
      "Browse 15,000+ verified online deals and shopping deals USA shoppers love. Find the best coupon websites discounts, flash sales, and exclusive offers daily.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://www.couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Couponsbit – Online Deals & Shopping Deals USA",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Couponsbit Deals | Online Deals & Shopping Deals USA Today",
    description:
      "Browse 15,000+ verified online deals and shopping deals USA shoppers love. Find the best coupon websites discounts, flash sales, and exclusive offers daily.",
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
const dealsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      // ✅ CollectionPage — correct type for a listing page of deals
      "@type": "CollectionPage",
      "@id": "https://www.couponsbit.us/deals#collectionpage",
      url: "https://www.couponsbit.us/deals",
      name: "Couponsbit Deals | Online Deals & Shopping Deals USA Today",
      description:
        "Browse 15,000+ verified online deals and shopping deals USA shoppers love. Find the best coupon websites discounts, flash sales, and exclusive offers daily.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/deals#breadcrumb",
      },
      // ✅ ItemList signals to Google this page contains a list of offers
      mainEntity: {
        "@type": "ItemList",
        name: "Online Deals & Shopping Deals USA",
        description:
          "A curated list of verified online deals, shopping deals, and promo codes from the best coupon websites updated daily.",
        url: "https://www.couponsbit.us/deals",
        numberOfItems: 15000,
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.couponsbit.us/#website",
      url: "https://www.couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is one of the best coupon websites offering verified online deals, shopping deals USA shoppers trust, and promo codes updated daily.",
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
      "@id": "https://www.couponsbit.us/deals#breadcrumb",
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
          name: "Deals",
          item: "https://www.couponsbit.us/deals",
        },
      ],
    },
  ],
};

export default function DealsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dealsSchema),
        }}
      />
      <DealsPageContent />
    </>
  );
}