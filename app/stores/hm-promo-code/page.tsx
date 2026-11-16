import type { Metadata } from "next";
import { Suspense } from "react";
import HmCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "H&M Promo Code: Up to 72% Off + Beauty Deals | Nov 2026",
  },
  description:
    "Save up to 72% with an H&M Promo Code or use an H&M Discount Code for up to 70% off beauty products. Verified deals for Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/hm-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/hm-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/hm-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/hm-promo-code",
      "x-default": "https://www.couponsbit.us/stores/hm-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/hm-promo-code",
    title: "H&M Promo Code: Up to 72% Off + Beauty Deals | Nov 2026",
    description:
      "Save up to 72% with an H&M Promo Code or use an H&M Discount Code for up to 70% off beauty products. Verified deals for Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787124418/hm-logo_nn4tfs.webp",
        width: 1200,
        height: 630,
        alt: "H&M Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "H&M Promo Code: Up to 72% Off + Beauty Deals | Nov 2026",
    description:
      "Save up to 72% with an H&M Promo Code or use an H&M Discount Code for up to 70% off beauty products. Verified deals for Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787124418/hm-logo_nn4tfs.webp"],
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

const hmSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/hm-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/hm-promo-code",
      name: "H&M Promo Code: Up to 72% Off + Beauty Deals | Nov 2026",
      description:
        "Save up to 72% with an H&M Promo Code or use an H&M Discount Code for up to 70% off beauty products. Verified deals for Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/hm-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/hm-promo-code#offerlist",
      name: "H&M Promo Codes & Coupon Codes",
      description: "Latest H&M promo codes and offers for men's, women's and kids' apparel and H&M Home.",
      url: "https://www.couponsbit.us/stores/hm-promo-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Offer", name: o.title, description: o.desc, url: "https://www.couponsbit.us/stores/hm-promo-code", seller: { "@type": "Organization", name: "H&M", url: "https://www2.hm.com" } },
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
      "@id": "https://www.couponsbit.us/stores/hm-promo-code#brand",
      name: "H&M",
      url: "https://www2.hm.com",
      sameAs: ["https://en.wikipedia.org/wiki/H%26M"],
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/hm-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "H&M Coupons", item: "https://www.couponsbit.us/stores/hm-promo-code" },
      ],
    },

{
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/hm-promo-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How Can I Find an H&M Discount Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CouponsBit is one place to check for available H&M discount codes, coupons, deals, and promotions before you shop."
      }
    },
    {
      "@type": "Question",
      "name": "Is an H&M Coupon Code the Same as a Discount Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The terms are often used interchangeably. Both generally refer to promotional offers that can provide a saving or another benefit when the relevant conditions are met."
      }
    },
    {
      "@type": "Question",
      "name": "Are H&M Discount Codes Available All the Time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Promotional availability changes. At different times, shoppers may encounter coupon codes, sale prices, seasonal promotions, student offers, or other campaigns instead."
      }
    },
    {
      "@type": "Question",
      "name": "Does H&M Have Sale Items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. H&M regularly offers reduced-price products, although the products and discounts available can change as stock is updated."
      }
    },
    {
      "@type": "Question",
      "name": "What Categories Does H&M Offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "H&M's assortment includes women's, men's, children's, and baby clothing, as well as shoes, accessories, sportswear, beauty, and home products."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Buy Makeup and Fragrance at H&M?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. H&M's beauty selection can include makeup, perfumes, body mists, nail products, skincare-related products, hair accessories, brushes, cosmetic bags, and beauty sets."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Shop for Home Products at H&M?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. H&M Home offers a range of products for areas including bedrooms, living rooms, bathrooms, kitchens, children's rooms, hallways, and outdoor spaces."
      }
    },
    {
      "@type": "Question",
      "name": "Does H&M Offer Student Savings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Student offers may be available depending on the market and current promotion. Always check the latest eligibility rules and terms before attempting to use one."
      }
    },
    {
      "@type": "Question",
      "name": "Can a Coupon Be Used on H&M Sale Products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no universal rule. Each promotion has its own conditions, and certain codes may exclude sale items, selected categories, or other products. Check the specific offer before checkout."
      }
    },
    {
      "@type": "Question",
      "name": "What Else Does H&M Sell Besides Clothing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Along with apparel, H&M offers footwear, handbags, jewelry, accessories, sportswear, beauty products, fragrances, makeup tools, home décor, furniture, bedding, lighting, kitchen and dining products, bathroom accessories, storage products, and other lifestyle items."
      }
    }
  ]
},
  ],
};

export default function HmStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hmSchema) }} />
      <Suspense fallback={null}><HmCouponsContent /></Suspense>
    </>
  );
}
