import type { Metadata } from "next";
import { Suspense } from "react";
import UltrahumanCouponsContent from "./_components/StoreCouponsContent";
import { ULTRAHUMAN_COUPONS } from "./_components/offers";

const TITLE = "Ultrahuman Discount Code: 40% OFF Ring AIR | Nov 2026";
const DESCRIPTION =
  "Get the latest Ultrahuman Discount Code and Ultrahuman Promo Code for November 2026. Save up to 40% OFF Ring AIR and get 3 months of UltrahumanX FREE.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/ultrahuman-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/ultrahuman-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/ultrahuman-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/ultrahuman-discount-code",
      "en-AE": "https://www.couponsbit.us/stores/ultrahuman-discount-code",
      "en-CA": "https://www.couponsbit.us/stores/ultrahuman-discount-code",
      "x-default": "https://www.couponsbit.us/stores/ultrahuman-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/ultrahuman-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/zzlsqavg/image/upload/v1793879483/Ultrahuman_logo.webp",
        width: 1200,
        height: 630,
        alt: "Ultrahuman Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/zzlsqavg/image/upload/v1793879483/Ultrahuman_logo.webp"],
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

const ultrahumanOffers = ULTRAHUMAN_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Ultrahuman ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/ultrahuman-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Ultrahuman", url: "https://www.ultrahuman.com" },
}));

const ultrahumanSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.couponsbit.us/#website",
      url: "https://www.couponsbit.us",
      name: "Couponsbit",
      description: "Find verified coupon codes and discount deals for top brands worldwide.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.couponsbit.us/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
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
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/ultrahuman-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/ultrahuman-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      about: { "@type": "Brand", name: "Ultrahuman" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-11",
      inLanguage: "en-US",
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/ultrahuman-discount-code#breadcrumb" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/ultrahuman-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Ultrahuman Discount Code", item: "https://www.couponsbit.us/stores/ultrahuman-discount-code" },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/ultrahuman-discount-code#itemlist",
      name: "Ultrahuman Discount Codes & Offers",
      description: "Latest verified Ultrahuman coupon codes and promo deals for November 2026.",
      numberOfItems: ULTRAHUMAN_COUPONS.length,
      itemListElement: ultrahumanOffers,
    },
    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/ultrahuman-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where can I find an Ultrahuman promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit the Ultrahuman store page on CouponsBit to explore available promo codes, smart ring discounts, and other promotional offers. Check the conditions to confirm that the offer applies to your country and selected product."
      }
    },
    {
      "@type": "Question",
      "name": "Does Ultrahuman require a monthly subscription?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Ultrahuman states that the core features of its smart rings are available without a recurring subscription. Some additional PowerPlugs and services may have separate charges."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Ultrahuman Ring AIR and Ring PRO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both are smart rings designed to track everyday health and activity metrics. Ring PRO introduces updated hardware and extended battery capabilities, with Ultrahuman advertising up to 15 days of battery life. Check the official comparison for the latest differences."
      }
    },
    {
      "@type": "Question",
      "name": "Does Ultrahuman track sleep and recovery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Its smart rings collect information related to sleep, heart rate, HRV, movement, and other measurements. The app uses this information to provide sleep, recovery, and activity-related insights."
      }
    },
    {
      "@type": "Question",
      "name": "Is Ultrahuman available in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Ultrahuman operates an India-specific website and supports purchases in INR. Customers can explore its smart rings and other available products through the Indian store."
      }
    },
    {
      "@type": "Question",
      "name": "Can I buy Ultrahuman products in the UAE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Ultrahuman has a UAE regional entity and offers products through its UAE shopping arrangements. Product availability and promotional benefits depend on the selected product and current terms."
      }
    },
    {
      "@type": "Question",
      "name": "Does Ultrahuman ship to Canada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ultrahuman's terms state that customers in countries not separately listed are generally serviced by its Indian entity. However, shipping eligibility can depend on the product and destination. Confirm Canada availability through the checkout process before ordering."
      }
    },
    {
      "@type": "Question",
      "name": "Can I return an Ultrahuman Ring AIR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ultrahuman's published returns FAQ provides a 30-day return or exchange window for Ring AIR, subject to its stated conditions. Contact customer support to initiate the process and confirm the policy applicable to your purchase."
      }
    }
  ]
},
  ],
};

export default function UltrahumanStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ultrahumanSchema) }} />
      <Suspense fallback={null}>
        <UltrahumanCouponsContent />
      </Suspense>
    </>
  );
}
