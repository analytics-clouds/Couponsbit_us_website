import type { Metadata } from "next";
import StoresPageContent from "./_components/StoresPageContent";
import { allStores } from "@/lib/stores-data";

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
      numberOfItems: allStores.length,
      itemListOrder: "https://schema.org/ItemListUnordered",
      itemListElement: allStores.map((store, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "WebPage",
          name: `${store.name} Discount Codes`,
          url: `https://www.couponsbit.us/stores/${store.id}`,
        },
      })),
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