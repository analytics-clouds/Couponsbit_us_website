import type { Metadata } from "next";
import UnipinCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "UniPin Discount Code: Top-Ups from $0.94 | Fortnite, PUBG & Roblox | Aug 2026",
  description:
    "Get verified UniPin deals for August 2026 — Fortnite V-Bucks from $17.66, PUBG 8100 UC from $91.99, Roblox $50 at $49.68 & PSN Gift Cards from $9.94. Mobile Legends top-ups from $1. Instant delivery.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/unipin-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/unipin-discount-code",
      "en-ID": "https://www.couponsbit.us/stores/unipin-discount-code",
      "x-default": "https://www.couponsbit.us/stores/unipin-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/unipin-discount-code",
    title: "UniPin Discount Code: Top-Ups from $0.94 | Fortnite, PUBG & Roblox | Aug 2026",
    description:
      "Get verified UniPin deals for August 2026 — Fortnite V-Bucks from $17.66, PUBG 8100 UC from $91.99, Roblox $50 at $49.68 & PSN Gift Cards from $9.94. Mobile Legends top-ups from $1. Instant delivery.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782198037/unipijn-coupon-code_nh4xhc.webp",
        width: 1200,
        height: 630,
        alt: "Unipin Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "UniPin Discount Code: Top-Ups from $0.94 | Fortnite, PUBG & Roblox | Aug 2026",
    description:
      "Get verified UniPin deals for August 2026 — Fortnite V-Bucks from $17.66, PUBG 8100 UC from $91.99, Roblox $50 at $49.68 & PSN Gift Cards from $9.94. Mobile Legends top-ups from $1. Instant delivery.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782198037/unipijn-coupon-code_nh4xhc.webp"],
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
};

const unipinSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/unipin-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/unipin-discount-code",
      name: "UniPin Discount Code: Top-Ups from $0.94 | Fortnite, PUBG & Roblox | Aug 2026",
      description:
        "Get verified UniPin deals for August 2026 — Fortnite V-Bucks from $17.66, PUBG 8100 UC from $91.99, Roblox $50 at $49.68 & PSN Gift Cards from $9.94. Mobile Legends top-ups from $1. Instant delivery.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/unipin-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/unipin-discount-code#offerlist",
      name: "Unipin Coupon Codes & Promo Codes",
      description:
        "Latest verified Unipin coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/unipin-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Unipin Coupon Code",
            description:
              "Latest Unipin coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/unipin-discount-code",
            seller: {
              "@type": "Organization",
              name: "Unipin",
              url: "https://www.unipin.com/",
            },
          },
        },
      ],
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
      "@id": "https://www.couponsbit.us/stores/unipin-discount-code#breadcrumb",
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
          name: "Unipin Coupons",
          item: "https://www.couponsbit.us/stores/unipin-discount-code",
        },
      ],
    },
  ],
};

export default function UnipinStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(unipinSchema),
        }}
      />
      <UnipinCouponsContent />
    </>
  );
}