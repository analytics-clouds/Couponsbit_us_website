import type { Metadata } from "next";
import HomeLifestyleCouponsContent from "./_components/HomeLifestyleCouponsContent";

export const metadata: Metadata = {
  title: "Home & Lifestyle Discount Codes & Promo Codes – Verified Deals | Sep 2026",
  description:
    "Find verified home & lifestyle discount codes and promo codes for Sep 2026. Save on furniture, home décor, kitchenware, bedding, appliances, and more with the latest home & lifestyle deals and discounts at Couponsbit.",

  alternates: {
    canonical: "https://www.couponsbit.us/categories/home",
    languages: {
      "en-US": "https://www.couponsbit.us/categories/home",
      "x-default": "https://www.couponsbit.us/categories/home",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/categories/home",
    title: "Home & Lifestyle Discount Codes & Promo Codes – Verified Deals | Sep 2026",
    description:
      "Find verified home & lifestyle discount codes and promo codes for Sep 2026. Save on furniture, home décor, kitchenware, bedding, appliances, and more with the latest home & lifestyle deals and discounts at Couponsbit.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://www.couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Home & Lifestyle Coupon Codes & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Home & Lifestyle Discount Codes & Promo Codes – Verified Deals | Sep 2026",
    description:
      "Find verified home & lifestyle discount codes and promo codes for Sep 2026. Save on furniture, home décor, kitchenware, bedding, appliances, and more with the latest home & lifestyle deals and discounts at Couponsbit.",
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

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.couponsbit.us/categories/home#webpage",
      url: "https://www.couponsbit.us/categories/home",
      name: "Home & Lifestyle Discount Codes & Promo Codes – Verified Deals | Sep 2026",
      description:
        "Find verified home & lifestyle discount codes and promo codes for Sep 2026. Save on furniture, home décor, kitchenware, bedding, appliances, and more with the latest home & lifestyle deals and discounts at Couponsbit.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/categories/home#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/categories/home#storelist",
      name: "Home & Lifestyle Stores – Coupon Codes & Promo Codes",
      description: "Verified coupon codes and promo codes for top home & lifestyle stores.",
      url: "https://www.couponsbit.us/categories/home",
      numberOfItems: 0,
      itemListOrder: "https://schema.org/ItemListUnordered",
      itemListElement: [],
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
      "@id": "https://www.couponsbit.us/categories/home#breadcrumb",
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
          name: "Home & Lifestyle",
          item: "https://www.couponsbit.us/categories/home",
        },
      ],
    },
  ],
};

export default function HomeLifestyleCategoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema),
        }}
      />
      <HomeLifestyleCouponsContent />
    </>
  );
}
