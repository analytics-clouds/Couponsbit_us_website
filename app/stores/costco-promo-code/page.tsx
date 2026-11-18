import type { Metadata } from "next";
import { Suspense } from "react";
import CostcoContent from "./_components/StoreCouponsContent";
import { COSTCO_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Costco Promo Code: Save 40% on All Orders | Nov 2026",
  },
  description:
    "Save with a Costco Promo Code and Costco Discount Code. Get 40% off eligible Costco orders and $600 off eligible purchases with verified Nov 2026 deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/costco-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/costco-promo-code",
      "x-default": "https://www.couponsbit.us/stores/costco-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/costco-promo-code",
    title: "Costco Promo Code: Save 40% on All Orders | Nov 2026",
    description:
      "Save with a Costco Promo Code and Costco Discount Code. Get 40% off eligible Costco orders and $600 off eligible purchases with verified Nov 2026 deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1790238446/costoc-logo_nkxnxl.webp",
        width: 1200,
        height: 630,
        alt: "Costco Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Costco Promo Code: Save 40% on All Orders | Nov 2026",
    description:
      "Save with a Costco Promo Code and Costco Discount Code. Get 40% off eligible Costco orders and $600 off eligible purchases with verified Nov 2026 deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1790238446/costoc-logo_nkxnxl.webp"],
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

const costcoOffers = COSTCO_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Costco ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/costco-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Costco", url: "https://www.costco.com" },
}));

const costcoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/costco-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/costco-promo-code",
      name: "Costco Promo Code: Save 40% on All Orders | Nov 2026",
      description:
        "Save with a Costco Promo Code and Costco Discount Code. Get 40% off eligible Costco orders and $600 off eligible purchases with verified Nov 2026 deals.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/costco-promo-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/costco-promo-code#brand",
      name: "Costco",
      url: "https://www.costco.com",
      sameAs: ["https://www.facebook.com/Costco", "https://twitter.com/Costco"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/costco-promo-code#offerlist",
      name: "Costco Promo Codes & Coupon Codes",
      description: "Latest Costco promo codes and offers.",
      url: "https://www.couponsbit.us/stores/costco-promo-code",
      numberOfItems: COSTCO_COUPONS.length,
      itemListElement: costcoOffers.map((offer, i) => ({
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
      "@id": "https://www.couponsbit.us/stores/costco-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Costco Coupons", item: "https://www.couponsbit.us/stores/costco-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/costco-promo-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Costco have promo codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Costco runs promotions throughout the year, although many of its offers are presented as product-specific savings, member promotions, Shop Card offers, or automatically applied discounts rather than traditional coupon codes. Check the current Costco offers before purchasing."
          }
        },
        {
          "@type": "Question",
          "name": "Does Costco offer coupons?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Costco offers various promotions and savings opportunities for members. These can include product discounts, seasonal promotions, online-only offers, and other member benefits."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a Costco membership to shop?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Costco operates as a membership-based retailer, and membership is generally required for shopping in its warehouses and online. Costco offers different membership types, including Gold Star, Business, and Executive memberships."
          }
        },
        {
          "@type": "Question",
          "name": "What can I buy at Costco?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Costco sells a broad selection of groceries, household essentials, appliances, electronics, clothing, furniture, jewelry, health and personal-care products, sports equipment, toys, pet supplies, tires, and more. It also provides services such as pharmacy, optical, travel, gasoline, and home services."
          }
        },
        {
          "@type": "Question",
          "name": "Does Costco have a rewards programme?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Executive Costco members can earn an annual reward on qualifying purchases, subject to applicable terms and exclusions."
          }
        },
        {
          "@type": "Question",
          "name": "Does Costco offer online-only deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Costco regularly features online-only savings and promotions on Costco.com."
          }
        },
        {
          "@type": "Question",
          "name": "Does Costco offer Black Friday and Cyber Monday deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Costco features dedicated Black Friday and Cyber Monday shopping categories, although the exact promotions and products change each year."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a Costco promo code on every product?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Promotional codes and offers can have product, membership, timing, or other eligibility restrictions. Always review the conditions attached to the specific promotion."
          }
        },
        {
          "@type": "Question",
          "name": "How can I find Costco deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check Costco's current Savings section, seasonal promotions, online-only offers, membership benefits, and available Costco promo codes before completing your purchase."
          }
        }
      ]
    },
  ],
};

export default function CostcoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(costcoSchema) }} />
      <Suspense fallback={null}><CostcoContent /></Suspense>
    </>
  );
}
