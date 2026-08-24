import type { Metadata } from "next";
import LittleCaesarsCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Little Caesars Promo Code: Pizza & Combo Offers | Aug 2026",
  description:
    "Find the latest Little Caesars promo codes for Aug 2026. Discover pizza offers, Crazy Bread deals, wings picks and combo offers with Couponsbit.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/little-caesars-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/little-caesars-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/little-caesars-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/little-caesars-promo-code",
      "x-default": "https://www.couponsbit.us/stores/little-caesars-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/little-caesars-promo-code",
    title: "Little Caesars Promo Code: Pizza & Combo Offers | Aug 2026",
    description:
      "Find the latest Little Caesars promo codes for Aug 2026. Discover pizza offers, Crazy Bread deals, wings picks and combo offers with Couponsbit.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/little-ceaser-pizza_mbcw0k.webp",
        width: 1200,
        height: 630,
        alt: "Little Caesars Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Little Caesars Promo Code: Pizza & Combo Offers | Aug 2026",
    description:
      "Find the latest Little Caesars promo codes for Aug 2026. Discover pizza offers, Crazy Bread deals, wings picks and combo offers with Couponsbit.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787571687/little-ceaser-pizza_mbcw0k.webp"],
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
};

const littleCaesarsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/little-caesars-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/little-caesars-promo-code",
      name: "Little Caesars Promo Code: Pizza & Combo Offers | Aug 2026",
      description:
        "Find the latest Little Caesars promo codes for Aug 2026. Discover pizza offers, Crazy Bread deals, wings picks and combo offers with Couponsbit.",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/little-caesars-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/little-caesars-promo-code#offerlist",
      name: "Little Caesars Promo Codes & Coupon Codes",
      description: "Latest Little Caesars promo codes and offers for pizza, Crazy Bread and combo deals.",
      url: "https://www.couponsbit.us/stores/little-caesars-promo-code",
      numberOfItems: 6,
      itemListElement: [
        {
          "@type": "ListItem", position: 1,
          item: { "@type": "Offer", name: "New Pizza Offers", description: "Discover the latest pizza offers from Little Caesars.", url: "https://www.couponsbit.us/stores/little-caesars-promo-code", seller: { "@type": "Organization", name: "Little Caesars", url: "https://littlecaesars.com" } },
        },
        {
          "@type": "ListItem", position: 2,
          item: { "@type": "Offer", name: "Crazy Bread & Sides Deals", description: "Browse Crazy Bread and sides deals at Little Caesars.", url: "https://www.couponsbit.us/stores/little-caesars-promo-code", seller: { "@type": "Organization", name: "Little Caesars", url: "https://littlecaesars.com" } },
        },
        {
          "@type": "ListItem", position: 3,
          item: { "@type": "Offer", name: "Wings Picks", description: "Shop wings picks from Little Caesars.", url: "https://www.couponsbit.us/stores/little-caesars-promo-code", seller: { "@type": "Organization", name: "Little Caesars", url: "https://littlecaesars.com" } },
        },
        {
          "@type": "ListItem", position: 4,
          item: { "@type": "Offer", name: "Combo Meal Offers", description: "Browse combo meal offers at Little Caesars.", url: "https://www.couponsbit.us/stores/little-caesars-promo-code", seller: { "@type": "Organization", name: "Little Caesars", url: "https://littlecaesars.com" } },
        },
        {
          "@type": "ListItem", position: 5,
          item: { "@type": "Offer", name: "Hot-N-Ready Picks", description: "Explore Hot-N-Ready picks from Little Caesars.", url: "https://www.couponsbit.us/stores/little-caesars-promo-code", seller: { "@type": "Organization", name: "Little Caesars", url: "https://littlecaesars.com" } },
        },
        {
          "@type": "ListItem", position: 6,
          item: { "@type": "Offer", name: "Rewards App Offers", description: "Find Little Caesars' rewards app offers.", url: "https://www.couponsbit.us/stores/little-caesars-promo-code", seller: { "@type": "Organization", name: "Little Caesars", url: "https://littlecaesars.com" } },
        },
      ],
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
      "@id": "https://www.couponsbit.us/stores/little-caesars-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Little Caesars Coupons", item: "https://www.couponsbit.us/stores/little-caesars-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/little-caesars-promo-code#faq",
      mainEntity: [
        { "@type": "Question", name: "What is Little Caesars?", acceptedAnswer: { "@type": "Answer", text: "Little Caesars is a pizza restaurant chain known for its Hot-N-Ready pizzas, Crazy Bread and combo meal offers." } },
        { "@type": "Question", name: "Does Little Caesars offer promo codes?", acceptedAnswer: { "@type": "Answer", text: "Yes. Little Caesars runs promotions such as combo meal offers and rewards app deals." } },
        { "@type": "Question", name: "Where can I find Little Caesars promo codes?", acceptedAnswer: { "@type": "Answer", text: "You can find the latest Little Caesars promo codes and offers on Couponsbit." } },
        { "@type": "Question", name: "What is Hot-N-Ready?", acceptedAnswer: { "@type": "Answer", text: "Hot-N-Ready is Little Caesars' program offering select pizzas ready to go without a wait at participating locations." } },
        { "@type": "Question", name: "Does Little Caesars have a rewards app?", acceptedAnswer: { "@type": "Answer", text: "Yes. Little Caesars offers a rewards app with offers and benefits for eligible members." } },
        { "@type": "Question", name: "Is Couponsbit free to use?", acceptedAnswer: { "@type": "Answer", text: "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers." } },
      ],
    },
  ],
};

export default function LittleCaesarsStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(littleCaesarsSchema) }} />
      <LittleCaesarsCouponsContent />
    </>
  );
}
