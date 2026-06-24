import type { Metadata } from "next";
import FytooCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Frames Start From $1 & Up to 40% OFF | Fytoo Coupon Code",
  description:
    "Grab Fytoo's hottest deals with frames starting from $1, up to 40% OFF eyewear. Use the latest Fytoo Coupon Code and save on premium glasses.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/fytoo-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/fytoo-coupon-code",
      "en-CA": "https://www.couponsbit.us/stores/fytoo-coupon-code",
      "en-CN": "https://www.couponsbit.us/stores/fytoo-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/fytoo-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/fytoo-coupon-code",
    title: "Frames Start From $1 & Up to 40% OFF | Fytoo Coupon Code",
    description:
      "Grab Fytoo's hottest deals with frames starting from $1, up to 40% OFF eyewear. Use the latest Fytoo Coupon Code and save on premium glasses.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/fytoo-logo_pp9aoo.webp",
        width: 1200,
        height: 630,
        alt: "Fytoo Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Frames Start From $1 & Up to 40% OFF | Fytoo Coupon Code",
    description:
      "Grab Fytoo's hottest deals with frames starting from $1, up to 40% OFF eyewear. Use the latest Fytoo Coupon Code and save on premium glasses.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782114026/fytoo-logo_pp9aoo.webp"],
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

const fytooSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/fytoo-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/fytoo-coupon-code",
      name: "Frames Start From $1 & Up to 40% OFF | Fytoo Coupon Code",
      description:
        "Grab Fytoo's hottest deals with frames starting from $1, up to 40% OFF eyewear. Use the latest Fytoo Coupon Code and save on premium glasses.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/fytoo-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/fytoo-coupon-code#offerlist",
      name: "Fytoo Coupon Codes & Promo Codes",
      description:
        "Latest verified Fytoo coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/fytoo-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Fytoo Coupon Code",
            description:
              "Latest Fytoo coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/fytoo-coupon-code",
            seller: {
              "@type": "Organization",
              name: "Fytoo",
              url: "https://www.fytoo.com/",
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
      "@id": "https://www.couponsbit.us/stores/fytoo-coupon-code#breadcrumb",
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
          name: "Fytoo Coupons",
          item: "https://www.couponsbit.us/stores/fytoo-coupon-code",
        },
      ],
    },
  ],
};

export default function FytooStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fytooSchema),
        }}
      />
      <FytooCouponsContent />
    </>
  );
}