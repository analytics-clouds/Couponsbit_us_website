import type { Metadata } from "next";
import LumibrickCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Lumibrick Coupon Code – Building Sets from $56.99",
  description:
    "Build your collection for less with the latest Lumibrick Coupon Code. Discover promo codes and exclusive deals on modular building sets from $56.99.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/lumibrick-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/lumibrick-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/lumibrick-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/lumibrick-coupon-code",
    title: "Lumibrick Coupon Code – Building Sets from $56.99",
    description:
      "Build your collection for less with the latest Lumibrick Coupon Code. Discover promo codes and exclusive deals on modular building sets from $56.99.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/lumricks-logo_a84nyo.webp",
        width: 1200,
        height: 630,
        alt: "Lumibrick Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lumibrick Coupon Code – Building Sets from $56.99",
    description:
      "Build your collection for less with the latest Lumibrick Coupon Code. Discover promo codes and exclusive deals on modular building sets from $56.99.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782730730/lumricks-logo_a84nyo.webp"],
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

const lumibrickSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/lumibrick-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/lumibrick-coupon-code",
      name: "Lumibrick Coupon Code – Building Sets from $56.99",
      description:
        "Build your collection for less with the latest Lumibrick Coupon Code. Discover promo codes and exclusive deals on modular building sets from $56.99.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/lumibrick-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/lumibrick-coupon-code#offerlist",
      name: "Lumibrick Coupon Codes & Promo Codes",
      description:
        "Latest verified Lumibrick coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/lumibrick-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Lumibrick Coupon Code",
            description:
              "Latest Lumibrick coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/lumibrick-coupon-code",
            seller: {
              "@type": "Organization",
              name: "Lumibrick",
              url: "https://funwhole.sjv.io/c/4303217/1448255/17189?subId1=1015",
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
      "@id": "https://www.couponsbit.us/stores/lumibrick-coupon-code#breadcrumb",
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
          name: "Lumibrick Coupons",
          item: "https://www.couponsbit.us/stores/lumibrick-coupon-code",
        },
      ],
    },
  ],
};

export default function LumibrickStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(lumibrickSchema),
        }}
      />
      <LumibrickCouponsContent />
    </>
  );
}