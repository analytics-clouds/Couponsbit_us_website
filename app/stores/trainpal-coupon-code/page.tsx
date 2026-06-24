import type { Metadata } from "next";
import TrainPalCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Up to 50% OFF UK Train Travel | TrainPal Coupon Code",
  description:
    "Unlock the latest TrainPal Coupon Code and save up to 50% on UK rail travel. Get Railcards, cheaper fares, and exclusive ticket deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/trainpal-coupon-code",
    languages: {
      "en-GB": "https://www.couponsbit.us/stores/trainpal-coupon-code",
      "en-IT": "https://www.couponsbit.us/stores/trainpal-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/trainpal-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/trainpal-coupon-code",
    title: "Up to 50% OFF UK Train Travel | TrainPal Coupon Code",
    description:
      "Unlock the latest TrainPal Coupon Code and save up to 50% on UK rail travel. Get Railcards, cheaper fares, and exclusive ticket deals.",
    siteName: "Couponsbit",
    locale: "en_GB",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/trainpal-logo_lkwb0o.webp",
        width: 1200,
        height: 630,
        alt: "TrainPal Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Up to 50% OFF UK Train Travel | TrainPal Coupon Code",
    description:
      "Unlock the latest TrainPal Coupon Code and save up to 50% on UK rail travel. Get Railcards, cheaper fares, and exclusive ticket deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782114026/trainpal-logo_lkwb0o.webp"],
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

const trainpalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/trainpal-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/trainpal-coupon-code",
      name: "Up to 50% OFF UK Train Travel | TrainPal Coupon Code",
      description:
        "Unlock the latest TrainPal Coupon Code and save up to 50% on UK rail travel. Get Railcards, cheaper fares, and exclusive ticket deals.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/trainpal-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/trainpal-coupon-code#offerlist",
      name: "TrainPal Coupon Codes & Promo Codes",
      description:
        "Latest verified TrainPal coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/trainpal-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "TrainPal Coupon Code",
            description:
              "Latest TrainPal coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/trainpal-coupon-code",
            seller: {
              "@type": "Organization",
              name: "TrainPal",
              url: "https://www.mytrainpal.com/",
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
        url: "https://www.couponsbit.us/logo.png",
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
      "@id": "https://www.couponsbit.us/stores/trainpal-coupon-code#breadcrumb",
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
          name: "TrainPal Coupons",
          item: "https://www.couponsbit.us/stores/trainpal-coupon-code",
        },
      ],
    },
  ],
};

export default function TrainPalStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(trainpalSchema),
        }}
      />
      <TrainPalCouponsContent />
    </>
  );
}