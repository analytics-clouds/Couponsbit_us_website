import type { Metadata } from "next";
import { Suspense } from "react";
import OmanAirCouponsContent from "./_components/StoreCouponsContent";
import { OMAN_AIR_COUPONS } from "./_components/offers";

const TITLE = "Oman Air Discount Code: 50% Off + 25% Off | Nov 2026";
const DESCRIPTION =
  "Save up to 50% with the latest Oman Air discount code. Get 25% off select flights and book verified airfare deals on domestic and international routes this Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/oman-air-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/oman-air-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/oman-air-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/oman-air-discount-code",
      "x-default": "https://www.couponsbit.us/stores/oman-air-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/oman-air-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699425/oman-air-logo_ozwu2c.webp",
        width: 1200,
        height: 630,
        alt: "Oman Air Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699425/oman-air-logo_ozwu2c.webp"],
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

const storeOffers = OMAN_AIR_COUPONS.map((coupon, index) => ({
  "@type": "ListItem",
  position: index + 1,
  item: {
    "@type": "Offer",
    name: coupon.title,
    description: coupon.description,
    url: "https://www.couponsbit.us/stores/oman-air-discount-code",
    seller: {
      "@type": "Organization",
      name: "Oman Air",
      url: "https://www.omanair.com",
    },
  },
}));

const omanAirSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/oman-air-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/oman-air-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/oman-air-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/oman-air-discount-code#brand",
      name: "Oman Air",
      url: "https://www.omanair.com",
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699425/oman-air-logo_ozwu2c.webp",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/oman-air-discount-code#offerlist",
      name: "Oman Air Coupon Codes & Promo Codes",
      description: "Latest verified Oman Air coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/oman-air-discount-code",
      numberOfItems: OMAN_AIR_COUPONS.length,
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
      "@id": "https://www.couponsbit.us/stores/oman-air-discount-code#breadcrumb",
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
          name: "Oman Air Coupons",
          item: "https://www.couponsbit.us/stores/oman-air-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/oman-air-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Oman Air?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oman Air is the national airline of the Sultanate of Oman, offering international passenger flights and travel services to destinations across the world.",
          },
        },
        {
          "@type": "Question",
          name: "What services does Oman Air offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oman Air provides international flights, Business and Economy Class travel, Oman Air Holidays vacation packages, Flight Pass options, travel extras, and online booking management.",
          },
        },
        {
          "@type": "Question",
          name: "What is Oman Air Holidays?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oman Air Holidays is the airline's vacation platform that allows travelers to book bundled flight and hotel packages, airport transfers, tours, and travel experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Oman Air promo codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Oman Air promo codes, coupon codes, and exclusive travel deals on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "Does Oman Air offer Business Class?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Oman Air offers premium Business Class cabins on many routes, featuring enhanced comfort, dining, and airport services.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Couponsbit is completely free and helps travelers discover verified coupon codes, promotional offers, and discounts from trusted global brands.",
          },
        },
      ],
    },
  ],
};

export default function OmanAirStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(omanAirSchema),
        }}
      />
      <Suspense fallback={null}>
        <OmanAirCouponsContent />
      </Suspense>
    </>
  );
}
