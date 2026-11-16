import type { Metadata } from "next";
import { Suspense } from "react";
import UberEatsCouponsContent from "./_components/StoreCouponsContent";
import { UBER_EATS_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Uber Eats Promo Code: Up to 60% Off Orders | Nov 2026 ",
  },
  description:
    "Use an Uber Eats Promo Code to get up to 60% off orders over $15 and $10 off your first order. Verified Uber Eats Discount Code deals for Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/uber-eats-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/uber-eats-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/uber-eats-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/uber-eats-promo-code",
      "x-default": "https://www.couponsbit.us/stores/uber-eats-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/uber-eats-promo-code",
    title: "Uber Eats Promo Code: Up to 60% Off Orders | Nov 2026 ",
    description:
      "Use an Uber Eats Promo Code to get up to 60% off orders over $15 and $10 off your first order. Verified Uber Eats Discount Code deals for Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/uber-eats-logo_d4dwih.webp",
        width: 1200,
        height: 630,
        alt: "Uber Eats Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Uber Eats Promo Code: Up to 60% Off Orders | Nov 2026 ",
    description:
      "Use an Uber Eats Promo Code to get up to 60% off orders over $15 and $10 off your first order. Verified Uber Eats Discount Code deals for Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1786949027/uber-eats-logo_d4dwih.webp"],
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

const uberEatsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/uber-eats-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/uber-eats-promo-code",
      name: "Uber Eats Promo Code: Up to 60% Off Orders | Nov 2026 ",
      description:
        "Use an Uber Eats Promo Code to get up to 60% off orders over $15 and $10 off your first order. Verified Uber Eats Discount Code deals for Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/uber-eats-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/uber-eats-promo-code#offerlist",
      name: "Uber Eats Promo Codes & Coupon Codes",
      description: "Latest Uber Eats promo codes and offers for restaurant delivery, grocery delivery and pickup orders.",
      url: "https://www.couponsbit.us/stores/uber-eats-promo-code",
      numberOfItems: UBER_EATS_COUPONS.length,
      itemListElement: UBER_EATS_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Offer", name: c.title, description: c.description, url: "https://www.couponsbit.us/stores/uber-eats-promo-code", seller: { "@type": "Organization", name: "Uber Eats", url: "https://www.ubereats.com" } },
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
      "@id": "https://www.couponsbit.us/stores/uber-eats-promo-code#brand",
      name: "Uber Eats",
      url: "https://www.ubereats.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/uber-eats-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Uber Eats Coupons", item: "https://www.couponsbit.us/stores/uber-eats-promo-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/uber-eats-promo-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Uber Eats Have Promo Codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Uber Eats offers promotional codes and other discounts. Available promotions can vary by location, user, restaurant, and order."
      }
    },
    {
      "@type": "Question",
      "name": "Where Can I Find an Uber Eats Promo Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available Uber Eats promo codes. You can also view promotions available to your account through the Uber Eats app under Account -> Promotions."
      }
    },
    {
      "@type": "Question",
      "name": "Is There an Uber Eats Promo Code for Existing Users?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Existing users may receive promotions through their Uber Eats account, restaurants, emails, or in-app notifications. Not all promotions are available to every customer."
      }
    },
    {
      "@type": "Question",
      "name": "Does Uber Eats Have a First Order Discount?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uber Eats may offer promotions specifically for first-time users. Eligibility and terms can vary, so check the current promotion before placing your first order."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Use Two Uber Eats Promo Codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Uber Eats states that only one promo code can be applied to an order."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Apply a Promo Code After Ordering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Promotions need to be applied before the order is placed. A promo code generally cannot be added after the order has been submitted."
      }
    },
    {
      "@type": "Question",
      "name": "Does Uber Eats Offer Free Delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uber Eats offers $0 Delivery Fee promotions at participating restaurants, and eligible Uber One members can receive $0 Delivery Fee on qualifying orders. Availability and minimum order requirements vary."
      }
    },
    {
      "@type": "Question",
      "name": "What Is Uber One?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uber One is a paid membership program offering benefits across eligible Uber and Uber Eats orders and rides. The current U.S. membership page lists plans at $9.99 monthly or $96 annually."
      }
    },
    {
      "@type": "Question",
      "name": "Is CouponsBit Free to Use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. CouponsBit is free to use. You can browse Uber Eats coupon codes, food delivery discounts, restaurant promotions, and other deals without paying a fee."
      }
    }
  ]
},
  ],
};

export default function UberEatsStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(uberEatsSchema) }} />
      <Suspense fallback={null}>
        <UberEatsCouponsContent />
      </Suspense>
    </>
  );
}
