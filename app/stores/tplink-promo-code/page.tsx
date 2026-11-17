import type { Metadata } from "next";
import { Suspense } from "react";
import TplinkCouponsContent from "./_components/StoreCouponsContent";
import { TPLINK_COUPONS } from "./_components/offers";

const TITLE = "TP-Link Promo Code: Up to 50% OFF Smart Devices | Nov 2026";
const DESCRIPTION =
  "Use TP-Link Promo Code and TP-Link Discount Code to save 50% on Tapo products and 45% on Deco Wi-Fi systems. Verified Nov 2026 deals.";
const CANONICAL = "https://www.couponsbit.us/stores/tplink-promo-code";

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
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1788248210/tp-link-logo_y9efya.webp",
        width: 1200,
        height: 630,
        alt: "TP-Link Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1788248210/tp-link-logo_y9efya.webp"],
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

const storeOffers = TPLINK_COUPONS.map((coupon, index) => ({
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

const tplinkSchema = {
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
      name: "TP-Link",
      url: "https://www.tp-link.com/us",
    },

    {
      "@type": "ItemList",
      "@id": `${CANONICAL}#offerlist`,
      name: "TP-Link Promo Codes & Coupon Codes",
      description: "Latest TP-Link promo codes and offers for routers, mesh WiFi and smart home devices.",
      url: CANONICAL,
      numberOfItems: TPLINK_COUPONS.length,
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
        { "@type": "ListItem", position: 3, name: "TP-Link Coupons", item: CANONICAL },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is TP-Link?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TP-Link is a global networking hardware brand offering routers, mesh WiFi systems, range extenders, smart home devices, security cameras, and business networking equipment.",
          },
        },
        {
          "@type": "Question",
          name: "Does TP-Link offer promo codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TP-Link and its regional stores run promotions such as mesh WiFi deals, smart home picks, sales, and product-specific offers.",
          },
        },
        {
          "@type": "Question",
          name: "What is a TP-Link promo code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A TP-Link promo code is a promotional code that may provide a discount or other benefit on an eligible purchase. The exact terms vary between promotions.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find TP-Link promo codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can check Couponsbit for available TP-Link promotional offers, discount codes, and deals before shopping. Make sure to select the appropriate offer for your country and product.",
          },
        },
        {
          "@type": "Question",
          name: "Does a TP-Link promo code work in every country?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. Promotions can be region-specific. A code offered in the USA may not work on the Canadian or UK store, so check the terms and use the correct regional website.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use a TP-Link promo code on any product?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "That depends on the specific promotion. Some codes may be limited to selected products, categories, customers, regions, or dates. Always check the applicable terms before checkout.",
          },
        },
        {
          "@type": "Question",
          name: "What products does TP-Link sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TP-Link sells a wide range of networking and smart-home products, including routers, mesh Wi-Fi systems, range extenders, switches, access points, network adapters, 4G/5G routers, smart cameras, video doorbells, smart plugs, smart lighting, robot vacuums, and business networking equipment.",
          },
        },
        {
          "@type": "Question",
          name: "What is TP-Link Deco?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Deco is TP-Link's whole-home mesh Wi-Fi product family. Multiple Deco units can work together to provide a unified wireless network throughout a home.",
          },
        },
        {
          "@type": "Question",
          name: "What is TP-Link Tapo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tapo is TP-Link's smart-home ecosystem, with products including security cameras, video doorbells, smart plugs, smart bulbs, sensors, and smart appliances such as robot vacuums.",
          },
        },
        {
          "@type": "Question",
          name: "Does TP-Link sell gaming routers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TP-Link offers gaming-oriented Archer routers with features designed for gaming and high-performance connectivity.",
          },
        },
        {
          "@type": "Question",
          name: "Does TP-Link sell 5G routers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TP-Link offers 5G and 4G routers in various regional catalogs. The UK range, for example, includes the Archer NX200 5G router.",
          },
        },
        {
          "@type": "Question",
          name: "Does TP-Link offer business networking products?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Its Omada ecosystem includes business networking products such as access points, switches, gateways, controllers, and other networking equipment.",
          },
        },
        {
          "@type": "Question",
          name: "Does TP-Link sell WiFi range extenders?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TP-Link offers a range of WiFi extenders designed to boost coverage alongside its routers and mesh systems.",
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

export default function TplinkStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tplinkSchema) }} />
      <Suspense fallback={null}>
        <TplinkCouponsContent />
      </Suspense>
    </>
  );
}
