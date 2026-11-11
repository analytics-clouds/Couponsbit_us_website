import type { Metadata } from "next";
import { Suspense } from "react";
import OpenartCouponsContent from "./_components/StoreCouponsContent";
import { OPENART_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "OpenArt Discount Code: Up to 27% OFF | Nov 2026",
  },
  description:
    "Get the latest OpenArt Discount Code and OpenArt Promo Code for November 2026. Save up to 27% OFF annual plans or subscribe from just $14/month with verified offers.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/openart-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/openart-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/openart-discount-code",
      "en-PK": "https://www.couponsbit.us/stores/openart-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/openart-discount-code",
      "x-default": "https://www.couponsbit.us/stores/openart-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/openart-discount-code",
    title: "OpenArt Discount Code: Up to 27% OFF | Nov 2026",
    description:
      "Get the latest OpenArt Discount Code and OpenArt Promo Code for November 2026. Save up to 27% OFF annual plans or subscribe from just $14/month with verified offers.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_IN", "en_PK", "en_GB"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/emergent-coupon-code_oeaxoh_aeoxm7.webp",
        width: 1200,
        height: 630,
        alt: "Openart.AI Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "OpenArt Discount Code: Up to 27% OFF | Nov 2026",
    description:
      "Get the latest OpenArt Discount Code and OpenArt Promo Code for November 2026. Save up to 27% OFF annual plans or subscribe from just $14/month with verified offers.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782288848/emergent-coupon-code_oeaxoh_aeoxm7.webp"],
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

const openartOffers = OPENART_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `OpenArt ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/openart-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: {
    "@type": "Organization",
    name: "OpenArt",
    url: "https://openartai.pxf.io/c/4303217/3106413/38572?subId1=1015",
  },
}));

const openartSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/openart-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/openart-discount-code",
      name: "OpenArt Discount Code: Up to 27% OFF | Nov 2026",
      description:
        "Get the latest OpenArt Discount Code and OpenArt Promo Code for November 2026. Save up to 27% OFF annual plans or subscribe from just $14/month with verified offers.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/openart-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/openart-discount-code#brand",
      name: "OpenArt",
      url: "https://openart.ai",
      sameAs: ["https://www.facebook.com/openartai", "https://twitter.com/openartai"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/openart-discount-code#offerlist",
      name: "Openart.AI Coupon Codes & Promo Codes",
      description:
        "Get the latest OpenArt Discount Code and OpenArt Promo Code for November 2026. Save up to 27% OFF annual plans or subscribe from just $14/month with verified offers.",
      url: "https://www.couponsbit.us/stores/openart-discount-code",
      numberOfItems: OPENART_COUPONS.length,
      itemListElement: openartOffers.map((offer, index) => ({
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
      "@id": "https://www.couponsbit.us/stores/openart-discount-code#breadcrumb",
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
          name: "Openart.AI Coupons",
          item: "https://www.couponsbit.us/stores/openart-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/openart-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is OpenArt AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "OpenArt AI is an AI-powered image generation platform that helps users create, edit, and customize artwork using artificial intelligence.",
          },
        },
        {
          "@type": "Question",
          name: "Can beginners use OpenArt AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The platform is designed to be accessible for both beginners and experienced creators.",
          },
        },
        {
          "@type": "Question",
          name: "What can I create with OpenArt AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Users can generate digital art, illustrations, marketing graphics, concept designs, social media visuals, and more.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find OpenArt AI coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest OpenArt AI coupon codes, promo offers, and subscription discounts on CouponsBit.",
          },
        },
        {
          "@type": "Question",
          name: "Does OpenArt AI offer premium plans?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Users can access additional features and capabilities through paid subscription plans.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps users discover discounts, coupon codes, and special offers from leading brands.",
          },
        },
      ],
    },
  ],
};

export default function OpenartStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(openartSchema),
        }}
      />
      <Suspense fallback={null}>
        <OpenartCouponsContent />
      </Suspense>
    </>
  );
}