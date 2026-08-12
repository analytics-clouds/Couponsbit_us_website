import type { Metadata } from "next";
import LoveJerkyCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "LovesJerky Discount Code: Free Shipping + $50 Sample | Aug 2026",
  description:
    "Find the latest LovesJerky discount codes and deals for Aug 2026. Get free shipping on orders over $66, a 6-flavor sample pack for $50 with free shipping, plus seasonings from $10 and more.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/lovejurky-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/lovejurky-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/lovejurky-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/lovejurky-discount-code",
      "x-default": "https://www.couponsbit.us/stores/lovejurky-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/lovejurky-discount-code",
    title: "LovesJerky Discount Code: Free Shipping + $50 Sample | Aug 2026",
    description:
      "Find the latest LovesJerky discount codes and deals for Aug 2026. Get free shipping on orders over $66, a 6-flavor sample pack for $50 with free shipping, plus seasonings from $10 and more.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002073/lovejurky-logo_o9v01b.webp",
        width: 1200,
        height: 630,
        alt: "LoveJerky Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LovesJerky Discount Code: Free Shipping + $50 Sample | Aug 2026",
    description:
      "Find the latest LovesJerky discount codes and deals for Aug 2026. Get free shipping on orders over $66, a 6-flavor sample pack for $50 with free shipping, plus seasonings from $10 and more.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002073/lovejurky-logo_o9v01b.webp"],
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

const loveJerkySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/lovejurky-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/lovejurky-discount-code",
      name: "LovesJerky Discount Code: Free Shipping + $50 Sample | Aug 2026",
      description:
        "Find the latest LovesJerky discount codes and deals for Aug 2026. Get free shipping on orders over $66, a 6-flavor sample pack for $50 with free shipping, plus seasonings from $10 and more.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/lovejurky-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/lovejurky-discount-code#offerlist",
      name: "LoveJerky Coupon Codes & Promo Codes",
      description:
        "Latest verified LoveJerky coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/lovejurky-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "LoveJerky Coupon Code",
            description:
              "Latest LoveJerky coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/lovejurky-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "LoveJerky",
              url: "https://www.LovesJerky.com",
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
      "@id": "https://www.couponsbit.us/stores/lovejurky-discount-code#breadcrumb",
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
          name: "LoveJerky Coupons",
          item: "https://www.couponsbit.us/stores/lovejurky-discount-code",
        },
      ],
    },
  ],
};

export default function LoveJerkyStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(loveJerkySchema),
        }}
      />
      <LoveJerkyCouponsContent />
    </>
  );
}