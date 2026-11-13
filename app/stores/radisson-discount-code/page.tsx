import type { Metadata } from "next";
import { Suspense } from "react";
import { RADISSON_COUPONS } from "./_components/offers";
import RadissonCouponsContent from "./_components/StoreCouponsContent";

const TITLE = "Radisson Promo Code: Up to 40% Off + 2,000 Rewards Points | Nov 2026";
const DESCRIPTION = "Use the latest Radisson promo code and discount code to save up to 40% on hotel stays or earn 2,000 Bonus Rewards Points. Verified offers for Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/radisson-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/radisson-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/radisson-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/radisson-discount-code",
      "x-default": "https://www.couponsbit.us/stores/radisson-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/radisson-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784881809/radission-logo_gxjubt.webp",
        width: 1200,
        height: 630,
        alt: "Radisson Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784881809/radission-logo_gxjubt.webp"],
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

const radissonSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/radisson-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/radisson-discount-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      datePublished: "2026-01-01",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/radisson-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/radisson-discount-code#offerlist",
      name: "Radisson Coupon Codes & Promo Codes",
      description:
        "Latest verified Radisson coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/radisson-discount-code",
      numberOfItems: RADISSON_COUPONS.length,
      itemListElement: RADISSON_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/radisson-discount-code",
          seller: { "@type": "Organization", name: "Radisson", url: "https://www.radissonhotels.com" },
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
      "@id": "https://www.couponsbit.us/stores/radisson-discount-code#brand",
      name: "Radisson",
      url: "https://www.radissonhotels.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/radisson-discount-code#breadcrumb",
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
          name: "Radisson Coupons",
          item: "https://www.couponsbit.us/stores/radisson-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/radisson-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Radisson Hotels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Radisson Hotels is a global hospitality group offering hotels, resorts, and extended-stay accommodations through brands such as Radisson Blu, Radisson Collection, Park Plaza, Park Inn by Radisson, and Country Inn & Suites.",
          },
        },
        {
          "@type": "Question",
          name: "Does Radisson Hotels have a loyalty program?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Radisson Rewards allows members to earn points on eligible stays and redeem them for free nights, exclusive offers, and other travel benefits.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book business and leisure stays with Radisson?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Radisson Hotels caters to both business and leisure travelers with properties located in city centers, airport hubs, resort destinations, and popular tourist locations.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find a Radisson Hotels discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Radisson Hotels discount code, Radisson Hotels voucher, Radisson Hotels promo code, and Radisson Hotels coupon code on CouponsBit before making your reservation.",
          },
        },
        {
          "@type": "Question",
          name: "Does Radisson offer meeting and event facilities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many Radisson properties feature meeting rooms, conference venues, banquet halls, and event spaces suitable for business events, weddings, and social gatherings.",
          },
        },
        {
          "@type": "Question",
          name: "Is CouponsBit free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. CouponsBit is completely free and helps travelers discover verified discount codes, vouchers, promo codes, and coupon codes from trusted travel brands.",
          },
        },
      ],
    },
  ],
};

export default function RadissonStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(radissonSchema),
        }}
      />
      <Suspense fallback={null}>
        <RadissonCouponsContent />
      </Suspense>
    </>
  );
}