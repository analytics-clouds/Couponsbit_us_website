import type { Metadata } from "next";
import ArticleInteractive from "./_components/ArticleInteractive";

export const metadata: Metadata = {
  title: "Shopping on Amazon? Find Better Deals and Save More",
  description:
    "Shop smarter on Amazon with practical tips to compare products, spot genuine discounts, use coupons, and find more savings with CouponsBit.",

  alternates: {
    canonical: "https://www.couponsbit.us/blog/amazon-shopping-tips-find-better-deals",
    languages: {
      "en-US": "https://www.couponsbit.us/blog/amazon-shopping-tips-find-better-deals",
      "x-default": "https://www.couponsbit.us/blog/amazon-shopping-tips-find-better-deals",
    },
  },

  keywords: ["Amazon coupon code", "Amazon deals", "Amazon discounts", "Amazon promo code", "Amazon coupons", "save money on Amazon", "online shopping tips"],

  openGraph: {
    type: "article",
    url: "https://www.couponsbit.us/blog/amazon-shopping-tips-find-better-deals",
    title: "Shopping on Amazon? Find Better Deals and Save More",
    description:
      "Shop smarter on Amazon with practical tips to compare products, spot genuine discounts, use coupons, and find more savings with CouponsBit.",
    siteName: "Couponsbit",
    locale: "en_US",
    publishedTime: "2026-11-04T00:00:00.000Z",
    authors: ["Couponsbit"],
    images: [
      {
        url: "https://www.couponsbit.us/blog/amazon-shopping-tips-find-better-deals.webp",
        width: 1200,
        height: 630,
        alt: "Shopping on Amazon? Find Better Deals and Save More",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shopping on Amazon? Find Better Deals and Save More",
    description:
      "Shop smarter on Amazon with practical tips to compare products, spot genuine discounts, use coupons, and find more savings with CouponsBit.",
    images: ["https://www.couponsbit.us/blog/amazon-shopping-tips-find-better-deals.webp"],
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
      "@id": "https://www.couponsbit.us/blog/amazon-shopping-tips-find-better-deals#article",
      headline: "Shopping on Amazon? Here's How to Find Better Deals and Make Every Purchase Count",
      description:
        "Shop smarter on Amazon with practical tips to compare products, spot genuine discounts, use coupons, and find more savings with CouponsBit.",
      url: "https://www.couponsbit.us/blog/amazon-shopping-tips-find-better-deals",
      inLanguage: "en-US",
      datePublished: "2026-11-04T00:00:00.000Z",
      dateModified: "2026-11-04T00:00:00.000Z",
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
        url: "https://www.couponsbit.us/blog/amazon-shopping-tips-find-better-deals.webp",
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: "https://www.couponsbit.us/blog/amazon-shopping-tips-find-better-deals",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/blog/amazon-shopping-tips-find-better-deals#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.couponsbit.us/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Shopping on Amazon? Find Better Deals and Save More",
          item: "https://www.couponsbit.us/blog/amazon-shopping-tips-find-better-deals",
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

export default function AmazonShoppingTipsPage() {
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
