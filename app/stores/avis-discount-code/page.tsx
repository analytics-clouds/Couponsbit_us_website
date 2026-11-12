import type { Metadata } from "next";
import { Suspense } from "react";
import AvisCouponsContent from "./_components/StoreCouponsContent";
import { AVIS_COUPONS } from "./_components/offers";

const TITLE = "Avis Discount Code: Up to 40% Off + 35% Off Rentals | Nov 2026";
const DESCRIPTION =
  "Save up to 40% with the latest Avis discount code. Get up to 35% off eligible rentals, plus verified car rental deals and exclusive offers this Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/avis-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/avis-discount-code",
      "x-default": "https://www.couponsbit.us/stores/avis-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/avis-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1784618848/avis-logo_sbg9y8.webp",
        width: 1200,
        height: 630,
        alt: "Avis Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1784618848/avis-logo_sbg9y8.webp"],
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

const storeOffers = AVIS_COUPONS.map((coupon, index) => ({
  "@type": "ListItem",
  position: index + 1,
  item: {
    "@type": "Offer",
    name: coupon.title,
    description: coupon.description,
    url: "https://www.couponsbit.us/stores/avis-discount-code",
    seller: {
      "@type": "Organization",
      name: "Avis",
      url: "https://www.avis.com",
    },
  },
}));

const avisSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/avis-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/avis-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/avis-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/avis-discount-code#brand",
      name: "Avis",
      url: "https://www.avis.com",
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1784618848/avis-logo_sbg9y8.webp",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/avis-discount-code#offerlist",
      name: "Avis Coupon Codes & Promo Codes",
      description: "Latest verified Avis coupon codes, promo codes and discount codes for car rentals.",
      url: "https://www.couponsbit.us/stores/avis-discount-code",
      numberOfItems: AVIS_COUPONS.length,
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
      "@id": "https://www.couponsbit.us/stores/avis-discount-code#breadcrumb",
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
          name: "Avis Coupons",
          item: "https://www.couponsbit.us/stores/avis-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/avis-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Avis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Avis is a global car rental company offering vehicles for business travel, vacations, airport transportation, road trips, and long-term rentals.",
          },
        },
        {
          "@type": "Question",
          name: "What types of vehicles does Avis offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Avis provides economy cars, sedans, SUVs, luxury vehicles, pickup trucks, vans, and premium rental options, depending on the location.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book an Avis rental online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Customers can search for available vehicles, compare rental options, and complete reservations through the Avis website or mobile app.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Avis coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Avis coupon codes, Avis promo codes, and exclusive car rental deals on CouponsBit.",
          },
        },
        {
          "@type": "Question",
          name: "Does Avis have airport rental locations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Avis operates at many major airports worldwide, making it easy for travelers to pick up and return rental vehicles.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps users discover verified coupon codes, promotional offers, and discounts from trusted global brands.",
          },
        },
      ],
    },
  ],
};

export default function AvisStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(avisSchema),
        }}
      />
      <Suspense fallback={null}>
        <AvisCouponsContent />
      </Suspense>
    </>
  );
}
