import type { Metadata } from "next";
import DoorDashCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "DoorDash Promo Code: 30% Off + $0 Delivery | Aug 2026",
  description:
    "Find the latest DoorDash promo codes and coupons for August 2026. Save 30% on eligible orders, get $0 delivery fees on your first order, $15 off select wine, $6 off $40+ orders, and more deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/doordash-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/doordash-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/doordash-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/doordash-promo-code",
      "x-default": "https://www.couponsbit.us/stores/doordash-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/doordash-promo-code",
    title: "DoorDash Promo Code: 30% Off + $0 Delivery | Aug 2026",
    description:
      "Find the latest DoorDash promo codes and coupons for August 2026. Save 30% on eligible orders, get $0 delivery fees on your first order, $15 off select wine, $6 off $40+ orders, and more deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/doordash-logo_pjyf0k.webp",
        width: 1200,
        height: 630,
        alt: "DoorDash Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DoorDash Promo Code: 30% Off + $0 Delivery | Aug 2026",
    description:
      "Find the latest DoorDash promo codes and coupons for August 2026. Save 30% on eligible orders, get $0 delivery fees on your first order, $15 off select wine, $6 off $40+ orders, and more deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/doordash-logo_pjyf0k.webp"],
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

const doorDashSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/doordash-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/doordash-promo-code",
      name: "DoorDash Promo Code: 30% Off + $0 Delivery | Aug 2026",
      description:
        "Find the latest DoorDash promo codes and coupons for August 2026. Save 30% on eligible orders, get $0 delivery fees on your first order, $15 off select wine, $6 off $40+ orders, and more deals.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/doordash-promo-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/doordash-promo-code#offerlist",
      name: "DoorDash Coupon Codes & Promo Codes",
      description:
        "Latest verified DoorDash coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/doordash-promo-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "DoorDash Coupon Code",
            description:
              "Latest DoorDash coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/doordash-promo-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "DoorDash",
              url: "https://www.doordash.com",
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
      "@id": "https://www.couponsbit.us/stores/doordash-promo-code#breadcrumb",
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
          name: "DoorDash Coupons",
          item: "https://www.couponsbit.us/stores/doordash-promo-code",
        },
      ],
    },
  ],
};

export default function DoorDashStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(doorDashSchema),
        }}
      />
      <DoorDashCouponsContent />
    </>
  );
}