import type { Metadata } from "next";
import ArticleInteractive from "./_components/ArticleInteractive";

export const metadata: Metadata = {
  title: "Halloween Shopping Guide 2026 | Best Halloween Coupon Codes & Deals",
  description:
    "Celebrate Halloween 2026 for less with the best Halloween coupon codes, promo codes, and shopping deals. Save on costumes, decorations, candy, party supplies, and beauty products with CouponsBit.",

  alternates: {
    canonical: "https://www.couponsbit.us/blog/halloween-shopping-guide-2026",
    languages: {
      "en-US": "https://www.couponsbit.us/blog/halloween-shopping-guide-2026",
      "x-default": "https://www.couponsbit.us/blog/halloween-shopping-guide-2026",
    },
  },

  keywords: ["halloween shopping guide 2026", "halloween coupon codes", "halloween promo codes", "halloween deals", "halloween costume discounts", "halloween decorations deals"],

  openGraph: {
    type: "article",
    url: "https://www.couponsbit.us/blog/halloween-shopping-guide-2026",
    title: "Halloween Shopping Guide 2026 | Best Halloween Coupon Codes & Deals",
    description:
      "Celebrate Halloween 2026 for less with the best Halloween coupon codes, promo codes, and shopping deals. Save on costumes, decorations, candy, party supplies, and beauty products with CouponsBit.",
    siteName: "Couponsbit",
    locale: "en_US",
    publishedTime: "2026-10-09T00:00:00.000Z",
    authors: ["Couponsbit"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1791548920/halloween-shopping-guide-2026_ctk0zx.webp",
        width: 1200,
        height: 630,
        alt: "Halloween Shopping Guide 2026 | Best Halloween Coupon Codes & Deals",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halloween Shopping Guide 2026 | Best Halloween Coupon Codes & Deals",
    description:
      "Celebrate Halloween 2026 for less with the best Halloween coupon codes, promo codes, and shopping deals. Save on costumes, decorations, candy, party supplies, and beauty products with CouponsBit.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1791548920/halloween-shopping-guide-2026_ctk0zx.webp"],
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
      "@id": "https://www.couponsbit.us/blog/halloween-shopping-guide-2026#article",
      headline: "Halloween Shopping Guide 2026 | Best Halloween Coupon Codes & Deals",
      description:
        "Celebrate Halloween 2026 for less with the best Halloween coupon codes, promo codes, and shopping deals. Save on costumes, decorations, candy, party supplies, and beauty products with CouponsBit.",
      url: "https://www.couponsbit.us/blog/halloween-shopping-guide-2026",
      inLanguage: "en-US",
      datePublished: "2026-10-09T00:00:00.000Z",
      dateModified: "2026-10-09T00:00:00.000Z",
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
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1791548920/halloween-shopping-guide-2026_ctk0zx.webp",
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: "https://www.couponsbit.us/blog/halloween-shopping-guide-2026",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/blog/halloween-shopping-guide-2026#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.couponsbit.us/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Halloween Shopping Guide 2026",
          item: "https://www.couponsbit.us/blog/halloween-shopping-guide-2026",
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

export default function HalloweenShoppingGuide2026Page() {
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
