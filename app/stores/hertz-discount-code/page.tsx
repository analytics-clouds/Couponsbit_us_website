import type { Metadata } from "next";
import { Suspense } from "react";
import HertzContent from "./_components/StoreCouponsContent";
import { HERTZ_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Hertz Promo Code: Up to 25% Off Car Rentals | Nov 2026",
  },
  description:
    "Hertz Promo Code and Hertz Discount Code offer up to 25% off rentals plus $50 off SUVs and minivans. Grab verified Nov 2026 savings today.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/hertz-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/hertz-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/hertz-discount-code",
      "fr-FR": "https://www.couponsbit.us/stores/hertz-discount-code",
      "es-ES": "https://www.couponsbit.us/stores/hertz-discount-code",
      "it-IT": "https://www.couponsbit.us/stores/hertz-discount-code",
      "de-DE": "https://www.couponsbit.us/stores/hertz-discount-code",
      "cs-CZ": "https://www.couponsbit.us/stores/hertz-discount-code",
      "nl-NL": "https://www.couponsbit.us/stores/hertz-discount-code",
      "nl-BE": "https://www.couponsbit.us/stores/hertz-discount-code",
      "fr-BE": "https://www.couponsbit.us/stores/hertz-discount-code",
      "x-default": "https://www.couponsbit.us/stores/hertz-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/hertz-discount-code",
    title: "Hertz Promo Code: Up to 25% Off Car Rentals | Nov 2026",
    description:
      "Hertz Promo Code and Hertz Discount Code offer up to 25% off rentals plus $50 off SUVs and minivans. Grab verified Nov 2026 savings today.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1791974650/hertz-logo_geobmi.webp",
        width: 1200,
        height: 630,
        alt: "Hertz Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hertz Promo Code: Up to 25% Off Car Rentals | Nov 2026",
    description:
      "Hertz Promo Code and Hertz Discount Code offer up to 25% off rentals plus $50 off SUVs and minivans. Grab verified Nov 2026 savings today.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1791974650/hertz-logo_geobmi.webp"],
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

const hertzSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/hertz-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/hertz-discount-code",
      name: "Hertz Promo Code: Up to 25% Off Car Rentals | Nov 2026",
      description:
        "Hertz Promo Code and Hertz Discount Code offer up to 25% off rentals plus $50 off SUVs and minivans. Grab verified Nov 2026 savings today.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/hertz-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/hertz-discount-code#offerlist",
      name: "Hertz Discount Codes & Coupon Codes",
      description: "Latest Hertz discount codes and offers.",
      url: "https://www.couponsbit.us/stores/hertz-discount-code",
      numberOfItems: HERTZ_COUPONS.length,
      itemListElement: HERTZ_COUPONS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.description,
          url: "https://www.couponsbit.us/stores/hertz-discount-code",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Hertz", url: "https://www.hertz.com" },
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
      "@id": "https://www.couponsbit.us/stores/hertz-discount-code#brand",
      name: "Hertz",
      url: "https://www.hertz.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/hertz-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Hertz Coupons", item: "https://www.couponsbit.us/stores/hertz-discount-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/hertz-discount-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Hertz offer discount codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hertz promotions and special rates can vary by country and booking conditions. Check CouponsBit for available offers before reserving."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use the same Hertz promo code in every country?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No guarantee applies across all markets. Check the terms for your specific rental location and destination."
          }
        },
        {
          "@type": "Question",
          "name": "Is Hertz Gold+ free to join?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Hertz describes Gold+ as a free membership programme, with benefits subject to eligibility and location."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a discount code with Hertz Gold+ benefits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "That depends on the specific offer and rate conditions. Some promotions exclude already-discounted or affiliated rates, so compare the terms before booking."
          }
        }
      ]
    },
  ],
};

export default function HertzPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hertzSchema) }} />
      <Suspense fallback={null}><HertzContent /></Suspense>
    </>
  );
}
