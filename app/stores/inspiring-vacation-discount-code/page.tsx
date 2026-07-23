import type { Metadata } from "next";
import InspiringVacationCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Inspiring Vacations Discount Code | Save Up to 50% OFF",
  description:
    "Find the latest Inspiring Vacations Discount Code and Inspiring Vacations Voucher to save up to 50% OFF on guided tours, cruises, and holiday packages worldwide.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/inspiring-vacation-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/inspiring-vacation-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/inspiring-vacation-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/inspiring-vacation-discount-code",
      "x-default": "https://www.couponsbit.us/stores/inspiring-vacation-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/inspiring-vacation-discount-code",
    title: "Inspiring Vacations Discount Code | Save Up to 50% OFF",
    description:
      "Find the latest Inspiring Vacations Discount Code and Inspiring Vacations Voucher to save up to 50% OFF on guided tours, cruises, and holiday packages worldwide.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784971/inspiring-vacation-logo_mokiew.webp",
        width: 1200,
        height: 630,
        alt: "Inspiring Vacation Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Inspiring Vacations Discount Code | Save Up to 50% OFF",
    description:
      "Find the latest Inspiring Vacations Discount Code and Inspiring Vacations Voucher to save up to 50% OFF on guided tours, cruises, and holiday packages worldwide.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784971/inspiring-vacation-logo_mokiew.webp"],
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

const inspiringVacationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/inspiring-vacation-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/inspiring-vacation-discount-code",
      name: "Inspiring Vacations Discount Code | Save Up to 50% OFF",
      description:
        "Find the latest Inspiring Vacations Discount Code and Inspiring Vacations Voucher to save up to 50% OFF on guided tours, cruises, and holiday packages worldwide.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/inspiring-vacation-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/inspiring-vacation-discount-code#offerlist",
      name: "Inspiring Vacation Coupon Codes & Promo Codes",
      description:
        "Latest verified Inspiring Vacation coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/inspiring-vacation-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Inspiring Vacation Coupon Code",
            description:
              "Latest Inspiring Vacation coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/inspiring-vacation-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Inspiring Vacation",
              url: "https://www.inspiringvacations.com",
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
      "@id": "https://www.couponsbit.us/stores/inspiring-vacation-discount-code#breadcrumb",
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
          name: "Inspiring Vacation Coupons",
          item: "https://www.couponsbit.us/stores/inspiring-vacation-discount-code",
        },
      ],
    },
  ],
};

export default function InspiringVacationStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(inspiringVacationSchema),
        }}
      />
      <InspiringVacationCouponsContent />
    </>
  );
}