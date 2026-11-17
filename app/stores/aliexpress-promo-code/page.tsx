import type { Metadata } from "next";
import { Suspense } from "react";
import AliexpressCouponsContent from "./_components/StoreCouponsContent";
import { ALIEXPRESS_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "AliExpress Promo Code: Up to 70% OFF Welcome Deal | Nov 2026",
  },
  description:
    "Save with AliExpress Promo Code and AliExpress Discount Code. Get up to 70% off Welcome Deals and best sellers from $0.99. Verified Nov 2026 savings.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/aliexpress-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/aliexpress-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/aliexpress-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/aliexpress-promo-code",
      "x-default": "https://www.couponsbit.us/stores/aliexpress-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/aliexpress-promo-code",
    title: "AliExpress Promo Code: Up to 70% OFF Welcome Deal | Nov 2026",
    description:
      "Save with AliExpress Promo Code and AliExpress Discount Code. Get up to 70% off Welcome Deals and best sellers from $0.99. Verified Nov 2026 savings.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1788783184/aliexpress-logo_uued0o.webp",
        width: 1200,
        height: 630,
        alt: "AliExpress Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AliExpress Promo Code: Up to 70% OFF Welcome Deal | Nov 2026",
    description:
      "Save with AliExpress Promo Code and AliExpress Discount Code. Get up to 70% off Welcome Deals and best sellers from $0.99. Verified Nov 2026 savings.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1788783184/aliexpress-logo_uued0o.webp"],
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

const storeOffers = ALIEXPRESS_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `AliExpress ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/aliexpress-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "AliExpress", url: "https://www.aliexpress.com" },
}));

const aliexpressSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/aliexpress-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/aliexpress-promo-code",
      name: "AliExpress Promo Code: Up to 70% OFF Welcome Deal | Nov 2026",
      description:
        "Save with AliExpress Promo Code and AliExpress Discount Code. Get up to 70% off Welcome Deals and best sellers from $0.99. Verified Nov 2026 savings.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/aliexpress-promo-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/aliexpress-promo-code#brand",
      name: "AliExpress",
      url: "https://www.aliexpress.com",
      sameAs: ["https://www.facebook.com/aliexpress", "https://twitter.com/aliexpress"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/aliexpress-promo-code#offerlist",
      name: "AliExpress Promo Codes & Coupon Codes",
      description: "Latest AliExpress promo codes and offers across electronics, fashion and home goods.",
      url: "https://www.couponsbit.us/stores/aliexpress-promo-code",
      numberOfItems: ALIEXPRESS_COUPONS.length,
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
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/aliexpress-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "AliExpress Coupons", item: "https://www.couponsbit.us/stores/aliexpress-promo-code" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/aliexpress-promo-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does AliExpress offer promo codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. AliExpress runs different promotional campaigns throughout the year, and eligible shoppers may find promo codes, coupons, discounts, seller offers, and other deals. The exact terms vary by promotion."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find an AliExpress promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check CouponsBit for available AliExpress promo codes, coupon codes, discount offers, vouchers, and other promotions before placing an order."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use an AliExpress coupon code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Add eligible products to your cart, proceed toward checkout, and enter the applicable coupon or promotional code if the offer requires one. Make sure the discount has been applied before completing your order."
          }
        },
        {
          "@type": "Question",
          "name": "Why isn't my AliExpress promo code working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A code may not work if it has expired or if your order does not meet its requirements. Restrictions can include minimum spending amounts, selected sellers, specific products, countries, or promotional periods."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use an AliExpress discount code on any product?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Promotional codes can have specific eligibility conditions. Check the terms of the individual offer to determine which products or orders qualify."
          }
        },
        {
          "@type": "Question",
          "name": "Does AliExpress have flash deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. AliExpress regularly promotes selected products through limited-time deals. Availability and discounts can change as the promotion progresses."
          }
        },
        {
          "@type": "Question",
          "name": "Does AliExpress have Black Friday deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Black Friday is a major shopping event, and AliExpress can run promotions during this period. Available offers and participating products vary."
          }
        },
        {
          "@type": "Question",
          "name": "Does AliExpress offer Cyber Monday discounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AliExpress can feature promotions around Cyber Monday. Check the current campaign details to see which products and orders qualify."
          }
        },
        {
          "@type": "Question",
          "name": "Can I find electronics on AliExpress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. AliExpress has a broad selection of electronics, gadgets, accessories, computer products, smart devices, and other technology-related merchandise."
          }
        },
        {
          "@type": "Question",
          "name": "Does AliExpress sell clothing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Shoppers can find women's, men's, and children's clothing, along with shoes, bags, jewelry, accessories, and other fashion products."
          }
        },
        {
          "@type": "Question",
          "name": "Does AliExpress ship to the US?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AliExpress offers shipping to many destinations, including the United States, although availability, shipping methods, costs, and delivery times depend on the individual product and seller."
          }
        },
        {
          "@type": "Question",
          "name": "How can I save more when shopping on AliExpress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start by checking CouponsBit for an AliExpress promo code, then compare it with product discounts, seller promotions, platform coupons, flash deals, and seasonal offers. Also consider shipping costs and the final checkout amount before deciding which deal provides the best value."
          }
        }
      ]
    },
  ],
};

export default function AliexpressStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aliexpressSchema) }} />
      <Suspense fallback={null}>
        <AliexpressCouponsContent />
      </Suspense>
    </>
  );
}
