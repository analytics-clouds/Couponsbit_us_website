import type { Metadata } from "next";
import { Suspense } from "react";
import RestContent from "./_components/StoreCouponsContent";
import { REST_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Rest Promo Code: 40% Off Cooling Pajamas | Nov 2026",
  },
  description:
    "Rest Promo Code and Rest Discount Code offer 40% off cooling pajamas plus 30% off bedding. Get verified Nov 2026 savings and shop today.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/rest-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/rest-discount-code",
      "en-CA": "https://www.couponsbit.us/stores/rest-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/rest-discount-code",
      "x-default": "https://www.couponsbit.us/stores/rest-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/rest-discount-code",
    title: "Rest Promo Code: 40% Off Cooling Pajamas | Nov 2026",
    description:
      "Rest Promo Code and Rest Discount Code offer 40% off cooling pajamas plus 30% off bedding. Get verified Nov 2026 savings and shop today.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1791978343/restus-logo_qyvz2a.webp",
        width: 1200,
        height: 630,
        alt: "Rest Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rest Promo Code: 40% Off Cooling Pajamas | Nov 2026",
    description:
      "Rest Promo Code and Rest Discount Code offer 40% off cooling pajamas plus 30% off bedding. Get verified Nov 2026 savings and shop today.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1791978343/restus-logo_qyvz2a.webp"],
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
  other: { "geo.region": "US", "geo.country": "US", language: "en-US" },
};

const restSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/rest-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/rest-discount-code",
      name: "Rest Promo Code: 40% Off Cooling Pajamas | Nov 2026",
      description:
        "Rest Promo Code and Rest Discount Code offer 40% off cooling pajamas plus 30% off bedding. Get verified Nov 2026 savings and shop today.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/rest-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/rest-discount-code#offerlist",
      name: "Rest Discount Codes & Coupon Codes",
      description: "Latest Rest discount codes and offers.",
      url: "https://www.couponsbit.us/stores/rest-discount-code",
      numberOfItems: REST_COUPONS.length,
      itemListElement: REST_COUPONS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.description,
          url: "https://www.couponsbit.us/stores/rest-discount-code",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Rest", url: "https://www.restduvet.com" },
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
      "@id": "https://www.couponsbit.us/stores/rest-discount-code#brand",
      name: "Rest",
      url: "https://www.restduvet.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/rest-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Rest Coupons", item: "https://www.couponsbit.us/stores/rest-discount-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/rest-discount-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Rest offer discount codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rest may feature promotional offers and seasonal deals. Check CouponsBit and the official regional website for currently available promotions."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a Rest promo code on every product?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Some codes may apply only to selected products, collections or qualifying orders. Review the offer terms before checkout."
          }
        },
        {
          "@type": "Question",
          "name": "Can shoppers in Canada and the UK order from Rest?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rest has a Canadian shopping website, but delivery options and product availability should be checked for your specific destination. UK shoppers should verify whether their address is supported before placing an order."
          }
        },
        {
          "@type": "Question",
          "name": "What is Rest best known for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rest is best known for its Evercool® cooling bedding, including comforters and sheets designed for a cool-to-the-touch feel."
          }
        }
      ]
    },
  ],
};

export default function RestPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restSchema) }} />
      <Suspense fallback={null}><RestContent /></Suspense>
    </>
  );
}
