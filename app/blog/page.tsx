import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { BookOpen, Users, TrendingUp, Clock, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Couponsbit Blog – How to Save Money Online Shopping Tips",
  description:
    "Discover how to save money online shopping with Couponsbit. Explore tips, coupon guides, and hacks from the best coupon websites USA. Updated weekly.",

  alternates: {
    canonical: "https://couponsbit.us/blog",
    languages: {
      "en-US": "https://couponsbit.us/blog",
      "x-default": "https://couponsbit.us/blog",
    },
  },

  // ✅ Open Graph
  openGraph: {
    type: "website",
    url: "https://couponsbit.us/blog",
    title: "Couponsbit Blog – How to Save Money Online Shopping Tips",
    description:
      "Discover how to save money online shopping with Couponsbit. Explore tips, coupon guides, and hacks from the best coupon websites USA. Updated weekly.",
    siteName: "Couponsbit",
    locale: "en_US",
    images: [
      {
        url: "https://couponsbit.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Couponsbit Blog – Save Money Online Shopping Tips",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Couponsbit Blog – How to Save Money Online Shopping Tips",
    description:
      "Discover how to save money online shopping with Couponsbit. Explore tips, coupon guides, and hacks from the best coupon websites USA. Updated weekly.",
    images: ["https://couponsbit.us/og-image.png"],
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
const blogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://couponsbit.us/blog#blog",
      url: "https://couponsbit.us/blog",
      name: "Couponsbit Blog – How to Save Money Online Shopping Tips",
      description:
        "Discover how to save money online shopping with Couponsbit. Explore tips, coupon guides, and hacks from the best coupon websites USA. Updated weekly.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://couponsbit.us/#website",
      },
      breadcrumb: {
        "@id": "https://couponsbit.us/blog#breadcrumb",
      },
      publisher: {
        "@id": "https://couponsbit.us/#organization",
      },
      // ✅ Hardcoded posts — update these when posts change
      blogPost: [
        {
          "@type": "BlogPosting",
          headline:
            "How to Use Amazon India Coupon Codes to Get Extra Discounts",
          url: "https://couponsbit.us/blog/amazon-india-coupon-codes",
          datePublished: "2026-06-09",
          inLanguage: "en-US",
          author: {
            "@type": "Organization",
            name: "Couponsbit",
            url: "https://couponsbit.us",
          },
        },
        {
          "@type": "BlogPosting",
          headline: "10 Smart Ways to Save Money on Amazon India in 2026",
          url: "https://couponsbit.us/blog/amazon-savings-guide",
          datePublished: "2026-05-12",
          inLanguage: "en-US",
          author: {
            "@type": "Organization",
            name: "Couponsbit",
            url: "https://couponsbit.us",
          },
        },
        {
          "@type": "BlogPosting",
          headline:
            "How to Stack Coupons and Bank Offers for Maximum Savings",
          url: "https://couponsbit.us/blog/stack-coupons-bank-offers",
          datePublished: "2026-05-10",
          inLanguage: "en-US",
          author: {
            "@type": "Organization",
            name: "Couponsbit",
            url: "https://couponsbit.us",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://couponsbit.us/#website",
      url: "https://couponsbit.us",
      name: "Couponsbit",
      description:
        "Couponsbit is one of the best coupon websites USA offering verified promo codes and online shopping tips to help you save money.",
      inLanguage: "en-US",
      publisher: {
        "@id": "https://couponsbit.us/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://couponsbit.us/#organization",
      name: "Couponsbit",
      url: "https://couponsbit.us",
      logo: {
        "@type": "ImageObject",
        url: "https://couponsbit.us/logo.png",
        width: 200,
        height: 60,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        availableLanguage: "English",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://couponsbit.us/blog#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://couponsbit.us",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://couponsbit.us/blog",
        },
      ],
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white overflow-x-hidden">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full pt-20 pb-36 md:pt-24 md:pb-48 bg-gradient-to-br from-[#0451c4] to-[#056bfa] overflow-hidden mt-[64px]">
          <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full shadow-md mb-10 animate-pulse">
              <span className="text-[#056bfa] font-bold text-sm tracking-wide">
                 Smart Shopping Starts Here
              </span>
            </div>
            <h1 className="text-white font-extrabold text-5xl md:text-7xl mb-1 flex flex-col gap-2">
              <span>Couponsbit Blog</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mt-8 mb-16 leading-relaxed">
              Discover shopping tips, money-saving ideas, deal guides, and expert insights to help you save more every time you shop online. 
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {[
                { icon: BookOpen, text: "50+ Articles Published" },
                { icon: Users, text: "500K+ Monthly Readers" },
                { icon: TrendingUp, text: "Updated Weekly" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2.5 min-w-[220px]"
                >
                  <item.icon className="w-5 h-5 text-[#056bfa]" />
                  <span className="text-black font-black text-sm whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-[calc(100%+1.3px)] h-[80px] fill-white text-white"
            >
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,105.77,117.81,104,176.89,97.43,235.97,90.86,281.42,75.29,321.39,56.44Z"></path>
            </svg>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <p className="text-gray-500 font-medium text-xs tracking-widest uppercase mb-3 text-center">
                FROM OUR EDITORS
              </p>
              <h2 className="text-black font-extrabold text-5xl text-center">
                Latest Insights
              </h2>
              <div className="w-20 h-[3px] bg-[#FF9900] rounded-full mx-auto mt-3"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">

              {/* Post 1 — Amazon India Coupon Codes */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-lg hover:border-[#056bfa] transition-all duration-300 group">
                <div className="w-full md:w-[220px] h-[200px] md:h-auto shrink-0 relative overflow-hidden">
                  <img
                    src="/amazon-india-coupon-codes.webp"
                    alt="Amazon India coupon codes guide"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="text-gray-500 text-xs font-medium uppercase">
                      JUN 09, 2026
                    </span>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-500 text-xs uppercase font-medium">
                        8 MIN READ
                      </span>
                    </div>
                  </div>
                  <Link href="/blog/amazon-india-coupon-codes">
                    <h3 className="text-[#056bfa] font-extrabold text-xl leading-tight mb-2.5 hover:text-[#0451c4] transition-all cursor-pointer line-clamp-2">
                      How to Use Amazon India Coupon Codes to Get Extra Discounts
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    Find verified Amazon India coupon codes, apply them at
                    checkout, and stack them with bank card offers for 35–80%
                    off. Everything you need to stop paying full price.
                  </p>
                  <Link
                    href="/blog/amazon-india-coupon-codes"
                    className="text-[#056bfa] font-bold text-sm flex items-center gap-1 uppercase tracking-wide group-hover:gap-2 transition-all duration-300"
                  >
                    READ MORE <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Post 2 — Amazon Savings Guide */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-lg hover:border-[#056bfa] transition-all duration-300 group">
                <div className="w-full md:w-[220px] h-[200px] md:h-auto shrink-0 relative overflow-hidden">
                  <img
                    src="/amazon-savings-guide.webp"
                    alt="How to save money online shopping"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="text-gray-500 text-xs font-medium uppercase">
                      MAY 12, 2026
                    </span>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-500 text-xs uppercase font-medium">
                        8 MIN READ
                      </span>
                    </div>
                  </div>
                  <Link href="/blog/amazon-savings-guide">
                    <h3 className="text-[#056bfa] font-extrabold text-xl leading-tight mb-2.5 hover:text-[#0451c4] transition-all cursor-pointer line-clamp-2">
                      10 Smart Ways to Save Money on Amazon India in 2026
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    Amazon India is a goldmine of deals if you know where to
                    look. Here are 10 proven online shopping tips to get maximum
                    discounts using verified coupons and cashback offers.
                  </p>
                  <Link
                    href="/blog/amazon-savings-guide"
                    className="text-[#056bfa] font-bold text-sm flex items-center gap-1 uppercase tracking-wide group-hover:gap-2 transition-all duration-300"
                  >
                    READ MORE <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}