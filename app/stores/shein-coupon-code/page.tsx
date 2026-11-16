import type { Metadata } from "next";
import { Suspense } from "react";
import SheinCouponsContent from "./_components/StoreCouponsContent";
import { SHEIN_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "SHEIN Promo Code: Up to 90% Off Warehouse Sale | Nov 2026",
  },
  description:
    "Use a SHEIN Promo Code to get up to 90% off the Local Warehouse Sale and the SXY Plus Size 3-Piece Floral Swim Set for $20.99. Verified SHEIN Discount Code deals for Nov 2026.  ",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/shein-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/shein-coupon-code",
      "en-GB": "https://www.couponsbit.us/stores/shein-coupon-code",
      "en-IN": "https://www.couponsbit.us/stores/shein-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/shein-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/shein-coupon-code",
    title: "SHEIN Promo Code: Up to 90% Off Warehouse Sale | Nov 2026",
    description:
      "Use a SHEIN Promo Code to get up to 90% off the Local Warehouse Sale and the SXY Plus Size 3-Piece Floral Swim Set for $20.99. Verified SHEIN Discount Code deals for Nov 2026.  ",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1786949026/shein-logo_nukqfb.webp",
        width: 1200,
        height: 630,
        alt: "Shein Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SHEIN Promo Code: Up to 90% Off Warehouse Sale | Nov 2026",
    description:
      "Use a SHEIN Promo Code to get up to 90% off the Local Warehouse Sale and the SXY Plus Size 3-Piece Floral Swim Set for $20.99. Verified SHEIN Discount Code deals for Nov 2026.  ",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1786949026/shein-logo_nukqfb.webp"],
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

const sheinSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/shein-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/shein-coupon-code",
      name: "SHEIN Promo Code: Up to 90% Off Warehouse Sale | Nov 2026",
      description:
        "Use a SHEIN Promo Code to get up to 90% off the Local Warehouse Sale and the SXY Plus Size 3-Piece Floral Swim Set for $20.99. Verified SHEIN Discount Code deals for Nov 2026.  ",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/shein-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/shein-coupon-code#offerlist",
      name: "Shein Coupon Codes & Promo Codes",
      description: "Latest Shein coupon codes, promo codes and offers for fashion, beauty, home and accessories.",
      url: "https://www.couponsbit.us/stores/shein-coupon-code",
      numberOfItems: SHEIN_COUPONS.length,
      itemListElement: SHEIN_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Offer", name: c.title, description: c.description, url: "https://www.couponsbit.us/stores/shein-coupon-code", seller: { "@type": "Organization", name: "Shein", url: "https://www.sheinindia.in" } },
      })),
    },

    {
      "@type": "WebSite",
      "@id": "https://www.couponsbit.us/#website",
      url: "https://www.couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is one of the best coupon websites offering verified coupons, deals, and coupon help for top brands worldwide.",
      inLanguage: "en-US",
      publisher: {
        "@id": "https://www.couponsbit.us/#organization",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/#organization",
      name: "Couponsbit",
      url: "https://www.couponsbit.us",
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/couponsbit-logo_kxqyir.webp",
        width: 200,
        height: 60,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        availableLanguage: "English",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/shein-coupon-code#brand",
      name: "SHEIN",
      url: "https://www.shein.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/shein-coupon-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Shein Coupons", item: "https://www.couponsbit.us/stores/shein-coupon-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/shein-coupon-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does SHEIN Have Coupon Codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. SHEIN provides promotional coupons and promo codes through different channels and campaigns. Availability, eligibility, and expiration dates can vary."
      }
    },
    {
      "@type": "Question",
      "name": "Where Can I Find a SHEIN Promo Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available SHEIN promo codes, coupon offers, and discount deals before placing your order."
      }
    },
    {
      "@type": "Question",
      "name": "How Do I Use a SHEIN Coupon Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Add your products to your shopping bag, proceed to checkout, and enter your valid SHEIN coupon code in the promo code field. SHEIN allows one promo code per order."
      }
    },
    {
      "@type": "Question",
      "name": "Does SHEIN Have a First Order Discount?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SHEIN may provide a welcome offer to new customers. Its current U.S. first-order guidance describes a first-order voucher subject to conditions such as a minimum purchase, expiration period, and one-time use."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Use More Than One SHEIN Coupon Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SHEIN's U.S. coupon policy states that only one coupon can be redeemed for a given order, so multiple coupons generally cannot be stacked together."
      }
    },
    {
      "@type": "Question",
      "name": "Do SHEIN Coupon Codes Expire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. SHEIN coupons have expiration dates, and expired coupons cannot be redeemed. Always check the expiration date and terms before using an offer."
      }
    },
    {
      "@type": "Question",
      "name": "What Can I Buy at SHEIN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SHEIN's U.S. marketplace offers women's and men's clothing, Curve fashion, kids' products, shoes, accessories, beauty products, home and living items, sportswear, baby and maternity products, electronics, pet supplies, and more."
      }
    },
    {
      "@type": "Question",
      "name": "Is CouponsBit Free to Use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. CouponsBit is free to use. Shoppers can browse coupon codes, discounts, and promotional offers across fashion, beauty, technology, travel, entertainment, and other categories."
      }
    }
  ]
},
  ],
};

export default function SheinStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sheinSchema),
        }}
      />
      <Suspense fallback={null}>
        <SheinCouponsContent />
      </Suspense>
    </>
  );
}
