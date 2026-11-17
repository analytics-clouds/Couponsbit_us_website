import type { Metadata } from "next";
import { Suspense } from "react";
import LordhairCouponsContent from "./_components/StoreCouponsContent";
import { LORDHAIR_COUPONS } from "./_components/offers";

const TITLE = "Lordhair Promo Code: Get 35% Off Hair Systems + $100 Off | Nov 2026";
const DESCRIPTION =
  "Use a Lordhair promo code and Lordhair coupon code to save 35% on hair systems plus get up to $100 off select styles. Verified Nov 2026. Shop today.";
const CANONICAL = "https://www.couponsbit.us/stores/lordhair-promo-code";

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
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1788248210/lorthair-logo_g84ojx.webp",
        width: 1200,
        height: 630,
        alt: "Lordhair Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1788248210/lorthair-logo_g84ojx.webp"],
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

const storeOffers = LORDHAIR_COUPONS.map((coupon, index) => ({
  "@type": "ListItem",
  position: index + 1,
  item: {
    "@type": "Offer",
    name: coupon.title,
    description: coupon.description,
    url: CANONICAL,
    seller: {
      "@id": `${CANONICAL}#brand`,
    },
    priceCurrency: "USD",
    price: "0",
    ...(coupon.validTill && { validThrough: coupon.validTill }),
    ...(coupon.code && { couponCode: coupon.code }),
  },
}));

const lordhairSchema = {
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
      "@type": "Organization",
      "@id": `${CANONICAL}#brand`,
      name: "Lordhair",
      url: "https://www.lordhair.com",
    },

    {
      "@type": "ItemList",
      "@id": `${CANONICAL}#offerlist`,
      name: "Lordhair Promo Codes & Coupon Codes",
      description: "Latest Lordhair promo codes and offers for men's hair replacement systems and toupees.",
      url: CANONICAL,
      numberOfItems: LORDHAIR_COUPONS.length,
      itemListElement: storeOffers,
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
        { "@type": "ListItem", position: 3, name: "Lordhair Coupons", item: CANONICAL },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Lordhair?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lordhair is a hair replacement system manufacturer offering non-surgical, custom hair systems, toupees, wigs, and hairpieces for men, handcrafted with 100% human hair.",
          },
        },
        {
          "@type": "Question",
          name: "Does Lordhair offer promo codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Lordhair periodically provides promotional offers, discount codes, and coupon opportunities such as thin skin base deals and custom hair system deals.",
          },
        },
        {
          "@type": "Question",
          name: "What is a Lordhair promo code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Lordhair promo code is a promotional code that can provide a discount or other promotional benefit when used on an eligible purchase. The exact conditions depend on the offer.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Lordhair promo codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can check Couponsbit for available Lordhair promo codes, coupon codes, discount offers, and other promotions before placing your order.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use a Lordhair coupon code on every product?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. Some Lordhair promotions are limited to specific products or categories. Many coupons apply primarily to hair systems and may not be combinable with other promotional discounts.",
          },
        },
        {
          "@type": "Question",
          name: "Does Lordhair sell products for women?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lordhair's primary catalog focuses on men's hair replacement systems, wigs, toupees, and hairpieces. Its current website is positioned around men's hair systems and hair replacement solutions.",
          },
        },
        {
          "@type": "Question",
          name: "What base materials and hair systems does Lordhair offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lordhair offers skin, lace, hybrid, and monofilament hair systems, along with custom hair systems and premium Remy hair options customizable for color, density, length, and style.",
          },
        },
        {
          "@type": "Question",
          name: "Does Lordhair use human hair?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Lordhair crafts its hair systems using 100% human hair.",
          },
        },
        {
          "@type": "Question",
          name: "Can I customize a Lordhair hair system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Lordhair's custom hair systems can be personalized according to specifications such as base size, hair density, hair length, color, hair type, and hairstyle.",
          },
        },
        {
          "@type": "Question",
          name: "Does Lordhair sell hair system accessories?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Its accessories include tapes, adhesives, removers, shampoos, conditioners, scalp-care products, and other maintenance supplies.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Lordhair 3R system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 3R approach stands for Reset, Renewal, and Refresh. It is Lordhair's hair system maintenance routine covering cleansing, conditioning/treatment, and ongoing protection.",
          },
        },
        {
          "@type": "Question",
          name: "Does Lordhair ship internationally?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lordhair states that it ships to more than 100 countries. However, individual products and promotional offers may have regional restrictions, so check the applicable shipping and product information for your location.",
          },
        },
        {
          "@type": "Question",
          name: "Can shoppers in Canada use a Lordhair promo code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Canadian shoppers can browse Lordhair's international store and select CAD where available. However, individual promotions may have country-specific terms, so check the conditions attached to each Lordhair coupon code.",
          },
        },
        {
          "@type": "Question",
          name: "Can shoppers in the UK use a Lordhair discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UK shoppers can shop Lordhair and select GBP where available. As with any promotion, check the offer's terms to confirm that the discount code is valid for your order and region.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers.",
          },
        },
      ],
    },
  ],
};

export default function LordhairStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lordhairSchema) }} />
      <Suspense fallback={null}>
        <LordhairCouponsContent />
      </Suspense>
    </>
  );
}
