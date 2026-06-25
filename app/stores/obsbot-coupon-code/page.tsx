import type { Metadata } from "next";
import ObsbotCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "OBSBOT Coupon Code – AI Webcams & Streaming Cameras From $75",
  description:
    "Get the latest OBSBOT coupon code and shop AI-powered webcams, 4K streaming cameras and creator gear from just $75. Explore verified OBSBOT deals today.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/obsbot-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/obsbot-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/obsbot-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/obsbot-coupon-code",
    title: "OBSBOT Coupon Code – AI Webcams & Streaming Cameras From $75",
    description:
      "Get the latest OBSBOT coupon code and shop AI-powered webcams, 4K streaming cameras and creator gear from just $75. Explore verified OBSBOT deals today.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782373659/obsbot-coupon-code_rs8fff.jpg",
        width: 1200,
        height: 630,
        alt: "Obsbot Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "OBSBOT Coupon Code – AI Webcams & Streaming Cameras From $75",
    description:
      "Get the latest OBSBOT coupon code and shop AI-powered webcams, 4K streaming cameras and creator gear from just $75. Explore verified OBSBOT deals today.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782373659/obsbot-coupon-code_rs8fff.jpg"],
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

const obsbotSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/obsbot-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/obsbot-coupon-code",
      name: "OBSBOT Coupon Code – AI Webcams & Streaming Cameras From $75",
      description:
        "Get the latest OBSBOT coupon code and shop AI-powered webcams, 4K streaming cameras and creator gear from just $75. Explore verified OBSBOT deals today.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/obsbot-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/obsbot-coupon-code#offerlist",
      name: "Obsbot Coupon Codes & Promo Codes",
      description:
        "Latest verified Obsbot coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/obsbot-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Obsbot Coupon Code",
            description:
              "Latest Obsbot coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/obsbot-coupon-code",
            seller: {
              "@type": "Organization",
              name: "Obsbot",
              url: "https://obsbotamazonsellerus.pxf.io/c/6434050/3434711/46044?subId1=1015",
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
      "@id": "https://www.couponsbit.us/stores/obsbot-coupon-code#breadcrumb",
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
          name: "Obsbot Coupons",
          item: "https://www.couponsbit.us/stores/obsbot-coupon-code",
        },
      ],
    },
  ],
};

export default function ObsbotStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(obsbotSchema),
        }}
      />
      <ObsbotCouponsContent />
    </>
  );
}