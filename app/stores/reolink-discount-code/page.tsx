import type { Metadata } from "next";
import { Suspense } from "react";
import ReolinkCouponsContent from "./_components/StoreCouponsContent";
import { REOLINK_COUPONS } from "./_components/offers";

const TITLE = "Reolink Discount Code: 50% OFF + $450 OFF | Nov 2026";
const DESCRIPTION =
  "Get the latest Reolink Discount Code and Reolink Promo Code for November 2026. Save up to 50% OFF security cameras and up to $450 OFF selected camera systems.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/reolink-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/reolink-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/reolink-discount-code",
      "x-default": "https://www.couponsbit.us/stores/reolink-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/reolink-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/reolink-coupon-code_zsrmh1.webp",
        width: 1200,
        height: 630,
        alt: "Reolink Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1781775924/reolink-coupon-code_zsrmh1.webp"],
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

const reolinkOffers = REOLINK_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Reolink ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/reolink-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Reolink", url: "https://reolink.com" },
}));

const reolinkSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/reolink-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/reolink-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/reolink-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/reolink-discount-code#brand",
      name: "Reolink",
      url: "https://reolink.com",
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/reolink-discount-code#offerlist",
      name: "Reolink Coupon Codes & Promo Codes",
      description:
        "Latest verified Reolink coupon codes, promo codes and discount codes for security cameras and smart home devices.",
      url: "https://www.couponsbit.us/stores/reolink-discount-code",
      numberOfItems: REOLINK_COUPONS.length,
      itemListElement: reolinkOffers.map((offer, index) => ({
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
      "@id": "https://www.couponsbit.us/stores/reolink-discount-code#breadcrumb",
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
          name: "Reolink Coupons",
          item: "https://www.couponsbit.us/stores/reolink-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/reolink-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Reolink offer coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Reolink frequently offers promo codes, seasonal discounts, and special promotions on security products.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Reolink promo codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Reolink coupon codes and security deals directly on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "What products does Reolink sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reolink offers security cameras, video doorbells, NVR systems, floodlight cameras, cellular cameras, and smart security solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Are Reolink cameras suitable for businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Reolink provides security solutions for both residential and commercial applications.",
          },
        },
        {
          "@type": "Question",
          name: "Can I monitor Reolink cameras remotely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many Reolink products support remote access through mobile apps and desktop software.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Couponsbit is completely free and helps users discover verified promo codes, discounts, and special offers.",
          },
        },
      ],
    },
  ],
};

export default function ReolinkStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reolinkSchema),
        }}
      />
      <Suspense fallback={null}>
        <ReolinkCouponsContent />
      </Suspense>
    </>
  );
}