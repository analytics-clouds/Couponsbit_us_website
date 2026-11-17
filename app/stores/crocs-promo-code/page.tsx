import type { Metadata } from "next";
import { Suspense } from "react";
import CrocsCouponsContent from "./_components/StoreCouponsContent";
import { CROCS_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Crocs Promo Code: Up to 75% Off Sitewide | Nov 2026",
  },
  description:
    "Save with Crocs Promo Code offers featuring up to 75% off sitewide and shoes, sandals & Jibbitz from $19.99. Get a verified Crocs Discount Code Nov 2026. ",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/crocs-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/crocs-promo-code",
      "x-default": "https://www.couponsbit.us/stores/crocs-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/crocs-promo-code",
    title: "Crocs Promo Code: Up to 75% Off Sitewide | Nov 2026",
    description:
      "Save with Crocs Promo Code offers featuring up to 75% off sitewide and shoes, sandals & Jibbitz from $19.99. Get a verified Crocs Discount Code Nov 2026. ",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789535819/crocs_promo_code_tx3jlm.webp",
        width: 1200,
        height: 630,
        alt: "Crocs Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Crocs Promo Code: Up to 75% Off Sitewide | Nov 2026",
    description:
      "Save with Crocs Promo Code offers featuring up to 75% off sitewide and shoes, sandals & Jibbitz from $19.99. Get a verified Crocs Discount Code Nov 2026. ",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789535819/crocs_promo_code_tx3jlm.webp"],
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

const storeOffers = CROCS_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Crocs ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/crocs-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Crocs", url: "https://www.crocs.com" },
}));

const crocsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/crocs-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/crocs-promo-code",
      name: "Crocs Promo Code: Up to 75% Off Sitewide | Nov 2026",
      description:
        "Save with Crocs Promo Code offers featuring up to 75% off sitewide and shoes, sandals & Jibbitz from $19.99. Get a verified Crocs Discount Code Nov 2026. ",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/crocs-promo-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/crocs-promo-code#brand",
      name: "Crocs",
      url: "https://www.crocs.com",
      sameAs: ["https://www.facebook.com/crocs", "https://twitter.com/crocs"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/crocs-promo-code#offerlist",
      name: "Crocs Promo Codes & Coupon Codes",
      description: "Latest Crocs promo codes and offers on footwear.",
      url: "https://www.couponsbit.us/stores/crocs-promo-code",
      numberOfItems: CROCS_COUPONS.length,
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
      "@id": "https://www.couponsbit.us/stores/crocs-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Crocs Coupons", item: "https://www.couponsbit.us/stores/crocs-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Crocs offer promo codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Crocs offers promotional codes and other special offers from time to time. The availability and conditions of individual promotions can change, so check for a current offer before purchasing."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find a Crocs promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check CouponsBit for available Crocs promo codes and other promotional offers. Always review the terms of a code before applying it."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use a Crocs promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Add your products to the cart, enter the code in the “Promo or Coupon Code” field, and apply it. Crocs says the discount should appear in the cart when the code is successfully applied."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a promo code on sale items?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the individual promotion. Some codes may have product exclusions or may not be combinable with other promotions. Check the terms of the specific offer before checkout."
          }
        },
        {
          "@type": "Question",
          "name": "Does Crocs have sales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Crocs maintains dedicated sale and deals sections featuring discounted footwear and other products. The styles and promotions change regularly."
          }
        },
        {
          "@type": "Question",
          "name": "Does Crocs have deals on Jibbitz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Crocs regularly features promotions involving Jibbitz and other accessories. Current offers can change, so check the latest deals before purchasing."
          }
        },
        {
          "@type": "Question",
          "name": "What are Jibbitz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jibbitz are customizable shoe charms designed to personalize compatible Crocs footwear. They are available in a wide variety of designs, including characters, sports, animals, food, hobbies, letters, numbers, and more."
          }
        },
        {
          "@type": "Question",
          "name": "Are Crocs good for everyday wear?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Crocs are designed with everyday comfort in mind. The Classic Clog, for example, features lightweight construction, ventilation, a pivoting heel strap, water-friendly properties, and easy cleaning."
          }
        },
        {
          "@type": "Question",
          "name": "Does Crocs have an app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Crocs has an official shopping app, and the brand promotes app-exclusive deals and shopping events."
          }
        }
      ]
    },
  ],
};

export default function CrocsStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crocsSchema) }} />
      <Suspense fallback={null}>
        <CrocsCouponsContent />
      </Suspense>
    </>
  );
}
