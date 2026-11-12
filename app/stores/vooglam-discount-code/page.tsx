import type { Metadata } from "next";
import { Suspense } from "react";
import VooglamCouponsContent from "./_components/StoreCouponsContent";
import { VOOGLAM_COUPONS } from "./_components/offers";

const TITLE = "Vooglam Promo Code: Up to 20% Off | Nov 2026";
const DESCRIPTION = "Save with the latest Vooglam promo code and Vooglam discount code. Get 20% off Charisse Eyeglasses, eyeglasses from $65, and sunglasses from $100 this Nov 2026.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/vooglam-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/vooglam-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/vooglam-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/vooglam-discount-code",
      "x-default": "https://www.couponsbit.us/stores/vooglam-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/vooglam-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699425/vooglam-logo_qe8mis.webp",
        width: 1200,
        height: 630,
        alt: "Vooglam Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699425/vooglam-logo_qe8mis.webp"],
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
    language: "en-US",
  },
};

const vooglamSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/vooglam-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/vooglam-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/vooglam-discount-code#breadcrumb" },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/vooglam-discount-code#offerlist",
      name: "Vooglam Coupon Codes & Promo Codes",
      description: "Latest verified Vooglam coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/vooglam-discount-code",
      numberOfItems: VOOGLAM_COUPONS.length,
      itemListElement: VOOGLAM_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/vooglam-discount-code",
          seller: { "@type": "Organization", name: "Vooglam", url: "https://vooglam.com" },
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
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/couponsbit-logo_kxqyir.webp",
        width: 200,
        height: 60,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        availableLanguage: "English",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/vooglam-discount-code#brand",
      name: "Vooglam",
      url: "https://vooglam.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/vooglam-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Vooglam Coupons", item: "https://www.couponsbit.us/stores/vooglam-discount-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/vooglam-discount-code#faq",
      mainEntity: [
        { "@type": "Question", name: "What is Vooglam?", acceptedAnswer: { "@type": "Answer", text: "Vooglam is an online eyewear retailer offering fashionable prescription glasses, blue light glasses, sunglasses, and customizable lenses for customers worldwide." } },
        { "@type": "Question", name: "Does Vooglam sell prescription glasses?", acceptedAnswer: { "@type": "Answer", text: "Yes. Customers can order prescription eyeglasses and customize lenses according to their vision requirements." } },
        { "@type": "Question", name: "Can I buy blue light glasses from Vooglam?", acceptedAnswer: { "@type": "Answer", text: "Yes. Vooglam offers a variety of blue light filtering glasses designed for people who spend extended hours using digital devices." } },
        { "@type": "Question", name: "Does Vooglam offer sunglasses?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. The brand offers both standard sunglasses and prescription sunglasses in a wide range of styles." } },
        { "@type": "Question", name: "Where can I find Vooglam coupon codes?", acceptedAnswer: { "@type": "Answer", text: "You can find the latest Vooglam coupon codes, promo codes, and exclusive eyewear deals on CouponsBit before placing your order." } },
        { "@type": "Question", name: "Is CouponsBit free to use?", acceptedAnswer: { "@type": "Answer", text: "Yes. CouponsBit is completely free and helps shoppers discover verified coupon codes and promotional offers from trusted online brands." } },
      ],
    },
  ],
};

export default function VooglamStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(vooglamSchema),
        }}
      />
      <Suspense fallback={null}>
        <VooglamCouponsContent />
      </Suspense>
    </>
  );
}
