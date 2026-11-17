import type { Metadata } from "next";
import { Suspense } from "react";
import LLBeanCouponsContent from "./_components/StoreCouponsContent";
import { LLBEAN_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "L.L.Bean Promo Code: Up to 60% Off Sale Styles | Nov 2026",
  },
  description:
    "Save more with L.L.Bean Promo Code offers featuring up to 60% off sale styles and 15% off Holiday Sale deals. Use a verified L.L.Bean Discount Code Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/llbean-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/llbean-promo-code",
      "x-default": "https://www.couponsbit.us/stores/llbean-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/llbean-promo-code",
    title: "L.L.Bean Promo Code: Up to 60% Off Sale Styles | Nov 2026",
    description:
      "Use the latest Save more with L.L.Bean Promo Code offers featuring up to 60% off sale styles and 15% off Holiday Sale deals. Use a verified L.L.Bean Discount Code Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789719709/llbean_logo_xsbw4x.webp",
        width: 1200,
        height: 630,
        alt: "LL Bean Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "L.L.Bean Promo Code: Up to 60% Off Sale Styles | Nov 2026",
    description:
      "Use the latest Save more with L.L.Bean Promo Code offers featuring up to 60% off sale styles and 15% off Holiday Sale deals. Use a verified L.L.Bean Discount Code Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789719709/llbean_logo_xsbw4x.webp"],
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

const storeOffers = LLBEAN_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `L.L.Bean ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/llbean-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "L.L.Bean", url: "https://www.llbean.com" },
}));

const llbeanSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/llbean-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/llbean-promo-code",
      name: "L.L.Bean Promo Code: Up to 60% Off Sale Styles | Nov 2026",
      description:
        "Use the latest Save more with L.L.Bean Promo Code offers featuring up to 60% off sale styles and 15% off Holiday Sale deals. Use a verified L.L.Bean Discount Code Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/llbean-promo-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/llbean-promo-code#brand",
      name: "L.L.Bean",
      url: "https://www.llbean.com",
      sameAs: ["https://www.facebook.com/LLBean", "https://twitter.com/LLBean"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/llbean-promo-code#offerlist",
      name: "LL Bean Promo Codes & Coupon Codes",
      description: "Latest LL Bean promo codes and offers on outdoor apparel and gear.",
      url: "https://www.couponsbit.us/stores/llbean-promo-code",
      numberOfItems: LLBEAN_COUPONS.length,
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
      "@id": "https://www.couponsbit.us/stores/llbean-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "LL Bean Coupons", item: "https://www.couponsbit.us/stores/llbean-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/llbean-promo-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does L.L.Bean offer promo codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L.L.Bean runs promotional offers throughout the year, and some promotions may include promo codes, discounts, or other qualifying offers. Availability and eligibility can vary."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find an L.L.Bean promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check CouponsBit for available L.L.Bean promo codes, coupon codes, and sale promotions before shopping, and compare them with offers directly on the L.L.Bean website."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use an L.L.Bean promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Add eligible items to your cart, proceed to checkout, and enter the applicable promo code in the promotional-code field. Confirm the discount has been applied before completing your purchase."
          }
        },
        {
          "@type": "Question",
          "name": "Why isn't my L.L.Bean promo code working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The promotion may have expired, or your order may not meet its requirements. Some offers can be limited to selected products or promotional periods."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use an L.L.Bean promo code on sale items?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the individual promotion. Some offers may exclude sale or clearance merchandise, while others may apply only to eligible products. Always check the terms."
          }
        },
        {
          "@type": "Question",
          "name": "Is it worth checking for an L.L.Bean promo code before checkout?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Even if you're already shopping a sale, checking for a current promo code or offer takes little time and can help you compare your available savings options."
          }
        },
        {
          "@type": "Question",
          "name": "What is L.L.Bean best known for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L.L.Bean is particularly known for its iconic Maine Hunting Shoe (Bean Boot), as well as its outdoor apparel, durable footwear, camping equipment, and classic outerwear."
          }
        },
        {
          "@type": "Question",
          "name": "Does L.L.Bean sell more than outdoor gear?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. In addition to outdoor equipment, L.L.Bean sells clothing, footwear, bags, luggage, home products, bedding, furniture, accessories, kids' products, and other lifestyle merchandise."
          }
        },
        {
          "@type": "Question",
          "name": "Does L.L.Bean sell camping equipment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Its outdoor selection includes products such as tents, sleeping bags, sleeping pads, backpacks, camp furniture, cooking equipment, and other camping essentials."
          }
        },
        {
          "@type": "Question",
          "name": "Can I shop L.L.Bean for winter clothing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. L.L.Bean offers a broad range of cold-weather products, including insulated jackets, parkas, sweaters, fleece, flannel, winter footwear, hats, gloves, and other seasonal essentials."
          }
        },
        {
          "@type": "Question",
          "name": "Does L.L.Bean offer free shipping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L.L.Bean may offer free shipping on qualifying orders. Check current offers for minimum order requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Does L.L.Bean have a return policy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L.L.Bean offers a return policy on eligible items. Check the current policy on their official site for full details."
          }
        },
        {
          "@type": "Question",
          "name": "When is the best time to look for L.L.Bean deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Promotions can appear throughout the year. Major shopping periods such as Black Friday and Cyber Monday can be especially useful times to check for holiday deals."
          }
        }
      ]
    },
  ],
};

export default function LLBeanStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(llbeanSchema) }} />
      <Suspense fallback={null}>
        <LLBeanCouponsContent />
      </Suspense>
    </>
  );
}
