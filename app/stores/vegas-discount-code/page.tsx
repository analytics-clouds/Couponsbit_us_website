import type { Metadata } from "next";
import VegasCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Vegas Discount Code | Save Up to 35% OFF Hotels & Shows",
  description:
    "Find the latest Vegas Discount Code and Vegas Voucher to save up to 35% OFF hotels, Cirque du Soleil tickets, Grand Canyon tours, and top Las Vegas attractions.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/vegas-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/vegas-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/vegas-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/vegas-discount-code",
      "x-default": "https://www.couponsbit.us/stores/vegas-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/vegas-discount-code",
    title: "Vegas Discount Code | Save Up to 35% OFF Hotels & Shows",
    description:
      "Find the latest Vegas Discount Code and Vegas Voucher to save up to 35% OFF hotels, Cirque du Soleil tickets, Grand Canyon tours, and top Las Vegas attractions.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784707355/vegas-logo_sifnax.webp",
        width: 1200,
        height: 630,
        alt: "Vegas.com Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vegas Discount Code | Save Up to 35% OFF Hotels & Shows",
    description:
      "Find the latest Vegas Discount Code and Vegas Voucher to save up to 35% OFF hotels, Cirque du Soleil tickets, Grand Canyon tours, and top Las Vegas attractions.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784707355/vegas-logo_sifnax.webp"],
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

const vegasSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/vegas-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/vegas-discount-code",
      name: "Vegas Discount Code | Save Up to 35% OFF Hotels & Shows",
      description:
        "Find the latest Vegas Discount Code and Vegas Voucher to save up to 35% OFF hotels, Cirque du Soleil tickets, Grand Canyon tours, and top Las Vegas attractions.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/vegas-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/vegas-discount-code#offerlist",
      name: "Vegas.com Coupon Codes & Promo Codes",
      description:
        "Latest verified Vegas.com coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/vegas-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Vegas.com Coupon Code",
            description:
              "Latest Vegas.com coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/vegas-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Vegas.com",
              url: "https://www.vegas.com",
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
      "@id": "https://www.couponsbit.us/stores/vegas-discount-code#breadcrumb",
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
          name: "Vegas.com Coupons",
          item: "https://www.couponsbit.us/stores/vegas-discount-code",
        },
      ],
    },
  ],
};

export default function VegasStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(vegasSchema),
        }}
      />
      <VegasCouponsContent />
    </>
  );
}