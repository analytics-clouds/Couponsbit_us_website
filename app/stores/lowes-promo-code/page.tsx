import type { Metadata } from "next";
import { Suspense } from "react";
import LowesCouponsContent from "./_components/StoreCouponsContent";
import { LOWES_COUPONS } from "./_components/offers";

const TITLE = "Lowe’s Promo Code: Save 50% on Holland Pavers | Nov 2026 ✅";
const DESCRIPTION =
  "Use a Lowe’s promo code and Lowe’s coupon code to save up to 50% on power tools and get up to $600 off major appliances. Verified Nov 2026. Shop now.";
const CANONICAL = "https://www.couponsbit.us/stores/lowes-promo-code";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: CANONICAL,
    languages: {
      "en-US": CANONICAL,
      "en-GB": CANONICAL,
      "en-IN": CANONICAL,
      "x-default": CANONICAL,
    },
  },

  openGraph: {
    type: "website",
    url: CANONICAL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1788783184/lowes-logo_q6mswa.webp",
        width: 1200,
        height: 630,
        alt: "Lowe's Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1788783184/lowes-logo_q6mswa.webp"],
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

  other: {
    "geo.region": "US",
    "geo.country": "US",
  },
};

const lowesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": `${CANONICAL}#breadcrumb` },
    },

    {
      "@type": "ItemList",
      "@id": `${CANONICAL}#offerlist`,
      name: "Lowe's Promo Codes & Coupon Codes",
      description: "Latest Lowe's promo codes and offers on appliances, tools and home essentials.",
      url: CANONICAL,
      numberOfItems: LOWES_COUPONS.length,
      itemListElement: LOWES_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: CANONICAL,
          seller: { "@type": "Organization", name: "Lowe's", url: "https://www.lowes.com/#brand" },
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
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Lowe's Coupons", item: CANONICAL },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Lowe’s offer discount codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Lowe’s provides coupons, promotional offers, and other savings opportunities. Available promotions vary by product, customer, and promotional period, so check the current offers before purchasing.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find a Lowe’s discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can check CouponsBit for available Lowe’s discount codes and compare them with Lowe’s current sales and promotions.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use a Lowe’s coupon code on sale items?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on the specific offer. Some promotions have exclusions or cannot be combined with other discounts. Always review the terms associated with the coupon before applying it.",
          },
        },
        {
          "@type": "Question",
          name: "Does Lowe’s have seasonal sales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Lowe’s regularly promotes seasonal and holiday-related offers. Shopping periods such as spring, summer, Labor Day, Black Friday, Cyber Monday, and Christmas can be useful times to watch for special promotions.",
          },
        },
        {
          "@type": "Question",
          name: "Does Lowe’s offer military discounts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Lowe’s has a Military Discount Program for eligible verified service members, veterans, and qualifying spouses. The current program provides 10% off eligible purchases, subject to exclusions and terms.",
          },
        },
        {
          "@type": "Question",
          name: "Does Lowe’s offer free delivery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lowe’s promotes free delivery offers on eligible products and orders, but availability and terms can vary. Check the current delivery conditions before ordering.",
          },
        },
        {
          "@type": "Question",
          name: "How can I save money on a large Lowe’s project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Compare a Lowe’s discount code with current sales, rebates, bulk savings, and other promotions. For larger projects, also check whether installation services, project-specific offers, or seasonal promotions can provide additional value.",
          },
        },
      ],
    },
  ],
};

export default function LowesStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lowesSchema) }} />
      <Suspense fallback={null}>
        <LowesCouponsContent />
      </Suspense>
    </>
  );
}
