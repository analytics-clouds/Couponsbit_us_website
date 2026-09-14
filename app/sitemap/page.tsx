import type { Metadata } from "next";
import SitemapPageContent from "./_components/SitemapPageContent";

export const metadata: Metadata = {
  title: "Sitemap | Couponsbit",
  description:
    "Browse a complete list of every page on Couponsbit — stores, categories, deals, blog posts, and info pages — all in one place.",

  alternates: {
    canonical: "https://www.couponsbit.us/sitemap",
    languages: {
      "en-US": "https://www.couponsbit.us/sitemap",
      "x-default": "https://www.couponsbit.us/sitemap",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.couponsbit.us/sitemap",
    title: "Sitemap | Couponsbit",
    description:
      "Browse a complete list of every page on Couponsbit — stores, categories, deals, blog posts, and info pages — all in one place.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://www.couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Couponsbit Sitemap",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sitemap | Couponsbit",
    description:
      "Browse a complete list of every page on Couponsbit — stores, categories, deals, blog posts, and info pages — all in one place.",
    images: ["https://www.couponsbit.us/og-image.png"],
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

export default function SitemapPage() {
  return <SitemapPageContent />;
}
