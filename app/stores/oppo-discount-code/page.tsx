import type { Metadata } from "next";
import { Suspense } from "react";
import { OPPO_COUPONS } from "./_components/offers";
import OppoCouponsContent from "./_components/StoreCouponsContent";

const TITLE = "OPPO Promo Code: Up to 60% Off | Nov 2026";
const DESCRIPTION =
  "Use the latest OPPO promo code and discount code to save up to 60% on select smartphones, or get the OPPO Find X9 Ultra from $1,999 and save $950. Verified offers for Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/oppo-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/oppo-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/oppo-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/oppo-discount-code",
      "x-default": "https://www.couponsbit.us/stores/oppo-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/oppo-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784970/oppo-logo_umnpx7.webp",
        width: 1200,
        height: 630,
        alt: "Oppo Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784970/oppo-logo_umnpx7.webp"],
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

const oppoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/oppo-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/oppo-discount-code",
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
        "@id": "https://www.couponsbit.us/stores/oppo-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/oppo-discount-code#offerlist",
      name: "Oppo Coupon Codes & Promo Codes",
      description:
        "Latest verified Oppo coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/oppo-discount-code",
      numberOfItems: OPPO_COUPONS.length,
      itemListElement: OPPO_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/oppo-discount-code",
          seller: {
            "@type": "Organization",
            name: "Oppo",
            url: "https://www.oppo.com",
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
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/oppo-discount-code#brand",
      name: "OPPO",
      url: "https://www.oppo.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/oppo-discount-code#breadcrumb",
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
          name: "Oppo Coupons",
          item: "https://www.couponsbit.us/stores/oppo-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/oppo-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is OPPO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "OPPO is a global consumer electronics company that manufactures smartphones, tablets, smartwatches, wireless earbuds, and mobile accessories.",
          },
        },
        {
          "@type": "Question",
          name: "What smartphones does OPPO offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "OPPO offers several smartphone lineups, including the Find Series, Reno Series, and A Series, catering to premium, mid-range, and entry-level users.",
          },
        },
        {
          "@type": "Question",
          name: "Does OPPO sell smartwatches and earbuds?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. In addition to smartphones, OPPO offers smartwatches, wireless earbuds, tablets, chargers, and a range of smart accessories.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find an OPPO discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest OPPO discount code, OPPO voucher, OPPO promo code, and OPPO coupon code on CouponsBit before making your purchase.",
          },
        },
        {
          "@type": "Question",
          name: "Does OPPO have an official online store?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. OPPO operates official online stores in many countries where customers can purchase smartphones, accessories, and smart devices directly.",
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

export default function OppoStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(oppoSchema),
        }}
      />
      <Suspense fallback={null}>
        <OppoCouponsContent />
      </Suspense>
    </>
  );
}
