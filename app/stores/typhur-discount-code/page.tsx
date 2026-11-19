import type { Metadata } from "next";
import { Suspense } from "react";
import TyphurCouponsContent from "./_components/StoreCouponsContent";
import { TYPHUR_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Typhur Promo Code: Up to 40% Off Fall Sale | Nov 2026",
  },
  description:
    "Typhur Promo Code and Typhur Discount Code offer $140 off Dome 2 Bundle plus 40% off kitchen products. Get verified Nov 2026 deals now.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/typhur-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/typhur-discount-code",
      "x-default": "https://www.couponsbit.us/stores/typhur-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/typhur-discount-code",
    title: "Typhur Promo Code: Up to 40% Off Fall Sale | Nov 2026",
    description:
      "Typhur Promo Code and Typhur Discount Code offer $140 off Dome 2 Bundle plus 40% off kitchen products. Get verified Nov 2026 deals now.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1790146959/typhur-logo_abminz.webp",
        width: 1200,
        height: 630,
        alt: "Typhur Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Typhur Promo Code: Up to 40% Off Fall Sale | Nov 2026",
    description:
      "Typhur Promo Code and Typhur Discount Code offer $140 off Dome 2 Bundle plus 40% off kitchen products. Get verified Nov 2026 deals now.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1790146959/typhur-logo_abminz.webp"],
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

const typhurSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/typhur-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/typhur-discount-code",
      name: "Typhur Promo Code: Up to 40% Off Fall Sale | Nov 2026",
      description:
        "Typhur Promo Code and Typhur Discount Code offer $140 off Dome 2 Bundle plus 40% off kitchen products. Get verified Nov 2026 deals now.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/typhur-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/typhur-discount-code#offerlist",
      name: "Typhur Discount Codes & Coupon Codes",
      description: "Latest Typhur discount codes and offers on smart kitchen appliances.",
      url: "https://www.couponsbit.us/stores/typhur-discount-code",
      numberOfItems: TYPHUR_COUPONS.length,
      itemListElement: TYPHUR_COUPONS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.description,
          url: "https://www.couponsbit.us/stores/typhur-discount-code",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Typhur", url: "https://www.typhur.com" },
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
      "@id": "https://www.couponsbit.us/stores/typhur-discount-code#brand",
      name: "Typhur",
      url: "https://www.typhur.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/typhur-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Typhur Coupons", item: "https://www.couponsbit.us/stores/typhur-discount-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/typhur-discount-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Typhur offer promo codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Typhur regularly provides discount codes and promo codes for eligible smart kitchen appliances and accessories."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find a Typhur discount code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check CouponsBit for available Typhur promotional offers, coupon codes, and deal updates before placing your order."
          }
        },
        {
          "@type": "Question",
          "name": "Can I combine multiple Typhur promo codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typhur states that promotional codes and discounts generally cannot be combined on a single order unless explicitly stated."
          }
        },
        {
          "@type": "Question",
          "name": "Does Typhur offer seasonal sale discounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Typhur frequently runs limited-time seasonal and holiday sale campaigns featuring site-wide or product-specific savings."
          }
        },
        {
          "@type": "Question",
          "name": "How do I apply a Typhur coupon code at checkout?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Add your desired item to the cart, head to checkout, enter the code into the promo field, and verify the discount before completing payment."
          }
        }
      ]
    },
  ],
};

export default function TyphurStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(typhurSchema) }} />
      <Suspense fallback={null}><TyphurCouponsContent /></Suspense>
    </>
  );
}
