import type { Metadata } from "next";
import { Suspense } from "react";
import UpworkCouponsContent from "./_components/StoreCouponsContent";
import { UPWORK_COUPONS } from "./_components/offers";

const TITLE = "Upwork Promo Code: 50% Off + Plan from $19.99 | Nov 2026";
const DESCRIPTION = "Use the latest Upwork promo code and discount code to get 50% off your first Plus Membership month or subscribe from just $19.99/month. Verified for Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

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
    title: TITLE,
    description: DESCRIPTION,
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
    title: TITLE,
    description: DESCRIPTION,
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

  other: {
    "geo.region": "US",
    "geo.country": "US",
    language: "en-US",
  },
};

const upworkSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/upwork-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/upwork-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      datePublished: "2026-01-01",
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
      numberOfItems: UPWORK_COUPONS.length,
      itemListElement: UPWORK_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/upwork-discount-code",
          seller: { "@type": "Organization", name: "Upwork", url: "https://www.upwork.com" },
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
      "@id": "https://www.couponsbit.us/stores/upwork-discount-code#brand",
      name: "Upwork",
      url: "https://www.upwork.com",
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

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/upwork-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Upwork?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Upwork is a global freelance marketplace where businesses can hire professionals for projects such as software development, writing, design, marketing, customer support, accounting, and more.",
          },
        },
        {
          "@type": "Question",
          name: "Who can use Upwork?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both businesses and freelancers can use Upwork. Clients hire professionals for projects, while freelancers use the platform to find work and grow their careers.",
          },
        },
        {
          "@type": "Question",
          name: "What services are available on Upwork?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Upwork offers services across software development, design, writing, digital marketing, AI, finance, legal support, customer service, virtual assistance, engineering, and many other professional categories.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find an Upwork discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Upwork discount code, Upwork voucher, Upwork promo code, and Upwork coupon code on CouponsBit before purchasing eligible services or memberships.",
          },
        },
        {
          "@type": "Question",
          name: "Does Upwork offer secure payments?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Upwork provides secure payment processing, milestone payments for fixed-price projects, hourly payment protection, and contract management tools.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps users discover verified discount codes, vouchers, promo codes, and coupon codes from trusted global brands.",
          },
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
      <Suspense fallback={null}>
        <UpworkCouponsContent />
      </Suspense>
    </>
  );
}
