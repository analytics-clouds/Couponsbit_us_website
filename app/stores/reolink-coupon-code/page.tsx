import type { Metadata } from "next";
import ReolinkCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Reolink Coupon Codes – Save $450 on Security Cameras",
  description:
    "Get verified Reolink discount codes – 50% OFF anniversary sale, save $450 on RLK16 system, $260 OFF TrackFlex & solar cameras from $159. 8 live deals. Shop now!",

  alternates: {
    canonical: "https://couponsbit.us/stores/reolink-coupon-code",
    languages: {
      "en-US": "https://couponsbit.us/stores/reolink-coupon-code",
      "x-default": "https://couponsbit.us/stores/reolink-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://couponsbit.us/stores/reolink-coupon-code",
    title: "Reolink Coupon Codes – Save $450 on Security Cameras",
    description:
      "Get verified Reolink discount codes – 50% OFF anniversary sale, save $450 on RLK16 system, $260 OFF TrackFlex & solar cameras from $159. 8 live deals. Shop now!",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/reolink-coupon-code_zsrmh1.webp",
        width: 1200,
        height: 630,
        alt: "Reolink Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Reolink Coupon Codes – Save $450 on Security Cameras",
    description:
      "Get verified Reolink discount codes – 50% OFF anniversary sale, save $450 on RLK16 system, $260 OFF TrackFlex & solar cameras from $159. 8 live deals. Shop now!",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1781775924/reolink-coupon-code_zsrmh1.webp"],
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

const reolinkSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://couponsbit.us/stores/reolink-coupon-code#webpage",
      url: "https://couponsbit.us/stores/reolink-coupon-code",
      name: "Reolink Coupon Codes – Save $450 on Security Cameras",
      description:
        "Get verified Reolink discount codes – 50% OFF anniversary sale, save $450 on RLK16 system, $260 OFF TrackFlex & solar cameras from $159. 8 live deals. Shop now!",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/stores/reolink-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://couponsbit.us/stores/reolink-coupon-code#offerlist",
      name: "Reolink Coupon Codes & Promo Codes",
      description:
        "Latest verified Reolink coupon codes, promo codes and discount codes for security cameras and smart home devices.",
      url: "https://couponsbit.us/stores/reolink-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Reolink Coupon Code",
            description:
              "Latest Reolink coupon code for security cameras and smart home device discounts.",
            url: "https://couponsbit.us/stores/reolink-coupon-code",
            seller: {
              "@type": "Organization",
              name: "Reolink",
              url: "https://reolink.com",
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
      "@id": "https://couponsbit.us/stores/reolink-coupon-code#breadcrumb",
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
          name: "Reolink Coupons",
          item: "https://couponsbit.us/stores/reolink-coupon-code",
        },
      ],
    },
  ],
};

export default function ReolinkStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reolinkSchema),
        }}
      />
      <ReolinkCouponsContent />
    </>
  );
}