import type { Metadata } from "next";
import { Suspense } from "react";
import CartersCouponsContent from "./_components/StoreCouponsContent";
import { CARTERS_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Carters promo: Save 75% on Baby Girl Fleece Set | Nov 2026",
  },
  description:
    "Save with a Carters Promo Code and Carters Discount code. Get the Baby Girl Heart Fleece Layering Set for $22.80 with up to 75% off savings. Verified Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/carters-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/carters-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/carters-promo-code",
      "en-SG": "https://www.couponsbit.us/stores/carters-promo-code",
      "x-default": "https://www.couponsbit.us/stores/carters-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/carters-promo-code",
    title: "Carters promo: Save 75% on Baby Girl Fleece Set | Nov 2026",
    description:
      "Save with a Carters Promo Code and Carters Discount code. Get the Baby Girl Heart Fleece Layering Set for $22.80 with up to 75% off savings. Verified Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1793338496/carters-logo_fcvfdh.webp",
        width: 1200,
        height: 630,
        alt: "Carter's Promo Code & Discount Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Carters promo: Save 75% on Baby Girl Fleece Set | Nov 2026",
    description:
      "Save with a Carters Promo Code and Carters Discount code. Get the Baby Girl Heart Fleece Layering Set for $22.80 with up to 75% off savings. Verified Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1793338496/carters-logo_fcvfdh.webp"],
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

const storeOffers = CARTERS_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Carter's ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/carters-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Carter's", url: "https://www.carters.com" },
}));

const cartersSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/carters-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/carters-promo-code",
      name: "Carters promo: Save 75% on Baby Girl Fleece Set | Nov 2026",
      description:
        "Save with a Carters Promo Code and Carters Discount code. Get the Baby Girl Heart Fleece Layering Set for $22.80 with up to 75% off savings. Verified Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/carters-promo-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/carters-promo-code#brand",
      name: "Carter's",
      url: "https://www.carters.com",
      sameAs: ["https://www.facebook.com/Carters", "https://twitter.com/Carters"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/carters-promo-code#offerlist",
      name: "Carter's Promo Codes & Discount Codes",
      description: "Latest Carter's promo codes, discount codes, and deals on baby and kids clothing.",
      url: "https://www.couponsbit.us/stores/carters-promo-code",
      numberOfItems: CARTERS_COUPONS.length,
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
      "@id": "https://www.couponsbit.us/stores/carters-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Carter's Coupons", item: "https://www.couponsbit.us/stores/carters-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/carters-promo-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where can I find a Carter's promo code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Visit CouponsBit to check available Carter's promo codes and discount codes. You can also sign up to Carter's email list to receive promotional offers directly.",
          },
        },
        {
          "@type": "Question",
          name: "Does Carter's offer free shipping?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Carter's offers free standard shipping on qualifying orders above a minimum spend threshold. Check Carters.com for the current minimum order value and any exclusions.",
          },
        },
        {
          "@type": "Question",
          name: "How do I use a Carter's promo code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Add your items to the Carter's cart, proceed to checkout, and enter your promo code in the discount field. The savings will apply if the code is valid and the order meets the required conditions.",
          },
        },
        {
          "@type": "Question",
          name: "Does Carter's offer student or new customer discounts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Carter's offers a welcome discount for new customers who sign up to their account or email list. Check CouponsBit or Carters.com for the latest new customer and first-order offer details.",
          },
        },
        {
          "@type": "Question",
          name: "What age range does Carter's cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Carter's offers clothing for newborns, babies, toddlers, and kids. The brand also includes OshKosh B'gosh styles for older children and a Just One You range for baby essentials.",
          },
        },
      ],
    },
  ],
};

export default function CartersStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cartersSchema) }}
      />
      <Suspense fallback={null}>
        <CartersCouponsContent />
      </Suspense>
    </>
  );
}
