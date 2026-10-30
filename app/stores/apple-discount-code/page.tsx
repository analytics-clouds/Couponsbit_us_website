import type { Metadata } from "next";
import AppleCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Apple Discount Code - $150 Gift Card + 20% OFF | Oct 2026",
  },
  description:
    "Find the latest Apple discount code, promo code, and student deals for Oct 2026. Get a $100-$150 gift card with eligible Mac or iPad purchases, plus 20% OFF qualifying student orders and devices from $599.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/apple-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/apple-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/apple-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/apple-discount-code",
      "x-default": "https://www.couponsbit.us/stores/apple-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/apple-discount-code",
    title: "Apple Discount Code - $150 Gift Card + 20% OFF | Oct 2026",
    description:
      "Find the latest Apple discount code, promo code, and student deals for Oct 2026. Get a $100-$150 gift card with eligible Mac or iPad purchases, plus 20% OFF qualifying student orders and devices from $599.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/apple-logo_vrakxu.webp",
        width: 1200,
        height: 630,
        alt: "Apple Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Apple Discount Code - $150 Gift Card + 20% OFF | Oct 2026",
    description:
      "Find the latest Apple discount code, promo code, and student deals for Oct 2026. Get a $100-$150 gift card with eligible Mac or iPad purchases, plus 20% OFF qualifying student orders and devices from $599.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787205138/apple-logo_vrakxu.webp"],
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

const appleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/apple-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/apple-discount-code",
      name: "Apple Discount Code - $150 Gift Card + 20% OFF | Oct 2026",
      description:
        "Find the latest Apple discount code, promo code, and student deals for Oct 2026. Get a $100-$150 gift card with eligible Mac or iPad purchases, plus 20% OFF qualifying student orders and devices from $599.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-09-21",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/apple-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/apple-discount-code#offerlist",
      name: "Apple Discount Codes & Coupon Codes",
      description: "Latest Apple discount codes and offers for iPhone, Mac, iPad and accessories.",
      url: "https://www.couponsbit.us/stores/apple-discount-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.desc,
          url: "https://www.couponsbit.us/stores/apple-discount-code",
          seller: { "@type": "Organization", name: "Apple", url: "https://www.apple.com" },
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
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/apple-discount-code#brand",
      name: "Apple",
      url: "https://www.apple.com",
      sameAs: ["https://en.wikipedia.org/wiki/Apple_Inc."],
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/apple-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Apple Coupons", item: "https://www.couponsbit.us/stores/apple-discount-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/apple-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where Can I Find an Apple Discount Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available Apple discount codes, coupons, deals, and promotions before making a purchase."
      }
    },
    {
      "@type": "Question",
      "name": "What Is an Apple Coupon Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Apple coupon code is a promotional code that may provide a discount or another benefit on eligible products or purchases."
      }
    },
    {
      "@type": "Question",
      "name": "Does Apple Always Offer Discount Codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Apple does not continuously run traditional coupon-code promotions. Savings may instead come through education pricing, trade-in offers, seasonal promotions, carrier deals, refurbished products, gift-card promotions, and other incentives."
      }
    },
    {
      "@type": "Question",
      "name": "Does Apple Have Sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Apple does offer promotional campaigns, but its approach is generally different from retailers that run frequent sitewide percentage-off sales. Promotions can include education savings, trade-in credits, gift cards, carrier offers, refurbished products, and limited-time campaigns."
      }
    },
    {
      "@type": "Question",
      "name": "When Does Apple Run Back-to-School Sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Apple typically runs education-focused promotions around the back-to-school period. The exact dates and benefits depend on the country and year. Apple's 2026 U.S. promotion runs from July 16 through August 27, while the current India promotion uses the same promotional dates."
      }
    },
    {
      "@type": "Question",
      "name": "Does Apple Offer Student Discounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Apple provides education pricing for eligible students and educators. Current education offers include special pricing on selected Mac and iPad products and other student-focused benefits."
      }
    },
    {
      "@type": "Question",
      "name": "Does Apple Have a Trade-In Program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Apple Trade In allows customers to receive credit toward an eligible purchase or an Apple Gift Card when trading in an eligible device."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Buy Refurbished Apple Products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Apple offers Certified Refurbished products, providing an alternative to buying new devices. Apple's U.S. store states that its refurbished products come with a one-year warranty."
      }
    },
    {
      "@type": "Question",
      "name": "What Products Does Apple Sell?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Apple sells iPhone, Mac, iPad, Apple Watch, Apple Vision Pro, AirPods, AirTag, Apple TV 4K, HomePod, accessories, and Apple Gift Cards."
      }
    },
    {
      "@type": "Question",
      "name": "Does Apple Sell Accessories?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Apple has a large accessories section covering chargers, adapters, cases, cables, keyboards, mice, storage, headphones, speakers, Apple Pencil, watch bands, smart-home accessories, gaming products, and more."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Get an Apple Discount on an iPhone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Potential savings on an iPhone can come from trade-in credit, carrier promotions, seasonal campaigns, or other applicable offers. The exact promotion depends on the country, device, and current campaign. Apple's U.S. store currently advertises carrier deals that can provide significant credit toward eligible iPhone purchases."
      }
    }
  ]
},
  ],
};

export default function AppleStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appleSchema) }} />
      <AppleCouponsContent />
    </>
  );
}
