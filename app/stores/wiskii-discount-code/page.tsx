import type { Metadata } from "next";
import WiskiiCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Wish Discount Code | Unlock Up to 60% OFF on Top Picks",
  description:
    "Find the latest Wish Discount Code and Wish Voucher to unlock up to 60% OFF storewide. Shop trending products, enjoy discounts of up to 67% OFF, and save on thousands of daily deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/wiskii-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/wiskii-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/wiskii-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/wiskii-discount-code",
      "x-default": "https://www.couponsbit.us/stores/wiskii-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/wiskii-discount-code",
    title: "Wish Discount Code | Unlock Up to 60% OFF on Top Picks",
    description:
      "Find the latest Wish Discount Code and Wish Voucher to unlock up to 60% OFF storewide. Shop trending products, enjoy discounts of up to 67% OFF, and save on thousands of daily deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699426/wishki-logo_qveoyb.webp",
        width: 1200,
        height: 630,
        alt: "Wiskii Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wish Discount Code | Unlock Up to 60% OFF on Top Picks",
    description:
      "Find the latest Wish Discount Code and Wish Voucher to unlock up to 60% OFF storewide. Shop trending products, enjoy discounts of up to 67% OFF, and save on thousands of daily deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699426/wishki-logo_qveoyb.webp"],
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

const wishkiSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/wiskii-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/wiskii-discount-code",
      name: "Wish Discount Code | Unlock Up to 60% OFF on Top Picks",
      description:
        "Find the latest Wish Discount Code and Wish Voucher to unlock up to 60% OFF storewide. Shop trending products, enjoy discounts of up to 67% OFF, and save on thousands of daily deals.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/wiskii-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/wiskii-discount-code#offerlist",
      name: "Wiskii Coupon Codes & Promo Codes",
      description:
        "Latest verified Wiskii coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/wiskii-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Wiskii Coupon Code",
            description:
              "Latest Wiskii coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/wiskii-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Wiskii",
              url: "https://www.wishki.com",
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
      "@id": "https://www.couponsbit.us/stores/wiskii-discount-code#breadcrumb",
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
          name: "Wiskii Coupons",
          item: "https://www.couponsbit.us/stores/wiskii-discount-code",
        },
      ],
    },
  ],
};

export default function WiskiiStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(wishkiSchema),
        }}
      />
      <WiskiiCouponsContent />
    </>
  );
}