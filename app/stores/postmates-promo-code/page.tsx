import type { Metadata } from "next";
import { Suspense } from "react";
import PostmatesContent from "./_components/StoreCouponsContent";
import { POSTMATES_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Postmates Promo Code: Save $8 + Free Delivery | Nov 2026",
  },
  description:
    "Postmates Promo Code saves $8 at Nourish Cafe Hyde and offers 20% off Surf Club Sushi Chestnut. Use Postmates Discount Code with verified Nov 2026 deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/postmates-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/postmates-promo-code",
      "x-default": "https://www.couponsbit.us/stores/postmates-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/postmates-promo-code",
    title: "Postmates Promo Code: Save $8 + Free Delivery | Nov 2026",
    description:
      "Postmates Promo Code saves $8 at Nourish Cafe Hyde and offers 20% off Surf Club Sushi Chestnut. Use Postmates Discount Code with verified Nov 2026 deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1790238446/postmates-logo_lfkxjl.webp",
        width: 1200,
        height: 630,
        alt: "Postmates Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Postmates Promo Code: Save $8 + Free Delivery | Nov 2026",
    description:
      "Postmates Promo Code saves $8 at Nourish Cafe Hyde and offers 20% off Surf Club Sushi Chestnut. Use Postmates Discount Code with verified Nov 2026 deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1790238446/postmates-logo_lfkxjl.webp"],
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
  other: { "geo.region": "US", "geo.country": "US", language: "en-US" },
};

const postmatesOffers = POSTMATES_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Postmates ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/postmates-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Postmates", url: "https://www.postmates.com" },
}));

const postmatesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/postmates-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/postmates-promo-code",
      name: "Postmates Promo Code: Save $8 + Free Delivery | Nov 2026",
      description:
        "Postmates Promo Code saves $8 at Nourish Cafe Hyde and offers 20% off Surf Club Sushi Chestnut. Use Postmates Discount Code with verified Nov 2026 deals.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/postmates-promo-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/postmates-promo-code#brand",
      name: "Postmates",
      url: "https://www.postmates.com",
      sameAs: ["https://www.facebook.com/postmates", "https://twitter.com/Postmates"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/postmates-promo-code#offerlist",
      name: "Postmates Promo Codes & Coupon Codes",
      description: "Latest Postmates promo codes and offers.",
      url: "https://www.couponsbit.us/stores/postmates-promo-code",
      numberOfItems: POSTMATES_COUPONS.length,
      itemListElement: postmatesOffers.map((offer, i) => ({
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
      "@id": "https://www.couponsbit.us/stores/postmates-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Postmates Coupons", item: "https://www.couponsbit.us/stores/postmates-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/postmates-promo-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Postmates have promo codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Postmates provides promotional codes and other offers from time to time. The platform also allows users to apply eligible promo codes directly to their accounts or during checkout."
          }
        },
        {
          "@type": "Question",
          "name": "Where do I enter a Postmates promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can apply a promo code to your account or enter it during checkout. Postmates says the code must be applied before the order is placed."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use multiple Postmates promo codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Postmates currently states that only one promo code can be applied to an order. However, the platform says a promo code can be combined with Postmates Cash and other discounts when permitted."
          }
        },
        {
          "@type": "Question",
          "name": "Does Postmates offer referral discounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Postmates has a referral programme where eligible new users can receive a unique credit offer when they sign up through a referral link."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use Postmates Cash with a promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Postmates says promo codes can be used in combination with Postmates Cash and other discounts, subject to applicable terms."
          }
        },
        {
          "@type": "Question",
          "name": "Does Postmates deliver groceries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Postmates' marketplace can include grocery stores and other retailers alongside restaurants, although availability depends on your location. Check the stores available after entering your delivery address."
          }
        },
        {
          "@type": "Question",
          "name": "Does Postmates have restaurant-specific deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Current Postmates listings can show merchant-specific promotions, including Buy One, Get One offers, free-item promotions, dollar-off discounts, and other deals. Availability varies by location and merchant."
          }
        },
        {
          "@type": "Question",
          "name": "What is Uber One?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Uber One is a membership programme that provides benefits across eligible Uber rides and delivery orders. The current Postmates page lists benefits including $0 delivery fees on eligible orders, discounts on eligible deliveries and pickup orders, and Uber One credits. Terms and eligibility apply."
          }
        },
        {
          "@type": "Question",
          "name": "How can I find Postmates discounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check your available Postmates promotions, browse merchant-specific offers, look for an active Postmates promo code, and compare any applicable Uber One benefits before placing your order."
          }
        }
      ]
    },
  ],
};

export default function PostmatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postmatesSchema) }} />
      <Suspense fallback={null}><PostmatesContent /></Suspense>
    </>
  );
}
