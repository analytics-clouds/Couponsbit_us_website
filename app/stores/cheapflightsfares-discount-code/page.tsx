import type { Metadata } from "next";
import CheapflightsfaresCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "CheapFlightsFares Discount Code | Under $99 Flights + 25% OFF",
  description:
    "Get the latest CheapFlightsFares Discount Code and CheapFlightsFares Voucher. Book flights under $99, earn up to $100 travel credits, and save 25% OFF cruises.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/cheapflightsfares-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/cheapflightsfares-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/cheapflightsfares-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/cheapflightsfares-discount-code",
      "x-default": "https://www.couponsbit.us/stores/cheapflightsfares-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/cheapflightsfares-discount-code",
    title: "CheapFlightsFares Discount Code | Under $99 Flights + 25% OFF",
    description:
      "Get the latest CheapFlightsFares Discount Code and CheapFlightsFares Voucher. Book flights under $99, earn up to $100 travel credits, and save 25% OFF cruises.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784895741/chepflights-logo_wm46ul.webp",
        width: 1200,
        height: 630,
        alt: "Cheapflightsfares Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CheapFlightsFares Discount Code | Under $99 Flights + 25% OFF",
    description:
      "Get the latest CheapFlightsFares Discount Code and CheapFlightsFares Voucher. Book flights under $99, earn up to $100 travel credits, and save 25% OFF cruises.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784895741/chepflights-logo_wm46ul.webp"],
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

const cheapflightsfaresSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/cheapflightsfares-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/cheapflightsfares-discount-code",
      name: "CheapFlightsFares Discount Code | Under $99 Flights + 25% OFF",
      description:
        "Get the latest CheapFlightsFares Discount Code and CheapFlightsFares Voucher. Book flights under $99, earn up to $100 travel credits, and save 25% OFF cruises.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/cheapflightsfares-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/cheapflightsfares-discount-code#offerlist",
      name: "Cheapflightsfares Coupon Codes & Promo Codes",
      description:
        "Latest verified Cheapflightsfares coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/cheapflightsfares-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Cheapflightsfares Coupon Code",
            description:
              "Latest Cheapflightsfares coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/cheapflightsfares-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Cheapflightsfares",
              url: "https://www.cheapflightsfares.com",
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
      "@id": "https://www.couponsbit.us/stores/cheapflightsfares-discount-code#breadcrumb",
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
          name: "Cheapflightsfares Coupons",
          item: "https://www.couponsbit.us/stores/cheapflightsfares-discount-code",
        },
      ],
    },
  ],
};

export default function CheapflightsfaresStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cheapflightsfaresSchema),
        }}
      />
      <CheapflightsfaresCouponsContent />
    </>
  );
}