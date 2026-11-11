import type { Metadata } from "next";
import { Suspense } from "react";
import UdemyCouponsContent from "./_components/StoreCouponsContent";
import { UDEMY_COUPONS } from "./_components/offers";

const TITLE = "Udemy Discount Code: Get Up to 85% OFF Courses | Nov 2026";
const DESCRIPTION =
  "Get the latest Udemy Discount Code and Udemy Promo Code for November 2026. Save up to 85% OFF online courses or enjoy 100% FREE select courses.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/udemy-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/udemy-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/udemy-discount-code",
      "en-BR": "https://www.couponsbit.us/stores/udemy-discount-code",
      "en-MX": "https://www.couponsbit.us/stores/udemy-discount-code",
      "en-JP": "https://www.couponsbit.us/stores/udemy-discount-code",
      "x-default": "https://www.couponsbit.us/stores/udemy-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/udemy-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/zzlsqavg/image/upload/v1793879483/udmey_logo.webp",
        width: 1200,
        height: 630,
        alt: "Udemy Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/zzlsqavg/image/upload/v1793879483/udmey_logo.webp"],
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

const udemyOffers = UDEMY_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Udemy ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/udemy-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Udemy", url: "https://www.udemy.com" },
}));

const udemySchema = {
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
      "@id": "https://www.couponsbit.us/stores/udemy-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/udemy-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      about: { "@type": "Brand", name: "Udemy" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-11",
      inLanguage: "en-US",
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/udemy-discount-code#breadcrumb" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/udemy-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Udemy Discount Code", item: "https://www.couponsbit.us/stores/udemy-discount-code" },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/udemy-discount-code#itemlist",
      name: "Udemy Discount Codes & Offers",
      description: "Latest verified Udemy coupon codes and promo deals for November 2026.",
      numberOfItems: UDEMY_COUPONS.length,
      itemListElement: udemyOffers,
    },
    {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/udemy-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where can I find a Udemy promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can visit the Udemy store page on CouponsBit to explore available discount codes and course offers. Check the conditions before applying a code to your selected course."
      }
    },
    {
      "@type": "Question",
      "name": "Does Udemy offer discounts on online courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Udemy regularly runs promotions on eligible marketplace courses and subscriptions. The discounts and participating courses can vary by region and promotional campaign."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use an instructor coupon code on Udemy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Instructors can create and distribute coupon codes for their courses. These codes can be entered in the shopping cart, subject to the coupon's validity and redemption conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my Udemy promo code not working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A code may not work because it has expired, the selected course is excluded from the promotion, the instructor has not opted into the relevant promotional programme, or the code is not valid for your account or region. Also, coupon codes cannot currently be entered through the Udemy mobile app. Use the website through a browser instead."
      }
    },
    {
      "@type": "Question",
      "name": "Does Udemy offer lifetime access to courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Individual marketplace course purchases generally provide lifetime access to the purchased course, subject to your account remaining in good standing and Udemy retaining the necessary licence for the content. Subscription access works differently."
      }
    },
    {
      "@type": "Question",
      "name": "Does Udemy support local currencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Udemy supports several local currencies, including INR, USD, BRL, JPY, and MXN. The displayed price is determined through its regional pricing system and may differ between markets."
      }
    },
    {
      "@type": "Question",
      "name": "Is Udemy Personal Plan different from buying individual courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Individual purchases provide access to specific courses, while Personal Plan is a recurring subscription that provides access to a curated collection of included courses."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get a refund if I am not satisfied with a Udemy course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eligible individual marketplace course purchases may qualify for a refund within 30 days, subject to Udemy's refund policy. Subscription purchases follow separate conditions and may not qualify for the same guarantee."
      }
    }
  ]
},
  ],
};

export default function UdemyStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(udemySchema) }} />
      <Suspense fallback={null}>
        <UdemyCouponsContent />
      </Suspense>
    </>
  );
}
