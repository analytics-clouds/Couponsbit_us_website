import type { Metadata } from "next";
import { Suspense } from "react";
import GrubhubCouponsContent from "./_components/StoreCouponsContent";
import { GRUBHUB_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Grubhub Promo Code: 80% OFF on Food Orders | Nov 2026",
  },
  description:
    "Use Grubhub Promo Code and Grubhub Discount Code to get 80% off orders and 25% off $15+ new diner purchases. Verified Nov 2026 deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/grubhub-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/grubhub-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/grubhub-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/grubhub-promo-code",
      "x-default": "https://www.couponsbit.us/stores/grubhub-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/grubhub-promo-code",
    title: "Grubhub Promo Code: 80% OFF on Food Orders | Nov 2026",
    description:
      "Use Grubhub Promo Code and Grubhub Discount Code to get 80% off orders and 25% off $15+ new diner purchases. Verified Nov 2026 deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1788868873/grubhub-logo_zzagn2.webp",
        width: 1200,
        height: 630,
        alt: "Grubhub Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Grubhub Promo Code: 80% OFF on Food Orders | Nov 2026",
    description:
      "Use Grubhub Promo Code and Grubhub Discount Code to get 80% off orders and 25% off $15+ new diner purchases. Verified Nov 2026 deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1788868873/grubhub-logo_zzagn2.webp"],
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

const storeOffers = GRUBHUB_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Grubhub ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/grubhub-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Grubhub", url: "https://www.grubhub.com" },
}));

const grubhubSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/grubhub-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/grubhub-promo-code",
      name: "Grubhub Promo Code: 80% OFF on Food Orders | Nov 2026",
      description:
        "Use Grubhub Promo Code and Grubhub Discount Code to get 80% off orders and 25% off $15+ new diner purchases. Verified Nov 2026 deals.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/grubhub-promo-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/grubhub-promo-code#brand",
      name: "Grubhub",
      url: "https://www.grubhub.com",
      sameAs: ["https://www.facebook.com/grubhub", "https://twitter.com/grubhub"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/grubhub-promo-code#offerlist",
      name: "Grubhub Promo Codes & Coupon Codes",
      description: "Latest Grubhub promo codes and offers on restaurant delivery.",
      url: "https://www.couponsbit.us/stores/grubhub-promo-code",
      numberOfItems: GRUBHUB_COUPONS.length,
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
      "@id": "https://www.couponsbit.us/stores/grubhub-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Grubhub Coupons", item: "https://www.couponsbit.us/stores/grubhub-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/grubhub-promo-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Grubhub offer promo codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Grubhub runs promotional campaigns that can include promo codes, discounts, restaurant offers, delivery promotions, and other savings opportunities. Availability and eligibility vary."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find a Grubhub promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check CouponsBit for available Grubhub promo codes, coupon codes, discounts, vouchers, restaurant deals, and other promotions before ordering."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use a Grubhub coupon code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose your restaurant and food, add the items to your cart, proceed toward checkout, and enter the applicable coupon code in the promotional field. Make sure the discount has been applied before completing your order."
          }
        },
        {
          "@type": "Question",
          "name": "Why isn't my Grubhub promo code working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The code may have expired, or your order may not meet the promotion's requirements. Restrictions can include participating restaurants, locations, minimum order amounts, customer eligibility, or promotional periods."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a Grubhub discount code at any restaurant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Some promotions apply only to participating restaurants or selected orders. Check the terms of the individual offer before ordering."
          }
        },
        {
          "@type": "Question",
          "name": "Does Grubhub have restaurant-specific deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Participating restaurants can feature their own promotions and offers. These deals may vary depending on the restaurant and your location."
          }
        },
        {
          "@type": "Question",
          "name": "Does Grubhub offer delivery savings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Grubhub offers different delivery-related promotions and membership benefits. Grubhub+ can also provide eligible members with delivery and service-fee benefits at participating restaurants."
          }
        },
        {
          "@type": "Question",
          "name": "What is Grubhub+?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Grubhub+ is Grubhub's membership program, offering eligible customers benefits related to delivery and other savings. The specific benefits and participating restaurants can change, so check the current terms before subscribing or ordering."
          }
        },
        {
          "@type": "Question",
          "name": "Can I order food for a group on Grubhub?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Customers can order from participating restaurants for multiple people. When placing a larger order, check for promotions with minimum order requirements or percentage-based savings."
          }
        },
        {
          "@type": "Question",
          "name": "Does Grubhub offer deals during Black Friday?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Grubhub may run promotions around major shopping periods such as Black Friday and Cyber Monday. Available offers can change, so check current promotions before ordering."
          }
        },
        {
          "@type": "Question",
          "name": "When is the best time to look for Grubhub deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Promotions can appear throughout the year. Major occasions such as the Super Bowl, Valentine's Day, Mother's Day, Fourth of July, Halloween, Black Friday, Cyber Monday, and the holiday season can be useful times to check."
          }
        },
        {
          "@type": "Question",
          "name": "How can I save more when ordering from Grubhub?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start by checking CouponsBit for a Grubhub promo code, then compare it with restaurant-specific deals, delivery promotions, membership benefits, and other available offers. Always consider the complete checkout total when deciding which option gives you the best value."
          }
        }
      ]
    },
  ],
};

export default function GrubhubStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(grubhubSchema) }} />
      <Suspense fallback={null}>
        <GrubhubCouponsContent />
      </Suspense>
    </>
  );
}
