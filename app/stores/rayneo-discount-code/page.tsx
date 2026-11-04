import type { Metadata } from "next";
import { Suspense } from "react";
import RayneoCouponsContent from "./_components/StoreCouponsContent";
import { RAYNEO_COUPONS } from "./_components/offers";

const TITLE = "RayNeo Discount Code: Get Up to $130 OFF | Nov 2026";
const DESCRIPTION =
  "Get the latest RayNeo Discount Code and RayNeo Promo Code for November 2026. Save up to $130 OFF RayNeo X3 Pro AI and up to $70 OFF Air Series AR glasses.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/rayneo-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/rayneo-discount-code",
      "x-default": "https://www.couponsbit.us/stores/rayneo-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/rayneo-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/reyneo-coupon-code_q3crak.webp",
        width: 1200,
        height: 630,
        alt: "Rayneo Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1781775923/reyneo-coupon-code_q3crak.webp"],
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

const rayneoOffers = RAYNEO_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Rayneo ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/rayneo-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: {
    "@type": "Organization",
    name: "Rayneo",
    url: "https://www.rayneo.com",
  },
}));

const rayneoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/rayneo-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/rayneo-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/rayneo-discount-code#breadcrumb",
      },
    },

    // Brand Organization schema for Rayneo
    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/rayneo-discount-code#brand",
      name: "Rayneo",
      url: "https://www.rayneo.com",
    },

    // ItemList — dynamic from RAYNEO_COUPONS
    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/rayneo-discount-code#offerlist",
      name: "Rayneo Coupon Codes & Promo Codes",
      description:
        "Latest verified Rayneo coupon codes, promo codes and discount codes for AR glasses and smart devices.",
      url: "https://www.couponsbit.us/stores/rayneo-discount-code",
      numberOfItems: RAYNEO_COUPONS.length,
      itemListElement: rayneoOffers.map((offer, index) => ({
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
      "@id": "https://www.couponsbit.us/stores/rayneo-discount-code#breadcrumb",
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
          name: "Rayneo Coupons",
          item: "https://www.couponsbit.us/stores/rayneo-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/rayneo-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does RayNeo Have a Coupon Code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "RayNeo may offer promotional codes, discounts, and special offers at different times. Check CouponsBit for currently available RayNeo coupon codes before shopping.",
          },
        },
        {
          "@type": "Question",
          name: "Where Can I Find a RayNeo Promo Code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can check CouponsBit for available RayNeo promo codes, discount codes, and promotional offers. New deals may appear during seasonal sales and special promotional events.",
          },
        },
        {
          "@type": "Question",
          name: "What Is a RayNeo Coupon Code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A RayNeo coupon code is a promotional code that may provide a discount or other benefit on an eligible RayNeo purchase. Each promotion has its own terms and conditions.",
          },
        },
        {
          "@type": "Question",
          name: "What Is the RayNeo X2 Price?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The RayNeo X2 price can vary based on availability, promotions, retailer, region, and product configuration. Check the latest price before purchasing.",
          },
        },
        {
          "@type": "Question",
          name: "What Are TCL Ray Neo X2 Glasses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TCL Ray Neo X2 glasses are AR glasses designed to provide augmented reality and digital viewing experiences through a wearable device.",
          },
        },
        {
          "@type": "Question",
          name: "Are RayNeo Smart Glasses Compatible With Smartphones?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Compatibility varies by model. Check the specifications for the particular RayNeo product to confirm supported smartphones, laptops, gaming consoles, and other devices.",
          },
        },
        {
          "@type": "Question",
          name: "When Is the Best Time to Buy RayNeo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Black Friday, Cyber Monday, Memorial Day, Labor Day, and holiday shopping periods can be good times to look for RayNeo deals. However, promotions may be available at other times throughout the year.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit Free to Use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. CouponsBit is free to use. Shoppers can browse coupon codes, discounts, and promotional offers across technology, fashion, travel, beauty, and other categories.",
          },
        },
      ],
    },
  ],
};

export default function RayneoStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(rayneoSchema),
        }}
      />
      <Suspense fallback={null}>
        <RayneoCouponsContent />
      </Suspense>
    </>
  );
}
