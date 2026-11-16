import type { Metadata } from "next";
import { Suspense } from "react";
import DoorDashCouponsContent from "./_components/StoreCouponsContent";
import { COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "DoorDash Promo code: Get 30% Off + $0 Delivery charge | Nov 2026",
  },
  description:
    "Enjoy 30% off eligible orders with a DoorDash Promo code, plus $0 delivery on your first order. Find the latest DoorDash Discount Code deals for Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/doordash-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/doordash-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/doordash-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/doordash-promo-code",
      "x-default": "https://www.couponsbit.us/stores/doordash-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/doordash-promo-code",
    title: "DoorDash Promo code: Get 30% Off + $0 Delivery charge | Nov 2026",
    description:
      "Enjoy 30% off eligible orders with a DoorDash Promo code, plus $0 delivery on your first order. Find the latest DoorDash Discount Code deals for Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/doordash-logo_pjyf0k.webp",
        width: 1200,
        height: 630,
        alt: "DoorDash Promo code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DoorDash Promo code: Get 30% Off + $0 Delivery charge | Nov 2026",
    description:
      "Enjoy 30% off eligible orders with a DoorDash Promo code, plus $0 delivery on your first order. Find the latest DoorDash Discount Code deals for Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/doordash-logo_pjyf0k.webp"],
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

const doorDashSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/doordash-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/doordash-promo-code",
      name: "DoorDash Promo code: Get 30% Off + $0 Delivery charge | Nov 2026",
      description:
        "Enjoy 30% off eligible orders with a DoorDash Promo code, plus $0 delivery on your first order. Find the latest DoorDash Discount Code deals for Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/doordash-promo-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/doordash-promo-code#offerlist",
      name: "DoorDash Promo codes & Promo Codes",
      description:
        "Latest verified DoorDash coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/doordash-promo-code",
      numberOfItems: COUPONS.length,
      itemListElement: COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/doordash-promo-code",
          seller: {
            "@type": "Organization",
            name: "DoorDash",
            url: "https://www.doordash.com",
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
      "@id": "https://www.couponsbit.us/stores/doordash-promo-code#brand",
      name: "DoorDash",
      url: "https://www.doordash.com",
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
      "@id": "https://www.couponsbit.us/stores/doordash-promo-code#breadcrumb",
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
          name: "DoorDash Coupons",
          item: "https://www.couponsbit.us/stores/doordash-promo-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/doordash-promo-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where can I find a DoorDash promo code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can check CouponsBit for the latest DoorDash promo codes, coupon codes, and discount codes before placing an order.",
          },
        },
        {
          "@type": "Question",
          name: "Does DoorDash have discount codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DoorDash periodically offers promotional codes and other discounts. Availability and eligibility can vary based on the promotion, customer, location, and order requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How do I use a DoorDash coupon code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Select an eligible DoorDash offer, copy the coupon code, and apply it through the applicable promotional section before completing your order. Always check the terms to make sure your purchase qualifies.",
          },
        },
        {
          "@type": "Question",
          name: "Are DoorDash promo codes available to existing customers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some promotions may be available to existing customers, while others can be restricted to new users or specific accounts. Check the individual offer's conditions before attempting to redeem it.",
          },
        },
        {
          "@type": "Question",
          name: "Does DoorDash offer discounts on delivery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Participating restaurants and merchants may offer reduced or free delivery promotions. DashPass members may also receive delivery-related benefits on eligible orders according to the current membership terms.",
          },
        },
        {
          "@type": "Question",
          name: "What is DashPass?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DashPass is DoorDash's membership program. It provides eligible members with various benefits on qualifying orders, which can make the service more economical for frequent users.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use a DoorDash promo code on groceries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some promotions may apply to grocery or retail orders, while others are limited to restaurant purchases. Always review the specific terms of the offer before applying for it.",
          },
        },
        {
          "@type": "Question",
          name: "Does DoorDash offer restaurant deals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Participating restaurants can provide special promotions and discounts through DoorDash. The offers available can vary by restaurant and location.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. CouponsBit is free to use and helps shoppers discover promotional offers and coupon codes from popular brands.",
          },
        },
      ],
    },
  ],
};

export default function DoorDashStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(doorDashSchema),
        }}
      />
      <Suspense fallback={null}>
        <DoorDashCouponsContent />
      </Suspense>
    </>
  );
}