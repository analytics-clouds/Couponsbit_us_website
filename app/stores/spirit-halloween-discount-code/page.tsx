import type { Metadata } from "next";
import SpiritHalloweenCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Spirit Halloween Discount Code | Save Up to 75% OFF",
  description:
    "Find the latest Spirit Halloween Discount Code and Spirit Halloween Voucher to save up to 75% OFF animatronics, costumes, décor, collectibles, plus FREE shipping on orders over $40.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/spirit-halloween-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/spirit-halloween-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/spirit-halloween-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/spirit-halloween-discount-code",
      "x-default": "https://www.couponsbit.us/stores/spirit-halloween-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/spirit-halloween-discount-code",
    title: "Spirit Halloween Discount Code | Save Up to 75% OFF",
    description:
      "Find the latest Spirit Halloween Discount Code and Spirit Halloween Voucher to save up to 75% OFF animatronics, costumes, décor, collectibles, plus FREE shipping on orders over $40.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699426/spirti-logo_x4nbor.webp",
        width: 1200,
        height: 630,
        alt: "Spirit Halloween Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Spirit Halloween Discount Code | Save Up to 75% OFF",
    description:
      "Find the latest Spirit Halloween Discount Code and Spirit Halloween Voucher to save up to 75% OFF animatronics, costumes, décor, collectibles, plus FREE shipping on orders over $40.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699426/spirti-logo_x4nbor.webp"],
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

const spiritHalloweenSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/spirit-halloween-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/spirit-halloween-discount-code",
      name: "Spirit Halloween Discount Code | Save Up to 75% OFF",
      description:
        "Find the latest Spirit Halloween Discount Code and Spirit Halloween Voucher to save up to 75% OFF animatronics, costumes, décor, collectibles, plus FREE shipping on orders over $40.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/spirit-halloween-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/spirit-halloween-discount-code#offerlist",
      name: "Spirit Halloween Coupon Codes & Promo Codes",
      description:
        "Latest verified Spirit Halloween coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/spirit-halloween-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Spirit Halloween Coupon Code",
            description:
              "Latest Spirit Halloween coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/spirit-halloween-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Spirit Halloween",
              url: "https://www.spirithalloween.com",
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
      "@id": "https://www.couponsbit.us/stores/spirit-halloween-discount-code#breadcrumb",
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
          name: "Spirit Halloween Coupons",
          item: "https://www.couponsbit.us/stores/spirit-halloween-discount-code",
        },
      ],
    },
  ],
};

export default function SpiritHalloweenStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(spiritHalloweenSchema),
        }}
      />
      <SpiritHalloweenCouponsContent />
    </>
  );
}