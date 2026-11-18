import type { Metadata } from "next";
import { Suspense } from "react";
import StockXCouponsContent from "./_components/StoreCouponsContent";
import { STOCKX_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "StockX Promo Code: Up to 60% OFF Accessories | Nov 2026",
  },
  description:
    "StockX Promo Code saves up to 60% on accessories and 50% on apparel. Explore StockX Discount Code deals with verified Nov 2026 savings today.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/stockx-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/stockx-discount-code",
      "x-default": "https://www.couponsbit.us/stores/stockx-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/stockx-discount-code",
    title: "StockX Promo Code: Up to 60% OFF Accessories | Nov 2026",
    description:
      "StockX Promo Code saves up to 60% on accessories and 50% on apparel. Explore StockX Discount Code deals with verified Nov 2026 savings today.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1792648465/stock-logo_ixdvkn.webp",
        width: 1200,
        height: 630,
        alt: "StockX Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "StockX Promo Code: Up to 60% OFF Accessories | Nov 2026",
    description:
      "StockX Promo Code saves up to 60% on accessories and 50% on apparel. Explore StockX Discount Code deals with verified Nov 2026 savings today.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1792648465/stock-logo_ixdvkn.webp"],
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

  other: { 'geo.region': 'US', 'geo.country': 'US', language: 'en-US' },
};

const storeOffers = STOCKX_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `StockX ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/stockx-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "StockX", url: "https://www.stockx.com" },
}));

const stockxSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/stockx-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/stockx-discount-code",
      name: "StockX Promo Code: Up to 60% OFF Accessories | Nov 2026",
      description:
        "StockX Promo Code saves up to 60% on accessories and 50% on apparel. Explore StockX Discount Code deals with verified Nov 2026 savings today.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/stockx-discount-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/stockx-discount-code#brand",
      name: "StockX",
      url: "https://www.stockx.com",
      sameAs: ["https://www.facebook.com/StockX", "https://twitter.com/StockX"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/stockx-discount-code#offerlist",
      name: "StockX Discount Codes & Coupon Codes",
      description: "Latest StockX discount codes and offers.",
      url: "https://www.couponsbit.us/stores/stockx-discount-code",
      numberOfItems: STOCKX_COUPONS.length,
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
      "@id": "https://www.couponsbit.us/stores/stockx-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "StockX Coupons", item: "https://www.couponsbit.us/stores/stockx-discount-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/stockx-discount-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does StockX offer discount codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. StockX occasionally offers promotional codes through email, influencer partnerships, social media, and its blog. Availability and terms vary, so check the official promotion details."
          }
        },
        {
          "@type": "Question",
          "name": "How do I redeem a StockX discount code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose your item, proceed to checkout, and enter the code in the Discount Code field. Select Apply and check whether the price updates before completing your order."
          }
        },
        {
          "@type": "Question",
          "name": "Why isn't my StockX promo code working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The code may have expired, may not apply to your selected purchase, or may have specific eligibility requirements. Review its terms and confirm that you entered it correctly."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a StockX discount code on every product?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Each promotion may have its own conditions, eligible products, or regional restrictions. Check the offer details before relying on a discount."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find StockX deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check CouponsBit for available StockX discount codes and browse StockX’s official website, email promotions, and social channels for offers. Confirm the validity of any code before checkout."
          }
        }
      ]
    },
  ],
};

export default function StockXStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(stockxSchema) }} />
      <Suspense fallback={null}>
        <StockXCouponsContent />
      </Suspense>
    </>
  );
}
