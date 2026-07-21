import type { Metadata } from "next";
import McafeeCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "McAfee Discount Code | Up to 75% OFF & Save Up to $225",
  description:
    "Save with the latest McAfee Discount Code, voucher & promo code. Enjoy UP TO 75% OFF and save up to $225 on McAfee Total Protection, Family & Advanced Plans.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/mcafee-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/mcafee-discount-code",
      "x-default": "https://www.couponsbit.us/stores/mcafee-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/mcafee-discount-code",
    title: "McAfee Discount Code | Up to 75% OFF & Save Up to $225",
    description:
      "Save with the latest McAfee Discount Code, voucher & promo code. Enjoy UP TO 75% OFF and save up to $225 on McAfee Total Protection, Family & Advanced Plans.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1784618848/mcafree-logo_fy86ap.webp",
        width: 1200,
        height: 630,
        alt: "McAfee Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "McAfee Discount Code | Up to 75% OFF & Save Up to $225",
    description:
      "Save with the latest McAfee Discount Code, voucher & promo code. Enjoy UP TO 75% OFF and save up to $225 on McAfee Total Protection, Family & Advanced Plans.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1784618848/mcafree-logo_fy86ap.webp"],
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

const mcafeeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/mcafee-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/mcafee-discount-code",
      name: "McAfee Discount Code | Up to 75% OFF & Save Up to $225",
      description:
        "Save with the latest McAfee Discount Code, voucher & promo code. Enjoy UP TO 75% OFF and save up to $225 on McAfee Total Protection, Family & Advanced Plans.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/mcafee-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/mcafee-discount-code#offerlist",
      name: "McAfee Coupon Codes & Promo Codes",
      description:
        "Latest verified McAfee coupon codes, promo codes and discount codes for antivirus, VPN, and identity protection plans.",
      url: "https://www.couponsbit.us/stores/mcafee-discount-code",
      numberOfItems: 8,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "McAfee Coupon Code",
            description:
              "Latest McAfee coupon code for antivirus, VPN and identity protection plan discounts.",
            url: "https://www.couponsbit.us/stores/mcafee-discount-code",
            seller: {
              "@type": "Organization",
              name: "McAfee",
              url: "https://www.mcafee.com",
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
      "@id": "https://www.couponsbit.us/stores/mcafee-discount-code#breadcrumb",
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
          name: "McAfee Coupons",
          item: "https://www.couponsbit.us/stores/mcafee-discount-code",
        },
      ],
    },
  ],
};

export default function McafeeStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mcafeeSchema),
        }}
      />
      <McafeeCouponsContent />
    </>
  );
}
