import type { Metadata } from "next";
import { Suspense } from "react";
import ZenHotelsCouponsContent from "./_components/StoreCouponsContent";
import { ZEN_HOTELS_COUPONS } from "./_components/offers";

const TITLE = "ZenHotels Discount Code: Get $35 OFF Hotels | Nov 2026";
const DESCRIPTION =
  "Get the latest ZenHotels Discount Code and ZenHotels Promo Code for November 2026. Save $35 OFF app bookings or book hotel stays from $291.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/zen-hotels-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/zen-hotels-discount-code",
      "tr-TR": "https://www.couponsbit.us/stores/zen-hotels-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/zen-hotels-discount-code",
      "de-DE": "https://www.couponsbit.us/stores/zen-hotels-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/zen-hotels-discount-code",
      "en-PK": "https://www.couponsbit.us/stores/zen-hotels-discount-code",
      "x-default": "https://www.couponsbit.us/stores/zen-hotels-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/zen-hotels-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["tr_TR", "en_IN", "de_DE", "en_GB", "en_PK"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/zen-hotels-coupon-code_fbtoik.webp",
        width: 1200,
        height: 630,
        alt: "Zen Hotels Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782288848/zen-hotels-coupon-code_fbtoik.webp"],
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

const zenHotelsOffers = ZEN_HOTELS_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: coupon.title,
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/zen-hotels-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Zen Hotels", url: "https://www.zenhotels.com/" },
}));

const zenhotelsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/zen-hotels-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/zen-hotels-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/zen-hotels-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/zen-hotels-discount-code#brand",
      name: "Zen Hotels",
      url: "https://www.zenhotels.com/",
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/zen-hotels-discount-code#offerlist",
      name: "Zen Hotels Coupon Codes & Promo Codes",
      description: DESCRIPTION,
      url: "https://www.couponsbit.us/stores/zen-hotels-discount-code",
      numberOfItems: ZEN_HOTELS_COUPONS.length,
      itemListElement: zenHotelsOffers.map((offer, index) => ({
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
      "@id": "https://www.couponsbit.us/stores/zen-hotels-discount-code#breadcrumb",
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
          name: "Zen Hotels Coupons",
          item: "https://www.couponsbit.us/stores/zen-hotels-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/zen-hotels-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is ZenHotels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ZenHotels is an online accommodation booking platform that allows users to search, compare, and reserve hotels, apartments, resorts, hostels, and vacation rentals worldwide.",
          },
        },
        {
          "@type": "Question",
          name: "What types of accommodations can I book through ZenHotels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travelers can choose from hotels, apartments, resorts, hostels, vacation homes, and various other lodging options.",
          },
        },
        {
          "@type": "Question",
          name: "Does ZenHotels have a mobile app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Travelers can use the ZenHotels app to search properties, manage bookings, and access travel information on the go.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find ZenHotels coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The latest ZenHotels coupon codes, hotel deals, and promotional offers can be found on CouponsBit.",
          },
        },
        {
          "@type": "Question",
          name: "Does ZenHotels provide member-only discounts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The platform occasionally offers exclusive rates and special deals for registered members.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps users discover discounts, coupon codes, and special promotions from popular travel brands.",
          },
        },
      ],
    },
  ],
};

export default function ZenHotelsStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(zenhotelsSchema),
        }}
      />
      <Suspense fallback={null}>
        <ZenHotelsCouponsContent />
      </Suspense>
    </>
  );
}
