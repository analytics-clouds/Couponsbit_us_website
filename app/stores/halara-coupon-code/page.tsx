import type { Metadata } from "next";
import { Suspense } from "react";
import HalaraCouponsContent from "./_components/StoreCouponsContent";
import { HALARA_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Halara Promo Code: Up to 80% Off Flash Sale | Nov 2026",
  },
  description:
    "Save with Halara Promo Code offers featuring 80% off flash sale styles and $100 coupon bundle with free shipping. Get verified Halara Discount Code Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/halara-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/halara-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/halara-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/halara-coupon-code",
    title: "Halara Promo Code: Up to 80% Off Flash Sale | Nov 2026",
    description:
      "Save with Halara Promo Code offers featuring 80% off flash sale styles and $100 coupon bundle with free shipping. Get verified Halara Discount Code Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789535819/halara_coupon_code_ujuwnv.webp",
        width: 1200,
        height: 630,
        alt: "Halara Coupon Code & Discount Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halara Promo Code: Up to 80% Off Flash Sale | Nov 2026",
    description:
      "Save with Halara Promo Code offers featuring 80% off flash sale styles and $100 coupon bundle with free shipping. Get verified Halara Discount Code Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789535819/halara_coupon_code_ujuwnv.webp"],
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
  other: { 'geo.region': 'US', 'geo.country': 'US', language: 'en-US' },
};

const storeOffers = HALARA_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Halara ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/halara-coupon-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Halara", url: "https://www.halara.com" },
}));

const halaraSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/halara-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/halara-coupon-code",
      name: "Halara Promo Code: Up to 80% Off Flash Sale | Nov 2026",
      description:
        "Save with Halara Promo Code offers featuring 80% off flash sale styles and $100 coupon bundle with free shipping. Get verified Halara Discount Code Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/halara-coupon-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/halara-coupon-code#brand",
      name: "Halara",
      url: "https://www.halara.com",
      sameAs: ["https://www.facebook.com/halaraofficial", "https://twitter.com/halaraofficial"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/halara-coupon-code#offerlist",
      name: "Halara Coupon Codes & Discount Codes",
      description: "Latest Halara coupon codes and offers on activewear and loungewear.",
      url: "https://www.couponsbit.us/stores/halara-coupon-code",
      numberOfItems: HALARA_COUPONS.length,
      itemListElement: storeOffers.map((offer, i) => ({
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
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/halara-coupon-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Halara Coupons", item: "https://www.couponsbit.us/stores/halara-coupon-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/halara-coupon-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Halara offer coupon codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Halara offers promotional discounts and special deals from time to time. The availability, value, and eligibility of individual offers can change, so check CouponsBit for currently available opportunities before purchasing."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find a Halara coupon code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check CouponsBit for available Halara coupon codes and promotional offers. Always review the terms of an offer before applying it."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a coupon code on sale items?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the specific promotion. Some Halara offers may apply only to selected products, while others can have exclusions or additional requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Why isn't my Halara coupon code working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The code may have expired, may not apply to your selected products, or may require a minimum purchase. Some promotions may also be restricted to specific customers or cannot be combined with another offer."
          }
        },
        {
          "@type": "Question",
          "name": "Does Halara have sales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Halara regularly promotes special offers and deals, although the exact campaigns change. Its official app also advertises exclusive promotions and selected daily deals."
          }
        },
        {
          "@type": "Question",
          "name": "What can I buy from Halara?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Halara sells a broad selection of women's athleisure and everyday clothing, including leggings, exercise dresses, skirts and skorts, tops, sports bras, joggers, golf apparel, outerwear, swimwear, casual dresses, and loungewear."
          }
        },
        {
          "@type": "Question",
          "name": "Is Halara only for workouts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Halara positions its clothing at the intersection of activewear and everyday fashion, so many of its pieces can be styled for casual outings, travel, errands, lounging, and other daily activities."
          }
        }
      ]
    },
  ],
};

export default function HalaraStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(halaraSchema) }} />
      <Suspense fallback={null}>
        <HalaraCouponsContent />
      </Suspense>
    </>
  );
}
