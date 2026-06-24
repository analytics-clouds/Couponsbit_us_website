import type { Metadata } from "next";
import LycaCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Lyca Mobile Coupon Codes – Plans From $7.50 & More",
  description:
    "Get verified Lyca Mobile discount codes – 69% OFF prepaid plans, unlimited data from $7.50, international plans from $10 & earn $38 referral reward. 10 live deals. Save now!",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/lyca-mobile-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/lyca-mobile-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/lyca-mobile-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/lyca-mobile-coupon-code",
    title: "Lyca Mobile Coupon Codes – Plans From $7.50 & More",
    description:
      "Get verified Lyca Mobile discount codes – 69% OFF prepaid plans, unlimited data from $7.50, international plans from $10 & earn $38 referral reward. 10 live deals. Save now!",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/lyca-mobile-coupon-code_svvddg.webp",
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
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1781775924/lyca-mobile-coupon-code_svvddg.webp"],
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
      "@id": "https://www.couponsbit.us/stores/lyca-mobile-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/lyca-mobile-coupon-code",
      name: "Lyca Mobile Coupon Codes – Plans From $7.50 & More",
      description:
        "Get verified Lyca Mobile discount codes – 69% OFF prepaid plans, unlimited data from $7.50, international plans from $10 & earn $38 referral reward. 10 live deals. Save now!",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/lyca-mobile-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/lyca-mobile-coupon-code#offerlist",
      name: "Lyca Mobile Coupon Codes & Promo Codes",
      description:
        "Latest verified Lyca Mobile coupon codes, promo codes and discount codes for recharge, SIM plans and international calling.",
      url: "https://www.couponsbit.us/stores/lyca-mobile-coupon-code",
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
            url: "https://www.couponsbit.us/stores/lyca-mobile-coupon-code",
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
      "@id": "https://www.couponsbit.us/stores/lyca-mobile-coupon-code#breadcrumb",
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
          name: "Lyca Mobile Coupons",
          item: "https://www.couponsbit.us/stores/lyca-mobile-coupon-code",
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