import type { Metadata } from "next";
import WishCouponsContent from "./_components/StoreCouponsContent";

export const metadata: Metadata = {
  title: "Wish Discount Code | Save Up to 67% OFF on Trending Products",
  description:
    "Find the latest Wish Discount Code and Wish Voucher to save up to 67% OFF on electronics, fashion, beauty, pet essentials, and home products.",

  alternates: {
    canonical: "https://www.couponsbit.us/stores/wish-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/stores/wish-discount-code",
      "en-GB": "https://www.couponsbit.us/stores/wish-discount-code",
      "en-IN": "https://www.couponsbit.us/stores/wish-discount-code",
      "x-default": "https://www.couponsbit.us/stores/wish-discount-code",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/stores/wish-discount-code",
    title: "Wish Discount Code | Save Up to 67% OFF on Trending Products",
    description:
      "Find the latest Wish Discount Code and Wish Voucher to save up to 67% OFF on electronics, fashion, beauty, pet essentials, and home products.",
    siteName: "Couponsbit",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784707355/wish-logo_n1dypa.webp",
        width: 1200,
        height: 630,
        alt: "Wish.com Coupon Code & Promo Codes – Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wish Discount Code | Save Up to 67% OFF on Trending Products",
    description:
      "Find the latest Wish Discount Code and Wish Voucher to save up to 67% OFF on electronics, fashion, beauty, pet essentials, and home products.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1784707355/wish-logo_n1dypa.webp"],
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

const wishSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/stores/wish-discount-code#webpage",
      url: "https://www.couponsbit.us/stores/wish-discount-code",
      name: "Wish Discount Code | Save Up to 67% OFF on Trending Products",
      description:
        "Find the latest Wish Discount Code and Wish Voucher to save up to 67% OFF on electronics, fashion, beauty, pet essentials, and home products.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/stores/wish-discount-code#breadcrumb",
      },
    },

    {
      "@type": "ItemList",
      "@id": "https://www.couponsbit.us/stores/wish-discount-code#offerlist",
      name: "Wish.com Coupon Codes & Promo Codes",
      description:
        "Latest verified Wish.com coupon codes, promo codes and discount codes.",
      url: "https://www.couponsbit.us/stores/wish-discount-code",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Offer",
            name: "Wish.com Coupon Code",
            description:
              "Latest Wish.com coupon code and discount offers.",
            url: "https://www.couponsbit.us/stores/wish-discount-code",
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "India" },
            ],
            seller: {
              "@type": "Organization",
              name: "Wish.com",
              url: "https://www.wish.com",
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
      "@id": "https://www.couponsbit.us/stores/wish-discount-code#breadcrumb",
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
          name: "Wish.com Coupons",
          item: "https://www.couponsbit.us/stores/wish-discount-code",
        },
      ],
    },
  ],
};

export default function WishStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(wishSchema),
        }}
      />
      <WishCouponsContent />
    </>
  );
}