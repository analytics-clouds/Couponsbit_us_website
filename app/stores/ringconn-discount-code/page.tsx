import type { Metadata } from "next";
import { Suspense } from "react";
import RingconnCouponsContent from "./_components/StoreCouponsContent";
import { RINGCONN_COUPONS } from "./_components/offers";

const TITLE = "RingConn Promo Code: 20% Off + Gen 2 Air from $199 | Nov 2026";
const DESCRIPTION =
  "Save 20% with the latest RingConn promo code. Get the RingConn Gen 2 Air from just $199 and shop verified smart ring deals this Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/ringconn-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/ringconn-discount-code",
      "x-default": "https://www.couponsbit.us/stores/ringconn-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/ringconn-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/ringconn-logo_y95vtu.webp",
        width: 1200,
        height: 630,
        alt: "RingConn Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1784618847/ringconn-logo_y95vtu.webp"],
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

const storeOffers = RINGCONN_COUPONS.map((coupon, index) => ({
  "@type": "ListItem",
  position: index + 1,
  item: {
    "@type": "Offer",
    name: coupon.title,
    description: coupon.description,
    url: "https://www.couponsbit.us/stores/ringconn-discount-code",
    seller: {
      "@type": "Organization",
      name: "RingConn",
      url: "https://ringconn.com",
    },
  },
}));

const ringconnSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/ringconn-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/ringconn-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/ringconn-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/ringconn-discount-code#brand",
      name: "RingConn",
      url: "https://ringconn.com",
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/ringconn-logo_y95vtu.webp",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/ringconn-discount-code#offerlist",
      name: "RingConn Coupon Codes & Promo Codes",
      description:
        "Latest verified RingConn coupon codes, promo codes and discount codes for smart rings and accessories.",
      url: "https://www.couponsbit.us/stores/ringconn-discount-code",
      numberOfItems: RINGCONN_COUPONS.length,
      itemListElement: storeOffers,
    },

    {
      "@type": "WebSite",
      "@id": "https://www.couponsbit.us/#website",
      url: "https://www.couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is one of the best coupon websites offering verified coupons, deals, and coupon help for top brands worldwide.",
      inLanguage: "en-US",
      publisher: {
        "@id": "https://www.couponsbit.us/#organization",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/#organization",
      name: "Couponsbit",
      url: "https://www.couponsbit.us",
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/couponsbit-logo_kxqyir.webp",
        width: 200,
        height: 60,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        availableLanguage: "English",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/ringconn-discount-code#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.couponsbit.us",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Stores",
          item: "https://www.couponsbit.us/stores",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "RingConn Coupons",
          item: "https://www.couponsbit.us/stores/ringconn-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/ringconn-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is RingConn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "RingConn is a wearable technology brand that develops smart rings capable of tracking sleep, activity, heart rate, stress, blood oxygen, recovery, and other health metrics.",
          },
        },
        {
          "@type": "Question",
          name: "Does RingConn require a monthly subscription?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. RingConn allows users to access health tracking features through its app without a recurring subscription fee.",
          },
        },
        {
          "@type": "Question",
          name: "What health metrics does RingConn track?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the model, RingConn can monitor sleep, heart rate, blood oxygen, stress, daily activity, recovery, sleep apnea indicators, and women's health metrics.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the battery last?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Battery life varies by model, but many RingConn smart rings can operate for several days on a single charge, with newer models offering up to two weeks under typical use.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find RingConn coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest RingConn coupon codes, RingConn promo codes, and exclusive smart ring deals on CouponsBit.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps shoppers discover verified coupon codes, promotional offers, and discounts from trusted global brands.",
          },
        },
      ],
    },
  ],
};

export default function RingconnStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ringconnSchema),
        }}
      />
      <Suspense fallback={null}>
        <RingconnCouponsContent />
      </Suspense>
    </>
  );
}
