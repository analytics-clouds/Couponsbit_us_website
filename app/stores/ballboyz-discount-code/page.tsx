import type { Metadata } from "next";
import { Suspense } from "react";
import BallboyzCouponsContent from "./_components/StoreCouponsContent";
import { BALLBOYZ_COUPONS } from "./_components/offers";

const TITLE = "BallBoyz Discount Code: 50% OFF Acne Care | Nov 2026";
const DESCRIPTION =
  "Get the latest BallBoyz Discount Code and BallBoyz Promo Code for November 2026. Save 50% OFF acne care kits or $60 OFF the Full Body Acne Gameplan.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/ballboyz-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/ballboyz-discount-code",
      "x-default": "https://www.couponsbit.us/stores/ballboyz-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/ballboyz-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/ballboyz-coupon-code_rduo3k.jpg",
        width: 1200,
        height: 630,
        alt: "Ballboyz Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782373660/ballboyz-coupon-code_rduo3k.jpg"],
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

const ballboyzSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/ballboyz-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/ballboyz-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/ballboyz-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/ballboyz-discount-code#offerlist",
      name: "Ballboyz Coupon Codes & Promo Codes",
      description: DESCRIPTION,
      url: "https://www.couponsbit.us/stores/ballboyz-discount-code",
      numberOfItems: BALLBOYZ_COUPONS.length,
      itemListElement: BALLBOYZ_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: `https://www.couponsbit.us/stores/ballboyz-discount-code#${c.id}`,
          seller: { "@type": "Organization", name: "Ballboyz", url: "https://ballboyz.pxf.io/c/6434050/2197523/28283?subId1=1015" },
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
      "@id": "https://www.couponsbit.us/stores/ballboyz-discount-code#brand",
      name: "Ballboyz",
      url: "https://ballboyz.pxf.io/c/6434050/2197523/28283?subId1=1015",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/ballboyz-discount-code#breadcrumb",
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
          name: "Ballboyz Coupons",
          item: "https://www.couponsbit.us/stores/ballboyz-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/ballboyz-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Ballboyz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ballboyz is an athlete-focused skincare brand that develops products designed to address sports-related acne and skincare concerns.",
          },
        },
        {
          "@type": "Question",
          name: "Who are Ballboyz products designed for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The products are primarily designed for athletes and active individuals who experience skincare challenges related to sweat, training, and sports equipment.",
          },
        },
        {
          "@type": "Question",
          name: "What products does Ballboyz sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The brand offers face scrubs, body acne products, skincare bundles, acne patches, and athlete-focused skincare solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Ballboyz coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Ballboyz coupon codes, promo offers, and athlete skincare deals on CouponsBit.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. CouponsBit is completely free and helps users discover valuable discounts from popular brands.",
          },
        },
      ],
    },
  ],
};

export default function BallboyzStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ballboyzSchema),
        }}
      />
      <Suspense fallback={null}>
        <BallboyzCouponsContent />
      </Suspense>
    </>
  );
}
