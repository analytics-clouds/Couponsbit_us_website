import type { Metadata } from "next";
import { Suspense } from "react";
import NewBalanceCouponsContent from "./_components/StoreCouponsContent";
import { NEWBALANCE_COUPONS } from "./_components/offers";

const TITLE = "New Balance Promo Code: Up to 70% Off Shoes | Nov 2026";
const DESCRIPTION =
  "Use a New Balance promo code to save up to 70% on shoes and enjoy the latest discount code offers, including 15% off your first order in Nov 2026.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,

  alternates: {
    canonical: "https://www.couponsbit.us/stores/newbalance-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/newbalance-promo-code",
      "x-default": "https://www.couponsbit.us/stores/newbalance-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/newbalance-promo-code",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/zzlsqavg/image/upload/v1795168908/newbalance-logo.webp",
        width: 1200,
        height: 630,
        alt: "New Balance Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://res.cloudinary.com/zzlsqavg/image/upload/v1795168908/newbalance-logo.webp"],
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
  other: { 'geo.region': 'US', 'geo.country': 'US', language: 'en-US' },
};

const newbalanceOffers = NEWBALANCE_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `New Balance ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/newbalance-promo-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: {
    "@type": "Organization",
    name: "New Balance",
    url: "https://www.newbalance.com",
  },
}));

const newBalanceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/newbalance-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/newbalance-promo-code",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-20",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/newbalance-promo-code#breadcrumb",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/newbalance-promo-code#brand",
      name: "New Balance",
      url: "https://www.newbalance.com",
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/newbalance-promo-code#offerlist",
      name: "New Balance Promo Codes & Coupon Codes",
      description:
        "Latest verified New Balance promo codes, coupon codes and discount offers on shoes and apparel.",
      url: "https://www.couponsbit.us/stores/newbalance-promo-code",
      numberOfItems: NEWBALANCE_COUPONS.length,
      itemListElement: newbalanceOffers.map((offer, index) => ({
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
      "@id": "https://www.couponsbit.us/stores/newbalance-promo-code#breadcrumb",
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
          name: "New Balance Coupons",
          item: "https://www.couponsbit.us/stores/newbalance-promo-code",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/newbalance-promo-code#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does New Balance Have a Promo Code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "New Balance may offer promotional codes, sale events, and discount deals at different times. Check CouponsBit for currently available New Balance promo codes before making a purchase.",
          },
        },
        {
          "@type": "Question",
          name: "Does New Balance Offer Free Shipping?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "New Balance typically offers free standard shipping on orders that meet a minimum purchase threshold. Check the current terms on CouponsBit or at checkout before placing your order.",
          },
        },
        {
          "@type": "Question",
          name: "Can I Stack New Balance Coupons?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "New Balance generally allows one promotional code per order. Stacking multiple codes is usually not permitted, but free shipping and sale pricing may apply together depending on the offer terms.",
          },
        },
      ],
    },
  ],
};

export default function NewBalanceStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(newBalanceSchema),
        }}
      />
      <Suspense fallback={null}>
        <NewBalanceCouponsContent />
      </Suspense>
    </>
  );
}
