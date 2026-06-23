import type { Metadata } from "next";
import EmergentCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Get 85% Off AI App Builder Plans - Emergent Coupon Code",
  description:
    "Save 85% on Emergent's Standard Plan and start building apps from just $2.63/month. Access AI-powered tools, hosting, and GitHub integration.",

  alternates: {
    canonical: "https://couponsbit.us/stores/emergent-coupon-code",
    languages: {
      "en-US": "https://couponsbit.us/stores/emergent-coupon-code",
      "en-IN": "https://couponsbit.us/stores/emergent-coupon-code",
      "en-GB": "https://couponsbit.us/stores/emergent-coupon-code",
      "x-default": "https://couponsbit.us/stores/emergent-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://couponsbit.us/stores/emergent-coupon-code",
    title: "Get 85% Off AI App Builder Plans - Emergent Coupon Code",
    description:
      "Save 85% on Emergent's Standard Plan and start building apps from just $2.63/month. Access AI-powered tools, hosting, and GitHub integration.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782198036/emergent-coupon-code_oeaxoh.webp",
        width: 1200,
        height: 630,
        alt: "Emergent Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Get 85% Off AI App Builder Plans - Emergent Coupon Code",
    description:
      "Save 85% on Emergent's Standard Plan and start building apps from just $2.63/month. Access AI-powered tools, hosting, and GitHub integration.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782198036/emergent-coupon-code_oeaxoh.webp"],
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

const emergentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://couponsbit.us/stores/emergent-coupon-code#webpage",
      url: "https://couponsbit.us/stores/emergent-coupon-code",
      name: "Get 85% Off AI App Builder Plans - Emergent Coupon Code",
      description:
        "Save 85% on Emergent's Standard Plan and start building apps from just $2.63/month. Access AI-powered tools, hosting, and GitHub integration.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/stores/emergent-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://couponsbit.us/stores/emergent-coupon-code#offerlist",
      name: "Emergent Coupon Codes & Promo Codes",
      description:
        "Latest verified Emergent coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://couponsbit.us/stores/emergent-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Emergent Coupon Code",
            description:
              "Latest Emergent coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://couponsbit.us/stores/emergent-coupon-code",
            seller: {
              "@type": "Organization",
              name: "Emergent",
              url: "https://app.emergent.sh/",
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
      "@id": "https://couponsbit.us/stores/emergent-coupon-code#breadcrumb",
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
          name: "Emergent Coupons",
          item: "https://couponsbit.us/stores/emergent-coupon-code",
        },
      ],
    },
  ],
};

export default function EmergentStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(emergentSchema),
        }}
      />
      <EmergentCouponsContent />
    </>
  );
}