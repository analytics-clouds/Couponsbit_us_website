import type { Metadata } from "next";
import { Suspense } from "react";
import SignalRingCouponsContent from "./_components/StoreCouponsContent";
import { SIGNALRING_COUPONS } from "./_components/offers";

const TITLE = "SignalRing Promo Code: Get 15% Off + $399 off on Smart Ring | Nov 2026";
const DESCRIPTION = "Use a SignalRing Promo Code and SignalRing Discount Code to save 15% storewide or get the Smart Ring for $399. Verified Nov 2026. Shop now.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/signalring-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/signalring-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/signalring-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/signalring-discount-code",
      "x-default": "https://www.couponsbit.us/stores/signalring-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/signalring-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787037375/singnalring_i9epcf.jpg",
        width: 1200,
        height: 630,
        alt: "SignalRing Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787037375/singnalring_i9epcf.jpg"],
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

const signalRingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/signalring-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/signalring-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/signalring-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/signalring-discount-code#offerlist",
      name: "SignalRing Discount Codes & Coupon Codes",
      description: "Latest SignalRing discount codes and offers for the Signal Ring blood pressure monitor.",
      url: "https://www.couponsbit.us/stores/signalring-discount-code",
      numberOfItems: SIGNALRING_COUPONS.length,
      itemListElement: SIGNALRING_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/signalring-discount-code",
          seller: { "@type": "Organization", name: "SignalRing", url: "https://vitalsignals.com" },
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
      "@id": "https://www.couponsbit.us/stores/signalring-discount-code#brand",
      name: "SignalRing",
      url: "https://vitalsignals.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/signalring-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "SignalRing Coupons", item: "https://www.couponsbit.us/stores/signalring-discount-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/signalring-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Signal Ring Have a Coupon Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Signal Ring may offer promotional discounts as it expands its availability. Check CouponsBit for current Signal Ring coupon codes and offers before purchasing."
      }
    },
    {
      "@type": "Question",
      "name": "Where Can I Find a Signal Ring Promo Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available Signal Ring promo codes, discount offers, and deals."
      }
    },
    {
      "@type": "Question",
      "name": "How Much Does Signal Ring Cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The current Signal Ring price is $399. The company says there is no subscription fee required to access the ring's data and features."
      }
    },
    {
      "@type": "Question",
      "name": "Does Signal Ring Require a Subscription?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Signal Ring does not require a recurring subscription. The company says the app and its features are included with the purchase."
      }
    },
    {
      "@type": "Question",
      "name": "Does Signal Ring Need Calibration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "According to Vital Signals, Signal Ring does not require calibration with a traditional blood pressure cuff."
      }
    },
    {
      "@type": "Question",
      "name": "When Will Signal Ring Ship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Signal Ring is currently available for pre-order, with the company expecting shipments to begin in November 2026."
      }
    },
    {
      "@type": "Question",
      "name": "Does Signal Ring Work With iPhone and Android?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Signal Ring app is available on iOS and Android, and the ring connects to a phone through Bluetooth Low Energy."
      }
    },
    {
      "@type": "Question",
      "name": "What Sizes Does Signal Ring Come In?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Signal Ring is available in sizes 5 through 13. The company includes a sizing kit with orders so customers can confirm their size before the ring ships."
      }
    },
    {
      "@type": "Question",
      "name": "Is Signal Ring Waterproof?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Signal Ring has an IP68 rating. The company states that it is waterproof for up to 30 minutes in up to 3 meters of water and is resistant to rain and handwashing."
      }
    },
    {
      "@type": "Question",
      "name": "Is Signal Ring FDA Approved?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As of its 2026 launch, the consumer Signal Ring had not received FDA clearance. It is therefore important not to assume that the consumer product is an FDA-cleared medical device."
      }
    },
    {
      "@type": "Question",
      "name": "Is CouponsBit Free to Use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. CouponsBit is free to use. You can browse Signal Ring coupon codes, promo offers, and discounts without paying a fee."
      }
    }
  ]
},
  ],
};

export default function SignalRingStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(signalRingSchema) }} />
      <Suspense fallback={null}>
        <SignalRingCouponsContent />
      </Suspense>
    </>
  );
}
