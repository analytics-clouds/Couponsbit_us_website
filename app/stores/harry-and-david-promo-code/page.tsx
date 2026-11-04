import type { Metadata } from "next";
import HarryAndDavidCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Harry and David Discount Code: 25% OFF + 20% OFF | Nov 2026",
  },
  description:
    "Get the latest Harry and David Discount Code and Harry and David Promo Code for November 2026. Save up to 25% OFF on gourmet gifts plus 20% OFF Fruit-of-the-Month Club collections.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/harry-and-david-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/harry-and-david-promo-code",
      "x-default": "https://www.couponsbit.us/stores/harry-and-david-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/harry-and-david-promo-code",
    title: "Harry and David Discount Code: 25% OFF + 20% OFF | Nov 2026",
    description:
      "Get the latest Harry and David Discount Code and Harry and David Promo Code for November 2026. Save up to 25% OFF on gourmet gifts plus 20% OFF Fruit-of-the-Month Club collections.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1793688836/harryand-david-logo_psaq9y.webp",
        width: 1200,
        height: 630,
        alt: "Harry and David Promo Code & Discount Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Harry and David Discount Code: 25% OFF + 20% OFF | Nov 2026",
    description:
      "Get the latest Harry and David Discount Code and Harry and David Promo Code for November 2026. Save up to 25% OFF on gourmet gifts plus 20% OFF Fruit-of-the-Month Club collections.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1793688836/harryand-david-logo_psaq9y.webp"],
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

const harryAndDavidSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/harry-and-david-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/harry-and-david-promo-code",
      name: "Harry and David Discount Code: 25% OFF + 20% OFF | Nov 2026",
      description:
        "Get the latest Harry and David Discount Code and Harry and David Promo Code for November 2026. Save up to 25% OFF on gourmet gifts plus 20% OFF Fruit-of-the-Month Club collections.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-03",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/harry-and-david-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/harry-and-david-promo-code#offerlist",
      name: "Harry and David Promo Codes & Coupon Codes",
      description: "Latest Harry and David promo codes and offers.",
      url: "https://www.couponsbit.us/stores/harry-and-david-promo-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.desc,
          url: "https://www.couponsbit.us/stores/harry-and-david-promo-code",
          seller: { "@type": "Organization", name: "Harry and David", url: "https://www.harryanddavid.com" },
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
      "@id": "https://www.couponsbit.us/stores/harry-and-david-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Harry and David Coupons", item: "https://www.couponsbit.us/stores/harry-and-david-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/harry-and-david-promo-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I find a Harry and David promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visit the Harry and David page on CouponsBit to check available promo codes and discounts. You can also visit Harry and David's official website for current promotional offers."
          }
        },
        {
          "@type": "Question",
          "name": "Does Harry and David offer a first-order discount?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Harry and David offers new customers 20% off their first order when they sign up for emails. The offer applies to qualifying gift baskets and food items."
          }
        },
        {
          "@type": "Question",
          "name": "Does Harry and David offer free shipping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Harry and David offers free shipping on qualifying orders. Check the current threshold and shipping terms on the Harry and David website for full details."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Harry and David Gold Membership?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Harry and David Gold Membership is a loyalty programme that gives members 10% off every order year-round, along with exclusive member prices, birthday gifts, and other perks."
          }
        },
        {
          "@type": "Question",
          "name": "Can I personalise a Harry and David gift basket?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Harry and David offers personalisation options on many gift baskets and gift sets, including custom ribbon messages and selected product additions."
          }
        },
        {
          "@type": "Question",
          "name": "What is Harry and David's return policy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Harry and David stands behind its products and offers a satisfaction guarantee. If you are not satisfied with your purchase, contact customer service within a reasonable time frame for a replacement or refund."
          }
        },
        {
          "@type": "Question",
          "name": "Where do I enter a Harry and David promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Add your selected items to the cart and proceed to checkout. Enter your promo code in the promotional code field and click Apply to see the updated order total."
          }
        }
      ]
    },
  ],
};

export default function HarryAndDavidStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(harryAndDavidSchema) }} />
      <HarryAndDavidCouponsContent />
    </>
  );
}
