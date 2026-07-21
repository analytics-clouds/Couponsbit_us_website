import type { Metadata } from "next";
import AvisCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Avis Discount Code | Up to 20% OFF Car Rental Deals",
  description:
    "Save with the latest Avis Discount Code and Avis Voucher. Get UP TO 20% OFF on eligible car rentals, exclusive Drive Gold savings, and member-only travel deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/avis-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/avis-discount-code",
      "x-default": "https://www.couponsbit.us/stores/avis-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/avis-discount-code",
    title: "Avis Discount Code | Up to 20% OFF Car Rental Deals",
    description:
      "Save with the latest Avis Discount Code and Avis Voucher. Get UP TO 20% OFF on eligible car rentals, exclusive Drive Gold savings, and member-only travel deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1784618848/avis-logo_sbg9y8.webp",
        width: 1200,
        height: 630,
        alt: "Avis Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Avis Discount Code | Up to 20% OFF Car Rental Deals",
    description:
      "Save with the latest Avis Discount Code and Avis Voucher. Get UP TO 20% OFF on eligible car rentals, exclusive Drive Gold savings, and member-only travel deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1784618848/avis-logo_sbg9y8.webp"],
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

const avisSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/avis-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/avis-discount-code",
      name: "Avis Discount Code | Up to 20% OFF Car Rental Deals",
      description:
        "Save with the latest Avis Discount Code and Avis Voucher. Get UP TO 20% OFF on eligible car rentals, exclusive Drive Gold savings, and member-only travel deals.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/avis-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/avis-discount-code#offerlist",
      name: "Avis Coupon Codes & Promo Codes",
      description:
        "Latest verified Avis coupon codes, promo codes and discount codes for car rentals.",
      url: "https://www.couponsbit.us/stores/avis-discount-code",
      numberOfItems: 4,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Avis Coupon Code",
            description:
              "Latest Avis coupon code for car rental discounts.",
            url: "https://www.couponsbit.us/stores/avis-discount-code",
            seller: {
              "@type": "Organization",
              name: "Avis",
              url: "https://www.avis.com",
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
      "@id": "https://www.couponsbit.us/stores/avis-discount-code#breadcrumb",
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
          name: "Avis Coupons",
          item: "https://www.couponsbit.us/stores/avis-discount-code",
        },
      ],
    },
  ],
};

export default function AvisStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(avisSchema),
        }}
      />
      <AvisCouponsContent />
    </>
  );
}
