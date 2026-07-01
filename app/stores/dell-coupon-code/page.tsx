import type { Metadata } from "next";
import DellCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Dell Coupon Code: Save Up to $1,700 on Laptops | July 2026",
  description:
    "Get the latest Dell Coupon Code for July 2026 and save up to $1,700 on gaming PCs, $1,100 on XPS 16, plus 10% student discounts and more.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/dell-coupon-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/dell-coupon-code",
      "x-default": "https://www.couponsbit.us/stores/dell-coupon-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/dell-coupon-code",
    title: "Dell Coupon Code: Save Up to $1,700 on Laptops | July 2026",
    description:
      "Get the latest Dell Coupon Code for July 2026 and save up to $1,700 on gaming PCs, $1,100 on XPS 16, plus 10% student discounts and more.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782890858/dell-coupon-code_mxtssy.webp",
        width: 1200,
        height: 630,
        alt: "Dell Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dell Coupon Code: Save Up to $1,700 on Laptops | July 2026",
    description:
      "Get the latest Dell Coupon Code for July 2026 and save up to $1,700 on gaming PCs, $1,100 on XPS 16, plus 10% student discounts and more.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782890858/dell-coupon-code_mxtssy.webp"],
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

const dellSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/dell-coupon-code#webpage",
      url: "https://www.couponsbit.us/stores/dell-coupon-code",
      name: "Dell Coupon Code: Save Up to $1,700 on Laptops | July 2026",
      description:
        "Get the latest Dell Coupon Code for July 2026 and save up to $1,700 on gaming PCs, $1,100 on XPS 16, plus 10% student discounts and more.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/dell-coupon-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/dell-coupon-code#offerlist",
      name: "Dell Coupon Codes & Promo Codes",
      description:
        "Latest verified Dell coupon codes, promo codes and discount codes for web hosting, domains and WordPress hosting plans.",
      url: "https://www.couponsbit.us/stores/dell-coupon-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Dell Coupon Code",
            description:
              "Latest Dell coupon code for web hosting, domain and WordPress plan discounts.",
            url: "https://www.couponsbit.us/stores/dell-coupon-code",
            seller: {
              "@type": "Organization",
              name: "Dell",
              url: "https://www.dell.com",
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
      "@id": "https://www.couponsbit.us/stores/dell-coupon-code#breadcrumb",
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
          name: "Dell Coupons",
          item: "https://www.couponsbit.us/stores/dell-coupon-code",
        },
      ],
    },
  ],
};

export default function DellStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dellSchema),
        }}
      />
      <DellCouponsContent />
    </>
  );
}