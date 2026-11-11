import type { Metadata } from "next";
import { Suspense } from "react";
import DeerValleyCouponsContent from "./_components/StoreCouponsContent";
import { DEER_VALLEY_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "DeerValley Discount Code: Up to 60% OFF | Nov 2026",
  },
  description:
    "Get the latest DeerValley Discount Code and DeerValley Promo Code for November 2026. Save up to 60% OFF on toilets, sinks, vanity mirrors, and more.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/deer-valley-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/deer-valley-discount-code",
      "x-default": "https://www.couponsbit.us/stores/deer-valley-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/deer-valley-discount-code",
    title: "DeerValley Discount Code: Up to 60% OFF | Nov 2026",
    description:
      "Get the latest DeerValley Discount Code and DeerValley Promo Code for November 2026. Save up to 60% OFF on toilets, sinks, vanity mirrors, and more.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782451456/deervalley-coupon-code_yohcn4.jpg",
        width: 1200,
        height: 630,
        alt: "Deer Valley Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DeerValley Discount Code: Up to 60% OFF | Nov 2026",
    description:
      "Get the latest DeerValley Discount Code and DeerValley Promo Code for November 2026. Save up to 60% OFF on toilets, sinks, vanity mirrors, and more.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782451456/deervalley-coupon-code_yohcn4.jpg"],
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

const deervalleyOffers = DEER_VALLEY_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Deer Valley Resort ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/deer-valley-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: {
    "@type": "Organization",
    name: "Deer Valley Resort",
    url: "https://deervalley.sjv.io/c/6434050/1830355/21845?subId1=1015",
  },
}));

const deervalleySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/deer-valley-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/deer-valley-discount-code",
      name: "DeerValley Discount Code: Up to 60% OFF | Nov 2026",
      description:
        "Get the latest DeerValley Discount Code and DeerValley Promo Code for November 2026. Save up to 60% OFF on toilets, sinks, vanity mirrors, and more.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".store-description", ".top-offers", ".faq-section"] },
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/deer-valley-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/deer-valley-discount-code#brand",
      name: "Deer Valley Resort",
      url: "https://www.deervalley.com",
      sameAs: ["https://www.facebook.com/deervalleybath", "https://www.instagram.com/deervalleybath"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/deer-valley-discount-code#offerlist",
      name: "Deer Valley Coupon Codes & Promo Codes",
      description:
        "Get the latest DeerValley Discount Code and DeerValley Promo Code for November 2026. Save up to 60% OFF on toilets, sinks, vanity mirrors, and more.",
      url: "https://www.couponsbit.us/stores/deer-valley-discount-code",
      numberOfItems: DEER_VALLEY_COUPONS.length,
      itemListElement: deervalleyOffers.map((offer, index) => ({
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
      "@id": "https://www.couponsbit.us/stores/deer-valley-discount-code#breadcrumb",
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
          name: "Deer Valley Coupons",
          item: "https://www.couponsbit.us/stores/deer-valley-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/deer-valley-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Deer Valley Bath?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Deer Valley Bath is a home improvement brand offering bathroom and kitchen fixtures, including smart toilets, vanities, sinks, bathtubs, mirrors, and accessories.",
          },
        },
        {
          "@type": "Question",
          name: "Does Deer Valley Bath sell smart toilets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The brand offers a range of smart toilets with features such as heated seats, automatic flushing, warm air dryers, self-cleaning nozzles, and adjustable washing functions.",
          },
        },
        {
          "@type": "Question",
          name: "What products are available from Deer Valley Bath?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Customers can shop for bathroom vanities, toilets, bathroom sinks, kitchen sinks, mirrors, bathtubs, shower doors, faucets, and accessories.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find Deer Valley Bath coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can browse the latest Deer Valley Bath coupon codes, promo offers, and home improvement deals on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "Is Deer Valley Bath suitable for home renovation projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The brand offers products designed for homeowners, contractors, remodelers, and interior designers working on both new construction and renovation projects.",
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

export default function DeerValleyStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(deervalleySchema),
        }}
      />
      <Suspense fallback={null}>
        <DeerValleyCouponsContent />
      </Suspense>
    </>
  );
}