import type { Metadata } from "next";
import EntertainmentCouponsContent from "./_components/EntertainmentCouponsContent";

export const metadata: Metadata = {
  title: "Entertainment Coupon Codes & Event Ticket Promo Codes 2026",
  description:
    "Find verified entertainment coupon codes & event ticket promo codes for concerts, sports & live shows. Best concert & ticket deals on StubHub, Viagogo & more.",

  alternates: {
    canonical: "https://www.couponsbit.us/categories/entertainment",
    languages: {
      "en-US": "https://www.couponsbit.us/categories/entertainment",
      "x-default": "https://www.couponsbit.us/categories/entertainment",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/categories/entertainment",
    title: "Entertainment Coupon Codes & Event Ticket Promo Codes 2026",
    description:
      "Find verified entertainment coupon codes & event ticket promo codes for concerts, sports & live shows. Best concert & ticket deals on StubHub, Viagogo & more.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://www.couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Entertainment Coupon Codes & Event Ticket Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Entertainment Coupon Codes & Event Ticket Promo Codes 2026",
    description:
      "Find verified entertainment coupon codes & event ticket promo codes for concerts, sports & live shows. Best concert & ticket deals on StubHub, Viagogo & more.",
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

const entertainmentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.couponsbit.us/categories/entertainment#webpage",
      url: "https://www.couponsbit.us/categories/entertainment",
      name: "Entertainment Coupon Codes & Event Ticket Promo Codes 2026",
      description:
        "Find verified entertainment coupon codes & event ticket promo codes for concerts, sports & live shows. Best concert & ticket deals on StubHub, Viagogo & more.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/categories/entertainment#breadcrumb",
      },
    },

    // ✅ ItemList — entertainment stores in this category
    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/categories/entertainment#storelist",
      name: "Entertainment Stores – Coupon Codes & Event Ticket Promo Codes",
      description:
        "Verified coupon codes and event ticket promo codes for top entertainment stores including StubHub, Viagogo and more.",
      url: "https://www.couponsbit.us/categories/entertainment",
      numberOfItems: 2,
      itemListOrder: "https://schema.org/ItemListUnordered",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "WebPage",
            name: "StubHub Coupon Codes",
            url: "https://www.couponsbit.us/stores/stubhub-coupon-code",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "WebPage",
            name: "Viagogo Coupon Codes",
            url: "https://www.couponsbit.us/stores/viagogo-coupon-code",
          },
        },
        // ← add more entertainment stores here as you onboard them
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
      "@id": "https://www.couponsbit.us/categories/entertainment#breadcrumb",
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
          name: "Entertainment",
          item: "https://www.couponsbit.us/categories/entertainment",
        },
      ],
    },
  ],
};

export default function EntertainmentCategoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(entertainmentSchema),
        }}
      />
      <EntertainmentCouponsContent />
    </>
  );
}