import type { Metadata } from "next";
import KohlsCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: {
    absolute: "Kohl's Coupon Code: Save on Apparel & Home | Sep 2026",
  },
  description:
    "Find the latest Kohl's coupon code and coupon offers for Sep 2026. Save on apparel, shoes, home goods, and beauty with verified Kohl's deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/kohls-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/kohls-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/kohls-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/kohls-coupon-code",
    title: "Kohl's Coupon Code: Save on Apparel & Home | Sep 2026",
    description:
      "Find the latest Kohl's coupon code and coupon offers for Sep 2026. Save on apparel, shoes, home goods, and beauty with verified Kohl's deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789994531/kohls-logo_pijwvs.webp",
        width: 1200,
        height: 630,
        alt: "Kohl's Coupon Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kohl's Coupon Code: Save on Apparel & Home | Sep 2026",
    description:
      "Find the latest Kohl's coupon code and coupon offers for Sep 2026. Save on apparel, shoes, home goods, and beauty with verified Kohl's deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789994531/kohls-logo_pijwvs.webp"],
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

const kohlsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/kohls-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/kohls-coupon-code",
      name: "Kohl's Coupon Code: Save on Apparel & Home | Sep 2026",
      description:
        "Find the latest Kohl's coupon code and coupon offers for Sep 2026. Save on apparel, shoes, home goods, and beauty with verified Kohl's deals.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-09-21",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/kohls-coupon-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/kohls-coupon-code#offerlist",
      name: "Kohl's Coupon Codes & Coupon Codes",
      description: "Latest Kohl's coupon codes and offers.",
      url: "https://www.couponsbit.us/stores/kohls-coupon-code",
      numberOfItems: 6,
      itemListElement: [
        { "@type": "ListItem", position: 1, item: { "@type": "Offer", name: "Kohl's – New Customer Offer", description: "New customers can save on their first Kohl's order.", url: "https://www.couponsbit.us/stores/kohls-coupon-code", seller: { "@type": "Organization", name: "Kohl's", url: "https://www.kohls.com" } } },
        { "@type": "ListItem", position: 2, item: { "@type": "Offer", name: "Kohl's – Kohl's Cash Deal", description: "Earn Kohl's Cash on qualifying purchases.", url: "https://www.couponsbit.us/stores/kohls-coupon-code", seller: { "@type": "Organization", name: "Kohl's", url: "https://www.kohls.com" } } },
        { "@type": "ListItem", position: 3, item: { "@type": "Offer", name: "Kohl's – Percentage Off Sitewide", description: "Save a percentage on qualifying sitewide orders.", url: "https://www.couponsbit.us/stores/kohls-coupon-code", seller: { "@type": "Organization", name: "Kohl's", url: "https://www.kohls.com" } } },
        { "@type": "ListItem", position: 4, item: { "@type": "Offer", name: "Kohl's – Free Shipping Offer", description: "Enjoy free shipping on select qualifying orders.", url: "https://www.couponsbit.us/stores/kohls-coupon-code", seller: { "@type": "Organization", name: "Kohl's", url: "https://www.kohls.com" } } },
        { "@type": "ListItem", position: 5, item: { "@type": "Offer", name: "Kohl's – Home & Apparel Picks", description: "Save on select home goods and apparel.", url: "https://www.couponsbit.us/stores/kohls-coupon-code", seller: { "@type": "Organization", name: "Kohl's", url: "https://www.kohls.com" } } },
        { "@type": "ListItem", position: 6, item: { "@type": "Offer", name: "Kohl's – Seasonal Clearance Sale", description: "Save on select seasonal clearance items.", url: "https://www.couponsbit.us/stores/kohls-coupon-code", seller: { "@type": "Organization", name: "Kohl's", url: "https://www.kohls.com" } } },
      ],
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
      "@id": "https://www.couponsbit.us/stores/kohls-coupon-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Kohl's Coupons", item: "https://www.couponsbit.us/stores/kohls-coupon-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/kohls-coupon-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Kohl's offer promo codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Kohl's offers promotional coupons and codes for eligible purchases. Available offers, eligibility, and expiration dates vary by promotion."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find a Kohl's promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available Kohl's promotions before shopping on Kohls.com."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use more than one Kohl's promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kohl's allows multiple eligible coupons on qualifying online orders, although restrictions apply. Kohl's currently states that up to four promo codes can be applied to an online order and only one sitewide percentage-off coupon can be used."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use Kohl's Cash with a promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kohl's Cash can generally be used alongside eligible coupons, subject to the terms of the individual promotions. Kohl's Cash is applied before a percentage-off total-purchase coupon."
      }
    },
    {
      "@type": "Question",
      "name": "Does Kohl's Cash expire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Kohl's Cash can only be redeemed during the redemption period specified for the promotion or coupon."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Kohl's coupon on Sephora at Kohl's?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Certain Kohl's coupons and promotions exclude Sephora at Kohl's merchandise. Always check the individual coupon's exclusions before checkout."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my Kohl's promo code not working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The code may be expired, restricted to specific products or brands, subject to usage limits, or incompatible with another promotion. Kohl's also excludes certain categories and charges from coupons."
      }
    },
    {
      "@type": "Question",
      "name": "Does Kohl's have discounts during Black Friday and Cyber Monday?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kohl's participates in the major U.S. holiday shopping season, and shoppers can look for promotions during Black Friday and Cyber Monday. Available offers vary from year to year."
      }
    }
  ]
},
  ],
};

export default function KohlsStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(kohlsSchema) }} />
      <KohlsCouponsContent />
    </>
  );
}
