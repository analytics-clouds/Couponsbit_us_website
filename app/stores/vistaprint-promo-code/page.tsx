import type { Metadata } from "next";
import VistaprintContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: {
    absolute: "Vistaprint Promo Code – Coupons & Deals | Couponsbit",
  },
  description:
    "Find the latest Vistaprint promo codes, coupons, and deals on Couponsbit. Save on business cards, marketing materials, and custom prints.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/vistaprint-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/vistaprint-promo-code",
      "x-default": "https://www.couponsbit.us/stores/vistaprint-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/vistaprint-promo-code",
    title: "Vistaprint Promo Code – Coupons & Deals | Couponsbit",
    description:
      "Find the latest Vistaprint promo codes, coupons, and deals on Couponsbit. Save on business cards, marketing materials, and custom prints.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1790238446/vista-logo_xyfgde.webp",
        width: 1200,
        height: 630,
        alt: "Vistaprint Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vistaprint Promo Code – Coupons & Deals | Couponsbit",
    description:
      "Find the latest Vistaprint promo codes, coupons, and deals on Couponsbit. Save on business cards, marketing materials, and custom prints.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1790238446/vista-logo_xyfgde.webp"],
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

const vistaprintSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/vistaprint-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/vistaprint-promo-code",
      name: "Vistaprint Promo Code – Coupons & Deals | Couponsbit",
      description:
        "Find the latest Vistaprint promo codes, coupons, and deals on Couponsbit. Save on business cards, marketing materials, and custom prints.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-09-24",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/vistaprint-promo-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/vistaprint-promo-code#offerlist",
      name: "Vistaprint Promo Codes & Coupon Codes",
      description: "Latest Vistaprint promo codes and offers.",
      url: "https://www.couponsbit.us/stores/vistaprint-promo-code",
      numberOfItems: 6,
      itemListElement: [
        { "@type": "ListItem", position: 1, item: { "@type": "Offer", name: "Vistaprint – New Customer Offer", description: "Check for savings available to new Vistaprint customers on their first order.", url: "https://www.couponsbit.us/stores/vistaprint-promo-code", seller: { "@type": "Organization", name: "Vistaprint", url: "https://www.vistaprint.com" } } },
        { "@type": "ListItem", position: 2, item: { "@type": "Offer", name: "Vistaprint – Percentage Off Sitewide", description: "Look for a Vistaprint promo offering a percentage off eligible products.", url: "https://www.couponsbit.us/stores/vistaprint-promo-code", seller: { "@type": "Organization", name: "Vistaprint", url: "https://www.vistaprint.com" } } },
        { "@type": "ListItem", position: 3, item: { "@type": "Offer", name: "Vistaprint – Free Shipping Offer", description: "Check for free shipping on qualifying Vistaprint orders.", url: "https://www.couponsbit.us/stores/vistaprint-promo-code", seller: { "@type": "Organization", name: "Vistaprint", url: "https://www.vistaprint.com" } } },
        { "@type": "ListItem", position: 4, item: { "@type": "Offer", name: "Vistaprint – Business Card Deal", description: "Look for discounted pricing on custom business cards.", url: "https://www.couponsbit.us/stores/vistaprint-promo-code", seller: { "@type": "Organization", name: "Vistaprint", url: "https://www.vistaprint.com" } } },
        { "@type": "ListItem", position: 5, item: { "@type": "Offer", name: "Vistaprint – Marketing Bundle Discount", description: "Check for savings on bundled marketing material orders.", url: "https://www.couponsbit.us/stores/vistaprint-promo-code", seller: { "@type": "Organization", name: "Vistaprint", url: "https://www.vistaprint.com" } } },
        { "@type": "ListItem", position: 6, item: { "@type": "Offer", name: "Vistaprint – Seasonal Clearance Sale", description: "Check for seasonal clearance pricing on select products.", url: "https://www.couponsbit.us/stores/vistaprint-promo-code", seller: { "@type": "Organization", name: "Vistaprint", url: "https://www.vistaprint.com" } } },
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
      "@id": "https://www.couponsbit.us/stores/vistaprint-promo-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Vistaprint Coupons", item: "https://www.couponsbit.us/stores/vistaprint-promo-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/vistaprint-promo-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does VistaPrint offer promo codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. VistaPrint regularly offers promotional codes and other discounts. Its official offers page currently lists multiple codes and category-specific promotions, with individual terms and expiration dates."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a VistaPrint promo code on any product?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Promo codes can have product, category, customer, order-value, or date restrictions. Always check the terms associated with the specific offer."
      }
    },
    {
      "@type": "Question",
      "name": "Does VistaPrint offer discounts on business cards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VistaPrint regularly features promotions on business cards and other marketing materials. Available offers can change, so check the current deals before placing an order."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get custom promotional products from VistaPrint?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. VistaPrint offers customizable promotional merchandise including drinkware, writing products, bags, clothing, technology products, hats, and other branded items."
      }
    },
    {
      "@type": "Question",
      "name": "Does VistaPrint offer custom apparel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can customize products such as T-shirts, hoodies, hats, jackets, and bags, including selected products from well-known apparel brands."
      }
    },
    {
      "@type": "Question",
      "name": "Does VistaPrint offer design services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. VistaPrint offers professional design services across areas such as business cards, packaging, marketing materials, signage, clothing, stationery, and other projects."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order personalized invitations from VistaPrint?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. VistaPrint offers invitations, announcements, save-the-date cards, RSVP cards, wedding stationery, and other personalized event products."
      }
    },
    {
      "@type": "Question",
      "name": "Does VistaPrint have offers for new customers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VistaPrint currently advertises a first-purchase promotion on its offers page. Because eligibility and expiration dates can change, check the current offer before ordering."
      }
    }
  ]
},
  ],
};

export default function VistaprintPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vistaprintSchema) }} />
      <VistaprintContent />
    </>
  );
}
