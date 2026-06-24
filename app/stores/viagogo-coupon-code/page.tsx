import type { Metadata } from "next";
import ViaggogoCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Viagogo Coupon Codes – Tickets From $49 & More Deals",
  description:
    "Get verified Viagogo promo codes – Coachella tickets from $603, World Cup from $120, concerts from $49 & Westlife tickets from $109. 9 live deals. Book now!",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/viagogo-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/viagogo-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/viagogo-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/viagogo-coupon-code",
    title: "Viagogo Coupon Codes – Tickets From $49 & More Deals",
    description:
      "Get verified Viagogo promo codes – Coachella tickets from $603, World Cup from $120, concerts from $49 & Westlife tickets from $109. 9 live deals. Book now!",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/viagogo-coupon-code_t65aol.webp",
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
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1781775923/viagogo-coupon-code_t65aol.webp"],
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
      "@id": "https://www.couponsbit.us/stores/viagogo-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/viagogo-coupon-code",
      name: "Viagogo Coupon Codes – Tickets From $49 & More Deals",
      description:
        "Get verified Viagogo promo codes – Coachella tickets from $603, World Cup from $120, concerts from $49 & Westlife tickets from $109. 9 live deals. Book now!",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/viagogo-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/viagogo-coupon-code#offerlist",
      name: "Viagogo Coupon Codes & Promo Codes",
      description:
        "Latest verified Viagogo coupon codes, promo codes and discount codes for tickets.",
      url: "https://www.couponsbit.us/stores/viagogo-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Viagogo Coupon Code",
            description: "Latest Viagogo coupon code for ticket discounts.",
            url: "https://www.couponsbit.us/stores/viagogo-coupon-code",
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
      "@id": "https://www.couponsbit.us/stores/viagogo-coupon-code#breadcrumb",
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
          name: "Viagogo Coupons",
          item: "https://www.couponsbit.us/stores/viagogo-coupon-code",
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