import type { Metadata } from "next";
import { Suspense } from "react";
import { CARCOVERS_COUPONS } from "./_components/offers";
import CarCoversCouponsContent from "./_components/StoreCouponsContent";

const TITLE = "CarCovers Promo Code: Up to 50% Off + 15% Off | Nov 2026";
const DESCRIPTION = "Use the latest CarCovers promo code and discount code to save up to 50% on clearance plus 15% off storewide. Verified offers for Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/carcovers-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/carcovers-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/carcovers-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/carcovers-discount-code",
      "x-default": "https://www.couponsbit.us/stores/carcovers-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/carcovers-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784895740/carcover-logo_eufopb.webp",
        width: 1200,
        height: 630,
        alt: "CarCovers Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784895740/carcover-logo_eufopb.webp"],
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

const carCoversSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/carcovers-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/carcovers-discount-code",
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
        "@id": "https://www.couponsbit.us/stores/carcovers-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/carcovers-discount-code#offerlist",
      name: "CarCovers Coupon Codes & Promo Codes",
      description:
        "Latest verified CarCovers coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/carcovers-discount-code",
      numberOfItems: CARCOVERS_COUPONS.length,
      itemListElement: CARCOVERS_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/carcovers-discount-code",
          seller: {
            "@type": "Organization",
            name: "CarCovers",
            url: "https://www.carcovers.com",
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
      "@id": "https://www.couponsbit.us/stores/carcovers-discount-code#brand",
      name: "CarCovers",
      url: "https://www.carcovers.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/carcovers-discount-code#breadcrumb",
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
          name: "CarCovers Coupons",
          item: "https://www.couponsbit.us/stores/carcovers-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/carcovers-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is CarCovers.com?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CarCovers.com is an online retailer that specializes in vehicle protection products, including custom-fit and universal-fit car covers and automotive accessories.",
          },
        },
        {
          "@type": "Question",
          name: "What products are available at CarCovers.com?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The website sells car covers, SUV covers, truck covers, motorcycle covers, RV covers, seat covers, floor mats, windshield covers, tire covers, and several other automotive accessories.",
          },
        },
        {
          "@type": "Question",
          name: "Does CarCovers.com sell custom-fit covers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The company offers custom-fit covers designed specifically for different vehicle makes, models, and manufacturing years to provide improved coverage.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find a CarCovers.com discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Visit CouponsBit to discover the latest CarCovers.com discount code, CarCovers.com voucher, CarCovers.com promo code, and CarCovers.com coupon code before placing your order.",
          },
        },
        {
          "@type": "Question",
          name: "Are indoor and outdoor covers available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. CarCovers.com offers covers suitable for both indoor storage and outdoor vehicle protection.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. CouponsBit is completely free and provides verified coupon codes, vouchers, promo codes, and exclusive deals from trusted brands.",
          },
        },
      ],
    },
  ],
};

export default function CarCoversStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(carCoversSchema),
        }}
      />
      <Suspense fallback={null}>
        <CarCoversCouponsContent />
      </Suspense>
    </>
  );
}
