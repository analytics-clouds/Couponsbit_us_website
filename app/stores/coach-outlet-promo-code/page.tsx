import type { Metadata } from "next";
import { Suspense } from "react";
import CoachOutletCouponsContent from "./_components/StoreCouponsContent";
import { COACH_OUTLET_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Coach Outlet Promo Code: Save 80% on Jackets + More | Nov 2026",
  },
  description:
    "Save with a Coach Outlet Promo Code and Coach Outlet Discount Code. Get 80% off Tonal Signature Down Jacket and e-gift cards from $25. Verified Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/coach-outlet-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/coach-outlet-promo-code",
      "x-default": "https://www.couponsbit.us/stores/coach-outlet-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/coach-outlet-promo-code",
    title: "Coach Outlet Promo Code: Save 80% on Jackets + More | Nov 2026",
    description:
      "Save with a Coach Outlet Promo Code and Coach Outlet Discount Code. Get 80% off Tonal Signature Down Jacket and e-gift cards from $25. Verified Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789719709/coach_outlet_logo_ysdxtk.webp",
        width: 1200,
        height: 630,
        alt: "Coach Outlet Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Coach Outlet Promo Code: Save 80% on Jackets + More | Nov 2026",
    description:
      "Save with a Coach Outlet Promo Code and Coach Outlet Discount Code. Get 80% off Tonal Signature Down Jacket and e-gift cards from $25. Verified Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789719709/coach_outlet_logo_ysdxtk.webp"],
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

const coachOutletOffers = COACH_OUTLET_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Coach Outlet ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/coach-outlet-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Coach Outlet", url: "https://www.coachoutlet.com" },
}));

const coachOutletSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/coach-outlet-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/coach-outlet-promo-code",
      name: "Coach Outlet Promo Code: Save 80% on Jackets + More | Nov 2026",
      description:
        "Save with a Coach Outlet Promo Code and Coach Outlet Discount Code. Get 80% off Tonal Signature Down Jacket and e-gift cards from $25. Verified Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/coach-outlet-promo-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/coach-outlet-promo-code#brand",
      name: "Coach Outlet",
      url: "https://www.coachoutlet.com",
      sameAs: ["https://www.facebook.com/CoachOutlet", "https://twitter.com/CoachOutlet"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/coach-outlet-promo-code#offerlist",
      name: "Coach Outlet Promo Codes & Coupon Codes",
      description: "Latest Coach Outlet promo codes and offers on handbags and accessories.",
      url: "https://www.couponsbit.us/stores/coach-outlet-promo-code",
      numberOfItems: COACH_OUTLET_COUPONS.length,
      itemListElement: coachOutletOffers.map((offer, i) => ({
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
      "@id": "https://www.couponsbit.us/stores/coach-outlet-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Coach Outlet Coupons", item: "https://www.couponsbit.us/stores/coach-outlet-promo-code" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/coach-outlet-promo-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Coach Outlet offer promo codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Coach Outlet runs promotions and special offers throughout the year. Some promotions may include promotional codes, while others may be automatic discounts or product-specific deals."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find a Coach Outlet promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check CouponsBit for current Coach Outlet promo codes, coupon codes, and savings opportunities before placing your order. Always review the offer's terms before using it."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use a Coach Outlet promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Add eligible items to your cart, proceed to checkout, and enter the applicable promo code in the promotional-code field. Confirm the discount has been applied before completing your purchase."
          }
        },
        {
          "@type": "Question",
          "name": "Why isn't my Coach Outlet promo code working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The promotion may have expired, or your order may not meet its requirements. Some offers can be limited to selected products or promotional periods."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a Coach Outlet coupon code on sale items?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the individual promotion. Some codes may exclude sale merchandise or selected products, while others may have different eligibility requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Should I check for a Coach Outlet promo code before shopping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Checking for a current promo code or offer before checkout gives you an opportunity to compare available savings with the deals already running on the site."
          }
        },
        {
          "@type": "Question",
          "name": "What does Coach Outlet sell?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Coach Outlet offers a variety of fashion products, including handbags, wallets, card cases, shoes, apparel, jewelry, accessories, and giftable items at outlet pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Is Coach Outlet the same as the regular Coach store?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Coach Outlet is the outlet shopping channel associated with Coach. Its assortment includes select past-season items as well as outlet-specific products and styles. Product availability and promotions differ from Coach's main retail collections."
          }
        },
        {
          "@type": "Question",
          "name": "Does Coach Outlet sell handbags?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Handbags are one of the major categories available at Coach Outlet, with styles such as totes, shoulder bags, crossbody bags, satchels, backpacks, clutches, and more."
          }
        },
        {
          "@type": "Question",
          "name": "Does Coach Outlet sell wallets and accessories?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Coach Outlet offers wallets, card cases, jewelry, scarves, sunglasses, and small leather goods in addition to its handbags."
          }
        },
        {
          "@type": "Question",
          "name": "Can I shop Coach Outlet for gifts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Coach Outlet offers several products that can work well as gifts, including handbags, wallets, card cases, jewelry, scarves, sunglasses, and other accessories."
          }
        },
        {
          "@type": "Question",
          "name": "Does Coach Outlet offer free shipping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Coach Outlet may offer free shipping on qualifying orders. Check current offers for minimum order requirements."
          }
        },
        {
          "@type": "Question",
          "name": "When is the best time to look for Coach Outlet deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Promotions appear throughout the year, but major shopping periods such as Black Friday, Cyber Monday, Mother's Day, Valentine's Day, and the Christmas season are prime times to check."
          }
        }
      ]
    },
  ],
};

export default function CoachOutletStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(coachOutletSchema) }} />
      <Suspense fallback={null}><CoachOutletCouponsContent /></Suspense>
    </>
  );
}
