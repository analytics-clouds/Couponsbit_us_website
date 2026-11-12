import type { Metadata } from "next";
import { Suspense } from "react";
import { GEEKBUYING_COUPONS } from "./_components/offers";
import GeekbuyingCouponsContent from "./_components/StoreCouponsContent";

const TITLE = "Geekbuying Promo Code: Up to 56% Off | Nov 2026";
const DESCRIPTION = "Save up to 56% with the latest Geekbuying promo code and discount code. Get 40% off charging stations, scooters, laser engravers, and more this Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/geekbuying-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/geekbuying-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/geekbuying-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/geekbuying-discount-code",
      "x-default": "https://www.couponsbit.us/stores/geekbuying-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/geekbuying-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784707355/geekbuying-logo_pnkeev.webp",
        width: 1200,
        height: 630,
        alt: "Geekbuying Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784707355/geekbuying-logo_pnkeev.webp"],
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

const geekbuyingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/geekbuying-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/geekbuying-discount-code",
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
        "@id": "https://www.couponsbit.us/stores/geekbuying-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/geekbuying-discount-code#offerlist",
      name: "Geekbuying Coupon Codes & Promo Codes",
      description:
        "Latest verified Geekbuying coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/geekbuying-discount-code",
      numberOfItems: GEEKBUYING_COUPONS.length,
      itemListElement: GEEKBUYING_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/geekbuying-discount-code",
          seller: {
            "@type": "Organization",
            name: "Geekbuying",
            url: "https://www.geekbuying.com",
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
      "@id": "https://www.couponsbit.us/stores/geekbuying-discount-code#brand",
      name: "Geekbuying",
      url: "https://www.geekbuying.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/geekbuying-discount-code#breadcrumb",
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
          name: "Geekbuying Coupons",
          item: "https://www.couponsbit.us/stores/geekbuying-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/geekbuying-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Geekbuying?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Geekbuying is a global online marketplace specializing in consumer electronics, smart gadgets, electric bikes, 3D printers, mini PCs, smart home devices, and other innovative technology products.",
          },
        },
        {
          "@type": "Question",
          name: "Does Geekbuying ship internationally?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Geekbuying delivers products to customers worldwide and operates regional warehouses in several countries to offer faster shipping on eligible items.",
          },
        },
        {
          "@type": "Question",
          name: "What products can I buy from Geekbuying?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can purchase electric bikes, e-scooters, 3D printers, portable power stations, robot vacuum cleaners, mini PCs, smart home products, gaming accessories, projectors, drones, and many other consumer electronics.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find a Geekbuying discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Geekbuying discount code, voucher, promo code, and coupon code offers on CouponsBit before completing your purchase.",
          },
        },
        {
          "@type": "Question",
          name: "Does Geekbuying offer seasonal sales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Geekbuying regularly runs flash sales, holiday promotions, clearance events, and other limited-time campaigns throughout the year.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps shoppers discover verified discount codes, vouchers, promo codes, and coupon codes from trusted online brands.",
          },
        },
      ],
    },
  ],
};

export default function GeekbuyingStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(geekbuyingSchema),
        }}
      />
      <Suspense fallback={null}>
        <GeekbuyingCouponsContent />
      </Suspense>
    </>
  );
}
