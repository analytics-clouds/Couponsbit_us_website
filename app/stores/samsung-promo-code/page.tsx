import type { Metadata } from "next";
import { Suspense } from "react";
import SamsungCouponsContent from "./_components/StoreCouponsContent";
import { SAMSUNG_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Samsung Discount Code: Up to 60% OFF Accessories | Nov 2026",
  },
  description:
    "Save with Samsung Promo Code and Samsung Discount Code. Get 60% off accessories and save $1,400 on OLED TVs. Verified Nov 2026 deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/samsung-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/samsung-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/samsung-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/samsung-promo-code",
      "x-default": "https://www.couponsbit.us/stores/samsung-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/samsung-promo-code",
    title: "Samsung Discount Code: Up to 60% OFF Accessories | Nov 2026",
    description:
      "Save with Samsung Promo Code and Samsung Discount Code. Get 60% off accessories and save $1,400 on OLED TVs. Verified Nov 2026 deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1788868873/samsung-logo_o6jp7u.webp",
        width: 1200,
        height: 630,
        alt: "Samsung Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Samsung Discount Code: Up to 60% OFF Accessories | Nov 2026",
    description:
      "Save with Samsung Promo Code and Samsung Discount Code. Get 60% off accessories and save $1,400 on OLED TVs. Verified Nov 2026 deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1788868873/samsung-logo_o6jp7u.webp"],
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

const storeOffers = SAMSUNG_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Samsung ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/samsung-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Samsung", url: "https://www.samsung.com" },
}));

const samsungSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/samsung-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/samsung-promo-code",
      name: "Samsung Discount Code: Up to 60% OFF Accessories | Nov 2026",
      description:
        "Save with Samsung Promo Code and Samsung Discount Code. Get 60% off accessories and save $1,400 on OLED TVs. Verified Nov 2026 deals.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/samsung-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/samsung-promo-code#offerlist",
      name: "Samsung Promo Codes & Coupon Codes",
      description: "Latest Samsung promo codes and offers on Galaxy phones, TVs and appliances.",
      url: "https://www.couponsbit.us/stores/samsung-promo-code",
      numberOfItems: SAMSUNG_COUPONS.length,
      itemListElement: storeOffers.map((offer, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: offer,
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
      "@id": "https://www.couponsbit.us/stores/samsung-promo-code#brand",
      name: "Samsung",
      url: "https://www.samsung.com",
      sameAs: ["https://en.wikipedia.org/wiki/Samsung_Electronics"],
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/samsung-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Samsung Coupons", item: "https://www.couponsbit.us/stores/samsung-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/samsung-promo-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I find a Samsung Promo Code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check CouponsClouds for available Samsung promo codes, coupons, offers, and deals before placing your order. Always review the conditions of the promotion to make sure it applies to your purchase."
          }
        },
        {
          "@type": "Question",
          "name": "Does Samsung offer coupons in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Samsung may run different promotional campaigns and offers for Indian shoppers throughout the year. The availability of specific coupons and promotions can vary, so check the current offers before purchasing."
          }
        },
        {
          "@type": "Question",
          "name": "What products can I buy from Samsung?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Samsung offers a wide selection of products, including smartphones, tablets, televisions, monitors, home appliances, wearables, audio products, accessories, and other consumer electronics."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use a Samsung coupon code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If a valid coupon or promotional code is available, follow the instructions associated with the offer and enter the code at the applicable stage of checkout. Make sure you review the terms before applying it."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a Samsung Promo Code on every product?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Promotional codes can have specific conditions and may be limited to certain products, categories, campaigns, or customers. Always check the offer's terms before using it."
          }
        },
        {
          "@type": "Question",
          "name": "How can I save money when shopping at Samsung?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Compare products, watch for seasonal and promotional sales, check available Samsung offers, and look for a valid Samsung Promo Code before checkout. You can also use CouponsClouds to discover available coupon and promotional opportunities."
          }
        }
      ]
    },
  ],
};

export default function SamsungStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(samsungSchema) }} />
      <Suspense fallback={null}>
        <SamsungCouponsContent />
      </Suspense>
    </>
  );
}
