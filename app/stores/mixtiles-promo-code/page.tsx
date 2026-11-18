import type { Metadata } from "next";
import { Suspense } from "react";
import { MIXTILES_COUPONS } from "./_components/offers";
import MixtilesCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: {
    absolute: "Mixtiles Promo Code: Up to 77% OFF | Nov 2026",
  },
  description:
    "Mixtiles Promo Code saves up to 77% on select items and Wild Visuals from $164.25. Mixtiles Discount Code has verified Nov 2026 savings. Shop now.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/mixtiles-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/mixtiles-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/mixtiles-promo-code",
      "en-SG": "https://www.couponsbit.us/stores/mixtiles-promo-code",
      "x-default": "https://www.couponsbit.us/stores/mixtiles-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/mixtiles-promo-code",
    title: "Mixtiles Promo Code: Up to 77% OFF | Nov 2026",
    description:
      "Mixtiles Promo Code saves up to 77% on select items and Wild Visuals from $164.25. Mixtiles Discount Code has verified Nov 2026 savings. Shop now.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1793338496/mixtiles-logo_xrh8pf.webp",
        width: 1200,
        height: 630,
        alt: "Mixtiles Promo Code & Discount Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mixtiles Promo Code: Up to 77% OFF | Nov 2026",
    description:
      "Mixtiles Promo Code saves up to 77% on select items and Wild Visuals from $164.25. Mixtiles Discount Code has verified Nov 2026 savings. Shop now.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1793338496/mixtiles-logo_xrh8pf.webp"],
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

const mixtilesOffers = MIXTILES_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Mixtiles ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/mixtiles-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Mixtiles", url: "https://www.mixtiles.com" },
}));

const mixtilesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/mixtiles-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/mixtiles-promo-code",
      name: "Mixtiles Promo Code: Up to 77% OFF | Nov 2026",
      description:
        "Mixtiles Promo Code saves up to 77% on select items and Wild Visuals from $164.25. Mixtiles Discount Code has verified Nov 2026 savings. Shop now.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/mixtiles-promo-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/mixtiles-promo-code#brand",
      name: "Mixtiles",
      url: "https://www.mixtiles.com",
      sameAs: ["https://www.facebook.com/Mixtiles", "https://twitter.com/Mixtiles"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/mixtiles-promo-code#offerlist",
      name: "Mixtiles Promo Codes & Discount Codes",
      description: "Latest Mixtiles promo codes, discount codes, and photo tile deals.",
      url: "https://www.couponsbit.us/stores/mixtiles-promo-code",
      numberOfItems: MIXTILES_COUPONS.length,
      itemListElement: mixtilesOffers.map((offer, i) => ({
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
      "@id": "https://www.couponsbit.us/stores/mixtiles-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Mixtiles Coupons", item: "https://www.couponsbit.us/stores/mixtiles-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/mixtiles-promo-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where can I find a Mixtiles promo code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Visit CouponsBit to check available Mixtiles promo codes and discount codes. You can also follow Mixtiles on social media or sign up to their email list for exclusive offers.",
          },
        },
        {
          "@type": "Question",
          name: "How do Mixtiles work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mixtiles are peel-and-stick photo tiles that attach to walls without nails or tools. You upload your photos through the Mixtiles app or website, choose your sizes, and the printed tiles are delivered to your door.",
          },
        },
        {
          "@type": "Question",
          name: "How do I use a Mixtiles promo code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Select your tile pack on Mixtiles.com or through the app, proceed to checkout, and enter your promo code in the discount field. Confirm the saving before completing your order.",
          },
        },
        {
          "@type": "Question",
          name: "Does Mixtiles offer free shipping?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mixtiles offers free shipping promotions for new customers and on qualifying orders. Check CouponsBit or Mixtiles.com for current free shipping offers and any applicable conditions.",
          },
        },
        {
          "@type": "Question",
          name: "What sizes do Mixtiles come in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mixtiles are available in different square sizes. The standard tile size is a popular option for wall displays, but check Mixtiles.com for the current size range and pricing options.",
          },
        },
      ],
    },
  ],
};

export default function MixtilesStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mixtilesSchema) }}
      />
      <Suspense fallback={null}><MixtilesCouponsContent /></Suspense>
    </>
  );
}
