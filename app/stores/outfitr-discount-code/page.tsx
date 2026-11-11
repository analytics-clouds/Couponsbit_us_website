import type { Metadata } from "next";
import { Suspense } from "react";
import OutfitrCouponsContent from "./_components/StoreCouponsContent";
import { OUTFITR_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Outfitr Discount Code: Get 62% OFF Bike Racks | Nov 2026",
  },
  description:
    "Get the latest Outfitr Discount Code and Outfitr Promo Code for November 2026. Save up to 62% OFF bike racks or $189.99 OFF select e-bike racks.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/outfitr-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/outfitr-discount-code",
      "x-default": "https://www.couponsbit.us/stores/outfitr-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/outfitr-discount-code",
    title: "Outfitr Discount Code: Get 62% OFF Bike Racks | Nov 2026",
    description:
      "Get the latest Outfitr Discount Code and Outfitr Promo Code for November 2026. Save up to 62% OFF bike racks or $189.99 OFF select e-bike racks.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782451456/outfitr-coupon-code_zbvad3.jpg",
        width: 1200,
        height: 630,
        alt: "Outfitr Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Outfitr Discount Code: Get 62% OFF Bike Racks | Nov 2026",
    description:
      "Get the latest Outfitr Discount Code and Outfitr Promo Code for November 2026. Save up to 62% OFF bike racks or $189.99 OFF select e-bike racks.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782451456/outfitr-coupon-code_zbvad3.jpg"],
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

const outfitrOffers = OUTFITR_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Outfitr ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/outfitr-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: {
    "@type": "Organization",
    name: "Outfitr",
    url: "https://forcomeecommerceinc.sjv.io/c/6434050/2843329/32890?subId=1015",
  },
}));

const outfitrSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/outfitr-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/outfitr-discount-code",
      name: "Outfitr Discount Code: Get 62% OFF Bike Racks | Nov 2026",
      description:
        "Get the latest Outfitr Discount Code and Outfitr Promo Code for November 2026. Save up to 62% OFF bike racks or $189.99 OFF select e-bike racks.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/outfitr-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/outfitr-discount-code#brand",
      name: "Outfitr",
      url: "https://forcomeecommerceinc.sjv.io/c/6434050/2843329/32890?subId=1015",
      sameAs: ["https://www.facebook.com/outfitr", "https://www.instagram.com/outfitr"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/outfitr-discount-code#offerlist",
      name: "Outfitr Coupon Codes & Promo Codes",
      description:
        "Get the latest Outfitr Discount Code and Outfitr Promo Code for November 2026. Save up to 62% OFF bike racks or $189.99 OFF select e-bike racks.",
      url: "https://www.couponsbit.us/stores/outfitr-discount-code",
      numberOfItems: OUTFITR_COUPONS.length,
      itemListElement: outfitrOffers.map((offer, index) => ({
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
      "@id": "https://www.couponsbit.us/stores/outfitr-discount-code#breadcrumb",
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
          name: "Outfitr Coupons",
          item: "https://www.couponsbit.us/stores/outfitr-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/outfitr-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is OutfitR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "OutfitR is an outdoor gear brand that offers equipment and accessories designed for camping, hiking, travel, and outdoor adventures.",
          },
        },
        {
          "@type": "Question",
          name: "What products does OutfitR sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "OutfitR offers outdoor gear such as backpacks, camping equipment, travel accessories, and other adventure essentials.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find OutfitR coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can browse the latest OutfitR coupon codes, promo offers, and outdoor gear deals on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "Is OutfitR suitable for outdoor enthusiasts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. OutfitR designs products for campers, hikers, travelers, and anyone who enjoys spending time outdoors.",
          },
        },
        {
          "@type": "Question",
          name: "Does OutfitR offer gear for camping and hiking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The brand offers products designed to support a variety of outdoor activities, including camping, hiking, and adventure travel.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Couponsbit is completely free and helps shoppers discover verified coupon codes, promo offers, and discounts from trusted brands.",
          },
        },
      ],
    },
  ],
};

export default function OutfitrStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(outfitrSchema),
        }}
      />
      <Suspense fallback={null}>
        <OutfitrCouponsContent />
      </Suspense>
    </>
  );
}