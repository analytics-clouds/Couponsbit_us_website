import type { Metadata } from "next";
import AdidasCouponsContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Adidas Promo Code: Save Up to 50% OFF + Extra 30% OFF Apparel | Sept 2026",
  },
  description:
    "Find the latest Adidas promo code and Adidas discount code at Maxiku Offers for October 2026. Save up to 50% OFF selected styles, enjoy an extra 30% OFF apparel with code EXTRA, get up to 40% OFF shoes, and shop new arrivals starting from just $15.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/adidas-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/adidas-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/adidas-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/adidas-promo-code",
      "x-default": "https://www.couponsbit.us/stores/adidas-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/adidas-promo-code",
    title: "Adidas Promo Code: Save Up to 50% OFF + Extra 30% OFF Apparel | Sept 2026",
    description:
      "Find the latest Adidas promo code and Adidas discount code at Maxiku Offers for October 2026. Save up to 50% OFF selected styles, enjoy an extra 30% OFF apparel with code EXTRA, get up to 40% OFF shoes, and shop new arrivals starting from just $15.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1788783181/adidas-logo_brulmo.webp",
        width: 1200,
        height: 630,
        alt: "Adidas Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Adidas Promo Code: Save Up to 50% OFF + Extra 30% OFF Apparel | Sept 2026",
    description:
      "Find the latest Adidas promo code and Adidas discount code at Maxiku Offers for October 2026. Save up to 50% OFF selected styles, enjoy an extra 30% OFF apparel with code EXTRA, get up to 40% OFF shoes, and shop new arrivals starting from just $15.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1788783181/adidas-logo_brulmo.webp"],
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

const adidasSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/adidas-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/adidas-promo-code",
      name: "Adidas Promo Code: Save Up to 50% OFF + Extra 30% OFF Apparel | Sept 2026",
      description:
        "Find the latest Adidas promo code and Adidas discount code at Maxiku Offers for October 2026. Save up to 50% OFF selected styles, enjoy an extra 30% OFF apparel with code EXTRA, get up to 40% OFF shoes, and shop new arrivals starting from just $15.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-09-21",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/adidas-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/adidas-promo-code#offerlist",
      name: "Adidas Promo Codes & Coupon Codes",
      description: "Latest Adidas promo codes and offers on shoes, apparel and accessories.",
      url: "https://www.couponsbit.us/stores/adidas-promo-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.desc,
          url: "https://www.couponsbit.us/stores/adidas-promo-code",
          seller: { "@type": "Organization", name: "Adidas", url: "https://www.adidas.com" },
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
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/adidas-promo-code#brand",
      name: "Adidas",
      url: "https://www.adidas.com",
      sameAs: ["https://en.wikipedia.org/wiki/Adidas"],
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/adidas-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Adidas Coupons", item: "https://www.couponsbit.us/stores/adidas-promo-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/adidas-promo-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does adidas offer promo codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. adidas runs promotional campaigns throughout the year, and eligible customers may find promotional codes, sale offers, member benefits, and other discounts. Availability varies by promotion."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find an adidas promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available adidas promo codes, coupon codes, discount offers, vouchers, sale deals, and other promotions before shopping."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use an adidas coupon code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Add eligible products to your shopping bag, proceed to checkout, enter the coupon code in the applicable promotional field, and apply it. Check that the discount has been reflected before completing your purchase."
      }
    },
    {
      "@type": "Question",
      "name": "Why isn't my adidas promo code working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The code may have expired or may not apply to the products in your cart. Certain products, collections, collaborations, or sale items may also be excluded from particular promotions."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use an adidas discount code on sale items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This depends on the specific promotion. Some codes can apply to selected sale products, while others are limited to full-price merchandise or particular categories."
      }
    },
    {
      "@type": "Question",
      "name": "Does adidas have a sale section?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. adidas regularly features sale and clearance merchandise across footwear, clothing, and accessories. Product availability can change as items sell out."
      }
    },
    {
      "@type": "Question",
      "name": "Does adidas offer Black Friday deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Black Friday is a major US shopping event, and adidas can run promotions during the period. Specific offers and eligible products vary from year to year."
      }
    },
    {
      "@type": "Question",
      "name": "Does adidas have Cyber Monday offers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "adidas can run online promotions around Cyber Monday. Check the current offer details to see which products and orders qualify."
      }
    },
    {
      "@type": "Question",
      "name": "Does adidas offer back-to-school deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Back-to-school is an important shopping season for sneakers, sportswear, and backpacks. adidas may run promotions during this period, depending on the current campaign."
      }
    },
    {
      "@type": "Question",
      "name": "Does adidas sell running shoes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. adidas offers running shoes designed for different training styles and running needs."
      }
    },
    {
      "@type": "Question",
      "name": "Does adidas sell sportswear?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Customers can shop for sportswear across categories such as running, soccer, basketball, training, tennis, golf, and other activities."
      }
    },
    {
      "@type": "Question",
      "name": "Does adidas have products for kids?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. adidas offers footwear, clothing, and accessories for children, with products available across different age groups."
      }
    },
    {
      "@type": "Question",
      "name": "How can I save more when shopping at adidas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start by checking CouponsBit for an adidas promo code, then compare it with current sale prices, clearance products, member benefits, and seasonal offers. Always check the terms to find the promotion that provides the best value for your purchase."
      }
    }
  ]
},
  ],
};

export default function AdidasStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(adidasSchema) }} />
      <AdidasCouponsContent />
    </>
  );
}
