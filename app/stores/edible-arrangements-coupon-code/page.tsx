import type { Metadata } from "next";
import { Suspense } from "react";
import { EDIBLE_COUPONS } from "./_components/offers";
import EdibleArrangementsCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: {
    absolute: "Edible Arrangements Promo Code: Save 25% + Free Shipping | Nov 2026",
  },
  description:
    "Save with an Edible Arrangements Promo Code and Edible Arrangements Discount Code. Get 25% off select orders with free shipping and $25 off bake platters. Verified Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/edible-arrangements-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/edible-arrangements-coupon-code",
      "en-GB": "https://www.couponsbit.us/stores/edible-arrangements-coupon-code",
      "en-SG": "https://www.couponsbit.us/stores/edible-arrangements-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/edible-arrangements-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/edible-arrangements-coupon-code",
    title: "Edible Arrangements Promo Code: Save 25% + Free Shipping | Nov 2026",
    description:
      "Save with an Edible Arrangements Promo Code and Edible Arrangements Discount Code. Get 25% off select orders with free shipping and $25 off bake platters. Verified Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1793338496/edible_arrangements_logo_hcpsvl.webp",
        width: 1200,
        height: 630,
        alt: "Edible Arrangements Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Edible Arrangements Promo Code: Save 25% + Free Shipping | Nov 2026",
    description:
      "Save with an Edible Arrangements Promo Code and Edible Arrangements Discount Code. Get 25% off select orders with free shipping and $25 off bake platters. Verified Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1793338496/edible_arrangements_logo_hcpsvl.webp"],
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

const edibleOffers = EDIBLE_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Edible Arrangements ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/edible-arrangements-coupon-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Edible Arrangements", url: "https://www.ediblearrangements.com" },
}));

const edibleArrangementsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/edible-arrangements-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/edible-arrangements-coupon-code",
      name: "Edible Arrangements Promo Code: Save 25% + Free Shipping | Nov 2026",
      description:
        "Save with an Edible Arrangements Promo Code and Edible Arrangements Discount Code. Get 25% off select orders with free shipping and $25 off bake platters. Verified Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/edible-arrangements-coupon-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/edible-arrangements-coupon-code#brand",
      name: "Edible Arrangements",
      url: "https://www.ediblearrangements.com",
      sameAs: ["https://www.facebook.com/EdibleArrangements", "https://twitter.com/EdibleArrange"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/edible-arrangements-coupon-code#offerlist",
      "name": "Edible Arrangements Coupon Codes & Promo Codes",
      "description": "Latest Edible Arrangements coupon codes, promo codes, and gift deals.",
      "url": "https://www.couponsbit.us/stores/edible-arrangements-coupon-code",
      "numberOfItems": EDIBLE_COUPONS.length,
      itemListElement: edibleOffers.map((offer, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: offer,
      }))
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
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/couponsbit-logo_kxqyir.webp",
        width: 200,
        height: 60,
      },
      contactPoint: { "@type": "ContactPoint", contactType: "Customer Support", availableLanguage: "English" },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/edible-arrangements-coupon-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Edible Arrangements Coupons", item: "https://www.couponsbit.us/stores/edible-arrangements-coupon-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/edible-arrangements-coupon-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where can I find an Edible Arrangements coupon code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Visit CouponsBit to check available Edible Arrangements coupon codes and promo codes. You can also sign up to the Edible Arrangements email list to receive exclusive offers directly.",
          },
        },
        {
          "@type": "Question",
          name: "Does Edible Arrangements offer free delivery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Edible Arrangements offers free delivery on qualifying orders above a minimum spend. Delivery availability depends on your location and the timing of your order. Check EdibleArrangements.com for current delivery terms.",
          },
        },
        {
          "@type": "Question",
          name: "How do I use an Edible Arrangements promo code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Browse available arrangements on EdibleArrangements.com and add your selection to the cart. At checkout, enter your promo code in the discount field and confirm the saving before completing payment.",
          },
        },
        {
          "@type": "Question",
          name: "Can I order same-day delivery from Edible Arrangements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Edible Arrangements offers same-day delivery in many areas, subject to availability and order cut-off times. Check your zip code on EdibleArrangements.com to confirm if same-day delivery is available in your location.",
          },
        },
        {
          "@type": "Question",
          name: "What occasions are Edible Arrangements gifts suited for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Edible Arrangements gifts are popular for birthdays, anniversaries, get-well wishes, Mother's Day, Valentine's Day, holidays, and corporate gifting. The brand offers a range of arrangements to suit different occasions and budgets.",
          },
        },
      ],
    },
  ],
};

export default function EdibleArrangementsStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(edibleArrangementsSchema) }}
      />
      <Suspense fallback={null}><EdibleArrangementsCouponsContent /></Suspense>
    </>
  );
}
