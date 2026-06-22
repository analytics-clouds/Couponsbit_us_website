import type { Metadata } from "next";
import DriffleCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Driffle Coupon Codes – Up to 95% OFF PC Games & Keys",
  description:
    "Get verified Driffle discount codes – 95% OFF XCOM 2, 81% OFF EA FC 26, 57% OFF Roblox Gift Cards & 55% OFF Ghost of Tsushima. 14 live deals. Save now!",

  alternates: {
    canonical: "https://couponsbit.us/stores/driffle-coupon-code",
    languages: {
      "en-US": "https://couponsbit.us/stores/driffle-coupon-code",
      "x-default": "https://couponsbit.us/stores/driffle-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://couponsbit.us/stores/driffle-coupon-code",
    title: "Driffle Coupon Codes – Up to 95% OFF PC Games & Keys",
    description:  
      "Get verified Driffle discount codes – 95% OFF XCOM 2, 81% OFF EA FC 26, 57% OFF Roblox Gift Cards & 55% OFF Ghost of Tsushima. 14 live deals. Save now!",
    siteName: "Couponsbit", 
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/driffle-coupon-code_n2upgl.webp",
        width: 1200,
        height: 630,
        alt: "Driffle Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Driffle Coupon Codes – Up to 95% OFF PC Games & Keys",
    description:
      "Get verified Driffle discount codes – 95% OFF XCOM 2, 81% OFF EA FC 26, 57% OFF Roblox Gift Cards & 55% OFF Ghost of Tsushima. 14 live deals. Save now!",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1781775923/driffle-coupon-code_n2upgl.webp"],
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

const driffleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://couponsbit.us/stores/driffle-coupon-code#webpage",
      url: "https://couponsbit.us/stores/driffle-coupon-code",
      name: "Driffle Coupon Codes – Up to 95% OFF PC Games & Keys",
      description:
        "Get verified Driffle discount codes – 95% OFF XCOM 2, 81% OFF EA FC 26, 57% OFF Roblox Gift Cards & 55% OFF Ghost of Tsushima. 14 live deals. Save now!",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/stores/driffle-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://couponsbit.us/stores/driffle-coupon-code#offerlist",
      name: "Driffle Coupon Codes & Promo Codes",
      description:
        "Latest verified Driffle coupon codes, promo codes and discount codes for game keys, software and subscriptions.",
      url: "https://couponsbit.us/stores/driffle-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Driffle Coupon Code",
            description:
              "Latest Driffle coupon code for game keys, software and subscription discounts.",
            url: "https://couponsbit.us/stores/driffle-coupon-code",
            seller: {
              "@type": "Organization",
              name: "Driffle",
              url: "https://www.driffle.com",
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
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/couponsbit-logo_n2upgl.webp",
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
      "@id": "https://couponsbit.us/stores/driffle-coupon-code#breadcrumb",
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
          name: "Driffle Coupons",
          item: "https://couponsbit.us/stores/driffle-coupon-code",
        },
      ],
    },
  ],
};

export default function DriffleStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(driffleSchema),
        }}
      />
      <DriffleCouponsContent />
    </>
  );
}