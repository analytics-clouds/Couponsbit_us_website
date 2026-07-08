import type { Metadata } from "next";
import CheapflightsCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "CheapFlights Coupon Code | Flights Under $99 & Up to 25% OFF",
  description:
    "Get the latest CheapFlights Coupon Code & discount code to book flights under $99, save up to 25% OFF cruises, earn $100 travel credits, hotels from $11 & more.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/cheapflights-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/cheapflights-coupon-code",
      "en-GB": "https://www.couponsbit.us/stores/cheapflights-coupon-code",
      "en-IN": "https://www.couponsbit.us/stores/cheapflights-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/cheapflights-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/cheapflights-coupon-code",
    title: "CheapFlights Coupon Code | Flights Under $99 & Up to 25% OFF",
    description:
      "Get the latest CheapFlights Coupon Code & discount code to book flights under $99, save up to 25% OFF cruises, earn $100 travel credits, hotels from $11 & more.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1783494079/Cheepflights-coupon-code_cbqikz.jpg",
        width: 1200,
        height: 630,
        alt: "Cheapflights Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CheapFlights Coupon Code | Flights Under $99 & Up to 25% OFF",
    description:
      "Get the latest CheapFlights Coupon Code & discount code to book flights under $99, save up to 25% OFF cruises, earn $100 travel credits, hotels from $11 & more.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1783494079/Cheepflights-coupon-code_cbqikz.jpg"],
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

const cheapflightsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/cheapflights-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/cheapflights-coupon-code",
      name: "CheapFlights Coupon Code | Flights Under $99 & Up to 25% OFF",
      description:
        "Get the latest CheapFlights Coupon Code & discount code to book flights under $99, save up to 25% OFF cruises, earn $100 travel credits, hotels from $11 & more.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/cheapflights-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/cheapflights-coupon-code#offerlist",
      name: "Cheapflights Coupon Codes & Promo Codes",
      description:
        "Latest verified Cheapflights coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/cheapflights-coupon-code",
      numberOfItems: 11,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Cheapflights Coupon Code",
            description:
              "Latest Cheapflights coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/cheapflights-coupon-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Cheapflights",
              url: "https://www.cheapflights.com",
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
      "@id": "https://www.couponsbit.us/stores/cheapflights-coupon-code#breadcrumb",
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
          name: "Cheapflights Coupons",
          item: "https://www.couponsbit.us/stores/cheapflights-coupon-code",
        },
      ],
    },
  ],
};

export default function CheapflightsStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cheapflightsSchema),
        }}
      />
      <CheapflightsCouponsContent />
    </>
  );
}