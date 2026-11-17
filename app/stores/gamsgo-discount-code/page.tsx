import type { Metadata } from "next";
import { Suspense } from "react";
import GamsGoCouponsContent from "./_components/StoreCouponsContent";
import { GAMSGO_COUPONS } from "./_components/offers";

const TITLE = "GamsGo Promo Code: Up to 85% Off Subscriptions | Nov 2026";
const DESCRIPTION =
  "Use a GamsGo promo code and GamsGo discount code to save up to 85% on premium subscriptions or get ChatGPT GPT-5.6 Sol for $5/month. Verified Nov 2026. Shop now.";
const CANONICAL = "https://www.couponsbit.us/stores/gamsgo-discount-code";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: CANONICAL,
    languages: {
      "en-US": CANONICAL,
      "en-GB": CANONICAL,
      "en-IN": CANONICAL,
      "x-default": CANONICAL,
    },
  },

  openGraph: {
    type: "website",
    url: CANONICAL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787739252/gamesgo-logo_xo1xw9.webp",
        width: 1200,
        height: 630,
        alt: "GamsGo Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787739252/gamesgo-logo_xo1xw9.webp"],
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

  other: {
    "geo.region": "US",
    "geo.country": "US",
  },
};

const storeOffers = GAMSGO_COUPONS.map((coupon, index) => ({
  "@type": "ListItem",
  position: index + 1,
  item: {
    "@type": "Offer",
    name: coupon.title,
    description: coupon.description,
    url: CANONICAL,
    seller: {
      "@id": `${CANONICAL}#brand`,
    },
    priceCurrency: "USD",
    price: "0",
    ...(coupon.validTill && { validThrough: coupon.validTill }),
    ...(coupon.code && { couponCode: coupon.code }),
  },
}));

const gamsGoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": `${CANONICAL}#breadcrumb` },
    },

    {
      "@type": "Organization",
      "@id": `${CANONICAL}#brand`,
      name: "GamsGo",
      url: "https://www.gamsgo.com",
    },

    {
      "@type": "ItemList",
      "@id": `${CANONICAL}#offerlist`,
      name: "GamsGo Discount Codes & Coupon Codes",
      description: "Latest GamsGo discount codes and offers for shared streaming and software subscriptions.",
      url: CANONICAL,
      numberOfItems: GAMSGO_COUPONS.length,
      itemListElement: storeOffers,
    },

    {
      "@type": "WebSite",
      "@id": "https://www.couponsbit.us/#website",
      url: "https://www.couponsbit.us",
      name: "Couponsbit",
      description: "Couponsbit is one of the best coupon websites offering verified coupons, deals, and coupon help for top brands worldwide.",
      inLanguage: "en-US",
      publisher: { "@id": "https://www.couponsbit.us/#organization" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/#organization",
      name: "Couponsbit",
      url: "https://www.couponsbit.us",
      logo: { "@type": "ImageObject", url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/couponsbit-logo_kxqyir.webp", width: 200, height: 60 },
      contactPoint: { "@type": "ContactPoint", contactType: "Customer Support", availableLanguage: "English" },
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "GamsGo Coupons", item: CANONICAL },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is GamsGo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GamsGo is a subscription-sharing marketplace and digital products platform where users can access shared slots on family and multi-user plans for services like Netflix, Spotify, Disney+, YouTube Premium, Adobe, and Crunchyroll, as well as buy game accounts, gift cards, game top-ups, game currency, and AI subscriptions.",
          },
        },
        {
          "@type": "Question",
          name: "Does GamsGo offer discount codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GamsGo runs promotions such as Spotify Premium deals, Adobe subscription deals, and promotional promo codes that offer savings on eligible purchases.",
          },
        },
        {
          "@type": "Question",
          name: "What is a GamsGo promo code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A GamsGo promo code is a promotional code that may provide a discount or other offer on an eligible purchase. The exact terms depend on the promotion.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find GamsGo discount codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can check Couponsbit for available GamsGo promo codes, discount codes, coupon offers, and deals before completing your purchase.",
          },
        },
        {
          "@type": "Question",
          name: "What subscriptions can I share through GamsGo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GamsGo offers shared access to services including Netflix, Spotify, Disney+, YouTube Premium, Adobe, and Crunchyroll.",
          },
        },
        {
          "@type": "Question",
          name: "How does subscription sharing work on GamsGo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GamsGo connects buyers with sellers offering individual profiles or slots within multi-user subscription plans at a shared cost.",
          },
        },
        {
          "@type": "Question",
          name: "What can I buy on GamsGo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GamsGo offers digital subscriptions, game accounts, gift cards, game top-ups, game currency, and game items across entertainment, music, AI, software, sports, and gaming categories.",
          },
        },
        {
          "@type": "Question",
          name: "Does GamsGo sell Netflix subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Netflix is currently listed in GamsGo's digital subscription marketplace, though product type, duration, account access, region, and other conditions can vary by listing.",
          },
        },
        {
          "@type": "Question",
          name: "Does GamsGo sell AI subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GamsGo currently lists AI-related services including ChatGPT, Claude, Gemini, Grok, Midjourney, Perplexity, Cursor, GitHub Copilot, Canva, and other AI tools.",
          },
        },
        {
          "@type": "Question",
          name: "Does GamsGo sell game top-ups?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GamsGo has a dedicated top-up center covering games and platforms such as Roblox, Free Fire, Valorant, PUBG Mobile, Genshin Impact, Pokémon GO, Xbox, PlayStation, Nintendo, and others.",
          },
        },
        {
          "@type": "Question",
          name: "What is a GamsGo direct top-up?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A direct top-up allows eligible game currency or items to be credited directly to a game account using information such as a UID or Player ID rather than a traditional gift card or redeem code.",
          },
        },
        {
          "@type": "Question",
          name: "Does GamsGo sell gift cards?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GamsGo currently offers gift cards associated with platforms including PlayStation, Xbox, Apple, Nintendo, Google Play, Razer, and others.",
          },
        },
        {
          "@type": "Question",
          name: "Can I buy PlayStation Plus on GamsGo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GamsGo currently lists PlayStation Plus products across Essential, Extra, and Premium tiers, with different durations and access arrangements.",
          },
        },
        {
          "@type": "Question",
          name: "Can I buy Xbox Game Pass on GamsGo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The current GamsGo marketplace includes Xbox Game Pass-related products across different plans and durations.",
          },
        },
        {
          "@type": "Question",
          name: "Are GamsGo products region-specific?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some are. Digital gift cards and subscriptions may be restricted by country, currency, platform, or account region. Always check the individual product listing before purchasing.",
          },
        },
        {
          "@type": "Question",
          name: "Does GamsGo offer instant delivery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some products are listed with instant delivery, while others have longer guaranteed delivery windows. The delivery time is shown on the individual product listing.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use a GamsGo discount code on every product?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. Promotional codes can have individual terms and may apply only to selected products, categories, or campaigns. Check the promotion details before ordering.",
          },
        },
        {
          "@type": "Question",
          name: "Does GamsGo have gaming products?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Gaming is a major part of the marketplace, with game accounts, top-ups, gift cards, game currency, and game items available across numerous titles and platforms.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers.",
          },
        },
      ],
    },
  ],
};

export default function GamsGoStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gamsGoSchema) }} />
      <Suspense fallback={null}>
        <GamsGoCouponsContent />
      </Suspense>
    </>
  );
}
