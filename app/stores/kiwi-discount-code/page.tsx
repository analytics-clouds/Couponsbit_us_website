import type { Metadata } from "next";
import { Suspense } from "react";
import KiwiCouponsContent from "./_components/StoreCouponsContent";
import { KIWI_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Kiwi Discount Code: Get Flights from $64 | Nov 2026",
  },
  description:
    "Get the latest Kiwi Discount Code and Kiwi Promo Code for November 2026. Book flights from $64 and unlock travel rewards worth up to $580 with Kiwi.com Club.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/kiwi-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/kiwi-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/kiwi-discount-code",
      "x-default": "https://www.couponsbit.us/stores/kiwi-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/kiwi-discount-code",
    title: "Kiwi Discount Code: Get Flights from $64 | Nov 2026",
    description:
      "Get the latest Kiwi Discount Code and Kiwi Promo Code for November 2026. Book flights from $64 and unlock travel rewards worth up to $580 with Kiwi.com Club.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/kiwi-logo_egovdr.webp",
        width: 1200,
        height: 630,
        alt: "Kiwi Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kiwi Discount Code: Get Flights from $64 | Nov 2026",
    description:
      "Get the latest Kiwi Discount Code and Kiwi Promo Code for November 2026. Book flights from $64 and unlock travel rewards worth up to $580 with Kiwi.com Club.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782730730/kiwi-logo_egovdr.webp"],
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

const kiwiOffers = KIWI_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Kiwi.com ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/kiwi-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: {
    "@type": "Organization",
    name: "Kiwi.com",
    url: "https://tracking.syndicmarketing.com/c?o=21418851&m=23654&a=636605&&sub_aff_id=1015",
  },
}));

const kiwiSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/kiwi-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/kiwi-discount-code",
      name: "Kiwi Discount Code: Get Flights from $64 | Nov 2026",
      description:
        "Get the latest Kiwi Discount Code and Kiwi Promo Code for November 2026. Book flights from $64 and unlock travel rewards worth up to $580 with Kiwi.com Club.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/kiwi-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/kiwi-discount-code#brand",
      name: "Kiwi.com",
      url: "https://www.kiwi.com",
      sameAs: ["https://www.facebook.com/kiwi.com", "https://twitter.com/kiwicom247"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/kiwi-discount-code#offerlist",
      name: "Kiwi Coupon Codes & Promo Codes",
      description:
        "Get the latest Kiwi Discount Code and Kiwi Promo Code for November 2026. Book flights from $64 and unlock travel rewards worth up to $580 with Kiwi.com Club.",
      url: "https://www.couponsbit.us/stores/kiwi-discount-code",
      numberOfItems: KIWI_COUPONS.length,
      itemListElement: kiwiOffers.map((offer, index) => ({
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
      "@id": "https://www.couponsbit.us/stores/kiwi-discount-code#breadcrumb",
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
          name: "Kiwi Coupons",
          item: "https://www.couponsbit.us/stores/kiwi-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/kiwi-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Kiwi.com?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kiwi.com is an online travel booking platform that helps travelers compare and book flights while using advanced technology to create unique flight combinations across hundreds of airlines.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Kiwi.com Guarantee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Kiwi.com Guarantee is an optional service that provides benefits such as disruption protection, automatic check-in, real-time travel updates, and customer support for eligible bookings.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kiwi.com support multi-city trips?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kiwi.com's Nomad feature helps travelers build cost-effective multi-city itineraries automatically.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Kiwi.com promo codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Kiwi.com promo codes, coupon codes, and travel deals on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book international flights through Kiwi.com?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kiwi.com offers domestic and international flight options across hundreds of airlines and destinations worldwide.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Couponsbit is completely free and helps travelers discover verified coupon codes, promo offers, and travel discounts from trusted brands.",
          },
        },
      ],
    },
  ],
};

export default function KiwiStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(kiwiSchema),
        }}
      />
      <Suspense fallback={null}>
        <KiwiCouponsContent />
      </Suspense>
    </>
  );
}