import type { Metadata } from "next";
import RingconnCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "RingConn Discount Code | Smart Rings Starting From $199",
  description:
    "Save with the latest RingConn Discount Code and RingConn Voucher. Shop smart rings starting from $199, enjoy advanced health tracking, and claim exclusive limited-time offers.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/ringconn-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/ringconn-discount-code",
      "x-default": "https://www.couponsbit.us/stores/ringconn-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/ringconn-discount-code",
    title: "RingConn Discount Code | Smart Rings Starting From $199",
    description:
      "Save with the latest RingConn Discount Code and RingConn Voucher. Shop smart rings starting from $199, enjoy advanced health tracking, and claim exclusive limited-time offers.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/ringconn-logo_y95vtu.webp",
        width: 1200,
        height: 630,
        alt: "RingConn Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RingConn Discount Code | Smart Rings Starting From $199",
    description:
      "Save with the latest RingConn Discount Code and RingConn Voucher. Shop smart rings starting from $199, enjoy advanced health tracking, and claim exclusive limited-time offers.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1784618847/ringconn-logo_y95vtu.webp"],
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

const ringconnSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/ringconn-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/ringconn-discount-code",
      name: "RingConn Discount Code | Smart Rings Starting From $199",
      description:
        "Save with the latest RingConn Discount Code and RingConn Voucher. Shop smart rings starting from $199, enjoy advanced health tracking, and claim exclusive limited-time offers.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/ringconn-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/ringconn-discount-code#offerlist",
      name: "RingConn Coupon Codes & Promo Codes",
      description:
        "Latest verified RingConn coupon codes, promo codes and discount codes for smart rings and accessories.",
      url: "https://www.couponsbit.us/stores/ringconn-discount-code",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "RingConn Coupon Code",
            description:
              "Latest RingConn coupon code for smart ring and accessory discounts.",
            url: "https://www.couponsbit.us/stores/ringconn-discount-code",
            seller: {
              "@type": "Organization",
              name: "RingConn",
              url: "https://ringconn.com",
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
      "@id": "https://www.couponsbit.us/stores/ringconn-discount-code#breadcrumb",
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
          name: "RingConn Coupons",
          item: "https://www.couponsbit.us/stores/ringconn-discount-code",
        },
      ],
    },
  ],
};

export default function RingconnStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ringconnSchema),
        }}
      />
      <RingconnCouponsContent />
    </>
  );
}
