import type { Metadata } from "next";
import ArticleInteractive from "./_components/ArticleInteractive";

export const metadata: Metadata = {
  title: "5 Reasons to Shop During the Black Friday Sale | CouponsBit",
  description:
    "Discover 5 reasons to shop during the Black Friday sale in the US. Find seasonal deals, save on gifts, compare prices, and use promo codes.",

  alternates: {
    canonical: "https://www.couponsbit.us/blog/reasons-to-shop-black-friday-sale",
    languages: {
      "en-US": "https://www.couponsbit.us/blog/reasons-to-shop-black-friday-sale",
      "x-default": "https://www.couponsbit.us/blog/reasons-to-shop-black-friday-sale",
    },
  },

  keywords: ["Black Friday sale", "reasons to shop Black Friday", "Black Friday deals USA", "Black Friday discounts", "Black Friday promo codes", "holiday shopping deals"],

  openGraph: {
    type: "article",
    url: "https://www.couponsbit.us/blog/reasons-to-shop-black-friday-sale",
    title: "5 Reasons to Shop During the Black Friday Sale | CouponsBit",
    description:
      "Discover 5 reasons to shop during the Black Friday sale in the US. Find seasonal deals, save on gifts, compare prices, and use promo codes.",
    siteName: "Couponsbit",
    locale: "en_US",
    publishedTime: "2026-11-17T00:00:00.000Z",
    authors: ["Couponsbit"],
    images: [
      {
        url: "https://res.cloudinary.com/zzlsqavg/image/upload/v1794915843/reasons-to-shop-black-friday-sale.webp",
        width: 1200,
        height: 630,
        alt: "Top 5 Reasons to Shop During the Black Friday Sale | CouponsBit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "5 Reasons to Shop During the Black Friday Sale | CouponsBit",
    description:
      "Discover 5 reasons to shop during the Black Friday sale in the US. Find seasonal deals, save on gifts, compare prices, and use promo codes.",
    images: ["https://res.cloudinary.com/zzlsqavg/image/upload/v1794915843/reasons-to-shop-black-friday-sale.webp"],
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
      "@id": "https://www.couponsbit.us/blog/reasons-to-shop-black-friday-sale#article",
      headline: "Top 5 Reasons to Shop During the Black Friday Sale",
      description:
        "Discover 5 reasons to shop during the Black Friday sale in the US. Find seasonal deals, save on gifts, compare prices, and use promo codes.",
      url: "https://www.couponsbit.us/blog/reasons-to-shop-black-friday-sale",
      inLanguage: "en-US",
      datePublished: "2026-11-17T00:00:00.000Z",
      dateModified: "2026-11-17T00:00:00.000Z",
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
        url: "https://res.cloudinary.com/zzlsqavg/image/upload/v1794915843/reasons-to-shop-black-friday-sale.webp",
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: "https://www.couponsbit.us/blog/reasons-to-shop-black-friday-sale",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/blog/reasons-to-shop-black-friday-sale#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.couponsbit.us/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Top 5 Reasons to Shop During the Black Friday Sale",
          item: "https://www.couponsbit.us/blog/reasons-to-shop-black-friday-sale",
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

export default function ReasonsToShopBlackFridayPage() {
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
