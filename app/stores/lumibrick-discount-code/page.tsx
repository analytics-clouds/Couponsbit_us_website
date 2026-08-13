import type { Metadata } from "next";
import LumibrickCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Lumibrick Discount Code: Building Sets From $56.99 | August 2026",
  description:
    "Use a verified Lumibrick discount code or promo code — shop premium building sets from just $56.99. Modular Apartment Set with USB lighting from $169.99. Collectible brick sets updated August 2026.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/lumibrick-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/lumibrick-discount-code",
      "x-default": "https://www.couponsbit.us/stores/lumibrick-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/lumibrick-discount-code",
    title: "Lumibrick Discount Code: Building Sets From $56.99 | August 2026",
    description:
      "Use a verified Lumibrick discount code or promo code — shop premium building sets from just $56.99. Modular Apartment Set with USB lighting from $169.99. Collectible brick sets updated August 2026.",
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
    title: "Lumibrick Discount Code: Building Sets From $56.99 | August 2026",
    description:
      "Use a verified Lumibrick discount code or promo code — shop premium building sets from just $56.99. Modular Apartment Set with USB lighting from $169.99. Collectible brick sets updated August 2026.",
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
      "@id": "https://www.couponsbit.us/stores/lumibrick-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/lumibrick-discount-code",
      name: "Lumibrick Discount Code: Building Sets From $56.99 | August 2026",
      description:
        "Use a verified Lumibrick discount code or promo code — shop premium building sets from just $56.99. Modular Apartment Set with USB lighting from $169.99. Collectible brick sets updated August 2026.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/lumibrick-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/lumibrick-discount-code#offerlist",
      name: "Lumibrick Coupon Codes & Promo Codes",
      description:
        "Latest verified Lumibrick coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/lumibrick-discount-code",
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
            url: "https://www.couponsbit.us/stores/lumibrick-discount-code",
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
      "@id": "https://www.couponsbit.us/stores/lumibrick-discount-code#breadcrumb",
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
          item: "https://www.couponsbit.us/stores/lumibrick-discount-code",
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