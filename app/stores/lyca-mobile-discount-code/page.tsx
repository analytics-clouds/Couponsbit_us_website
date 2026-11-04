import type { Metadata } from "next";
import { Suspense } from "react";
import LycaCouponsContent from "./_components/StoreCouponsContent";
import { LYCA_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Lyca Mobile Discount Code: Get 50% OFF + Extra 10% | Nov 2026",
  },
  description:
    "Get the latest Lyca Mobile Discount Code and Lyca Mobile Promo Code for November 2026. Save 50% OFF mobile plans plus an extra 10% OFF with code LYCA10.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/lyca-mobile-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/lyca-mobile-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/lyca-mobile-discount-code",
      "x-default": "https://www.couponsbit.us/stores/lyca-mobile-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/lyca-mobile-discount-code",
    title: "Lyca Mobile Discount Code: Get 50% OFF + Extra 10% | Nov 2026",
    description:
      "Get the latest Lyca Mobile Discount Code and Lyca Mobile Promo Code for November 2026. Save 50% OFF mobile plans plus an extra 10% OFF with code LYCA10.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/lyca-mobile-coupon-code_svvddg.webp",
        width: 1200,
        height: 630,
        alt: "Lyca Mobile Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lyca Mobile Discount Code: Get 50% OFF + Extra 10% | Nov 2026",
    description:
      "Get the latest Lyca Mobile Discount Code and Lyca Mobile Promo Code for November 2026. Save 50% OFF mobile plans plus an extra 10% OFF with code LYCA10.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1781775924/lyca-mobile-coupon-code_svvddg.webp"],
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

const lycaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/lyca-mobile-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/lyca-mobile-discount-code",
      name: "Lyca Mobile Discount Code: Get 50% OFF + Extra 10% | Nov 2026",
      description:
        "Get the latest Lyca Mobile Discount Code and Lyca Mobile Promo Code for November 2026. Save 50% OFF mobile plans plus an extra 10% OFF with code LYCA10.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/lyca-mobile-discount-code#breadcrumb",
      },
    },

    { "@type": "Organization", "@id": "https://www.couponsbit.us/stores/lyca-mobile-discount-code#brand", name: "Lyca Mobile", url: "https://www.lycamobile.us" },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/lyca-mobile-discount-code#offerlist",
      name: "Lyca Mobile Coupon Codes & Promo Codes",
      description:
        "Latest verified Lyca Mobile coupon codes, promo codes and discount codes for recharge, SIM plans and international calling.",
      url: "https://www.couponsbit.us/stores/lyca-mobile-discount-code",
      numberOfItems: LYCA_COUPONS.length,
      itemListElement: LYCA_COUPONS.map((coupon, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Offer",
          name: `Lyca Mobile ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
          description: coupon.description,
          url: `https://www.couponsbit.us/stores/lyca-mobile-discount-code#${coupon.id}`,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Lyca Mobile", url: "https://www.lycamobile.us" },
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
        url: "https://www.couponsbit.us/logo.png",
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
      "@id": "https://www.couponsbit.us/stores/lyca-mobile-discount-code#breadcrumb",
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
          name: "Lyca Mobile Coupons",
          item: "https://www.couponsbit.us/stores/lyca-mobile-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/lyca-mobile-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Lyca Mobile offer coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Lyca Mobile occasionally offers promo codes, discounts, and promotional pricing on prepaid plans and SIM card activations.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Lyca Mobile promo codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Lyca Mobile coupon codes and prepaid wireless deals on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "Does Lyca Mobile offer international calling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. International calling is one of Lyca Mobile's most popular features, with plans designed for global communication.",
          },
        },
        {
          "@type": "Question",
          name: "Are Lyca Mobile plans prepaid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Lyca Mobile primarily offers prepaid wireless plans without long-term contracts.",
          },
        },
        {
          "@type": "Question",
          name: "Can I keep my phone number when switching to Lyca Mobile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In many cases, customers may be able to transfer or port their existing number, subject to eligibility requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Couponsbit is completely free and helps users discover verified coupon codes, discounts, and promotional offers.",
          },
        },
      ],
    },
  ],
};

export default function LycaStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(lycaSchema),
        }}
      />
      <Suspense fallback={null}>
        <LycaCouponsContent />
      </Suspense>
    </>
  );
}
