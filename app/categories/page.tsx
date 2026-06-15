import type { Metadata } from "next";
import CategoriesPageContent from "./_components/CategoriesPageContent";

export const metadata: Metadata = {
  title: "Couponsbit Categories | Online Coupons by Category USA",
  description:
    "Browse online coupons by category on Couponsbit. Shop deals across Fashion, Electronics, Travel, Beauty, Health, Sports, Footwear, Home & Living and more.",

  alternates: {
    canonical: "https://couponsbit.us/categories",
    languages: {
      "en-US": "https://couponsbit.us/categories",
      "x-default": "https://couponsbit.us/categories",
    },
  },

  // ✅ Open Graph
  openGraph: {
    type: "website",
    url: "https://couponsbit.us/categories",
    title: "Couponsbit Categories | Online Coupons by Category USA",
    description:
      "Browse online coupons by category on Couponsbit. Shop deals across Fashion, Electronics, Travel, Beauty, Health, Sports, Footwear, Home & Living and more.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Couponsbit – Browse Online Coupons by Category",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Couponsbit Categories | Online Coupons by Category USA",
    description:
      "Browse online coupons by category on Couponsbit. Shop deals across Fashion, Electronics, Travel, Beauty, Health, Sports, Footwear, Home & Living and more.",
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
const categoriesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://couponsbit.us/categories#collectionpage",
      url: "https://couponsbit.us/categories",
      name: "Couponsbit Categories | Online Coupons by Category USA",
      description:
        "Browse online coupons by category on Couponsbit. Shop deals across Fashion, Electronics, Travel, Beauty, Health, Sports, Footwear, Home & Living and more.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/categories#breadcrumb",
      },
      // ✅ Each category listed as a named section — helps Google understand page structure
      hasPart: [
        {
          "@type": "WebPageElement",
          name: "Fashion & Lifestyle Coupons",
          url: "https://couponsbit.us/categories/fashion-lifestyle",
        },
        {
          "@type": "WebPageElement",
          name: "Electronics Coupons",
          url: "https://couponsbit.us/categories/electronics",
        },
        {
          "@type": "WebPageElement",
          name: "Travel Coupons",
          url: "https://couponsbit.us/categories/travel",
        },
        {
          "@type": "WebPageElement",
          name: "Beauty & Personal Care Coupons",
          url: "https://couponsbit.us/categories/beauty-personal-care",
        },
        {
          "@type": "WebPageElement",
          name: "Health & Pharma Coupons",
          url: "https://couponsbit.us/categories/health-pharma",
        },
        {
          "@type": "WebPageElement",
          name: "Sports & Fitness Coupons",
          url: "https://couponsbit.us/categories/sports-fitness",
        },
        {
          "@type": "WebPageElement",
          name: "Footwear Coupons",
          url: "https://couponsbit.us/categories/footwear",
        },
        {
          "@type": "WebPageElement",
          name: "Home & Living Coupons",
          url: "https://couponsbit.us/categories/home-living",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://couponsbit.us/#website",
      url: "https://couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is a trusted coupon website USA shoppers use to find online coupons by category, verified promo codes, and the best deals online.",
      inLanguage: "en-US",
      publisher: {
        "@id": "https://couponsbit.us/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://couponsbit.us/#organization",
      name: "Couponsbit",
      url: "https://couponsbit.us",
      logo: {
        "@type": "ImageObject",
        url: "https://couponsbit.us/logo.png",
        width: 200,
        height: 60,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        availableLanguage: "English",
        areaServed: "US",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://couponsbit.us/categories#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://couponsbit.us",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Categories",
          item: "https://couponsbit.us/categories",
        },
      ],
    },
  ],
};

export default function CategoriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(categoriesSchema),
        }}
      />
      <CategoriesPageContent />
    </>
  );
}