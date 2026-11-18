import type { Metadata } from "next";
import { Suspense } from "react";
import TuroContent from "./_components/StoreCouponsContent";
import { TURO_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Turo Promo Code: Up to $1,000 OFF Rentals | Nov 2026",
  },
  description:
    "Turo Promo Code saves up to $1,000 on monthly rentals and 20% off car bookings. Find Turo Discount Code offers with verified Nov 2026 savings.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/turo-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/turo-promo-code",
      "x-default": "https://www.couponsbit.us/stores/turo-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/turo-promo-code",
    title: "Turo Promo Code: Up to $1,000 OFF Rentals | Nov 2026",
    description:
      "Turo Promo Code saves up to $1,000 on monthly rentals and 20% off car bookings. Find Turo Discount Code offers with verified Nov 2026 savings.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1790238446/turo-logo_exsf96.webp",
        width: 1200,
        height: 630,
        alt: "Turo Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Turo Promo Code: Up to $1,000 OFF Rentals | Nov 2026",
    description:
      "Turo Promo Code saves up to $1,000 on monthly rentals and 20% off car bookings. Find Turo Discount Code offers with verified Nov 2026 savings.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1790238446/turo-logo_exsf96.webp"],
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

const turoOffers = TURO_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Turo ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/turo-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Turo", url: "https://www.turo.com" },
}));

const turoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/turo-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/turo-promo-code",
      name: "Turo Promo Code: Up to $1,000 OFF Rentals | Nov 2026",
      description:
        "Turo Promo Code saves up to $1,000 on monthly rentals and 20% off car bookings. Find Turo Discount Code offers with verified Nov 2026 savings.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/turo-promo-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/turo-promo-code#brand",
      name: "Turo",
      url: "https://www.turo.com",
      sameAs: ["https://www.facebook.com/turo", "https://twitter.com/turo"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/turo-promo-code#offerlist",
      name: "Turo Promo Codes & Coupon Codes",
      description: "Latest Turo promo codes and offers.",
      url: "https://www.couponsbit.us/stores/turo-promo-code",
      numberOfItems: TURO_COUPONS.length,
      itemListElement: turoOffers.map((offer, i) => ({
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
      "@id": "https://www.couponsbit.us/stores/turo-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Turo Coupons", item: "https://www.couponsbit.us/stores/turo-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/turo-promo-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Turo offer promo codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Turo says it sends occasional promo codes, discounts, and deals to users who opt into email notifications and push notifications. Frequent travelers may also earn a loyalty bonus that includes a promo code for a bonus day after qualifying trips."
          }
        },
        {
          "@type": "Question",
          "name": "Does Turo have coupon codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Turo may offer promotional codes and discounts from time to time. The available offers and eligibility requirements can change, so check the current promotion before booking."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a discount for a longer Turo rental?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Potentially. Turo says many hosts offer discounted prices for weekly and monthly trips. The exact discount depends on the individual host and vehicle."
          }
        },
        {
          "@type": "Question",
          "name": "What types of cars can I rent on Turo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Turo offers a broad range of vehicles, including everyday cars, SUVs, convertibles, sports cars, exotic and luxury vehicles, classic cars, EVs, minivans, trucks, and vans."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a Turo car delivered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many hosts offer delivery to locations such as airports, hotels, train stations, or other agreed locations. Delivery availability and fees vary by vehicle and host."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need my own car insurance to rent on Turo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You don't need personal insurance coverage to book a car on Turo in the US. Turo provides third-party liability coverage under a policy issued to Turo by Travelers, while guests can select from available protection plans for eligible physical damage. The exact terms depend on the trip and plan."
          }
        },
        {
          "@type": "Question",
          "name": "Can someone else drive my Turo rental?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Additional drivers can be added when they meet Turo's eligibility requirements and are approved to drive. Turo says the primary driver can add additional drivers without an additional driver charge."
          }
        },
        {
          "@type": "Question",
          "name": "Can I cancel a Turo booking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cancellation rules depend on the booking. For refundable US trips, Turo generally allows a full refund when you cancel at least 24 hours before the trip starts, with a shorter free-cancellation window for bookings made less than 24 hours before the start time."
          }
        },
        {
          "@type": "Question",
          "name": "How can I find Turo deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check for a current Turo promo code, compare host-specific discounts, look at weekly or monthly pricing, and review any loyalty or promotional offers available to your account."
          }
        }
      ]
    },
  ],
};

export default function TuroPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(turoSchema) }} />
      <Suspense fallback={null}><TuroContent /></Suspense>
    </>
  );
}
