import type { Metadata } from "next";
import BurgerKingCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Burger King Promo Code: Combo & Value Meal Offers | Aug 2026",
  description:
    "Find the latest Burger King promo codes for Aug 2026. Discover combo meal offers, Whopper deals, chicken picks and value menu offers with Couponsbit.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/burger-king-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/burger-king-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/burger-king-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/burger-king-promo-code",
      "x-default": "https://www.couponsbit.us/stores/burger-king-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/burger-king-promo-code",
    title: "Burger King Promo Code: Combo & Value Meal Offers | Aug 2026",
    description:
      "Find the latest Burger King promo codes for Aug 2026. Discover combo meal offers, Whopper deals, chicken picks and value menu offers with Couponsbit.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/burger-king-logo_m4nwmx.webp",
        width: 1200,
        height: 630,
        alt: "Burger King Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Burger King Promo Code: Combo & Value Meal Offers | Aug 2026",
    description:
      "Find the latest Burger King promo codes for Aug 2026. Discover combo meal offers, Whopper deals, chicken picks and value menu offers with Couponsbit.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787639269/burger-king-logo_m4nwmx.webp"],
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

const burgerKingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/burger-king-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/burger-king-promo-code",
      name: "Burger King Promo Code: Combo & Value Meal Offers | Aug 2026",
      description:
        "Find the latest Burger King promo codes for Aug 2026. Discover combo meal offers, Whopper deals, chicken picks and value menu offers with Couponsbit.",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/burger-king-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/burger-king-promo-code#offerlist",
      name: "Burger King Promo Codes & Coupon Codes",
      description: "Latest Burger King promo codes and offers for combo meals, Whoppers and chicken picks.",
      url: "https://www.couponsbit.us/stores/burger-king-promo-code",
      numberOfItems: 6,
      itemListElement: [
        {
          "@type": "ListItem", position: 1,
          item: { "@type": "Offer", name: "New Whopper Offers", description: "Discover the latest Whopper offers from Burger King.", url: "https://www.couponsbit.us/stores/burger-king-promo-code", seller: { "@type": "Organization", name: "Burger King", url: "https://www.bk.com" } },
        },
        {
          "@type": "ListItem", position: 2,
          item: { "@type": "Offer", name: "Combo Meal Deals", description: "Browse combo meal deals and offers at Burger King.", url: "https://www.couponsbit.us/stores/burger-king-promo-code", seller: { "@type": "Organization", name: "Burger King", url: "https://www.bk.com" } },
        },
        {
          "@type": "ListItem", position: 3,
          item: { "@type": "Offer", name: "Chicken Picks", description: "Shop chicken picks from Burger King.", url: "https://www.couponsbit.us/stores/burger-king-promo-code", seller: { "@type": "Organization", name: "Burger King", url: "https://www.bk.com" } },
        },
        {
          "@type": "ListItem", position: 4,
          item: { "@type": "Offer", name: "Value Menu Offers", description: "Browse value menu offers at Burger King.", url: "https://www.couponsbit.us/stores/burger-king-promo-code", seller: { "@type": "Organization", name: "Burger King", url: "https://www.bk.com" } },
        },
        {
          "@type": "ListItem", position: 5,
          item: { "@type": "Offer", name: "Sides & Drinks Picks", description: "Explore sides and drinks picks from Burger King.", url: "https://www.couponsbit.us/stores/burger-king-promo-code", seller: { "@type": "Organization", name: "Burger King", url: "https://www.bk.com" } },
        },
        {
          "@type": "ListItem", position: 6,
          item: { "@type": "Offer", name: "Royal Perks Offers", description: "Find Burger King's Royal Perks app offers.", url: "https://www.couponsbit.us/stores/burger-king-promo-code", seller: { "@type": "Organization", name: "Burger King", url: "https://www.bk.com" } },
        },
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
      "@id": "https://www.couponsbit.us/stores/burger-king-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Burger King Coupons", item: "https://www.couponsbit.us/stores/burger-king-promo-code" },
      ],
    },

   {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/burger-king-promo-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Burger King?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Burger King is a fast food chain known for the Whopper, combo meals, chicken sandwiches and value menu items."
      }
    },
    {
      "@type": "Question",
      "name": "Does Burger King offer promo codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Burger King regularly offers promotions through different channels, including digital offers, app promotions, combo meal deals, coupons, limited-time campaigns, and Royal Perks app offers."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find Burger King promo codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check Couponsbit for current Burger King promo codes, coupon codes, discount offers, vouchers, and other available deals before placing your order."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use a Burger King coupon code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Select the applicable offer, choose your Burger King location, add eligible items to your order, and enter the code in the appropriate field if required. Check that the offer has been applied before completing checkout."
      }
    },
    {
      "@type": "Question",
      "name": "Why isn't my Burger King promo code working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The promotion may have expired or may be restricted to particular products, locations, ordering channels, or customers. Check the offer's terms carefully before trying again."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Burger King discount code with another offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Promotional offers often have restrictions on combining discounts. Check the specific terms of both promotions before attempting to use them together."
      }
    },
    {
      "@type": "Question",
      "name": "Does Burger King have app-exclusive offers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Burger King frequently provides digital offers through its app and Royal Perks loyalty program. The exact offers available can change, so customers should check the current app promotions."
      }
    },
    {
      "@type": "Question",
      "name": "What is Burger King Royal Perks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Royal Perks is Burger King's loyalty program offered through its app. Eligible customers can earn Crowns on qualifying purchases and redeem them for selected menu items, subject to the program's current terms."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Burger King online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Burger King offers online ordering for pickup and delivery through its app and website."
      }
    },
    {
      "@type": "Question",
      "name": "Does Burger King offer deals on the Whopper?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Burger King frequently promotes its signature Whopper through different campaigns and offers. Availability varies, so check current promotions before ordering."
      }
    },
    {
      "@type": "Question",
      "name": "Does Burger King offer breakfast deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Burger King can run breakfast promotions involving selected breakfast items or combinations. Available offers vary by location and campaign."
      }
    },
    {
      "@type": "Question",
      "name": "Does Burger King have seasonal promotions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Burger King can run campaigns around seasons, holidays, sporting events, limited-time menu launches, and other major occasions in the US."
      }
    },
    {
      "@type": "Question",
      "name": "Is Couponsbit free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers."
      }
    },
    {
      "@type": "Question",
      "name": "How can I save more at Burger King?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start by checking CouponsBit for a current Burger King promo code, then compare it with available app offers, meal deals, loyalty benefits, and other promotions. Choose the offer that best matches your order and check its terms before completing the purchase."
      }
    }
  ]
},
  ],
};

export default function BurgerKingStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(burgerKingSchema) }} />
      <BurgerKingCouponsContent />
    </>
  );
}
