import type { Metadata } from "next";
import HPCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "HP Coupon Code: Save Up to 71% on Laptops | July 2026",
  description:
    "Get the latest HP Coupon Code for July 2026 and save up to 71% on laptops, desktops, printers & accessories, plus free shipping and financing.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/hp-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/hp-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/hp-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/hp-coupon-code",
    title: "HP Coupon Code: Save Up to 71% on Laptops | July 2026",
    description:
      "Get the latest HP Coupon Code for July 2026 and save up to 71% on laptops, desktops, printers & accessories, plus free shipping and financing.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782890859/hp-coupon-code_vaogna.webp",
        width: 1200,
        height: 630,
        alt: "HP Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HP Coupon Code: Save Up to 71% on Laptops | July 2026",
    description:
      "Get the latest HP Coupon Code for July 2026 and save up to 71% on laptops, desktops, printers & accessories, plus free shipping and financing.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782890859/hp-coupon-code_vaogna.webp"],
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

const hpSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/hp-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/hp-coupon-code",
      name: "HP Coupon Code: Save Up to 71% on Laptops | July 2026",
      description:
        "Get the latest HP Coupon Code for July 2026 and save up to 71% on laptops, desktops, printers & accessories, plus free shipping and financing.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/hp-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/hp-coupon-code#offerlist",
      name: "HP Coupon Codes & Promo Codes",
      description:
        "Latest verified HP coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/hp-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "HP Coupon Code",
            description:
              "Latest HP coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/hp-coupon-code",
            seller: {
              "@type": "Organization",
              name: "HP",
              url: "https://www.hp.com",
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
      "@id": "https://www.couponsbit.us/stores/hp-coupon-code#breadcrumb",
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
          name: "HP Coupons",
          item: "https://www.couponsbit.us/stores/hp-coupon-code",
        },
      ],
    },
  ],
};

export default function HPStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hpSchema),
        }}
      />
      <HPCouponsContent />
    </>
  );
}