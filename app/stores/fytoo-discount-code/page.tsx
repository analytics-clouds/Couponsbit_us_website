import type { Metadata } from "next";
import { Suspense } from "react";
import FytooCouponsContent from "./_components/StoreCouponsContent";
import { FYTOO_COUPONS } from "./_components/offers";

const TITLE = "Fytoo Discount Code: BOGO 50% OFF + Frames From $1 | Nov 2026";
const DESCRIPTION =
  "Get the latest Fytoo Discount Code and Fytoo Promo Code for November 2026. Enjoy Buy 1, Get 1 50% OFF or shop stylish frames from just $1.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/fytoo-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/fytoo-discount-code",
      "en-CA": "https://www.couponsbit.us/stores/fytoo-discount-code",
      "en-CN": "https://www.couponsbit.us/stores/fytoo-discount-code",
      "x-default": "https://www.couponsbit.us/stores/fytoo-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/fytoo-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/fytoo-logo_pp9aoo.webp",
        width: 1200,
        height: 630,
        alt: "Fytoo Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782114026/fytoo-logo_pp9aoo.webp"],
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

const fytooOffers = FYTOO_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Fytoo ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/fytoo-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Fytoo", url: "https://www.fytoo.com/" },
}));

const fytooSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/fytoo-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/fytoo-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/fytoo-discount-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/fytoo-discount-code#brand",
      name: "Fytoo",
      url: "https://www.fytoo.com/",
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/fytoo-discount-code#offerlist",
      name: "Fytoo Coupon Codes & Promo Codes",
      description:
        "Use a verified Fytoo discount code or promo code — grab frames from just $1 in the flash sale & save up to 40% off selected eyewear collections. Updated November 2026.",
      url: "https://www.couponsbit.us/stores/fytoo-discount-code",
      numberOfItems: FYTOO_COUPONS.length,
      itemListElement: fytooOffers.map((offer, index) => ({
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
      "@id": "https://www.couponsbit.us/stores/fytoo-discount-code#breadcrumb",
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
          name: "Fytoo Coupons",
          item: "https://www.couponsbit.us/stores/fytoo-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/fytoo-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is FYTOO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FYTOO is an online eyewear retailer that offers affordable prescription glasses, sunglasses, reading glasses, and customized lens options.",
          },
        },
        {
          "@type": "Question",
          name: "Does FYTOO sell prescription glasses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Customers can purchase prescription eyeglasses and customize lenses according to their vision requirements.",
          },
        },
        {
          "@type": "Question",
          name: "What types of lenses does FYTOO offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FYTOO offers several lens options, including prescription lenses, progressive lenses, blue-light-blocking lenses, and other customized solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find FYTOO coupon codes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest FYTOO coupon codes and promotional offers on Couponsbit.",
          },
        },
        {
          "@type": "Question",
          name: "Does FYTOO offer sunglasses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. FYTOO offers a variety of sunglasses in different styles and frame designs.",
          },
        },
        {
          "@type": "Question",
          name: "Is Couponsbit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Couponsbit is completely free and helps shoppers discover discounts, promo codes, and special offers from popular brands.",
          },
        },
      ],
    },
  ],
};

export default function FytooStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fytooSchema),
        }}
      />
      <Suspense fallback={null}>
        <FytooCouponsContent />
      </Suspense>
    </>
  );
}
