import type { Metadata } from "next";
import BudgetCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Budget Coupon Codes – Save on Car Rentals",
  description:
    "Get verified Budget car rental coupon codes and promo codes. Save on daily, weekly, weekend, and one-way car rentals with regularly updated discount offers.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/budget-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/budget-discount-code",
      "x-default": "https://www.couponsbit.us/stores/budget-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/budget-discount-code",
    title: "Budget Coupon Codes – Save on Car Rentals",
    description:
      "Get verified Budget car rental coupon codes and promo codes. Save on daily, weekly, weekend, and one-way car rentals with regularly updated discount offers.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/budget-logo_pv0qhg.webp",
        width: 1200,
        height: 630,
        alt: "Budget Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Budget Coupon Codes – Save on Car Rentals",
    description:
      "Get verified Budget car rental coupon codes and promo codes. Save on daily, weekly, weekend, and one-way car rentals with regularly updated discount offers.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1784618847/budget-logo_pv0qhg.webp"],
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

const budgetSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/budget-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/budget-discount-code",
      name: "Budget Coupon Codes – Save on Car Rentals",
      description:
        "Get verified Budget car rental coupon codes and promo codes. Save on daily, weekly, weekend, and one-way car rentals with regularly updated discount offers.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/budget-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/budget-discount-code#offerlist",
      name: "Budget Coupon Codes & Promo Codes",
      description:
        "Latest verified Budget coupon codes, promo codes and discount codes for car rentals.",
      url: "https://www.couponsbit.us/stores/budget-discount-code",
      numberOfItems: 8,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Budget Coupon Code",
            description:
              "Latest Budget coupon code for car rental discounts.",
            url: "https://www.couponsbit.us/stores/budget-discount-code",
            seller: {
              "@type": "Organization",
              name: "Budget",
              url: "https://www.budget.com",
            },
          },
        },
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
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/budget-discount-code#breadcrumb",
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
          name: "Budget Coupons",
          item: "https://www.couponsbit.us/stores/budget-discount-code",
        },
      ],
    },
  ],
};

export default function BudgetStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(budgetSchema),
        }}
      />
      <BudgetCouponsContent />
    </>
  );
}
