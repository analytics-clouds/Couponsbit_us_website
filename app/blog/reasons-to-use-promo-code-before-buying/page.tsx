import type { Metadata } from "next";
import ArticleInteractive from "./_components/ArticleInteractive";

export const metadata: Metadata = {
  title: "Top 5 Reasons to Use a Promo Code Before Shopping | CouponsBit",
  description:
    "Discover 5 reasons to use a promo code before buying anything. Learn how promo codes help you save money, shop smarter, and get better value.",

  alternates: {
    canonical: "https://www.couponsbit.us/blog/reasons-to-use-promo-code-before-buying",
    languages: {
      "en-US": "https://www.couponsbit.us/blog/reasons-to-use-promo-code-before-buying",
      "x-default": "https://www.couponsbit.us/blog/reasons-to-use-promo-code-before-buying",
    },
  },

  keywords: ["promo code", "reasons to use promo code", "discount code before buying", "coupon codes", "save money shopping", "how to use promo codes"],

  openGraph: {
    type: "article",
    url: "https://www.couponsbit.us/blog/reasons-to-use-promo-code-before-buying",
    title: "Top 5 Reasons to Use a Promo Code Before Shopping | CouponsBit",
    description:
      "Discover 5 reasons to use a promo code before buying anything. Learn how promo codes help you save money, shop smarter, and get better value.",
    siteName: "Couponsbit",
    locale: "en_US",
    publishedTime: "2026-11-13T00:00:00.000Z",
    authors: ["Couponsbit"],
    images: [
      {
        url: "https://www.couponsbit.us/blog/reasons-to-use-promo-code-before-buying.webp",
        width: 1200,
        height: 630,
        alt: "Top 5 Reasons to Use a Promo Code Before Buying Anything | CouponsBit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Top 5 Reasons to Use a Promo Code Before Shopping | CouponsBit",
    description:
      "Discover 5 reasons to use a promo code before buying anything. Learn how promo codes help you save money, shop smarter, and get better value.",
    images: ["https://www.couponsbit.us/blog/reasons-to-use-promo-code-before-buying.webp"],
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
      "@id": "https://www.couponsbit.us/blog/reasons-to-use-promo-code-before-buying#article",
      headline: "Top 5 Reasons to Use a Promo Code Before Buying Anything",
      description:
        "Discover 5 reasons to use a promo code before buying anything. Learn how promo codes help you save money, shop smarter, and get better value.",
      url: "https://www.couponsbit.us/blog/reasons-to-use-promo-code-before-buying",
      inLanguage: "en-US",
      datePublished: "2026-11-13T00:00:00.000Z",
      dateModified: "2026-11-13T00:00:00.000Z",
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
        url: "https://www.couponsbit.us/blog/reasons-to-use-promo-code-before-buying.webp",
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: "https://www.couponsbit.us/blog/reasons-to-use-promo-code-before-buying",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/blog/reasons-to-use-promo-code-before-buying#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.couponsbit.us/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Top 5 Reasons to Use a Promo Code Before Buying Anything",
          item: "https://www.couponsbit.us/blog/reasons-to-use-promo-code-before-buying",
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

export default function ReasonsToUsePromoCodePage() {
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
