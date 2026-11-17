import type { Metadata } from "next";
import { Suspense } from "react";
import OglmoveCouponsContent from "./_components/StoreCouponsContent";
import { OGLMOVE_COUPONS } from "./_components/offers";

const TITLE = "OGLmove Promo Code: Up to 75% OFF Fashion Deals | Nov 2026";
const DESCRIPTION =
  "Save with OGLmove Promo Code and OGLmove Discount Code. Get up to 75% off fashion and free shipping over $69. Verified Nov 2026 deals.";
const CANONICAL = "https://www.couponsbit.us/stores/oglmove-discount-code";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: CANONICAL,
    languages: {
      "en-US": CANONICAL,
      "en-GB": CANONICAL,
      "en-IN": CANONICAL,
      "x-default": CANONICAL,
    },
  },

  openGraph: {
    type: "website",
    url: CANONICAL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1788434147/ogl-logo_p8i400.webp",
        width: 1200,
        height: 630,
        alt: "OGLmove Discount Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1788434147/ogl-logo_p8i400.webp"],
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

  other: {
    "geo.region": "US",
    "geo.country": "US",
  },
};

const oglmoveSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": `${CANONICAL}#breadcrumb` },
    },

    {
      "@type": "ItemList",
      "@id": `${CANONICAL}#offerlist`,
      name: "OGLmove Discount Codes & Coupon Codes",
      description: "Latest OGLmove discount codes and offers for sustainable women's comfortwear.",
      url: CANONICAL,
      numberOfItems: OGLMOVE_COUPONS.length,
      itemListElement: OGLMOVE_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: CANONICAL,
          seller: { "@type": "Organization", name: "OGLmove", url: "https://oglmove.com/#brand" },
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
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "OGLmove Coupons", item: CANONICAL },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      mainEntity: [
        { "@type": "Question", name: "What is OGLmove?", acceptedAnswer: { "@type": "Answer", text: "OGLmove is a women's fashion brand offering sustainable \"Everyday Comfortwear\" made from soft, breathable fabrics derived from eco-conscious materials." } },
        { "@type": "Question", name: "Does OGLmove offer discount codes?", acceptedAnswer: { "@type": "Answer", text: "Yes. OGLmove runs promotions such as comfortwear picks and sustainable fabric deals." } },
        { "@type": "Question", name: "Where can I find OGLmove discount codes?", acceptedAnswer: { "@type": "Answer", text: "You can find the latest OGLmove discount codes and offers on Couponsbit." } },
        { "@type": "Question", name: "What is OGLmove's Plantive fabric?", acceptedAnswer: { "@type": "Answer", text: "Plantive is OGLmove's patented biodegradable fabric, designed for softness, breathability and stretch." } },
        { "@type": "Question", name: "Is OGLmove a certified B Corp?", acceptedAnswer: { "@type": "Answer", text: "Yes. OGLmove is a certified B Corporation and commits to donating 1% of its annual revenue to environmental causes." } },
        { "@type": "Question", name: "Is Couponsbit free to use?", acceptedAnswer: { "@type": "Answer", text: "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers." } },
      ],
    },
  ],
};

export default function OglmoveStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(oglmoveSchema) }} />
      <Suspense fallback={null}>
        <OglmoveCouponsContent />
      </Suspense>
    </>
  );
}
