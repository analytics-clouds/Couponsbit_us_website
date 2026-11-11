import type { Metadata } from "next";
import { Suspense } from "react";
import ObsbotCouponsContent from "./_components/StoreCouponsContent";
import { OBSBOT_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "OBSBOT Discount Code: AI Webcams from $49 | Nov 2026",
  },
  description:
    "Get the latest OBSBOT Discount Code and OBSBOT Promo Code for November 2026. Shop AI webcams, 4K cameras, and accessories from just $49.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/obsbot-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/obsbot-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/obsbot-discount-code",
      "x-default": "https://www.couponsbit.us/stores/obsbot-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/obsbot-discount-code",
    title: "OBSBOT Discount Code: AI Webcams from $49 | Nov 2026",
    description:
      "Get the latest OBSBOT Discount Code and OBSBOT Promo Code for November 2026. Shop AI webcams, 4K cameras, and accessories from just $49.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782373659/obsbot-coupon-code_rs8fff.jpg",
        width: 1200,
        height: 630,
        alt: "Obsbot Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "OBSBOT Discount Code: AI Webcams from $49 | Nov 2026",
    description:
      "Get the latest OBSBOT Discount Code and OBSBOT Promo Code for November 2026. Shop AI webcams, 4K cameras, and accessories from just $49.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782373659/obsbot-coupon-code_rs8fff.jpg"],
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

const obsbotOffers = OBSBOT_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `OBSBOT ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/obsbot-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: {
    "@type": "Organization",
    name: "OBSBOT",
    url: "https://obsbotamazonsellerus.pxf.io/c/6434050/3434711/46044?subId1=1015",
  },
}));

const obsbotSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/obsbot-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/obsbot-discount-code",
      name: "OBSBOT Discount Code: AI Webcams from $49 | Nov 2026",
      description:
        "Get the latest OBSBOT Discount Code and OBSBOT Promo Code for November 2026. Shop AI webcams, 4K cameras, and accessories from just $49.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/obsbot-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/obsbot-discount-code#brand",
      name: "OBSBOT",
      url: "https://www.obsbot.com",
      sameAs: ["https://www.facebook.com/obsbot", "https://twitter.com/obsbot"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/obsbot-discount-code#offerlist",
      name: "Obsbot Coupon Codes & Promo Codes",
      description:
        "Get the latest OBSBOT Discount Code and OBSBOT Promo Code for November 2026. Shop AI webcams, 4K cameras, and accessories from just $49.",
      url: "https://www.couponsbit.us/stores/obsbot-discount-code",
      numberOfItems: OBSBOT_COUPONS.length,
      itemListElement: obsbotOffers.map((offer, index) => ({
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
      "@id": "https://www.couponsbit.us/stores/obsbot-discount-code#breadcrumb",
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
          name: "Obsbot Coupons",
          item: "https://www.couponsbit.us/stores/obsbot-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/obsbot-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is OBSBOT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "OBSBOT is an AI camera company that develops intelligent webcams, tracking cameras, and video production tools for creators, businesses, and professionals.",
          },
        },
        {
          "@type": "Question",
          name: "What is OBSBOT best known for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The brand is best known for its AI-powered tracking webcams and smart camera technology that automatically follows users during recording and streaming.",
          },
        },
        {
          "@type": "Question",
          name: "Are OBSBOT cameras suitable for streaming?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many OBSBOT products are designed specifically for livestreaming, content creation, video conferencing, and online presentations.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find OBSBOT coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest OBSBOT coupon codes, promo offers, and camera discounts on CouponsBit.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps shoppers discover savings from popular brands across multiple categories.",
          },
        },
      ],
    },
  ],
};

export default function ObsbotStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(obsbotSchema),
        }}
      />
      <Suspense fallback={null}>
        <ObsbotCouponsContent />
      </Suspense>
    </>
  );
}