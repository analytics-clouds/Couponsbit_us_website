import type { Metadata } from "next";
import { Suspense } from "react";
import MacysCouponsContent from "./_components/StoreCouponsContent";
import { MACYS_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Macy’s Promo Code: Up to 60% Off Home Event | Nov 2026",
  },
  description:
    "Save with a Macy’s Promo Code or Macy’s Discount Code to get up to 60% off the Big Home Event and 75% off Diamond Sale jewelry. Verified Nov 2026. ",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/macys-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/macys-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/macys-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/macys-promo-code",
      "x-default": "https://www.couponsbit.us/stores/macys-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/macys-promo-code",
    title: "Macy’s Promo Code: Up to 60% Off Home Event | Nov 2026",
    description:
      "Save with a Macy’s Promo Code or Macy’s Discount Code to get up to 60% off the Big Home Event and 75% off Diamond Sale jewelry. Verified Nov 2026. ",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/macys-logo_uscyzw.webp",
        width: 1200,
        height: 630,
        alt: "Macy's Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Macy’s Promo Code: Up to 60% Off Home Event | Nov 2026",
    description:
      "Save with a Macy’s Promo Code or Macy’s Discount Code to get up to 60% off the Big Home Event and 75% off Diamond Sale jewelry. Verified Nov 2026. ",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1786949027/macys-logo_uscyzw.webp"],
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
  other: {
    "geo.region": "US",
    "geo.country": "US",
    language: "en-US",
  },
};

const macysSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/macys-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/macys-promo-code",
      name: "Macy’s Promo Code: Up to 60% Off Home Event | Nov 2026",
      description:
        "Save with a Macy’s Promo Code or Macy’s Discount Code to get up to 60% off the Big Home Event and 75% off Diamond Sale jewelry. Verified Nov 2026. ",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/macys-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/macys-promo-code#offerlist",
      name: "Macy's Promo Codes & Coupon Codes",
      description: "Latest Macy's promo codes and offers across apparel, beauty, home and accessories.",
      url: "https://www.couponsbit.us/stores/macys-promo-code",
      numberOfItems: MACYS_COUPONS.length,
      itemListElement: MACYS_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Offer", name: c.title, description: c.description, url: "https://www.couponsbit.us/stores/macys-promo-code", seller: { "@type": "Organization", name: "Macy's", url: "https://www.macys.com" } },
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
      "@id": "https://www.couponsbit.us/stores/macys-promo-code#brand",
      name: "Macy's",
      url: "https://www.macys.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/macys-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Macy's Coupons", item: "https://www.couponsbit.us/stores/macys-promo-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/macys-promo-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Macy’s Have Coupon Codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Macy's offers coupons, promo codes, and other promotional discounts throughout the year. Availability and eligibility vary by offer."
      }
    },
    {
      "@type": "Question",
      "name": "Where Can I Find a Macy’s Promo Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available Macy’s promo codes, discount codes, and current deals before shopping."
      }
    },
    {
      "@type": "Question",
      "name": "What Is a Macy’s Discount Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Macy’s discount code is a promotional code that can provide savings on eligible purchases when the applicable terms are met."
      }
    },
    {
      "@type": "Question",
      "name": "Does Macy’s Have Free Shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Macy's currently offers free standard shipping at different thresholds depending on whether you're a Star Rewards member and, for some tiers, whether you use a Macy's Card. Other shoppers can qualify for free shipping on eligible $49+ orders in the contiguous U.S."
      }
    },
    {
      "@type": "Question",
      "name": "What Is Macy’s Star Rewards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Star Rewards is Macy's loyalty program. Free Bronze membership is available to non-cardholders, while Macy's Cardholders receive enhanced benefits based on their status."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Earn Rewards at Macy’s?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Star Rewards members can earn points on qualifying purchases. The number of points earned per dollar depends on membership status."
      }
    },
    {
      "@type": "Question",
      "name": "Does Macy’s Have Clearance Sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Macy's regularly features clearance and sale merchandise across categories including women's and men's fashion, shoes, handbags, home, luggage, and more."
      }
    },
    {
      "@type": "Question",
      "name": "Is CouponsBit Free to Use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. CouponsBit is free to use. You can browse Macy's coupon codes, discounts, promotions, and deals without paying a fee."
      }
    }
  ]
},
  ],
};

export default function MacysStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(macysSchema) }} />
      <Suspense fallback={null}>
        <MacysCouponsContent />
      </Suspense>
    </>
  );
}
