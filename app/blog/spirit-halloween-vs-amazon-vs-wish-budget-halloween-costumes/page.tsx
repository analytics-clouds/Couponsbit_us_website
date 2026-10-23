import type { Metadata } from "next";
import ArticleInteractive from "./_components/ArticleInteractive";

export const metadata: Metadata = {
  title: "Spirit Halloween vs Amazon vs Wish.com: Budget Costumes",
  description:
    "Compare Spirit Halloween, Amazon, and Wish.com for budget Halloween costumes in 2026. Explore affordable costume ideas and tips to save with CouponsBit.",

  alternates: {
    canonical: "https://www.couponsbit.us/blog/spirit-halloween-vs-amazon-vs-wish-budget-halloween-costumes",
    languages: {
      "en-US": "https://www.couponsbit.us/blog/spirit-halloween-vs-amazon-vs-wish-budget-halloween-costumes",
      "x-default": "https://www.couponsbit.us/blog/spirit-halloween-vs-amazon-vs-wish-budget-halloween-costumes",
    },
  },

  keywords: ["spirit halloween vs amazon", "budget halloween costumes 2026", "wish.com halloween costumes", "affordable halloween costumes", "halloween costume deals", "spirit halloween coupon code", "amazon halloween costumes"],

  openGraph: {
    type: "article",
    url: "https://www.couponsbit.us/blog/spirit-halloween-vs-amazon-vs-wish-budget-halloween-costumes",
    title: "Spirit Halloween vs Amazon vs Wish.com: Budget Costumes",
    description:
      "Compare Spirit Halloween, Amazon, and Wish.com for budget Halloween costumes in 2026. Explore affordable costume ideas and tips to save with CouponsBit.",
    siteName: "Couponsbit",
    locale: "en_US",
    publishedTime: "2026-10-23T00:00:00.000Z",
    authors: ["Couponsbit"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1792742394/spirit-halloween-vs-amazon-vs-wish-budget-halloween-costumes_bvz06w.webp",
        width: 1200,
        height: 630,
        alt: "Spirit Halloween vs Amazon vs Wish.com: Budget Halloween Costumes 2026",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Spirit Halloween vs Amazon vs Wish.com: Budget Costumes",
    description:
      "Compare Spirit Halloween, Amazon, and Wish.com for budget Halloween costumes in 2026. Explore affordable costume ideas and tips to save with CouponsBit.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1792742394/spirit-halloween-vs-amazon-vs-wish-budget-halloween-costumes_bvz06w.webp"],
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
      "@id": "https://www.couponsbit.us/blog/spirit-halloween-vs-amazon-vs-wish-budget-halloween-costumes#article",
      headline: "Spirit Halloween vs Amazon vs Wish: Halloween Deals 2026",
      description:
        "Compare Spirit Halloween, Amazon, and Wish.com for budget Halloween costumes in 2026. Explore affordable costume ideas and tips to save with CouponsBit.",
      url: "https://www.couponsbit.us/blog/spirit-halloween-vs-amazon-vs-wish-budget-halloween-costumes",
      inLanguage: "en-US",
      datePublished: "2026-10-23T00:00:00.000Z",
      dateModified: "2026-10-23T00:00:00.000Z",
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
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1792742394/spirit-halloween-vs-amazon-vs-wish-budget-halloween-costumes_bvz06w.webp",
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: "https://www.couponsbit.us/blog/spirit-halloween-vs-amazon-vs-wish-budget-halloween-costumes",
      citation: [
        { "@type": "WebPage", name: "Spirit Halloween", url: "https://www.spirithalloween.com" },
        { "@type": "WebPage", name: "Amazon", url: "https://www.amazon.com" },
        { "@type": "WebPage", name: "Wish.com", url: "https://www.wish.com" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/blog/spirit-halloween-vs-amazon-vs-wish-budget-halloween-costumes#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.couponsbit.us/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Spirit Halloween vs Amazon vs Wish: Halloween Deals 2026",
          item: "https://www.couponsbit.us/blog/spirit-halloween-vs-amazon-vs-wish-budget-halloween-costumes",
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

export default function SpiritHalloweenVsAmazonPage() {
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
