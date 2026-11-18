import type { Metadata } from "next";
import { Suspense } from "react";
import HokaCouponsContent from "./_components/StoreCouponsContent";
import { HOKA_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "HOKA Promo Code: Up to 50% Off Sale Items | Nov 2026",
  },
  description:
    "Save with a HOKA Promo Code and HOKA Discount Code. Get up to 50% off sale items and 30% off Ora Athletic Slide with verified Nov 2026 deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/hoka-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/hoka-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/hoka-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/hoka-coupon-code",
    title: "HOKA Promo Code: Up to 50% Off Sale Items | Nov 2026",
    description:
      "Save with a HOKA Promo Code and HOKA Discount Code. Get up to 50% off sale items and 30% off Ora Athletic Slide with verified Nov 2026 deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789994531/hoka-logo_zrq4ot.webp",
        width: 1200,
        height: 630,
        alt: "HOKA Coupon Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HOKA Promo Code: Up to 50% Off Sale Items | Nov 2026",
    description:
      "Save with a HOKA Promo Code and HOKA Discount Code. Get up to 50% off sale items and 30% off Ora Athletic Slide with verified Nov 2026 deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789994531/hoka-logo_zrq4ot.webp"],
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
  other: { "geo.region": "US", "geo.country": "US", language: "en-US" },
};

const hokaOffers = HOKA_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `HOKA ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/hoka-coupon-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "HOKA", url: "https://www.hoka.com" },
}));

const hokaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/hoka-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/hoka-coupon-code",
      name: "HOKA Promo Code: Up to 50% Off Sale Items | Nov 2026",
      description:
        "Save with a HOKA Promo Code and HOKA Discount Code. Get up to 50% off sale items and 30% off Ora Athletic Slide with verified Nov 2026 deals.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/hoka-coupon-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/hoka-coupon-code#offerlist",
      name: "HOKA Coupon Codes & Coupon Codes",
      description: "Latest HOKA coupon codes and offers.",
      url: "https://www.couponsbit.us/stores/hoka-coupon-code",
      numberOfItems: HOKA_COUPONS.length,
      itemListElement: hokaOffers.map((offer, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: offer,
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
      "@id": "https://www.couponsbit.us/stores/hoka-coupon-code#brand",
      name: "HOKA",
      url: "https://www.hoka.com",
      sameAs: ["https://en.wikipedia.org/wiki/Hoka_(brand)"],
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/hoka-coupon-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "HOKA Coupons", item: "https://www.couponsbit.us/stores/hoka-coupon-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/hoka-coupon-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does HOKA offer discount codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HOKA runs promotional offers throughout the year, and some promotions may involve discount codes. Availability and eligibility can change, so check current offers before placing an order."
          }
        },
        {
          "@type": "Question",
          "name": "How can I find a HOKA discount code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check CouponsBit for available HOKA discount codes, coupons, and promotional offers. Compare any available code with current HOKA promotions before checkout."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a HOKA discount code on sale items?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "That depends on the specific promotion. Some offers may exclude sale merchandise or selected products. Always check the terms of the code before applying it."
          }
        },
        {
          "@type": "Question",
          "name": "What is HOKA known for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HOKA is known for highly cushioned running footwear and distinctive midsole designs. The brand now offers products for running, trail running, walking, recovery, fitness, outdoor activities, and lifestyle use."
          }
        },
        {
          "@type": "Question",
          "name": "Does HOKA make shoes for walking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. HOKA offers footwear designed for walking as well as running and other activities. Its product categories include walking alongside running, trail running, recovery, and lifestyle footwear."
          }
        },
        {
          "@type": "Question",
          "name": "What is HOKA Bondi used for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Bondi is a highly cushioned HOKA running shoe family. HOKA describes it as one of its most cushioned options and highlights it for comfortable long walks or runs."
          }
        },
        {
          "@type": "Question",
          "name": "What is HOKA Clifton used for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Clifton models are positioned as lightweight everyday running shoes designed to balance cushioning and a smooth ride."
          }
        },
        {
          "@type": "Question",
          "name": "Does HOKA make trail-running shoes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. HOKA has a dedicated trail-running category with models including Speedgoat, Challenger, Mafate, Tecton, and Torrent."
          }
        },
        {
          "@type": "Question",
          "name": "Does HOKA sell apparel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. HOKA's current collections include apparel alongside footwear and accessories."
          }
        },
        {
          "@type": "Question",
          "name": "When should I look for HOKA deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check throughout the year, but seasonal changes, race seasons, major U.S. shopping events such as Black Friday and Cyber Monday, and holiday periods can be useful times to watch for promotions."
          }
        }
      ]
    },
  ],
};

export default function HokaStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hokaSchema) }} />
      <Suspense fallback={null}><HokaCouponsContent /></Suspense>
    </>
  );
}
