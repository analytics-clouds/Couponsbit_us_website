import type { Metadata } from "next";
import { Suspense } from "react";
import HostingerCouponsContent from "./_components/StoreCouponsContent";
import { HOSTINGER_COUPONS } from "./_components/offers";

const TITLE = "Hostinger Discount Code: Get 80% OFF Hosting | Nov 2026";
const DESCRIPTION =
  "Get the latest Hostinger Discount Code and Hostinger Promo Code for November 2026. Save up to 80% OFF hosting or get plans from $2.99/month.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

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
    title: TITLE,
    description: DESCRIPTION,
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
    title: TITLE,
    description: DESCRIPTION,
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

  other: { "geo.region": "US", "geo.country": "US", language: "en-US" },
};

const hostingerOffers = HOSTINGER_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Hostinger ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/hostinger-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Hostinger", url: "https://www.hostinger.com" },
}));

const hostingerSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/hostinger-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/hostinger-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/hostinger-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/hostinger-discount-code#brand",
      name: "Hostinger",
      url: "https://www.hostinger.com",
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/hostinger-discount-code#offerlist",
      name: "Hostinger Coupon Codes & Promo Codes",
      description:
        "Latest verified Hostinger coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/hostinger-discount-code",
      numberOfItems: HOSTINGER_COUPONS.length,
      itemListElement: hostingerOffers.map((offer, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: offer,
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

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/hostinger-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Hostinger?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hostinger is a global web hosting company that provides shared hosting, WordPress hosting, cloud hosting, VPS hosting, domain registration, email hosting, and website-building solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Is Hostinger good for WordPress websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Hostinger offers WordPress-optimized hosting with one-click installation, automatic updates, enhanced security, and performance optimization.",
          },
        },
        {
          "@type": "Question",
          name: "Does Hostinger offer VPS hosting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Hostinger provides VPS hosting with dedicated resources, root access, and scalable configurations for developers and growing businesses.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find a Hostinger discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Hostinger discount code, Hostinger voucher, Hostinger promo code, and Hostinger coupon code on CouponsBit.",
          },
        },
        {
          "@type": "Question",
          name: "Does Hostinger include a website builder?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Hostinger offers an AI-powered website builder that helps users create professional websites without coding experience.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps users discover verified coupon codes, vouchers, promo offers, and discounts from trusted global brands.",
          },
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
      <Suspense fallback={null}>
        <HostingerCouponsContent />
      </Suspense>
    </>
  );
}
