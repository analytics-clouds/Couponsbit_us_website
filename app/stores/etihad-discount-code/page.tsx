import type { Metadata } from "next";
import { Suspense } from "react";
import { ETIHAD_COUPONS } from "./_components/offers";
import EtihadCouponsContent from "./_components/StoreCouponsContent";

const TITLE = "Etihad Airways Discount Code | Up to 30% OFF + 25% OFF Hotels";
const DESCRIPTION = "Get the latest Etihad Airways Discount Code and Etihad Airways Voucher to save up to 30% on flights, 25% OFF hotels, and enjoy fares from $522.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/etihad-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/etihad-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/etihad-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/etihad-discount-code",
      "x-default": "https://www.couponsbit.us/stores/etihad-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/etihad-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784970/etihad-logo_lbl7mo.webp",
        width: 1200,
        height: 630,
        alt: "Etihad Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784970/etihad-logo_lbl7mo.webp"],
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

const etihadSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/etihad-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/etihad-discount-code",
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
        "@id": "https://www.couponsbit.us/stores/etihad-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/etihad-discount-code#offerlist",
      name: "Etihad Coupon Codes & Promo Codes",
      description:
        "Latest verified Etihad coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/etihad-discount-code",
      numberOfItems: ETIHAD_COUPONS.length,
      itemListElement: ETIHAD_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/etihad-discount-code",
          seller: {
            "@type": "Organization",
            name: "Etihad Airways",
            url: "https://www.etihad.com",
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
      "@id": "https://www.couponsbit.us/stores/etihad-discount-code#brand",
      name: "Etihad Airways",
      url: "https://www.etihad.com",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/etihad-discount-code#breadcrumb",
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
          name: "Etihad Coupons",
          item: "https://www.couponsbit.us/stores/etihad-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/etihad-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Etihad Airways?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Etihad Airways is the national airline of the United Arab Emirates, headquartered in Abu Dhabi, offering international flights to destinations across six continents.",
          },
        },
        {
          "@type": "Question",
          name: "Does Etihad Airways fly internationally?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Etihad operates an extensive international network connecting destinations across Europe, Asia, Africa, Australia, North America, and the Middle East.",
          },
        },
        {
          "@type": "Question",
          name: "Can I buy extra baggage online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Etihad allows passengers to purchase additional baggage online before departure, often at lower rates than airport prices.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find an Etihad Airways discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Etihad Airways discount code, Etihad Airways voucher, Etihad Airways promo code, and Etihad Airways coupon code on CouponsBit before booking your flight.",
          },
        },
        {
          "@type": "Question",
          name: "Does Etihad Airways have a loyalty program?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Travelers can join Etihad Guest to earn and redeem miles on flights and partner services.",
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

export default function EtihadStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(etihadSchema),
        }}
      />
      <Suspense fallback={null}>
        <EtihadCouponsContent />
      </Suspense>
    </>
  );
}