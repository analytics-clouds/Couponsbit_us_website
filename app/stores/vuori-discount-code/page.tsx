import type { Metadata } from "next";
import VuoriCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Vuori Discount Code: 40% OFF + 25% OFF | Nov 2026",
  },
  description:
    "Get the latest Vuori Discount Code for November 2026 and save 40% OFF select activewear or enjoy 25% OFF eligible performance clothing and accessories.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/vuori-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/vuori-discount-code",
      "x-default": "https://www.couponsbit.us/stores/vuori-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/vuori-discount-code",
    title: "Vuori Discount Code: 40% OFF + 25% OFF | Nov 2026",
    description:
      "Get the latest Vuori Discount Code for November 2026 and save 40% OFF select activewear or enjoy 25% OFF eligible performance clothing and accessories.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1793688836/vuori_euoigj.webp",
        width: 1200,
        height: 630,
        alt: "Vuori Discount Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vuori Discount Code: 40% OFF + 25% OFF | Nov 2026",
    description:
      "Get the latest Vuori Discount Code for November 2026 and save 40% OFF select activewear or enjoy 25% OFF eligible performance clothing and accessories.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1793688836/vuori_euoigj.webp"],
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

const vuoriSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/vuori-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/vuori-discount-code",
      name: "Vuori Discount Code: 40% OFF + 25% OFF | Nov 2026",
      description:
        "Get the latest Vuori Discount Code for November 2026 and save 40% OFF select activewear or enjoy 25% OFF eligible performance clothing and accessories.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-03",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/vuori-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/vuori-discount-code#offerlist",
      name: "Vuori Discount Codes & Promo Codes",
      description: "Latest Vuori discount codes and offers.",
      url: "https://www.couponsbit.us/stores/vuori-discount-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.desc,
          url: "https://www.couponsbit.us/stores/vuori-discount-code",
          seller: { "@type": "Organization", name: "Vuori", url: "https://vuoriclothing.com" },
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
      "@id": "https://www.couponsbit.us/stores/vuori-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Vuori Coupons", item: "https://www.couponsbit.us/stores/vuori-discount-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/vuori-discount-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I find a Vuori discount code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visit the Vuori page on CouponsBit to check available discount codes and promo offers. You can also visit Vuori's official website for current promotional discounts."
          }
        },
        {
          "@type": "Question",
          "name": "Does Vuori offer a first-order discount?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Vuori offers new customers 20% off their first order when they sign up for emails. The offer applies to qualifying activewear and apparel purchases."
          }
        },
        {
          "@type": "Question",
          "name": "Does Vuori offer free shipping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Vuori offers free standard shipping on qualifying orders over $75. Check the current terms on the Vuori website for eligibility and shipping options."
          }
        },
        {
          "@type": "Question",
          "name": "Does Vuori offer free returns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Vuori offers free returns on qualifying domestic orders. Items must be in their original condition. Check the Vuori return policy for full details and timeframes."
          }
        },
        {
          "@type": "Question",
          "name": "Does Vuori offer a student discount?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Vuori offers a student discount for verified students. Verify your student status through the designated verification service to unlock the exclusive discount on qualifying purchases."
          }
        },
        {
          "@type": "Question",
          "name": "What kind of activewear does Vuori sell?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vuori offers a range of performance activewear including shorts, joggers, hoodies, tees, leggings, and outerwear for men and women. Their clothing is designed for yoga, running, and everyday active use."
          }
        },
        {
          "@type": "Question",
          "name": "Where do I enter a Vuori discount code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Add your selected items to the cart and proceed to checkout. Enter your discount code in the promo code field and click Apply to see the updated order total before completing your purchase."
          }
        }
      ]
    },
  ],
};

export default function VuoriStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vuoriSchema) }} />
      <VuoriCouponsContent />
    </>
  );
}
