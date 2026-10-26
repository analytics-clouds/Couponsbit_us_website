import type { Metadata } from "next";
import ArticleInteractive from "./_components/ArticleInteractive";

export const metadata: Metadata = {
  title: "iPhone Duo: Apple's Commitment and Consumer Reactions | CouponsBit",
  description:
    "Explore Apple's iPhone Duo commitment, consumer reactions, foldable design, durability concerns, and whether its premium price delivers real value.",

  alternates: {
    canonical: "https://www.couponsbit.us/blog/iphone-duo-apple-commitment-consumer-reactions",
    languages: {
      "en-US": "https://www.couponsbit.us/blog/iphone-duo-apple-commitment-consumer-reactions",
      "x-default": "https://www.couponsbit.us/blog/iphone-duo-apple-commitment-consumer-reactions",
    },
  },

  keywords: ["iPhone Duo", "Apple foldable iPhone", "iPhone Duo review", "Apple commitment", "foldable phone 2026", "iPhone Duo price", "consumer reactions iPhone"],

  openGraph: {
    type: "article",
    url: "https://www.couponsbit.us/blog/iphone-duo-apple-commitment-consumer-reactions",
    title: "iPhone Duo: Apple's Commitment and Consumer Reactions | CouponsBit",
    description:
      "Explore Apple's iPhone Duo commitment, consumer reactions, foldable design, durability concerns, and whether its premium price delivers real value.",
    siteName: "Couponsbit",
    locale: "en_US",
    publishedTime: "2026-10-23T00:00:00.000Z",
    authors: ["Couponsbit"],
    images: [
      {
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1793012026/Apple_s_Foldable_iPhone_Duo_Revealed_ohjnmd.webp",
        width: 1200,
        height: 630,
        alt: "iPhone Duo: Apple's Commitment and Consumer Reactions | CouponsBit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "iPhone Duo: Apple's Commitment and Consumer Reactions | CouponsBit",
    description:
      "Explore Apple's iPhone Duo commitment, consumer reactions, foldable design, durability concerns, and whether its premium price delivers real value.",
    images: ["https://res.cloudinary.com/couponsbit/image/upload/v1793012026/Apple_s_Foldable_iPhone_Duo_Revealed_ohjnmd.webp"],
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
      "@id": "https://www.couponsbit.us/blog/iphone-duo-apple-commitment-consumer-reactions#article",
      headline: "iPhone Duo: Apple's Commitment and What Consumers Really Think",
      description:
        "Explore Apple's iPhone Duo commitment, consumer reactions, foldable design, durability concerns, and whether its premium price delivers real value.",
      url: "https://www.couponsbit.us/blog/iphone-duo-apple-commitment-consumer-reactions",
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
        url: "https://res.cloudinary.com/couponsbit/image/upload/v1793012026/Apple_s_Foldable_iPhone_Duo_Revealed_ohjnmd.webp",
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: "https://www.couponsbit.us/blog/iphone-duo-apple-commitment-consumer-reactions",
      citation: [
        { "@type": "WebPage", name: "Reuters — iPhone Duo Launch Coverage", url: "https://www.reuters.com" },
        { "@type": "WebPage", name: "Pogo — September 2026 iPhone Buyer Survey", url: "https://www.pogo.com" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/blog/iphone-duo-apple-commitment-consumer-reactions#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.couponsbit.us" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.couponsbit.us/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "iPhone Duo: Apple's Commitment and What Consumers Really Think",
          item: "https://www.couponsbit.us/blog/iphone-duo-apple-commitment-consumer-reactions",
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

export default function IPhoneDuoAppleCommitmentConsumerReactionsPage() {
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
