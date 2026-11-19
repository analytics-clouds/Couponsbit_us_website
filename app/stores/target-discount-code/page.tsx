import type { Metadata } from "next";
import { Suspense } from "react";
import TargetCouponsContent from "./_components/StoreCouponsContent";
import { TARGET_COUPONS } from "./_components/offers";

const TITLE = "Target Promo Code: Up to 50% Off Pillows & Bedding | Nov 2026";
const DESCRIPTION =
  "Use a Target promo code and Target discount code to save up to 50% on pillows and bedding plus 13% off Sharpie S-Gel Pens for $4.89. Verified Nov 2026 deals. Save now.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/target-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/target-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/target-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/target-discount-code",
      "x-default": "https://www.couponsbit.us/stores/target-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/target-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp",
        width: 1200,
        height: 630,
        alt: "Target Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787124413/target-logo_ycjzpz.webp"],
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

const targetSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/target-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/target-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      datePublished: "2026-01-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/target-discount-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/target-discount-code#brand",
      name: "Target",
      url: "https://www.target.com",
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/target-discount-code#offerlist",
      name: "Target Discount Codes & Coupon Codes",
      description: "Latest Target discount codes and offers for general merchandise, groceries and same-day delivery.",
      url: "https://www.couponsbit.us/stores/target-discount-code",
      numberOfItems: TARGET_COUPONS.length,
      itemListElement: TARGET_COUPONS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.description,
          url: "https://www.couponsbit.us/stores/target-discount-code",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Target", url: "https://www.target.com" },
        },
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
      logo: { "@type": "ImageObject", url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/couponsbit-logo_kxqyir.webp", width: 200, height: 60 },
      contactPoint: { "@type": "ContactPoint", contactType: "Customer Support", availableLanguage: "English" },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/target-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Target Coupons", item: "https://www.couponsbit.us/stores/target-discount-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/target-discount-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Target?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Target is one of the largest retail chains in the United States, offering groceries, electronics, clothing, beauty products, home goods, toys, pet supplies, and much more through its stores and online platform."
          }
        },
        {
          "@type": "Question",
          "name": "What is Target Circle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Target Circle is Target's free loyalty program that provides members with automatic deals, personalized offers, rewards, and exclusive member benefits."
          }
        },
        {
          "@type": "Question",
          "name": "What products can I buy at Target?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Target sells products across categories including groceries, home décor, electronics, furniture, apparel, beauty, baby products, toys, pet supplies, and household essentials."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find a Target discount code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can find the latest Target discount code, Target voucher, Target promo code, and Target Promo Code on CouponsBit before placing your order."
          }
        },
        {
          "@type": "Question",
          "name": "Does Target offer online shopping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Customers can shop online through the Target website or app and choose shipping, in-store pickup, Drive Up, or same-day delivery for eligible orders."
          }
        },
        {
          "@type": "Question",
          "name": "Is CouponsBit free to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. CouponsBit is completely free and helps shoppers discover verified discount codes, vouchers, promo codes, and coupon codes from trusted global brands."
          }
        }
      ]
    },
  ],
};

export default function TargetStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(targetSchema) }} />
      <Suspense fallback={null}>
        <TargetCouponsContent />
      </Suspense>
    </>
  );
}
