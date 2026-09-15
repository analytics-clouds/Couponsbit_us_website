import type { Metadata } from "next";
import PapajohnsCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: {
    absolute: "Papa Johns Promo Code: Pizza From $9.99 + Get $50 Cashback | Sept 2026",
  },
  description:
    "Find the latest Papa Johns promo code and Papa Johns discount code at Maxiku Offers. Get pizzas from $9.99, earn up to $50 cashback, and enjoy pizza combo meals starting at just $399.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/papajohns-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/papajohns-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/papajohns-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/papajohns-promo-code",
      "x-default": "https://www.couponsbit.us/stores/papajohns-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/papajohns-promo-code",
    title: "Papa Johns Promo Code: Pizza From $9.99 + Get $50 Cashback | Sept 2026",
    description:
      "Find the latest Papa Johns promo code and Papa Johns discount code at Maxiku Offers. Get pizzas from $9.99, earn up to $50 cashback, and enjoy pizza combo meals starting at just $399.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1788868873/papa-johns_zqsir3.webp",
        width: 1200,
        height: 630,
        alt: "Papa Johns Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Papa Johns Promo Code: Pizza From $9.99 + Get $50 Cashback | Sept 2026",
    description:
      "Find the latest Papa Johns promo code and Papa Johns discount code at Maxiku Offers. Get pizzas from $9.99, earn up to $50 cashback, and enjoy pizza combo meals starting at just $399.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1788868873/papa-johns_zqsir3.webp"],
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

const papajohnsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/papajohns-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/papajohns-promo-code",
      name: "Papa Johns Promo Code: Pizza From $9.99 + Get $50 Cashback | Sept 2026",
      description:
        "Find the latest Papa Johns promo code and Papa Johns discount code at Maxiku Offers. Get pizzas from $9.99, earn up to $50 cashback, and enjoy pizza combo meals starting at just $399.",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/papajohns-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/papajohns-promo-code#offerlist",
      name: "Papa Johns Promo Codes & Coupon Codes",
      description: "Latest Papa Johns promo codes and offers on pizza and combo meals.",
      url: "https://www.couponsbit.us/stores/papajohns-promo-code",
      numberOfItems: 6,
      itemListElement: [
        { "@type": "ListItem", position: 1, item: { "@type": "Offer", name: "Papa Johns Promo Code – Build Your Own Pizza From $9.99", description: "Create your own pizza and get it at a starting price of just $9.99.", url: "https://www.couponsbit.us/stores/papajohns-promo-code", seller: { "@type": "Organization", name: "Papa Johns", url: "https://www.papajohns.com" } } },
        { "@type": "ListItem", position: 2, item: { "@type": "Offer", name: "Papa Johns Offers – Grand Papa Pizza From $14.99", description: "Get the Grand Papa Pizza starting at just $14.99 with this available offer.", url: "https://www.couponsbit.us/stores/papajohns-promo-code", seller: { "@type": "Organization", name: "Papa Johns", url: "https://www.papajohns.com" } } },
        { "@type": "ListItem", position: 3, item: { "@type": "Offer", name: "Papa Johns Discount – $50 Cashback", description: "Get up to $50 cashback when you pay for your eligible Papa Johns order with a qualifying digital wallet.", url: "https://www.couponsbit.us/stores/papajohns-promo-code", seller: { "@type": "Organization", name: "Papa Johns", url: "https://www.papajohns.com" } } },
        { "@type": "ListItem", position: 4, item: { "@type": "Offer", name: "Papa Johns Deals – Buy 2 Pizzas for $235 Each", description: "Get two medium or large pizzas for $235 each with this weekend pizza deal.", url: "https://www.couponsbit.us/stores/papajohns-promo-code", seller: { "@type": "Organization", name: "Papa Johns", url: "https://www.papajohns.com" } } },
        { "@type": "ListItem", position: 5, item: { "@type": "Offer", name: "Papa Johns Offers – Pizza, Breadsticks & Pepsi for $399", description: "Get a medium pizza, Garlic Parmesan Breadsticks, and Pepsi for just $399.", url: "https://www.couponsbit.us/stores/papajohns-promo-code", seller: { "@type": "Organization", name: "Papa Johns", url: "https://www.papajohns.com" } } },
        { "@type": "ListItem", position: 6, item: { "@type": "Offer", name: "Papa Johns Deals – Meal for Three for $555", description: "Get a meal for three for just $555 with this available combo offer.", url: "https://www.couponsbit.us/stores/papajohns-promo-code", seller: { "@type": "Organization", name: "Papa Johns", url: "https://www.papajohns.com" } } },
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
      "@id": "https://www.couponsbit.us/stores/papajohns-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Papa Johns Coupons", item: "https://www.couponsbit.us/stores/papajohns-promo-code" },
      ],
    },

    {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/papajohns-promo-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Papa Johns offer promo codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Papa Johns runs promotional campaigns and pizza deals that may include promotional codes, discounts, meal offers, and other savings opportunities. Availability varies."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find a Papa Johns promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for available Papa Johns promo codes, coupon codes, discount offers, vouchers, and pizza deals before ordering."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use a Papa Johns coupon code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Choose your food, add it to your cart, proceed to checkout, and enter the applicable coupon code in the designated promotional field. Confirm that the discount has been applied before completing your order."
      }
    },
    {
      "@type": "Question",
      "name": "Why isn't my Papa Johns promo code working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The code may have expired, or your order may not meet its requirements. Some offers may be restricted to particular menu items, locations, order types, or minimum purchase amounts."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Papa Johns discount code on any pizza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Individual promotions can have different conditions and may apply only to selected menu items or orders."
      }
    },
    {
      "@type": "Question",
      "name": "Does Papa Johns have family meal deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Papa Johns regularly offers different types of pizza and meal promotions. The available deals can vary by location and promotional period."
      }
    },
    {
      "@type": "Question",
      "name": "Does Papa Johns offer delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Papa Johns offers delivery in participating locations. Availability and delivery terms can vary by restaurant."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Papa Johns for pickup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, pickup may be available depending on your selected restaurant and location."
      }
    },
    {
      "@type": "Question",
      "name": "Does Papa Johns have deals during the Super Bowl?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Papa Johns commonly promotes pizza and game-day offers around major sporting occasions. Check the latest available promotions before placing your order."
      }
    },
    {
      "@type": "Question",
      "name": "Does Papa Johns have Black Friday deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Papa Johns may run promotions during major shopping periods, although the available offers can change. Check CouponsBit and the brand's current offers around Black Friday."
      }
    },
    {
      "@type": "Question",
      "name": "When is the best time to look for Papa Johns deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Promotions can appear throughout the year. Super Bowl season, March Madness, major holidays, sporting events, and large family gatherings can all be useful times to check for pizza offers."
      }
    },
    {
      "@type": "Question",
      "name": "How can I save money on Papa Johns?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start by checking CouponsBit for a Papa Johns promo code, then compare it with current pizza deals, meal bundles, restaurant promotions, and delivery or pickup offers. Always consider the complete order total when deciding which option provides the best value."
      }
    }
  ]
},
  ],
};

export default function PapajohnsStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(papajohnsSchema) }} />
      <PapajohnsCouponsContent />
    </>
  );
}
