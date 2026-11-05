import type { Metadata } from "next";
import { Suspense } from "react";
import TrainPalCouponsContent from "./_components/StoreCouponsContent";
import { TRAINPAL_COUPONS } from "./_components/offers";

const TITLE = "TrainPal Discount Code: Get 50% OFF + 1/3 OFF | Nov 2026";
const DESCRIPTION =
  "Get the latest TrainPal Discount Code and TrainPal Promo Code for November 2026. Save 50% OFF with the 16–17 Saver or enjoy 1/3 OFF UK train fares.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/trainpal-discount-code",
    languages: {
      "en-GB": "https://www.couponsbit.us/stores/trainpal-discount-code",
      "en-IT": "https://www.couponsbit.us/stores/trainpal-discount-code",
      "en-US": "https://www.couponsbit.us/stores/trainpal-discount-code",
      "x-default": "https://www.couponsbit.us/stores/trainpal-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/trainpal-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_GB",
    alternateLocale: ["en_IT", "en_US"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/trainpal-logo_lkwb0o.webp",
        width: 1200,
        height: 630,
        alt: "TrainPal Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782114026/trainpal-logo_lkwb0o.webp"],
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

const trainpalOffers = TRAINPAL_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `TrainPal ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/trainpal-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "TrainPal", url: "https://www.mytrainpal.com/" },
}));

const trainpalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/trainpal-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/trainpal-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/trainpal-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/trainpal-discount-code#brand",
      name: "TrainPal",
      url: "https://www.mytrainpal.com/",
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/trainpal-discount-code#offerlist",
      name: "TrainPal Coupon Codes & Promo Codes",
      description: DESCRIPTION,
      url: "https://www.couponsbit.us/stores/trainpal-discount-code",
      numberOfItems: TRAINPAL_COUPONS.length,
      itemListElement: trainpalOffers.map((offer, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: offer,
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
        url: "https://www.couponsbit.us/logo.png",
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
      "@id": "https://www.couponsbit.us/stores/trainpal-discount-code#breadcrumb",
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
          name: "TrainPal Coupons",
          item: "https://www.couponsbit.us/stores/trainpal-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/trainpal-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is TrainPal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TrainPal is an online booking platform that allows users to search, compare, and book train and coach tickets across the UK and Europe.",
          },
        },
        {
          "@type": "Question",
          name: "Is TrainPal available in the UK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TrainPal supports rail travel throughout the United Kingdom and offers access to numerous train routes and operators.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book train tickets in Italy through TrainPal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TrainPal allows travelers to book rail journeys across Italy, including many popular high-speed routes.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find TrainPal discount codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest TrainPal discount codes, promo offers, and travel deals on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "Does TrainPal offer mobile ticketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TrainPal supports digital booking services and provides convenient access to travel information through its platform.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Couponsbit is completely free and helps users discover discounts, promo codes, and travel savings opportunities.",
          },
        },
      ],
    },
  ],
};

export default function TrainPalStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(trainpalSchema),
        }}
      />
      <Suspense fallback={null}>
        <TrainPalCouponsContent />
      </Suspense>
    </>
  );
}
