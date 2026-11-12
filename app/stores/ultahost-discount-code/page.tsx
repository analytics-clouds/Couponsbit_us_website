import type { Metadata } from "next";
import { Suspense } from "react";
import UltahostCouponsContent from "./_components/StoreCouponsContent";
import { ULTAHOST_COUPONS } from "./_components/offers";

const TITLE = "UltaHost Promo Code: Up to 62% Off Hosting Plans | Nov 2026";
const DESCRIPTION =
  "Grab the latest UltaHost promo codes & discount codes for November 2026 and save up to 62% on hosting plans starting from just $2/month.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/ultahost-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/ultahost-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/ultahost-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/ultahost-discount-code",
      "x-default": "https://www.couponsbit.us/stores/ultahost-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/ultahost-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699425/ultahost-logo_zsnpu7.webp",
        width: 1200,
        height: 630,
        alt: "UltaHost Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699425/ultahost-logo_zsnpu7.webp"],
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

const storeOffers = ULTAHOST_COUPONS.map((coupon, index) => ({
  "@type": "ListItem",
  position: index + 1,
  item: {
    "@type": "Offer",
    name: coupon.title,
    description: coupon.description,
    url: "https://www.couponsbit.us/stores/ultahost-discount-code",
    seller: {
      "@type": "Organization",
      name: "UltaHost",
      url: "https://ultahost.com",
    },
  },
}));

const ultahostSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/ultahost-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/ultahost-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/ultahost-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/ultahost-discount-code#brand",
      name: "UltaHost",
      url: "https://ultahost.com",
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699425/ultahost-logo_zsnpu7.webp",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/ultahost-discount-code#offerlist",
      name: "UltaHost Coupon Codes & Promo Codes",
      description: "Latest verified UltaHost coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/ultahost-discount-code",
      numberOfItems: ULTAHOST_COUPONS.length,
      itemListElement: storeOffers,
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
      "@id": "https://www.couponsbit.us/stores/ultahost-discount-code#breadcrumb",
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
          name: "UltaHost Coupons",
          item: "https://www.couponsbit.us/stores/ultahost-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/ultahost-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is UltaHost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UltaHost is an international web hosting provider offering shared hosting, WordPress hosting, VPS hosting, dedicated servers, cloud hosting, reseller hosting, domain registration, and professional email hosting.",
          },
        },
        {
          "@type": "Question",
          name: "Is UltaHost suitable for WordPress websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. UltaHost provides optimized WordPress hosting with enhanced speed, one-click installation, automatic updates, and features designed specifically for WordPress users.",
          },
        },
        {
          "@type": "Question",
          name: "Does UltaHost provide VPS hosting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Customers can choose from both managed and unmanaged VPS hosting plans with scalable resources, root access on eligible plans, and flexible server configurations.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find the latest UltaHost coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can discover updated UltaHost coupon codes, UltaHost promo codes, and exclusive hosting discounts on CouponsBit.",
          },
        },
        {
          "@type": "Question",
          name: "Does UltaHost include website security?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many hosting plans include free SSL certificates, malware scanning, automated backups, firewall protection, and DDoS mitigation to help keep websites secure.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. CouponsBit is completely free and helps users find verified coupon codes, promotional offers, and discounts from trusted brands worldwide.",
          },
        },
      ],
    },
  ],
};

export default function UltahostStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ultahostSchema),
        }}
      />
      <Suspense fallback={null}>
        <UltahostCouponsContent />
      </Suspense>
    </>
  );
}
