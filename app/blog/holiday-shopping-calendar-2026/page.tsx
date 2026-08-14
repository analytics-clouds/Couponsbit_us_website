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
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1000,c_limit/v1783578422/holiday-shopping-calendar-2026_ak4cju.webp",
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
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1000,c_limit/v1783578422/holiday-shopping-calendar-2026_ak4cju.webp"],
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
      "@id": "https://www.couponsbit.us/blog/holiday-shopping-calendar-2026#article",
      headline: "Holiday Shopping Calendar 2026 | Best USA Shopping Holidays & Sales",
      description:
        "Discover the complete Holiday Shopping Calendar 2026 for the USA. Learn the best time to buy electronics, fashion, furniture and more while saving with coupon codes and promo codes.",
      url: "https://www.couponsbit.us/blog/holiday-shopping-calendar-2026",
      inLanguage: "en-US",
      datePublished: "2026-07-09T00:00:00.000Z",
      dateModified: "2026-07-09T00:00:00.000Z",
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
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1000,c_limit/v1783578422/holiday-shopping-calendar-2026_ak4cju.webp",
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: "https://www.couponsbit.us/blog/holiday-shopping-calendar-2026",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/blog/holiday-shopping-calendar-2026#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.couponsbit.us/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Holiday Shopping Calendar 2026",
          item: "https://www.couponsbit.us/blog/holiday-shopping-calendar-2026",
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

export default function HolidayShoppingCalendar2026Page() {
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
