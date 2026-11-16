import type { Metadata } from "next";
import { Suspense } from "react";
import ChewyCouponsContent from "./_components/StoreCouponsContent";
import { COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Chewy Promo Code: Get 50% Off on First Autoship Order| Nov 2026",
  },
  description:
    "Use a Chewy Promo Code and Chewy Discount Code to get 50% off your first order plus a free $15 eGift Card on $49+ orders. Verified Nov 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/chewy-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/chewy-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/chewy-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/chewy-promo-code",
      "x-default": "https://www.couponsbit.us/stores/chewy-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/chewy-promo-code",
    title: "Chewy Promo Code: Get 50% Off on First Autoship Order| Nov 2026",
    description:
      "Use a Chewy Promo Code and Chewy Discount Code to get 50% off your first order plus a free $15 eGift Card on $49+ orders. Verified Nov 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/chewy-logo_nadir3.webp",
        width: 1200,
        height: 630,
        alt: "Chewy Promo Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Chewy Promo Code: Get 50% Off on First Autoship Order| Nov 2026",
    description:
      "Use a Chewy Promo Code and Chewy Discount Code to get 50% off your first order plus a free $15 eGift Card on $49+ orders. Verified Nov 2026.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/chewy-logo_nadir3.webp"],
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

const chewySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/chewy-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/chewy-promo-code",
      name: "Chewy Promo Code: Get 50% Off on First Autoship Order| Nov 2026",
      description:
        "Use a Chewy Promo Code and Chewy Discount Code to get 50% off your first order plus a free $15 eGift Card on $49+ orders. Verified Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/chewy-promo-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/chewy-promo-code#offerlist",
      name: "Chewy Promo Codes & Promo Codes",
      description:
        "Latest verified Chewy coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/chewy-promo-code",
      numberOfItems: COUPONS.length,
      itemListElement: COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/chewy-promo-code",
          seller: {
            "@type": "Organization",
            name: "Chewy",
            url: "https://www.chewy.com",
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
      "@id": "https://www.couponsbit.us/stores/chewy-promo-code#brand",
      name: "Chewy",
      url: "https://www.chewy.com",
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
      "@id": "https://www.couponsbit.us/stores/chewy-promo-code#breadcrumb",
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
          name: "Chewy Coupons",
          item: "https://www.couponsbit.us/stores/chewy-promo-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/chewy-promo-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where can I find a Chewy promo code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Chewy promo codes, Chewy coupon codes, and Chewy discount codes on CouponsBit before completing your purchase.",
          },
        },
        {
          "@type": "Question",
          name: "Does Chewy offer discounts for new customers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chewy may provide promotional offers for eligible new customers. Availability and terms can change, so checking current promotions is recommended.",
          },
        },
        {
          "@type": "Question",
          name: "What products can I buy on Chewy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chewy sells pet food, treats, toys, supplies, medications, supplements, grooming products, and accessories for dogs, cats, and other pets.",
          },
        },
        {
          "@type": "Question",
          name: "What is Chewy Autoship?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Autoship allows customers to schedule recurring deliveries of frequently purchased pet products, making regular shopping more convenient.",
          },
        },
        {
          "@type": "Question",
          name: "Does Chewy sell prescription pet medications?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Chewy offers pharmacy services and eligible prescription pet medications and healthcare products.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. CouponsBit is completely free and helps shoppers discover verified deals and promotional offers from popular brands.",
          },
        },
      ],
    },
  ],
};

export default function ChewyStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(chewySchema),
        }}
      />
      <Suspense fallback={null}>
        <ChewyCouponsContent />
      </Suspense>
    </>
  );
}