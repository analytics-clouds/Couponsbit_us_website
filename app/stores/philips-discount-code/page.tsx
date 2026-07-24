import type { Metadata } from "next";
import PhilipsCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Philips Discount Code | 15% OFF + Save Up to £120",
  description:
    "Get the latest Philips Discount Code and Philips Voucher to enjoy 15% OFF your first order, save up to £120, plus get FREE shipping on orders over £40.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/philips-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/philips-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/philips-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/philips-discount-code",
      "x-default": "https://www.couponsbit.us/stores/philips-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/philips-discount-code",
    title: "Philips Discount Code | 15% OFF + Save Up to £120",
    description:
      "Get the latest Philips Discount Code and Philips Voucher to enjoy 15% OFF your first order, save up to £120, plus get FREE shipping on orders over £40.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784881809/philips-logo_yuwckz.webp",
        width: 1200,
        height: 630,
        alt: "Philips Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Philips Discount Code | 15% OFF + Save Up to £120",
    description:
      "Get the latest Philips Discount Code and Philips Voucher to enjoy 15% OFF your first order, save up to £120, plus get FREE shipping on orders over £40.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784881809/philips-logo_yuwckz.webp"],
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

const philipsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/philips-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/philips-discount-code",
      name: "Philips Discount Code | 15% OFF + Save Up to £120",
      description:
        "Get the latest Philips Discount Code and Philips Voucher to enjoy 15% OFF your first order, save up to £120, plus get FREE shipping on orders over £40.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/philips-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/philips-discount-code#offerlist",
      name: "Philips Coupon Codes & Promo Codes",
      description:
        "Latest verified Philips coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/philips-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Philips Coupon Code",
            description:
              "Latest Philips coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/philips-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Philips",
              url: "https://www.usa.philips.com",
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
      "@id": "https://www.couponsbit.us/stores/philips-discount-code#breadcrumb",
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
          name: "Philips Coupons",
          item: "https://www.couponsbit.us/stores/philips-discount-code",
        },
      ],
    },
  ],
};

export default function PhilipsStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(philipsSchema),
        }}
      />
      <PhilipsCouponsContent />
    </>
  );
}