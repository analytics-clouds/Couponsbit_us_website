import type { Metadata } from "next";
import WalmartCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: {
    absolute: "Walmart Promo Code - Save up to 65% OFF + 30-Day Trial | Aug 2026",
  },
  description:
    "Find the latest Walmart promo code, discount code, and deals for Aug 2026. Save up to 65% OFF during Flash Deals and get a Walmart+ 30-day trial for just $1, plus tech deals from $17.99.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/walmart-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/walmart-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/walmart-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/walmart-promo-code",
      "x-default": "https://www.couponsbit.us/stores/walmart-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/walmart-promo-code",
    title: "Walmart Promo Code - Save up to 65% OFF + 30-Day Trial | Aug 2026",
    description:
      "Find the latest Walmart promo code, discount code, and deals for Aug 2026. Save up to 65% OFF during Flash Deals and get a Walmart+ 30-day trial for just $1, plus tech deals from $17.99.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787037375/walamrt-logo_upfxvc.webp",
        width: 1200,
        height: 630,
        alt: "Walmart Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Walmart Promo Code - Save up to 65% OFF + 30-Day Trial | Aug 2026",
    description:
      "Find the latest Walmart promo code, discount code, and deals for Aug 2026. Save up to 65% OFF during Flash Deals and get a Walmart+ 30-day trial for just $1, plus tech deals from $17.99.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787037375/walamrt-logo_upfxvc.webp"],
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

const walmartSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/walmart-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/walmart-promo-code",
      name: "Walmart Promo Code - Save up to 65% OFF + 30-Day Trial | Aug 2026",
      description:
        "Find the latest Walmart promo code, discount code, and deals for Aug 2026. Save up to 65% OFF during Flash Deals and get a Walmart+ 30-day trial for just $1, plus tech deals from $17.99.",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/walmart-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/walmart-promo-code#offerlist",
      name: "Walmart Promo Codes & Coupon Codes",
      description: "Latest Walmart promo codes and offers across grocery, electronics, home and apparel.",
      url: "https://www.couponsbit.us/stores/walmart-promo-code",
      numberOfItems: 6,
      itemListElement: [
        {
          "@type": "ListItem", position: 1,
          item: { "@type": "Offer", name: "Walmart – Acer Nitro ED0 27\" Curved Gaming Monitor | $119", description: "Get the Acer Nitro ED270R S3biip 27-inch Curved Gaming Monitor for $119", url: "https://www.couponsbit.us/stores/walmart-promo-code", seller: { "@type": "Organization", name: "Walmart", url: "https://www.walmart.com" } },
        },
        {
          "@type": "ListItem", position: 2,
          item: { "@type": "Offer", name: "Walmart+ – 30-Day Trial for Just $1", description: "Try Walmart+ for 30 days for only $1", url: "https://www.couponsbit.us/stores/walmart-promo-code", seller: { "@type": "Organization", name: "Walmart", url: "https://www.walmart.com" } },
        },
        {
          "@type": "ListItem", position: 3,
          item: { "@type": "Offer", name: "Walmart – Ball Glass Mason Jars with Lids & Bands | 12 Count", description: "Get the Ball Glass Mason Jars with Lids & Bands in a 12-count pack", url: "https://www.couponsbit.us/stores/walmart-promo-code", seller: { "@type": "Organization", name: "Walmart", url: "https://www.walmart.com" } },
        },
        {
          "@type": "ListItem", position: 4,
          item: { "@type": "Offer", name: "Walmart – Phones & More | Up to 35% OFF", description: "Save up to 35% OFF on selected phones and other tech products", url: "https://www.couponsbit.us/stores/walmart-promo-code", seller: { "@type": "Organization", name: "Walmart", url: "https://www.walmart.com" } },
        },
        {
          "@type": "ListItem", position: 5,
          item: { "@type": "Offer", name: "Walmart – August Style Edit | Virtu Twin XL Comforter Set $74.99", description: "Get the Virtu Twin XL Comforter Set for $74.99, down from $99.99", url: "https://www.couponsbit.us/stores/walmart-promo-code", seller: { "@type": "Organization", name: "Walmart", url: "https://www.walmart.com" } },
        },
        {
          "@type": "ListItem", position: 6,
          item: { "@type": "Offer", name: "Walmart – Boyoun Daj Pro Noise Canceling Headphones | Up to 65% OFF", description: "Get the Boyoun Daj Pro Noise Canceling headphones for just $17.99", url: "https://www.couponsbit.us/stores/walmart-promo-code", seller: { "@type": "Organization", name: "Walmart", url: "https://www.walmart.com" } },
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
      "@id": "https://www.couponsbit.us/stores/walmart-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Walmart Coupons", item: "https://www.couponsbit.us/stores/walmart-promo-code" },
      ],
    },

  {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/walmart-promo-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Walmart Have Coupon Codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Walmart offers various promotions and savings opportunities, although not every discount requires a traditional coupon code. Shoppers can also find Rollbacks, clearance prices, Marketplace promotions, and other special offers."
      }
    },
    {
      "@type": "Question",
      "name": "Where Can I Find a Walmart Promo Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check CouponsBit for the latest Walmart promo codes, coupon offers, and current deals before shopping."
      }
    },
    {
      "@type": "Question",
      "name": "Does Walmart Have a Discount Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Walmart may offer promotional discount codes for qualifying products or campaigns. Availability and terms vary, so check the offer details before checkout."
      }
    },
    {
      "@type": "Question",
      "name": "Does Walmart Offer Free Shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Walmart+ members receive free shipping with no order minimum on eligible items sold or shipped by Walmart. Non-members may also qualify for free shipping depending on the order and current Walmart shipping policies. Marketplace, oversized, freight, and other exclusions can apply."
      }
    },
    {
      "@type": "Question",
      "name": "What Is Walmart+?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Walmart+ is Walmart's membership program, offering benefits such as free shipping on eligible orders, free store delivery on qualifying orders, fuel savings, early access to select deals, pharmacy delivery, and other perks."
      }
    },
    {
      "@type": "Question",
      "name": "How Much Does Walmart+ Cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Walmart currently lists Walmart+ at $98 per year or $12.95 per month, plus applicable taxes. Promotional trials and discounted memberships may be available to eligible customers."
      }
    },
    {
      "@type": "Question",
      "name": "Does Walmart Offer Grocery Delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Walmart offers grocery and other store delivery options in eligible areas. Walmart+ members can receive free store delivery on qualifying orders of $35 or more, subject to restrictions."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Get Walmart Deals Online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Walmart runs online promotions throughout the year, including category-specific offers and major events. Walmart's Deals events can feature thousands of products across multiple categories."
      }
    },
    {
      "@type": "Question",
      "name": "Does Walmart Have Clearance Sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Walmart offers clearance merchandise across different categories, although available products and prices can vary by store and online."
      }
    },
    {
      "@type": "Question",
      "name": "Is CouponsBit Free to Use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. CouponsBit is free to use. You can browse Walmart coupon codes, promo offers, discounts, and deals without paying a fee."
      }
    }
  ]
},
  ],
};

export default function WalmartStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(walmartSchema) }} />
      <WalmartCouponsContent />
    </>
  );
}
