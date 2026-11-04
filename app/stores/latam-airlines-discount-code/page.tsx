import type { Metadata } from "next";
import { Suspense } from "react";
import LatamCouponsContent from "./_components/StoreCouponsContent";
import { LATAM_COUPONS } from "./_components/offers";

const TITLE = "LATAM Airlines Discount Code: 40% OFF Deals | Nov 2026";
const DESCRIPTION =
  "Get the latest LATAM Airlines Discount Code and LATAM Airlines Promo Code for November 2026. Save up to 40% OFF travel packages and earn 40,000 bonus miles with eligible credit card offers.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/latam-airlines-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/latam-airlines-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/latam-airlines-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/latam-airlines-discount-code",
      "x-default": "https://www.couponsbit.us/stores/latam-airlines-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/latam-airlines-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/latam-airlines-coupon-code_pvcsml.webp",
        width: 1200,
        height: 630,
        alt: "LATAM Airlines Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1781775924/latam-airlines-coupon-code_pvcsml.webp"],
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

const latamOffers = LATAM_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `LATAM Airlines ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/latam-airlines-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: {
    "@type": "Organization",
    name: "LATAM Airlines",
    url: "https://www.latamairlines.com",
  },
}));

const latamSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/latam-airlines-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/latam-airlines-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/latam-airlines-discount-code#breadcrumb",
      },
    },

    // Brand Organization schema for LATAM Airlines
    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/latam-airlines-discount-code#brand",
      name: "LATAM Airlines",
      url: "https://www.latamairlines.com",
    },

    // ItemList — dynamic from LATAM_COUPONS
    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/latam-airlines-discount-code#offerlist",
      name: "LATAM Airlines Coupon Codes & Promo Codes",
      description:
        "Latest verified LATAM Airlines coupon codes, promo codes and discount codes for flight bookings.",
      url: "https://www.couponsbit.us/stores/latam-airlines-discount-code",
      numberOfItems: LATAM_COUPONS.length,
      itemListElement: latamOffers.map((offer, index) => ({
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
      "@id": "https://www.couponsbit.us/stores/latam-airlines-discount-code#breadcrumb",
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
          name: "LATAM Airlines Coupons",
          item: "https://www.couponsbit.us/stores/latam-airlines-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/latam-airlines-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does LATAM Airlines offer coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. LATAM Airlines occasionally offers promotional fares, discount codes, and limited-time travel deals.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find LATAM Airlines promo codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest LATAM Airlines coupon codes and travel deals on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "What is LATAM Pass?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LATAM Pass is the airline's loyalty program that allows members to earn and redeem miles while accessing travel benefits.",
          },
        },
        {
          "@type": "Question",
          name: "Does LATAM Airlines offer international flights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. LATAM operates flights across Latin America and to destinations in North America, Europe, Oceania, and beyond.",
          },
        },
        {
          "@type": "Question",
          name: "Can I add baggage after booking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Travelers can purchase additional baggage through their reservation, and LATAM recommends purchasing baggage in advance when possible.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Couponsbit is completely free and helps users discover verified coupon codes, promo codes, and travel discounts.",
          },
        },
      ],
    },
  ],
};

export default function LatamStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(latamSchema),
        }}
      />
      <Suspense fallback={null}>
        <LatamCouponsContent />
      </Suspense>
    </>
  );
}
