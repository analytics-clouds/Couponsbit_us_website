import type { Metadata } from "next";
import { Suspense } from "react";
import TheAyurvedaExperienceCouponsContent from "./_components/StoreCouponsContent";
import { AYURVEDA_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "The Ayurveda Experience Promo Code: 50% Off Yauvari | Nov 2026",
  },
  description:
    "The Ayurveda Experience Promo Code and Discount Code offer 50% off Yauvari Youth Spring plus 20% off skincare. Get verified Nov 2026 deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/the-ayurveda-experience-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/the-ayurveda-experience-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/the-ayurveda-experience-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/the-ayurveda-experience-discount-code",
      "x-default": "https://www.couponsbit.us/stores/the-ayurveda-experience-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/the-ayurveda-experience-discount-code",
    title: "The Ayurveda Experience Promo Code: 50% Off Yauvari | Nov 2026",
    description:
      "The Ayurveda Experience Promo Code and Discount Code offer 50% off Yauvari Youth Spring plus 20% off skincare. Get verified Nov 2026 deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1787295215/tae-logo_dwfmfi.webp",
        width: 1200,
        height: 630,
        alt: "The Ayurveda Experience Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Ayurveda Experience Promo Code: 50% Off Yauvari | Nov 2026",
    description:
      "The Ayurveda Experience Promo Code and Discount Code offer 50% off Yauvari Youth Spring plus 20% off skincare. Get verified Nov 2026 deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1787295215/tae-logo_dwfmfi.webp"],
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

const theAyurvedaExperienceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/the-ayurveda-experience-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/the-ayurveda-experience-discount-code",
      name: "The Ayurveda Experience Promo Code: 50% Off Yauvari | Nov 2026",
      description:
        "The Ayurveda Experience Promo Code and Discount Code offer 50% off Yauvari Youth Spring plus 20% off skincare. Get verified Nov 2026 deals.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/the-ayurveda-experience-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/the-ayurveda-experience-discount-code#offerlist",
      name: "The Ayurveda Experience Discount Codes & Coupon Codes",
      description: "Latest The Ayurveda Experience discount codes and offers for Ayurvedic hair, skin and wellness products.",
      url: "https://www.couponsbit.us/stores/the-ayurveda-experience-discount-code",
      numberOfItems: AYURVEDA_COUPONS.length,
      itemListElement: AYURVEDA_COUPONS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.description,
          url: "https://www.couponsbit.us/stores/the-ayurveda-experience-discount-code",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "The Ayurveda Experience", url: "https://theayurvedaexperience.com" },
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
      "@id": "https://www.couponsbit.us/stores/the-ayurveda-experience-discount-code#brand",
      name: "The Ayurveda Experience",
      url: "https://theayurvedaexperience.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/the-ayurveda-experience-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "The Ayurveda Experience Coupons", item: "https://www.couponsbit.us/stores/the-ayurveda-experience-discount-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/the-ayurveda-experience-discount-code#faq",
      mainEntity: [
        { "@type": "Question", name: "What is The Ayurveda Experience?", acceptedAnswer: { "@type": "Answer", text: "The Ayurveda Experience is a wellness brand offering Ayurvedic hair oils, skincare, herbal supplements and wellness kits." } },
        { "@type": "Question", name: "Does The Ayurveda Experience offer discount codes?", acceptedAnswer: { "@type": "Answer", text: "Yes. The Ayurveda Experience runs promotions such as hair oil offers and first order discount picks." } },
        { "@type": "Question", name: "Where can I find The Ayurveda Experience discount codes?", acceptedAnswer: { "@type": "Answer", text: "You can find the latest The Ayurveda Experience discount codes and offers on Couponsbit." } },
        { "@type": "Question", name: "Does The Ayurveda Experience sell skincare products?", acceptedAnswer: { "@type": "Answer", text: "Yes. The Ayurveda Experience offers Ayurvedic skincare products alongside its hair care and wellness range." } },
        { "@type": "Question", name: "Does The Ayurveda Experience offer wellness kits?", acceptedAnswer: { "@type": "Answer", text: "Yes. The Ayurveda Experience offers curated wellness kits combining multiple Ayurvedic products." } },
        { "@type": "Question", name: "Is Couponsbit free to use?", acceptedAnswer: { "@type": "Answer", text: "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers." } },
      ],
    },
  ],
};

export default function TheAyurvedaExperienceStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(theAyurvedaExperienceSchema) }} />
      <Suspense fallback={null}><TheAyurvedaExperienceCouponsContent /></Suspense>
    </>
  );
}
