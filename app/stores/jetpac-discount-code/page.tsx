import type { Metadata } from "next";
import { Suspense } from "react";
import JetpacCouponsContent from "./_components/StoreCouponsContent";
import { JETPAC_COUPONS } from "./_components/offers";

const TITLE = "Jetpac Promo Code: Up to 70% Off eSIMs + Extra 10% Off | Nov 2026";
const DESCRIPTION =
  "Use a Jetpac promo code and Jetpac discount code to save up to 70% on international eSIMs plus get extra 10% off with code ANC10. Verified Nov 2026. Save now.";
const CANONICAL = "https://www.couponsbit.us/stores/jetpac-discount-code";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: CANONICAL,
    languages: {
      "en-US": CANONICAL,
      "en-GB": CANONICAL,
      "en-IN": CANONICAL,
      "x-default": CANONICAL,
    },
  },

  openGraph: {
    type: "website",
    url: CANONICAL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787739252/jetpac-logo_bng0au.webp",
        width: 1200,
        height: 630,
        alt: "Jetpac Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787739252/jetpac-logo_bng0au.webp"],
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
  },
};

const storeOffers = JETPAC_COUPONS.map((coupon, index) => ({
  "@type": "ListItem",
  position: index + 1,
  item: {
    "@type": "Offer",
    name: coupon.title,
    description: coupon.description,
    url: CANONICAL,
    seller: {
      "@id": `${CANONICAL}#brand`,
    },
    priceCurrency: "USD",
    price: "0",
    ...(coupon.validTill && { validThrough: coupon.validTill }),
    ...(coupon.code && { couponCode: coupon.code }),
  },
}));

const jetpacSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": `${CANONICAL}#breadcrumb` },
    },

    {
      "@type": "Organization",
      "@id": `${CANONICAL}#brand`,
      name: "Jetpac",
      url: "https://www.jetpacglobal.com",
    },

    {
      "@type": "ItemList",
      "@id": `${CANONICAL}#offerlist`,
      name: "Jetpac Discount Codes & Coupon Codes",
      description: "Latest Jetpac discount codes and offers for travel eSIM data plans and lounge access.",
      url: CANONICAL,
      numberOfItems: JETPAC_COUPONS.length,
      itemListElement: storeOffers,
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
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Jetpac Coupons", item: CANONICAL },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Jetpac?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jetpac is a travel eSIM provider offering data plans for over 200 international destinations, along with perks like discounted airport lounge access.",
          },
        },
        {
          "@type": "Question",
          name: "Does Jetpac offer discount codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Jetpac runs promotions such as destination eSIM deals, app-exclusive offers, and special discount codes on eligible products.",
          },
        },
        {
          "@type": "Question",
          name: "What is a Jetpac promo code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Jetpac promo code is a promotional code that may provide a discount or special benefit when purchasing eligible Jetpac products. Availability, eligibility, and terms vary by promotion.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Jetpac discount codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can check Couponsbit for available Jetpac discount codes, coupon codes, promotional offers, and deals before completing your purchase.",
          },
        },
        {
          "@type": "Question",
          name: "How does Jetpac's eSIM work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jetpac eSIMs can be downloaded and activated through the Jetpac app, providing data coverage automatically when you travel.",
          },
        },
        {
          "@type": "Question",
          name: "Does Jetpac offer eSIMs for the USA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Jetpac provides dedicated eSIM plans for the United States with different data allowances and validity periods.",
          },
        },
        {
          "@type": "Question",
          name: "Does Jetpac work in Europe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Jetpac offers Europe regional eSIM plans designed for travelers visiting supported European destinations.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use Jetpac in Japan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Jetpac provides Japan-specific eSIM plans with different data options and durations.",
          },
        },
        {
          "@type": "Question",
          name: "Is Jetpac available for different countries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Jetpac provides country-specific and regional eSIM options covering numerous destinations worldwide.",
          },
        },
        {
          "@type": "Question",
          name: "Does Jetpac offer unlimited data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jetpac offers unlimited plans in selected destinations. However, unlimited plans may have speed-management conditions, so check the details of your selected plan before purchasing.",
          },
        },
        {
          "@type": "Question",
          name: "Does Jetpac include SMS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jetpac's standard eSIM service is data-only and does not include SMS. Voice options can be purchased through the Jetpac app where available.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use Jetpac as a hotspot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jetpac states that its eSIM supports hotspot sharing. Check the terms of your selected plan and your device compatibility before relying on this feature.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a Jetpac eSIM remain available before activation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jetpac states that an unactivated data pack remains available in the user's account for three months from the date of purchase. Once activated, the plan follows the validity period selected during purchase.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use Jetpac for multiple trips?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Jetpac describes its travel eSIM as reusable for future trips, with users able to top up when traveling again.",
          },
        },
        {
          "@type": "Question",
          name: "Does Jetpac offer airport lounge access?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Jetpac offers discounted airport lounge access through its JetPass Perks program.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers.",
          },
        },
      ],
    },
  ],
};

export default function JetpacStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jetpacSchema) }} />
      <Suspense fallback={null}>
        <JetpacCouponsContent />
      </Suspense>
    </>
  );
}
