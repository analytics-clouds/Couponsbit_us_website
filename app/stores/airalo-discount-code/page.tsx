import type { Metadata } from "next";
import AiraloCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Airalo Discount Code | Up to 20% OFF + 15% OFF First eSIM",
  description:
    "Get the latest Airalo Discount Code and Airalo Voucher to save up to 20% OFF, enjoy 15% OFF your first eSIM, and earn up to 10% cashback.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/airalo-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/airalo-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/airalo-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/airalo-discount-code",
      "x-default": "https://www.couponsbit.us/stores/airalo-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/airalo-discount-code",
    title: "Airalo Discount Code | Up to 20% OFF + 15% OFF First eSIM",
    description:
      "Get the latest Airalo Discount Code and Airalo Voucher to save up to 20% OFF, enjoy 15% OFF your first eSIM, and earn up to 10% cashback.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784895740/airalo-logo_fc6u6p.webp",
        width: 1200,
        height: 630,
        alt: "Airalo Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Airalo Discount Code | Up to 20% OFF + 15% OFF First eSIM",
    description:
      "Get the latest Airalo Discount Code and Airalo Voucher to save up to 20% OFF, enjoy 15% OFF your first eSIM, and earn up to 10% cashback.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784895740/airalo-logo_fc6u6p.webp"],
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

const airaloSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/airalo-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/airalo-discount-code",
      name: "Airalo Discount Code | Up to 20% OFF + 15% OFF First eSIM",
      description:
        "Get the latest Airalo Discount Code and Airalo Voucher to save up to 20% OFF, enjoy 15% OFF your first eSIM, and earn up to 10% cashback.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/airalo-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/airalo-discount-code#offerlist",
      name: "Airalo Coupon Codes & Promo Codes",
      description:
        "Latest verified Airalo coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/airalo-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Airalo Coupon Code",
            description:
              "Latest Airalo coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/airalo-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Airalo",
              url: "https://www.airalo.com",
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
      "@id": "https://www.couponsbit.us/stores/airalo-discount-code#breadcrumb",
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
          name: "Airalo Coupons",
          item: "https://www.couponsbit.us/stores/airalo-discount-code",
        },
      ],
    },
  ],
};

export default function AiraloStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(airaloSchema),
        }}
      />
      <AiraloCouponsContent />
    </>
  );
}