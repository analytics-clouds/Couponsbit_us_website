import type { Metadata } from "next";
import RayneoCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Rayneo Coupon Codes – Save $130 on AR Glasses & More",
  description:
    "Get verified Rayneo promo codes – Save $130 on X3 Pro AI, $70 OFF Air Series, AR Glasses from $254 & JoyDock at $89. 6 live deals. Shop now!",

  alternates: {
    canonical: "https://couponsbit.us/stores/rayneo-coupon-code",
    languages: {
      "en-US": "https://couponsbit.us/stores/rayneo-coupon-code",
      "x-default": "https://couponsbit.us/stores/rayneo-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://couponsbit.us/stores/rayneo-coupon-code",
    title: "Rayneo Coupon Codes – Save $130 on AR Glasses & More",
    description:
      "Get verified Rayneo promo codes – Save $130 on X3 Pro AI, $70 OFF Air Series, AR Glasses from $254 & JoyDock at $89. 6 live deals. Shop now!",
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
    title: "Rayneo Coupon Codes – Save $130 on AR Glasses & More",
    description:
      "Get verified Rayneo promo codes – Save $130 on X3 Pro AI, $70 OFF Air Series, AR Glasses from $254 & JoyDock at $89. 6 live deals. Shop now!",
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
      "@id": "https://couponsbit.us/stores/rayneo-coupon-code#webpage",
      url: "https://couponsbit.us/stores/rayneo-coupon-code",
      name: "Rayneo Coupon Codes – Save $130 on AR Glasses & More",
      description:
        "Get verified Rayneo promo codes – Save $130 on X3 Pro AI, $70 OFF Air Series, AR Glasses from $254 & JoyDock at $89. 6 live deals. Shop now!",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/stores/rayneo-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://couponsbit.us/stores/rayneo-coupon-code#offerlist",
      name: "Rayneo Coupon Codes & Promo Codes",
      description:
        "Latest verified Rayneo coupon codes, promo codes and discount codes for AR glasses and smart devices.",
      url: "https://couponsbit.us/stores/rayneo-coupon-code",
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
            url: "https://couponsbit.us/stores/rayneo-coupon-code",
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
      "@id": "https://couponsbit.us/stores/rayneo-coupon-code#breadcrumb",
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
          name: "Rayneo Coupons",
          item: "https://couponsbit.us/stores/rayneo-coupon-code",
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