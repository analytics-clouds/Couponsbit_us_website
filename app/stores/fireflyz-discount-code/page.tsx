import type { Metadata } from "next";
import FireflyzCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Fireflyz Discount Code | Save Up to 60% on Flight Deals",
  description:
    "Get the latest Fireflyz Discount Code and Fireflyz Voucher to save up to 60% on flights, extra baggage, student fares, hotel rewards, and travel offers.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/fireflyz-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/fireflyz-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/fireflyz-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/fireflyz-discount-code",
      "x-default": "https://www.couponsbit.us/stores/fireflyz-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/fireflyz-discount-code",
    title: "Fireflyz Discount Code | Save Up to 60% on Flight Deals",
    description:
      "Get the latest Fireflyz Discount Code and Fireflyz Voucher to save up to 60% on flights, extra baggage, student fares, hotel rewards, and travel offers.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784971/firefly-logo_ju6n0p.webp",
        width: 1200,
        height: 630,
        alt: "Fireflyz Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fireflyz Discount Code | Save Up to 60% on Flight Deals",
    description:
      "Get the latest Fireflyz Discount Code and Fireflyz Voucher to save up to 60% on flights, extra baggage, student fares, hotel rewards, and travel offers.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784971/firefly-logo_ju6n0p.webp"],
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

const fireflyzSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/fireflyz-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/fireflyz-discount-code",
      name: "Fireflyz Discount Code | Save Up to 60% on Flight Deals",
      description:
        "Get the latest Fireflyz Discount Code and Fireflyz Voucher to save up to 60% on flights, extra baggage, student fares, hotel rewards, and travel offers.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/fireflyz-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/fireflyz-discount-code#offerlist",
      name: "Fireflyz Coupon Codes & Promo Codes",
      description:
        "Latest verified Fireflyz coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/fireflyz-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Fireflyz Coupon Code",
            description:
              "Latest Fireflyz coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/fireflyz-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Fireflyz",
              url: "https://www.fireflyz.com.my",
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
      "@id": "https://www.couponsbit.us/stores/fireflyz-discount-code#breadcrumb",
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
          name: "Fireflyz Coupons",
          item: "https://www.couponsbit.us/stores/fireflyz-discount-code",
        },
      ],
    },
  ],
};

export default function FireflyzStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fireflyzSchema),
        }}
      />
      <FireflyzCouponsContent />
    </>
  );
}