import type { Metadata } from "next";
import { Suspense } from "react";
import CarilohaCouponsContent from "./_components/StoreCouponsContent";
import { CARILOHA_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Cariloha Discount Code: 50% OFF + Free Shipping | Nov 2026",
  },
  description:
    "Get the latest Cariloha Discount Code and Cariloha Promo Code for November 2026. Save up to 50% OFF, enjoy free shipping over $100, and shop premium bamboo bedding.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/cariloha-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/cariloha-discount-code",
      "x-default": "https://www.couponsbit.us/stores/cariloha-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/cariloha-discount-code",
    title: "Cariloha Discount Code: 50% OFF + Free Shipping | Nov 2026",
    description:
      "Get the latest Cariloha Discount Code and Cariloha Promo Code for November 2026. Save up to 50% OFF, enjoy free shipping over $100, and shop premium bamboo bedding.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg",
        width: 1200,
        height: 630,
        alt: "Cariloha Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cariloha Discount Code: 50% OFF + Free Shipping | Nov 2026",
    description:
      "Get the latest Cariloha Discount Code and Cariloha Promo Code for November 2026. Save up to 50% OFF, enjoy free shipping over $100, and shop premium bamboo bedding.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg"],
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

const carilohaOffers = CARILOHA_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Cariloha ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/cariloha-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: {
    "@type": "Organization",
    name: "Cariloha",
    url: "https://cariloha.pxf.io/c/6434050/1117073/14163?subId1=1015",
  },
}));

const carilohaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/cariloha-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/cariloha-discount-code",
      name: "Cariloha Discount Code: 50% OFF + Free Shipping | Nov 2026",
      description:
        "Get the latest Cariloha Discount Code and Cariloha Promo Code for November 2026. Save up to 50% OFF, enjoy free shipping over $100, and shop premium bamboo bedding.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/cariloha-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/cariloha-discount-code#brand",
      name: "Cariloha",
      url: "https://www.cariloha.com",
      sameAs: ["https://www.facebook.com/cariloha", "https://www.instagram.com/cariloha"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/cariloha-discount-code#offerlist",
      name: "Cariloha Coupon Codes & Promo Codes",
      description:
        "Get the latest Cariloha Discount Code and Cariloha Promo Code for November 2026. Save up to 50% OFF, enjoy free shipping over $100, and shop premium bamboo bedding.",
      url: "https://www.couponsbit.us/stores/cariloha-discount-code",
      numberOfItems: CARILOHA_COUPONS.length,
      itemListElement: carilohaOffers.map((offer, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: offer,
      })),
    },

    {
      "@type": "WebSite",
      "@id": "https://www.couponsbit.us/#website",
      url: "https://www.couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is one of the best coupon websites offering verified coupons, deals, and coupon help for top brands worldwide.",
      inLanguage: "en-US",
      publisher: {
        "@id": "https://www.couponsbit.us/#organization",
      },
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
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        availableLanguage: "English",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/cariloha-discount-code#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.couponsbit.us",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Stores",
          item: "https://www.couponsbit.us/stores",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cariloha Coupons",
          item: "https://www.couponsbit.us/stores/cariloha-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/cariloha-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Cariloha?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cariloha is a lifestyle brand that specializes in bamboo-based bedding, bath products, apparel, and sleep accessories.",
          },
        },
        {
          "@type": "Question",
          name: "What is Cariloha best known for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The brand is particularly recognized for its bamboo bed sheets and bedding collections.",
          },
        },
        {
          "@type": "Question",
          name: "Does Cariloha sell clothing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Cariloha offers men's and women's apparel, sleepwear, socks, underwear, and other bamboo-based clothing products.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Cariloha coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Cariloha coupon codes, promo offers, and bedding discounts on CouponsBit.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps shoppers discover savings from hundreds of popular brands.",
          },
        },
      ],
    },
  ],
};

export default function CarilohaStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(carilohaSchema),
        }}
      />
      <Suspense fallback={null}>
        <CarilohaCouponsContent />
      </Suspense>
    </>
  );
}