import type { Metadata } from "next";
import BluehostCouponsContent from "../bluehost/_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Bluehost Coupon Codes – Hosting From $1.99/mo & More",
  description:
    "Get verified Bluehost discount codes – WordPress hosting from $1.99/mo, 69% OFF one site plan, 50% OFF business hosting & VPS 33% OFF. 35 live deals. Save now!",

  alternates: {
    canonical: "https://couponsbit.us/stores/bluehost",
    languages: {
      "en-US": "https://couponsbit.us/stores/bluehost",
      "x-default": "https://couponsbit.us/stores/bluehost",
    },
  },

  openGraph: {
    type: "website",
    url: "https://couponsbit.us/stores/bluehost",
    title: "Bluehost Coupon Codes – Hosting From $1.99/mo & More",
    description:
      "Get verified Bluehost discount codes – WordPress hosting from $1.99/mo, 69% OFF one site plan, 50% OFF business hosting & VPS 33% OFF. 35 live deals. Save now!",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bluehost Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bluehost Coupon Codes – Hosting From $1.99/mo & More",
    description:
      "Get verified Bluehost discount codes – WordPress hosting from $1.99/mo, 69% OFF one site plan, 50% OFF business hosting & VPS 33% OFF. 35 live deals. Save now!",
    images: ["https://couponsbit.us/og-image.png"],
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

const bluehostSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://couponsbit.us/stores/bluehost#webpage",
      url: "https://couponsbit.us/stores/bluehost",
      name: "Bluehost Coupon Codes – Hosting From $1.99/mo & More",
      description:
        "Get verified Bluehost discount codes – WordPress hosting from $1.99/mo, 69% OFF one site plan, 50% OFF business hosting & VPS 33% OFF. 35 live deals. Save now!",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/stores/bluehost#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://couponsbit.us/stores/bluehost#offerlist",
      name: "Bluehost Coupon Codes & Promo Codes",
      description:
        "Latest verified Bluehost coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://couponsbit.us/stores/bluehost",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Bluehost Coupon Code",
            description:
              "Latest Bluehost coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://couponsbit.us/stores/bluehost",
            seller: {
              "@type": "Organization",
              name: "Bluehost",
              url: "https://www.bluehost.com",
            },
          },
        },
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://couponsbit.us/#website",
      url: "https://couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is one of the best coupon websites offering verified coupons, deals, and coupon help for top brands worldwide.",
      inLanguage: "en-US",
      publisher: {
        "@id": "https://couponsbit.us/#organization",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://couponsbit.us/#organization",
      name: "Couponsbit",
      url: "https://couponsbit.us",
      logo: {
        "@type": "ImageObject",
        url: "https://couponsbit.us/logo.png",
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
      "@id": "https://couponsbit.us/stores/bluehost#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://couponsbit.us",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Stores",
          item: "https://couponsbit.us/stores",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bluehost Coupons",
          item: "https://couponsbit.us/stores/bluehost",
        },
      ],
    },
  ],
};

export default function BluehostStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bluehostSchema),
        }}
      />
      <BluehostCouponsContent />
    </>
  );
}