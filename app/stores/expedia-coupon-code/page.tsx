import type { Metadata } from "next";
import ExpediaCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Expedia Coupon Code | Up to 40% OFF Hotels & Travel Deals",
  description:
    "Get the latest Expedia Coupon Code & discount code to save up to 40% OFF hotels, vacation rentals, flights & car rentals, plus up to $464 OFF select hotels.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/expedia-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/expedia-coupon-code",
      "en-GB": "https://www.couponsbit.us/stores/expedia-coupon-code",
      "en-AU": "https://www.couponsbit.us/stores/expedia-coupon-code",
      "en-CA": "https://www.couponsbit.us/stores/expedia-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/expedia-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/expedia-coupon-code",
    title: "Expedia Coupon Code | Up to 40% OFF Hotels & Travel Deals",
    description:
      "Get the latest Expedia Coupon Code & discount code to save up to 40% OFF hotels, vacation rentals, flights & car rentals, plus up to $464 OFF select hotels.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_AU", "en_CA"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg",
        width: 1200,
        height: 630,
        alt: "Expedia Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Expedia Coupon Code | Up to 40% OFF Hotels & Travel Deals",
    description:
      "Get the latest Expedia Coupon Code & discount code to save up to 40% OFF hotels, vacation rentals, flights & car rentals, plus up to $464 OFF select hotels.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1783502778/Expedia-coupon-code_k8dosy.jpg"],
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

const expediaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/expedia-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/expedia-coupon-code",
      name: "Expedia Coupon Code | Up to 40% OFF Hotels & Travel Deals",
      description:
        "Get the latest Expedia Coupon Code & discount code to save up to 40% OFF hotels, vacation rentals, flights & car rentals, plus up to $464 OFF select hotels.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/expedia-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/expedia-coupon-code#offerlist",
      name: "Expedia Coupon Codes & Promo Codes",
      description:
        "Latest verified Expedia coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/expedia-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Expedia Coupon Code",
            description:
              "Latest Expedia coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/expedia-coupon-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Australia" },
              { "@type": "Country", name: "Canada" },
            ],
            seller: {
              "@type": "Organization",
              name: "Expedia",
              url: "https://www.expedia.com",
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
      "@id": "https://www.couponsbit.us/stores/expedia-coupon-code#breadcrumb",
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
          name: "Expedia Coupons",
          item: "https://www.couponsbit.us/stores/expedia-coupon-code",
        },
      ],
    },
  ],
};

export default function ExpediaStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(expediaSchema),
        }}
      />
      <ExpediaCouponsContent />
    </>
  );
}