import type { Metadata } from "next";
import { Suspense } from "react";
import HomeDepotCouponsContent from "./_components/StoreCouponsContent";
import { HOME_DEPOT_COUPONS } from "./_components/offers";

const storeOffers = HOME_DEPOT_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: coupon.title,
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/home-depot-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Home Depot", url: "https://www.homedepot.com/" },
}));

export const metadata: Metadata = {
  title: {
    absolute: "Home Depot Promo Code: Up to $350 Off Appliances | Nov 2026",
  },
  description:
    "Use a Home Depot Promo Code to get up to $350 off select appliances and up to $120 off select tools. Verified Home Depot Discount Code deals for Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/home-depot-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/home-depot-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/home-depot-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/home-depot-discount-code",
      "x-default": "https://www.couponsbit.us/stores/home-depot-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/home-depot-discount-code",
    title: "Home Depot Promo Code: Up to $350 Off Appliances | Nov 2026",
    description:
      "Use a Home Depot Promo Code to get up to $350 off select appliances and up to $120 off select tools. Verified Home Depot Discount Code deals for Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787295216/home-depot-logo_aipbiv.webp",
        width: 1200,
        height: 630,
        alt: "Home Depot Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Home Depot Promo Code: Up to $350 Off Appliances | Nov 2026",
    description:
      "Use a Home Depot Promo Code to get up to $350 off select appliances and up to $120 off select tools. Verified Home Depot Discount Code deals for Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787295216/home-depot-logo_aipbiv.webp"],
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
};

const homeDepotSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/home-depot-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/home-depot-discount-code",
      name: "Home Depot Promo Code: Up to $350 Off Appliances | Nov 2026",
      description:
        "Use a Home Depot Promo Code to get up to $350 off select appliances and up to $120 off select tools. Verified Home Depot Discount Code deals for Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/home-depot-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/home-depot-discount-code#offerlist",
      name: "Home Depot Discount Codes & Coupon Codes",
      description: "Latest Home Depot discount codes and offers for tools, building materials and appliances.",
      url: "https://www.couponsbit.us/stores/home-depot-discount-code",
      numberOfItems: HOME_DEPOT_COUPONS.length,
      itemListElement: storeOffers.map((offer, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: offer,
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
      "@id": "https://www.couponsbit.us/stores/home-depot-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Home Depot Coupons", item: "https://www.couponsbit.us/stores/home-depot-discount-code" },
      ],
    },

   {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/home-depot-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where Can I Find a Home Depot Discount Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available Home Depot discount codes, coupon codes, deals, and promotional offers before placing an order."
      }
    },
    {
      "@type": "Question",
      "name": "What Is a Home Depot Coupon Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Home Depot coupon code is a promotional code that may provide a discount on eligible products or orders, depending on the terms of the offer."
      }
    },
    {
      "@type": "Question",
      "name": "Does Home Depot Always Have Coupon Codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Coupon availability changes. Home Depot also provides savings through Special Buy offers, clearance pricing, seasonal promotions, rebates, bulk pricing, and other programs."
      }
    },
    {
      "@type": "Question",
      "name": "Does Home Depot Have Sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Home Depot runs various promotions throughout the year, including seasonal events, Special Buy offers, appliance promotions, tool sales, clearance events, and major shopping periods such as Black Friday."
      }
    },
    {
      "@type": "Question",
      "name": "When Is the Best Time to Shop at Home Depot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The right time depends on what you're buying. Spring can be useful for gardening and outdoor projects, while major holiday events and Black Friday can bring promotions across tools, appliances, and home improvement categories."
      }
    },
    {
      "@type": "Question",
      "name": "Does Home Depot Have a Black Friday Sale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Black Friday is an important promotional period for Home Depot, with deals typically spanning multiple categories."
      }
    },
    {
      "@type": "Question",
      "name": "Does Home Depot Sell Appliances?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Home Depot sells refrigerators, dishwashers, ranges, ovens, microwaves, washers, dryers, and other appliances."
      }
    },
    {
      "@type": "Question",
      "name": "Does Home Depot Sell Tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Tools are one of Home Depot's major categories, including power tools, hand tools, tool sets, outdoor power equipment, and storage."
      }
    },
    {
      "@type": "Question",
      "name": "Does Home Depot Sell Furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Home Depot offers furniture and furnishings across categories such as patio and outdoor living, storage, home organization, and selected indoor spaces."
      }
    },
    {
      "@type": "Question",
      "name": "Does Home Depot Sell Plants?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Home Depot's garden selection includes plants, seeds, soil, planters, gardening tools, fertilizers, and other lawn and garden products."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Find Home Depot Deals on Appliances?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Appliance promotions can appear during seasonal events, holiday campaigns, and other promotional periods. Check current offers before purchasing a major appliance."
      }
    },
    {
      "@type": "Question",
      "name": "Does Home Depot Offer Military Discounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Home Depot has a military discount program for eligible customers, subject to its current terms and verification requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Use a Home Depot Discount Code on Sale Items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That depends on the individual promotion. Some offers may exclude clearance or already-discounted products, while others may apply only to selected merchandise."
      }
    }
  ]
},
  ],
};

export default function HomeDepotStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeDepotSchema) }} />
      <Suspense fallback={null}>
        <HomeDepotCouponsContent />
      </Suspense>
    </>
  );
}
