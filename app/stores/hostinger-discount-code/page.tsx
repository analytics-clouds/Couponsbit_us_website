import type { Metadata } from "next";
import HostingerCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Hostinger Discount Code | Up to 80% OFF + Free Domain",
  description:
    "Get the latest Hostinger Discount Code and Hostinger Voucher to save up to 80%, get a free domain, free SSL, and hosting from $2.99/month.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/hostinger-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/hostinger-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/hostinger-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/hostinger-discount-code",
      "x-default": "https://www.couponsbit.us/stores/hostinger-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/hostinger-discount-code",
    title: "Hostinger Discount Code | Up to 80% OFF + Free Domain",
    description:
      "Get the latest Hostinger Discount Code and Hostinger Voucher to save up to 80%, get a free domain, free SSL, and hosting from $2.99/month.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1785130842/hostinger-logo_m9ubvs.webp",
        width: 1200,
        height: 630,
        alt: "Hostinger Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hostinger Discount Code | Up to 80% OFF + Free Domain",
    description:
      "Get the latest Hostinger Discount Code and Hostinger Voucher to save up to 80%, get a free domain, free SSL, and hosting from $2.99/month.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1785130842/hostinger-logo_m9ubvs.webp"],
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

const hostingerSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/hostinger-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/hostinger-discount-code",
      name: "Hostinger Discount Code | Up to 80% OFF + Free Domain",
      description:
        "Get the latest Hostinger Discount Code and Hostinger Voucher to save up to 80%, get a free domain, free SSL, and hosting from $2.99/month.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/hostinger-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/hostinger-discount-code#offerlist",
      name: "Hostinger Coupon Codes & Promo Codes",
      description:
        "Latest verified Hostinger coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/hostinger-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Hostinger Coupon Code",
            description:
              "Latest Hostinger coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/hostinger-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Hostinger",
              url: "https://www.hostinger.com",
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
      "@id": "https://www.couponsbit.us/stores/hostinger-discount-code#breadcrumb",
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
          name: "Hostinger Coupons",
          item: "https://www.couponsbit.us/stores/hostinger-discount-code",
        },
      ],
    },
  ],
};

export default function HostingerStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hostingerSchema),
        }}
      />
      <HostingerCouponsContent />
    </>
  );
}