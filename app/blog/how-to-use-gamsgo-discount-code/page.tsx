import type { Metadata } from "next";
import ArticleInteractive from "./_components/ArticleInteractive";

export const metadata: Metadata = {
  title: "GamsGo Discount Code: Save More on Digital Subscriptions",
  description:
    "Looking for a GamsGo discount code? Discover how to find and apply GamsGo promo codes and save more on digital subscriptions, gaming, AI tools and software.",

  alternates: {
    canonical: "https://www.couponsbit.us/blog/how-to-use-gamsgo-discount-code",
    languages: {
      "en-US": "https://www.couponsbit.us/blog/how-to-use-gamsgo-discount-code",
      "x-default": "https://www.couponsbit.us/blog/how-to-use-gamsgo-discount-code",
    },
  },

  keywords: ["GamsGo discount code", "GamsGo promo code", "GamsGo coupon", "digital subscription discounts", "GamsGo voucher code"],

  openGraph: {
    type: "article",
    url: "https://www.couponsbit.us/blog/how-to-use-gamsgo-discount-code",
    title: "GamsGo Discount Code: Save More on Digital Subscriptions",
    description:
      "Looking for a GamsGo discount code? Discover how to find and apply GamsGo promo codes and save more on digital subscriptions, gaming, AI tools and software.",
    siteName: "Couponsbit",
    locale: "en_US",
    publishedTime: "2026-09-14T00:00:00.000Z",
    authors: ["Couponsbit"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789389490/gamsgo-discount-code-and-promo-codes_uqqkua.webp",
        width: 1200,
        height: 630,
        alt: "GamsGo Discount Code and Promo Codes | Couponsbit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GamsGo Discount Code: Save More on Digital Subscriptions",
    description:
      "Looking for a GamsGo discount code? Discover how to find and apply GamsGo promo codes and save more on digital subscriptions, gaming, AI tools and software.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1789389490/gamsgo-discount-code-and-promo-codes_uqqkua.webp"],
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
      "@id": "https://www.couponsbit.us/blog/how-to-use-gamsgo-discount-code#article",
      headline: "GamsGo Discount Code: Save More on Digital Subscriptions",
      description:
        "Looking for a GamsGo discount code? Discover how to find and apply GamsGo promo codes and save more on digital subscriptions, gaming, AI tools and software.",
      url: "https://www.couponsbit.us/blog/how-to-use-gamsgo-discount-code",
      inLanguage: "en-US",
      datePublished: "2026-09-14T00:00:00.000Z",
      dateModified: "2026-09-14T00:00:00.000Z",
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
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1789389490/gamsgo-discount-code-and-promo-codes_uqqkua.webp",
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: "https://www.couponsbit.us/blog/how-to-use-gamsgo-discount-code",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/blog/how-to-use-gamsgo-discount-code#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.couponsbit.us/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "GamsGo Discount Code: Save More on Digital Subscriptions",
          item: "https://www.couponsbit.us/blog/how-to-use-gamsgo-discount-code",
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

export default function HowToUseGamsGoDiscountCodePage() {
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
