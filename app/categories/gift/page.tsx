import type { Metadata } from "next";
import GiftCouponsContent from "./_components/GiftCouponsContent";

export const metadata: Metadata = {
  title: "Gift Discount Codes & Promo Codes – Verified Deals | Nov 2026",
  description:
    "Find verified gift discount codes and promo codes for Nov 2026. Save on personalized gifts, flowers, photo gifts, and more with the latest deals at Couponsbit.",

  alternates: {
    canonical: "https://www.couponsbit.us/categories/gift",
    languages: {
      "en-US": "https://www.couponsbit.us/categories/gift",
      "x-default": "https://www.couponsbit.us/categories/gift",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/categories/gift",
    title: "Gift Discount Codes & Promo Codes – Verified Deals | Nov 2026",
    description:
      "Find verified gift discount codes and promo codes for Nov 2026. Save on personalized gifts, flowers, photo gifts, and more with the latest deals at Couponsbit.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1793604459/gift-category_chorbz.webp",
        width: 1200,
        height: 630,
        alt: "Gift Discount Codes & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gift Discount Codes & Promo Codes – Verified Deals | Nov 2026",
    description:
      "Find verified gift discount codes and promo codes for Nov 2026. Save on personalized gifts, flowers, photo gifts, and more with the latest deals at Couponsbit.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1793604459/gift-category_chorbz.webp"],
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

const giftSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.couponsbit.us/categories/gift#webpage",
      url: "https://www.couponsbit.us/categories/gift",
      name: "Gift Discount Codes & Promo Codes – Verified Deals | Nov 2026",
      description:
        "Find verified gift discount codes and promo codes for Nov 2026. Save on personalized gifts, flowers, photo gifts, and more with the latest deals at Couponsbit.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/categories/gift#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/categories/gift#storelist",
      name: "Gift Stores – Coupon Codes & Promo Codes",
      description: "Verified coupon codes and promo codes for top gift stores.",
      url: "https://www.couponsbit.us/categories/gift",
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
      "@id": "https://www.couponsbit.us/categories/gift#breadcrumb",
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
          name: "Gifts",
          item: "https://www.couponsbit.us/categories/gift",
        },
      ],
    },
  ],
};

export default function GiftCategoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(giftSchema),
        }}
      />
      <GiftCouponsContent />
    </>
  );
}
