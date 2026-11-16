import type { Metadata } from "next";
import { Suspense } from "react";
import ZaraCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Zara Promo Code: Save 80% on Dresses | Nov 2026",
  },
  description:
    "Use a Zara Promo Code to save 80% on the Short Lace Godet Dress and get the Oversized Linen Blend Shirt for $45.90. Verified Zara Discount Code deals for Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/zara-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/zara-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/zara-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/zara-discount-code",
      "x-default": "https://www.couponsbit.us/stores/zara-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/zara-discount-code",
    title: "Zara Promo Code: Save 80% on Dresses | Nov 2026",
    description:
      "Use a Zara Promo Code to save 80% on the Short Lace Godet Dress and get the Oversized Linen Blend Shirt for $45.90. Verified Zara Discount Code deals for Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787124413/zara-logo_ba1o0i.webp",
        width: 1200,
        height: 630,
        alt: "Zara Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Zara Promo Code: Save 80% on Dresses | Nov 2026",
    description:
      "Use a Zara Promo Code to save 80% on the Short Lace Godet Dress and get the Oversized Linen Blend Shirt for $45.90. Verified Zara Discount Code deals for Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787124413/zara-logo_ba1o0i.webp"],
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

const zaraSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/zara-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/zara-discount-code",
      name: "Zara Promo Code: Save 80% on Dresses | Nov 2026",
      description:
        "Use a Zara Promo Code to save 80% on the Short Lace Godet Dress and get the Oversized Linen Blend Shirt for $45.90. Verified Zara Discount Code deals for Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/zara-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/zara-discount-code#offerlist",
      name: "Zara Discount Codes & Coupon Codes",
      description: "Latest Zara discount codes and offers for women's, men's and kids' apparel and Zara Home.",
      url: "https://www.couponsbit.us/stores/zara-discount-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Offer", name: o.title, description: o.desc, url: "https://www.couponsbit.us/stores/zara-discount-code", seller: { "@type": "Organization", name: "Zara", url: "https://www.zara.com" } },
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
      "@id": "https://www.couponsbit.us/stores/zara-discount-code#brand",
      name: "Zara",
      url: "https://www.zara.com",
      sameAs: ["https://en.wikipedia.org/wiki/Zara_(retailer)"],
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/zara-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Zara Coupons", item: "https://www.couponsbit.us/stores/zara-discount-code" },
      ],
    },

   {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/zara-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where can I find a Zara discount code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available Zara promotions, coupon codes, and deals before shopping."
      }
    },
    {
      "@type": "Question",
      "name": "What is a Zara coupon code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Zara coupon code is a promotional code that may provide a discount or another benefit when used on an eligible purchase according to the offer's conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Does Zara always have a coupon code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The availability of promotional codes can change. Zara may also offer savings through sale pricing and other promotions, so it's worth checking the current offers rather than assuming a code is required."
      }
    },
    {
      "@type": "Question",
      "name": "When is the next Zara sale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zara's promotional and sale periods can change, and inventory may vary throughout the year. Check CouponsBit for current Zara sale information and available offers."
      }
    },
    {
      "@type": "Question",
      "name": "What can I buy at Zara?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zara offers women's, men's, and children's fashion, including dresses, tops, shirts, T-shirts, jeans, pants, skirts, shorts, knitwear, jackets, blazers, suits, swimwear, lingerie, shoes, bags, and accessories. It also offers perfumes, makeup, Zara Hair, and Zara Home products."
      }
    },
    {
      "@type": "Question",
      "name": "Does Zara sell home products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Zara Home offers furniture, bedding, lighting, rugs, décor, kitchen and dining products, bathroom items, cleaning products, home fragrances, textiles, and more."
      }
    },
    {
      "@type": "Question",
      "name": "Does Zara have products for children?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Zara offers clothing, shoes, accessories, and other products for girls, boys, toddlers, babies, and newborns. Zara Home Kids also offers furniture, toys, bedding, décor, and other children's products."
      }
    },
    {
      "@type": "Question",
      "name": "Can I combine a Zara coupon code with sale items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That depends on the specific promotion and its terms. Check the conditions of the offer before assuming it can be combined with sale pricing."
      }
    },
    {
      "@type": "Question",
      "name": "Does Zara have an app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zara's U.S. site provides a download-app option, and app-related promotions may vary over time."
      }
    }
  ]
},
  ],
};

export default function ZaraStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(zaraSchema) }} />
      <Suspense fallback={null}><ZaraCouponsContent /></Suspense>
    </>
  );
}
