import type { Metadata } from "next";
import { Suspense } from "react";
import SintraCouponsContent from "./_components/StoreCouponsContent";
import { SINTRA_COUPONS } from "./_components/offers";

const TITLE = "Sintra Discount Code: Get 70% OFF on Plans | Nov 2026";
const DESCRIPTION =
  "Get the latest Sintra Discount Code and Sintra Promo Code for November 2026. Save 70% OFF annual plans or get AI plans from just $15.60/month.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/sintra-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/sintra-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/sintra-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/sintra-discount-code",
      "en-PK": "https://www.couponsbit.us/stores/sintra-discount-code",
      "x-default": "https://www.couponsbit.us/stores/sintra-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/sintra-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN", "en_PK"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781776169/sintra-coupon-code_piyu2d.webp",
        width: 1200,
        height: 630,
        alt: "Sintra Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1781776169/sintra-coupon-code_piyu2d.webp"],
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

const sintraOffers = SINTRA_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Sintra ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/sintra-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Sintra", url: "https://sintra.ai" },
}));

const sintraSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/sintra-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/sintra-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/sintra-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/sintra-discount-code#brand",
      name: "Sintra",
      url: "https://sintra.ai",
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/sintra-discount-code#offerlist",
      name: "Sintra Coupon Codes & Promo Codes",
      description:
        "Latest verified Sintra coupon codes, promo codes and discount codes for AI business automation plans and subscriptions.",
      url: "https://www.couponsbit.us/stores/sintra-discount-code",
      numberOfItems: SINTRA_COUPONS.length,
      itemListElement: sintraOffers.map((offer, index) => ({
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
      "@id": "https://www.couponsbit.us/stores/sintra-discount-code#breadcrumb",
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
          name: "Sintra Coupons",
          item: "https://www.couponsbit.us/stores/sintra-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/sintra-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Sintra offer coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Sintra periodically offers promo codes, subscription discounts, and promotional pricing for eligible plans.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Sintra promo codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find updated Sintra coupon codes and software deals on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "What is Sintra used for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sintra is used for AI-powered business productivity, content creation, workflow automation, marketing support, and business assistance.",
          },
        },
        {
          "@type": "Question",
          name: "Who can benefit from Sintra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Entrepreneurs, freelancers, consultants, agencies, creators, startups, and small businesses can all use Sintra to streamline operations and improve productivity.",
          },
        },
        {
          "@type": "Question",
          name: "Does Sintra offer multiple AI assistants?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Sintra provides access to multiple specialized AI helpers designed for different business tasks and workflows.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Couponsbit is completely free and provides access to verified coupon codes, discounts, and promotional offers.",
          },
        },
      ],
    },
  ],
};

export default function SintraStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sintraSchema),
        }}
      />
      <Suspense fallback={null}>
        <SintraCouponsContent />
      </Suspense>
    </>
  );
}
