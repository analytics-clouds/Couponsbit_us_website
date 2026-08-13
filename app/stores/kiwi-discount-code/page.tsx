import type { Metadata } from "next";
import KiwiCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Kiwi Discount Code: Fly From $64 + Unlock $580 in Rewards | Aug 2026",
  description:
    "Use a Kiwi discount code or promo code — fly Portland to LA from just $64. Join Kiwi Club FREE & unlock travel vouchers worth up to $580. Verified flight deals for August 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/kiwi-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/kiwi-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/kiwi-discount-code",
      "x-default": "https://www.couponsbit.us/stores/kiwi-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/kiwi-discount-code",
    title: "Kiwi Discount Code: Fly From $64 + Unlock $580 in Rewards | Aug 2026",
    description:
      "Use a Kiwi discount code or promo code — fly Portland to LA from just $64. Join Kiwi Club FREE & unlock travel vouchers worth up to $580. Verified flight deals for August 2026.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/kiwi-logo_egovdr.webp",
        width: 1200,
        height: 630,
        alt: "Kiwi Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kiwi Discount Code: Fly From $64 + Unlock $580 in Rewards | Aug 2026",
    description:
      "Use a Kiwi discount code or promo code — fly Portland to LA from just $64. Join Kiwi Club FREE & unlock travel vouchers worth up to $580. Verified flight deals for August 2026.",
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
      "@id": "https://www.couponsbit.us/stores/kiwi-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/kiwi-discount-code",
      name: "Kiwi Discount Code: Fly From $64 + Unlock $580 in Rewards | Aug 2026",
      description:
        "Use a Kiwi discount code or promo code — fly Portland to LA from just $64. Join Kiwi Club FREE & unlock travel vouchers worth up to $580. Verified flight deals for August 2026.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/kiwi-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/kiwi-discount-code#offerlist",
      name: "Kiwi Coupon Codes & Promo Codes",
      description:
        "Latest verified Kiwi coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/kiwi-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Kiwi Coupon Code",
            description:
              "Latest Kiwi coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/kiwi-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
            ],
            seller: {
              "@type": "Organization",
              name: "Kiwi",
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
      "@id": "https://www.couponsbit.us/stores/kiwi-discount-code#breadcrumb",
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
          name: "Kiwi Coupons",
          item: "https://www.couponsbit.us/stores/kiwi-discount-code",
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