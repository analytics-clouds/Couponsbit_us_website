import type { Metadata } from "next";
import ArticleInteractive from "./_components/ArticleInteractive";

export const metadata: Metadata = {
  title: "CouponsBit Shopping Savings Guide | Save More Online",
  description:
    "Discover how CouponsBit helps shoppers find coupon codes, promo codes and online deals to save money on travel, fashion, software and more.",

  alternates: {
    canonical: "https://couponsbit.us/blog/couponsbit-shopping-savings-guide",
    languages: {
      "en-US": "https://couponsbit.us/blog/couponsbit-shopping-savings-guide",
      "x-default": "https://couponsbit.us/blog/couponsbit-shopping-savings-guide",
    },
  },

  keywords: ["CouponsBit", "coupon codes", "online shopping deals", "promo codes", "discount codes", "smart shopping"],

  openGraph: {
    type: "article",
    url: "https://couponsbit.us/blog/couponsbit-shopping-savings-guide",
    title: "CouponsBit Shopping Savings Guide | Save More Online",
    description:
      "Discover how CouponsBit helps shoppers find coupon codes, promo codes and online deals to save money on travel, fashion, software and more.",
    siteName: "Couponsbit",
    locale: "en_US",
    publishedTime: "2026-06-23T00:00:00.000Z",
    authors: ["Couponsbit"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1782215435/couponsbit-shopping-savings-guide_ihevvt.webp",
        width: 1200,
        height: 630,
        alt: "CouponsBit Shopping Savings Guide | Save More Online",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CouponsBit Shopping Savings Guide | Save More Online",
    description:
      "Discover how CouponsBit helps shoppers find coupon codes, promo codes and online deals to save money on travel, fashion, software and more.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1782215435/couponsbit-shopping-savings-guide_ihevvt.webp"],
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

export default function CouponsBitShoppingSavingsGuidePage() {
  return <ArticleInteractive />;
}
