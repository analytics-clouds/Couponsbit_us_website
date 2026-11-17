import type { Metadata } from "next";
import { Suspense } from "react";
import FarfetchCouponsContent from "./_components/StoreCouponsContent";
import { FARFETCH_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Farfetch Promo Code: Up to 75% Off Luxury Styles | Nov 2026",
  },
  description:
    "Save with Farfetch Promo Code: 75% off TechnoMarine watches and women’s accessories from $75. Get a verified Farfetch Discount Code Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/farfetch-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/farfetch-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/farfetch-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/farfetch-promo-code",
      "x-default": "https://www.couponsbit.us/stores/farfetch-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/farfetch-promo-code",
    title: "Farfetch Promo Code: Up to 75% Off Luxury Styles | Nov 2026",
    description:
      "Save with Farfetch Promo Code: 75% off TechnoMarine watches and women’s accessories from $75. Get a verified Farfetch Discount Code Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1788951742/farfetch-logo_c4ik3i.webp",
        width: 1200,
        height: 630,
        alt: "Farfetch Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Farfetch Promo Code: Up to 75% Off Luxury Styles | Nov 2026",
    description:
      "Save with Farfetch Promo Code: 75% off TechnoMarine watches and women’s accessories from $75. Get a verified Farfetch Discount Code Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1788951742/farfetch-logo_c4ik3i.webp"],
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

const storeOffers = FARFETCH_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Farfetch ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/farfetch-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Farfetch", url: "https://www.farfetch.com" },
}));

const farfetchSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/farfetch-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/farfetch-promo-code",
      name: "Farfetch Promo Code: Up to 75% Off Luxury Styles | Nov 2026",
      description:
        "Save with Farfetch Promo Code: 75% off TechnoMarine watches and women’s accessories from $75. Get a verified Farfetch Discount Code Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/farfetch-promo-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/farfetch-promo-code#brand",
      name: "Farfetch",
      url: "https://www.farfetch.com",
      sameAs: ["https://www.facebook.com/farfetch", "https://twitter.com/farfetch"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/farfetch-promo-code#offerlist",
      name: "Farfetch Promo Codes & Coupon Codes",
      description: "Latest Farfetch promo codes and offers on designer fashion.",
      url: "https://www.couponsbit.us/stores/farfetch-promo-code",
      numberOfItems: FARFETCH_COUPONS.length,
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
      "@id": "https://www.couponsbit.us/stores/farfetch-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Farfetch Coupons", item: "https://www.couponsbit.us/stores/farfetch-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/farfetch-promo-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Farfetch offer promo codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Farfetch may offer promotional codes, seasonal campaigns, designer discounts, and other savings opportunities. Availability and eligibility can vary."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find a Farfetch promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check CouponsBit for available Farfetch promo codes, coupon codes, discount offers, vouchers, and fashion promotions before shopping."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use a Farfetch coupon code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Add your selected products to your shopping bag, proceed to checkout, and enter the applicable coupon code in the promotional-code field. Confirm that the discount has been applied before completing your purchase."
          }
        },
        {
          "@type": "Question",
          "name": "Why isn't my Farfetch promo code working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The code may have expired or may not apply to the products in your order. Some promotions can exclude specific designers, sale products, categories, or customer groups."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a Farfetch discount code on sale items?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the individual promotion. Some discount codes may apply to sale products, while others may exclude them. Check the terms of the offer before purchasing."
          }
        },
        {
          "@type": "Question",
          "name": "What does Farfetch sell?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Farfetch offers a wide selection of luxury and designer fashion, including clothing, shoes, handbags, accessories, jewelry, watches, and selected beauty products."
          }
        },
        {
          "@type": "Question",
          "name": "Does Farfetch sell men's and women's fashion?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Farfetch features both men's and women's collections, including clothing, footwear, accessories, bags, jewelry, and other fashion products."
          }
        },
        {
          "@type": "Question",
          "name": "Does Farfetch have designer sales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Farfetch features sale collections where shoppers can find selected designer products at reduced prices. The available selection can change frequently."
          }
        },
        {
          "@type": "Question",
          "name": "Does Farfetch have Black Friday deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Farfetch may run promotions around Black Friday and the broader holiday shopping period. Check current offers and eligibility before purchasing."
          }
        },
        {
          "@type": "Question",
          "name": "Does Farfetch offer Cyber Monday discounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Farfetch may feature online promotions around Cyber Monday. Available deals and participating products can change."
          }
        },
        {
          "@type": "Question",
          "name": "When is the best time to look for Farfetch deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Promotions can appear throughout the year. Seasonal sales, Black Friday, Cyber Monday, and the holiday shopping period can be particularly useful times to check."
          }
        },
        {
          "@type": "Question",
          "name": "How can I save money on Farfetch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start by checking CouponsBit for a Farfetch promo code, then compare it with sale prices, seasonal promotions, vouchers, and other available offers. Always check product eligibility and the final checkout total before completing your order."
          }
        }
      ]
    },
  ],
};

export default function FarfetchStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(farfetchSchema) }} />
      <Suspense fallback={null}>
        <FarfetchCouponsContent />
      </Suspense>
    </>
  );
}
