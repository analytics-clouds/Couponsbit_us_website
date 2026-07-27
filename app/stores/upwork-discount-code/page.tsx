import type { Metadata } from "next";
import UpworkCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Upwork Discount Code | Free Plan + 100 Monthly Connects",
  description:
    "Get the latest Upwork Discount Code and Upwork Voucher. Explore free and premium plans, receive 100 monthly Connects, and unlock freelancer tools from $15.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/upwork-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/upwork-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/upwork-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/upwork-discount-code",
      "x-default": "https://www.couponsbit.us/stores/upwork-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/upwork-discount-code",
    title: "Upwork Discount Code | Free Plan + 100 Monthly Connects",
    description:
      "Get the latest Upwork Discount Code and Upwork Voucher. Explore free and premium plans, receive 100 monthly Connects, and unlock freelancer tools from $15.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1785130860/upwork-logo_ki4h2l.webp",
        width: 1200,
        height: 630,
        alt: "Upwork Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Upwork Discount Code | Free Plan + 100 Monthly Connects",
    description:
      "Get the latest Upwork Discount Code and Upwork Voucher. Explore free and premium plans, receive 100 monthly Connects, and unlock freelancer tools from $15.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1785130860/upwork-logo_ki4h2l.webp"],
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

const upworkSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/upwork-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/upwork-discount-code",
      name: "Upwork Discount Code | Free Plan + 100 Monthly Connects",
      description:
        "Get the latest Upwork Discount Code and Upwork Voucher. Explore free and premium plans, receive 100 monthly Connects, and unlock freelancer tools from $15.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/upwork-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/upwork-discount-code#offerlist",
      name: "Upwork Coupon Codes & Promo Codes",
      description:
        "Latest verified Upwork coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/upwork-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Upwork Coupon Code",
            description:
              "Latest Upwork coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/upwork-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Upwork",
              url: "https://www.upwork.com",
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
      "@id": "https://www.couponsbit.us/stores/upwork-discount-code#breadcrumb",
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
          name: "Upwork Coupons",
          item: "https://www.couponsbit.us/stores/upwork-discount-code",
        },
      ],
    },
  ],
};

export default function UpworkStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(upworkSchema),
        }}
      />
      <UpworkCouponsContent />
    </>
  );
}