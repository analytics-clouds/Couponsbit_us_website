import type { Metadata } from "next";
import KrogerDigitalCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Kroger Digital Discount Code: Grocery & Pickup Offers | Aug 2026",
  description:
    "Find the latest Kroger Digital discount codes for Aug 2026. Discover grocery offers, pickup & delivery deals, pharmacy picks and digital coupon offers with Couponsbit.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/kroger-digital-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/kroger-digital-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/kroger-digital-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/kroger-digital-discount-code",
      "x-default": "https://www.couponsbit.us/stores/kroger-digital-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/kroger-digital-discount-code",
    title: "Kroger Digital Discount Code: Grocery & Pickup Offers | Aug 2026",
    description:
      "Find the latest Kroger Digital discount codes for Aug 2026. Discover grocery offers, pickup & delivery deals, pharmacy picks and digital coupon offers with Couponsbit.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787639269/kroger-logo_berwr1.webp",
        width: 1200,
        height: 630,
        alt: "Kroger Digital Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kroger Digital Discount Code: Grocery & Pickup Offers | Aug 2026",
    description:
      "Find the latest Kroger Digital discount codes for Aug 2026. Discover grocery offers, pickup & delivery deals, pharmacy picks and digital coupon offers with Couponsbit.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787639269/kroger-logo_berwr1.webp"],
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

const krogerDigitalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/kroger-digital-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/kroger-digital-discount-code",
      name: "Kroger Digital Discount Code: Grocery & Pickup Offers | Aug 2026",
      description:
        "Find the latest Kroger Digital discount codes for Aug 2026. Discover grocery offers, pickup & delivery deals, pharmacy picks and digital coupon offers with Couponsbit.",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/kroger-digital-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/kroger-digital-discount-code#offerlist",
      name: "Kroger Digital Discount Codes & Coupon Codes",
      description: "Latest Kroger Digital discount codes and offers for groceries, pickup, delivery and pharmacy.",
      url: "https://www.couponsbit.us/stores/kroger-digital-discount-code",
      numberOfItems: 6,
      itemListElement: [
        {
          "@type": "ListItem", position: 1,
          item: { "@type": "Offer", name: "New Grocery Offers", description: "Discover the latest grocery offers from Kroger Digital.", url: "https://www.couponsbit.us/stores/kroger-digital-discount-code", seller: { "@type": "Organization", name: "Kroger", url: "https://www.kroger.com" } },
        },
        {
          "@type": "ListItem", position: 2,
          item: { "@type": "Offer", name: "Pickup & Delivery Deals", description: "Browse pickup and delivery deals and offers at Kroger Digital.", url: "https://www.couponsbit.us/stores/kroger-digital-discount-code", seller: { "@type": "Organization", name: "Kroger", url: "https://www.kroger.com" } },
        },
        {
          "@type": "ListItem", position: 3,
          item: { "@type": "Offer", name: "Pharmacy Picks", description: "Shop pharmacy picks from Kroger Digital.", url: "https://www.couponsbit.us/stores/kroger-digital-discount-code", seller: { "@type": "Organization", name: "Kroger", url: "https://www.kroger.com" } },
        },
        {
          "@type": "ListItem", position: 4,
          item: { "@type": "Offer", name: "Digital Coupon Offers", description: "Browse digital coupon offers at Kroger Digital.", url: "https://www.couponsbit.us/stores/kroger-digital-discount-code", seller: { "@type": "Organization", name: "Kroger", url: "https://www.kroger.com" } },
        },
        {
          "@type": "ListItem", position: 5,
          item: { "@type": "Offer", name: "Household Essentials Picks", description: "Explore household essentials picks from Kroger Digital.", url: "https://www.couponsbit.us/stores/kroger-digital-discount-code", seller: { "@type": "Organization", name: "Kroger", url: "https://www.kroger.com" } },
        },
        {
          "@type": "ListItem", position: 6,
          item: { "@type": "Offer", name: "Kroger Plus Rewards Offers", description: "Find Kroger's Plus rewards program offers.", url: "https://www.couponsbit.us/stores/kroger-digital-discount-code", seller: { "@type": "Organization", name: "Kroger", url: "https://www.kroger.com" } },
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
      "@id": "https://www.couponsbit.us/stores/kroger-digital-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Kroger Digital Coupons", item: "https://www.couponsbit.us/stores/kroger-digital-discount-code" },
      ],
    },

    {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/kroger-digital-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Kroger Digital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kroger Digital is the online storefront of Kroger, offering groceries, pickup & delivery, pharmacy and digital coupon offers."
      }
    },
    {
      "@type": "Question",
      "name": "Does Kroger Digital offer discount codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Kroger offers a variety of promotional savings, including digital coupons, promo codes, weekly deals, personalized offers, Boost membership perks, and regional promotions."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find Kroger Digital discount codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check Couponsbit for available Kroger discount codes, coupon codes, promo codes, vouchers, digital offers, and other grocery deals before shopping."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use a Kroger coupon code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The process depends on the promotion. Some offers require entering a code during online checkout, while digital coupons must be clipped to your Kroger account before purchasing eligible products."
      }
    },
    {
      "@type": "Question",
      "name": "Why isn't my Kroger discount code working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The offer may have expired or may not apply to the products in your cart. Other restrictions can include minimum purchase requirements, quantity limits, participating stores, selected brands, or account eligibility conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Does Kroger have digital coupons?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Kroger provides digital coupons and account-based offers that customers can load directly to their rewards account."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Kroger coupon on sale items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This depends on the individual offer. Some coupons may apply to already discounted products, while others may have exclusions. Always check the promotion's terms before purchasing."
      }
    },
    {
      "@type": "Question",
      "name": "Does Kroger offer fuel rewards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Kroger provides fuel rewards through its loyalty program. The number of rewards earned and redemption conditions can vary according to current program rules."
      }
    },
    {
      "@type": "Question",
      "name": "Does Kroger have weekly sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Kroger regularly promotes selected products through weekly circular deals and rotating sales."
      }
    },
    {
      "@type": "Question",
      "name": "Does Kroger have holiday sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Kroger runs seasonal promotions around major US holidays, including Thanksgiving, Christmas, Easter, Halloween, Valentine's Day, Memorial Day, and the Fourth of July."
      }
    },
    {
      "@type": "Question",
      "name": "Does Kroger offer grocery pickup and delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Kroger offers grocery pickup and delivery options through Kroger Digital."
      }
    },
    {
      "@type": "Question",
      "name": "Can I find household products at Kroger?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. In addition to groceries, Kroger offers cleaning supplies, paper products, laundry products, personal-care items, baby products, and other household essentials."
      }
    },
    {
      "@type": "Question",
      "name": "Does Kroger sell fresh food?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Kroger offers fresh produce, meat, seafood, dairy, eggs, bakery products, deli items, and other fresh foods, although availability can vary by location."
      }
    },
    {
      "@type": "Question",
      "name": "Does Kroger have a pharmacy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Kroger offers pharmacy services alongside its grocery and household offerings."
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
      "name": "How can I save more at Kroger?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start by checking Couponsbit for a current Kroger discount code, then compare available digital coupons, weekly deals, seasonal promotions, and eligible fuel rewards to maximize your grocery savings."
      }
    }
  ]
},
  ],
};

export default function KrogerDigitalStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(krogerDigitalSchema) }} />
      <KrogerDigitalCouponsContent />
    </>
  );
}
