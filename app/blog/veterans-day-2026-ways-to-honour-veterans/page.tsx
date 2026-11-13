import type { Metadata } from "next";
import ArticleInteractive from "./_components/ArticleInteractive";

export const metadata: Metadata = {
  title: "Veterans Day 2026: Ways to Honour Our Heroes | CouponsBit",
  description:
    "Discover the meaning of Veterans Day 2026, its history, celebration ideas, and thoughtful ways to honour the brave men and women who served.",

  alternates: {
    canonical: "https://www.couponsbit.us/blog/veterans-day-2026-ways-to-honour-veterans",
    languages: {
      "en-US": "https://www.couponsbit.us/blog/veterans-day-2026-ways-to-honour-veterans",
      "x-default": "https://www.couponsbit.us/blog/veterans-day-2026-ways-to-honour-veterans",
    },
  },

  keywords: ["veterans day 2026", "veterans day celebration", "ways to honour veterans", "veterans day history", "november 11 2026", "veterans day vs memorial day"],

  openGraph: {
    type: "article",
    url: "https://www.couponsbit.us/blog/veterans-day-2026-ways-to-honour-veterans",
    title: "Veterans Day 2026: Ways to Honour Our Heroes | CouponsBit",
    description:
      "Discover the meaning of Veterans Day 2026, its history, celebration ideas, and thoughtful ways to honour the brave men and women who served.",
    siteName: "Couponsbit",
    locale: "en_US",
    publishedTime: "2026-11-05T00:00:00.000Z",
    authors: ["Couponsbit"],
    images: [
      {
        url: "https://res.cloudinary.com/zzlsqavg/image/upload/v1793866032/veterans-day-2026-ways-to-honour-veterans.webp",
        width: 1200,
        height: 630,
        alt: "Veterans Day 2026: Ways to Honour Our Heroes",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Veterans Day 2026: Ways to Honour Our Heroes | CouponsBit",
    description:
      "Discover the meaning of Veterans Day 2026, its history, celebration ideas, and thoughtful ways to honour the brave men and women who served.",
    images: ["https://res.cloudinary.com/zzlsqavg/image/upload/v1793866032/veterans-day-2026-ways-to-honour-veterans.webp"],
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
      "@id": "https://www.couponsbit.us/blog/veterans-day-2026-ways-to-honour-veterans#article",
      headline: "Veterans Day 2026: Ways to Honour Our Heroes",
      description:
        "Discover the meaning of Veterans Day 2026, its history, celebration ideas, and thoughtful ways to honour the brave men and women who served.",
      url: "https://www.couponsbit.us/blog/veterans-day-2026-ways-to-honour-veterans",
      inLanguage: "en-US",
      datePublished: "2026-11-05T00:00:00.000Z",
      dateModified: "2026-11-05T00:00:00.000Z",
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
        url: "https://res.cloudinary.com/zzlsqavg/image/upload/v1793866032/veterans-day-2026-ways-to-honour-veterans.webp",
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: "https://www.couponsbit.us/blog/veterans-day-2026-ways-to-honour-veterans",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/blog/veterans-day-2026-ways-to-honour-veterans#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.couponsbit.us/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Veterans Day 2026: Ways to Honour Our Heroes",
          item: "https://www.couponsbit.us/blog/veterans-day-2026-ways-to-honour-veterans",
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

export default function VeteransDayPage() {
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
