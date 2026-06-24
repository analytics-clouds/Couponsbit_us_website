import type { Metadata } from "next";
import StoresPageContent from "./_components/StoresPageContent";

export const metadata: Metadata = {
  title: "Coupon Codes for All Stores – Verified Promo Codes 2026",
  description:
    "Browse verified coupon codes & promo codes for 200+ top online stores. Find the best deals and discounts across fashion, travel, electronics, beauty & more.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores",
    languages: {
      "en-US": "https://www.couponsbit.us/stores",
      "x-default": "https://www.couponsbit.us/stores",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores",
    title: "Coupon Codes for All Stores – Verified Promo Codes 2026",
    description:
      "Browse verified coupon codes & promo codes for 200+ top online stores. Find the best deals and discounts across fashion, travel, electronics, beauty & more.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://www.couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Coupon Codes for All Stores – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Coupon Codes for All Stores – Verified Promo Codes 2026",
    description:
      "Browse verified coupon codes & promo codes for 200+ top online stores. Find the best deals and discounts across fashion, travel, electronics, beauty & more.",
    images: ["https://www.couponsbit.us/og-image.png"],
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

const storesPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // ✅ CollectionPage — correct type for a listing/directory page
    {
      "@type": "CollectionPage",
      "@id": "https://www.couponsbit.us/stores#webpage",
      url: "https://www.couponsbit.us/stores",
      name: "Coupon Codes for All Stores – Verified Promo Codes 2026",
      description:
        "Browse verified coupon codes & promo codes for 200+ top online stores. Find the best deals and discounts across fashion, travel, electronics, beauty & more.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores#breadcrumb",
      },
    },

    // ✅ ItemList — tells Google this page contains a directory of stores
    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores#storelist",
      name: "All Stores – Coupon Codes & Promo Codes",
      description:
        "A complete directory of 200+ top online stores with verified coupon codes, promo codes and deals.",
      url: "https://www.couponsbit.us/stores",
      numberOfItems: 200,
      itemListOrder: "https://schema.org/ItemListUnordered",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "WebPage",
            name: "StubHub Coupon Codes",
            url: "https://www.couponsbit.us/stores/stubhub-coupon-code",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "WebPage",
            name: "Viagogo Coupon Codes",
            url: "https://www.couponsbit.us/stores/viagogo-coupon-code",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "WebPage",
            name: "LATAM Airlines Coupon Codes",
            url: "https://www.couponsbit.us/stores/latam-airlines-coupon-code",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "WebPage",
            name: "Rayneo Coupon Codes",
            url: "https://www.couponsbit.us/stores/rayneo-coupon-code",
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "WebPage",
            name: "Driffle Coupon Codes",
            url: "https://www.couponsbit.us/stores/driffle-coupon-code",
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "WebPage",
            name: "Lyca Mobile Coupon Codes",
            url: "https://www.couponsbit.us/stores/lyca-mobile-coupon-code",
          },
        },
        {
          "@type": "ListItem",
          position: 7,
          item: {
            "@type": "WebPage",
            name: "Reolink Coupon Codes",
            url: "https://www.couponsbit.us/stores/reolink-coupon-code",
          },
        },
        {
          "@type": "ListItem",
          position: 8,
          item: {
            "@type": "WebPage",
            name: "Envato Elements Coupon Codes",
            url: "https://www.couponsbit.us/stores/envato-elements-coupon-code",
          },
        },
        {
          "@type": "ListItem",
          position: 9,
          item: {
            "@type": "WebPage",
            name: "Sintra Coupon Codes",
            url: "https://www.couponsbit.us/stores/sintra-coupon-code",
          },
        },
        {
          "@type": "ListItem",
          position: 10,
          item: {
            "@type": "WebPage",
            name: "Bluehost Coupon Codes",
            url: "https://www.couponsbit.us/stores/bluehost-coupon-code",
          },
        },
        // ← add remaining stores here following same pattern
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://www.couponsbit.us/#website",
      url: "https://www.couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is one of the best coupon websites offering verified coupons, deals, and coupon help for top brands worldwide.",
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
      },
    },

    // ✅ 2-level BreadcrumbList — Home → Stores (no 3rd level, this IS the listing)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores#breadcrumb",
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
          name: "All Stores",
          item: "https://www.couponsbit.us/stores",
        },
      ],
    },
  ],
};

export default function StoresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(storesPageSchema),
        }}
      />
      <StoresPageContent />
    </>
  );
}