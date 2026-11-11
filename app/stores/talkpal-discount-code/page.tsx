import type { Metadata } from "next";
import { Suspense } from "react";
import TalkpalCouponsContent from "./_components/StoreCouponsContent";
import { TALKPAL_COUPONS } from "./_components/offers";

const TITLE = "Talkpal Discount Code: Save Up to 75% + 14-Day Free Trial | Nov 2026";
const DESCRIPTION =
  "Get the latest Talkpal discount code and save up to 75% on Premium plans. Enjoy verified promo codes, a 14-day free trial, and exclusive offers this Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/talkpal-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/talkpal-discount-code",
      "de-DE": "https://www.couponsbit.us/stores/talkpal-discount-code",
      "ja-JP": "https://www.couponsbit.us/stores/talkpal-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/talkpal-discount-code",
      "en-AU": "https://www.couponsbit.us/stores/talkpal-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/talkpal-discount-code",
      "en-PK": "https://www.couponsbit.us/stores/talkpal-discount-code",
      "x-default": "https://www.couponsbit.us/stores/talkpal-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/talkpal-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["de_DE", "ja_JP", "en_IN", "en_AU", "en_GB", "en_PK"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782288847/talkpal-coupon-code_gozaoz.webp",
        width: 1200,
        height: 630,
        alt: "Talkpal.AI Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782288847/talkpal-coupon-code_gozaoz.webp"],
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

const talkpalOffers = TALKPAL_COUPONS.map((c, i) => ({
  "@type": "ListItem",
  position: i + 1,
  item: {
    "@type": "Offer",
    name: c.title,
    description: c.description,
    url: `https://www.couponsbit.us/stores/talkpal-discount-code#${c.id}`,
    seller: {
      "@type": "Organization",
      name: "Talkpal.AI",
      url: "https://talkpal.ai",
    },
  },
}));

const talkpalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/talkpal-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/talkpal-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/talkpal-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/talkpal-discount-code#offerlist",
      name: "Talkpal.AI Coupon Codes & Promo Codes",
      description: DESCRIPTION,
      url: "https://www.couponsbit.us/stores/talkpal-discount-code",
      numberOfItems: TALKPAL_COUPONS.length,
      itemListElement: talkpalOffers,
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
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/talkpal-discount-code#brand",
      name: "Talkpal.AI",
      url: "https://talkpal.ai",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/talkpal-discount-code#breadcrumb",
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
          name: "Talkpal.AI Coupons",
          item: "https://www.couponsbit.us/stores/talkpal-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/talkpal-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Talkpal AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Talkpal AI is an AI-powered language-learning platform that helps users practice conversations, improve pronunciation, and build language skills through interactive learning experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Is Talkpal AI suitable for beginners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The platform is designed to support learners at different proficiency levels, including beginners.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use Talkpal AI on mobile devices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Users can access Talkpal AI through supported mobile devices and other compatible platforms.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Talkpal AI coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Talkpal AI coupon codes, promo offers, and subscription discounts on CouponsBit.",
          },
        },
        {
          "@type": "Question",
          name: "Does Talkpal AI support multiple languages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The platform offers learning opportunities across numerous languages.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps users discover valuable discounts and promotional offers from leading brands.",
          },
        },
      ],
    },
  ],
};

export default function TalkpalStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(talkpalSchema),
        }}
      />
      <Suspense fallback={null}>
        <TalkpalCouponsContent />
      </Suspense>
    </>
  );
}
