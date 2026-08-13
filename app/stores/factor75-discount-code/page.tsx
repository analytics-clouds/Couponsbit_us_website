import type { Metadata } from "next";
import Factor75CouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Factor75 Discount Code: Up to $130 Off + Free Breakfast | August 2026",
  description:
    "Use a verified Factor75 discount code or promo code & save up to $130 off your first meals plus free breakfast for 1 year. New customers save up to $126 off first six boxes. August 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/factor75-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/factor75-discount-code",
      "x-default": "https://www.couponsbit.us/stores/factor75-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/factor75-discount-code",
    title: "Factor75 Discount Code: Up to $130 Off + Free Breakfast | August 2026",
    description:
      "Use a verified Factor75 discount code or promo code & save up to $130 off your first meals plus free breakfast for 1 year. New customers save up to $126 off first six boxes. August 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/factor75-coupon-code_a7lrym.webp",
        width: 1200,
        height: 630,
        alt: "Factor75 Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Factor75 Discount Code: Up to $130 Off + Free Breakfast | August 2026",
    description:
      "Use a verified Factor75 discount code or promo code & save up to $130 off your first meals plus free breakfast for 1 year. New customers save up to $126 off first six boxes. August 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782288848/factor75-coupon-code_a7lrym.webp"],
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

const factor75Schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/factor75-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/factor75-discount-code",
      name: "Factor75 Discount Code: Up to $130 Off + Free Breakfast | August 2026",
      description:
        "Use a verified Factor75 discount code or promo code & save up to $130 off your first meals plus free breakfast for 1 year. New customers save up to $126 off first six boxes. August 2026.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/factor75-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/factor75-discount-code#offerlist",
      name: "Factor75 Coupon Codes & Promo Codes",
      description:
        "Latest verified Factor75 coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/factor75-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Factor75 Coupon Code",
            description:
              "Latest Factor75 coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/factor75-discount-code",
            seller: {
              "@type": "Organization",
              name: "Factor75",
              url: "https://www.bluehost.com",
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
      "@id": "https://www.couponsbit.us/stores/factor75-discount-code#breadcrumb",
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
          name: "Factor75 Coupons",
          item: "https://www.couponsbit.us/stores/factor75-discount-code",
        },
      ],
    },
  ],
};

export default function Factor75StorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(factor75Schema),
        }}
      />
      <Factor75CouponsContent />
    </>
  );
}