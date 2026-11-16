import type { Metadata } from "next";
import { Suspense } from "react";
import SubwayCouponsContent from "./_components/StoreCouponsContent";
import { SUBWAY_COUPONS } from "./_components/offers";

const storeOffers = SUBWAY_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: coupon.title,
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/subway-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Subway", url: "https://subway.in/" },
}));

export const metadata: Metadata = {
  title: {
    absolute: "Subway Promo Code: 20% Off + Meals From $4.99 | Nov 2026",
  },
  description:
    "Find the latest Subway discount code, promo code, and deals for Nov 2026. Save 20% as a new customer or member, with Subway meals from $4.99 and daily deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/subway-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/subway-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/subway-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/subway-discount-code",
      "x-default": "https://www.couponsbit.us/stores/subway-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/subway-discount-code",
    title: "Subway Promo Code: 20% Off + Meals From $4.99 | Nov 2026",
    description:
      "Find the latest Subway discount code, promo code, and deals for Nov 2026. Save 20% as a new customer or member, with Subway meals from $4.99 and daily deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787295215/subway-logo_eosuh6.webp",
        width: 1200,
        height: 630,
        alt: "Subway Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Subway Promo Code: 20% Off + Meals From $4.99 | Nov 2026",
    description:
      "Find the latest Subway discount code, promo code, and deals for Nov 2026. Save 20% as a new customer or member, with Subway meals from $4.99 and daily deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787295215/subway-logo_eosuh6.webp"],
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

const subwaySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/subway-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/subway-discount-code",
      name: "Subway Promo Code: 20% Off + Meals From $4.99 | Nov 2026",
      description:
        "Find the latest Subway discount code, promo code, and deals for Nov 2026. Save 20% as a new customer or member, with Subway meals from $4.99 and daily deals.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/subway-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/subway-discount-code#offerlist",
      name: "Subway Discount Codes & Coupon Codes",
      description: "Latest Subway discount codes and offers for sandwiches, wraps, salads and combos.",
      url: "https://www.couponsbit.us/stores/subway-discount-code",
      numberOfItems: SUBWAY_COUPONS.length,
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
      "@id": "https://www.couponsbit.us/stores/subway-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Subway Coupons", item: "https://www.couponsbit.us/stores/subway-discount-code" },
      ],
    },
    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/subway-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where Can I Find a Subway Discount Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available Subway discount codes, coupons, deals, and promotional offers before placing your order."
      }
    },
    {
      "@type": "Question",
      "name": "What Is a Subway Coupon Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Subway coupon code is a promotional code that may provide a discount or special offer on qualifying products, subject to the promotion's terms."
      }
    },
    {
      "@type": "Question",
      "name": "Does Subway Always Have a Discount Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Subway promotions change regularly, and some offers may be available as digital promotions, meal deals, loyalty rewards, or automatically applied discounts instead of traditional coupon codes."
      }
    },
    {
      "@type": "Question",
      "name": "Does Subway Have Footlong Deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Subway frequently features promotions involving Footlong sandwiches, although the exact offer, price, participating locations, and qualifying products can change."
      }
    },
    {
      "@type": "Question",
      "name": "Does Subway Have Meal Deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Subway offers meal combinations and promotional bundles at participating locations. The exact contents and terms vary."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Use a Subway Coupon Code Online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some Subway promotions may be available through online ordering, while others may have restrictions. Check the individual offer's terms before using it."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Use Subway Coupons in the App?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eligible digital promotions may be available through Subway's app or online ordering system. Availability can depend on the specific offer and restaurant."
      }
    },
    {
      "@type": "Question",
      "name": "Does Subway Have a Loyalty Program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Subway has a loyalty program that can provide rewards and member offers. Program benefits and conditions may change, so check the current terms."
      }
    },
    {
      "@type": "Question",
      "name": "Does Subway Offer Catering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Participating Subway locations offer catering options for groups and events, although available products and ordering requirements vary by restaurant."
      }
    },
    {
      "@type": "Question",
      "name": "Does Subway Have Vegetarian Options?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Subway offers vegetable-focused menu options, and customers can customize many sandwiches and salads with available vegetables, sauces, and other ingredients."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Customize My Subway Sandwich?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Customization is one of Subway's key features. Depending on the location, you can select bread, protein, cheese, vegetables, sauces, and other toppings."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Use a Subway Discount Code on a Meal Deal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That depends on the promotion. Some coupons may apply to specific products or orders while others may exclude promotional bundles or require particular conditions."
      }
    }
  ]
},
  ],
};

export default function SubwayStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(subwaySchema) }} />
      <Suspense fallback={null}>
        <SubwayCouponsContent />
      </Suspense>
    </>
  );
}
