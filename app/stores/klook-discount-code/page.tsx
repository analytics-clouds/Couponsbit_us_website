import type { Metadata } from "next";
import { Suspense } from "react";
import KlookCouponsContent from "./_components/StoreCouponsContent";
import { KLOOK_COUPONS } from "./_components/offers";

const TITLE = "Klook Promo Code: Up to 50% Off Klook Pass NYC | Nov 2026";
const DESCRIPTION =
  "Save more with the Klook Promo Code and Klook Discount Code. Get up to 50% off Klook Pass NYC plus Singapore staycations from $130. Verified deals, Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/klook-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/klook-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/klook-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/klook-discount-code",
      "x-default": "https://www.couponsbit.us/stores/klook-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/klook-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002063/klook-logo_alzz2a.webp",
        width: 1200,
        height: 630,
        alt: "Klook Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002063/klook-logo_alzz2a.webp"],
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

const klookSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/klook-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/klook-discount-code",
      name: "Klook Discount Code | Save Up to 50% OFF + Singapore Staycation Deals from Just $130.",
      description:
        "Use a Klook Discount Code to save up to 50% OFF on NYC attractions, Book amazing Singapore staycations starting from just $130. Book Universal Studios Hollywood tickets from US$80.85 | Nov 2026.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      datePublished: "2026-01-01",
      dateModified: "2026-11-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/klook-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/klook-discount-code#offerlist",
      name: "Klook Coupon Codes & Promo Codes",
      description:
        "Latest verified Klook coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/klook-discount-code",
      numberOfItems: KLOOK_COUPONS.length,
      itemListElement: KLOOK_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/klook-discount-code",
          seller: { "@type": "Organization", name: "Klook", url: "https://www.klook.com" },
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
      "@id": "https://www.couponsbit.us/stores/klook-discount-code#brand",
      name: "Klook",
      url: "https://www.klook.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/klook-discount-code#breadcrumb",
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
          name: "Klook Coupons",
          item: "https://www.couponsbit.us/stores/klook-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/klook-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Klook?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Klook is an online travel experiences platform that allows users to book attraction tickets, tours, airport transfers, rail passes, eSIMs, and other travel services across destinations worldwide.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find a Klook discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can browse the latest Klook discount codes, promo codes, vouchers, and travel deals on CouponsBit before completing your booking.",
          },
        },
        {
          "@type": "Question",
          name: "Does Klook offer instant booking confirmation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many experiences on Klook include instant confirmation, although availability may vary depending on the activity or service.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book airport transfers through Klook?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Klook offers private and shared airport transfer services in many destinations, helping travelers reach their accommodation more conveniently.",
          },
        },
        {
          "@type": "Question",
          name: "Is Klook available in the United States?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Travelers in the United States can use Klook to book experiences and travel services in destinations around the world.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps users discover verified discount codes and promotional offers from leading travel and lifestyle brands.",
          },
        },
      ],
    },
  ],
};

export default function KlookStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(klookSchema),
        }}
      />
      <Suspense fallback={null}>
        <KlookCouponsContent />
      </Suspense>
    </>
  );
}