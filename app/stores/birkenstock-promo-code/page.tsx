import type { Metadata } from "next";
import BirkenstockCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Birkenstock Promo Code – Up to 50% Off Sandals, Clogs & More",
  },
  description:
    "Use a Birkenstock promo code – up to 50% off kids' footwear, 40% off sandals & clogs. Birkenstock discount code: men's clogs from $59, foot care from $9.95!",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/birkenstock-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/birkenstock-promo-code",
      "x-default": "https://www.couponsbit.us/stores/birkenstock-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/birkenstock-promo-code",
    title: "Birkenstock Promo Code – Up to 50% Off Sandals, Clogs & More",
    description:
      "Use a Birkenstock promo code – up to 50% off kids' footwear, 40% off sandals & clogs. Birkenstock discount code: men's clogs from $59, foot care from $9.95!",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1792648468/birkenstork_logo_nin4ru.webp",
        width: 1200,
        height: 630,
        alt: "Birkenstock Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Birkenstock Promo Code – Up to 50% Off Sandals, Clogs & More",
    description:
      "Use a Birkenstock promo code – up to 50% off kids' footwear, 40% off sandals & clogs. Birkenstock discount code: men's clogs from $59, foot care from $9.95!",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1792648468/birkenstork_logo_nin4ru.webp"],
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

const birkenstockSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/birkenstock-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/birkenstock-promo-code",
      name: "Birkenstock Promo Code – Up to 50% Off Sandals, Clogs & More",
      description:
        "Use a Birkenstock promo code – up to 50% off kids' footwear, 40% off sandals & clogs. Birkenstock discount code: men's clogs from $59, foot care from $9.95!",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-10-22",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/birkenstock-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/birkenstock-promo-code#offerlist",
      name: "Birkenstock Promo Codes & Coupon Codes",
      description: "Latest Birkenstock promo codes and offers.",
      url: "https://www.couponsbit.us/stores/birkenstock-promo-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.desc,
          url: "https://www.couponsbit.us/stores/birkenstock-promo-code",
          seller: { "@type": "Organization", name: "Birkenstock", url: "https://www.birkenstock.com" },
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
      "@id": "https://www.couponsbit.us/stores/birkenstock-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Birkenstock Coupons", item: "https://www.couponsbit.us/stores/birkenstock-promo-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/birkenstock-promo-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Birkenstock offer promo codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Birkenstock features promotions and selected sale offers from time to time. Check CouponsBit and the official store for current opportunities."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a promo code on every Birkenstock style?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not always. Certain codes may exclude selected models, discounted items or particular collections."
      }
    },
    {
      "@type": "Question",
      "name": "What is Birkenstock best known for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The brand is known for its signature anatomically shaped footbed and recognisable styles, including Arizona sandals and Boston clogs."
      }
    },
    {
      "@type": "Question",
      "name": "How can I find the best Birkenstock deal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Compare available promo codes, eligible sale styles, shipping terms and product exclusions before placing your order."
      }
    }
  ]
},
  ],
};

export default function BirkenstockStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(birkenstockSchema) }} />
      <BirkenstockCouponsContent />
    </>
  );
}
