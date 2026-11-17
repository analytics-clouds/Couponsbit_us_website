import type { Metadata } from "next";
import { Suspense } from "react";
import TemuCouponsContent from "./_components/StoreCouponsContent";
import { TEMU_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Temu Promo Code: Up to 71% OFF Gel Mattress | Nov 2026",
  },
  description:
    "Use Temu Promo Code and Temu Coupon Code to save 71% on gel memory foam mattresses and get 15% off $40+ orders with free delivery. Verified Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/temu-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/temu-coupon-code",
      "en-GB": "https://www.couponsbit.us/stores/temu-coupon-code",
      "en-IN": "https://www.couponsbit.us/stores/temu-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/temu-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/temu-coupon-code",
    title: "Temu Promo Code: Up to 71% OFF Gel Mattress | Nov 2026",
    description:
      "Use Temu Promo Code and Temu Coupon Code to save 71% on gel memory foam mattresses and get 15% off $40+ orders with free delivery. Verified Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1788783183/temu-logo_our7ig.webp",
        width: 1200,
        height: 630,
        alt: "Temu Coupon Code & Discount Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Temu Promo Code: Up to 71% OFF Gel Mattress | Nov 2026",
    description:
      "Use Temu Promo Code and Temu Coupon Code to save 71% on gel memory foam mattresses and get 15% off $40+ orders with free delivery. Verified Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1788783183/temu-logo_our7ig.webp"],
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

const storeOffers = TEMU_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Temu ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/temu-coupon-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Temu", url: "https://www.temu.com" },
}));

const temuSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/temu-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/temu-coupon-code",
      name: "Temu Promo Code: Up to 71% OFF Gel Mattress | Nov 2026",
      description:
        "Use Temu Promo Code and Temu Coupon Code to save 71% on gel memory foam mattresses and get 15% off $40+ orders with free delivery. Verified Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/temu-coupon-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/temu-coupon-code#brand",
      name: "Temu",
      url: "https://www.temu.com",
      sameAs: ["https://www.facebook.com/temu", "https://twitter.com/temu_official"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/temu-coupon-code#offerlist",
      name: "Temu Coupon Codes & Discount Codes",
      description: "Latest Temu coupon codes and offers across fashion, home goods and electronics.",
      url: "https://www.couponsbit.us/stores/temu-coupon-code",
      numberOfItems: TEMU_COUPONS.length,
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
      "@id": "https://www.couponsbit.us/stores/temu-coupon-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Temu Coupons", item: "https://www.couponsbit.us/stores/temu-coupon-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/temu-coupon-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Temu offer promo codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Temu frequently runs promotional campaigns and offers that may include coupon codes, discounts, product promotions, and other incentives. Availability and eligibility can vary."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find a Temu promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check CouponsBit for available Temu promo codes and compare them with the promotions currently available on Temu."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a Temu coupon code on discounted products?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the specific promotion. Some codes may have product or purchase restrictions, while others may have different eligibility requirements. Check the terms before applying the offer."
          }
        },
        {
          "@type": "Question",
          "name": "Does Temu have seasonal sales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Temu frequently runs promotional campaigns throughout the year. Major US shopping periods such as Valentine's Day, Mother's Day, Back-to-School, Halloween, Black Friday, Cyber Monday, and Christmas can be useful times to check for additional offers."
          }
        },
        {
          "@type": "Question",
          "name": "Are Temu promotions available to existing customers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some promotions are available to existing shoppers, while others may be targeted toward new customers or specific accounts. Check the terms of each promotion to determine eligibility."
          }
        },
        {
          "@type": "Question",
          "name": "Why isn't my Temu promo code working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A code may fail because it has expired, your order does not meet its requirements, the products are excluded, or the promotion is limited to certain customers. Check the offer conditions before trying another code."
          }
        },
        {
          "@type": "Question",
          "name": "How can I find the best Temu deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Compare available Temu promo codes with product discounts, coupons, limited-time promotions, and other offers. Also consider reviews and product specifications so that you’re saving on products that actually meet your needs."
          }
        }
      ]
    },
  ],
};

export default function TemuStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(temuSchema) }} />
      <Suspense fallback={null}>
        <TemuCouponsContent />
      </Suspense>
    </>
  );
}
