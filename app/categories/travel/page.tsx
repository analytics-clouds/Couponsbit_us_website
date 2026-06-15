import type { Metadata } from "next";
import TravelCouponsContent from "./_components/TravelCouponsContent";

export const metadata: Metadata = {
  title: "Travel Promo Codes & Flight Coupon Codes – Hotel Deals 2026",
  description:
    "Find verified travel promo codes & flight coupon codes for flights, hotels & vacation packages. Best hotel deals online on LATAM Airlines & more with Couponsbit.",

  alternates: {
    canonical: "https://couponsbit.us/categories/travel",
    languages: {
      "en-US": "https://couponsbit.us/categories/travel",
      "x-default": "https://couponsbit.us/categories/travel",
    },
  },

  openGraph: {
    type: "website",
    url: "https://couponsbit.us/categories/travel",
    title: "Travel Promo Codes & Flight Coupon Codes – Hotel Deals 2026",
    description:
      "Find verified travel promo codes & flight coupon codes for flights, hotels & vacation packages. Best hotel deals online on LATAM Airlines & more with Couponsbit.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Travel Promo Codes & Flight Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Travel Promo Codes & Flight Coupon Codes – Hotel Deals 2026",
    description:
      "Find verified travel promo codes & flight coupon codes for flights, hotels & vacation packages. Best hotel deals online on LATAM Airlines & more with Couponsbit.",
    images: ["https://couponsbit.us/og-image.png"],
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

const travelSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://couponsbit.us/categories/travel#webpage",
      url: "https://couponsbit.us/categories/travel",
      name: "Travel Promo Codes & Flight Coupon Codes – Hotel Deals 2026",
      description:
        "Find verified travel promo codes & flight coupon codes for flights, hotels & vacation packages. Best hotel deals online on LATAM Airlines & more with Couponsbit.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/categories/travel#breadcrumb",
      },
    },

    // ✅ ItemList — travel stores in this category
    {
      "@type": "ItemList",
      "@id": "https://couponsbit.us/categories/travel#storelist",
      name: "Travel Stores – Promo Codes & Flight Coupon Codes",
      description:
        "Verified travel promo codes, flight coupon codes and hotel deals online for top travel brands including LATAM Airlines.",
      url: "https://couponsbit.us/categories/travel",
      numberOfItems: 1,
      itemListOrder: "https://schema.org/ItemListUnordered",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "WebPage",
            name: "LATAM Airlines Coupon Codes",
            url: "https://couponsbit.us/stores/latam-airlines",
          },
        },
        // ← add more travel stores here as you onboard them
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://couponsbit.us/#website",
      url: "https://couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is one of the best coupon websites offering verified coupons, deals, and coupon help for top brands worldwide.",
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
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://couponsbit.us/categories/travel#breadcrumb",
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Travel",
          item: "https://couponsbit.us/categories/travel",
        },
      ],
    },
  ],
};

export default function TravelCategoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(travelSchema),
        }}
      />
      <TravelCouponsContent />
    </>
  );
}