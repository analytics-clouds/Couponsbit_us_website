import type { Metadata } from "next";
import SintraCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Sintra Coupon Codes – Save 70% on AI Plans & More",
  description:
    "Get verified Sintra discount codes – 70% OFF annual plan, 60% OFF 3-month plan, 50% OFF monthly & AI plans from $15.60/mo. 5 live deals. Save now!",

  alternates: {
    canonical: "https://couponsbit.us/stores/sintra-coupon-code",
    languages: {
      "en-US": "https://couponsbit.us/stores/sintra-coupon-code",
      "x-default": "https://couponsbit.us/stores/sintra-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://couponsbit.us/stores/sintra-coupon-code",
    title: "Sintra Coupon Codes – Save 70% on AI Plans & More",
    description:
      "Get verified Sintra discount codes – 70% OFF annual plan, 60% OFF 3-month plan, 50% OFF monthly & AI plans from $15.60/mo. 5 live deals. Save now!",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sintra Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sintra Coupon Codes – Save 70% on AI Plans & More",
    description:
      "Get verified Sintra discount codes – 70% OFF annual plan, 60% OFF 3-month plan, 50% OFF monthly & AI plans from $15.60/mo. 5 live deals. Save now!",
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

const sintraSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://couponsbit.us/stores/sintra-coupon-code#webpage",
      url: "https://couponsbit.us/stores/sintra-coupon-code",
      name: "Sintra Coupon Codes – Save 70% on AI Plans & More",
      description:
        "Get verified Sintra discount codes – 70% OFF annual plan, 60% OFF 3-month plan, 50% OFF monthly & AI plans from $15.60/mo. 5 live deals. Save now!",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/stores/sintra-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://couponsbit.us/stores/sintra-coupon-code#offerlist",
      name: "Sintra Coupon Codes & Promo Codes",
      description:
        "Latest verified Sintra coupon codes, promo codes and discount codes for AI business automation plans and subscriptions.",
      url: "https://couponsbit.us/stores/sintra-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Sintra Coupon Code",
            description:
              "Latest Sintra coupon code for AI business tools and automation subscription discounts.",
            url: "https://couponsbit.us/stores/sintra-coupon-code",
            seller: {
              "@type": "Organization",
              name: "Sintra",
              url: "https://sintra.ai",
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
      "@id": "https://couponsbit.us/stores/sintra-coupon-code#breadcrumb",
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
          name: "Sintra Coupons",
          item: "https://couponsbit.us/stores/sintra-coupon-code",
        },
      ],
    },
  ],
};

export default function SintraStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sintraSchema),
        }}
      />
      <SintraCouponsContent />
    </>
  );
}