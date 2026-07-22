import type { Metadata } from "next";
import GeekbuyingCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Geekbuying Discount Code | Save Up to 56% OFF Tech Deals",
  description:
    "Use the latest Geekbuying Discount Code and Geekbuying Voucher to save up to 56% OFF on electronics, scooters, tablets, charging accessories, and more.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/geekbuying-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/geekbuying-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/geekbuying-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/geekbuying-discount-code",
      "x-default": "https://www.couponsbit.us/stores/geekbuying-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/geekbuying-discount-code",
    title: "Geekbuying Discount Code | Save Up to 56% OFF Tech Deals",
    description:
      "Use the latest Geekbuying Discount Code and Geekbuying Voucher to save up to 56% OFF on electronics, scooters, tablets, charging accessories, and more.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784707355/geekbuying-logo_pnkeev.webp",
        width: 1200,
        height: 630,
        alt: "Geekbuying Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Geekbuying Discount Code | Save Up to 56% OFF Tech Deals",
    description:
      "Use the latest Geekbuying Discount Code and Geekbuying Voucher to save up to 56% OFF on electronics, scooters, tablets, charging accessories, and more.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784707355/geekbuying-logo_pnkeev.webp"],
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

const geekbuyingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/geekbuying-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/geekbuying-discount-code",
      name: "Geekbuying Discount Code | Save Up to 56% OFF Tech Deals",
      description:
        "Use the latest Geekbuying Discount Code and Geekbuying Voucher to save up to 56% OFF on electronics, scooters, tablets, charging accessories, and more.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/geekbuying-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/geekbuying-discount-code#offerlist",
      name: "Geekbuying Coupon Codes & Promo Codes",
      description:
        "Latest verified Geekbuying coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/geekbuying-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Geekbuying Coupon Code",
            description:
              "Latest Geekbuying coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/geekbuying-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Geekbuying",
              url: "https://www.geekbuying.com",
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
      "@id": "https://www.couponsbit.us/stores/geekbuying-discount-code#breadcrumb",
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
          name: "Geekbuying Coupons",
          item: "https://www.couponsbit.us/stores/geekbuying-discount-code",
        },
      ],
    },
  ],
};

export default function GeekbuyingStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(geekbuyingSchema),
        }}
      />
      <GeekbuyingCouponsContent />
    </>
  );
}