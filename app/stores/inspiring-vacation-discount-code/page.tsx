import type { Metadata } from "next";
import { Suspense } from "react";
import { INSPIRING_VACATION_COUPONS } from "./_components/offers";
import InspiringVacationCouponsContent from "./_components/StoreCouponsContent";

const TITLE = "Inspiring Vacations Discount Code: Up to 50% Off | Nov 2026";
const DESCRIPTION = "Use the latest Inspiring Vacations promo code and discount code to save up to 50% on select tours. Verified offers for Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/inspiring-vacation-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/inspiring-vacation-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/inspiring-vacation-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/inspiring-vacation-discount-code",
      "x-default": "https://www.couponsbit.us/stores/inspiring-vacation-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/inspiring-vacation-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784971/inspiring-vacation-logo_mokiew.webp",
        width: 1200,
        height: 630,
        alt: "Inspiring Vacation Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784971/inspiring-vacation-logo_mokiew.webp"],
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

const inspiringVacationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/inspiring-vacation-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/inspiring-vacation-discount-code",
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
        "@id": "https://www.couponsbit.us/stores/inspiring-vacation-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/inspiring-vacation-discount-code#offerlist",
      name: "Inspiring Vacation Coupon Codes & Promo Codes",
      description:
        "Latest verified Inspiring Vacation coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/inspiring-vacation-discount-code",
      numberOfItems: INSPIRING_VACATION_COUPONS.length,
      itemListElement: INSPIRING_VACATION_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/inspiring-vacation-discount-code",
          seller: {
            "@type": "Organization",
            name: "Inspiring Vacations",
            url: "https://www.inspiringvacations.com",
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
      "@id": "https://www.couponsbit.us/stores/inspiring-vacation-discount-code#brand",
      name: "Inspiring Vacations",
      url: "https://www.inspiringvacations.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/inspiring-vacation-discount-code#breadcrumb",
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
          name: "Inspiring Vacation Coupons",
          item: "https://www.couponsbit.us/stores/inspiring-vacation-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/inspiring-vacation-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Inspiring Vacations offer discount codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Inspiring Vacations occasionally offers discount codes, special promotions, and limited-time travel deals throughout the year.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Inspiring Vacations deals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Inspiring Vacations discount codes, travel offers, and holiday deals on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use a discount code on all holiday packages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Offer eligibility varies depending on the promotion. Some discounts may apply only to selected tours, destinations, or booking periods.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to book an Inspiring Vacations holiday?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many travellers find excellent value during seasonal promotions, early bird sales, and major travel events throughout the year.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Couponsbit is completely free and helps travellers discover verified deals, holiday offers, and travel savings opportunities.",
          },
        },
      ],
    },
  ],
};

export default function InspiringVacationStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(inspiringVacationSchema),
        }}
      />
      <Suspense fallback={null}>
        <InspiringVacationCouponsContent />
      </Suspense>
    </>
  );
}