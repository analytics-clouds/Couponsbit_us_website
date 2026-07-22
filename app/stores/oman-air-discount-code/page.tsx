import type { Metadata } from "next";
import OmanAirCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Oman Air Discount Code | Get Up to 50% OFF on Flight Deals",
  description:
    "Save more with the latest Oman Air Discount Code and Oman Air Voucher. Enjoy up to 50% OFF flight bookings, Flat 25% OFF selected flights, and fares starting from just $149.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/oman-air-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/oman-air-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/oman-air-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/oman-air-discount-code",
      "x-default": "https://www.couponsbit.us/stores/oman-air-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/oman-air-discount-code",
    title: "Oman Air Discount Code | Get Up to 50% OFF on Flight Deals",
    description:
      "Save more with the latest Oman Air Discount Code and Oman Air Voucher. Enjoy up to 50% OFF flight bookings, Flat 25% OFF selected flights, and fares starting from just $149.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699425/oman-air-logo_ozwu2c.webp",
        width: 1200,
        height: 630,
        alt: "Oman Air Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Oman Air Discount Code | Get Up to 50% OFF on Flight Deals",
    description:
      "Save more with the latest Oman Air Discount Code and Oman Air Voucher. Enjoy up to 50% OFF flight bookings, Flat 25% OFF selected flights, and fares starting from just $149.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699425/oman-air-logo_ozwu2c.webp"],
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

const omanAirSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/oman-air-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/oman-air-discount-code",
      name: "Oman Air Discount Code | Get Up to 50% OFF on Flight Deals",
      description:
        "Save more with the latest Oman Air Discount Code and Oman Air Voucher. Enjoy up to 50% OFF flight bookings, Flat 25% OFF selected flights, and fares starting from just $149.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/oman-air-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/oman-air-discount-code#offerlist",
      name: "Oman Air Coupon Codes & Promo Codes",
      description:
        "Latest verified Oman Air coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/oman-air-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Oman Air Coupon Code",
            description:
              "Latest Oman Air coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/oman-air-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Oman Air",
              url: "https://www.omanair.com",
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
      "@id": "https://www.couponsbit.us/stores/oman-air-discount-code#breadcrumb",
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
          name: "Oman Air Coupons",
          item: "https://www.couponsbit.us/stores/oman-air-discount-code",
        },
      ],
    },
  ],
};

export default function OmanAirStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(omanAirSchema),
        }}
      />
      <OmanAirCouponsContent />
    </>
  );
}