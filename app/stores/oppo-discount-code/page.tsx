import type { Metadata } from "next";
import OppoCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "OPPO Discount Code | Save Up to 45% OFF on Smartphones",
  description:
    "Get the latest OPPO Discount Code and OPPO Voucher to save up to 45% OFF, enjoy up to $950 OFF flagship phones, plus exchange bonuses of up to $60.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/oppo-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/oppo-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/oppo-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/oppo-discount-code",
      "x-default": "https://www.couponsbit.us/stores/oppo-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/oppo-discount-code",
    title: "OPPO Discount Code | Save Up to 45% OFF on Smartphones",
    description:
      "Get the latest OPPO Discount Code and OPPO Voucher to save up to 45% OFF, enjoy up to $950 OFF flagship phones, plus exchange bonuses of up to $60.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784970/oppo-logo_umnpx7.webp",
        width: 1200,
        height: 630,
        alt: "Oppo Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "OPPO Discount Code | Save Up to 45% OFF on Smartphones",
    description:
      "Get the latest OPPO Discount Code and OPPO Voucher to save up to 45% OFF, enjoy up to $950 OFF flagship phones, plus exchange bonuses of up to $60.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784970/oppo-logo_umnpx7.webp"],
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

const oppoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/oppo-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/oppo-discount-code",
      name: "OPPO Discount Code | Save Up to 45% OFF on Smartphones",
      description:
        "Get the latest OPPO Discount Code and OPPO Voucher to save up to 45% OFF, enjoy up to $950 OFF flagship phones, plus exchange bonuses of up to $60.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/oppo-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/oppo-discount-code#offerlist",
      name: "Oppo Coupon Codes & Promo Codes",
      description:
        "Latest verified Oppo coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/oppo-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Oppo Coupon Code",
            description:
              "Latest Oppo coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/oppo-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Oppo",
              url: "https://www.oppo.com/in",
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
      "@id": "https://www.couponsbit.us/stores/oppo-discount-code#breadcrumb",
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
          name: "Oppo Coupons",
          item: "https://www.couponsbit.us/stores/oppo-discount-code",
        },
      ],
    },
  ],
};

export default function OppoStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(oppoSchema),
        }}
      />
      <OppoCouponsContent />
    </>
  );
}