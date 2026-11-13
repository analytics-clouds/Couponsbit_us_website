import type { Metadata } from "next";
import { Suspense } from "react";
import HostingCouponsContent from "./_components/StoreCouponsContent";
import { HOSTING_COUPONS } from "./_components/offers";

const TITLE = "Hosting Promo Code: Save up to 75% on Web Hosting | Nov 2026";
const DESCRIPTION =
  "Use the latest Hosting promo code and discount code to get 75% off Starter Web Hosting or launch your website from just $2.99/month. Verified offers for Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

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
    title: TITLE,
    description: DESCRIPTION,
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
    title: TITLE,
    description: DESCRIPTION,
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

  other: {
    "geo.region": "US",
    "geo.country": "US",
    language: "en-US",
  },
};

const hostingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/hosting-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/hosting-discount-code",
      name: "Hosting Discount Code: 75% Off at $2.99/mo | Nov 2026",
      description:
        "Find the latest Hosting discount codes and web hosting deals for November 2026. Get up to 75% off Starter hosting at $2.99/month, 70% off Pro at $6.99/month, plus Node.js, WordPress, email and AI hosting deals.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
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
      numberOfItems: HOSTING_COUPONS.length,
      itemListElement: HOSTING_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/hosting-discount-code",
          seller: { "@type": "Organization", name: "Hosting", url: "https://www.hosting.com" },
        },
      })),
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
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/hosting-discount-code#brand",
      name: "Hosting",
      url: "https://www.hosting.com",
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

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/hosting-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is web hosting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Web hosting is a service that stores your website's files and makes them accessible to visitors online.",
          },
        },
        {
          "@type": "Question",
          name: "What type of hosting is best for a new website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shared hosting is often suitable for smaller websites and beginners because it generally offers an affordable way to get started. Your requirements may change as your website grows.",
          },
        },
        {
          "@type": "Question",
          name: "Is WordPress hosting different from regular hosting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WordPress hosting is specifically configured or packaged for WordPress websites. Depending on the provider, it may include tools and features designed to simplify WordPress management.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find a hosting promo code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can check CouponsBit for the latest hosting promo code, hosting coupon code, hosting discount code, and voucher offers.",
          },
        },
        {
          "@type": "Question",
          name: "Are hosting promo codes available for existing customers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some promotions are available only to new customers, while others may apply to existing users or specific products. Always review the terms of an individual offer before using it.",
          },
        },
        {
          "@type": "Question",
          name: "Should I choose monthly or annual hosting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your budget and how long you expect to use the service. Annual plans can sometimes offer a lower effective monthly cost, while monthly billing provides greater flexibility.",
          },
        },
        {
          "@type": "Question",
          name: "Do hosting plans include a domain name?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some hosting packages include a domain registration or promotional domain offer, while others charge separately. Check the individual plan's inclusions before purchasing.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. CouponsBit is free to use and helps shoppers find promo codes, coupon codes, vouchers, and discounts from various brands and services.",
          },
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
      <Suspense fallback={null}>
        <HostingCouponsContent />
      </Suspense>
    </>
  );
}