import type { Metadata } from "next";
import AporroCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Aporro Discount Code - signup and get $50 OFF + save 45% on S925 Baguette | Oct 2026",
  },
  description:
    "Find the latest Aporro discount code, promo code and verified jewelry deals for Oct 2026. Get $50 OFF as a new shopper, 2 chains for $99, and Save 45% on the S925 Baguette Mix Halo Stud Earring Set.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/aporro-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/aporro-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/aporro-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/aporro-discount-code",
      "x-default": "https://www.couponsbit.us/stores/aporro-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/aporro-discount-code",
    title: "Aporro Discount Code - signup and get $50 OFF + save 45% on S925 Baguette | Oct 2026",
    description:
      "Find the latest Aporro discount code, promo code and verified jewelry deals for Oct 2026. Get $50 OFF as a new shopper, 2 chains for $99, and Save 45% on the S925 Baguette Mix Halo Stud Earring Set.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1786949027/apporro-logo_og5y93.webp",
        width: 1200,
        height: 630,
        alt: "Aporro Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aporro Discount Code - signup and get $50 OFF + save 45% on S925 Baguette | Oct 2026",
    description:
      "Find the latest Aporro discount code, promo code and verified jewelry deals for Oct 2026. Get $50 OFF as a new shopper, 2 chains for $99, and Save 45% on the S925 Baguette Mix Halo Stud Earring Set.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1786949027/apporro-logo_og5y93.webp"],
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

const aporroSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/aporro-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/aporro-discount-code",
      name: "Aporro Discount Code - signup and get $50 OFF + save 45% on S925 Baguette | Oct 2026",
      description:
        "Find the latest Aporro discount code, promo code and verified jewelry deals for Oct 2026. Get $50 OFF as a new shopper, 2 chains for $99, and Save 45% on the S925 Baguette Mix Halo Stud Earring Set.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-09-21",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/aporro-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/aporro-discount-code#offerlist",
      name: "Aporro Discount Codes & Coupon Codes",
      description: "Latest Aporro discount codes and offers for chains, pendants, earrings, bracelets and rings.",
      url: "https://www.couponsbit.us/stores/aporro-discount-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.desc,
          url: "https://www.couponsbit.us/stores/aporro-discount-code",
          seller: { "@type": "Organization", name: "Aporro", url: "https://www.aporro.com" },
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
      "@id": "https://www.couponsbit.us/stores/aporro-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Aporro Coupons", item: "https://www.couponsbit.us/stores/aporro-discount-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/aporro-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Aporro offer a discount code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aporro offers sales, bundles, member rewards, and promotional offers throughout the year. Check CouponsBit for currently available savings before ordering."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find an Aporro promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for current Aporro promo codes and other available offers."
      }
    },
    {
      "@type": "Question",
      "name": "What does Aporro sell?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aporro sells chains, pendants, earrings, rings, bracelets, wallet chains, watches, grillz, and custom jewelry."
      }
    },
    {
      "@type": "Question",
      "name": "Does Aporro offer custom jewelry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Aporro offers custom pendants, necklaces, rings, bracelets, watches, and grillz. Customers can submit their own concepts and work with a jewelry consultant during the design process."
      }
    },
    {
      "@type": "Question",
      "name": "Does Aporro sell moissanite jewelry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Aporro offers moissanite jewelry across several categories, including earrings and custom pendants."
      }
    },
    {
      "@type": "Question",
      "name": "Does Aporro sell Cuban chains?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Cuban chains are among the chain styles available through Aporro, with different widths, finishes, and designs."
      }
    },
    {
      "@type": "Question",
      "name": "Does Aporro sell grillz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Aporro sells both pre-made and custom grillz. Custom options include different tooth counts, finishes, and stone choices."
      }
    },
    {
      "@type": "Question",
      "name": "How long does Aporro shipping take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aporro states that standard orders typically take about 2 business days to process plus approximately 4–6 business days for shipping. Custom and made-to-order products require additional time."
      }
    },
    {
      "@type": "Question",
      "name": "What is Aporro's return policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eligible unworn items can generally be returned within 14 days of receipt. Solid gold and custom or made-to-order products are excluded, while earrings and grillz cannot be returned for hygiene reasons."
      }
    },
    {
      "@type": "Question",
      "name": "Is CouponsBit free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. CouponsBit is free to use. You can browse available Aporro offers and other shopping deals without paying a fee."
      }
    }
  ]
},
  ],
};

export default function AporroStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aporroSchema) }} />
      <AporroCouponsContent />
    </>
  );
}
