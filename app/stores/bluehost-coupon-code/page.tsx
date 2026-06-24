import type { Metadata } from "next";
import BluehostCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Bluehost Coupon Codes – Hosting From $1.99/mo & More",
  description:
    "Get verified Bluehost discount codes – WordPress hosting from $1.99/mo, 69% OFF one site plan, 50% OFF business hosting & VPS 33% OFF. 35 live deals. Save now!",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/bluehost-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/bluehost-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/bluehost-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/bluehost-coupon-code",
    title: "Bluehost Coupon Codes – Hosting From $1.99/mo & More",
    description:
      "Get verified Bluehost discount codes – WordPress hosting from $1.99/mo, 69% OFF one site plan, 50% OFF business hosting & VPS 33% OFF. 35 live deals. Save now!",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp",
        width: 1200,
        height: 630,
        alt: "Bluehost Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bluehost Coupon Codes – Hosting From $1.99/mo & More",
    description:
      "Get verified Bluehost discount codes – WordPress hosting from $1.99/mo, 69% OFF one site plan, 50% OFF business hosting & VPS 33% OFF. 35 live deals. Save now!",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp"],
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

const bluehostSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/bluehost-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/bluehost-coupon-code",
      name: "Bluehost Coupon Codes – Hosting From $1.99/mo & More",
      description:
        "Get verified Bluehost discount codes – WordPress hosting from $1.99/mo, 69% OFF one site plan, 50% OFF business hosting & VPS 33% OFF. 35 live deals. Save now!",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/bluehost-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/bluehost-coupon-code#offerlist",
      name: "Bluehost Coupon Codes & Promo Codes",
      description:
        "Latest verified Bluehost coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/bluehost-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Bluehost Coupon Code",
            description:
              "Latest Bluehost coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/bluehost-coupon-code",
            seller: {
              "@type": "Organization",
              name: "Bluehost",
              url: "https://www.bluehost.com",
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
      "@id": "https://www.couponsbit.us/stores/bluehost-coupon-code#breadcrumb",
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
          name: "Bluehost Coupons",
          item: "https://www.couponsbit.us/stores/bluehost-coupon-code",
        },
      ],
    },
  ],
};

export default function BluehostStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bluehostSchema),
        }}
      />
      <BluehostCouponsContent />
    </>
  );
}