import type { Metadata } from "next";
import { Suspense } from "react";
import MerachFitCouponsContent from "./_components/StoreCouponsContent";
import { MERACHFIT_COUPONS } from "./_components/offers";

const TITLE = "Merachfit Promo Code: Get 30% Off + $260 Off | Nov 2026";
const DESCRIPTION =
  "Grab the latest Merachfit promo code and discount code to save 30% on the UltraWalk W60 Plus or get $260 off the Q1S Rowing Machine. Verified for Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/merachfit-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/merachfit-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/merachfit-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/merachfit-discount-code",
      "x-default": "https://www.couponsbit.us/stores/merachfit-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/merachfit-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/merachfit-logo_kz4fuc.webp",
        width: 1200,
        height: 630,
        alt: "MerachFit Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/merachfit-logo_kz4fuc.webp"],
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

const merachFitSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/merachfit-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/merachfit-discount-code",
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
        "@id": "https://www.couponsbit.us/stores/merachfit-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/merachfit-discount-code#brand",
      name: "MerachFit",
      url: "https://www.merachfit.com",
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/merachfit-discount-code#offerlist",
      name: "MerachFit Coupon Codes & Promo Codes",
      description:
        "Latest verified MerachFit coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/merachfit-discount-code",
      numberOfItems: MERACHFIT_COUPONS.length,
      itemListElement: MERACHFIT_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/merachfit-discount-code",
          seller: {
            "@type": "Organization",
            name: "MerachFit",
            url: "https://www.merachfit.com",
          },
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
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/merachfit-discount-code#breadcrumb",
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
          name: "MerachFit Coupons",
          item: "https://www.couponsbit.us/stores/merachfit-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/merachfit-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does Merach sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Merach offers home fitness equipment including rowing machines, treadmills, exercise bikes, ellipticals, and other fitness products and accessories.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find a Merach Fit promo code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can check CouponsBit for the latest Merach Fit promo code, coupon code, and discount code offers before making a purchase.",
          },
        },
        {
          "@type": "Question",
          name: "Does Merach offer rowing machines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Rowing machines are one of the key categories within Merach's home fitness equipment range.",
          },
        },
        {
          "@type": "Question",
          name: "Is Merach equipment suitable for home gyms?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Merach focuses on home fitness equipment, making its products suitable for people who want to create or expand a workout space at home. Always check the dimensions and specifications of a particular model before purchasing.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use a Merach coupon code on fitness equipment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A coupon's eligibility depends on its individual terms. Some offers may apply to selected products or orders, so check the conditions before checkout.",
          },
        },
        {
          "@type": "Question",
          name: "How can I save money on Merach equipment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Look for a current Merach Fit discount code, seasonal promotions, product deals, bundle offers, and other available discounts before purchasing.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. CouponsBit is free to use and helps shoppers discover promo codes, coupon codes, vouchers, and deals from popular brands.",
          },
        },
      ],
    },
  ],
};

export default function MerachFitStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(merachFitSchema),
        }}
      />
      <Suspense fallback={null}>
        <MerachFitCouponsContent />
      </Suspense>
    </>
  );
}
