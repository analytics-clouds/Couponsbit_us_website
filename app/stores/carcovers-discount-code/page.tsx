import type { Metadata } from "next";
import CarCoversCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "CarCovers Discount Code | $30 OFF + Free $41 Care Kit",
  description:
    "Get the latest CarCovers Discount Code and CarCovers Voucher to save $30 on premium covers, enjoy FREE shipping, and receive a FREE $41 Super Care Kit.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/carcovers-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/carcovers-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/carcovers-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/carcovers-discount-code",
      "x-default": "https://www.couponsbit.us/stores/carcovers-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/carcovers-discount-code",
    title: "CarCovers Discount Code | $30 OFF + Free $41 Care Kit",
    description:
      "Get the latest CarCovers Discount Code and CarCovers Voucher to save $30 on premium covers, enjoy FREE shipping, and receive a FREE $41 Super Care Kit.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784895740/carcover-logo_eufopb.webp",
        width: 1200,
        height: 630,
        alt: "CarCovers Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CarCovers Discount Code | $30 OFF + Free $41 Care Kit",
    description:
      "Get the latest CarCovers Discount Code and CarCovers Voucher to save $30 on premium covers, enjoy FREE shipping, and receive a FREE $41 Super Care Kit.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784895740/carcover-logo_eufopb.webp"],
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

const carCoversSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/carcovers-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/carcovers-discount-code",
      name: "CarCovers Discount Code | $30 OFF + Free $41 Care Kit",
      description:
        "Get the latest CarCovers Discount Code and CarCovers Voucher to save $30 on premium covers, enjoy FREE shipping, and receive a FREE $41 Super Care Kit.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/carcovers-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/carcovers-discount-code#offerlist",
      name: "CarCovers Coupon Codes & Promo Codes",
      description:
        "Latest verified CarCovers coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/carcovers-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "CarCovers Coupon Code",
            description:
              "Latest CarCovers coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/carcovers-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "CarCovers",
              url: "https://www.carcovers.com",
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
      "@id": "https://www.couponsbit.us/stores/carcovers-discount-code#breadcrumb",
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
          name: "CarCovers Coupons",
          item: "https://www.couponsbit.us/stores/carcovers-discount-code",
        },
      ],
    },
  ],
};

export default function CarCoversStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(carCoversSchema),
        }}
      />
      <CarCoversCouponsContent />
    </>
  );
}