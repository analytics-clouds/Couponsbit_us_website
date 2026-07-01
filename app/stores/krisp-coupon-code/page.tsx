import type { Metadata } from "next";
import KrispCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Krisp AI Coupon Code – Save 50% on Annual Plans",
  description:
    "Save 50% on Krisp AI annual plans with the latest Krisp AI Coupon Code, promo code, and exclusive deals. Start your 7-day free trial today.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/krisp-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/krisp-coupon-code",
      "en-PH": "https://www.couponsbit.us/stores/krisp-coupon-code",
      "en-IN": "https://www.couponsbit.us/stores/krisp-coupon-code",
      "de-DE": "https://www.couponsbit.us/stores/krisp-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/krisp-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/krisp-coupon-code",
    title: "Krisp AI Coupon Code – Save 50% on Annual Plans",
    description:
      "Save 50% on Krisp AI annual plans with the latest Krisp AI Coupon Code, promo code, and exclusive deals. Start your 7-day free trial today.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_PH", "en_IN", "de_DE"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/krisp-logo_ajv3iv.webp",
        width: 1200,
        height: 630,
        alt: "Krisp.AI Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Krisp AI Coupon Code – Save 50% on Annual Plans",
    description:
      "Save 50% on Krisp AI annual plans with the latest Krisp AI Coupon Code, promo code, and exclusive deals. Start your 7-day free trial today.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782730730/krisp-logo_ajv3iv.webp"],
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

const krispSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/krisp-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/krisp-coupon-code",
      name: "Krisp AI Coupon Code – Save 50% on Annual Plans",
      description:
        "Save 50% on Krisp AI annual plans with the latest Krisp AI Coupon Code, promo code, and exclusive deals. Start your 7-day free trial today.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/krisp-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/krisp-coupon-code#offerlist",
      name: "Krisp.AI Coupon Codes & Promo Codes",
      description:
        "Latest verified Krisp.AI coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/krisp-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Krisp.AI Coupon Code",
            description:
              "Latest Krisp.AI coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/krisp-coupon-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "Philippines" },
              { "@type": "Country", name: "India" },
              { "@type": "Country", name: "Germany" },
            ],
            seller: {
              "@type": "Organization",
              name: "Krisp.AI",
              url: "https://krisp.pxf.io/c/4303217/2859289/33230?subId1=1015",
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
      "@id": "https://www.couponsbit.us/stores/krisp-coupon-code#breadcrumb",
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
          name: "Krisp.AI Coupons",
          item: "https://www.couponsbit.us/stores/krisp-coupon-code",
        },
      ],
    },
  ],
};

export default function KrispStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(krispSchema),
        }}
      />
      <KrispCouponsContent />
    </>
  );
}