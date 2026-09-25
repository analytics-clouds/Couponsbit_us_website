import type { Metadata } from "next";
import UhaulContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: {
    absolute: "U-Haul Discount Code – Coupons & Deals | Couponsbit",
  },
  description:
    "Find the latest U-Haul discount codes, coupons, and deals on Couponsbit. Save on truck rentals, moving supplies, and storage.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/uhaul-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/uhaul-discount-code",
      "x-default": "https://www.couponsbit.us/stores/uhaul-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/uhaul-discount-code",
    title: "U-Haul Discount Code – Coupons & Deals | Couponsbit",
    description:
      "Find the latest U-Haul discount codes, coupons, and deals on Couponsbit. Save on truck rentals, moving supplies, and storage.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1790238446/uhaul-logo_qbdgyu.webp",
        width: 1200,
        height: 630,
        alt: "U-Haul Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "U-Haul Discount Code – Coupons & Deals | Couponsbit",
    description:
      "Find the latest U-Haul discount codes, coupons, and deals on Couponsbit. Save on truck rentals, moving supplies, and storage.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1790238446/uhaul-logo_qbdgyu.webp"],
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

const uhaulSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/uhaul-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/uhaul-discount-code",
      name: "U-Haul Discount Code – Coupons & Deals | Couponsbit",
      description:
        "Find the latest U-Haul discount codes, coupons, and deals on Couponsbit. Save on truck rentals, moving supplies, and storage.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-09-24",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/uhaul-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/uhaul-discount-code#offerlist",
      name: "U-Haul Discount Codes & Coupon Codes",
      description: "Latest U-Haul discount codes and offers.",
      url: "https://www.couponsbit.us/stores/uhaul-discount-code",
      numberOfItems: 6,
      itemListElement: [
        { "@type": "ListItem", position: 1, item: { "@type": "Offer", name: "U-Haul – New Customer Offer", description: "Check for savings available to new U-Haul customers on their first reservation.", url: "https://www.couponsbit.us/stores/uhaul-discount-code", seller: { "@type": "Organization", name: "U-Haul", url: "https://www.uhaul.com" } } },
        { "@type": "ListItem", position: 2, item: { "@type": "Offer", name: "U-Haul – Truck Rental Discount", description: "Look for a discount on eligible U-Haul truck rentals.", url: "https://www.couponsbit.us/stores/uhaul-discount-code", seller: { "@type": "Organization", name: "U-Haul", url: "https://www.uhaul.com" } } },
        { "@type": "ListItem", position: 3, item: { "@type": "Offer", name: "U-Haul – Moving Supplies Deal", description: "Check for savings on moving supplies like boxes and packing materials.", url: "https://www.couponsbit.us/stores/uhaul-discount-code", seller: { "@type": "Organization", name: "U-Haul", url: "https://www.uhaul.com" } } },
        { "@type": "ListItem", position: 4, item: { "@type": "Offer", name: "U-Haul – Storage Unit Offer", description: "Look for discounted rates on U-Haul self-storage units.", url: "https://www.couponsbit.us/stores/uhaul-discount-code", seller: { "@type": "Organization", name: "U-Haul", url: "https://www.uhaul.com" } } },
        { "@type": "ListItem", position: 5, item: { "@type": "Offer", name: "U-Haul – Trailer Rental Discount", description: "Check for a discount on eligible U-Haul trailer rentals.", url: "https://www.couponsbit.us/stores/uhaul-discount-code", seller: { "@type": "Organization", name: "U-Haul", url: "https://www.uhaul.com" } } },
        { "@type": "ListItem", position: 6, item: { "@type": "Offer", name: "U-Haul – Seasonal Moving Sale", description: "Check for seasonal promotions during peak moving periods.", url: "https://www.couponsbit.us/stores/uhaul-discount-code", seller: { "@type": "Organization", name: "U-Haul", url: "https://www.uhaul.com" } } },
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
      "@id": "https://www.couponsbit.us/stores/uhaul-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "U-Haul Coupons", item: "https://www.couponsbit.us/stores/uhaul-discount-code" },
      ],
    },

    {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/uhaul-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does U-Haul have discount codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "U-Haul offers discount codes from time to time, alongside direct promotions and discounts. Available offers can depend on the service, location, rental dates, and other eligibility requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a U-Haul discount code online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. U-Haul's website provides an option to apply a gift card or discount code from the shopping cart for eligible purchases."
      }
    },
    {
      "@type": "Question",
      "name": "Does U-Haul offer storage discounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "U-Haul currently lists several storage promotions, including a one-month-free storage offer at participating locations for qualifying truck or trailer rentals. Promotions and eligibility can change."
      }
    },
    {
      "@type": "Question",
      "name": "Does U-Haul offer moving supplies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. U-Haul sells a wide selection of moving and shipping supplies, including boxes, packing materials, storage products, and moving accessories."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use U-Haul for long-distance moves?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. U-Haul offers one-way moving options, and U-Box containers can also be shipped to destinations across the country and beyond, depending on the service and destination."
      }
    },
    {
      "@type": "Question",
      "name": "Does U-Haul offer moving help?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. U-Haul's Moving Help Marketplace allows customers to arrange assistance with services such as loading, unloading, packing, and unpacking."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get a U-Haul discount without a promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. U-Haul directly advertises selected discounts and promotions, so a promo code is not always necessary. The available offers can change based on your move and location."
      }
    }
  ]
},
  ],
};

export default function UhaulPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(uhaulSchema) }} />
      <UhaulContent />
    </>
  );
}
