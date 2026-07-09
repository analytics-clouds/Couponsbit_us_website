import type { Metadata } from "next";
import ArticleInteractive from "./_components/ArticleInteractive";

export const metadata: Metadata = {
  title: "Holiday Shopping Calendar 2026 | Best USA Shopping Holidays & Sales",
  description:
    "Discover the complete Holiday Shopping Calendar 2026 for the USA. Learn the best time to buy electronics, fashion, furniture and more while saving with coupon codes and promo codes.",

  alternates: {
    canonical: "https://www.couponsbit.us/blog/holiday-shopping-calendar-2026",
    languages: {
      "en-US": "https://www.couponsbit.us/blog/holiday-shopping-calendar-2026",
      "x-default": "https://www.couponsbit.us/blog/holiday-shopping-calendar-2026",
    },
  },

  keywords: ["holiday shopping calendar 2026", "USA shopping holidays", "Black Friday 2026", "Cyber Monday 2026", "best time to buy electronics", "seasonal sales calendar"],

  openGraph: {
    type: "article",
    url: "https://www.couponsbit.us/blog/holiday-shopping-calendar-2026",
    title: "Holiday Shopping Calendar 2026 | Best USA Shopping Holidays & Sales",
    description:
      "Discover the complete Holiday Shopping Calendar 2026 for the USA. Learn the best time to buy electronics, fashion, furniture and more while saving with coupon codes and promo codes.",
    siteName: "Couponsbit",
    locale: "en_US",
    publishedTime: "2026-07-09T00:00:00.000Z",
    authors: ["Couponsbit"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1783578422/holiday-shopping-calendar-2026_ak4cju.webp",
        width: 1200,
        height: 630,
        alt: "Holiday Shopping Calendar 2026 | Best USA Shopping Holidays & Sales",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Holiday Shopping Calendar 2026 | Best USA Shopping Holidays & Sales",
    description:
      "Discover the complete Holiday Shopping Calendar 2026 for the USA. Learn the best time to buy electronics, fashion, furniture and more while saving with coupon codes and promo codes.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1783578422/holiday-shopping-calendar-2026_ak4cju.webp"],
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

export default function HolidayShoppingCalendar2026Page() {
  return <ArticleInteractive />;
}
