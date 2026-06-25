import type { Metadata } from "next";
import CarilohaCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Cariloha Coupon Code – Save Up to 50% OFF Bamboo Bedding",
  description:
    "Get the latest Cariloha coupon code and save up to 50% OFF on bamboo bedding, sheets, apparel and home essentials. Plus, enjoy free shipping over $100 and a 100-night trial.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/cariloha-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/cariloha-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/cariloha-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/cariloha-coupon-code",
    title: "Cariloha Coupon Code – Save Up to 50% OFF Bamboo Bedding",
    description:
      "Get the latest Cariloha coupon code and save up to 50% OFF on bamboo bedding, sheets, apparel and home essentials. Plus, enjoy free shipping over $100 and a 100-night trial.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg",
        width: 1200,
        height: 630,
        alt: "Cariloha Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cariloha Coupon Code – Save Up to 50% OFF Bamboo Bedding",
    description:
      "Get the latest Cariloha coupon code and save up to 50% OFF on bamboo bedding, sheets, apparel and home essentials. Plus, enjoy free shipping over $100 and a 100-night trial.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782373660/cariloha-coupon-code_t4bwl4.jpg"],
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

const carilohaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/cariloha-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/cariloha-coupon-code",
      name: "Cariloha Coupon Code – Save Up to 50% OFF Bamboo Bedding",
      description:
        "Get the latest Cariloha coupon code and save up to 50% OFF on bamboo bedding, sheets, apparel and home essentials. Plus, enjoy free shipping over $100 and a 100-night trial.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/cariloha-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/cariloha-coupon-code#offerlist",
      name: "Cariloha Coupon Codes & Promo Codes",
      description:
        "Latest verified Cariloha coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/cariloha-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Cariloha Coupon Code",
            description:
              "Latest Cariloha coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/cariloha-coupon-code",
            seller: {
              "@type": "Organization",
              name: "Cariloha",
              url: "https://cariloha.pxf.io/c/6434050/1117073/14163?subId1=1015",
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
      "@id": "https://www.couponsbit.us/stores/cariloha-coupon-code#breadcrumb",
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
          name: "Cariloha Coupons",
          item: "https://www.couponsbit.us/stores/cariloha-coupon-code",
        },
      ],
    },
  ],
};

export default function CarilohaStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(carilohaSchema),
        }}
      />
      <CarilohaCouponsContent />
    </>
  );
}