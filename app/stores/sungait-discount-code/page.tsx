import type { Metadata } from "next";
import SungaitCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "SUNGAIT Discount Code | 50% OFF + Extra 15% OFF on Sunglasses",
  description:
    "Get the latest SUNGAIT Discount Code and SUNGAIT Voucher to save 50% OFF, enjoy 15% OFF orders over $55, and shop sunglasses from $14.99.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/sungait-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/sungait-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/sungait-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/sungait-discount-code",
      "x-default": "https://www.couponsbit.us/stores/sungait-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/sungait-discount-code",
    title: "SUNGAIT Discount Code | 50% OFF + Extra 15% OFF on Sunglasses",
    description:
      "Get the latest SUNGAIT Discount Code and SUNGAIT Voucher to save 50% OFF, enjoy 15% OFF orders over $55, and shop sunglasses from $14.99.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1785130842/sungait-logo_tfolql.webp",
        width: 1200,
        height: 630,
        alt: "Sungait Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SUNGAIT Discount Code | 50% OFF + Extra 15% OFF on Sunglasses",
    description:
      "Get the latest SUNGAIT Discount Code and SUNGAIT Voucher to save 50% OFF, enjoy 15% OFF orders over $55, and shop sunglasses from $14.99.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1785130842/sungait-logo_tfolql.webp"],
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

const sungaitSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/sungait-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/sungait-discount-code",
      name: "SUNGAIT Discount Code | 50% OFF + Extra 15% OFF on Sunglasses",
      description:
        "Get the latest SUNGAIT Discount Code and SUNGAIT Voucher to save 50% OFF, enjoy 15% OFF orders over $55, and shop sunglasses from $14.99.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/sungait-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/sungait-discount-code#offerlist",
      name: "Sungait Coupon Codes & Promo Codes",
      description:
        "Latest verified Sungait coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/sungait-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Sungait Coupon Code",
            description:
              "Latest Sungait coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/sungait-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Sungait",
              url: "https://www.sungait.com",
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
      "@id": "https://www.couponsbit.us/stores/sungait-discount-code#breadcrumb",
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
          name: "Sungait Coupons",
          item: "https://www.couponsbit.us/stores/sungait-discount-code",
        },
      ],
    },
  ],
};

export default function SungaitStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sungaitSchema),
        }}
      />
      <SungaitCouponsContent />
    </>
  );
}