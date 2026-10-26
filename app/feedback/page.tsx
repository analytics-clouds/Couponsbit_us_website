import type { Metadata } from "next";
import FeedbackPageContent from "./_components/FeedbackPageContent";

export const metadata: Metadata = {
  title: "Customer Reviews & Feedback | Couponsbit",
  description:
    "See what thousands of shoppers say about Couponsbit. Real verified customer reviews, ratings from Google & Trustpilot, and share your own feedback.",

  alternates: {
    canonical: "https://www.couponsbit.us/feedback",
    languages: {
      "en-US": "https://www.couponsbit.us/feedback",
      "x-default": "https://www.couponsbit.us/feedback",
    },
  },

  // ✅ Open Graph
  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/feedback",
    title: "Customer Reviews & Feedback | Couponsbit",
    description:
      "See what thousands of shoppers say about Couponsbit. Read verified customer reviews and share your own experience to help other shoppers save more.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://www.couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Couponsbit Customer Reviews & Feedback",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews & Feedback | Couponsbit",
    description:
      "See what thousands of shoppers say about Couponsbit. Real verified customer reviews, Google & Trustpilot ratings, and user feedback.",
    images: ["https://www.couponsbit.us/og-image.png"],
    site: "@couponsbit",
  },

  // ✅ Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// ✅ JSON-LD Schema
const feedbackSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.couponsbit.us/feedback#webpage",
      url: "https://www.couponsbit.us/feedback",
      name: "Customer Reviews & Feedback | Couponsbit",
      description:
        "Read verified customer reviews and feedback about Couponsbit coupon codes and shopping deals.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://www.couponsbit.us/feedback#breadcrumb",
      },
    },
    {
      "@type": "AggregateRating",
      "@id": "https://www.couponsbit.us/feedback#aggregaterating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "5000",
      reviewCount: "5000",
      itemReviewed: {
        "@type": "Organization",
        "@id": "https://www.couponsbit.us/#organization",
        name: "Couponsbit",
        url: "https://www.couponsbit.us",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.couponsbit.us/feedback#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.couponsbit.us",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Feedback",
          item: "https://www.couponsbit.us/feedback",
        },
      ],
    },
  ],
};

export default function FeedbackPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(feedbackSchema),
        }}
      />
      <FeedbackPageContent />
    </>
  );
}
