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
    { id: "what-is-veterans-day", title: "What Is Veterans Day and Why Do We Celebrate It?" },
    { id: "when-is-veterans-day-2026", title: "When Is Veterans Day 2026?" },
    { id: "6-ways-to-celebrate", title: "6 Meaningful Ways to Celebrate Veterans Day" },
    { id: "veterans-day-vs-memorial-day", title: "Veterans Day vs. Memorial Day: What's the Difference?" },
    { id: "veterans-day-discounts", title: "Are There Veterans Day Discounts and Special Offers?" },
    { id: "november-shopping", title: "Planning to Shop This November?" },
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
            <span className="text-gray-700 text-sm font-medium truncate max-w-[200px]">Veterans Day 2026</span>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-0 max-w-7xl py-10">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT COLUMN */}
            <article className="w-full lg:w-[65%]">
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#e8f6f8] text-[#0344b0] rounded-full text-[10px] font-bold px-3.5 py-1 tracking-wider uppercase">SAVINGS TIPS</span>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Clock className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">5 min read</span>
                  </div>
                  <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <Calendar className="w-[13px] h-[13px] text-gray-500" />
                    <span className="text-gray-500 text-[11px]">November 5, 2026</span>
                  </div>
                </div>

                <h1 className="text-black font-extrabold text-3xl md:text-4xl leading-tight mb-6">
                  Veterans Day 2026: Ways to Honour Our Heroes
                </h1>

                <div className="rounded-2xl overflow-hidden w-full h-[220px] md:h-[420px]">
                  <img
                    src="https://res.cloudinary.com/zzlsqavg/image/upload/v1793866032/veterans-day-2026-ways-to-honour-veterans.webp"
                    alt="Veterans Day 2026: Ways to Honour Our Heroes"
                    width={800}
                    height={420}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-400 text-[11px] text-center italic mt-2">
                  November 11 is a day to say thank you to those who served in the United States Armed Forces
                </p>

                <div className="mt-8 mb-8 border-l-4 border-[#056bfa] bg-[#e8f6f8] rounded-r-2xl p-5 md:p-6">
                  <p className="text-[#056bfa] font-medium text-lg italic leading-relaxed">
                    "Freedom and service deserve recognition — Veterans Day is a simple but powerful reminder of that."
                  </p>
                </div>
              </header>

              {/* Article Body */}
              <div className="text-[#4b5563] text-base leading-[1.8] font-inter">

                <p className="mb-5">
                  November 11 is more than just another date on the calendar. It's a day to say thank you to the brave men and women who served in the United States Armed Forces.
                </p>
                <p className="mb-5">
                  Veterans Day is a time to show appreciation, share stories, attend community events, and recognize the sacrifices military veterans have made. Whether you celebrate with family, join a local parade, or simply thank a veteran, even a small gesture can make the day meaningful.
                </p>
                <p className="mb-5">
                  But why do Americans celebrate Veterans Day, and how can you make November 11 special? Let's take a look!
                </p>

                {/* Section 1 */}
                <h2 id="what-is-veterans-day" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  What Is Veterans Day and Why Do We Celebrate It?
                </h2>
                <p className="mb-5">
                  Veterans Day is a federal holiday in the United States, observed every year on November 11. It honours people who have served in the US military, including those who are still living and those who have passed away.
                </p>
                <p className="mb-5">
                  The holiday began as Armistice Day. On November 11, 1918, an armistice ended the fighting on the Western Front during World War I. The date became a way to remember that historic moment and honour those who served.
                </p>
                <p className="mb-5">
                  In 1954, the United States officially renamed Armistice Day to Veterans Day. The holiday now recognizes veterans from all branches of the military and every generation.
                </p>
                <p className="mb-5">
                  It's a simple but powerful reminder: freedom and service deserve recognition.
                </p>

                {/* Section 2 */}
                <h2 id="when-is-veterans-day-2026" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  When Is Veterans Day 2026?
                </h2>
                <p className="mb-5">
                  Veterans Day falls on <strong>Wednesday, November 11, 2026</strong>.
                </p>
                <p className="mb-5">
                  Unlike some holidays, Veterans Day has a fixed date every year. Communities across the country mark the occasion with ceremonies, parades, memorial events, and moments of gratitude.
                </p>
                <p className="mb-5">
                  If you're planning to attend a local event, check your city's schedule in advance.
                </p>

                {/* Section 3 */}
                <h2 id="6-ways-to-celebrate" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  6 Meaningful Ways to Celebrate Veterans Day
                </h2>
                <p className="mb-5">
                  You don't need a big event or an expensive plan to honour veterans. A thoughtful gesture can make a difference. Here are six ways to take part.
                </p>

                <div className="space-y-6 my-8">
                  {[
                    {
                      num: "1",
                      title: "Say Thank You to a Veteran",
                      body: "Sometimes, the simplest words mean the most. If you know someone who served in the military, take a moment to thank them. Visit a veteran in your family, call an old friend, or send a thoughtful message. You can also encourage children to write thank-you cards. It gives them a simple way to understand the importance of service and appreciation.",
                    },
                    {
                      num: "2",
                      title: "Attend a Veterans Day Parade or Ceremony",
                      body: "Many American towns and cities organize parades, flag ceremonies, and community gatherings on November 11. These events bring people together to recognize veterans and celebrate their service. You may see military bands, veterans' groups, local organizations, and families taking part. Look for events in your area and join one if you can. Your presence is a meaningful way to show support.",
                    },
                    {
                      num: "3",
                      title: "Support Veteran-Owned Businesses",
                      body: "Want to show appreciation through your everyday choices? Consider shopping from veteran-owned businesses. Many former service members build businesses after leaving the military, turning their skills and experience into new opportunities. From clothing and food to home products and professional services, you can explore businesses founded or run by veterans. A purchase can be one small way to support their next chapter.",
                    },
                    {
                      num: "4",
                      title: "Volunteer or Donate to a Good Cause",
                      body: "Giving your time can be just as valuable as giving money. Look for local organizations that support veterans and their families. You could volunteer at a community event, donate useful supplies, or contribute to a trusted veteran-support organization. Before donating, check the organization's background and how it uses contributions.",
                    },
                    {
                      num: "5",
                      title: "Spend Time with Veterans in Your Community",
                      body: "Not every celebration needs a parade or a formal event. You could visit a veteran living nearby, invite someone for lunch, or simply sit down and listen to their experiences. Many veterans have stories worth hearing. Giving someone your time and attention can make them feel appreciated and included.",
                    },
                    {
                      num: "6",
                      title: "Teach Children About Veterans Day",
                      body: "Children should understand why the country observes Veterans Day. Explain what military service means in simple words. Read a suitable book together, make a flag-themed craft, or help children prepare thank-you cards. You can also explain the difference between Veterans Day and Memorial Day so they understand why both holidays matter.",
                    },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-5 items-start bg-[#f8f8f8] rounded-[20px] p-5 border border-gray-100">
                      <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-md text-base italic">
                        {item.num}
                      </div>
                      <div>
                        <h3 className="text-black font-extrabold text-base mb-2">{item.title}</h3>
                        <p className="text-[#4b5563] text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Section 4 */}
                <h2 id="veterans-day-vs-memorial-day" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Veterans Day vs. Memorial Day: What's the Difference?
                </h2>
                <p className="mb-5">
                  People sometimes confuse these two American holidays because both recognize military service. However, they have different purposes.
                </p>

                <div className="my-8 overflow-x-auto rounded-[20px] border-2 border-gray-100 bg-white shadow-sm">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-[#056BFA]">
                        <th className="p-5 text-[14px] font-black text-white uppercase tracking-wider rounded-tl-[18px]"></th>
                        <th className="p-5 text-[14px] font-black text-white uppercase tracking-wider">Veterans Day</th>
                        <th className="p-5 text-[14px] font-black text-white uppercase tracking-wider rounded-tr-[18px]">Memorial Day</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 font-bold text-[14px]">
                      <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                        <td className="p-5 text-black font-black align-middle">Date</td>
                        <td className="p-5 text-gray-600 align-middle">November 11</td>
                        <td className="p-5 text-gray-600 align-middle">Last Monday of May</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                        <td className="p-5 text-black font-black align-middle">Purpose</td>
                        <td className="p-5 text-gray-600 align-middle">Honours everyone who served in the US Armed Forces</td>
                        <td className="p-5 text-gray-600 align-middle">Remembers military personnel who died while serving</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-5 text-black font-black align-middle">Who It Recognizes</td>
                        <td className="p-5 text-gray-600 align-middle">Living and deceased veterans</td>
                        <td className="p-5 text-gray-600 align-middle">Those who lost their lives in military service</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mb-5">
                  Both days deserve respect, but they recognize different aspects of military service.
                </p>

                {/* Section 5 */}
                <h2 id="veterans-day-discounts" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Are There Veterans Day Discounts and Special Offers?
                </h2>
                <p className="mb-5">
                  Along with ceremonies and community events, Veterans Day often brings special offers from retailers and businesses.
                </p>
                <p className="mb-5">
                  Some companies provide military discounts to eligible veterans and active-duty service members. These offers may cover categories such as:
                </p>
                <ul className="list-disc list-inside space-y-1 mb-5 pl-2">
                  <li>Clothing and footwear</li>
                  <li>Electronics and accessories</li>
                  <li>Restaurants and food</li>
                  <li>Travel and accommodation</li>
                  <li>Home improvement and everyday essentials</li>
                </ul>
                <p className="mb-5">
                  However, not every offer is available to everyone. Some discounts require military identification or proof of eligibility, while others may have specific terms and conditions.
                </p>
                <p className="mb-5">
                  If you're a veteran or eligible service member, check each retailer's official policy before making a purchase.
                </p>
                <p className="mb-5">
                  And if you're shopping for yourself, your family, or someone special this November, comparing available deals can help you make smarter buying decisions.
                </p>

                {/* Section 6 */}
                <h2 id="november-shopping" className="flex items-center text-black font-extrabold text-2xl mt-10 mb-4">
                  <span className="w-1 h-7 bg-[#056bfa] rounded mr-3 inline-block"></span>
                  Planning to Shop This November? Don't Miss Out on Savings!
                </h2>
                <p className="mb-5">
                  November is a busy shopping month in the US. With seasonal promotions and major shopping events approaching, many people start planning their purchases early.
                </p>
                <p className="mb-5">
                  Whether you're looking for a thoughtful gift, new clothing, electronics, or everyday essentials, take a little time to compare your options before checking out.
                </p>
                <p className="mb-5">
                  That's where CouponsBit can help!
                </p>
                <p className="mb-5">
                  Visit <Link href="/stores" className="text-[#056bfa] hover:underline">CouponsBit</Link> to explore coupon codes, promo codes, discount offers, and deals from popular brands. You can browse different <Link href="/categories" className="text-[#056bfa] hover:underline">shopping categories</Link>, check available offers, and look for opportunities to save on your next purchase.
                </p>
                <p className="mb-5">
                  You can also prepare for the upcoming shopping season with our guide to <Link href="/blog/upcoming-sales-2026" className="text-[#056bfa] hover:underline">upcoming sales in 2026</Link>.
                </p>
                <p className="mb-5">
                  Remember, a good deal is always worth checking, but Veterans Day is about much more than shopping.
                </p>

                {/* Closing */}
                <div className="bg-[#e8f6f8] border-l-4 border-[#056bfa] rounded-r-2xl p-5 md:p-6 my-8">
                  <h3 className="text-black font-extrabold text-lg mb-3">In Short</h3>
                  <p className="text-[#4b5563] leading-relaxed mb-3">
                    Veterans Day is a chance to pause, reflect, and appreciate the people who have served the nation. You can celebrate by attending a local ceremony, supporting veteran-owned businesses, volunteering, or simply saying thank you.
                  </p>
                  <p className="text-[#4b5563] leading-relaxed mb-3">
                    You don't need an elaborate plan to make November 11 meaningful. A little kindness and genuine appreciation can go a long way.
                  </p>
                  <p className="text-[#4b5563] leading-relaxed">
                    And if you're planning your November shopping, visit CouponsBit to discover coupon codes and deals that can help you save along the way.
                  </p>
                </div>

                <p className="mb-5 font-extrabold text-black text-lg">
                  This Veterans Day, let's honour those who served, appreciate their sacrifices, and make gratitude more than just a one-day gesture.
                </p>
                <p className="mb-5 font-extrabold text-black text-lg">
                  Happy Veterans Day! 🇺🇸
                </p>
              </div>

              {/* Tags */}
              <div className="mt-12 flex flex-wrap items-center gap-2">
                <span className="text-[#6b7280] font-medium text-sm mr-1">Tags:</span>
                {["Veterans Day 2026", "November 11", "Military Service", "Honour Veterans", "CouponsBit", "November Shopping"].map((tag, i) => (
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
                    { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/amazon-coupon-code_xn2sqr.webp", dealText: "Up to 50% OFF", href: "/stores/amazon-discount-code" },
                    { name: "Valvoline", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/valvoline-logo_qfdbbq.webp", dealText: "Up to 50% OFF", href: "/stores/valvoline-discount-code" },
                    { name: "Bluehost", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775924/bluehost-coupon-code_j8pvdt.webp", dealText: "Up to 69% OFF", href: "/stores/bluehost-discount-code" },
                    { name: "Airalo", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775924/airalo-coupon-code_tkmyoo.webp", dealText: "Save with AC10ALL", href: "/stores/airalo-discount-code" },
                    { name: "Kerala Ayurveda", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785841263/kerala-ayurveda-logo_hdbbfs.jpg", dealText: "Save with COUNTNEW10", href: "/stores/kerala-ayurveda-discount-code" },
                    { name: "TrainPal", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782114026/trainpal-logo_lkwb0o.webp", dealText: "Up to 50% OFF", href: "/stores/trainpal-discount-code" },
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
                  image: "/blog/reasons-to-use-promo-code-before-buying.webp",
                  date: "November 13, 2026",
                  readTime: "6 MIN READ",
                  title: "Top 5 Reasons to Use a Promo Code Before Buying Anything",
                  desc: "Discover 5 reasons to use a promo code before buying anything. Learn how promo codes help you save money, shop smarter, and get better value.",
                  href: "/blog/reasons-to-use-promo-code-before-buying",
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
                  image: "https://res.cloudinary.com/couponsbit/image/upload/v1787725876/upcoming-sales-2026_nqxs3z.webp",
                  date: "June 23, 2026",
                  readTime: "6 MIN READ",
                  title: "The Biggest U.S. Sales Coming Up in 2026",
                  desc: "Explore the ultimate guide to upcoming sales in 2026. Find the best coupon codes, promo offers, and major shopping dates to maximize your savings.",
                  href: "/blog/upcoming-sales-2026",
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
