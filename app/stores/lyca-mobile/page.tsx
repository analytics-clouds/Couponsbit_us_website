import type { Metadata } from "next";
import LycaCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Lyca Mobile Coupon Codes – Plans From $7.50 & More",
  description:
    "Get verified Lyca Mobile discount codes – 69% OFF prepaid plans, unlimited data from $7.50, international plans from $10 & earn $38 referral reward. 10 live deals. Save now!",

  alternates: {
    canonical: "https://couponsbit.us/stores/lyca-mobile",
    languages: {
      "en-US": "https://couponsbit.us/stores/lyca-mobile",
      "x-default": "https://couponsbit.us/stores/lyca-mobile",
    },
  },

  openGraph: {
    type: "website",
    url: "https://couponsbit.us/stores/lyca-mobile",
    title: "Lyca Mobile Coupon Codes – Plans From $7.50 & More",
    description:
      "Get verified Lyca Mobile discount codes – 69% OFF prepaid plans, unlimited data from $7.50, international plans from $10 & earn $38 referral reward. 10 live deals. Save now!",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lyca Mobile Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lyca Mobile Coupon Codes – Plans From $7.50 & More",
    description:
      "Get verified Lyca Mobile discount codes – 69% OFF prepaid plans, unlimited data from $7.50, international plans from $10 & earn $38 referral reward. 10 live deals. Save now!",
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

const lycaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://couponsbit.us/stores/lyca-mobile#webpage",
      url: "https://couponsbit.us/stores/lyca-mobile",
      name: "Lyca Mobile Coupon Codes – Plans From $7.50 & More",
      description:
        "Get verified Lyca Mobile discount codes – 69% OFF prepaid plans, unlimited data from $7.50, international plans from $10 & earn $38 referral reward. 10 live deals. Save now!",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/stores/lyca-mobile#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://couponsbit.us/stores/lyca-mobile#offerlist",
      name: "Lyca Mobile Coupon Codes & Promo Codes",
      description:
        "Latest verified Lyca Mobile coupon codes, promo codes and discount codes for recharge, SIM plans and international calling.",
      url: "https://couponsbit.us/stores/lyca-mobile",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Lyca Mobile Coupon Code",
            description:
              "Latest Lyca Mobile coupon code for recharge and SIM plan discounts.",
            url: "https://couponsbit.us/stores/lyca-mobile",
            seller: {
              "@type": "Organization",
              name: "Lyca Mobile",
              url: "https://www.lycamobile.us",
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
      "@id": "https://couponsbit.us/stores/lyca-mobile#breadcrumb",
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
          name: "Lyca Mobile Coupons",
          item: "https://couponsbit.us/stores/lyca-mobile",
        },
      ],
    },
  ],
};

export default function LycaStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(lycaSchema),
        }}
      />
      <LycaCouponsContent />
    </>
  );
}