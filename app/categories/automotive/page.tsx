import type { Metadata } from "next";
import AutomotiveCouponsContent from "./_components/AutomotiveCouponsContent";

export const metadata: Metadata = {
  title: "Automotive Discount Codes & Promo Codes – Verified Deals | Sep 2026",
  description:
    "Find verified automotive discount codes and promo codes for Sep 2026. Save on car parts, accessories, car rentals, tires, and more with the latest automotive deals and discounts at Couponsbit.",

  alternates: {
    canonical: "https://www.couponsbit.us/categories/automotive",
    languages: {
      "en-US": "https://www.couponsbit.us/categories/automotive",
      "x-default": "https://www.couponsbit.us/categories/automotive",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/categories/automotive",
    title: "Automotive Discount Codes & Promo Codes – Verified Deals | Sep 2026",
    description:
      "Find verified automotive discount codes and promo codes for Sep 2026. Save on car parts, accessories, car rentals, tires, and more with the latest automotive deals and discounts at Couponsbit.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://www.couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Automotive Discount Codes & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Automotive Discount Codes & Promo Codes – Verified Deals | Sep 2026",
    description:
      "Find verified automotive discount codes and promo codes for Sep 2026. Save on car parts, accessories, car rentals, tires, and more with the latest automotive deals and discounts at Couponsbit.",
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

const automotiveSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.couponsbit.us/categories/automotive#webpage",
      url: "https://www.couponsbit.us/categories/automotive",
      name: "Automotive Discount Codes & Promo Codes – Verified Deals | Sep 2026",
      description:
        "Find verified automotive discount codes and promo codes for Sep 2026. Save on car parts, accessories, car rentals, tires, and more with the latest automotive deals and discounts at Couponsbit.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/categories/automotive#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/categories/automotive#storelist",
      name: "Automotive Stores – Coupon Codes & Promo Codes",
      description: "Verified coupon codes and promo codes for top automotive stores.",
      url: "https://www.couponsbit.us/categories/automotive",
      numberOfItems: 0,
      itemListOrder: "https://schema.org/ItemListUnordered",
      itemListElement: [],
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

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/categories/automotive#breadcrumb",
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
          name: "Categories",
          item: "https://www.couponsbit.us/categories",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Automotive",
          item: "https://www.couponsbit.us/categories/automotive",
        },
      ],
    },
  ],
};

export default function AutomotiveCategoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(automotiveSchema),
        }}
      />
      <AutomotiveCouponsContent />
    </>
  );
}
