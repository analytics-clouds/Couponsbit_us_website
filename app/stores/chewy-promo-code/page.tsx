import type { Metadata } from "next";
import ChewyCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Chewy Promo Code: 50% Off + $15 Gift Card | Aug 2026",
  description:
    "Find the latest Chewy promo codes and coupons for August 2026. Get 50% off your first order or Autoship on eligible products, a free $15 eGift Card on $49+ orders, Buy 3 Get 1 Free toys, plus free delivery on qualifying orders over $35.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/chewy-promo-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/chewy-promo-code",
      "en-GB": "https://www.couponsbit.us/stores/chewy-promo-code",
      "en-IN": "https://www.couponsbit.us/stores/chewy-promo-code",
      "x-default": "https://www.couponsbit.us/stores/chewy-promo-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/chewy-promo-code",
    title: "Chewy Promo Code: 50% Off + $15 Gift Card | Aug 2026",
    description:
      "Find the latest Chewy promo codes and coupons for August 2026. Get 50% off your first order or Autoship on eligible products, a free $15 eGift Card on $49+ orders, Buy 3 Get 1 Free toys, plus free delivery on qualifying orders over $35.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/chewy-logo_nadir3.webp",
        width: 1200,
        height: 630,
        alt: "Chewy Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Chewy Promo Code: 50% Off + $15 Gift Card | Aug 2026",
    description:
      "Find the latest Chewy promo codes and coupons for August 2026. Get 50% off your first order or Autoship on eligible products, a free $15 eGift Card on $49+ orders, Buy 3 Get 1 Free toys, plus free delivery on qualifying orders over $35.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/chewy-logo_nadir3.webp"],
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

const chewySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/chewy-promo-code#webpage",
      url: "https://www.couponsbit.us/stores/chewy-promo-code",
      name: "Chewy Promo Code: 50% Off + $15 Gift Card | Aug 2026",
      description:
        "Find the latest Chewy promo codes and coupons for August 2026. Get 50% off your first order or Autoship on eligible products, a free $15 eGift Card on $49+ orders, Buy 3 Get 1 Free toys, plus free delivery on qualifying orders over $35.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/chewy-promo-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/chewy-promo-code#offerlist",
      name: "Chewy Coupon Codes & Promo Codes",
      description:
        "Latest verified Chewy coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/chewy-promo-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Chewy Coupon Code",
            description:
              "Latest Chewy coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/chewy-promo-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Chewy",
              url: "https://www.chewy.com",
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
      "@id": "https://www.couponsbit.us/stores/chewy-promo-code#breadcrumb",
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
          name: "Chewy Coupons",
          item: "https://www.couponsbit.us/stores/chewy-promo-code",
        },
      ],
    },
  ],
};

export default function ChewyStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(chewySchema),
        }}
      />
      <ChewyCouponsContent />
    </>
  );
}