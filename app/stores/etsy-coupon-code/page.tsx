import type { Metadata } from "next";
import { Suspense } from "react";
import EtsyCouponsContent from "./_components/StoreCouponsContent";
import { ETSY_COUPONS } from "./_components/offers";

const storeOffers = ETSY_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: coupon.title,
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/etsy-coupon-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Etsy", url: "https://www.etsy.com/" },
}));

export const metadata: Metadata = {
  title: {
    absolute: "Etsy Promo Code: Get 75% Off on Custom Neon Signs | Nov 2026  ",
  },
  description:
    "Use an Etsy Promo Code to get 75% off Custom Neon Signs and 70% off Custom Keepsake Gifts. Verified Etsy Discount Code deals for Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/etsy-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/etsy-coupon-code",
      "en-GB": "https://www.couponsbit.us/stores/etsy-coupon-code",
      "en-IN": "https://www.couponsbit.us/stores/etsy-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/etsy-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/etsy-coupon-code",
    title: "Etsy Promo Code: Get 75% Off on Custom Neon Signs | Nov 2026  ",
    description:
      "Use an Etsy Promo Code to get 75% off Custom Neon Signs and 70% off Custom Keepsake Gifts. Verified Etsy Discount Code deals for Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/etsy-logo_rpfkzs.webp",
        width: 1200,
        height: 630,
        alt: "Etsy Coupon Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Etsy Promo Code: Get 75% Off on Custom Neon Signs | Nov 2026  ",
    description:
      "Use an Etsy Promo Code to get 75% off Custom Neon Signs and 70% off Custom Keepsake Gifts. Verified Etsy Discount Code deals for Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787205138/etsy-logo_rpfkzs.webp"],
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

const etsySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/etsy-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/etsy-coupon-code",
      name: "Etsy Promo Code: Get 75% Off on Custom Neon Signs | Nov 2026  ",
      description:
        "Use an Etsy Promo Code to get 75% off Custom Neon Signs and 70% off Custom Keepsake Gifts. Verified Etsy Discount Code deals for Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/etsy-coupon-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/etsy-coupon-code#offerlist",
      name: "Etsy Coupon Codes & Discount Codes",
      description: "Latest Etsy coupon codes and offers for handmade goods, vintage items and craft supplies.",
      url: "https://www.couponsbit.us/stores/etsy-coupon-code",
      numberOfItems: ETSY_COUPONS.length,
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
      "@id": "https://www.couponsbit.us/stores/etsy-coupon-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Etsy Coupons", item: "https://www.couponsbit.us/stores/etsy-coupon-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/etsy-coupon-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where Can I Find an Etsy Discount Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available Etsy discount codes, coupons, deals, and promotional offers before placing an order."
      }
    },
    {
      "@type": "Question",
      "name": "What Is an Etsy Coupon Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Etsy coupon code is a promotional code that may provide a discount on an eligible purchase. Depending on the promotion, it may apply to a specific seller rather than the entire Etsy marketplace."
      }
    },
    {
      "@type": "Question",
      "name": "Does Etsy Always Have a Discount Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Coupon availability changes, and individual sellers can create or end their own promotions."
      }
    },
    {
      "@type": "Question",
      "name": "Does Etsy Have Sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Etsy and individual sellers run promotional campaigns throughout the year, including seasonal sales, seller-specific discounts, holiday promotions, and major shopping events."
      }
    },
    {
      "@type": "Question",
      "name": "Does Etsy Have a Black Friday Sale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Etsy participates in Black Friday and Cyber Monday shopping periods, while individual sellers can also run their own promotions during these events."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Find Personalized Gifts on Etsy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Personalized products are one of Etsy's major categories, including jewelry, home décor, clothing, wedding products, gifts, signs, and keepsakes."
      }
    },
    {
      "@type": "Question",
      "name": "Does Etsy Sell Vintage Products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Etsy has a dedicated vintage marketplace featuring clothing, jewelry, furniture, collectibles, décor, accessories, and other vintage goods."
      }
    },
    {
      "@type": "Question",
      "name": "Does Etsy Sell Craft Supplies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Etsy offers fabric, yarn, beads, sewing supplies, patterns, tools, craft kits, paper products, and many other supplies for creative projects."
      }
    },
    {
      "@type": "Question",
      "name": "Does Etsy Sell Digital Products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Digital products include templates, planners, invitations, artwork, craft patterns, SVG files, fonts, educational resources, and other downloadable products."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Use an Etsy Discount Code on Sale Items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That depends on the specific coupon. Seller-created promotions can have their own rules regarding sale products, minimum purchases, and eligible listings."
      }
    },
    {
      "@type": "Question",
      "name": "Are Etsy Coupons Valid Across Every Seller?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. A coupon created by an individual seller may only work on products from that seller's shop. Always check the coupon's terms before checkout."
      }
    }
  ]
},
  ],
};

export default function EtsyStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(etsySchema) }} />
      <Suspense fallback={null}>
        <EtsyCouponsContent />
      </Suspense>
    </>
  );
}
