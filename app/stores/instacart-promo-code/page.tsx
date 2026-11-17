import type { Metadata } from "next";
import { Suspense } from "react";
import InstacartCouponsContent from "./_components/StoreCouponsContent";
import { INSTACART_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Instacart Promo Code: $50 OFF First Order + Free Delivery | Nov 2026",
  },
  description:
    "Save with Instacart Promo Code and Instacart Discount Code. Get $50 off first orders and $35 off your first 2 orders. Verified Nov 2026 deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/instacart-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/instacart-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/instacart-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/instacart-promo-code",
      "x-default": "https://www.couponsbit.us/stores/instacart-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/instacart-promo-code",
    title: "Instacart Promo Code: $50 OFF First Order + Free Delivery | Nov 2026",
    description:
      "Save with Instacart Promo Code and Instacart Discount Code. Get $50 off first orders and $35 off your first 2 orders. Verified Nov 2026 deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1788868873/instacart-logo_yhmlhq.webp",
        width: 1200,
        height: 630,
        alt: "Instacart Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Instacart Promo Code: $50 OFF First Order + Free Delivery | Nov 2026",
    description:
      "Save with Instacart Promo Code and Instacart Discount Code. Get $50 off first orders and $35 off your first 2 orders. Verified Nov 2026 deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1788868873/instacart-logo_yhmlhq.webp"],
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
  other: { 'geo.region': 'US', 'geo.country': 'US', language: 'en-US' },
};

const storeOffers = INSTACART_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Instacart ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/instacart-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Instacart", url: "https://www.instacart.com" },
}));

const instacartSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/instacart-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/instacart-promo-code",
      name: "Instacart Promo Code: $50 OFF First Order + Free Delivery | Nov 2026",
      description:
        "Save with Instacart Promo Code and Instacart Discount Code. Get $50 off first orders and $35 off your first 2 orders. Verified Nov 2026 deals.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/instacart-promo-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/instacart-promo-code#brand",
      name: "Instacart",
      url: "https://www.instacart.com",
      sameAs: ["https://www.facebook.com/instacart", "https://twitter.com/instacart"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/instacart-promo-code#offerlist",
      name: "Instacart Promo Codes & Coupon Codes",
      description: "Latest Instacart promo codes and offers on grocery delivery.",
      url: "https://www.couponsbit.us/stores/instacart-promo-code",
      numberOfItems: INSTACART_COUPONS.length,
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
      "@id": "https://www.couponsbit.us/stores/instacart-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Instacart Coupons", item: "https://www.couponsbit.us/stores/instacart-promo-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/instacart-promo-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Instacart offer promo codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Instacart offers different promotions that may include promo codes, discounts, retailer offers, delivery promotions, and other savings opportunities. Availability and eligibility can vary."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find an Instacart promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check CouponsBit for available Instacart promo codes, coupon codes, discount offers, vouchers, and other promotions before placing your grocery order."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use an Instacart coupon code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Add your groceries to the cart, proceed to checkout, and enter the applicable coupon or promotional code in the designated field. Confirm that the discount has been applied before completing your order."
          }
        },
        {
          "@type": "Question",
          "name": "Why isn't my Instacart promo code working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A code may not work because it has expired or because your order doesn't meet its requirements. Restrictions may include minimum spending amounts, customer eligibility, participating retailers, products, or locations."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use an Instacart discount code at any retailer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Some promotions may be restricted to particular retailers, products, customers, or locations. Check the individual offer's terms before ordering."
          }
        },
        {
          "@type": "Question",
          "name": "Does Instacart offer free delivery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Instacart may provide delivery-related promotions and membership benefits for eligible orders. Availability and conditions can change, so check the current offer before placing your order."
          }
        },
        {
          "@type": "Question",
          "name": "What is Instacart+?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Instacart+ is Instacart's membership program. It provides eligible members with certain benefits related to delivery and other savings, subject to the current membership terms."
          }
        },
        {
          "@type": "Question",
          "name": "Can I order household products through Instacart?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Depending on the participating retailer, customers can order household essentials such as cleaning products, paper goods, laundry supplies, personal-care items, pet products, and other everyday necessities."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use Instacart for holiday grocery shopping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Instacart can be useful for larger grocery trips around holidays such as Thanksgiving, Christmas, Easter, the Fourth of July, and other family celebrations."
          }
        },
        {
          "@type": "Question",
          "name": "Does Instacart have Black Friday deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Instacart and participating retailers may run promotions around major shopping periods. Check the current offers to see which products, retailers, and customers qualify."
          }
        },
        {
          "@type": "Question",
          "name": "When is the best time to look for Instacart deals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Promotions can appear throughout the year, but major holidays and shopping periods such as the Super Bowl, Memorial Day, Fourth of July, back-to-school season, Thanksgiving, Black Friday, Cyber Monday, and Christmas can be useful times to check."
          }
        },
        {
          "@type": "Question",
          "name": "How can I save more on Instacart?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start by checking CouponsBit for an Instacart promo code, then compare it with retailer-specific promotions, product discounts, delivery offers, and membership benefits. Always consider the complete checkout total when deciding which deal provides the best value."
          }
        }
      ]
    },
  ],
};

export default function InstacartStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(instacartSchema) }} />
      <Suspense fallback={null}>
        <InstacartCouponsContent />
      </Suspense>
    </>
  );
}
