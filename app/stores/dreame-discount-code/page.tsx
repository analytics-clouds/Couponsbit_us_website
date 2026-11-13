import type { Metadata } from "next";
import { Suspense } from "react";
import DreameCouponsContent from "./_components/StoreCouponsContent";
import { DREAME_COUPONS } from "./_components/offers";

const TITLE = "Dreame Discount Code: 45% Off AirStyle Pro | Nov 2026";
const DESCRIPTION = "Use the latest Dreame discount code and promo code to get 45% off the AirStyle Pro plus an extra 10% off eligible orders. Verified offers for Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/dreame-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/dreame-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/dreame-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/dreame-discount-code",
      "x-default": "https://www.couponsbit.us/stores/dreame-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/dreame-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1785130848/dreame-logo_uqesij.webp",
        width: 1200,
        height: 630,
        alt: "Dreame Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1785130848/dreame-logo_uqesij.webp"],
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

const dreameSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/dreame-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/dreame-discount-code",
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
        "@id": "https://www.couponsbit.us/stores/dreame-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/dreame-discount-code#offerlist",
      name: "Dreame Coupon Codes & Promo Codes",
      description:
        "Latest verified Dreame coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/dreame-discount-code",
      numberOfItems: DREAME_COUPONS.length,
      itemListElement: DREAME_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/dreame-discount-code",
          seller: { "@type": "Organization", name: "Dreame", url: "https://www.dreametech.com" },
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
      "@id": "https://www.couponsbit.us/stores/dreame-discount-code#brand",
      name: "Dreame",
      url: "https://www.dreametech.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/dreame-discount-code#breadcrumb",
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
          name: "Dreame Coupons",
          item: "https://www.couponsbit.us/stores/dreame-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/dreame-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Dreame Global?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dreame Global is a smart home appliance brand that develops robot vacuum cleaners, cordless vacuums, wet and dry vacuums, robotic lawn mowers, hair dryers, and related accessories.",
          },
        },
        {
          "@type": "Question",
          name: "What products does Dreame sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dreame offers robot vacuums, cordless vacuum cleaners, wet and dry vacuums, robotic lawn mowers, hair dryers, and replacement accessories.",
          },
        },
        {
          "@type": "Question",
          name: "Are Dreame robot vacuums suitable for pet owners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many Dreame robot vacuums feature powerful suction, smart navigation, and efficient cleaning capabilities that help remove pet hair, dust, and debris from various floor types.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find a Dreame Global discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Dreame Global discount code, Dreame Global voucher, Dreame Global promo code, and Dreame Global coupon code on CouponsBit before making your purchase.",
          },
        },
        {
          "@type": "Question",
          name: "Does Dreame sell replacement accessories?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Dreame offers replacement filters, brushes, mop pads, dust bags, batteries, and other accessories for compatible products.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps shoppers discover verified discount codes, vouchers, promo codes, and coupon codes from trusted global brands.",
          },
        },
      ],
    },
  ],
};

export default function DreameStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dreameSchema),
        }}
      />
      <Suspense fallback={null}>
        <DreameCouponsContent />
      </Suspense>
    </>
  );
}
