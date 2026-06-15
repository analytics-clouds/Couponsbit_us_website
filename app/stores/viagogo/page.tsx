import type { Metadata } from "next";
import ViaggogoCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Viagogo Coupon Codes – Tickets From $49 & More Deals",
  description:
    "Get verified Viagogo promo codes – Coachella tickets from $603, World Cup from $120, concerts from $49 & Westlife tickets from $109. 9 live deals. Book now!",

  alternates: {
    canonical: "https://couponsbit.us/stores/viagogo",
    languages: {
      "en-US": "https://couponsbit.us/stores/viagogo",
      "x-default": "https://couponsbit.us/stores/viagogo",
    },
  },

  openGraph: {
    type: "website",
    url: "https://couponsbit.us/stores/viagogo",
    title: "Viagogo Coupon Codes – Tickets From $49 & More Deals",
    description:
      "Get verified Viagogo promo codes – Coachella tickets from $603, World Cup from $120, concerts from $49 & Westlife tickets from $109. 9 live deals. Book now!",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Viagogo Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Viagogo Coupon Codes – Tickets From $49 & More Deals",
    description:
      "Get verified Viagogo promo codes – Coachella tickets from $603, World Cup from $120, concerts from $49 & Westlife tickets from $109. 9 live deals. Book now!",
    images: ["https://couponsbit.us/og-image.png"],
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

const viagogoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://couponsbit.us/stores/viagogo#webpage",
      url: "https://couponsbit.us/stores/viagogo",
      name: "Viagogo Coupon Codes – Tickets From $49 & More Deals",
      description:
        "Get verified Viagogo promo codes – Coachella tickets from $603, World Cup from $120, concerts from $49 & Westlife tickets from $109. 9 live deals. Book now!",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/stores/viagogo#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://couponsbit.us/stores/viagogo#offerlist",
      name: "Viagogo Coupon Codes & Promo Codes",
      description:
        "Latest verified Viagogo coupon codes, promo codes and discount codes for tickets.",
      url: "https://couponsbit.us/stores/viagogo",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Viagogo Coupon Code",
            description: "Latest Viagogo coupon code for ticket discounts.",
            url: "https://couponsbit.us/stores/viagogo",
            seller: {
              "@type": "Organization",
              name: "Viagogo",
              url: "https://www.viagogo.com",
            },
          },
        },
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://couponsbit.us/#website",
      url: "https://couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is one of the best coupon websites offering verified coupons, deals, and coupon help for top brands worldwide.",
      inLanguage: "en-US",
      publisher: {
        "@id": "https://couponsbit.us/#organization",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://couponsbit.us/#organization",
      name: "Couponsbit",
      url: "https://couponsbit.us",
      logo: {
        "@type": "ImageObject",
        url: "https://couponsbit.us/logo.png",
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
      "@id": "https://couponsbit.us/stores/viagogo#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://couponsbit.us",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Stores",
          item: "https://couponsbit.us/stores",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Viagogo Coupons",
          item: "https://couponsbit.us/stores/viagogo",
        },
      ],
    },
  ],
};

export default function ViagogoStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(viagogoSchema),
        }}
      />
      <ViaggogoCouponsContent />
    </>
  );
}