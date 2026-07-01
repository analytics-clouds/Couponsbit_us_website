import type { Metadata } from "next";
import AgodaCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Agoda Coupon Code: Save Up to 50% OFF | July 2026",
  description:
    "Get the latest Agoda Coupon Code for July 2026 and save up to 50% on NYC Explorer Pass, 20% OFF Anaheim attractions, plus hotels from just $5/night.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/agoda-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/agoda-coupon-code",
      "en-GB": "https://www.couponsbit.us/stores/agoda-coupon-code",
      "en-IN": "https://www.couponsbit.us/stores/agoda-coupon-code",
      "en-PK": "https://www.couponsbit.us/stores/agoda-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/agoda-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/agoda-coupon-code",
    title: "Agoda Coupon Code: Save Up to 50% OFF | July 2026",
    description:
      "Get the latest Agoda Coupon Code for July 2026 and save up to 50% on NYC Explorer Pass, 20% OFF Anaheim attractions, plus hotels from just $5/night.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN", "en_PK"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782892785/agoda-coupon-code_abuhau.jpg",
        width: 1200,
        height: 630,
        alt: "Agoda Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Agoda Coupon Code: Save Up to 50% OFF | July 2026",
    description:
      "Get the latest Agoda Coupon Code for July 2026 and save up to 50% on NYC Explorer Pass, 20% OFF Anaheim attractions, plus hotels from just $5/night.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782892785/agoda-coupon-code_abuhau.jpg"],
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

const agodaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/agoda-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/agoda-coupon-code",
      name: "Agoda Coupon Code: Save Up to 50% OFF | July 2026",
      description:
        "Get the latest Agoda Coupon Code for July 2026 and save up to 50% on NYC Explorer Pass, 20% OFF Anaheim attractions, plus hotels from just $5/night.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/agoda-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/agoda-coupon-code#offerlist",
      name: "Agoda Coupon Codes & Promo Codes",
      description:
        "Latest verified Agoda coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/agoda-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Agoda Coupon Code",
            description:
              "Latest Agoda coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/agoda-coupon-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
              { "@type": "Country", name: "Pakistan" },
            ],
            seller: {
              "@type": "Organization",
              name: "Agoda",
              url: "https://www.agoda.com",
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
      "@id": "https://www.couponsbit.us/stores/agoda-coupon-code#breadcrumb",
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
          name: "Agoda Coupons",
          item: "https://www.couponsbit.us/stores/agoda-coupon-code",
        },
      ],
    },
  ],
};

export default function AgodaStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(agodaSchema),
        }}
      />
      <AgodaCouponsContent />
    </>
  );
}