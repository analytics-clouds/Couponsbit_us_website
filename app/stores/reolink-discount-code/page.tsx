import type { Metadata } from "next";
import ReolinkCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Reolink Discount Code: Up to 50% Off Security Cameras | August 2026",
  description:
    "Save up to 50% with the latest Reolink discount code — August 2026. Score $450 off the RLK16 system, TrackFlex Floodlight at $338.99 & Duo 3 PoE at $238.76. Verified security camera deals updated daily.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/reolink-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/reolink-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/reolink-discount-code",
      "x-default": "https://www.couponsbit.us/stores/reolink-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/reolink-discount-code",
    title: "Reolink Discount Code: Up to 50% Off Security Cameras | August 2026",
    description:
      "Save up to 50% with the latest Reolink discount code — August 2026. Score $450 off the RLK16 system, TrackFlex Floodlight at $338.99 & Duo 3 PoE at $238.76. Verified security camera deals updated daily.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/reolink-coupon-code_zsrmh1.webp",
        width: 1200,
        height: 630,
        alt: "Reolink Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Reolink Discount Code: Up to 50% Off Security Cameras | August 2026",
    description:
      "Save up to 50% with the latest Reolink discount code — August 2026. Score $450 off the RLK16 system, TrackFlex Floodlight at $338.99 & Duo 3 PoE at $238.76. Verified security camera deals updated daily.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1781775924/reolink-coupon-code_zsrmh1.webp"],
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

const reolinkSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/reolink-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/reolink-discount-code",
      name: "Reolink Discount Code: Up to 50% Off Security Cameras | August 2026",
      description:
        "Save up to 50% with the latest Reolink discount code — August 2026. Score $450 off the RLK16 system, TrackFlex Floodlight at $338.99 & Duo 3 PoE at $238.76. Verified security camera deals updated daily.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/reolink-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/reolink-discount-code#offerlist",
      name: "Reolink Coupon Codes & Promo Codes",
      description:
        "Latest verified Reolink coupon codes, promo codes and discount codes for security cameras and smart home devices.",
      url: "https://www.couponsbit.us/stores/reolink-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Reolink Coupon Code",
            description:
              "Latest Reolink coupon code for security cameras and smart home device discounts.",
            url: "https://www.couponsbit.us/stores/reolink-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
            ],
            seller: {
              "@type": "Organization",
              name: "Reolink",
              url: "https://reolink.com",
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
      "@id": "https://www.couponsbit.us/stores/reolink-discount-code#breadcrumb",
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
          name: "Reolink Coupons",
          item: "https://www.couponsbit.us/stores/reolink-discount-code",
        },
      ],
    },
  ],
};

export default function ReolinkStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reolinkSchema),
        }}
      />
      <ReolinkCouponsContent />
    </>
  );
}