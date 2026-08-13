import type { Metadata } from "next";
import RayneoCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "RayNeo Discount Code: AR Glasses From $254 + Save $130 | Aug 2026",
  description:
    "Use a verified RayNeo discount code or promo code — grab Air 4 Pro HDR10 AR Glasses from $254.15. Save $130 on RayNeo X3 Pro AI smart glasses at $1,169. August 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/rayneo-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/rayneo-discount-code",
      "x-default": "https://www.couponsbit.us/stores/rayneo-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/rayneo-discount-code",
    title: "RayNeo Discount Code: AR Glasses From $254 + Save $130 | Aug 2026",
    description:
      "Use a verified RayNeo discount code or promo code — grab Air 4 Pro HDR10 AR Glasses from $254.15. Save $130 on RayNeo X3 Pro AI smart glasses at $1,169. August 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/reyneo-coupon-code_q3crak.webp",
        width: 1200,
        height: 630,
        alt: "Rayneo Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RayNeo Discount Code: AR Glasses From $254 + Save $130 | Aug 2026",
    description:
      "Use a verified RayNeo discount code or promo code — grab Air 4 Pro HDR10 AR Glasses from $254.15. Save $130 on RayNeo X3 Pro AI smart glasses at $1,169. August 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1781775923/reyneo-coupon-code_q3crak.webp"],
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

const rayneoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/rayneo-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/rayneo-discount-code",
      name: "RayNeo Discount Code: AR Glasses From $254 + Save $130 | Aug 2026",
      description:
        "Use a verified RayNeo discount code or promo code — grab Air 4 Pro HDR10 AR Glasses from $254.15. Save $130 on RayNeo X3 Pro AI smart glasses at $1,169. August 2026.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/rayneo-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/rayneo-discount-code#offerlist",
      name: "Rayneo Coupon Codes & Promo Codes",
      description:
        "Latest verified Rayneo coupon codes, promo codes and discount codes for AR glasses and smart devices.",
      url: "https://www.couponsbit.us/stores/rayneo-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Rayneo Coupon Code",
            description:
              "Latest Rayneo coupon code for AR glasses and smart device discounts.",
            url: "https://www.couponsbit.us/stores/rayneo-discount-code",
            seller: {
              "@type": "Organization",
              name: "Rayneo",
              url: "https://www.rayneo.com",
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
      "@id": "https://www.couponsbit.us/stores/rayneo-discount-code#breadcrumb",
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
          name: "Rayneo Coupons",
          item: "https://www.couponsbit.us/stores/rayneo-discount-code",
        },
      ],
    },
  ],
};

export default function RayneoStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(rayneoSchema),
        }}
      />
      <RayneoCouponsContent />
    </>
  );
}