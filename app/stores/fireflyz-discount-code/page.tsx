import type { Metadata } from "next";
import { Suspense } from "react";
import { FIREFLYZ_COUPONS } from "./_components/offers";
import FireflyzCouponsContent from "./_components/StoreCouponsContent";

const TITLE = "Firefly Promo Code: 60% OFF Baggage + Extra 5% OFF | Nov 2026";
const DESCRIPTION = "Save with the latest Firefly Promo code and Firefly discount code. Get up to 60% OFF extra baggage plus an extra 5% OFF Summer Travel flights this Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/fireflyz-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/fireflyz-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/fireflyz-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/fireflyz-discount-code",
      "x-default": "https://www.couponsbit.us/stores/fireflyz-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/fireflyz-discount-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784971/firefly-logo_ju6n0p.webp",
        width: 1200,
        height: 630,
        alt: "Fireflyz Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784784971/firefly-logo_ju6n0p.webp"],
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

const fireflyzSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/fireflyz-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/fireflyz-discount-code",
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
        "@id": "https://www.couponsbit.us/stores/fireflyz-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/fireflyz-discount-code#offerlist",
      name: "Fireflyz Coupon Codes & Promo Codes",
      description:
        "Latest verified Fireflyz coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/fireflyz-discount-code",
      numberOfItems: FIREFLYZ_COUPONS.length,
      itemListElement: FIREFLYZ_COUPONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: c.title,
          description: c.description,
          url: "https://www.couponsbit.us/stores/fireflyz-discount-code",
          seller: {
            "@type": "Organization",
            name: "Fireflyz",
            url: "https://www.fireflyz.com.my",
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
      "@id": "https://www.couponsbit.us/stores/fireflyz-discount-code#brand",
      name: "Fireflyz",
      url: "https://www.fireflyz.com.my",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/fireflyz-discount-code#breadcrumb",
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
          name: "Fireflyz Coupons",
          item: "https://www.couponsbit.us/stores/fireflyz-discount-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/fireflyz-discount-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Firefly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Firefly is a Malaysian regional airline owned by Malaysia Aviation Group that operates domestic and international flights across Malaysia and selected Southeast Asian destinations.",
          },
        },
        {
          "@type": "Question",
          name: "Where does Firefly fly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Firefly serves destinations across Malaysia as well as selected cities in Singapore, Thailand, and Indonesia through its regional network.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I find a Firefly discount code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can find the latest Firefly discount code, Firefly voucher, Firefly promo code, and Firefly coupon code on CouponsBit before booking your flight.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book domestic and international flights with Firefly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Firefly offers both domestic flights within Malaysia and international services to selected destinations across Southeast Asia.",
          },
        },
        {
          "@type": "Question",
          name: "Does Firefly offer promotional fares?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Firefly regularly launches promotional fares and seasonal travel offers on selected routes.",
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

export default function FireflyzStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fireflyzSchema),
        }}
      />
      <Suspense fallback={null}>
        <FireflyzCouponsContent />
      </Suspense>
    </>
  );
}