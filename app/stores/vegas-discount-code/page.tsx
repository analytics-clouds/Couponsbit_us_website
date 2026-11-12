import type { Metadata } from "next";
import { Suspense } from "react";
import { VEGAS_COUPONS } from "./_components/offers";
import VegasCouponsContent from "./_components/StoreCouponsContent";

const TITLE = "Vegas.com Promo Code: Up to 35% Off | Nov 2026";
const DESCRIPTION = "Save with the latest Vegas.com promo code and discount code. Get up to 35% off Flamingo Las Vegas and 30% off Cirque du Soleil tickets this Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/vegas-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/vegas-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/vegas-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/vegas-discount-code",
      "x-default": "https://www.couponsbit.us/stores/vegas-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/vegas-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784707355/vegas-logo_sifnax.webp",
        width: 1200,
        height: 630,
        alt: "Vegas.com Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784707355/vegas-logo_sifnax.webp"],
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

const vegasSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/vegas-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/vegas-discount-code",
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
        "@id": "https://www.couponsbit.us/stores/vegas-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/vegas-discount-code#offerlist",
      name: "Vegas.com Coupon Codes & Promo Codes",
      description:
        "Latest verified Vegas.com coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/vegas-discount-code",
      numberOfItems: VEGAS_COUPONS.length,
      itemListElement: VEGAS_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/vegas-discount-code",
          seller: {
            "@type": "Organization",
            name: "Vegas.com",
            url: "https://www.vegas.com",
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
      "@id": "https://www.couponsbit.us/stores/vegas-discount-code#brand",
      name: "Vegas.com",
      url: "https://www.vegas.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/vegas-discount-code#breadcrumb",
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
          name: "Vegas.com Coupons",
          item: "https://www.couponsbit.us/stores/vegas-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/vegas-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is vegas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "vegas is a Las Vegas-focused online travel platform that allows users to book hotels, vacation packages, show tickets, tours, attractions, dining experiences, and entertainment.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book Las Vegas hotels through vegas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. vegas offers reservations for a wide range of hotels and resorts located both on and off the Las Vegas Strip.",
          },
        },
        {
          "@type": "Question",
          name: "Does vegas sell show tickets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can purchase tickets for concerts, comedy shows, magic performances, theatrical productions, and many other Las Vegas entertainment experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find a vegas discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest vegas discount code, voucher, promo code, and coupon code offers on CouponsBit before completing your booking.",
          },
        },
        {
          "@type": "Question",
          name: "Does vegas offer vacation packages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The platform allows travelers to book vacation packages that may include hotels, flights, attractions, and entertainment.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps users discover verified discount codes, vouchers, promo codes, and coupon codes from trusted travel and lifestyle brands.",
          },
        },
      ],
    },
  ],
};

export default function VegasStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(vegasSchema),
        }}
      />
      <Suspense fallback={null}>
        <VegasCouponsContent />
      </Suspense>
    </>
  );
}
