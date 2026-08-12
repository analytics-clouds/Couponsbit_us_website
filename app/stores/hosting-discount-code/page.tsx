import type { Metadata } from "next";
import HostingCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Hosting Discount Code: 75% Off at $2.99/mo | Aug 2026",
  description:
    "Find the latest Hosting discount codes and web hosting deals for August 2026. Get up to 75% off Starter hosting at $2.99/month, 70% off Pro at $6.99/month, plus Node.js, WordPress, email and AI hosting deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/hosting-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/hosting-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/hosting-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/hosting-discount-code",
      "x-default": "https://www.couponsbit.us/stores/hosting-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/hosting-discount-code",
    title: "Hosting Discount Code: 75% Off at $2.99/mo | Aug 2026",
    description:
      "Find the latest Hosting discount codes and web hosting deals for August 2026. Get up to 75% off Starter hosting at $2.99/month, 70% off Pro at $6.99/month, plus Node.js, WordPress, email and AI hosting deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/Hosting_logo_c17yhb.webp",
        width: 1200,
        height: 630,
        alt: "Hosting Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hosting Discount Code: 75% Off at $2.99/mo | Aug 2026",
    description:
      "Find the latest Hosting discount codes and web hosting deals for August 2026. Get up to 75% off Starter hosting at $2.99/month, 70% off Pro at $6.99/month, plus Node.js, WordPress, email and AI hosting deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/Hosting_logo_c17yhb.webp"],
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

const hostingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/hosting-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/hosting-discount-code",
      name: "Hosting Discount Code: 75% Off at $2.99/mo | Aug 2026",
      description:
        "Find the latest Hosting discount codes and web hosting deals for August 2026. Get up to 75% off Starter hosting at $2.99/month, 70% off Pro at $6.99/month, plus Node.js, WordPress, email and AI hosting deals.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/hosting-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/hosting-discount-code#offerlist",
      name: "Hosting Coupon Codes & Promo Codes",
      description:
        "Latest verified Hosting coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/hosting-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Hosting Coupon Code",
            description:
              "Latest Hosting coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/hosting-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Hosting",
              url: "https://www.hosting.com",
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
      "@id": "https://www.couponsbit.us/stores/hosting-discount-code#breadcrumb",
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
          name: "Hosting Coupons",
          item: "https://www.couponsbit.us/stores/hosting-discount-code",
        },
      ],
    },
  ],
};

export default function HostingStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hostingSchema),
        }}
      />
      <HostingCouponsContent />
    </>
  );
}