import type { Metadata } from "next";
import ProductsPageContent from "./_components/ProductsPageContent";

export const metadata: Metadata = {
  title: "Couponsbit Products | Discount Coupons & Promo Code Today",
  description:
    "Find discount coupons and promo code today for discount online shopping on Couponsbit. Browse verified deals from Amazon, Flipkart, Nike, Samsung & 2000+ brands.",

  alternates: {
    canonical: "https://couponsbit.us/products",
    languages: {
      "en-US": "https://couponsbit.us/products",
      "x-default": "https://couponsbit.us/products",
    },
  },

  // ✅ Open Graph
  openGraph: {
    type: "website",
    url: "https://couponsbit.us/products",
    title: "Couponsbit Products | Discount Coupons & Promo Code Today",
    description:
      "Find discount coupons and promo code today for discount online shopping on Couponsbit. Browse verified deals from Amazon, Flipkart, Nike, Samsung & 2000+ brands.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Couponsbit Products – Discount Coupons & Promo Code Today",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Couponsbit Products | Discount Coupons & Promo Code Today",
    description:
      "Find discount coupons and promo code today for discount online shopping on Couponsbit. Browse verified deals from Amazon, Flipkart, Nike, Samsung & 2000+ brands.",
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
const productsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      // ✅ CollectionPage — parent brand listing page
      "@type": "CollectionPage",
      "@id": "https://couponsbit.us/products#collectionpage",
      url: "https://couponsbit.us/products",
      name: "Couponsbit Products | Discount Coupons & Promo Code Today",
      description:
        "Find discount coupons and promo code today for discount online shopping on Couponsbit. Browse verified deals from Amazon, Flipkart, Nike, Samsung & 2000+ brands.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/products#breadcrumb",
      },
      // ✅ ItemList — each brand listed as a named item
      // This is the key schema for a brand directory page
      mainEntity: {
        "@type": "ItemList",
        name: "Top Brands with Discount Coupons & Promo Codes Today",
        description:
          "Browse discount coupons and promo code today from top brands for discount online shopping on Couponsbit.",
        url: "https://couponsbit.us/products",
        numberOfItems: 2000,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Amazon Discount Coupons",
            url: "https://couponsbit.us/products/amazon",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Flipkart Promo Code Today",
            url: "https://couponsbit.us/products/flipkart",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Nike Discount Coupons",
            url: "https://couponsbit.us/products/nike",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Adidas Promo Code Today",
            url: "https://couponsbit.us/products/adidas",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Samsung Discount Online Shopping",
            url: "https://couponsbit.us/products/samsung",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Myntra Discount Coupons",
            url: "https://couponsbit.us/products/myntra",
          },
          {
            "@type": "ListItem",
            position: 7,
            name: "Puma Promo Code Today",
            url: "https://couponsbit.us/products/puma",
          },
          {
            "@type": "ListItem",
            position: 8,
            name: "Nykaa Discount Online Shopping",
            url: "https://couponsbit.us/products/nykaa",
          },
          {
            "@type": "ListItem",
            position: 9,
            name: "Tata Cliq Discount Coupons",
            url: "https://couponsbit.us/products/tata-cliq",
          },
          {
            "@type": "ListItem",
            position: 10,
            name: "OnePlus Promo Code Today",
            url: "https://couponsbit.us/products/oneplus",
          },
          // ✅ Add remaining brands here following the same pattern
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://couponsbit.us/#website",
      url: "https://couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit offers verified discount coupons, promo code today deals, and discount online shopping offers from 2000+ top brands worldwide.",
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
      "@id": "https://couponsbit.us/products#breadcrumb",
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
          name: "Products",
          item: "https://couponsbit.us/products",
        },
      ],
    },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productsSchema),
        }}
      />
      <ProductsPageContent />
    </>
  );
}