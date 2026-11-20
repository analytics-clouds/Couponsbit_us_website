import type { Metadata } from "next";
import ArticleInteractive from "./_components/ArticleInteractive";

export const metadata: Metadata = {
  title: "AMD vs NVIDIA: Is the AI Chip War Changing? | CouponsBit",
  description:
    "Discover how AMD is challenging NVIDIA in AI chips and what their growing competition could mean for technology and consumers.",

  alternates: {
    canonical: "https://www.couponsbit.us/blog/amd-vs-nvidia-ai-chip-war",
    languages: {
      "en-US": "https://www.couponsbit.us/blog/amd-vs-nvidia-ai-chip-war",
      "x-default": "https://www.couponsbit.us/blog/amd-vs-nvidia-ai-chip-war",
    },
  },

  keywords: ["AMD vs NVIDIA", "AI chip war", "AMD Instinct GPU", "NVIDIA AI chips", "semiconductor competition", "AI computing"],

  openGraph: {
    type: "article",
    url: "https://www.couponsbit.us/blog/amd-vs-nvidia-ai-chip-war",
    title: "AMD vs NVIDIA: Is the AI Chip War Changing? | CouponsBit",
    description:
      "Discover how AMD is challenging NVIDIA in AI chips and what their growing competition could mean for technology and consumers.",
    siteName: "Couponsbit",
    locale: "en_US",
    publishedTime: "2026-11-20T00:00:00.000Z",
    authors: ["Couponsbit"],
    images: [
      {
        url: "https://res.cloudinary.com/zzlsqavg/image/upload/v1795154734/amd-vs-nvidia-ai-chip-war.webp",
        width: 1200,
        height: 630,
        alt: "AMD vs NVIDIA: Is the AI Chip War Changing?",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AMD vs NVIDIA: Is the AI Chip War Changing? | CouponsBit",
    description:
      "Discover how AMD is challenging NVIDIA in AI chips and what their growing competition could mean for technology and consumers.",
    images: ["https://res.cloudinary.com/zzlsqavg/image/upload/v1795154734/amd-vs-nvidia-ai-chip-war.webp"],
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
      "@id": "https://www.couponsbit.us/blog/amd-vs-nvidia-ai-chip-war#article",
      headline: "AMD vs NVIDIA: Is the AI Chip War Changing?",
      description:
        "Discover how AMD is challenging NVIDIA in AI chips and what their growing competition could mean for technology and consumers.",
      url: "https://www.couponsbit.us/blog/amd-vs-nvidia-ai-chip-war",
      inLanguage: "en-US",
      datePublished: "2026-11-20T00:00:00.000Z",
      dateModified: "2026-11-20T00:00:00.000Z",
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
        url: "https://res.cloudinary.com/zzlsqavg/image/upload/v1795154734/amd-vs-nvidia-ai-chip-war.webp",
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: "https://www.couponsbit.us/blog/amd-vs-nvidia-ai-chip-war",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/blog/amd-vs-nvidia-ai-chip-war#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.couponsbit.us/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "AMD vs NVIDIA: Is the AI Chip War Changing?",
          item: "https://www.couponsbit.us/blog/amd-vs-nvidia-ai-chip-war",
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

export default function AmdVsNvidiaAiChipWarPage() {
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
