import type { Metadata } from "next";
import MalaysiaAirlinesCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Malaysia Airlines Discount Code | Up to 35% OFF + Extra 5% OFF",
  description:
    "Get the latest Malaysia Airlines Discount Code and Malaysia Airlines Voucher to save up to 35% OFF, earn 2X Enrich Points, and book flights from $399.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/malaysia-airlines-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/malaysia-airlines-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/malaysia-airlines-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/malaysia-airlines-discount-code",
      "x-default": "https://www.couponsbit.us/stores/malaysia-airlines-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/malaysia-airlines-discount-code",
    title: "Malaysia Airlines Discount Code | Up to 35% OFF + Extra 5% OFF",
    description:
      "Get the latest Malaysia Airlines Discount Code and Malaysia Airlines Voucher to save up to 35% OFF, earn 2X Enrich Points, and book flights from $399.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784971/malaysia-logo_xso2cj.webp",
        width: 1200,
        height: 630,
        alt: "Malaysia Airlines Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Malaysia Airlines Discount Code | Up to 35% OFF + Extra 5% OFF",
    description:
      "Get the latest Malaysia Airlines Discount Code and Malaysia Airlines Voucher to save up to 35% OFF, earn 2X Enrich Points, and book flights from $399.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784971/malaysia-logo_xso2cj.webp"],
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

const malaysiaAirlinesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/malaysia-airlines-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/malaysia-airlines-discount-code",
      name: "Malaysia Airlines Discount Code | Up to 35% OFF + Extra 5% OFF",
      description:
        "Get the latest Malaysia Airlines Discount Code and Malaysia Airlines Voucher to save up to 35% OFF, earn 2X Enrich Points, and book flights from $399.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/malaysia-airlines-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/malaysia-airlines-discount-code#offerlist",
      name: "Malaysia Airlines Coupon Codes & Promo Codes",
      description:
        "Latest verified Malaysia Airlines coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/malaysia-airlines-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Malaysia Airlines Coupon Code",
            description:
              "Latest Malaysia Airlines coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/malaysia-airlines-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Malaysia Airlines",
              url: "https://www.malaysiaairlines.com",
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
      "@id": "https://www.couponsbit.us/stores/malaysia-airlines-discount-code#breadcrumb",
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
          name: "Malaysia Airlines Coupons",
          item: "https://www.couponsbit.us/stores/malaysia-airlines-discount-code",
        },
      ],
    },
  ],
};

export default function MalaysiaAirlinesStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(malaysiaAirlinesSchema),
        }}
      />
      <MalaysiaAirlinesCouponsContent />
    </>
  );
}