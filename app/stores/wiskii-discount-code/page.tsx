import type { Metadata } from "next";
import { Suspense } from "react";
import WiskiiCouponsContent from "./_components/StoreCouponsContent";
import { WISKII_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Wiskii Promo Code: 67% Off Flower Bee Fidget Ring | Nov 2026",
  },
  description:
    "Save with a Wiskii promo code and Wiskii discount code on a Flower Bee Fidget Ring at 67% off and DIY Rhinestone Nail Art Stones from $3.12. Verified Nov 2026 deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/wiskii-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/wiskii-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/wiskii-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/wiskii-discount-code",
      "x-default": "https://www.couponsbit.us/stores/wiskii-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/wiskii-discount-code",
    title: "Wiskii Promo Code: 67% Off Flower Bee Fidget Ring | Nov 2026",
    description:
      "Save with a Wiskii promo code and Wiskii discount code on a Flower Bee Fidget Ring at 67% off and DIY Rhinestone Nail Art Stones from $3.12. Verified Nov 2026 deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699426/wishki-logo_qveoyb.webp",
        width: 1200,
        height: 630,
        alt: "Wiskii Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wiskii Promo Code: 67% Off Flower Bee Fidget Ring | Nov 2026",
    description:
      "Save with a Wiskii promo code and Wiskii discount code on a Flower Bee Fidget Ring at 67% off and DIY Rhinestone Nail Art Stones from $3.12. Verified Nov 2026 deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699426/wishki-logo_qveoyb.webp"],
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

const wishkiSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/wiskii-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/wiskii-discount-code",
      name: "Wiskii Promo Code: 67% Off Flower Bee Fidget Ring | Nov 2026",
      description:
        "Save with a Wiskii promo code and Wiskii discount code on a Flower Bee Fidget Ring at 67% off and DIY Rhinestone Nail Art Stones from $3.12. Verified Nov 2026 deals.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/wiskii-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/wiskii-discount-code#offerlist",
      name: "Wiskii Coupon Codes & Promo Codes",
      description:
        "Latest verified Wiskii coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/wiskii-discount-code",
      numberOfItems: WISKII_COUPONS.length,
      itemListElement: WISKII_COUPONS.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: o.title,
          description: o.description,
          url: "https://www.couponsbit.us/stores/wiskii-discount-code",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Wiskii", url: "https://www.wishki.com" },
        },
      })),
    },

    {
      "@type": "WebSite",
      "@id": "https://www.couponsbit.us/#website",
      url: "https://www.couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is one of the best coupon websites offering verified coupons, deals, and coupon help for top brands worldwide.",
      inLanguage: "en-US",
      publisher: {
        "@id": "https://www.couponsbit.us/#organization",
      },
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
      "@id": "https://www.couponsbit.us/stores/wiskii-discount-code#brand",
      name: "Wiskii",
      url: "https://www.wishki.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/wiskii-discount-code#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.couponsbit.us",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Stores",
          item: "https://www.couponsbit.us/stores",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Wiskii Coupons",
          item: "https://www.couponsbit.us/stores/wiskii-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/wiskii-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is WISKII Active?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WISKII Active is a women's premium activewear brand that combines fashion-forward designs with high-performance fabrics to create stylish athletic clothing.",
          },
        },
        {
          "@type": "Question",
          name: "What products does WISKII Active sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The brand offers sports bras, leggings, workout tops, matching sets, tennis apparel, dresses, skirts, jackets, swimwear, and lifestyle clothing.",
          },
        },
        {
          "@type": "Question",
          name: "Is WISKII Active suitable for everyday wear?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many WISKII Active collections are designed to transition seamlessly from workouts to everyday activities, making them ideal for an athleisure wardrobe.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find WISKII Active coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest WISKII Active coupon codes, WISKII Active promo codes, and exclusive activewear deals on CouponsBit.",
          },
        },
        {
          "@type": "Question",
          name: "Does WISKII Active ship internationally?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. WISKII Active ships to customers in many countries worldwide through its online store.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. CouponsBit is completely free and helps shoppers discover verified coupon codes, promotional offers, and discounts from trusted global brands.",
          },
        },
      ],
    },
  ],
};

export default function WiskiiStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(wishkiSchema),
        }}
      />
      <Suspense fallback={null}><WiskiiCouponsContent /></Suspense>
    </>
  );
}