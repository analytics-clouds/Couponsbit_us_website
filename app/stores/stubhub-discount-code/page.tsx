import type { Metadata } from "next";
import { Suspense } from "react";
import StubHubCouponsContent from "./_components/StoreCouponsContent";
import { STUBHUB_COUPONS } from "./_components/offers";

const TITLE = "StubHub Discount Code: 10% OFF + $20 OFF | Nov 2026";
const DESCRIPTION =
  "Get the latest StubHub Discount Code and StubHub Promo Code for November 2026. Save 10% OFF orders over $40 or get $20 OFF your first ticket booking.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/stubhub-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/stubhub-discount-code",
      "x-default": "https://www.couponsbit.us/stores/stubhub-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/stubhub-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/stubhub-coupon-code_fplhay.webp",
        width: 1200,
        height: 630,
        alt: "StubHub Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1781775923/stubhub-coupon-code_fplhay.webp"],
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

const stubhubOffers = STUBHUB_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `StubHub ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/stubhub-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: {
    "@type": "Organization",
    name: "StubHub",
    url: "https://www.stubhub.com",
  },
}));

const stubHubSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/stubhub-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/stubhub-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/stubhub-discount-code#breadcrumb",
      },
    },

    // Brand Organization schema for StubHub
    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/stubhub-discount-code#brand",
      name: "StubHub",
      url: "https://www.stubhub.com",
      sameAs: ["https://www.facebook.com/stubhub", "https://twitter.com/stubhub"],
    },

    // ItemList — dynamic from STUBHUB_COUPONS
    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/stubhub-discount-code#offerlist",
      name: "StubHub Coupon Codes & Promo Codes",
      description:
        "Latest verified StubHub coupon codes, promo codes and discount codes for tickets.",
      url: "https://www.couponsbit.us/stores/stubhub-discount-code",
      numberOfItems: STUBHUB_COUPONS.length,
      itemListElement: stubhubOffers.map((offer, index) => ({
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
        url: "https://www.couponsbit.us/logo.png",
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
      "@id": "https://www.couponsbit.us/stores/stubhub-discount-code#breadcrumb",
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
          name: "StubHub Coupons",
          item: "https://www.couponsbit.us/stores/stubhub-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/stubhub-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does StubHub Have a Coupon Code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "StubHub may offer promotional codes, discounts, and special offers at different times. Check CouponsBit for currently available StubHub coupon codes before purchasing tickets.",
          },
        },
        {
          "@type": "Question",
          name: "Where Can I Find a StubHub Promo Code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can check CouponsBit for available StubHub promo codes, discount codes, and ticket offers before completing your order.",
          },
        },
        {
          "@type": "Question",
          name: "Is There a Real StubHub Discount Code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Available promotions can change, so check the current StubHub offers on CouponsBit and review the terms of each deal before using it.",
          },
        },
        {
          "@type": "Question",
          name: "What Can I Buy With StubHub Tickets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "StubHub offers tickets for concerts, professional and college sports, theater, comedy, festivals, and other live entertainment events.",
          },
        },
        {
          "@type": "Question",
          name: "Can I Find StubHub World Cup Tickets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "StubHub may have listings for major international sporting events, including World Cup-related events. Availability and pricing can vary significantly depending on the match and demand.",
          },
        },
        {
          "@type": "Question",
          name: "Can I Find StubHub NFL Tickets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, StubHub features listings for NFL games. Search by team, matchup, location, or event date to find available tickets.",
          },
        },
        {
          "@type": "Question",
          name: "Can I Find StubHub Concert Tickets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. StubHub offers tickets for numerous concerts, tours, and music events. Availability depends on the artist, venue, date, and current listings.",
          },
        },
        {
          "@type": "Question",
          name: "Can I Sell Tickets on StubHub?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eligible ticket holders may be able to list tickets they can no longer use through StubHub's marketplace, subject to the platform's applicable requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit Free to Use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. CouponsBit is free to use. You can browse available coupon codes, promotions, and deals across entertainment, travel, fashion, technology, and other categories.",
          },
        },
      ],
    },
  ],
};

export default function StubHubStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(stubHubSchema),
        }}
      />
      <Suspense fallback={null}>
        <StubHubCouponsContent />
      </Suspense>
    </>
  );
}