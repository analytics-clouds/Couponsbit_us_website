import type { Metadata } from "next";
import KinguinCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Kinguin Coupon Code | Up to 97% OFF Games & Gift Cards",
  description:
    "Get the latest Kinguin Coupon Code & discount code to save up to 97% OFF games, 67% OFF gift cards, games from $1.86, KING'S Pass deals & more.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/kinguin-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/kinguin-coupon-code",
      "en-GB": "https://www.couponsbit.us/stores/kinguin-coupon-code",
      "en-AU": "https://www.couponsbit.us/stores/kinguin-coupon-code",
      "en-CA": "https://www.couponsbit.us/stores/kinguin-coupon-code",
      "en-IN": "https://www.couponsbit.us/stores/kinguin-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/kinguin-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/kinguin-coupon-code",
    title: "Kinguin Coupon Code | Up to 97% OFF Games & Gift Cards",
    description:
      "Get the latest Kinguin Coupon Code & discount code to save up to 97% OFF games, 67% OFF gift cards, games from $1.86, KING'S Pass deals & more.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_AU", "en_CA", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1783494079/kinguin-coupon-code_ugjj9s.jpg",
        width: 1200,
        height: 630,
        alt: "Kinguin Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kinguin Coupon Code | Up to 97% OFF Games & Gift Cards",
    description:
      "Get the latest Kinguin Coupon Code & discount code to save up to 97% OFF games, 67% OFF gift cards, games from $1.86, KING'S Pass deals & more.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1783494079/kinguin-coupon-code_ugjj9s.jpg"],
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

const kinguinSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/kinguin-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/kinguin-coupon-code",
      name: "Kinguin Coupon Code | Up to 97% OFF Games & Gift Cards",
      description:
        "Get the latest Kinguin Coupon Code & discount code to save up to 97% OFF games, 67% OFF gift cards, games from $1.86, KING'S Pass deals & more.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/kinguin-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/kinguin-coupon-code#offerlist",
      name: "Kinguin Coupon Codes & Promo Codes",
      description:
        "Latest verified Kinguin coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/kinguin-coupon-code",
      numberOfItems: 13,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Kinguin Coupon Code",
            description:
              "Latest Kinguin coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/kinguin-coupon-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Australia" },
              { "@type": "Country", name: "Canada" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Kinguin",
              url: "https://www.kinguin.net",
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
      "@id": "https://www.couponsbit.us/stores/kinguin-coupon-code#breadcrumb",
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
          name: "Kinguin Coupons",
          item: "https://www.couponsbit.us/stores/kinguin-coupon-code",
        },
      ],
    },
  ],
};

export default function KinguinStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(kinguinSchema),
        }}
      />
      <KinguinCouponsContent />
    </>
  );
}