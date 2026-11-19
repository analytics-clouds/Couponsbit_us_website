import type { Metadata } from "next";
import { Suspense } from "react";
import DiscountTireCouponsContent from "./_components/StoreCouponsContent";
import { COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Grab Up to $130 Off with Discount Tire Promo Code | Nov 2026",
  },
  description:
    "Use a Discount Tire Promo Code and Discount Tire Discount Code to save up to $130 or get $80 off a set of 4 tires. Verified Nov 2026. ",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/discounttire-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/discounttire-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/discounttire-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/discounttire-discount-code",
      "x-default": "https://www.couponsbit.us/stores/discounttire-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/discounttire-discount-code",
    title: "Grab Up to $130 Off with Discount Tire Promo Code | Nov 2026",
    description:
      "Use a Discount Tire Promo Code and Discount Tire Discount Code to save up to $130 or get $80 off a set of 4 tires. Verified Nov 2026. ",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/discounttie-logo_lcrloj.webp",
        width: 1200,
        height: 630,
        alt: "Discount Tire Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Grab Up to $130 Off with Discount Tire Promo Code | Nov 2026",
    description:
      "Use a Discount Tire Promo Code and Discount Tire Discount Code to save up to $130 or get $80 off a set of 4 tires. Verified Nov 2026. ",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/discounttie-logo_lcrloj.webp"],
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

const discountTireSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/discounttire-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/discounttire-discount-code",
      name: "Grab Up to $130 Off with Discount Tire Promo Code | Nov 2026",
      description:
        "Use a Discount Tire Promo Code and Discount Tire Discount Code to save up to $130 or get $80 off a set of 4 tires. Verified Nov 2026. ",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/discounttire-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/discounttire-discount-code#offerlist",
      name: "Discount Tire Coupon Codes & Promo Codes",
      description:
        "Latest verified Discount Tire coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/discounttire-discount-code",
      numberOfItems: COUPONS.length,
      itemListElement: COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/discounttire-discount-code",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "Discount Tire",
            url: "https://www.discounttire.com",
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
      "@id": "https://www.couponsbit.us/stores/discounttire-discount-code#brand",
      name: "Discount Tire",
      url: "https://www.discounttire.com",
      sameAs: ["https://en.wikipedia.org/wiki/Discount_Tire"],
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
      "@id": "https://www.couponsbit.us/stores/discounttire-discount-code#breadcrumb",
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
          name: "Discount Tire Coupons",
          item: "https://www.couponsbit.us/stores/discounttire-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/discounttire-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does Discount Tire sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Discount Tire offers tires, aftermarket wheels, tire and wheel packages, and a variety of tire maintenance services for passenger vehicles, SUVs, trucks, and other vehicles.",
          },
        },
        {
          "@type": "Question",
          name: "Does Discount Tire repair flat tires?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Discount Tire provides flat tire repair for safely repairable punctures following industry guidelines.",
          },
        },
        {
          "@type": "Question",
          name: "Does Discount Tire offer free tire services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many locations offer complimentary services such as tire pressure checks, tire inspections, flat tire repairs for eligible tires, and tire rotations or balancing under qualifying conditions.",
          },
        },
        {
          "@type": "Question",
          name: "Does Discount Tire price match?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Discount Tire offers a Low Price Promise and may match or beat qualifying competitor pricing that meets its policy requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find a Discount Tire discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can browse the latest Discount Tire discount code, Discount Tire promo code, and Discount Tire coupon code on CouponsBit before completing your purchase.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is free to use and helps shoppers discover verified coupons, promo codes, and deals from hundreds of leading brands.",
          },
        },
      ],
    },
  ],
};

export default function DiscountTireStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(discountTireSchema),
        }}
      />
      <Suspense fallback={null}>
        <DiscountTireCouponsContent />
      </Suspense>
    </>
  );
}