import type { Metadata } from "next";
import AnantaraContent from "./_components/StoreCouponsContent";
import { OFFERS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Anantara Discount Code – 35% OFF Hotels & 25% OFF Stays",
  },
  description:
    "Save more with the latest Anantara Discount Code and Anantara Promo Code. Enjoy 35% OFF luxury stays and 25% OFF resort bookings. Book now.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/anantara-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/anantara-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/anantara-discount-code",
      "x-default": "https://www.couponsbit.us/stores/anantara-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/anantara-discount-code",
    title: "Anantara Discount Code – 35% OFF Hotels & 25% OFF Stays",
    description:
      "Save more with the latest Anantara Discount Code and Anantara Promo Code. Enjoy 35% OFF luxury stays and 25% OFF resort bookings. Book now.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1792761721/anatara-logo_b50jv5.webp",
        width: 1200,
        height: 630,
        alt: "Anantara Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Anantara Discount Code – 35% OFF Hotels & 25% OFF Stays",
    description:
      "Save more with the latest Anantara Discount Code and Anantara Promo Code. Enjoy 35% OFF luxury stays and 25% OFF resort bookings. Book now.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1792761721/anatara-logo_b50jv5.webp"],
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

const anantaraSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/anantara-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/anantara-discount-code",
      name: "Anantara Discount Code – 35% OFF Hotels & 25% OFF Stays",
      description:
        "Save more with the latest Anantara Discount Code and Anantara Promo Code. Enjoy 35% OFF luxury stays and 25% OFF resort bookings. Book now.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-10-23",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/anantara-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/anantara-discount-code#offerlist",
      name: "Anantara Discount Codes & Coupon Codes",
      description: "Latest Anantara discount codes, promo codes, and luxury resort offers.",
      url: "https://www.couponsbit.us/stores/anantara-discount-code",
      numberOfItems: OFFERS.length,
      itemListElement: OFFERS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.desc,
          url: "https://www.couponsbit.us/stores/anantara-discount-code",
          seller: { "@type": "Organization", name: "Anantara Hotels, Resorts & Spas", url: "https://www.anantara.com" },
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
      "@id": "https://www.couponsbit.us/stores/anantara-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Anantara Coupons", item: "https://www.couponsbit.us/stores/anantara-discount-code" },
      ],
    },

   {
  "@type": "FAQPage",
  "@id": "https://www.couponsbit.us/stores/anantara-discount-code#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where can I find an Anantara promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit CouponsClouds to check available Anantara promo codes and booking deals. You can also explore the official Anantara offers page for property-specific promotions."
      }
    },
    {
      "@type": "Question",
      "name": "Does Anantara offer discounts on hotel bookings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anantara features promotional offers that may include longer-stay savings, advance-purchase rates, and special packages. Availability and benefits depend on the hotel and booking conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Can I save by booking directly with Anantara?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anantara promotes direct-booking benefits, including a best-rate guarantee subject to its terms. Review the official website for the applicable conditions and benefits before making a reservation."
      }
    },
    {
      "@type": "Question",
      "name": "What is Minor DISCOVERY?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minor DISCOVERY is the loyalty programme associated with Minor Hotels, the hotel group behind Anantara. Members can access eligible programme benefits and recognition when staying at participating properties."
      }
    },
    {
      "@type": "Question",
      "name": "Do all Anantara hotels accept the same promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Promotional terms can vary by property, destination, room type, and booking dates. Check the conditions of your specific offer before confirming your reservation."
      }
    }
  ]
},
  ],
};

export default function AnantaraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(anantaraSchema) }} />
      <AnantaraContent />
    </>
  );
}
