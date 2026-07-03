import type { Metadata } from "next";
import ArticleInteractive from "./_components/ArticleInteractive";

export const metadata: Metadata = {
  title: "How to Save Money While Shopping Online in 2026 | CouponsBit",
  description:
    "Learn how to save money online in 2026 with proven shopping tips, coupon strategies, cashback tricks, and exclusive deals from CouponsBit.",

  alternates: {
    canonical: "https://www.couponsbit.us/blog/how-to-save-money-shopping-online",
    languages: {
      "en-US": "https://www.couponsbit.us/blog/how-to-save-money-shopping-online",
      "x-default": "https://www.couponsbit.us/blog/how-to-save-money-shopping-online",
    },
  },

  keywords: ["save money online", "how to get coupons for free", "how to get discounts online", "coupon codes", "cashback tips", "online shopping tips 2026"],

  openGraph: {
    type: "article",
    url: "https://www.couponsbit.us/blog/how-to-save-money-shopping-online",
    title: "How to Save Money While Shopping Online in 2026 | CouponsBit",
    description:
      "Learn how to save money online in 2026 with proven shopping tips, coupon strategies, cashback tricks, and exclusive deals from CouponsBit.",
    siteName: "Couponsbit",
    locale: "en_US",
    publishedTime: "2026-07-03T00:00:00.000Z",
    authors: ["Couponsbit"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1783077516/how-to-save-money-shopping-online_h5gv1z.webp",
        width: 1200,
        height: 630,
        alt: "How to Save Money While Shopping Online in 2026 | CouponsBit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "How to Save Money While Shopping Online in 2026 | CouponsBit",
    description:
      "Learn how to save money online in 2026 with proven shopping tips, coupon strategies, cashback tricks, and exclusive deals from CouponsBit.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1783077516/how-to-save-money-shopping-online_h5gv1z.webp"],
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

export default function HowToSaveMoneyShoppingOnlinePage() {
  return <ArticleInteractive />;
}
