import type { Metadata } from "next";
import { Suspense } from "react";
import BluehostCouponsContent from "./_components/StoreCouponsContent";
import { BLUEHOST_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Bluehost Discount Code: Get 69% OFF on Hosting | Nov 2026",
  },
  description:
    "Get the latest Bluehost Discount Code and Bluehost Promo Code for November 2026. Save 69% OFF hosting plans or get WordPress Hosting from $1.99/month.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/bluehost-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/bluehost-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/bluehost-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/bluehost-discount-code",
      "x-default": "https://www.couponsbit.us/stores/bluehost-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/bluehost-discount-code",
    title: "Bluehost Discount Code: Get 69% OFF on Hosting | Nov 2026",
    description:
      "Get the latest Bluehost Discount Code and Bluehost Promo Code for November 2026. Save 69% OFF hosting plans or get WordPress Hosting from $1.99/month.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp",
        width: 1200,
        height: 630,
        alt: "Bluehost Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bluehost Discount Code: Get 69% OFF on Hosting | Nov 2026",
    description:
      "Get the latest Bluehost Discount Code and Bluehost Promo Code for November 2026. Save 69% OFF hosting plans or get WordPress Hosting from $1.99/month.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp"],
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
  other: { 'geo.region': 'US', 'geo.country': 'US', language: 'en-US' },
};

const bluehostSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/bluehost-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/bluehost-discount-code",
      name: "Bluehost Discount Code: Get 69% OFF on Hosting | Nov 2026",
      description:
        "Get the latest Bluehost Discount Code and Bluehost Promo Code for November 2026. Save 69% OFF hosting plans or get WordPress Hosting from $1.99/month.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/bluehost-discount-code#breadcrumb",
      },
    },

    { "@type": "Organization", "@id": "https://www.couponsbit.us/stores/bluehost-discount-code#brand", name: "Bluehost", url: "https://www.bluehost.com" },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/bluehost-discount-code#offerlist",
      name: "Bluehost Coupon Codes & Promo Codes",
      description:
        "Latest verified Bluehost coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/bluehost-discount-code",
      numberOfItems: BLUEHOST_COUPONS.length,
      itemListElement: BLUEHOST_COUPONS.map((coupon, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Offer",
          name: `Bluehost ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
          description: coupon.description,
          url: `https://www.couponsbit.us/stores/bluehost-discount-code#${coupon.id}`,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Bluehost", url: "https://www.bluehost.com" },
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
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/bluehost-discount-code#breadcrumb",
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
          name: "Bluehost Coupons",
          item: "https://www.couponsbit.us/stores/bluehost-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/bluehost-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Bluehost offer coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Bluehost frequently offers promotional discounts, hosting deals, and limited-time offers for both new and existing customers.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Bluehost promo codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Bluehost coupon codes and hosting deals directly on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "Is Bluehost good for WordPress websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Bluehost is widely known for its WordPress hosting solutions and beginner-friendly WordPress tools.",
          },
        },
        {
          "@type": "Question",
          name: "Can I register a domain through Bluehost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Bluehost offers domain registration and management services alongside its hosting products.",
          },
        },
        {
          "@type": "Question",
          name: "Does Bluehost offer hosting for businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Bluehost provides hosting solutions suitable for startups, small businesses, growing companies, and online stores.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Couponsbit is completely free and helps users discover verified discounts, coupon codes, and promotional offers.",
          },
        },
      ],
    },
  ],
};

export default function BluehostStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bluehostSchema),
        }}
      />
      <Suspense fallback={null}>
        <BluehostCouponsContent />
      </Suspense>
    </>
  );
}
