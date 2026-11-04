import type { Metadata } from "next";
import SaksFifthAvenueCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Saks Fifth Avenue Discount Code: Get 25% OFF + $250 OFF | Nov 2026",
  },
  description:
    "Get the latest Saks Fifth Avenue Discount Code for November 2026 and save 25% OFF designer fashion or enjoy up to $250 OFF eligible luxury purchases.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/saks-fifth-avenue-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/saks-fifth-avenue-discount-code",
      "x-default": "https://www.couponsbit.us/stores/saks-fifth-avenue-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/saks-fifth-avenue-discount-code",
    title: "Saks Fifth Avenue Discount Code: Get 25% OFF + $250 OFF | Nov 2026",
    description:
      "Get the latest Saks Fifth Avenue Discount Code for November 2026 and save 25% OFF designer fashion or enjoy up to $250 OFF eligible luxury purchases.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1793688836/saks-fifth-avenue_senmoo.webp",
        width: 1200,
        height: 630,
        alt: "Saks Fifth Avenue Discount Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Saks Fifth Avenue Discount Code: Get 25% OFF + $250 OFF | Nov 2026",
    description:
      "Get the latest Saks Fifth Avenue Discount Code for November 2026 and save 25% OFF designer fashion or enjoy up to $250 OFF eligible luxury purchases.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1793688836/saks-fifth-avenue_senmoo.webp"],
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

const saksFifthAvenueSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/saks-fifth-avenue-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/saks-fifth-avenue-discount-code",
      name: "Saks Fifth Avenue Discount Code: Get 25% OFF + $250 OFF | Nov 2026",
      description:
        "Get the latest Saks Fifth Avenue Discount Code for November 2026 and save 25% OFF designer fashion or enjoy up to $250 OFF eligible luxury purchases.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-03",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/saks-fifth-avenue-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/saks-fifth-avenue-discount-code#offerlist",
      name: "Saks Fifth Avenue Discount Codes & Promo Codes",
      description: "Latest Saks Fifth Avenue discount codes and luxury fashion offers.",
      url: "https://www.couponsbit.us/stores/saks-fifth-avenue-discount-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.desc,
          url: "https://www.couponsbit.us/stores/saks-fifth-avenue-discount-code",
          seller: { "@type": "Organization", name: "Saks Fifth Avenue", url: "https://www.saksfifthavenue.com" },
        },
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
      "@id": "https://www.couponsbit.us/stores/saks-fifth-avenue-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Saks Fifth Avenue Coupons", item: "https://www.couponsbit.us/stores/saks-fifth-avenue-discount-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/saks-fifth-avenue-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where can I find a Saks Fifth Avenue promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can visit CouponsBit to explore available Saks Fifth Avenue promo codes, coupons, and shopping deals. You can also check the official Saks website for seasonal promotions and selected designer offers."
      }
    },
    {
      "@type": "Question",
      "name": "Does Saks Fifth Avenue offer discounts on designer brands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Saks features sale products and promotional offers on selected designer merchandise. However, some designers and product categories may be excluded from specific promotions. Check the offer conditions before purchasing."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Saks Fifth Avenue promo code on sale items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the promotion. Some codes apply only to selected full-price products, while others may include eligible sale merchandise. Review the terms to confirm whether your items qualify."
      }
    },
    {
      "@type": "Question",
      "name": "Does Saks Fifth Avenue offer a welcome discount?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Welcome promotions may be available to eligible shoppers from time to time. Check the official website and available CouponsBit offers for current eligibility requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my Saks Fifth Avenue promo code not working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your code may have expired, may require account sign-in, or may not apply to the products in your shopping bag. Selected designers, beauty products, fragrances, and other categories can be excluded from promotional offers."
      }
    },
    {
      "@type": "Question",
      "name": "What can I buy at Saks Fifth Avenue?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Saks Fifth Avenue offers designer clothing, shoes, handbags, jewellery, accessories, beauty products, children's fashion, gifts, and home merchandise."
      }
    }
  ]
},
  ],
};

export default function SaksFifthAvenueStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(saksFifthAvenueSchema) }} />
      <SaksFifthAvenueCouponsContent />
    </>
  );
}
