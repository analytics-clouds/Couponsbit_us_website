import type { Metadata } from "next";
import { Suspense } from "react";
import ConverseCouponsContent from "./_components/StoreCouponsContent";
import { CONVERSE_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Converse Promo Code: Save 50% on Leather Platforms | Nov 2026",
  },
  description:
    "Save with a Converse Promo Code and Converse Discount Code. Get 50% off Chuck Taylor Leather Platform and 40% off Chuck Taylor Dainty Canvas. Verified Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/converse-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/converse-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/converse-promo-code",
      "en-SG": "https://www.couponsbit.us/stores/converse-promo-code",
      "x-default": "https://www.couponsbit.us/stores/converse-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/converse-promo-code",
    title: "Converse Promo Code: Save 50% on Leather Platforms | Nov 2026",
    description:
      "Save with a Converse Promo Code and Converse Discount Code. Get 50% off Chuck Taylor Leather Platform and 40% off Chuck Taylor Dainty Canvas. Verified Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1793338495/converse-logo_zpgzpr.webp",
        width: 1200,
        height: 630,
        alt: "Converse Promo Code & Discount Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Converse Promo Code: Save 50% on Leather Platforms | Nov 2026",
    description:
      "Save with a Converse Promo Code and Converse Discount Code. Get 50% off Chuck Taylor Leather Platform and 40% off Chuck Taylor Dainty Canvas. Verified Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1793338495/converse-logo_zpgzpr.webp"],
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

const converseOffers = CONVERSE_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Converse ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/converse-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Converse", url: "https://www.converse.com" },
}));

const converseSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/converse-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/converse-promo-code",
      name: "Converse Promo Code: Save 50% on Leather Platforms | Nov 2026",
      description:
        "Save with a Converse Promo Code and Converse Discount Code. Get 50% off Chuck Taylor Leather Platform and 40% off Chuck Taylor Dainty Canvas. Verified Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/converse-promo-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/converse-promo-code#brand",
      name: "Converse",
      url: "https://www.converse.com",
      sameAs: ["https://www.facebook.com/Converse", "https://twitter.com/Converse"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/converse-promo-code#offerlist",
      name: "Converse Promo Codes & Discount Codes",
      description: "Latest Converse promo codes, discount codes, and sneaker deals.",
      url: "https://www.couponsbit.us/stores/converse-promo-code",
      numberOfItems: CONVERSE_COUPONS.length,
      itemListElement: converseOffers.map((offer, i) => ({
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
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/couponsbit-logo_kxqyir.webp",
        width: 200,
        height: 60,
      },
      contactPoint: { "@type": "ContactPoint", contactType: "Customer Support", availableLanguage: "English" },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/converse-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Converse Coupons", item: "https://www.couponsbit.us/stores/converse-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/converse-promo-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where can I find a Converse promo code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Visit CouponsBit to check available Converse promo codes and discount codes. You can also explore Converse.com directly for current sale events and special offers.",
          },
        },
        {
          "@type": "Question",
          name: "Does Converse offer student discounts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Converse offers student discounts through eligible verification programmes. Check Converse.com or CouponsBit for the latest student offer details and eligibility requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How do I use a Converse promo code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Add your items to the Converse cart, proceed to checkout, and enter your promo code in the designated discount field. The discount will apply if the code is valid and the order meets the required conditions.",
          },
        },
        {
          "@type": "Question",
          name: "Does Converse offer free shipping?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Converse offers free standard shipping on qualifying orders. Check the current minimum order value and any applicable exclusions on Converse.com.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Converse outlet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Converse outlet features discounted sneakers, apparel and accessories from previous collections. Savings in the outlet section can go up to 60% or more, depending on current promotions.",
          },
        },
      ],
    },
  ],
};

export default function ConverseStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(converseSchema) }}
      />
      <Suspense fallback={null}><ConverseCouponsContent /></Suspense>
    </>
  );
}
