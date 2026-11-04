import type { Metadata } from "next";
import NespressoCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Nespresso Promo code: Get 20% OFF + Free Machine | Nov 2026",
  },
  description:
    "Get the latest Nespresso Discount Code and Nespresso Promo Code for November 2026. Save 20% OFF coffee machine bundles or get a FREE Essenza Mini with eligible purchases.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/nespresso-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/nespresso-promo-code",
      "x-default": "https://www.couponsbit.us/stores/nespresso-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/nespresso-promo-code",
    title: "Nespresso Promo code: Get 20% OFF + Free Machine | Nov 2026",
    description:
      "Get the latest Nespresso Discount Code and Nespresso Promo Code for November 2026. Save 20% OFF coffee machine bundles or get a FREE Essenza Mini with eligible purchases.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1793688836/nespresso-logo_evanwx.webp",
        width: 1200,
        height: 630,
        alt: "Nespresso Promo Code & Promo codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nespresso Promo code: Get 20% OFF + Free Machine | Nov 2026",
    description:
      "Get the latest Nespresso Discount Code and Nespresso Promo Code for November 2026. Save 20% OFF coffee machine bundles or get a FREE Essenza Mini with eligible purchases.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1793688836/nespresso-logo_evanwx.webp"],
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

const nespressoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/nespresso-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/nespresso-promo-code",
      name: "Nespresso Promo code: Get 20% OFF + Free Machine | Nov 2026",
      description:
        "Get the latest Nespresso Discount Code and Nespresso Promo Code for November 2026. Save 20% OFF coffee machine bundles or get a FREE Essenza Mini with eligible purchases.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-03",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/nespresso-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/nespresso-promo-code#offerlist",
      name: "Nespresso Promo Codes & Coupon Codes",
      description: "Latest Nespresso promo codes and offers.",
      url: "https://www.couponsbit.us/stores/nespresso-promo-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.desc,
          url: "https://www.couponsbit.us/stores/nespresso-promo-code",
          seller: { "@type": "Organization", name: "Nespresso", url: "https://www.nespresso.com" },
        },
      })),
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
      "@id": "https://www.couponsbit.us/stores/nespresso-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Nespresso Coupons", item: "https://www.couponsbit.us/stores/nespresso-promo-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/nespresso-promo-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where can I find a Nespresso promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit the Nespresso store page on CouponsBit to check available promo codes, machine discounts, and coffee offers. Read the conditions to confirm that your order qualifies."
      }
    },
    {
      "@type": "Question",
      "name": "Are Nespresso Original and Vertuo capsules interchangeable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Original and Vertuo capsules are designed for different machine systems. Always select capsules that match your Nespresso machine."
      }
    },
    {
      "@type": "Question",
      "name": "Does Nespresso offer discounts for new customers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Nespresso's US welcome page advertises introductory offers for new customers, including a coffee discount code supplied with a new machine. Offers and eligibility conditions may change."
      }
    },
    {
      "@type": "Question",
      "name": "Does Nespresso offer free shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nespresso's US shipping terms provide free standard shipping to registered customers on qualifying orders of $50 or more, excluding tax. Different conditions may apply to guest orders and non-continental US locations."
      }
    },
    {
      "@type": "Question",
      "name": "What is Nespresso AutoReplenish?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AutoReplenish is Nespresso's recurring coffee delivery service. Customers can schedule orders of their preferred capsules, and eligible orders may receive promotional benefits. Check the current terms before subscribing."
      }
    },
    {
      "@type": "Question",
      "name": "Can I combine two Nespresso promo codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the specific promotion. Nespresso's terms generally restrict combining offers, although certain referral rewards may be combined with one additional promo code when both sets of conditions are met."
      }
    },
    {
      "@type": "Question",
      "name": "Can I return a Nespresso machine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Machines purchased directly from Nespresso can generally be returned within 30 days of receipt, subject to the return conditions. Products purchased from another retailer must be returned to that retailer. Check the current policy before sending an item back."
      }
    }
  ]
},
  ],
};

export default function NespressoStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(nespressoSchema) }} />
      <NespressoCouponsContent />
    </>
  );
}
