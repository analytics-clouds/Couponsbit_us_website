"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  Calendar,
  CheckCircle,
  MessageCircle,
  Twitter,
  Facebook,
  Link as LinkIcon,
  Laptop,
  Plane,
  Tv,
  Code,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

export default function ArticleInteractive() {
  const [showToast, setShowToast] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const sections = [
    { id: "why-nvidia-news", title: "Why Is NVIDIA in the News?" },
    { id: "how-amd-gaining-ground", title: "How Is AMD Gaining Ground?" },
    { id: "amd-vs-nvidia-difference", title: "AMD vs NVIDIA: What's the Difference?" },
    { id: "can-amd-challenge-nvidia", title: "Can AMD Challenge NVIDIA?" },
    { id: "competition-affect-consumers", title: "How Could This Competition Affect Consumers?" },
    { id: "who-will-win", title: "Who Will Win the AI Chip War?" },
    { id: "in-a-nutshell", title: "In a Nutshell" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#056bfa] z-[60] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-[80px] right-4 z-[70] bg-white rounded-2xl shadow-2xl border border-[#f0f0f0] p-[12px] px-[18px] py-[12px] flex items-center gap-[10px] animate-in slide-in-from-right duration-300">
          <CheckCircle className="w-[18px] h-[18px] text-[#22c55e]" />
          <span className="text-black font-bold text-sm">Copied!</span>
        </div>
      )}

      <main>
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-3 flex items-center gap-2">
            <Link href="/" className="text-[#056bfa] text-sm hover:underline">Home</Link>
            <ChevronRight className="w-[14px] h-[14px] text-gray-400" />
            <Link href="/blog" className="text-[#056bfa] text-sm hover:underline">Blog</Link>
            <ChevronRight className="w-[14px] h-[14px] text-gray-400" />
            <span className="text-gray-700 text-sm font-medium truncate max-w-[200px]">AMD vs NVIDIA AI Chip War</span>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-10">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT COLUMN */}
            <article className="w-full lg:w-[65%]">
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-purple-100 text-purple-700 rounded-full text-[10px] font-bold px-3.5 py-1 tracking-wider uppercase">TECH NEWS</span>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Clock className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">4 min read</span>
                  </div>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Calendar className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">November 20, 2026</span>
                  </div>
                </div>

                <h1 className="text-black font-extrabold text-3xl md:text-4xl leading-tight mb-6">
                  AMD vs NVIDIA: Is the AI Chip War About to Change?
                </h1>

                <div className="rounded-2xl overflow-hidden w-full h-[220px] md:h-[420px]">
                  <img
                    src="https://res.cloudinary.com/zzlsqavg/image/upload/v1795154734/amd-vs-nvidia-ai-chip-war.webp"
                    alt="AMD vs NVIDIA: Is the AI Chip War Changing?"
                    width={1200}
                    height={630}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-400 text-[11px] text-center italic mt-2">
                  NVIDIA and AMD are competing for the future of AI computing
                </p>

                <div className="mt-8 mb-8 border-l-4 border-[#056bfa] bg-[#e8f6f8] rounded-r-2xl p-5 md:p-6">
                  <p className="text-[#056bfa] font-medium text-lg italic leading-relaxed">
                    "NVIDIA has dominated much of this market, but AMD is emerging as a serious competitor."
                  </p>
                </div>
              </header>

              {/* Article Body */}
              <div className="text-[#4b5563] text-base leading-[1.8] font-inter">

                <p className="mb-5">
                  The technology industry is witnessing an interesting shift. NVIDIA, one of the biggest names in artificial intelligence, is facing an unexpected leadership change, while AMD is strengthening its position in the AI chip market. Could this competition change the future of technology?
                </p>
                <p className="mb-5">
                  Artificial intelligence is growing rapidly. From ChatGPT and image generators to self-driving cars, AI needs powerful chips to process enormous amounts of information. NVIDIA has dominated much of this market, but AMD is emerging as a serious competitor.
                </p>
                <p className="mb-5">
                  Let&apos;s understand what&apos;s happening and why it matters.
                </p>

                {/* Section 1 */}
                <h2 id="why-nvidia-news" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Why Is NVIDIA in the News?
                </h2>
                <p className="mb-5">
                  NVIDIA made headlines in November 2026 following reports of CEO Jensen Huang&apos;s departure from the company. His leadership played a major role in transforming NVIDIA from a graphics chip manufacturer into a global leader in AI computing.
                </p>
                <p className="mb-5">
                  This development has raised questions about the company&apos;s future leadership and business direction.
                </p>
                <p className="mb-5">
                  However, a leadership change does not automatically mean NVIDIA will lose its market position. It has a strong technology ecosystem, established customers and significant influence in the AI industry.
                </p>
                <p className="mb-5">
                  Still, the situation has brought renewed attention to competitors like AMD.
                </p>

                {/* Section 2 */}
                <h2 id="how-amd-gaining-ground" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  How Is AMD Gaining Ground?
                </h2>
                <p className="mb-5">
                  AMD (Advanced Micro Devices) has been competing in the semiconductor industry for decades. Its Ryzen processors are popular among desktop and <Link href="/categories/electronics" className="text-[#056bfa] hover:underline">laptop</Link> users, while its Radeon graphics cards compete in gaming.
                </p>
                <p className="mb-5">
                  But AMD is now focusing heavily on artificial intelligence.
                </p>
                <p className="mb-5">
                  Its Instinct GPUs are designed for AI computing, while its EPYC processors power servers and data centres.
                </p>
                <p className="mb-3">AMD&apos;s third-quarter 2026 financial results highlight this growth:</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>$13.4 billion in total revenue, up 45% year-over-year.</li>
                  <li>$8.5 billion in data-centre revenue, up 97% year-over-year.</li>
                </ul>
                <p className="mb-5">
                  These numbers show that AMD&apos;s business is expanding beyond traditional computer processors.
                </p>

                {/* Section 3 */}
                <h2 id="amd-vs-nvidia-difference" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  AMD vs NVIDIA: What&apos;s the Difference?
                </h2>
                <p className="mb-5">
                  Although both companies compete in the semiconductor industry, their products serve different purposes.
                </p>

                {/* Comparison Table */}
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse rounded-xl overflow-hidden text-sm">
                    <thead>
                      <tr className="bg-[#056bfa] text-white">
                        <th className="text-left px-5 py-3 font-bold">AMD Products</th>
                        <th className="text-left px-5 py-3 font-bold">NVIDIA Products</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b border-[#f0f0f0]">
                        <td className="px-5 py-3 text-[#4b5563]">Ryzen CPUs – Desktop and laptop</td>
                        <td className="px-5 py-3 text-[#4b5563]">GeForce – Gaming GPUs</td>
                      </tr>
                      <tr className="bg-[#f9fafb] border-b border-[#f0f0f0]">
                        <td className="px-5 py-3 text-[#4b5563]">Radeon – Gaming graphics cards</td>
                        <td className="px-5 py-3 text-[#4b5563]">AI GPUs – AI computing</td>
                      </tr>
                      <tr className="bg-white border-b border-[#f0f0f0]">
                        <td className="px-5 py-3 text-[#4b5563]">EPYC – Server processors</td>
                        <td className="px-5 py-3 text-[#4b5563]">Data-centre platforms</td>
                      </tr>
                      <tr className="bg-[#f9fafb]">
                        <td className="px-5 py-3 text-[#4b5563]">Instinct – AI accelerators</td>
                        <td className="px-5 py-3 text-[#4b5563]">AI accelerators</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mb-5">
                  An important distinction is that AMD Ryzen processors do not directly compete with NVIDIA&apos;s AI chips. AMD Instinct GPUs are the more direct competitors.
                </p>

                {/* Section 4 */}
                <h2 id="can-amd-challenge-nvidia" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Can AMD Challenge NVIDIA?
                </h2>
                <p className="mb-5">
                  NVIDIA still has a major advantage through its CUDA software ecosystem, powerful AI chips and established business relationships.
                </p>
                <p className="mb-5">
                  However, AMD is investing in AI hardware and software to attract businesses looking for alternatives.
                </p>
                <p className="mb-5">
                  As demand for AI computing increases, companies may prefer working with multiple chip manufacturers rather than depending on a single supplier. This creates an opportunity for AMD to capture a bigger share of the market.
                </p>

                {/* Section 5 */}
                <h2 id="competition-affect-consumers" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  How Could This Competition Affect Consumers?
                </h2>
                <p className="mb-5">
                  The AMD-NVIDIA rivalry could influence everyday technology in several ways:
                </p>
                <ol className="list-decimal list-inside space-y-2 mb-5 pl-2">
                  <li className="mb-2">
                    <strong>Better Technology:</strong> Competition can encourage both companies to develop faster and more efficient chips.
                  </li>
                  <li className="mb-2">
                    <strong>More Affordable AI:</strong> More hardware options could eventually reduce computing costs, making AI services more accessible.
                  </li>
                  <li className="mb-2">
                    <strong>Better Gaming Products:</strong> Competition between <Link href="/categories/electronics" className="text-[#056bfa] hover:underline">AMD Radeon</Link> and NVIDIA GeForce could bring improved graphics performance and better value for gamers.
                  </li>
                  <li className="mb-2">
                    <strong>More Choices:</strong> Laptop buyers, businesses and technology developers could benefit from having more hardware options.
                  </li>
                </ol>
                <p className="mb-5">
                  However, these changes will take time. Lower chip prices do not automatically translate into cheaper consumer electronics.
                </p>

                {/* Section 6 */}
                <h2 id="who-will-win" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Who Will Win the AI Chip War?
                </h2>
                <p className="mb-5">
                  There is no clear winner yet. NVIDIA has a strong head start, but AMD is steadily expanding its presence in AI computing.
                </p>
                <p className="mb-5">
                  Interestingly, AMD does not need to replace NVIDIA to succeed. Even capturing a larger share of the growing AI market could make it a major winner.
                </p>
                <p className="mb-5">
                  The real benefit could go to businesses and consumers as competition encourages innovation and creates more choices.
                </p>

                {/* Section 7 */}
                <h2 id="in-a-nutshell" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  In a Nutshell
                </h2>
                <p className="mb-5">
                  The AMD vs NVIDIA competition is about more than computer processors and graphics cards. It is about who will power the next generation of artificial intelligence.
                </p>
                <p className="mb-5">
                  As both companies continue to innovate, consumers could eventually benefit from better technology, more choices and improved value.
                </p>
                <p className="mb-5">
                  And when shopping for your next laptop, gaming PC or electronic gadget, comparing options and checking available discounts can make a difference. <Link href="/" className="text-[#056bfa] hover:underline">CouponsBit</Link> helps shoppers discover <Link href="/" className="text-[#056bfa] hover:underline">coupon codes</Link>, promo codes and deals from popular brands.
                </p>
                <p className="mb-5">
                  The AI chip war is far from over, and its next chapter could reshape the technology industry.
                </p>
              </div>

              {/* Tags */}
              <div className="mt-12 flex flex-wrap items-center gap-2">
                <span className="text-[#6b7280] font-medium text-sm mr-1">Tags:</span>
                {["AMD", "NVIDIA", "AI Chips", "Tech News", "Semiconductor", "CouponsBit"].map((tag, i) => (
                  <span key={i} className="bg-[#f5f5f5] text-[#4b5563] text-[11px] font-medium rounded-full px-4 py-1.5 hover:bg-[#e8f6f8] hover:text-[#056bfa] transition-colors duration-300 cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="text-[#6b7280] font-medium text-sm mr-1">Share this article:</span>
                <button className="bg-[#25D366] text-white rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:shadow-lg transition-all">
                  <MessageCircle className="w-4 h-4 fill-white" /> Share on WhatsApp
                </button>
                <button className="bg-black text-white rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:shadow-lg transition-all">
                  <Twitter className="w-3.5 h-3.5 fill-white" /> Share on Twitter
                </button>
                <button className="bg-[#1877F2] text-white rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:shadow-lg transition-all">
                  <Facebook className="w-4 h-4 fill-white" /> Share on Facebook
                </button>
                <button onClick={() => copyToClipboard(typeof window !== "undefined" ? window.location.href : "")} className="bg-[#f5f5f5] text-[#374151] rounded-full px-[18px] py-[8px] font-bold text-[11px] flex items-center gap-2 hover:bg-[#e8f6f8] transition-all">
                  <LinkIcon className="w-3.5 h-3.5" /> Copy Link
                </button>
              </div>
            </article>

            {/* RIGHT SIDEBAR */}
            <aside className="w-full lg:w-[35%] h-fit">

              {/* TOC */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6 mb-5">
                <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                  <span>📋</span> Table of Contents
                </h4>
                <div className="space-y-1">
                  {sections.map((section, i) => (
                    <a
                      key={i}
                      href={`#${section.id}`}
                      className={`flex items-start gap-3 py-2.5 group ${i !== sections.length - 1 ? "border-b border-[#f5f5f5]" : ""}`}
                    >
                      <span className="text-[#056bfa] font-bold text-[11px] mt-1 shrink-0">{(i + 1).toString().padStart(2, "0")}</span>
                      <span className="text-gray-600 text-[13px] group-hover:text-[#056bfa] transition-colors leading-[1.4]">{section.title}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Popular Stores */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6">
                <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                  <span>🛍️</span> Popular Stores
                </h4>
                <div className="space-y-4">
                  {[
                    { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up to 50% OFF", href: "/stores/amazon-discount-code" },
                    { name: "Airalo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784895740/airalo-logo_fc6u6p.webp", dealText: "Save with AC10ALL", href: "/stores/airalo-discount-code" },
                    { name: "Bluehost", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp", dealText: "Up to 69% OFF", href: "/stores/bluehost-discount-code" },
                    { name: "TrainPal", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/trainpal-logo_lkwb0o.webp", dealText: "Up to 50% OFF", href: "/stores/trainpal-discount-code" },
                    { name: "Sungait", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1785130842/sungait-logo_tfolql.webp", dealText: "Save with CLOUDS15", href: "/stores/sungait-discount-code" },
                    { name: "Kerala Ayurveda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785841263/kerala-ayurveda-logo_hdbbfs.jpg", dealText: "Save with COUNTNEW10", href: "/stores/kerala-ayurveda-discount-code" },
                  ].map((store, i) => (
                    <Link
                      key={store.name}
                      href={store.href}
                      className={`flex items-center gap-3 pb-4 group ${i !== 5 ? "border-b border-[#f0f0f0]" : ""}`}
                    >
                      <div className="w-14 h-14 shrink-0 rounded-xl border border-[#f0f0f0] bg-white flex items-center justify-center overflow-hidden">
                        <img src={store.logo} alt={store.name} width={56} height={56} loading="lazy" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-black font-bold text-[15px] truncate group-hover:text-[#056bfa] transition-colors">{store.name}</p>
                        <p className="text-[#056bfa] text-[13px] font-semibold truncate">{store.dealText}</p>
                      </div>
                      <span className="text-[#056bfa] text-[12px] font-bold uppercase tracking-wide shrink-0">View →</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Store Categories */}
              <div className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm p-6 mt-5">
                <h4 className="text-black font-bold text-base mb-5 flex items-center gap-2">
                  <span>🗂️</span> Store Categories
                </h4>
                <div className="space-y-1">
                  {[
                    { icon: Laptop, name: "Electronics",        count: "850+", color: "text-blue-500",   href: "/categories/electronics" },
                    { icon: Plane,  name: "Travel",             count: "420+", color: "text-teal-500",   href: "/categories/travel" },
                    { icon: Tv,     name: "Entertainment",      count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                    { icon: Code,   name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
                    { icon: Zap,    name: "Mobile & Telecom",   count: "320+", color: "text-green-500",  href: "/categories/mobile" },
                  ].map((cat, i) => (
                    <Link key={i} href={cat.href} className="flex items-center justify-between py-3 border-b border-[#f0f0f0] last:border-0 group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <cat.icon className={cn("w-4.5 h-4.5", cat.color)} />
                        <span className="text-gray-600 font-bold text-sm group-hover:text-black transition-colors">{cat.name}</span>
                      </div>
                      <span className="bg-[#e8f6f8] text-[#0451c4] px-2.5 py-0.5 rounded-full text-[12px] font-black">{cat.count} Coupons</span>
                    </Link>
                  ))}
                </div>
                <Link href="/categories" className="block mt-6 text-[#056bfa] font-black text-[11px] uppercase tracking-widest hover:underline">View All Categories →</Link>
              </div>
            </aside>
          </div>
        </div>

        {/* Continue Reading */}
        <section className="bg-white py-20 border-t border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="h-[2px] w-10 sm:w-16 bg-[#056bfa]/20"></span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center">
                Continue <span className="text-[#056bfa]">Reading</span>
              </h2>
              <span className="h-[2px] w-10 sm:w-16 bg-[#056bfa]/20"></span>
            </div>
            <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
              Discover more shopping guides, coupon tips, and seasonal savings from CouponsBit.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  image: "https://res.cloudinary.com/couponsbit/image/upload/v1793012026/Apple_s_Foldable_iPhone_Duo_Revealed_ohjnmd.webp",
                  date: "October 20, 2026",
                  readTime: "5 MIN READ",
                  title: "iPhone Duo: Apple's Commitment and Consumer Reactions",
                  desc: "Apple's foldable iPhone Duo design, durability, consumer reactions, and whether the premium price delivers real value.",
                  href: "/blog/iphone-duo-apple-commitment-consumer-reactions",
                },
                {
                  image: "/blog/amazon-shopping-tips-find-better-deals.webp",
                  date: "November 4, 2026",
                  readTime: "8 MIN READ",
                  title: "Shopping on Amazon? Find Better Deals and Save More",
                  desc: "Shop smarter on Amazon with practical tips to compare products, spot genuine discounts, use coupons, and find more savings with CouponsBit.",
                  href: "/blog/amazon-shopping-tips-find-better-deals",
                },
                {
                  image: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto,w_1000,c_limit/v1783077516/how-to-save-money-shopping-online_h5gv1z.webp",
                  date: "July 3, 2026",
                  readTime: "6 MIN READ",
                  title: "How to Save Money While Shopping Online in 2026",
                  desc: "Learn how to save money online in 2026 with proven shopping tips, coupon strategies, cashback tricks, and exclusive deals from CouponsBit.",
                  href: "/blog/how-to-save-money-shopping-online",
                },
              ].map((post, i) => (
                <Link
                  key={i}
                  href={post.href}
                  className="bg-white rounded-2xl border border-[#f0f0f0] shadow-sm overflow-hidden hover:shadow-lg hover:border-[#056bfa] transition-all duration-300 group flex flex-col"
                >
                  <div className="w-full h-[200px] shrink-0 relative overflow-hidden">
                    <img src={post.image} alt={post.title} width={400} height={200} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2.5">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-500 text-xs font-medium uppercase">{post.date}</span>
                      <span className="text-gray-300" aria-hidden="true">•</span>
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-500 text-xs uppercase font-medium">{post.readTime}</span>
                    </div>
                    <h3 className="text-[#056bfa] font-extrabold text-lg leading-tight mb-2.5 group-hover:text-[#0451c4] transition-all line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">{post.desc}</p>
                    <span className="text-[#056bfa] font-bold text-sm flex items-center gap-1 uppercase tracking-wide group-hover:gap-2 transition-all duration-300">
                      READ MORE <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
