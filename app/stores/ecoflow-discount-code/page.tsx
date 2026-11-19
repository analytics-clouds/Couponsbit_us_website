import type { Metadata } from "next";
import { Suspense } from "react";
import EcoFlowContent from "./_components/StoreCouponsContent";
import { ECOFLOW_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "EcoFlow Promo Code: Up to 57% Off Power Stations | Nov 2026",
  },
  description:
    "Use an EcoFlow Promo Code and EcoFlow Discount Code to save up to 57% on power stations and 35% on DELTA 3 Max Plus Battery. Verified Nov 2026 offers. Save now.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/ecoflow-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/ecoflow-discount-code",
      "x-default": "https://www.couponsbit.us/stores/ecoflow-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/ecoflow-discount-code",
    title: "EcoFlow Promo Code: Up to 57% Off Power Stations | Nov 2026",
    description:
      "Use an EcoFlow Promo Code and EcoFlow Discount Code to save up to 57% on power stations and 35% on DELTA 3 Max Plus Battery. Verified Nov 2026 offers. Save now.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1790831304/ecoflow_bc7yqs.webp",
        width: 1200,
        height: 630,
        alt: "EcoFlow Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EcoFlow Promo Code: Up to 57% Off Power Stations | Nov 2026",
    description:
      "Use an EcoFlow Promo Code and EcoFlow Discount Code to save up to 57% on power stations and 35% on DELTA 3 Max Plus Battery. Verified Nov 2026 offers. Save now.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1790831304/ecoflow_bc7yqs.webp"],
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

const ecoflowSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/ecoflow-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/ecoflow-discount-code",
      name: "EcoFlow Promo Code: Up to 57% Off Power Stations | Nov 2026",
      description:
        "Use an EcoFlow Promo Code and EcoFlow Discount Code to save up to 57% on power stations and 35% on DELTA 3 Max Plus Battery. Verified Nov 2026 offers. Save now.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/ecoflow-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/ecoflow-discount-code#offerlist",
      name: "EcoFlow Discount Codes & Coupon Codes",
      description: "Latest EcoFlow discount codes and offers.",
      url: "https://www.couponsbit.us/stores/ecoflow-discount-code",
      numberOfItems: ECOFLOW_COUPONS.length,
      itemListElement: ECOFLOW_COUPONS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.description,
          url: "https://www.couponsbit.us/stores/ecoflow-discount-code",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "EcoFlow", url: "https://www.ecoflow.com" },
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
      "@id": "https://www.couponsbit.us/stores/ecoflow-discount-code#brand",
      name: "EcoFlow",
      url: "https://www.ecoflow.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/ecoflow-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "EcoFlow Coupons", item: "https://www.couponsbit.us/stores/ecoflow-discount-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/ecoflow-discount-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can I find an EcoFlow Global discount code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check the EcoFlow Global page on CouponsBit for currently available discount codes, coupons, and promotional offers. Always review the offer details before applying a code."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use an EcoFlow Global discount code on every product?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Some promotional codes may have product exclusions or other conditions. Check the specific terms of the offer to determine whether your selected products qualify."
          }
        },
        {
          "@type": "Question",
          "name": "Why isn't my EcoFlow Global coupon code working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A coupon may not work if it has expired, has usage restrictions, applies only to selected products, or requires a minimum purchase. Check the promotion's terms before trying another offer."
          }
        },
        {
          "@type": "Question",
          "name": "Does EcoFlow Global offer deals without coupon codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, promotional savings don't always require a code. EcoFlow Global may offer product discounts, bundles, seasonal promotions, or other deals where the reduced price is applied automatically."
          }
        },
        {
          "@type": "Question",
          "name": "Where should I check before buying from EcoFlow Global?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check CouponsBit before completing your purchase to look for the latest EcoFlow Global discount codes, coupons, and deals. Comparing available offers can help you identify a suitable saving opportunity before checkout."
          }
        }
      ]
    },
  ],
};

export default function EcoFlowPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ecoflowSchema) }} />
      <Suspense fallback={null}><EcoFlowContent /></Suspense>
    </>
  );
}
