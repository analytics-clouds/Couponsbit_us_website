import type { Metadata } from "next";
import VooglamCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Vooglam Discount Code | Save 20% OFF on Stylish Eyewear",
  description:
    "Discover the latest Vooglam Discount Code and Vooglam Voucher to save 20% OFF stylish eyeglasses and sunglasses. Shop new arrivals, bestselling frames, and premium eyewear for every style.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/vooglam-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/vooglam-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/vooglam-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/vooglam-discount-code",
      "x-default": "https://www.couponsbit.us/stores/vooglam-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/vooglam-discount-code",
    title: "Vooglam Discount Code | Save 20% OFF on Stylish Eyewear",
    description:
      "Discover the latest Vooglam Discount Code and Vooglam Voucher to save 20% OFF stylish eyeglasses and sunglasses. Shop new arrivals, bestselling frames, and premium eyewear for every style.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699425/vooglam-logo_qe8mis.webp",
        width: 1200,
        height: 630,
        alt: "Vooglam Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vooglam Discount Code | Save 20% OFF on Stylish Eyewear",
    description:
      "Discover the latest Vooglam Discount Code and Vooglam Voucher to save 20% OFF stylish eyeglasses and sunglasses. Shop new arrivals, bestselling frames, and premium eyewear for every style.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784699425/vooglam-logo_qe8mis.webp"],
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

const vooglamSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/vooglam-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/vooglam-discount-code",
      name: "Vooglam Discount Code | Save 20% OFF on Stylish Eyewear",
      description:
        "Discover the latest Vooglam Discount Code and Vooglam Voucher to save 20% OFF stylish eyeglasses and sunglasses. Shop new arrivals, bestselling frames, and premium eyewear for every style.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/vooglam-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/vooglam-discount-code#offerlist",
      name: "Vooglam Coupon Codes & Promo Codes",
      description:
        "Latest verified Vooglam coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/vooglam-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Vooglam Coupon Code",
            description:
              "Latest Vooglam coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/vooglam-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Vooglam",
              url: "https://vooglam.com",
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
      "@id": "https://www.couponsbit.us/stores/vooglam-discount-code#breadcrumb",
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
          name: "Vooglam Coupons",
          item: "https://www.couponsbit.us/stores/vooglam-discount-code",
        },
      ],
    },
  ],
};

export default function VooglamStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(vooglamSchema),
        }}
      />
      <VooglamCouponsContent />
    </>
  );
}