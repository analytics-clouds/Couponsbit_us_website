import type { Metadata } from "next";
import ArticleInteractive from "./_components/ArticleInteractive";

export const metadata: Metadata = {
  title: "Upcoming Sales in 2026 – Shopping Calendar & Best Deals",
  description:
    "Discover upcoming 2026 sales, including Labor Day, Halloween, Black Friday, Cyber Monday, Christmas and year-end clearance deals.",

  alternates: {
    canonical: "https://www.couponsbit.us/blog/upcoming-sales-2026",
    languages: {
      "en-US": "https://www.couponsbit.us/blog/upcoming-sales-2026",
      "x-default": "https://www.couponsbit.us/blog/upcoming-sales-2026",
    },
  },

  keywords: ["Upcoming Sales 2026", "CouponsBit", "shopping calendar 2026", "promo codes", "discount deals", "online sale events"],

  openGraph: {
    type: "article",
    url: "https://www.couponsbit.us/blog/upcoming-sales-2026",
    title: "Upcoming Sales in 2026 – Shopping Calendar & Best Deals",
    description:
      "Discover upcoming 2026 sales, including Labor Day, Halloween, Black Friday, Cyber Monday, Christmas and year-end clearance deals.",
    siteName: "Couponsbit",
    locale: "en_US",
    publishedTime: "2026-06-23T00:00:00.000Z",
    authors: ["Couponsbit"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1000,c_limit/v1782215435/upcoming-sales-2026.webp",
        width: 1200,
        height: 630,
        alt: "Upcoming Sales in 2026 – Shopping Calendar & Best Deals",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Upcoming Sales in 2026 – Shopping Calendar & Best Deals",
    description:
      "Discover upcoming 2026 sales, including Labor Day, Halloween, Black Friday, Cyber Monday, Christmas and year-end clearance deals.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1000,c_limit/v1782215435/upcoming-sales-2026.webp"],
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
      "@id": "https://www.couponsbit.us/blog/upcoming-sales-2026#article",
      headline: "Upcoming Sales 2026",
      description:
        "Discover upcoming 2026 sales, including Labor Day, Halloween, Black Friday, Cyber Monday, Christmas and year-end clearance deals.",
      url: "https://www.couponsbit.us/blog/upcoming-sales-2026",
      inLanguage: "en-US",
      datePublished: "2026-06-23T00:00:00.000Z",
      dateModified: "2026-06-23T00:00:00.000Z",
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
        url: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1000,c_limit/v1782215435/upcoming-sales-2026.webp",
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: "https://www.couponsbit.us/blog/upcoming-sales-2026",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/blog/upcoming-sales-2026#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.couponsbit.us/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Upcoming Sales 2026",
          item: "https://www.couponsbit.us/blog/upcoming-sales-2026",
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

export default function UpcomingSales2026Page() {
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