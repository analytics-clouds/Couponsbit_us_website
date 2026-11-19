import type { Metadata } from "next";
import { Suspense } from "react";
import SailyContent from "./_components/StoreCouponsContent";
import { SAILY_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Saily Promo Code: Get up to 15% Off eSIM Plans | Nov 2026",
  },
  description:
    "Saily Promo Code and Saily Discount Code offer 15% off eSIM plans plus US numbers from $1.99. Get verified Nov 2026 travel savings now.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/saily-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/saily-discount-code",
      "x-default": "https://www.couponsbit.us/stores/saily-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/saily-discount-code",
    title: "Saily Promo Code: Get up to 15% Off eSIM Plans | Nov 2026",
    description:
      "Saily Promo Code and Saily Discount Code offer 15% off eSIM plans plus US numbers from $1.99. Get verified Nov 2026 travel savings now.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1790335107/saily-logo_s5w4hl.webp",
        width: 1200,
        height: 630,
        alt: "Saily Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Saily Promo Code: Get up to 15% Off eSIM Plans | Nov 2026",
    description:
      "Saily Promo Code and Saily Discount Code offer 15% off eSIM plans plus US numbers from $1.99. Get verified Nov 2026 travel savings now.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1790335107/saily-logo_s5w4hl.webp"],
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

const sailySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/saily-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/saily-discount-code",
      name: "Saily Promo Code: Get up to 15% Off eSIM Plans | Nov 2026",
      description:
        "Saily Promo Code and Saily Discount Code offer 15% off eSIM plans plus US numbers from $1.99. Get verified Nov 2026 travel savings now.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/saily-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/saily-discount-code#offerlist",
      name: "Saily Discount Codes & Coupon Codes",
      description: "Latest Saily discount codes and offers.",
      url: "https://www.couponsbit.us/stores/saily-discount-code",
      numberOfItems: SAILY_COUPONS.length,
      itemListElement: SAILY_COUPONS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.description,
          url: "https://www.couponsbit.us/stores/saily-discount-code",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Saily", url: "https://saily.com" },
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
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/saily-discount-code#brand",
      name: "Saily",
      url: "https://saily.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/saily-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Saily Coupons", item: "https://www.couponsbit.us/stores/saily-discount-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/saily-discount-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can I find a Saily discount code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visit the Saily page on CouponsBit to check for available discount codes, coupons, and promotional offers. Choose an eligible offer and follow its redemption instructions."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a Saily discount code on any eSIM plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Some promotions may have specific eligibility requirements or apply only to selected plans, destinations, or customers. Check the terms of the individual offer before purchasing."
          }
        },
        {
          "@type": "Question",
          "name": "Why isn't my Saily promo code working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Saily promo code may not work if it has expired, has already reached its usage limit, or has restrictions that don't match your purchase. Review the offer conditions and make sure the code has been entered correctly."
          }
        },
        {
          "@type": "Question",
          "name": "Does Saily offer promotions without a coupon code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Travel eSIM providers can run promotional campaigns where savings are applied automatically. Check CouponsBit for both code-based and direct Saily offers."
          }
        },
        {
          "@type": "Question",
          "name": "Is it worth checking for a Saily coupon before traveling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Checking for an available coupon before purchasing your eSIM takes little time and can help you avoid paying more than necessary for your mobile data plan."
          }
        }
      ]
    },
  ],
};

export default function SailyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sailySchema) }} />
      <Suspense fallback={null}><SailyContent /></Suspense>
    </>
  );
}
