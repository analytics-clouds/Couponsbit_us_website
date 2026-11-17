import type { Metadata } from "next";
import { Suspense } from "react";
import FigsCouponsContent from "./_components/StoreCouponsContent";
import { FIGS_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "FIGS Promo Code: Up to 40% Off Scrubs | Nov 2026",
  },
  description:
    "Save with FIGS Promo Code offers featuring up to 40% off scrubs and scrub tops from $38. Get a verified FIGS Discount Code Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/figs-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/figs-discount-code",
      "x-default": "https://www.couponsbit.us/stores/figs-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/figs-discount-code",
    title: "FIGS Promo Code: Up to 40% Off Scrubs | Nov 2026",
    description:
      "Save with FIGS Promo Code offers featuring up to 40% off scrubs and scrub tops from $38. Get a verified FIGS Discount Code Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789535819/figs_discount_code_p5ah56.webp",
        width: 1200,
        height: 630,
        alt: "FIGS Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FIGS Promo Code: Up to 40% Off Scrubs | Nov 2026",
    description:
      "Save with FIGS Promo Code offers featuring up to 40% off scrubs and scrub tops from $38. Get a verified FIGS Discount Code Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789535819/figs_discount_code_p5ah56.webp"],
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

const storeOffers = FIGS_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `FIGS ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/figs-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "FIGS", url: "https://www.wearfigs.com" },
}));

const figsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/figs-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/figs-discount-code",
      name: "FIGS Promo Code: Up to 40% Off Scrubs | Nov 2026",
      description:
        "Save with FIGS Promo Code offers featuring up to 40% off scrubs and scrub tops from $38. Get a verified FIGS Discount Code Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/figs-discount-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/figs-discount-code#brand",
      name: "FIGS",
      url: "https://www.wearfigs.com",
      sameAs: ["https://www.facebook.com/wearfigs", "https://twitter.com/wearfigs"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/figs-discount-code#offerlist",
      name: "FIGS Discount Codes & Coupon Codes",
      description: "Latest FIGS discount codes and offers on medical apparel.",
      url: "https://www.couponsbit.us/stores/figs-discount-code",
      numberOfItems: FIGS_COUPONS.length,
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
      "@id": "https://www.couponsbit.us/stores/figs-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "FIGS Coupons", item: "https://www.couponsbit.us/stores/figs-discount-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/figs-discount-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does FIGS offer discount codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FIGS offers promotional opportunities and discounts from time to time. The availability and terms can change, so check CouponsBit for current offers before placing an order."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find a FIGS discount code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check CouponsBit for available FIGS discount codes, coupon offers, and promotions. Make sure you review the terms of an offer before using it."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a FIGS discount code on sale items?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the individual promotion. Some codes may have exclusions or may not apply to products already included in another promotion."
          }
        },
        {
          "@type": "Question",
          "name": "Why isn't my FIGS discount code working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A code may fail because it has expired, doesn't apply to the products in your cart, has eligibility requirements, or cannot be combined with another promotion. Check the specific terms of the offer before trying again."
          }
        },
        {
          "@type": "Question",
          "name": "Does FIGS offer student discounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FIGS currently promotes a student offer through its medical student collection. Eligibility and terms can change, so students should check the current requirements before purchasing."
          }
        },
        {
          "@type": "Question",
          "name": "What does FIGS sell?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FIGS sells healthcare apparel including scrub tops, scrub pants, scrub sets, underscrubs, jackets, outerwear, footwear, accessories, and other medical workwear for healthcare professionals."
          }
        },
        {
          "@type": "Question",
          "name": "Does FIGS sell maternity scrubs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. FIGS' women's collection currently includes maternity scrub tops, jogger pants, leggings, and straight-leg scrub pants."
          }
        },
        {
          "@type": "Question",
          "name": "Does FIGS offer men's medical uniforms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. FIGS has a dedicated men's scrub collection featuring tops, pants, jackets, sets, and other medical apparel in multiple fits and colors."
          }
        },
        {
          "@type": "Question",
          "name": "What is FIONx™ fabric?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FIONx™ is FIGS' proprietary fabric technology used in its scrubs. FIGS describes the fabric as soft, moisture-wicking, anti-wrinkle, odor-resistant, and equipped with four-way stretch."
          }
        }
      ]
    },
  ],
};

export default function FigsStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(figsSchema) }} />
      <Suspense fallback={null}>
        <FigsCouponsContent />
      </Suspense>
    </>
  );
}
