import type { Metadata } from "next";
import AboutUsContent from "./_components/AboutUsContent";

export const metadata: Metadata = {
  title: "About Couponsbit | Trusted Coupon Website USA & Best Deals",
  description:
    "Learn about Couponsbit, a trusted coupon website USA shoppers rely on. We are the best coupon site online with verified deals from 2000+ stores worldwide.",

  alternates: {
    canonical: "https://www.couponsbit.us/about",
    languages: {
      "en-US": "https://www.couponsbit.us/about",
      "x-default": "https://www.couponsbit.us/about",
    },
  },

  // ✅ Open Graph
  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/about",
    title: "About Couponsbit | Trusted Coupon Website USA & Best Deals",
    description:
      "Learn about Couponsbit, a trusted coupon website USA shoppers rely on. We are the best coupon site online with verified deals from 2000+ stores worldwide.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://www.couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Couponsbit – Trusted Coupon Website USA",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "About Couponsbit | Trusted Coupon Website USA & Best Deals",
    description:
      "Learn about Couponsbit, a trusted coupon website USA shoppers rely on. We are the best coupon site online with verified deals from 2000+ stores worldwide.",
    images: ["https://www.couponsbit.us/og-image.png"],
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
const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.couponsbit.us/about#aboutpage",
      url: "https://www.couponsbit.us/about",
      name: "About Couponsbit | Trusted Coupon Website USA & Best Deals",
      description:
        "Learn about Couponsbit, a trusted coupon website USA shoppers rely on. We are the best coupon site online with verified deals from 2000+ stores worldwide.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/about#breadcrumb",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.couponsbit.us/#website",
      url: "https://www.couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is a trusted coupon website USA shoppers rely on for verified promo codes and the best coupon deals online from 2000+ stores.",
      inLanguage: "en-US",
      publisher: {
        "@id": "https://www.couponsbit.us/#organization",
      },
    },
    {
      // ✅ About page gets the richest Organization block across all pages
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/#organization",
      name: "Couponsbit",
      url: "https://www.couponsbit.us",
      description:
        "Couponsbit is a trusted coupon website USA shoppers rely on for verified promo codes, discount codes, and the best coupon deals from 2000+ international stores.",
      foundingDate: "2024",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 1,
        maxValue: 50,
      },
      logo: {
        "@type": "ImageObject",
        url: "https://www.couponsbit.us/logo.png",
        width: 200,
        height: 60,
      },
      sameAs: [
        // ✅ Add your actual social profile URLs here
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
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/about#breadcrumb",
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
          name: "About Us",
          item: "https://www.couponsbit.us/about",
        },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />
      <AboutUsContent />
    </>
  );
}