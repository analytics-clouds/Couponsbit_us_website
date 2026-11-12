import type { Metadata } from "next";
import { Suspense } from "react";
import { MALAYSIA_AIRLINES_COUPONS } from "./_components/offers";
import MalaysiaAirlinesCouponsContent from "./_components/StoreCouponsContent";

const TITLE = "Malaysia Airlines Promo Code: Up to 35% Off Flights + 5% Extra | Nov 2026";
const DESCRIPTION = "Save with the latest Malaysia Airlines promo code and discount code. Get up to 35% off international flights and an extra 5% off select routes this Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/malaysia-airlines-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/malaysia-airlines-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/malaysia-airlines-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/malaysia-airlines-discount-code",
      "x-default": "https://www.couponsbit.us/stores/malaysia-airlines-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/malaysia-airlines-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784971/malaysia-logo_xso2cj.webp",
        width: 1200,
        height: 630,
        alt: "Malaysia Airlines Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784971/malaysia-logo_xso2cj.webp"],
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

const malaysiaAirlinesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/malaysia-airlines-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/malaysia-airlines-discount-code",
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
        "@id": "https://www.couponsbit.us/stores/malaysia-airlines-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/malaysia-airlines-discount-code#offerlist",
      name: "Malaysia Airlines Coupon Codes & Promo Codes",
      description:
        "Latest verified Malaysia Airlines coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/malaysia-airlines-discount-code",
      numberOfItems: MALAYSIA_AIRLINES_COUPONS.length,
      itemListElement: MALAYSIA_AIRLINES_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/malaysia-airlines-discount-code",
          seller: {
            "@type": "Organization",
            name: "Malaysia Airlines",
            url: "https://www.malaysiaairlines.com",
          },
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
      "@id": "https://www.couponsbit.us/stores/malaysia-airlines-discount-code#brand",
      name: "Malaysia Airlines",
      url: "https://www.malaysiaairlines.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/malaysia-airlines-discount-code#breadcrumb",
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
          name: "Malaysia Airlines Coupons",
          item: "https://www.couponsbit.us/stores/malaysia-airlines-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/malaysia-airlines-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Malaysia Airlines offer coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Malaysia Airlines frequently offers promotional discounts, hosting deals, and limited-time offers for both new and existing customers.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Malaysia Airlines promo codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Malaysia Airlines coupon codes and hosting deals directly on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "Is Malaysia Airlines good for WordPress websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Malaysia Airlines is widely known for its WordPress hosting solutions and beginner-friendly WordPress tools.",
          },
        },
        {
          "@type": "Question",
          name: "Can I register a domain through Malaysia Airlines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Malaysia Airlines offers domain registration and management services alongside its hosting products.",
          },
        },
        {
          "@type": "Question",
          name: "Does Malaysia Airlines offer hosting for businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Malaysia Airlines provides hosting solutions suitable for startups, small businesses, growing companies, and online stores.",
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

export default function MalaysiaAirlinesStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(malaysiaAirlinesSchema),
        }}
      />
      <Suspense fallback={null}>
        <MalaysiaAirlinesCouponsContent />
      </Suspense>
    </>
  );
}