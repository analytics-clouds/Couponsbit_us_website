import type { Metadata } from "next";
import KiwiCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Kiwi Coupon Code – Free Club Membership + $580 Rewards",
  description:
    "Join Kiwi.com Club for free and unlock exclusive flight deals, promo discounts, and travel rewards worth up to $580 with the latest Kiwi Coupon Code.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/kiwi-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/kiwi-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/kiwi-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/kiwi-coupon-code",
    title: "Kiwi Coupon Code – Free Club Membership + $580 Rewards",
    description:
      "Join Kiwi.com Club for free and unlock exclusive flight deals, promo discounts, and travel rewards worth up to $580 with the latest Kiwi Coupon Code.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/kiwi-logo_egovdr.webp",
        width: 1200,
        height: 630,
        alt: "Kiwi.com Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kiwi Coupon Code – Free Club Membership + $580 Rewards",
    description:
      "Join Kiwi.com Club for free and unlock exclusive flight deals, promo discounts, and travel rewards worth up to $580 with the latest Kiwi Coupon Code.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782730730/kiwi-logo_egovdr.webp"],
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

const kiwiSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/kiwi-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/kiwi-coupon-code",
      name: "Kiwi Coupon Code – Free Club Membership + $580 Rewards",
      description:
        "Join Kiwi.com Club for free and unlock exclusive flight deals, promo discounts, and travel rewards worth up to $580 with the latest Kiwi Coupon Code.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/kiwi-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/kiwi-coupon-code#offerlist",
      name: "Kiwi.com Coupon Codes & Promo Codes",
      description:
        "Latest verified Kiwi.com coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/kiwi-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Kiwi.com Coupon Code",
            description:
              "Latest Kiwi.com coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/kiwi-coupon-code",
            seller: {
              "@type": "Organization",
              name: "Kiwi.com",
              url: "https://tracking.syndicmarketing.com/c?o=21418851&m=23654&a=636605&&sub_aff_id=1015",
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
      "@id": "https://www.couponsbit.us/stores/kiwi-coupon-code#breadcrumb",
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
          name: "Kiwi.com Coupons",
          item: "https://www.couponsbit.us/stores/kiwi-coupon-code",
        },
      ],
    },
  ],
};

export default function KiwiStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(kiwiSchema),
        }}
      />
      <KiwiCouponsContent />
    </>
  );
}