import type { Metadata } from "next";
import { Suspense } from "react";
import GoodRxCouponsContent from "./_components/StoreCouponsContent";
import { GOODRX_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "GoodRx Promo Code: Get 20% Off + $50 Off on Apoquel | Nov 2026",
  },
  description:
    "Save with a GoodRx Promo Code or GoodRx Discount Code to get 20% off your first Chewy Pharmacy order and Get $50 off eligible Apoquel purchases. Verified Nov 2026. ",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/goodrx-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/goodrx-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/goodrx-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/goodrx-discount-code",
      "x-default": "https://www.couponsbit.us/stores/goodrx-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/goodrx-discount-code",
    title: "GoodRx Promo Code: Get 20% Off + $50 Off on Apoquel | Nov 2026  ",
    description:
      "Save with a GoodRx Promo Code or GoodRx Discount Code to get 20% off your first Chewy Pharmacy order and Get $50 off eligible Apoquel purchases. Verified Nov 2026. ",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/goodrx-logo_ibgfjr.webp",
        width: 1200,
        height: 630,
        alt: "GoodRx Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GoodRx Promo Code: Get 20% Off + $50 Off on Apoquel | Nov 2026  ",
    description:
      "Save with a GoodRx Promo Code or GoodRx Discount Code to get 20% off your first Chewy Pharmacy order and Get $50 off eligible Apoquel purchases. Verified Nov 2026. ",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787050069/goodrx-logo_ibgfjr.webp"],
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

const goodRxSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/goodrx-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/goodrx-discount-code",
      name: "GoodRx Promo Code: Get 20% Off + $50 Off on Apoquel | Nov 2026  ",
      description:
        "Save with a GoodRx Promo Code or GoodRx Discount Code to get 20% off your first Chewy Pharmacy order and Get $50 off eligible Apoquel purchases. Verified Nov 2026. ",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/goodrx-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/goodrx-discount-code#offerlist",
      name: "GoodRx Discount Codes & Coupon Codes",
      description: "Latest GoodRx discount codes and offers for prescription price comparisons and pharmacy coupons.",
      url: "https://www.couponsbit.us/stores/goodrx-discount-code",
      numberOfItems: GOODRX_COUPONS.length,
      itemListElement: GOODRX_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Offer", name: c.title, description: c.description, url: "https://www.couponsbit.us/stores/goodrx-discount-code", seller: { "@type": "Organization", name: "GoodRx", url: "https://www.goodrx.com" } },
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
      "@id": "https://www.couponsbit.us/stores/goodrx-discount-code#brand",
      name: "GoodRx",
      url: "https://www.goodrx.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/goodrx-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "GoodRx Coupons", item: "https://www.couponsbit.us/stores/goodrx-discount-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/goodrx-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does GoodRx offer discount codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GoodRx primarily provides prescription coupons and savings rather than traditional retail-style discount codes. Promotional offers may also be available for specific GoodRx services or memberships."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find a GoodRx promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available GoodRx promotions and savings opportunities before using the service."
      }
    },
    {
      "@type": "Question",
      "name": "Is GoodRx free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. GoodRx offers a free service that allows users to compare prescription prices and access eligible coupons. GoodRx Gold is a separate paid membership."
      }
    },
    {
      "@type": "Question",
      "name": "How much can I save with GoodRx?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GoodRx states that its free coupons can provide savings of up to 80% at participating pharmacies, while GoodRx Gold advertises savings of up to 90%. Actual savings vary by medication, pharmacy, location, and other factors."
      }
    },
    {
      "@type": "Question",
      "name": "Is GoodRx a pharmacy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. GoodRx is not a pharmacy and does not fill or prescribe medications. It lists prices and coupons for pharmacies across the United States."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use GoodRx with insurance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GoodRx coupons generally work as an alternative to insurance rather than being combined with your insurance for the same prescription transaction. Check the terms for your specific prescription and discuss your options with your pharmacist."
      }
    },
    {
      "@type": "Question",
      "name": "Does GoodRx offer a prescription savings card?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. GoodRx provides a free prescription savings card that can be used at participating pharmacies."
      }
    },
    {
      "@type": "Question",
      "name": "What is GoodRx Gold?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GoodRx Gold is a paid membership offering additional prescription savings and other benefits. GoodRx currently lists individual plans starting at $9.99 per month, with family plans also available."
      }
    },
    {
      "@type": "Question",
      "name": "Does GoodRx offer home delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GoodRx Gold offers free home delivery for eligible prescriptions when Gold Mail Delivery is available."
      }
    },
    {
      "@type": "Question",
      "name": "Is CouponsBit free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. CouponsBit is free to use. You can browse available GoodRx offers and other savings opportunities without paying a fee."
      }
    }
  ]
},
  ],
};

export default function GoodRxStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(goodRxSchema) }} />
      <Suspense fallback={null}>
        <GoodRxCouponsContent />
      </Suspense>
    </>
  );
}
