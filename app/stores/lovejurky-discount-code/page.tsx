import type { Metadata } from "next";
import { Suspense } from "react";
import LoveJerkyCouponsContent from "./_components/StoreCouponsContent";
import { LOVEJURKY_COUPONS } from "./_components/offers";

const TITLE = "LovesJerkyCo Promo Code: Get 15% Off + Free Shipping | Nov 2026";
const DESCRIPTION =
  "Use a LovesJerkyCo Promo Code and LovesJerkyCo Discount Code to save up to 15% plus free shipping over $66. Verified Nov 2026. Shop now.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/lovejurky-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/lovejurky-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/lovejurky-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/lovejurky-discount-code",
      "x-default": "https://www.couponsbit.us/stores/lovejurky-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/lovejurky-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002073/lovejurky-logo_o9v01b.webp",
        width: 1200,
        height: 630,
        alt: "LoveJerky Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002073/lovejurky-logo_o9v01b.webp"],
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

const loveJerkySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/lovejurky-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/lovejurky-discount-code",
      name: "LovesJerky Discount Code: Free Shipping + $50 Sample | Nov 2026",
      description:
        "Find the latest LovesJerky discount codes and deals for Nov 2026. Get free shipping on orders over $66, a 6-flavor sample pack for $50 with free shipping, plus seasonings from $10 and more.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/lovejurky-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/lovejurky-discount-code#offerlist",
      name: "LoveJerky Coupon Codes & Promo Codes",
      description:
        "Latest verified LoveJerky coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/lovejurky-discount-code",
      numberOfItems: LOVEJURKY_COUPONS.length,
      itemListElement: LOVEJURKY_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/lovejurky-discount-code",
          seller: { "@type": "Organization", name: "LovesJerky Co", url: "https://www.lovesjerkyco.com" },
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
      "@id": "https://www.couponsbit.us/stores/lovejurky-discount-code#brand",
      name: "LovesJerky Co",
      url: "https://www.lovesjerkyco.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/lovejurky-discount-code#breadcrumb",
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
          name: "LoveJerky Coupons",
          item: "https://www.couponsbit.us/stores/lovejurky-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/lovejurky-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does Love's Jerky Co sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Love's Jerky Co specializes in jerky and meat-snack products in a variety of flavors and options.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find a Love's Jerky Co promo code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can check CouponsBit for the latest Love's Jerky Co promo code, coupon code, and discount code before placing your order.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use a Love's Jerky Co coupon code on any product?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "That depends on the individual promotion. Some offers may apply only to selected products or orders, so check the terms before using a code.",
          },
        },
        {
          "@type": "Question",
          name: "Does Love's Jerky Co offer different jerky flavors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, shoppers can explore different flavor profiles and varieties depending on the brand's current selection.",
          },
        },
        {
          "@type": "Question",
          name: "Is jerky suitable for travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jerky is a convenient snack for road trips, outdoor activities, and travel because it is compact and easy to carry.",
          },
        },
        {
          "@type": "Question",
          name: "How can I save money when shopping at Love's Jerky Co?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Look for a current Love's Jerky Co discount code, promotional offers, bundles, and shipping deals before completing your order.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. CouponsBit is free for shoppers looking for promo codes, coupon codes, vouchers, and other discounts.",
          },
        },
      ],
    },
  ],
};

export default function LoveJerkyStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(loveJerkySchema),
        }}
      />
      <Suspense fallback={null}>
        <LoveJerkyCouponsContent />
      </Suspense>
    </>
  );
}