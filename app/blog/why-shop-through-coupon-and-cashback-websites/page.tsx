import type { Metadata } from "next";
import ArticleInteractive from "./_components/ArticleInteractive";

export const metadata: Metadata = {
  title: "Why You Should Shop Through Coupon & Cashback Websites | Save More with CouponsBit",
  description:
    "Learn how coupon and cashback websites help you save money with promo codes, cashback offers, and exclusive deals. Shop smarter and find the best savings with CouponsBit.",

  alternates: {
    canonical: "https://www.couponsbit.us/blog/why-shop-through-coupon-and-cashback-websites",
    languages: {
      "en-US": "https://www.couponsbit.us/blog/why-shop-through-coupon-and-cashback-websites",
      "x-default": "https://www.couponsbit.us/blog/why-shop-through-coupon-and-cashback-websites",
    },
  },

  keywords: ["coupon websites", "cashback websites", "promo codes", "cashback offers", "shop smarter", "CouponsBit"],

  openGraph: {
    type: "article",
    url: "https://www.couponsbit.us/blog/why-shop-through-coupon-and-cashback-websites",
    title: "Why You Should Shop Through Coupon & Cashback Websites | Save More with CouponsBit",
    description:
      "Learn how coupon and cashback websites help you save money with promo codes, cashback offers, and exclusive deals. Shop smarter and find the best savings with CouponsBit.",
    siteName: "Couponsbit",
    locale: "en_US",
    publishedTime: "2026-09-15T00:00:00.000Z",
    authors: ["Couponsbit"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789454980/why-shop-through-coupon-and-cashback-websites_jpxnir.webp",
        width: 1200,
        height: 630,
        alt: "Why You Should Shop Through Coupon and Cashback Websites | Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Why You Should Shop Through Coupon & Cashback Websites | Save More with CouponsBit",
    description:
      "Learn how coupon and cashback websites help you save money with promo codes, cashback offers, and exclusive deals. Shop smarter and find the best savings with CouponsBit.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789454980/why-shop-through-coupon-and-cashback-websites_jpxnir.webp"],
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

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.couponsbit.us/blog/why-shop-through-coupon-and-cashback-websites#article",
      headline: "Why You Should Shop Through Coupon and Cashback Websites",
      description:
        "Learn how coupon and cashback websites help you save money with promo codes, cashback offers, and exclusive deals. Shop smarter and find the best savings with CouponsBit.",
      url: "https://www.couponsbit.us/blog/why-shop-through-coupon-and-cashback-websites",
      inLanguage: "en-US",
      datePublished: "2026-09-15T00:00:00.000Z",
      dateModified: "2026-09-15T00:00:00.000Z",
      author: {
        "@type": "Organization",
        name: "Couponsbit",
        url: "https://www.couponsbit.us",
      },
      publisher: {
        "@id": "https://www.couponsbit.us/#organization",
      },
      image: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789454980/why-shop-through-coupon-and-cashback-websites_jpxnir.webp",
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: "https://www.couponsbit.us/blog/why-shop-through-coupon-and-cashback-websites",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/blog/why-shop-through-coupon-and-cashback-websites#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.couponsbit.us/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Why You Should Shop Through Coupon and Cashback Websites",
          item: "https://www.couponsbit.us/blog/why-shop-through-coupon-and-cashback-websites",
        },
      ],
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
    },
  ],
};

export default function WhyShopThroughCouponAndCashbackWebsitesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ArticleInteractive />
    </>
  );
}
