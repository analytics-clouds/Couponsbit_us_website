import type { Metadata } from "next";
import { Suspense } from "react";
import YouFibreContent from "./_components/StoreCouponsContent";
import { YOUFIBRE_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "YouFibre Promo Code: Full Fibre 1000 £25/Month | Nov 2026",
  },
  description:
    "YouFibre Promo Code and YouFibre Discount Code offer Full Fibre 1000 at £25/month plus YOU 2000 from £30/month. Get verified Nov 2026 deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/youfibre-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/youfibre-discount-code",
      "x-default": "https://www.couponsbit.us/stores/youfibre-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/youfibre-discount-code",
    title: "YouFibre Promo Code: Full Fibre 1000 £25/Month | Nov 2026",
    description:
      "YouFibre Promo Code and YouFibre Discount Code offer Full Fibre 1000 at £25/month plus YOU 2000 from £30/month. Get verified Nov 2026 deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1790831304/youfibre-logo_egqvo6.webp",
        width: 1200,
        height: 630,
        alt: "YouFibre Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "YouFibre Promo Code: Full Fibre 1000 £25/Month | Nov 2026",
    description:
      "YouFibre Promo Code and YouFibre Discount Code offer Full Fibre 1000 at £25/month plus YOU 2000 from £30/month. Get verified Nov 2026 deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1790831304/youfibre-logo_egqvo6.webp"],
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

const youfibreSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/youfibre-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/youfibre-discount-code",
      name: "YouFibre Promo Code: Full Fibre 1000 £25/Month | Nov 2026",
      description:
        "YouFibre Promo Code and YouFibre Discount Code offer Full Fibre 1000 at £25/month plus YOU 2000 from £30/month. Get verified Nov 2026 deals.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/youfibre-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/youfibre-discount-code#offerlist",
      name: "YouFibre Discount Codes & Coupon Codes",
      description: "Latest YouFibre discount codes and offers.",
      url: "https://www.couponsbit.us/stores/youfibre-discount-code",
      numberOfItems: YOUFIBRE_COUPONS.length,
      itemListElement: YOUFIBRE_COUPONS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.description,
          url: "https://www.couponsbit.us/stores/youfibre-discount-code",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "YouFibre", url: "https://www.youfibre.com" },
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
      "@id": "https://www.couponsbit.us/stores/youfibre-discount-code#brand",
      name: "YouFibre",
      url: "https://www.youfibre.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/youfibre-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "YouFibre Coupons", item: "https://www.couponsbit.us/stores/youfibre-discount-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/youfibre-discount-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does YouFibre offer discount codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "YouFibre runs different promotions and offers, although availability and terms can change. Check CouponsBit for current YouFibre discount codes and deals before signing up."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a YouFibre discount code on any broadband plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Promotional codes can have their own eligibility conditions. Check the specific terms of the offer before completing your order."
          }
        },
        {
          "@type": "Question",
          "name": "Is YouFibre available throughout the UK?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "YouFibre's Full Fibre network is available in selected areas rather than across every UK postcode. You can check availability by entering your postcode on the YouFibre website."
          }
        },
        {
          "@type": "Question",
          "name": "Does YouFibre offer fast broadband for gaming and streaming?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. YouFibre offers multiple speed options, including plans reaching up to 8,000 Mbps in eligible locations. The provider also offers Wi-Fi 7 routers designed to support high-speed connections and multiple connected devices."
          }
        },
        {
          "@type": "Question",
          "name": "What is YouMesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "YouMesh is YouFibre's mesh Wi-Fi option. It adds Wi-Fi boosters around your home to help extend coverage, particularly in areas where walls, extensions or the layout of the property affect the signal."
          }
        },
        {
          "@type": "Question",
          "name": "Does YouFibre have offers for existing customers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "YouFibre's loyalty promise says customers nearing the end of their contract can access the same offers available to new customers, subject to the applicable terms."
          }
        }
      ]
    },
  ],
};

export default function YouFibrePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(youfibreSchema) }} />
      <Suspense fallback={null}><YouFibreContent /></Suspense>
    </>
  );
}
