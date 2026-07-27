import type { Metadata } from "next";
import BluettiCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "BLUETTI Discount Code | Save $200 + FREE $249 Trolley",
  description:
    "Get the latest BLUETTI Discount Code and BLUETTI Voucher to save up to $200, get a FREE $249 Trolley, and shop portable power stations from $1,199.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/bluetti-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/bluetti-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/bluetti-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/bluetti-discount-code",
      "x-default": "https://www.couponsbit.us/stores/bluetti-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/bluetti-discount-code",
    title: "BLUETTI Discount Code | Save $200 + FREE $249 Trolley",
    description:
      "Get the latest BLUETTI Discount Code and BLUETTI Voucher to save up to $200, get a FREE $249 Trolley, and shop portable power stations from $1,199.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1785130842/bluetti-power-logo_osmets.webp",
        width: 1200,
        height: 630,
        alt: "Bluetti Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BLUETTI Discount Code | Save $200 + FREE $249 Trolley",
    description:
      "Get the latest BLUETTI Discount Code and BLUETTI Voucher to save up to $200, get a FREE $249 Trolley, and shop portable power stations from $1,199.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1785130842/bluetti-power-logo_osmets.webp"],
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

const bluettiSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/bluetti-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/bluetti-discount-code",
      name: "BLUETTI Discount Code | Save $200 + FREE $249 Trolley",
      description:
        "Get the latest BLUETTI Discount Code and BLUETTI Voucher to save up to $200, get a FREE $249 Trolley, and shop portable power stations from $1,199.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/bluetti-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/bluetti-discount-code#offerlist",
      name: "Bluetti Coupon Codes & Promo Codes",
      description:
        "Latest verified Bluetti coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/bluetti-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Bluetti Coupon Code",
            description:
              "Latest Bluetti coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/bluetti-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Bluetti",
              url: "https://www.bluettipower.com",
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
      "@id": "https://www.couponsbit.us/stores/bluetti-discount-code#breadcrumb",
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
          name: "Bluetti Coupons",
          item: "https://www.couponsbit.us/stores/bluetti-discount-code",
        },
      ],
    },
  ],
};

export default function BluettiStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bluettiSchema),
        }}
      />
      <BluettiCouponsContent />
    </>
  );
}