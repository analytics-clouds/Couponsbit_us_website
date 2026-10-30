import type { Metadata } from "next";
import ArticleInteractive from "./_components/ArticleInteractive";

export const metadata: Metadata = {
  title: "Halloween Is Almost Here: Fun Ideas for Everyone | CouponsBit",
  description:
    "Get ready for Halloween with fun costume ideas, trick-or-treating, spooky decorations, party games, and last-minute shopping tips from CouponsBit.",

  alternates: {
    canonical: "https://www.couponsbit.us/blog/halloween-fun-ideas-costumes-parties",
    languages: {
      "en-US": "https://www.couponsbit.us/blog/halloween-fun-ideas-costumes-parties",
      "x-default": "https://www.couponsbit.us/blog/halloween-fun-ideas-costumes-parties",
    },
  },

  keywords: ["halloween fun ideas", "halloween costume ideas", "halloween party ideas", "halloween decorations", "trick or treating", "pumpkin carving", "halloween 2026"],

  openGraph: {
    type: "article",
    url: "https://www.couponsbit.us/blog/halloween-fun-ideas-costumes-parties",
    title: "Halloween Is Almost Here: Fun Ideas for Everyone | CouponsBit",
    description:
      "Get ready for Halloween with fun costume ideas, trick-or-treating, spooky decorations, party games, and last-minute shopping tips from CouponsBit.",
    siteName: "Couponsbit",
    locale: "en_US",
    publishedTime: "2026-10-30T00:00:00.000Z",
    authors: ["Couponsbit"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1793359590/halloween-fun-ideas-costumes-parties_ywte6e.webp",
        width: 1200,
        height: 630,
        alt: "Halloween Fun Ideas for Costumes, Parties and Trick-or-Treating",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halloween Is Almost Here: Fun Ideas for Everyone | CouponsBit",
    description:
      "Get ready for Halloween with fun costume ideas, trick-or-treating, spooky decorations, party games, and last-minute shopping tips from CouponsBit.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1793359590/halloween-fun-ideas-costumes-parties_ywte6e.webp"],
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
      "@id": "https://www.couponsbit.us/blog/halloween-fun-ideas-costumes-parties#article",
      headline: "Halloween Is Almost Here: Fun Ideas for Everyone",
      description:
        "Get ready for Halloween with fun costume ideas, trick-or-treating, spooky decorations, party games, and last-minute shopping tips from CouponsBit.",
      url: "https://www.couponsbit.us/blog/halloween-fun-ideas-costumes-parties",
      inLanguage: "en-US",
      datePublished: "2026-10-30T00:00:00.000Z",
      dateModified: "2026-10-30T00:00:00.000Z",
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
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1793359590/halloween-fun-ideas-costumes-parties_ywte6e.webp",
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: "https://www.couponsbit.us/blog/halloween-fun-ideas-costumes-parties",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/blog/halloween-fun-ideas-costumes-parties#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.couponsbit.us/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Halloween Is Almost Here: Fun Ideas for Everyone",
          item: "https://www.couponsbit.us/blog/halloween-fun-ideas-costumes-parties",
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

export default function HalloweenFunIdeasPage() {
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
