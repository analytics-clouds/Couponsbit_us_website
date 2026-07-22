import type { Metadata } from "next";
import UltahostCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "UltaHost Discount Code | Save Up to 62% OFF Hosting Plans",
  description:
    "Get the latest UltaHost Discount Code and UltaHost Voucher to save up to 62% OFF game, VPS, shared, Windows, and dedicated hosting plans.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/ultahost-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/ultahost-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/ultahost-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/ultahost-discount-code",
      "x-default": "https://www.couponsbit.us/stores/ultahost-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/ultahost-discount-code",
    title: "UltaHost Discount Code | Save Up to 62% OFF Hosting Plans",
    description:
      "Get the latest UltaHost Discount Code and UltaHost Voucher to save up to 62% OFF game, VPS, shared, Windows, and dedicated hosting plans.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699425/ultahost-logo_zsnpu7.webp",
        width: 1200,
        height: 630,
        alt: "UltaHost Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "UltaHost Discount Code | Save Up to 62% OFF Hosting Plans",
    description:
      "Get the latest UltaHost Discount Code and UltaHost Voucher to save up to 62% OFF game, VPS, shared, Windows, and dedicated hosting plans.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699425/ultahost-logo_zsnpu7.webp"],
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

const ultahostSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/ultahost-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/ultahost-discount-code",
      name: "UltaHost Discount Code | Save Up to 62% OFF Hosting Plans",
      description:
        "Get the latest UltaHost Discount Code and UltaHost Voucher to save up to 62% OFF game, VPS, shared, Windows, and dedicated hosting plans.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/ultahost-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/ultahost-discount-code#offerlist",
      name: "UltaHost Coupon Codes & Promo Codes",
      description:
        "Latest verified UltaHost coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/ultahost-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "UltaHost Coupon Code",
            description:
              "Latest UltaHost coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/ultahost-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "UltaHost",
              url: "https://ultahost.com",
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
      "@id": "https://www.couponsbit.us/stores/ultahost-discount-code#breadcrumb",
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
          name: "UltaHost Coupons",
          item: "https://www.couponsbit.us/stores/ultahost-discount-code",
        },
      ],
    },
  ],
};

export default function UltahostStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ultahostSchema),
        }}
      />
      <UltahostCouponsContent />
    </>
  );
}