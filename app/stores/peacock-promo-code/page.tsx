import type { Metadata } from "next";
import { Suspense } from "react";
import PeacockCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Peacock Promo Code: Up to 65% Off | Nov 2026",
  },
  description:
    "Save with a Peacock Promo Code offering up to 65% off and Premium Plus from $13.99/month. Verified Peacock Discount Code deals for Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/peacock-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/peacock-promo-code",
      "x-default": "https://www.couponsbit.us/stores/peacock-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/peacock-promo-code",
    title: "Peacock Promo Code: Up to 65% Off | Nov 2026",
    description:
      "Save with a Peacock Promo Code offering up to 65% off and Premium Plus from $13.99/month. Verified Peacock Discount Code deals for Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789994531/peacock-logo_mhfin7.webp",
        width: 1200,
        height: 630,
        alt: "Peacock Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Peacock Promo Code: Up to 65% Off | Nov 2026",
    description:
      "Save with a Peacock Promo Code offering up to 65% off and Premium Plus from $13.99/month. Verified Peacock Discount Code deals for Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789994531/peacock-logo_mhfin7.webp"],
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

const peacockSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/peacock-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/peacock-promo-code",
      name: "Peacock Promo Code: Up to 65% Off | Nov 2026",
      description:
        "Save with a Peacock Promo Code offering up to 65% off and Premium Plus from $13.99/month. Verified Peacock Discount Code deals for Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/peacock-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/peacock-promo-code#offerlist",
      name: "Peacock Promo Codes & Coupon Codes",
      description: "Latest Peacock promo codes and offers.",
      url: "https://www.couponsbit.us/stores/peacock-promo-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Offer", name: o.title, description: o.desc, url: "https://www.couponsbit.us/stores/peacock-promo-code", seller: { "@type": "Organization", name: "Peacock", url: "https://www.peacocktv.com" } },
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
      "@id": "https://www.couponsbit.us/stores/peacock-promo-code#brand",
      name: "Peacock",
      url: "https://www.peacocktv.com",
      sameAs: ["https://en.wikipedia.org/wiki/Peacock_(streaming_service)"],
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/peacock-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Peacock Coupons", item: "https://www.couponsbit.us/stores/peacock-promo-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/peacock-promo-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Peacock have promo codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Peacock offers promotional codes through various campaigns and eligibility-based programs. Availability, eligibility, and terms can vary, so check for a current offer before subscribing."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find a Peacock promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available Peacock promotions before visiting Peacock to complete your subscription."
      }
    },
    {
      "@type": "Question",
      "name": "Can existing Peacock subscribers use a promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the specific promotion. Some offers are restricted to new subscribers, while certain targeted promotions may be available to existing members. Always check the terms of the individual offer."
      }
    },
    {
      "@type": "Question",
      "name": "Does Peacock offer student discounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Peacock offers special pricing for eligible students, subject to its current eligibility requirements and promotional terms."
      }
    },
    {
      "@type": "Question",
      "name": "Does Peacock offer young adult discounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Peacock currently has a young-adult offer for eligible people ages 18–24, with verification required."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Peacock promo code without a payment method?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Peacock states that a valid payment method is required to redeem a promotional code."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if my Peacock promo code worked?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After applying the promotion, you can check your Peacock account. Peacock says a successfully applied promotional offer will appear under Your Plan."
      }
    },
    {
      "@type": "Question",
      "name": "Does Peacock offer sports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Peacock offers live sports programming including NFL, NBA, MLB, WNBA, Premier League, NCAA sports, golf, motorsports, and other events."
      }
    },
    {
      "@type": "Question",
      "name": "Can I give Peacock as a gift?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Peacock offers digital gift cards that can be sent through email or text, and both new and existing subscribers can redeem them toward a Peacock plan."
      }
    }
  ]
},
  ],
};

export default function PeacockStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(peacockSchema) }} />
      <Suspense fallback={null}><PeacockCouponsContent /></Suspense>
    </>
  );
}
