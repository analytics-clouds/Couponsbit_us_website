import type { Metadata } from "next";
import Factor75CouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Save $130 + Free Breakfast | Factor75 Coupon Code",
  description:
    "Get the latest Factor75 Coupon Code and save up to $130 on meal plans. Plus, enjoy FREE Breakfast for 1 Year with eligible subscriptions.",

  alternates: {
    canonical: "https://couponsbit.us/stores/factor75-coupon-code",
    languages: {
      "en-US": "https://couponsbit.us/stores/factor75-coupon-code",
      "x-default": "https://couponsbit.us/stores/factor75-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://couponsbit.us/stores/factor75-coupon-code",
    title: "Save $130 + Free Breakfast | Factor75 Coupon Code",
    description:
      "Get the latest Factor75 Coupon Code and save up to $130 on meal plans. Plus, enjoy FREE Breakfast for 1 Year with eligible subscriptions.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/factor75-coupon-code_a7lrym.webp",
        width: 1200,
        height: 630,
        alt: "Factor75 Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Save $130 + Free Breakfast | Factor75 Coupon Code",
    description:
      "Get the latest Factor75 Coupon Code and save up to $130 on meal plans. Plus, enjoy FREE Breakfast for 1 Year with eligible subscriptions.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782288848/factor75-coupon-code_a7lrym.webp"],
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

const factor75Schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://couponsbit.us/stores/factor75-coupon-code#webpage",
      url: "https://couponsbit.us/stores/factor75-coupon-code",
      name: "Save $130 + Free Breakfast | Factor75 Coupon Code",
      description:
        "Get the latest Factor75 Coupon Code and save up to $130 on meal plans. Plus, enjoy FREE Breakfast for 1 Year with eligible subscriptions.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/stores/factor75-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://couponsbit.us/stores/factor75-coupon-code#offerlist",
      name: "Factor75 Coupon Codes & Promo Codes",
      description:
        "Latest verified Factor75 coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://couponsbit.us/stores/factor75-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Factor75 Coupon Code",
            description:
              "Latest Factor75 coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://couponsbit.us/stores/factor75-coupon-code",
            seller: {
              "@type": "Organization",
              name: "Factor75",
              url: "https://www.bluehost.com",
            },
          },
        },
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
      "@id": "https://couponsbit.us/stores/factor75-coupon-code#breadcrumb",
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
          name: "Stores",
          item: "https://couponsbit.us/stores",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Factor75 Coupons",
          item: "https://couponsbit.us/stores/factor75-coupon-code",
        },
      ],
    },
  ],
};

export default function Factor75StorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(factor75Schema),
        }}
      />
      <Factor75CouponsContent />
    </>
  );
}