import type { Metadata } from "next";
import { Suspense } from "react";
import IsinwheelCouponsContent from "./_components/StoreCouponsContent";
import { ISINWHEEL_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "iSinwheel Promo Code: Up to 50% Off + 10% Off on storewide | Nov 2026",
  },
  description:
    "Save with an iSinwheel Promo Code or iSinwheel Discount Code to get up to 50% off during the Autumn Ride Sale and 10% off storewide. Verified Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/isinwheel-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/isinwheel-discount-code",
      "x-default": "https://www.couponsbit.us/stores/isinwheel-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/isinwheel-discount-code",
    title: "iSinwheel Promo Code: Up to 50% Off + 10% Off on storewide | Nov 2026",
    description:
      "Save with an iSinwheel Promo Code or iSinwheel Discount Code to get up to 50% off during the Autumn Ride Sale and 10% off storewide. Verified Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789640583/isinwheel_logo_wwsdeo.webp",
        width: 1200,
        height: 630,
        alt: "iSinwheel Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "iSinwheel Promo Code: Up to 50% Off + 10% Off on storewide | Nov 2026",
    description:
      "Save with an iSinwheel Promo Code or iSinwheel Discount Code to get up to 50% off during the Autumn Ride Sale and 10% off storewide. Verified Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789640583/isinwheel_logo_wwsdeo.webp"],
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

const isinwheelSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/isinwheel-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/isinwheel-discount-code",
      name: "iSinwheel Promo Code: Up to 50% Off + 10% Off on storewide | Nov 2026",
      description:
        "Save with an iSinwheel Promo Code or iSinwheel Discount Code to get up to 50% off during the Autumn Ride Sale and 10% off storewide. Verified Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/isinwheel-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/isinwheel-discount-code#offerlist",
      name: "iSinwheel Discount Codes & Coupon Codes",
      description: "Latest iSinwheel discount codes and offers on electric scooters.",
      url: "https://www.couponsbit.us/stores/isinwheel-discount-code",
      numberOfItems: ISINWHEEL_COUPONS.length,
      itemListElement: ISINWHEEL_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Offer", name: c.title, description: c.description, url: "https://www.couponsbit.us/stores/isinwheel-discount-code", seller: { "@type": "Organization", name: "iSinwheel", url: "https://www.isinwheel.com" } },
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
      "@id": "https://www.couponsbit.us/stores/isinwheel-discount-code#brand",
      name: "iSinwheel",
      url: "https://www.isinwheel.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/isinwheel-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "iSinwheel Coupons", item: "https://www.couponsbit.us/stores/isinwheel-discount-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/isinwheel-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does isinwheel offer discount codes in the UK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, isinwheel runs promotions and discount offers for UK shoppers. Available codes and their terms can change, so check the latest offer before placing your order."
      }
    },
    {
      "@type": "Question",
      "name": "What does isinwheel sell?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "isinwheel sells electric scooters, electric bikes, kids' scooters, off-road scooters, accessories, replacement parts, and other smart mobility products. The UK website also features products such as electric suitcases, walking pads, and mobility scooters."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use an isinwheel discount code on any product?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Individual discount codes can have their own eligibility rules, product exclusions, or promotional conditions. Check the terms of the specific offer before checkout."
      }
    },
    {
      "@type": "Question",
      "name": "Does isinwheel sell electric bikes in the UK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The official UK store offers several types of electric bikes, including commuter/city models and electric mountain bikes."
      }
    },
    {
      "@type": "Question",
      "name": "Does isinwheel offer off-road electric scooters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. isinwheel's UK range includes off-road models such as the GT1, GT2, GT4, H7PRO, and Landturbo Pro."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use an isinwheel electric scooter on UK roads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Privately owned e-scooters are currently subject to restrictions in the UK and generally cannot be used on public roads, pavements, cycle lanes, or other public land. They can be used on private land with the landowner's permission. Always check the latest GOV.UK rules before riding."
      }
    },
    {
      "@type": "Question",
      "name": "Does isinwheel offer accessories?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The UK store offers accessories including helmets, locks, seats, add-ons, tyres, and model-specific replacement parts."
      }
    },
    {
      "@type": "Question",
      "name": "How can I find an isinwheel coupon code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check the latest isinwheel discount codes and promotional offers before checkout. It's also worth comparing them with the brand's current sale, flash sale, bundle, and rewards offers."
      }
    }
  ]
},
  ],
};

export default function IsinwheelStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(isinwheelSchema) }} />
      <Suspense fallback={null}>
        <IsinwheelCouponsContent />
      </Suspense>
    </>
  );
}
