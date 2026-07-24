import type { Metadata } from "next";
import RadissonCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Radisson Discount Code | Up to 40% OFF + 2,000 Bonus Points",
  description:
    "Get the latest Radisson Discount Code and Radisson Voucher to save up to 40% OFF, earn 2,000 Bonus Points, and book hotel stays from $68.31.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/radisson-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/radisson-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/radisson-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/radisson-discount-code",
      "x-default": "https://www.couponsbit.us/stores/radisson-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/radisson-discount-code",
    title: "Radisson Discount Code | Up to 40% OFF + 2,000 Bonus Points",
    description:
      "Get the latest Radisson Discount Code and Radisson Voucher to save up to 40% OFF, earn 2,000 Bonus Points, and book hotel stays from $68.31.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784881809/radission-logo_gxjubt.webp",
        width: 1200,
        height: 630,
        alt: "Radisson Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Radisson Discount Code | Up to 40% OFF + 2,000 Bonus Points",
    description:
      "Get the latest Radisson Discount Code and Radisson Voucher to save up to 40% OFF, earn 2,000 Bonus Points, and book hotel stays from $68.31.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784881809/radission-logo_gxjubt.webp"],
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

const radissonSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/radisson-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/radisson-discount-code",
      name: "Radisson Discount Code | Up to 40% OFF + 2,000 Bonus Points",
      description:
        "Get the latest Radisson Discount Code and Radisson Voucher to save up to 40% OFF, earn 2,000 Bonus Points, and book hotel stays from $68.31.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/radisson-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/radisson-discount-code#offerlist",
      name: "Radisson Coupon Codes & Promo Codes",
      description:
        "Latest verified Radisson coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/radisson-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Radisson Coupon Code",
            description:
              "Latest Radisson coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/radisson-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Radisson",
              url: "https://www.radissonhotels.com",
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
      "@id": "https://www.couponsbit.us/stores/radisson-discount-code#breadcrumb",
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
          name: "Radisson Coupons",
          item: "https://www.couponsbit.us/stores/radisson-discount-code",
        },
      ],
    },
  ],
};

export default function RadissonStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(radissonSchema),
        }}
      />
      <RadissonCouponsContent />
    </>
  );
}