import type { Metadata } from "next";
import { Suspense } from "react";
import H10Content from "./_components/StoreCouponsContent";
import { H10_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "H10 Hotels Promo Code: Save Up to 35% Off on Packages | Nov 2026",
  },
  description:
    "H10 Hotels Promo Code and H10 Hotels Discount Code offer up to 35% off packages plus 25% off stays. Get verified Nov 2026 deals now.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/h10-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/h10-discount-code",
      "es-ES": "https://www.couponsbit.us/stores/h10-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/h10-discount-code",
      "x-default": "https://www.couponsbit.us/stores/h10-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/h10-discount-code",
    title: "H10 Hotels Promo Code: Save Up to 35% Off on Packages | Nov 2026",
    description:
      "H10 Hotels Promo Code and H10 Hotels Discount Code offer up to 35% off packages plus 25% off stays. Get verified Nov 2026 deals now.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1792761664/h10-logo_fjdthe.webp",
        width: 1200,
        height: 630,
        alt: "H10 Hotels Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "H10 Hotels Promo Code: Save Up to 35% Off on Packages | Nov 2026",
    description:
      "H10 Hotels Promo Code and H10 Hotels Discount Code offer up to 35% off packages plus 25% off stays. Get verified Nov 2026 deals now.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1792761664/h10-logo_fjdthe.webp"],
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

const h10Schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/h10-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/h10-discount-code",
      name: "H10 Hotels Promo Code: Save Up to 35% Off on Packages | Nov 2026",
      description:
        "H10 Hotels Promo Code and H10 Hotels Discount Code offer up to 35% off packages plus 25% off stays. Get verified Nov 2026 deals now.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/h10-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/h10-discount-code#offerlist",
      name: "H10 Hotels Discount Codes & Promo Codes",
      description: "Latest H10 Hotels promo codes, discount codes, and vacation deals.",
      url: "https://www.couponsbit.us/stores/h10-discount-code",
      numberOfItems: H10_COUPONS.length,
      itemListElement: H10_COUPONS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.description,
          url: "https://www.couponsbit.us/stores/h10-discount-code",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "H10 Hotels", url: "https://www.h10hotels.com" },
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
      "@id": "https://www.couponsbit.us/stores/h10-discount-code#brand",
      name: "H10 Hotels",
      url: "https://www.h10hotels.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/h10-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "H10 Hotels Coupons", item: "https://www.couponsbit.us/stores/h10-discount-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/h10-discount-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I find an H10 promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visit CouponsBit to check available H10 promo codes and hotel deals. You can also explore the official H10 Hotels offers page for current promotions and destination-specific discounts."
          }
        },
        {
          "@type": "Question",
          "name": "Does H10 Hotels offer discounts on bookings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. H10 Hotels lists promotions such as seasonal offers, longer-stay discounts, selected breakfast deals, and flight-and-hotel packages. The availability and conditions vary by property and destination."
          }
        },
        {
          "@type": "Question",
          "name": "What is the H10ESCAPE promo code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "H10ESCAPE is a code advertised on the official H10 Hotels website for an autumn promotion offering up to 20% off. Eligibility, participating hotels, and booking conditions apply, so verify the details before booking."
          }
        },
        {
          "@type": "Question",
          "name": "Does H10 Hotels have a loyalty programme?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. H10 Rewards offers eligible members booking discounts, points, exclusive promotions, and other benefits. Check the programme's official terms for details."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use an H10 promo code at every hotel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Offers may be limited to specific properties, destinations, room types, or travel periods. Check the conditions attached to your chosen promotion before completing your reservation."
          }
        }
      ]
    },
  ],
};

export default function H10Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(h10Schema) }} />
      <Suspense fallback={null}><H10Content /></Suspense>
    </>
  );
}
