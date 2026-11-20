import type { Metadata } from "next";
import { Suspense } from "react";
import TetrCouponsContent from "./_components/StoreCouponsContent";
import { TETR_COUPONS } from "./_components/offers";

const TITLE = "Tetr Promo Code: Global Programs From $33,000 | Nov 2026";
const DESCRIPTION =
  "Explore a Tetr promo code and discover the latest discount code offers on global education programs from USD 33,000. Verified opportunities for Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/tetr-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/tetr-promo-code",
      "x-default": "https://www.couponsbit.us/stores/tetr-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/tetr-promo-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/zzlsqavg/image/upload/v1795168729/tetr-logo.webp",
        width: 1200,
        height: 630,
        alt: "Tetr Promo Code & Discount Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/zzlsqavg/image/upload/v1795168729/tetr-logo.webp"],
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

const tetrOffers = TETR_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Tetr ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/tetr-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: {
    "@type": "Organization",
    name: "Tetr",
    url: "https://tetr.io",
  },
}));

const tetrSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/tetr-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/tetr-promo-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-20",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/tetr-promo-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/tetr-promo-code#brand",
      name: "Tetr",
      url: "https://tetr.io",
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/tetr-promo-code#offerlist",
      name: "Tetr Promo Codes & Discount Codes",
      description:
        "Latest verified Tetr promo codes, discount codes and deals on TETR.IO Plus subscriptions.",
      url: "https://www.couponsbit.us/stores/tetr-promo-code",
      numberOfItems: TETR_COUPONS.length,
      itemListElement: tetrOffers.map((offer, index) => ({
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
      "@id": "https://www.couponsbit.us/stores/tetr-promo-code#breadcrumb",
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
          name: "Tetr Coupons",
          item: "https://www.couponsbit.us/stores/tetr-promo-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/tetr-promo-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Tetr Have a Promo Code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tetr may offer promotional codes and subscription deals at different times. Check CouponsBit for currently available Tetr promo codes before subscribing to TETR.IO Plus.",
          },
        },
        {
          "@type": "Question",
          name: "Is TETR.IO Plus Worth It?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TETR.IO Plus gives subscribers access to custom skins, animated stage backgrounds, an exclusive supporter badge, and an ad-free experience. Whether it's worth it depends on how often you play.",
          },
        },
        {
          "@type": "Question",
          name: "How Do I Apply a Tetr Promo Code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Find an available Tetr promo code on CouponsBit, copy it, then head to TETR.IO and apply the code during the subscription checkout process.",
          },
        },
      ],
    },
  ],
};

export default function TetrStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(tetrSchema),
        }}
      />
      <Suspense fallback={null}>
        <TetrCouponsContent />
      </Suspense>
    </>
  );
}
