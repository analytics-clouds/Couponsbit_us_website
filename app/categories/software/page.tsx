import type { Metadata } from "next";
import SoftwareCouponsContent from "./_components/SoftwareCouponsContent";

export const metadata: Metadata = {
  title: "Software Promo Codes & Software Coupon Codes – Tech Deals 2026",
  description:
    "Find verified software promo codes & software coupon codes for game keys, web hosting, creative assets & AI tools. Best tech software deals on Driffle, Bluehost, Envato Elements, Sintra & more.",

  alternates: {
    canonical: "https://www.couponsbit.us/categories/software",
    languages: {
      "en-US": "https://www.couponsbit.us/categories/software",
      "x-default": "https://www.couponsbit.us/categories/software",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/categories/software",
    title: "Software Promo Codes & Software Coupon Codes – Tech Deals 2026",
    description:
      "Find verified software promo codes & software coupon codes for game keys, web hosting, creative assets & AI tools. Best tech software deals on Driffle, Bluehost, Envato Elements, Sintra & more.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://www.couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Software Promo Codes & Software Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Software Promo Codes & Software Coupon Codes – Tech Deals 2026",
    description:
      "Find verified software promo codes & software coupon codes for game keys, web hosting, creative assets & AI tools. Best tech software deals on Driffle, Bluehost, Envato Elements, Sintra & more.",
    images: ["https://www.couponsbit.us/og-image.png"],
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
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.couponsbit.us/categories/software#webpage",
      url: "https://www.couponsbit.us/categories/software",
      name: "Software Promo Codes & Software Coupon Codes – Tech Deals 2026",
      description:
        "Find verified software promo codes & software coupon codes for game keys, web hosting, creative assets & AI tools. Best tech software deals on Driffle, Bluehost, Envato Elements, Sintra & more.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/categories/software#breadcrumb",
      },
    },

    // ✅ ItemList — all software stores in this category
    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/categories/software#storelist",
      name: "Software & Digital Stores – Promo Codes & Coupon Codes",
      description:
        "Verified software promo codes and coupon codes for top tech software stores including Driffle, Bluehost, Envato Elements and Sintra.",
      url: "https://www.couponsbit.us/categories/software",
      numberOfItems: 4,
      itemListOrder: "https://schema.org/ItemListUnordered",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "WebPage",
            name: "Driffle Coupon Codes",
            url: "https://www.couponsbit.us/stores/driffle-coupon-code",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "WebPage",
            name: "Bluehost Coupon Codes",
            url: "https://www.couponsbit.us/stores/bluehost-coupon-code",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "WebPage",
            name: "Envato Elements Coupon Codes",
            url: "https://www.couponsbit.us/stores/envato-elements-coupon-code",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "WebPage",
            name: "Sintra Coupon Codes",
            url: "https://www.couponsbit.us/stores/sintra-coupon-code",
          },
        },
        // ← add more software stores here as you onboard them
      ],
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
        url: "https://www.couponsbit.us/logo.png",
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
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/categories/software#breadcrumb",
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
          name: "Categories",
          item: "https://www.couponsbit.us/categories",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Software & Digital",
          item: "https://www.couponsbit.us/categories/software",
        },
      ],
    },
  ],
};

export default function SoftwareCategoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <SoftwareCouponsContent />
    </>
  );
}