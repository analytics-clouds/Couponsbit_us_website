import type { Metadata } from "next";
import { Suspense } from "react";
import KohlsCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Kohl’s Promo code: Up to 70% Off + $15 Off | Nov 2026",
  },
  description:
    "Shop with a Kohl’s Promo code or Kohl’s Discount Code to save up to 70% on clearance and get $15 off orders over $75. Verified Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/kohls-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/kohls-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/kohls-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/kohls-coupon-code",
    title: "Kohl’s Promo code: Up to 70% Off + $15 Off | Nov 2026",
    description:
      "Shop with a Kohl’s Promo code or Kohl’s Discount Code to save up to 70% on clearance and get $15 off orders over $75. Verified Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789994531/kohls-logo_pijwvs.webp",
        width: 1200,
        height: 630,
        alt: "Kohl's Promo code & Promo codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kohl’s Promo code: Up to 70% Off + $15 Off | Nov 2026",
    description:
      "Shop with a Kohl’s Promo code or Kohl’s Discount Code to save up to 70% on clearance and get $15 off orders over $75. Verified Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789994531/kohls-logo_pijwvs.webp"],
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

const kohlsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/kohls-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/kohls-coupon-code",
      name: "Kohl’s Promo code: Up to 70% Off + $15 Off | Nov 2026",
      description:
        "Shop with a Kohl’s Promo code or Kohl’s Discount Code to save up to 70% on clearance and get $15 off orders over $75. Verified Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/kohls-coupon-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/kohls-coupon-code#offerlist",
      name: "Kohl's Promo codes & Promo codes",
      description: "Latest Kohl's coupon codes and offers.",
      url: "https://www.couponsbit.us/stores/kohls-coupon-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Offer", name: o.title, description: o.desc, url: "https://www.couponsbit.us/stores/kohls-coupon-code", seller: { "@type": "Organization", name: "Kohl's", url: "https://www.kohls.com" } },
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
      "@id": "https://www.couponsbit.us/stores/kohls-coupon-code#brand",
      name: "Kohl's",
      url: "https://www.kohls.com",
      sameAs: ["https://en.wikipedia.org/wiki/Kohl%27s"],
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/kohls-coupon-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Kohl's Coupons", item: "https://www.couponsbit.us/stores/kohls-coupon-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/kohls-coupon-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Kohl's offer promo codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Kohl's offers promotional coupons and codes for eligible purchases. Available offers, eligibility, and expiration dates vary by promotion."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find a Kohl's promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available Kohl's promotions before shopping on Kohls.com."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use more than one Kohl's promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kohl's allows multiple eligible coupons on qualifying online orders, although restrictions apply. Kohl's currently states that up to four promo codes can be applied to an online order and only one sitewide percentage-off coupon can be used."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use Kohl's Cash with a promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kohl's Cash can generally be used alongside eligible coupons, subject to the terms of the individual promotions. Kohl's Cash is applied before a percentage-off total-purchase coupon."
      }
    },
    {
      "@type": "Question",
      "name": "Does Kohl's Cash expire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Kohl's Cash can only be redeemed during the redemption period specified for the promotion or coupon."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Kohl's coupon on Sephora at Kohl's?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Certain Kohl's coupons and promotions exclude Sephora at Kohl's merchandise. Always check the individual coupon's exclusions before checkout."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my Kohl's promo code not working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The code may be expired, restricted to specific products or brands, subject to usage limits, or incompatible with another promotion. Kohl's also excludes certain categories and charges from coupons."
      }
    },
    {
      "@type": "Question",
      "name": "Does Kohl's have discounts during Black Friday and Cyber Monday?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kohl's participates in the major U.S. holiday shopping season, and shoppers can look for promotions during Black Friday and Cyber Monday. Available offers vary from year to year."
      }
    }
  ]
},
  ],
};

export default function KohlsStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(kohlsSchema) }} />
      <Suspense fallback={null}><KohlsCouponsContent /></Suspense>
    </>
  );
}
