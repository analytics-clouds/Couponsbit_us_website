import type { Metadata } from "next";
import { Suspense } from "react";
import { AIRALO_COUPONS } from "./_components/offers";
import AiraloCouponsContent from "./_components/StoreCouponsContent";

const TITLE = "Airalo Promo Code: Up to 20% Off + Extra 10% Off | Nov 2026";
const DESCRIPTION = "Use the Airalo promo code AC10ALL for an extra 10% off, plus save up to 20% on select USA eSIM plans. Verified discount code for Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/airalo-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/airalo-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/airalo-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/airalo-discount-code",
      "x-default": "https://www.couponsbit.us/stores/airalo-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/airalo-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784895740/airalo-logo_fc6u6p.webp",
        width: 1200,
        height: 630,
        alt: "Airalo Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784895740/airalo-logo_fc6u6p.webp"],
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

const airaloSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/airalo-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/airalo-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      datePublished: "2026-01-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/airalo-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/airalo-discount-code#offerlist",
      name: "Airalo Coupon Codes & Promo Codes",
      description:
        "Latest verified Airalo coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/airalo-discount-code",
      numberOfItems: AIRALO_COUPONS.length,
      itemListElement: AIRALO_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/airalo-discount-code",
          seller: { "@type": "Organization", name: "Airalo", url: "https://www.airalo.com" },
        },
      })),
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
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/airalo-discount-code#brand",
      name: "Airalo",
      url: "https://www.airalo.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/airalo-discount-code#breadcrumb",
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
          name: "Airalo Coupons",
          item: "https://www.couponsbit.us/stores/airalo-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/airalo-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Airalo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Airalo is the world's first eSIM marketplace, offering digital SIM cards for more than 200 countries and regions to help travelers stay connected without paying high roaming charges.",
          },
        },
        {
          "@type": "Question",
          name: "What devices work with Airalo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Airalo works with eSIM-compatible smartphones, tablets, and other supported devices. Your device must support eSIM technology and be unlocked.",
          },
        },
        {
          "@type": "Question",
          name: "Does Airalo offer global eSIM plans?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Airalo offers local, regional, and global eSIM plans, allowing travelers to choose coverage based on their destinations.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find an Airalo discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Airalo discount code, Airalo voucher, Airalo promo code, and Airalo coupon code on CouponsBit before purchasing your eSIM.",
          },
        },
        {
          "@type": "Question",
          name: "Can I top up my Airalo eSIM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many Airalo eSIM plans support top-ups, allowing you to add more data without purchasing a new eSIM.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps travelers discover verified discount codes, vouchers, promo codes, and coupon codes from trusted global brands.",
          },
        },
      ],
    },
  ],
};

export default function AiraloStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(airaloSchema),
        }}
      />
      <Suspense fallback={null}>
        <AiraloCouponsContent />
      </Suspense>
    </>
  );
}
