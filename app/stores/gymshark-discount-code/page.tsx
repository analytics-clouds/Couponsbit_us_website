import type { Metadata } from "next";
import { Suspense } from "react";
import GymsharkCouponsContent from "./_components/StoreCouponsContent";
import { GYMSHARK_COUPONS } from "./_components/offers";

export const metadata: Metadata = {
  title: {
    absolute: "Gymshark Promo Code: Soft Sculpt Sports Bra 50% Off | Nov 2026",
  },
  description:
    "Use a Gymshark Promo Code and Gymshark Discount Code to save 50% on Lift Seamless Jacket and Soft Sculpt Sports Bra. Verified Nov 2026 offers. Save now.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/gymshark-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/gymshark-discount-code",
      "x-default": "https://www.couponsbit.us/stores/gymshark-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/gymshark-discount-code",
    title: "Gymshark Promo Code: Soft Sculpt Sports Bra 50% Off | Nov 2026",
    description:
      "Use a Gymshark Promo Code and Gymshark Discount Code to save 50% on Lift Seamless Jacket and Soft Sculpt Sports Bra. Verified Nov 2026 offers. Save now.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1792648467/gymshark-logo_hvljlf.webp",
        width: 1200,
        height: 630,
        alt: "Gymshark Promo Code & Coupon Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gymshark Promo Code: Soft Sculpt Sports Bra 50% Off | Nov 2026",
    description:
      "Use a Gymshark Promo Code and Gymshark Discount Code to save 50% on Lift Seamless Jacket and Soft Sculpt Sports Bra. Verified Nov 2026 offers. Save now.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1792648467/gymshark-logo_hvljlf.webp"],
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

const gymsharkOffers = GYMSHARK_COUPONS.map((coupon) => ({
  "@type": "Offer",
  name: `Gymshark ${coupon.topLabel} ${coupon.mainValue} ${coupon.offText}`.trim(),
  description: coupon.description,
  url: `https://www.couponsbit.us/stores/gymshark-discount-code#${coupon.id}`,
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Gymshark", url: "https://www.gymshark.com" },
}));

const gymsharkSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/gymshark-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/gymshark-discount-code",
      name: "Gymshark Promo Code: Soft Sculpt Sports Bra 50% Off | Nov 2026",
      description:
        "Use a Gymshark Promo Code and Gymshark Discount Code to save 50% on Lift Seamless Jacket and Soft Sculpt Sports Bra. Verified Nov 2026 offers. Save now.",
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Couponsbit", url: "https://www.couponsbit.us" },
      dateModified: "2026-11-01",
      isPartOf: { "@id": "https://www.couponsbit.us/#website" },
      breadcrumb: { "@id": "https://www.couponsbit.us/stores/gymshark-discount-code#breadcrumb" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/stores/gymshark-discount-code#brand",
      name: "Gymshark",
      url: "https://www.gymshark.com",
      sameAs: ["https://www.facebook.com/Gymshark", "https://twitter.com/Gymshark"],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/gymshark-discount-code#offerlist",
      name: "Gymshark Promo Codes & Coupon Codes",
      description: "Latest Gymshark Promo Codes and offers.",
      url: "https://www.couponsbit.us/stores/gymshark-discount-code",
      numberOfItems: GYMSHARK_COUPONS.length,
      itemListElement: gymsharkOffers.map((offer, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: offer,
      })),
    },

    {
      "@type": "WebSite",
      "@id": "https://www.couponsbit.us/#website",
      url: "https://www.couponsbit.us",
      name: "Couponsbit",
      description: "Couponsbit is one of the best coupon websites offering verified coupons, deals, and coupon help for top brands worldwide.",
      inLanguage: "en-US",
      publisher: { "@id": "https://www.couponsbit.us/#organization" },
    },

    {
      "@type": "Organization",
      "@id": "https://www.couponsbit.us/#organization",
      name: "Couponsbit",
      url: "https://www.couponsbit.us",
      logo: { "@type": "ImageObject", url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/couponsbit-logo_kxqyir.webp", width: 200, height: 60 },
      contactPoint: { "@type": "ContactPoint", contactType: "Customer Support", availableLanguage: "English" },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/stores/gymshark-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Stores", item: "https://www.couponsbit.us/stores" },
        { "@type": "ListItem", position: 3, name: "Gymshark Coupons", item: "https://www.couponsbit.us/stores/gymshark-discount-code" },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.couponsbit.us/stores/gymshark-discount-code#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Gymshark offer discount codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gymshark offers selected promotions, newsletter discounts and certain regional or eligibility-based discounts. Availability changes, so check CouponsBit and Gymshark's official terms."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use more than one Gymshark code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gymshark states that discount codes cannot be stacked; only one code can be used per order."
          }
        },
        {
          "@type": "Question",
          "name": "Does Gymshark offer student discounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gymshark lists student discounts through verification partners in selected markets. Check the current programme and eligibility requirements for your country."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a discount code on sale items?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many Gymshark codes exclude sale items. Review the offer conditions before checking out."
          }
        }
      ]
    },
  ],
};

export default function GymsharkStorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gymsharkSchema) }} />
      <Suspense fallback={null}><GymsharkCouponsContent /></Suspense>
    </>
  );
}
