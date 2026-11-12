import type { Metadata } from "next";
import { Suspense } from "react";
import LulusCouponsContent from "./_components/StoreCouponsContent";
import { LULUS_COUPONS } from "./_components/offers";

const TITLE = "Lulus Promo Code – Get up to 80% Off | Nov 2026";
const DESCRIPTION = "Save up to 80% with the latest Lulus promo code. Find verified Lulus discount code offers, including Buy 2, Get 1 Free on eligible styles, this November 2026.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/lulus-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/lulus-promo-code",
      "x-default": "https://www.couponsbit.us/stores/lulus-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/lulus-promo-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789994531/lulus-logo_pl1byq.webp",
        width: 1200,
        height: 630,
        alt: "Lulus Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789994531/lulus-logo_pl1byq.webp"],
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
    language: "en-US",
  },
};

const lulusSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/lulus-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/lulus-promo-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/lulus-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/lulus-promo-code#offerlist",
      name: "Lulus Promo Codes & Coupon Codes",
      description: "Latest Lulus promo codes and offers.",
      url: "https://www.couponsbit.us/stores/lulus-promo-code",
      numberOfItems: LULUS_COUPONS.length,
      itemListElement: LULUS_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/lulus-promo-code",
          seller: { "@type": "Organization", name: "Lulus", url: "https://www.lulus.com" },
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
      "@id": "https://www.couponsbit.us/stores/lulus-promo-code#brand",
      name: "Lulus",
      url: "https://www.lulus.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/lulus-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Lulus Coupons", item: "https://www.couponsbit.us/stores/lulus-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/lulus-promo-code#faq",
      mainEntity: [
        { "@type": "Question", name: "Does Lulus offer promo codes?", acceptedAnswer: { "@type": "Answer", text: "Yes. Lulus regularly offers promotional codes through its website, email, SMS, affiliate partners, social media, and other promotional channels. Availability and eligibility vary by offer." } },
        { "@type": "Question", name: "Where can I find a Lulus promo code?", acceptedAnswer: { "@type": "Answer", text: "You can check CouponsBit for available Lulus promotions before shopping on the Lulus website." } },
        { "@type": "Question", name: "Does Lulus have a first-order discount?", acceptedAnswer: { "@type": "Answer", text: "Lulus currently advertises a first-order promotion for eligible new customers who create a Lulus account. The code and terms can change, so check the current offer before using it." } },
        { "@type": "Question", name: "Does Lulus offer student discounts?", acceptedAnswer: { "@type": "Answer", text: "Lulus lists student promotions among its available services, although eligibility and the current offer may vary." } },
        { "@type": "Question", name: "Does Lulus offer healthcare or military discounts?", acceptedAnswer: { "@type": "Answer", text: "Lulus lists healthcare and military/armed forces discounts among its promotional programs, with verification and eligibility requirements applying to these offers." } },
        { "@type": "Question", name: "Can I use two Lulus promo codes together?", acceptedAnswer: { "@type": "Answer", text: "Generally, Lulus promo codes cannot be combined with another coupon code unless the specific promotion states otherwise." } },
        { "@type": "Question", name: "Can I use a Lulus promo code on sale items?", acceptedAnswer: { "@type": "Answer", text: "Some Lulus promotional codes can apply to already discounted merchandise, while others are limited to particular products or categories. Always check the terms of the individual offer." } },
        { "@type": "Question", name: "Does Lulus have a rewards program?", acceptedAnswer: { "@type": "Answer", text: "Yes. Lulus Love Rewards provides members with rewards-related benefits, personalized offers, coupons, gifts, and other perks depending on membership status." } },
        { "@type": "Question", name: "What should I do if my Lulus coupon code doesn't work?", acceptedAnswer: { "@type": "Answer", text: "Check the code's expiration date, product eligibility, customer eligibility, usage restrictions, and exclusions. Lulus promotional codes may also be limited to one use and generally cannot be combined with another discount code." } },
      ],
    },
  ],
};

export default function LulusStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lulusSchema) }} />
      <Suspense fallback={null}>
        <LulusCouponsContent />
      </Suspense>
    </>
  );
}
