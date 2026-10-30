import type { Metadata } from "next";
import FlowersCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "1800 Flowers Promo Code – Get 30% OFF + $20 OFF | Oct 2026",
  },
  description:
    "Get the latest 1800 Flowers Promo Code and 1800 Flowers Discount Code for October 2026. Save 30% OFF flowers, get $20 OFF Double Your Blooms, and shop bouquets from $39.99.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/1800-flowers-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/1800-flowers-promo-code",
      "x-default": "https://www.couponsbit.us/stores/1800-flowers-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/1800-flowers-promo-code",
    title: "1800 Flowers Promo Code – Get 30% OFF + $20 OFF | Oct 2026",
    description:
      "Get the latest 1800 Flowers Promo Code and 1800 Flowers Discount Code for October 2026. Save 30% OFF flowers, get $20 OFF Double Your Blooms, and shop bouquets from $39.99.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789719709/1800_flower_logo_uqwufx.webp",
        width: 1200,
        height: 630,
        alt: "1800 Flowers Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "1800 Flowers Promo Code – Get 30% OFF + $20 OFF | Oct 2026",
    description:
      "Get the latest 1800 Flowers Promo Code and 1800 Flowers Discount Code for October 2026. Save 30% OFF flowers, get $20 OFF Double Your Blooms, and shop bouquets from $39.99.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789719709/1800_flower_logo_uqwufx.webp"],
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

const flowersSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/1800-flowers-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/1800-flowers-promo-code",
      name: "1800 Flowers Promo Code – Get 30% OFF + $20 OFF | Oct 2026",
      description:
        "Get the latest 1800 Flowers Promo Code and 1800 Flowers Discount Code for October 2026. Save 30% OFF flowers, get $20 OFF Double Your Blooms, and shop bouquets from $39.99.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-09-21",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/1800-flowers-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/1800-flowers-promo-code#offerlist",
      name: "1800 Flowers Promo Codes & Coupon Codes",
      description: "Latest 1800 Flowers promo codes and offers on flowers and gift delivery.",
      url: "https://www.couponsbit.us/stores/1800-flowers-promo-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.desc,
          url: "https://www.couponsbit.us/stores/1800-flowers-promo-code",
          seller: { "@type": "Organization", name: "1800 Flowers", url: "https://www.1800flowers.com" },
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
      "@id": "https://www.couponsbit.us/stores/1800-flowers-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "1800 Flowers Coupons", item: "https://www.couponsbit.us/stores/1800-flowers-promo-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/1800-flowers-promo-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does 1-800-Flowers offer promo codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. 1-800-Flowers maintains a dedicated promotions page featuring current promo codes, coupons, discounts, and other seasonal offers. Availability and eligibility can vary."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find a 1-800-Flowers promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for currently available 1-800-Flowers promo codes, coupon codes, and sale promotions before placing your order."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use a 1-800-Flowers promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Add eligible items to your cart, proceed to checkout, and enter the applicable promo code in the promotional-code field. Confirm the discount has been applied before completing your order."
      }
    },
    {
      "@type": "Question",
      "name": "Why isn't my 1-800-Flowers promo code working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The promotion may have expired, or your order may not meet its requirements. Some offers can be limited to selected products or delivery dates."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a 1-800-Flowers coupon on sale items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the specific promotion. Some codes may apply only to eligible products or exclude certain sale collections. Always review the terms of the offer before checkout."
      }
    },
    {
      "@type": "Question",
      "name": "What does 1-800-Flowers sell besides flowers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can shop plants, gift baskets, gourmet food, chocolate-covered strawberries, cakes, balloons, keepsakes, and other gifts in addition to floral arrangements."
      }
    },
    {
      "@type": "Question",
      "name": "Can I send plants through 1-800-Flowers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. 1-800-Flowers offers several types of plant gifts, including flowering plants, houseplants, bonsai, succulents and cacti, orchids, and other greenery."
      }
    },
    {
      "@type": "Question",
      "name": "Does 1-800-Flowers offer same-day delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, eligible flowers and gifts can be available for same-day delivery depending on the product, destination, and ordering time. Enter the recipient's ZIP code to see options for that location."
      }
    },
    {
      "@type": "Question",
      "name": "Does 1-800-Flowers offer free shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1-800-Flowers may offer free shipping on qualifying orders. Check current offers for minimum order requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Does 1-800-Flowers have seasonal sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1-800-Flowers may run promotions around major gifting occasions and holidays. Check current offers to see what is available."
      }
    },
    {
      "@type": "Question",
      "name": "When is the best time to look for 1-800-Flowers deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best time is before completing checkout. Check CouponsBit first, then compare available promo codes with current sales and offers on 1-800-Flowers."
      }
    }
  ]
},
  ],
};

export default function FlowersStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(flowersSchema) }} />
      <FlowersCouponsContent /> 
    </>
  );
}



