import type { Metadata } from "next";
import ElectronicsCouponsContent from "./_components/ElectronicsCouponsContent";

export const metadata: Metadata = {
  title: "Electronics Coupon Codes & Promo Codes – Verified Deals 2026",
  description:
    "Find verified electronics coupon codes & promo codes for gadgets, AR glasses, security cameras & smart devices. Best electronics deals & discounts on Couponsbit.",

  alternates: {
    canonical: "https://couponsbit.us/categories/electronics",
    languages: {
      "en-US": "https://couponsbit.us/categories/electronics",
      "x-default": "https://couponsbit.us/categories/electronics",
    },
  },

  openGraph: {
    type: "website",
    url: "https://couponsbit.us/categories/electronics",
    title: "Electronics Coupon Codes & Promo Codes – Verified Deals 2026",
    description:
      "Find verified electronics coupon codes & promo codes for gadgets, AR glasses, security cameras & smart devices. Best electronics deals & discounts on Couponsbit.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Electronics Coupon Codes & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Electronics Coupon Codes & Promo Codes – Verified Deals 2026",
    description:
      "Find verified electronics coupon codes & promo codes for gadgets, AR glasses, security cameras & smart devices. Best electronics deals & discounts on Couponsbit.",
    images: ["https://couponsbit.us/og-image.png"],
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
};

const electronicsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // ✅ CollectionPage — correct for a category listing page
    {
      "@type": "CollectionPage",
      "@id": "https://couponsbit.us/categories/electronics#webpage",
      url: "https://couponsbit.us/categories/electronics",
      name: "Electronics Coupon Codes & Promo Codes – Verified Deals 2026",
      description:
        "Find verified electronics coupon codes & promo codes for gadgets, AR glasses, security cameras & smart devices. Best electronics deals & discounts on Couponsbit.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/categories/electronics#breadcrumb",
      },
    },

    // ✅ ItemList — electronics stores listed under this category
    {
      "@type": "ItemList",
      "@id": "https://couponsbit.us/categories/electronics#storelist",
      name: "Electronics Stores – Coupon Codes & Promo Codes",
      description:
        "Verified coupon codes and promo codes for top electronics stores including Rayneo, Reolink and more.",
      url: "https://couponsbit.us/categories/electronics",
      numberOfItems: 2,
      itemListOrder: "https://schema.org/ItemListUnordered",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "WebPage",
            name: "Rayneo Coupon Codes",
            url: "https://couponsbit.us/stores/rayneo",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "WebPage",
            name: "Reolink Coupon Codes",
            url: "https://couponsbit.us/stores/reolink",
          },
        },
        // ← add more electronics stores here as you onboard them
      ],
    },

    // ✅ WebSite — required on every page for entity consistency
    {
      "@type": "WebSite",
      "@id": "https://couponsbit.us/#website",
      url: "https://couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is one of the best coupon websites offering verified coupons, deals, and coupon help for top brands worldwide.",
      inLanguage: "en-US",
      publisher: {
        "@id": "https://couponsbit.us/#organization",
      },
    },

    // ✅ Organization — required on every page for E-E-A-T signals
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
      },
    },

    // ✅ 3-level BreadcrumbList — Home → Categories → Electronics
    {
      "@type": "BreadcrumbList",
      "@id": "https://couponsbit.us/categories/electronics#breadcrumb",
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
          name: "Categories",
          item: "https://couponsbit.us/categories",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Electronics",
          item: "https://couponsbit.us/categories/electronics",
        },
      ],
    },
  ],
};

export default function ElectronicsCategoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(electronicsSchema),
        }}
      />
      <ElectronicsCouponsContent />
    </>
  );
}