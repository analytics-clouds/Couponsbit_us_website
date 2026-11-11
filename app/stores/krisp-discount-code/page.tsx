import type { Metadata } from "next";
import { Suspense } from "react";
import KrispCouponsContent from "./_components/StoreCouponsContent";
import { KRISP_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Krisp Discount Code: Get Up to 80% OFF | Nov 2026",
  },
  description:
    "Get the latest Krisp Discount Code and Krisp Promo Code for November 2026. Save up to 80% OFF AI meeting, noise cancellation, and business plans.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/krisp-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/krisp-discount-code",
      "en-PH": "https://www.couponsbit.us/stores/krisp-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/krisp-discount-code",
      "de-DE": "https://www.couponsbit.us/stores/krisp-discount-code",
      "x-default": "https://www.couponsbit.us/stores/krisp-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/krisp-discount-code",
    title: "Krisp Discount Code: Get Up to 80% OFF | Nov 2026",
    description:
      "Get the latest Krisp Discount Code and Krisp Promo Code for November 2026. Save up to 80% OFF AI meeting, noise cancellation, and business plans.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_PH", "en_IN", "de_DE"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/krisp-logo_ajv3iv.webp",
        width: 1200,
        height: 630,
        alt: "Krisp.AI Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Krisp Discount Code: Get Up to 80% OFF | Nov 2026",
    description:
      "Get the latest Krisp Discount Code and Krisp Promo Code for November 2026. Save up to 80% OFF AI meeting, noise cancellation, and business plans.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782730730/krisp-logo_ajv3iv.webp"],
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

const krispOffers = KRISP_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Krisp ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/krisp-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: {
    "@type": "Organization",
    name: "Krisp",
    url: "http://krisp.pxf.io/c/4303217/2859289/33230?subId1=13A2026",
  },
}));

const krispSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/krisp-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/krisp-discount-code",
      name: "Krisp Discount Code: Get Up to 80% OFF | Nov 2026",
      description:
        "Get the latest Krisp Discount Code and Krisp Promo Code for November 2026. Save up to 80% OFF AI meeting, noise cancellation, and business plans.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/krisp-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/krisp-discount-code#brand",
      name: "Krisp",
      url: "https://krisp.ai",
      sameAs: ["https://www.facebook.com/krispai", "https://twitter.com/krispai"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/krisp-discount-code#offerlist",
      name: "Krisp.AI Coupon Codes & Promo Codes",
      description:
        "Get the latest Krisp Discount Code and Krisp Promo Code for November 2026. Save up to 80% OFF AI meeting, noise cancellation, and business plans.",
      url: "https://www.couponsbit.us/stores/krisp-discount-code",
      numberOfItems: KRISP_COUPONS.length,
      itemListElement: krispOffers.map((offer, index) => ({
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
      "@id": "https://www.couponsbit.us/stores/krisp-discount-code#breadcrumb",
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
          name: "Krisp.AI Coupons",
          item: "https://www.couponsbit.us/stores/krisp-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/krisp-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Krisp AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Krisp AI is an AI-powered meeting assistant that offers noise cancellation, meeting transcription, AI-generated summaries, recordings, and productivity tools for virtual meetings.",
          },
        },
        {
          "@type": "Question",
          name: "Does Krisp AI only remove background noise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. In addition to AI noise cancellation, Krisp also provides meeting recordings, AI notes, transcripts, summaries, action items, and accent conversion.",
          },
        },
        {
          "@type": "Question",
          name: "Which meeting platforms work with Krisp AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Krisp works with many popular communication platforms, including Zoom, Microsoft Teams, Google Meet, Slack, Webex, and others.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Krisp AI promo codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Krisp AI promo codes, discount offers, and software deals on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "Is Krisp AI suitable for remote teams?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Krisp AI is widely used by remote workers, distributed teams, freelancers, and businesses to improve meeting quality and collaboration.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Couponsbit is completely free and helps users discover verified coupon codes, promo offers, and discounts from leading software and technology brands.",
          },
        },
      ],
    },
  ],
};

export default function KrispStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(krispSchema),
        }}
      />
      <Suspense fallback={null}>
        <KrispCouponsContent />
      </Suspense>
    </>
  );
}