import type { Metadata } from "next";
import EtihadCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Etihad Airways Discount Code | Up to 30% OFF + 25% OFF Hotels",
  description:
    "Get the latest Etihad Airways Discount Code and Etihad Airways Voucher to save up to 30% on flights, 25% OFF hotels, and enjoy fares from $522.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/etihad-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/etihad-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/etihad-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/etihad-discount-code",
      "x-default": "https://www.couponsbit.us/stores/etihad-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/etihad-discount-code",
    title: "Etihad Airways Discount Code | Up to 30% OFF + 25% OFF Hotels",
    description:
      "Get the latest Etihad Airways Discount Code and Etihad Airways Voucher to save up to 30% on flights, 25% OFF hotels, and enjoy fares from $522.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784970/etihad-logo_lbl7mo.webp",
        width: 1200,
        height: 630,
        alt: "Etihad Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Etihad Airways Discount Code | Up to 30% OFF + 25% OFF Hotels",
    description:
      "Get the latest Etihad Airways Discount Code and Etihad Airways Voucher to save up to 30% on flights, 25% OFF hotels, and enjoy fares from $522.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784970/etihad-logo_lbl7mo.webp"],
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

const etihadSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/etihad-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/etihad-discount-code",
      name: "Etihad Airways Discount Code | Up to 30% OFF + 25% OFF Hotels",
      description:
        "Get the latest Etihad Airways Discount Code and Etihad Airways Voucher to save up to 30% on flights, 25% OFF hotels, and enjoy fares from $522.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/etihad-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/etihad-discount-code#offerlist",
      name: "Etihad Coupon Codes & Promo Codes",
      description:
        "Latest verified Etihad coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/etihad-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Etihad Coupon Code",
            description:
              "Latest Etihad coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/etihad-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Etihad",
              url: "https://www.etihad.com",
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
      "@id": "https://www.couponsbit.us/stores/etihad-discount-code#breadcrumb",
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
          name: "Etihad Coupons",
          item: "https://www.couponsbit.us/stores/etihad-discount-code",
        },
      ],
    },
  ],
};

export default function EtihadStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(etihadSchema),
        }}
      />
      <EtihadCouponsContent />
    </>
  );
}