import type { Metadata } from "next";
import FytooCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Fytoo Discount Code: Frames From $1 + Up to 40% Off | August 2026",
  description:
    "Use a verified Fytoo discount code or promo code — grab frames from just $1 in the flash sale & save up to 40% off selected eyewear collections. Updated August 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/fytoo-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/fytoo-discount-code",
      "en-CA": "https://www.couponsbit.us/stores/fytoo-discount-code",
      "en-CN": "https://www.couponsbit.us/stores/fytoo-discount-code",
      "x-default": "https://www.couponsbit.us/stores/fytoo-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/fytoo-discount-code",
    title: "Fytoo Discount Code: Frames From $1 + Up to 40% Off | August 2026",
    description:
      "Use a verified Fytoo discount code or promo code — grab frames from just $1 in the flash sale & save up to 40% off selected eyewear collections. Updated August 2026.",
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
    title: "Fytoo Discount Code: Frames From $1 + Up to 40% Off | August 2026",
    description:
      "Use a verified Fytoo discount code or promo code — grab frames from just $1 in the flash sale & save up to 40% off selected eyewear collections. Updated August 2026.",
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
      "@id": "https://www.couponsbit.us/stores/fytoo-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/fytoo-discount-code",
      name: "Fytoo Discount Code: Frames From $1 + Up to 40% Off | August 2026",
      description:
        "Use a verified Fytoo discount code or promo code — grab frames from just $1 in the flash sale & save up to 40% off selected eyewear collections. Updated August 2026.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/fytoo-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/fytoo-discount-code#offerlist",
      name: "Fytoo Coupon Codes & Promo Codes",
      description:
        "Latest verified Fytoo coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/fytoo-discount-code",
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
            url: "https://www.couponsbit.us/stores/fytoo-discount-code",
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
      "@id": "https://www.couponsbit.us/stores/fytoo-discount-code#breadcrumb",
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
          item: "https://www.couponsbit.us/stores/fytoo-discount-code",
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