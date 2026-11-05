import type { Metadata } from "next";
import { Suspense } from "react";
import UnipinCouponsContent from "./_components/StoreCouponsContent";
import { UNIPIN_COUPONS } from "./_components/offers";

const TITLE = "UniPin Discount Code: Get 25% Extra Robux | Nov 2026";
const DESCRIPTION =
  "Get the latest UniPin Discount Code and UniPin Promo Code for November 2026. Enjoy 25% Extra Robux or save up to 17% OFF on eligible game vouchers.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/unipin-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/unipin-discount-code",
      "en-ID": "https://www.couponsbit.us/stores/unipin-discount-code",
      "x-default": "https://www.couponsbit.us/stores/unipin-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/unipin-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782198037/unipijn-coupon-code_nh4xhc.webp",
        width: 1200,
        height: 630,
        alt: "Unipin Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782198037/unipijn-coupon-code_nh4xhc.webp"],
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

const unipinOffers = UNIPIN_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: coupon.title,
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/unipin-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Unipin", url: "https://www.unipin.com/" },
}));

const unipinSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/unipin-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/unipin-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/unipin-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/unipin-discount-code#brand",
      name: "Unipin",
      url: "https://www.unipin.com/",
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/unipin-discount-code#offerlist",
      name: "Unipin Coupon Codes & Promo Codes",
      description: DESCRIPTION,
      url: "https://www.couponsbit.us/stores/unipin-discount-code",
      numberOfItems: UNIPIN_COUPONS.length,
      itemListElement: unipinOffers.map((offer, index) => ({
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
      "@id": "https://www.couponsbit.us/stores/unipin-discount-code#breadcrumb",
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
          name: "Unipin Coupons",
          item: "https://www.couponsbit.us/stores/unipin-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/unipin-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is UniPin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UniPin is a digital entertainment payment platform that allows users to purchase gaming currencies, digital content, game credits, and gift cards for popular games and services.",
          },
        },
        {
          "@type": "Question",
          name: "What games can I top up on UniPin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UniPin supports a variety of games, including Mobile Legends, Free Fire, PUBG Mobile, Roblox, and many other popular gaming titles.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find UniPin coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest UniPin coupon codes, promo offers, and gaming deals on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "Is UniPin safe to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UniPin is a widely recognized gaming payment platform used by millions of players worldwide for digital purchases and game top-ups.",
          },
        },
        {
          "@type": "Question",
          name: "Does UniPin offer digital gift cards?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. UniPin offers access to various gaming-related digital products and gift card options.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Couponsbit is completely free and helps users discover coupon codes, promo offers, and discounts from leading brands and digital platforms.",
          },
        },
      ],
    },
  ],
};

export default function UnipinStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(unipinSchema),
        }}
      />
      <Suspense fallback={null}>
        <UnipinCouponsContent />
      </Suspense>
    </>
  );
}
