import type { Metadata } from "next";
import { Suspense } from "react";
import DoreAndRoseCouponsContent from "./_components/StoreCouponsContent";
import { DORE_AND_ROSE_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Dore & Rose Promo Code: Get up to 65% Off | Nov 2026",
  },
  description:
    "Save up to 65% with a Dore & Rose Promo Code or shop a Dore & Rose Discount Code for the Cooling Sleep Bundle from $121.95. Verified Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/dore-and-rose-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/dore-and-rose-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/dore-and-rose-promo-code",
      "en-IN": "https://www.couponsbit  .us/stores/dore-and-rose-promo-code",
      "x-default": "https://www.couponsbit.us/stores/dore-and-rose-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/dore-and-rose-promo-code",
    title: "Dore & Rose Promo Code: Get up to 65% Off | Nov 2026",
    description:
      "Save up to 65% with a Dore & Rose Promo Code or shop a Dore & Rose Discount Code for the Cooling Sleep Bundle from $121.95. Verified Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/dore-and-rose-logo_jsa9ki.webp",
        width: 1200,
        height: 630,
        alt: "Dore & Rose Promo Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dore & Rose Promo Code: Get up to 65% Off | Nov 2026",
    description:
      "Save up to 65% with a Dore & Rose Promo Code or shop a Dore & Rose Discount Code for the Cooling Sleep Bundle from $121.95. Verified Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1786949027/dore-and-rose-logo_jsa9ki.webp"],
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

const doreAndRoseSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/dore-and-rose-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/dore-and-rose-promo-code",
      name: "Dore & Rose Promo Code: Get up to 65% Off | Nov 2026",
      description:
        "Save up to 65% with a Dore & Rose Promo Code or shop a Dore & Rose Discount Code for the Cooling Sleep Bundle from $121.95. Verified Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/dore-and-rose-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/dore-and-rose-promo-code#offerlist",
      name: "Dore & Rose Promo Codes & Promo Codes",
      description: "Latest Dore & Rose promo codes and offers for silk eye masks, pillowcases, pajama sets and bedding.",
      url: "https://www.couponsbit.us/stores/dore-and-rose-promo-code",
      numberOfItems: DORE_AND_ROSE_COUPONS.length,
      itemListElement: DORE_AND_ROSE_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Offer", name: c.title, description: c.description, url: "https://www.couponsbit.us/stores/dore-and-rose-promo-code", seller: { "@type": "Organization", name: "Dore & Rose", url: "https://doreandrose.com" } },
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
      "@id": "https://www.couponsbit.us/stores/dore-and-rose-promo-code#brand",
      name: "Dore & Rose",
      url: "https://doreandrose.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/dore-and-rose-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Dore & Rose Coupons", item: "https://www.couponsbit.us/stores/dore-and-rose-promo-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/dore-and-rose-promo-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How Can I Save Money at Dore & Rose?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check CouponsBit for available Dore & Rose coupon codes, then compare those offers with current sale prices and bundle promotions on the brand's website."
      }
    },
    {
      "@type": "Question",
      "name": "Where Should I Look for a Dore & Rose Promo Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CouponsBit lists Dore & Rose promo codes, discounts, and other available offers. Checking before checkout can help you identify potential savings."
      }
    },
    {
      "@type": "Question",
      "name": "What Products Does Dore & Rose Sell?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dore & Rose specializes in sleepwear and bedtime products. Its range includes pajamas, silk sleepwear, pillowcases, sleep masks, bonnets, scrunchies, duvet covers, cooling products, children's sleepwear, travel accessories, and bundles."
      }
    },
    {
      "@type": "Question",
      "name": "Are Dore & Rose Pajamas Available in Silk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The brand offers premium silk pajama sets made from Mulberry Silk, including long and short styles."
      }
    },
    {
      "@type": "Question",
      "name": "Does Dore & Rose Offer Sale Prices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Dore & Rose periodically discounts selected products and runs promotional campaigns. The U.S. website currently features a mid-season promotion with up to 40% off selected bundles."
      }
    },
    {
      "@type": "Question",
      "name": "What Is the Free Shipping Threshold at Dore & Rose?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The U.S. store currently advertises free shipping for orders totaling $80 or more. Orders below that amount may qualify for paid standard or express shipping options."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Buy Gifts From Dore & Rose?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Pajamas, silk pillowcases, sleep masks, bonnets, and curated bundles can all work as gift options. Some products also have gift-friendly packaging."
      }
    },
    {
      "@type": "Question",
      "name": "Does CouponsBit Charge to Use Its Coupon Listings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. CouponsBit is free to use. You can browse available Dore & Rose coupons, promotional offers, and deals without paying a fee."
      }
    }
  ]
},
  ],
};

export default function DoreAndRoseStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(doreAndRoseSchema) }} />
      <Suspense fallback={null}>
        <DoreAndRoseCouponsContent />
      </Suspense>
    </>
  );
}
