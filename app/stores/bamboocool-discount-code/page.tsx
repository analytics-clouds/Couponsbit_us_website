import type { Metadata } from "next";
import { Suspense } from "react";
import BamboocoolCouponsContent from "./_components/StoreCouponsContent";
import { BAMBOOCOOL_COUPONS } from "./_components/offers";

const TITLE = "BambooCool Promo Code: Up to 25% Off + Polo Shirt from $27.29 | Nov 2026";
const DESCRIPTION = "Use the latest BambooCool promo code and discount code to get up to 25% off the Summer Collection or shop the Men's Polo Shirt from $27.29. Verified offers for Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/bamboocool-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/bamboocool-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/bamboocool-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/bamboocool-discount-code",
      "x-default": "https://www.couponsbit.us/stores/bamboocool-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/bamboocool-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787205194/bamboocool-logo_pzkzgu.webp",
        width: 1200,
        height: 630,
        alt: "Bamboocool Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787205194/bamboocool-logo_pzkzgu.webp"],
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
    language: "en-US",
  },
};

const bamboocoolSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/bamboocool-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/bamboocool-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/bamboocool-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/bamboocool-discount-code#offerlist",
      name: "Bamboocool Discount Codes & Coupon Codes",
      description: "Latest Bamboocool discount codes and offers for bamboo apparel and sleepwear.",
      url: "https://www.couponsbit.us/stores/bamboocool-discount-code",
      numberOfItems: BAMBOOCOOL_COUPONS.length,
      itemListElement: BAMBOOCOOL_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/bamboocool-discount-code",
          seller: { "@type": "Organization", name: "Bamboocool", url: "https://bamboocoolapparel.com" },
        },
      })),
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
      "@id": "https://www.couponsbit.us/stores/bamboocool-discount-code#brand",
      name: "BambooCool",
      url: "https://bamboocoolapparel.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/bamboocool-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Bamboocool Coupons", item: "https://www.couponsbit.us/stores/bamboocool-discount-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/target-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Target?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Target is one of the largest retail chains in the United States, offering groceries, electronics, clothing, beauty products, home goods, toys, pet supplies, and much more through its stores and online platform."
      }
    },
    {
      "@type": "Question",
      "name": "What is Target Circle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Target Circle is Target's free loyalty program that provides members with automatic deals, personalized offers, rewards, and exclusive member benefits."
      }
    },
    {
      "@type": "Question",
      "name": "What products can I buy at Target?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Target sells products across categories including groceries, home décor, electronics, furniture, apparel, beauty, baby products, toys, pet supplies, and household essentials."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find a Target discount code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can find the latest Target discount code, Target voucher, Target promo code, and Target coupon code on CouponsBit before placing your order."
      }
    },
    {
      "@type": "Question",
      "name": "Does Target offer online shopping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Customers can shop online through the Target website or app and choose shipping, in-store pickup, Drive Up, or same-day delivery for eligible orders."
      }
    },
    {
      "@type": "Question",
      "name": "Is CouponsBit free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. CouponsBit is completely free and helps shoppers discover verified discount codes, vouchers, promo codes, and coupon codes from trusted global brands."
      }
    }
  ]
},
  ],
};

export default function BamboocoolStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bamboocoolSchema) }} />
      <Suspense fallback={null}>
        <BamboocoolCouponsContent />
      </Suspense>
    </>
  );
}
