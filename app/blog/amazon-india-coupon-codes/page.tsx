import type { Metadata } from "next";
import ArticleInteractive from "./_components/ArticleInteractive";

export const metadata: Metadata = {
  title: "Amazon India Coupon Codes: How to Get Extra Discounts",
  description:
    "Learn how to find and apply Amazon India coupon codes to get extra discounts. Stack them with bank card offers and Amazon Pay for 35–80% off your order.",
  alternates: {
    canonical: "https://couponsbit.us/blog/amazon-india-coupon-codes",
  },
  openGraph: {
    type: "article",
    title: "Amazon India Coupon Codes: How to Get Extra Discounts",
    description:
      "Find verified Amazon India coupon codes and apply them right. Stack with HDFC, SBI, ICICI bank offers for up to 80% off. Updated daily on Couponsbit.",
    images: [
      {
        url: "https://couponsbit.us/amazon-india-coupon-codes.webp",
        width: 1200,
        height: 630,
        alt: "Amazon India coupon codes guide",
      },
    ],
    url: "https://couponsbit.us/blog/amazon-india-coupon-codes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon India Coupon Codes: How to Get Extra Discounts",
    description:
      "Find verified Amazon India coupon codes and apply them right. Stack with bank offers for up to 80% off.",
    images: ["https://couponsbit.us/amazon-india-coupon-codes.webp"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Use Amazon India Coupon Codes to Get Extra Discounts",
  description:
    "Learn how to find and apply Amazon India coupon codes to get extra discounts. Stack them with bank card offers and Amazon Pay for 35–80% off your order.",
  image: "https://couponsbit.us/amazon-india-coupon-codes.webp",
  datePublished: "2026-06-09",
  dateModified: "2026-06-09",
  author: {
    "@type": "Organization",
    name: "Couponsbit",
    url: "https://couponsbit.us",
  },
  publisher: {
    "@type": "Organization",
    name: "Couponsbit",
    url: "https://couponsbit.us",
    logo: {
      "@type": "ImageObject",
      url: "https://couponsbit.us/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://couponsbit.us/blog/amazon-india-coupon-codes",
  },
};

export default function AmazonIndiaCouponCodesPage() {
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
