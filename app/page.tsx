import type { Metadata } from "next";
import HomePageContent from "./_components/HomePageContent";

export const metadata: Metadata = {
  title: {
    absolute: "Couponsbit | Coupon Codes, Promo Codes & Discount Codes",
  },
  description:
    "Find verified coupon codes, promo codes and discount codes on Couponsbit. Save on fashion, electronics, travel & more from 2000+ top stores. Updated daily.",

  alternates: {
    canonical: "https://couponsbit.us",
    languages: {
      "en-US": "https://couponsbit.us",
      "x-default": "https://couponsbit.us",
    },
  },

  // ✅ Open Graph
  openGraph: {
    type: "website",
    url: "https://couponsbit.us",
    title: "Couponsbit | Coupon Codes, Promo Codes & Discount Codes",
    description:
      "Find verified coupon codes, promo codes and discount codes on Couponsbit. Save on fashion, electronics, travel & more from 2000+ top stores. Updated daily.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Couponsbit – Verified Coupon Codes, Promo Codes & Discount Codes",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Couponsbit | Coupon Codes, Promo Codes & Discount Codes",
    description:
      "Find verified coupon codes, promo codes and discount codes on Couponsbit. Save on fashion, electronics, travel & more from 2000+ top stores. Updated daily.",
    images: ["https://couponsbit.us/og-image.png"],
    site: "@couponsbit",
  },

  // ✅ Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// ✅ JSON-LD Schema
const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      // ✅ WebPage for homepage
      "@type": "WebPage",
      "@id": "https://couponsbit.us/#webpage",
      url: "https://couponsbit.us",
      name: "Couponsbit | Coupon Codes, Promo Codes & Discount Codes",
      description:
        "Find verified coupon codes, promo codes and discount codes on Couponsbit. Save on fashion, electronics, travel & more from 2000+ top stores. Updated daily.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      about: {
        "@id": "https://couponsbit.us/#organization",
      },
      // ✅ Homepage gets speakable — voice search picks up your headline
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".hero-title"],
      },
    },
    {
      // ✅ WebSite with SearchAction — enables Google Sitelinks Search Box
      "@type": "WebSite",
      "@id": "https://couponsbit.us/#website",
      url: "https://couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is a trusted coupon website offering verified coupon codes, promo codes, and discount codes from 2000+ top stores worldwide.",
      inLanguage: "en-US",
      publisher: {
        "@id": "https://couponsbit.us/#organization",
      },
      // ✅ SearchAction — this is homepage-only, enables search box in Google SERPs
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://couponsbit.us/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      // ✅ Homepage gets the fullest Organization block
      "@type": "Organization",
      "@id": "https://couponsbit.us/#organization",
      name: "Couponsbit",
      url: "https://couponsbit.us",
      description:
        "Couponsbit is a trusted coupon website offering verified coupon codes, promo codes, and discount codes from 2000+ top international stores.",
      foundingDate: "2024",
      logo: {
        "@type": "ImageObject",
        url: "https://couponsbit.us/logo.png",
        width: 200,
        height: 60,
      },
      sameAs: [
        "https://twitter.com/couponsbit",
        "https://www.facebook.com/couponsbit",
        "https://www.instagram.com/couponsbit",
        "https://www.linkedin.com/company/couponsbit",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        availableLanguage: "English",
        areaServed: "US",
      },
    },
  ],
};

export default function Homepage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema),
        }}
      />
      <HomePageContent />
    </>
  );
}