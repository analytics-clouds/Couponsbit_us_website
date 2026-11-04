import type { Metadata } from "next";
import { Suspense } from "react";
import DriffleCouponsContent from "./_components/StoreCouponsContent";
import { DRIFFLE_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Driffle Discount Code: Get Up to 95% OFF | Nov 2026",
  },
  description:
    "Get the latest Driffle Discount Code and Driffle Promo Code for November 2026. Save up to 95% OFF on XCOM 2 and up to 81% OFF EA SPORTS FC 26.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/driffle-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/driffle-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/driffle-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/driffle-discount-code",
      "en-PK": "https://www.couponsbit.us/stores/driffle-discount-code",
      "x-default": "https://www.couponsbit.us/stores/driffle-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/driffle-discount-code",
    title: "Driffle Discount Code: Get Up to 95% OFF | Nov 2026",
    description:
      "Get the latest Driffle Discount Code and Driffle Promo Code for November 2026. Save up to 95% OFF on XCOM 2 and up to 81% OFF EA SPORTS FC 26.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN", "en_PK"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/driffle-coupon-code_n2upgl.webp",
        width: 1200,
        height: 630,
        alt: "Driffle Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Driffle Discount Code: Get Up to 95% OFF | Nov 2026",
    description:
      "Get the latest Driffle Discount Code and Driffle Promo Code for November 2026. Save up to 95% OFF on XCOM 2 and up to 81% OFF EA SPORTS FC 26.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1781775923/driffle-coupon-code_n2upgl.webp"],
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

const driffleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/driffle-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/driffle-discount-code",
      name: "Driffle Discount Code: Get Up to 95% OFF | Nov 2026",
      description:
        "Get the latest Driffle Discount Code and Driffle Promo Code for November 2026. Save up to 95% OFF on XCOM 2 and up to 81% OFF EA SPORTS FC 26.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/driffle-discount-code#breadcrumb",
      },
    },

    { "@type": "Organization", "@id": "https://www.couponsbit.us/stores/driffle-discount-code#brand", name: "Driffle", url: "https://www.driffle.com" },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/driffle-discount-code#offerlist",
      name: "Driffle Coupon Codes & Promo Codes",
      description:
        "Latest verified Driffle coupon codes, promo codes and discount codes for game keys, software and subscriptions.",
      url: "https://www.couponsbit.us/stores/driffle-discount-code",
      numberOfItems: DRIFFLE_COUPONS.length,
      itemListElement: DRIFFLE_COUPONS.map((coupon, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Offer",
          name: `Driffle ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
          description: coupon.description,
          url: `https://www.couponsbit.us/stores/driffle-discount-code#${coupon.id}`,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Driffle", url: "https://www.driffle.com" },
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
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/couponsbit-logo_n2upgl.webp",
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
      "@id": "https://www.couponsbit.us/stores/driffle-discount-code#breadcrumb",
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
          name: "Driffle Coupons",
          item: "https://www.couponsbit.us/stores/driffle-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/driffle-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Driffle offer coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Driffle occasionally provides promo codes, discounts, and special offers on gaming products and digital content.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Driffle promo codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Driffle coupon codes and gaming deals directly on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "What products does Driffle sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Driffle offers video game keys, gift cards, gaming subscriptions, software licenses, downloadable content, and in-game currencies.",
          },
        },
        {
          "@type": "Question",
          name: "Can I buy products for multiple gaming platforms?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Driffle supports a variety of gaming ecosystems, including PC and major console platforms.",
          },
        },
        {
          "@type": "Question",
          name: "Are Driffle products delivered digitally?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many products available through Driffle are delivered digitally, allowing for convenient access after purchase.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Couponsbit is completely free and helps users discover verified coupon codes, discounts, and promotional offers.",
          },
        },
      ],
    },
  ],
};

export default function DriffleStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(driffleSchema),
        }}
      />
      <Suspense fallback={null}>
        <DriffleCouponsContent />
      </Suspense>
    </>
  );
}
