import type { Metadata } from "next";
import { Suspense } from "react";
import { SUNGAIT_COUPONS } from "./_components/offers";
import SungaitCouponsContent from "./_components/StoreCouponsContent";

const TITLE = "SUNGAIT Promo Code | 50% OFF + Extra 15% Off with CLOUDS15 | Nov 2026";
const DESCRIPTION = "Use the latest SUNGAIT promo code and discount code and save up to 50% on Polygon Aviator Sunglasses. Use CLOUDS15 to get an extra 15% off. Verified for Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/sungait-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/sungait-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/sungait-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/sungait-discount-code",
      "x-default": "https://www.couponsbit.us/stores/sungait-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/sungait-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1785130842/sungait-logo_tfolql.webp",
        width: 1200,
        height: 630,
        alt: "Sungait Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1785130842/sungait-logo_tfolql.webp"],
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

const sungaitSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/sungait-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/sungait-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      datePublished: "2026-01-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/sungait-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/sungait-discount-code#offerlist",
      name: "Sungait Coupon Codes & Promo Codes",
      description:
        "Latest verified Sungait coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/sungait-discount-code",
      numberOfItems: SUNGAIT_COUPONS.length,
      itemListElement: SUNGAIT_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/sungait-discount-code",
          seller: { "@type": "Organization", name: "Sungait", url: "https://www.sungait.com" },
        },
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
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/sungait-discount-code#brand",
      name: "Sungait",
      url: "https://www.sungait.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/sungait-discount-code#breadcrumb",
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
          name: "Sungait Coupons",
          item: "https://www.couponsbit.us/stores/sungait-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/sungait-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Sungait?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sungait is an eyewear brand that offers polarized sunglasses, blue light blocking glasses, reading glasses, and eyewear accessories designed for everyday use.",
          },
        },
        {
          "@type": "Question",
          name: "Does Sungait sell polarized sunglasses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Sungait offers a wide range of polarized sunglasses that help reduce glare and provide UV protection for outdoor activities and driving.",
          },
        },
        {
          "@type": "Question",
          name: "Are Sungait blue light glasses suitable for computer use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Sungait blue light blocking glasses are designed to help reduce exposure to blue light from digital devices such as computers, smartphones, and tablets.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find a Sungait discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Sungait discount code, Sungait voucher, Sungait promo code, and Sungait coupon code on CouponsBit before making your purchase.",
          },
        },
        {
          "@type": "Question",
          name: "Does Sungait offer eyewear for both men and women?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Sungait offers a variety of sunglasses and eyewear styles for men and women.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps shoppers discover verified discount codes, vouchers, promo codes, and coupon codes from trusted global brands.",
          },
        },
      ],
    },
  ],
};

export default function SungaitStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sungaitSchema),
        }}
      />
      <Suspense fallback={null}>
        <SungaitCouponsContent />
      </Suspense>
    </>
  );
}