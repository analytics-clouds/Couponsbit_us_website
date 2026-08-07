import type { Metadata } from "next";
import AmazonCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Amazon Discount Code | Save Up to 52% OFF + Lenovo Gaming PC from $2,556",
  description:
    "Use an Amazon Discount Code to save up to 52% OFF, including Lenovo Legion Tower 5i Gaming PC deals from $2,556. Shop electronics, fitness, home, beauty, tech and more | Aug 2026",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/amazon-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/amazon-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/amazon-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/amazon-discount-code",
      "x-default": "https://www.couponsbit.us/stores/amazon-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/amazon-discount-code",
    title: "Amazon Discount Code | Save Up to 52% OFF + Lenovo Gaming PC from $2,556",
    description:
      "Use an Amazon Discount Code to save up to 52% OFF, including Lenovo Legion Tower 5i Gaming PC deals from $2,556. Shop electronics, fitness, home, beauty, tech and more | Aug 2026",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp",
        width: 1200,
        height: 630,
        alt: "Amazon Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Amazon Discount Code | Save Up to 52% OFF + Lenovo Gaming PC from $2,556",
    description:
      "Use an Amazon Discount Code to save up to 52% OFF, including Lenovo Legion Tower 5i Gaming PC deals from $2,556. Shop electronics, fitness, home, beauty, tech and more | Aug 2026",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp"],
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

const amazonSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/amazon-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/amazon-discount-code",
      name: "Amazon Discount Code | Save Up to 52% OFF + Lenovo Gaming PC from $2,556",
      description:
        "Use an Amazon Discount Code to save up to 52% OFF, including Lenovo Legion Tower 5i Gaming PC deals from $2,556. Shop electronics, fitness, home, beauty, tech and more | Aug 2026",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/amazon-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/amazon-discount-code#offerlist",
      name: "Amazon Coupon Codes & Promo Codes",
      description:
        "Latest verified Amazon coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/amazon-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Amazon Coupon Code",
            description:
              "Latest Amazon coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/amazon-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Amazon",
              url: "https://www.amazon.com",
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
      "@id": "https://www.couponsbit.us/stores/amazon-discount-code#breadcrumb",
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
          name: "Amazon Coupons",
          item: "https://www.couponsbit.us/stores/amazon-discount-code",
        },
      ],
    },
  ],
};

export default function AmazonStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(amazonSchema),
        }}
      />
      <AmazonCouponsContent />
    </>
  );
}