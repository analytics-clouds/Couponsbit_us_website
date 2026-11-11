"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Tag,
  Percent,
  Users,
  BadgeCheck,
  ExternalLink,
  ShieldCheck,
  PiggyBank,
  Copy,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  BookOpen,
  Code,
  Briefcase,
  Palette,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { type Coupon, UDEMY_COUPONS } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Openart.AI", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288848/emergent-coupon-code_oeaxoh_aeoxm7.webp", dealText: "Up to 27% OFF", href: "/stores/openart-discount-code" },
  { name: "Talkpal.AI", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782288847/talkpal-coupon-code_gozaoz.webp", dealText: "Save Up to 69%", href: "/stores/talkpal-discount-code" },
  { name: "Krisp.AI", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782730730/krisp-logo_ajv3iv.webp", dealText: "Save 50% OFF", href: "/stores/krisp-discount-code" },
  { name: "Sintra", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781776169/sintra-coupon-code_piyu2d.webp", dealText: "Up to 70% OFF", href: "/stores/sintra-discount-code" },
  { name: "Upwork", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130860/upwork-logo_ki4h2l.webp", dealText: "Plans From $15", href: "/stores/upwork-discount-code" },
  { name: "Hostinger", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/hostinger-logo_m9ubvs.webp", dealText: "Up To 80% OFF", href: "/stores/hostinger-discount-code" },
];

const STORE_URL = "https://trk.udemy.com/c/6434050/3193860/39854?subId1=1016B";

export default function UdemyCouponsContent() {
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [expandedCoupon, setExpandedCoupon] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);

  const handleCopy = (coupon: Coupon) => {
    navigator.clipboard.writeText(coupon.code);
    setToastCode(coupon.code);
    setShowToast(true);
    setActiveModalCoupon(coupon);
    setShowModal(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const faqs = [
    {
      q: "Does Udemy offer discount codes?",
      a: "Yes, Udemy runs frequent flash sales where courses drop to $9.99–$14.99. Promo codes also appear during major sale events like Black Friday and New Year sales.",
    },
    {
      q: "How do I apply a Udemy coupon code?",
      a: "Go to the Udemy checkout page, click 'Have a coupon?', enter the code and click Apply. The discounted price appears instantly before payment.",
    },
    {
      q: "Why is my Udemy coupon not working?",
      a: "Udemy coupon codes may be expired, region-restricted, or single-use only. Try a fresh verified code from Couponsbit to ensure it works.",
    },
    {
      q: "Can I get Udemy courses for free?",
      a: "Yes, Udemy offers hundreds of free courses marked 'Free' on the course page. No coupon code is needed — just sign up and start learning.",
    },
    {
      q: "Does Udemy offer a student discount?",
      a: "Udemy does not have a formal student discount program, but frequent flash sales bring course prices to as low as $9.99 — often cheaper than any student deal.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">

      {/* Copy Modal */}
      {showModal && activeModalCoupon && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 flex flex-col items-center gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#056bfa] flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-2xl italic">U</span>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-2">Your coupon code has been copied!</p>
              <div className="bg-[#f3e8ff] border-2 border-dashed border-[#056bfa] rounded-xl px-6 py-3">
                <span className="text-[#056bfa] font-black text-xl tracking-widest">
                  {activeModalCoupon.code || "NO CODE NEEDED"}
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-sm text-center">{activeModalCoupon.description}</p>
            <a
              href={STORE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="w-full bg-[#056bfa] hover:bg-[#8710e0] text-white font-bold py-3.5 px-6 rounded-2xl text-center text-sm transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Continue to Store <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => setShowModal(false)}
              className="text-gray-400 text-sm hover:text-gray-600 transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

      <Navbar />

      {/* Toast */}
      <div className={cn(
        "fixed top-20 right-6 z-[60] bg-white rounded-2xl shadow-2xl border border-[#f0f0f0] p-4 flex items-center gap-3 transition-all duration-300 transform",
        showToast ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0 pointer-events-none"
      )}>
        <div className="bg-[#f0fdf4] p-2 rounded-full">
          <CheckCircle className="w-5 h-5 text-[#22c55e]" />
        </div>
        <div>
          <p className="font-black text-black text-sm">Code Copied!</p>
          <p className="text-gray-500 text-xs font-bold font-mono">{toastCode}</p>
        </div>
      </div>

      <main>
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">Udemy Discount Code</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[55%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image
                        src="https://res.cloudinary.com/zzlsqavg/image/upload/v1793879483/udmey_logo.webp"
                        alt="Udemy"
                        width={112}
                        height={112}
                        sizes="112px"
                        className="w-full h-full object-contain p-2"
                        fetchPriority="high"
                      />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Udemy Discount Code &amp; Promo Codes</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.8</span>
                      <span className="text-gray-600 font-bold text-sm">(12.3k Ratings)</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more with the latest Udemy Discount Code and Udemy Promo Code for November 2026. Enjoy up to 85% OFF online courses, 100% FREE select courses, 50% OFF annual plans, and up to 40% OFF certification exam vouchers. You can also enroll in bestselling courses like Python Bootcamp from ₹569 and explore learning bundles from ₹1,328. Browse verified Udemy offers to save on coding, AI, business, marketing, design, and career development courses taught by industry experts.
                    </p>
                    <a
                      href={STORE_URL}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#8710e0] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                    >
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "3", label: "Offers" },
                    { icon: Percent, val: "20+", label: "Deals" },
                    { icon: Users, val: "60M+", label: "Learners" },
                    { icon: BadgeCheck, val: "100%", label: "Verified" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <stat.icon className="w-4 h-4 text-[#056bfa]" />
                      <div>
                        <div className="text-black font-black text-xs leading-none">{stat.val}</div>
                        <p className="text-gray-500 font-bold text-[12px] uppercase mt-0.5">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:block flex-1">
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg">
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                    <div className="w-full h-full bg-gradient-to-br from-[#056bfa] via-[#8710e0] to-[#5c0f8b] flex items-center justify-center">
                      <Image
                        src="https://res.cloudinary.com/zzlsqavg/image/upload/v1793879483/udmey_logo.webp"
                        alt="Udemy Discount Code"
                        width={280}
                        height={120}
                        className="max-h-32 w-auto object-contain filter brightness-0 invert"
                        fetchPriority="high"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="hidden md:block bg-[#f5f5f5] py-5 border-y border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
              {[
                { icon: Star, title: "Top Deals", sub: "Best offers handpicked for you" },
                { icon: ShieldCheck, title: "Verified Coupons", sub: "100% working & tested codes" },
                { icon: PiggyBank, title: "Big Savings", sub: "Save more on every order" },
                { icon: RefreshCw, title: "Updated Daily", sub: "New offers every single day" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 justify-center md:border-r last:border-0 border-[#e0e0e0] px-4">
                  <item.icon className="w-6 h-6 text-[#056bfa] shrink-0" />
                  <div className="text-left">
                    <p className="text-black font-black text-sm leading-none">{item.title}</p>
                    <p className="text-gray-500 font-bold text-[12px] mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coupons + Sidebar */}
        <section className="py-6 md:py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">

              {/* Left: Coupons */}
              <div className="lg:w-[65%]">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">Udemy Discount Codes &amp; Offers</h2>
                </div>
                {UDEMY_COUPONS.map((coupon) => (
                  <div key={coupon.id} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#056bfa] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[10px] sm:tracking-[5px] text-[8px] sm:text-[15px] font-semibold leading-3">{coupon.topLabel}</p>
                            <div className="text-[15px] sm:text-4xl font-extrabold leading-none mt-2">{coupon.mainValue}</div>
                            {coupon.offText && (
                              <p className="text-[8px] sm:text-sm font-bold mt-1 opacity-80">{coupon.offText}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                          <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                              <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                            </div>
                            <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">{coupon.title}</h2>
                            <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">{coupon.description}</p>
                            <div className="flex flex-wrap items-center gap-3 mt-2 text-[12px] text-gray-500">
                              <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {coupon.userType}</span>
                              <span className="flex items-center gap-1"><BadgeCheck className="w-3.5 h-3.5" /> {coupon.verified}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => setExpandedCoupon(expandedCoupon === coupon.id ? null : coupon.id)}
                              className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1 focus:outline-none"
                            >
                              View Details
                              <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${expandedCoupon === coupon.id ? "rotate-180" : ""}`}
                              />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${expandedCoupon === coupon.id ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                              <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                                {coupon.points.map((point, pi) => (
                                  <li key={pi} className="flex items-start gap-2">
                                    <span className="text-[#056bfa]">•</span>
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6 gap-3">
                            {coupon.code && (
                              <button
                                onClick={() => handleCopy(coupon)}
                                className="w-full bg-white border-2 border-dashed border-[#056bfa] text-[#056bfa] font-black text-sm px-4 py-2.5 rounded-xl flex items-center justify-between gap-2 hover:bg-[#f3e8ff] transition-colors"
                              >
                                <span className="font-mono">{coupon.code}</span>
                                <Copy className="w-4 h-4 shrink-0" />
                              </button>
                            )}
                            <a
                              href={STORE_URL}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label={`Get Udemy deal: ${coupon.title}`}
                              className="w-full bg-[#056bfa] hover:bg-[#8710e0] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
                            >
                              Get Deal
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Sidebar */}
              <div className="lg:w-[35%] space-y-8">
                <div className="w-full flex justify-center mb-6">
                  <a href="https://www.google.com/preferences/source?q=couponsbit.us" target="_blank" rel="nofollow noopener noreferrer" className="inline-block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#056bfa] rounded-lg">
                    <Image
                      src="https://res.cloudinary.com/couponsbit/image/upload/v1788251342/google_preferred_source_badge_light_en_j9wixw.png"
                      alt="Add as a preferred source on Google"
                      width={280}
                      height={70}
                      className="w-full max-w-[260px] h-auto object-contain"
                      priority
                    />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <h3 className="text-black font-black text-lg mb-8">
    What Is Udemy?
  </h3>

  <p className="text-gray-500 font-medium text-sm leading-relaxed mb-4">
      Udemy is an online learning marketplace where students can access courses created by instructors from around the world. Its platform connects learners with educational content across professional, technical, creative, and personal development subjects.

    </p>

    <p className="text-gray-500 font-medium text-sm leading-relaxed mb-4">
      Unlike a traditional classroom, Udemy allows learners to study at their own pace. Many individual courses include on-demand video lessons, downloadable resources, quizzes, coding exercises, and practical assignments.

    </p>

    <p className="text-gray-500 font-medium text-sm leading-relaxed mb-4">
      The platform serves individual learners as well as organisations through separate learning solutions. Customers can purchase individual marketplace courses or choose an eligible subscription plan for access to a curated collection of courses. 

    </p>
    <a
                    href={STORE_URL}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2"
                  >
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
  </div>


                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                  <div className="space-y-1">
                    {[
                      { icon: BookOpen, name: "Online Courses", count: "220K+", color: "text-black", href: "/categories" },
                      { icon: Code, name: "Tech & Programming", count: "50K+", color: "text-blue-600", href: "/categories" },
                      { icon: Briefcase, name: "Business Skills", count: "30K+", color: "text-amber-700", href: "/categories" },
                      { icon: Palette, name: "Design & Creative", count: "20K+", color: "text-pink-500", href: "/categories" },
                      { icon: Star, name: "Personal Development", count: "15K+", color: "text-yellow-500", href: "/categories" },
                    ].map((cat, i) => (
                      <Link key={i} href={cat.href} className="flex items-center justify-between py-3 border-b border-[#f0f0f0] last:border-0 group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <cat.icon className={cn("w-4 h-4", cat.color)} />
                          <span className="text-gray-600 font-bold text-sm group-hover:text-black transition-colors">{cat.name}</span>
                        </div>
                        <span className="bg-[#f3e8ff] text-[#056bfa] px-2.5 py-0.5 rounded-full text-[12px] font-black">{cat.count} Coupons</span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/categories" className="block mt-6 text-[#056bfa] font-black text-[11px] uppercase tracking-widest hover:underline">View All Categories →</Link>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <h3 className="text-black font-black text-lg mb-8">
    Ways to Save More on Udemy Courses
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      A promo code can help you spend less on learning, but there are other ways to find suitable course offers.
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Watch for platform-wide sales:</strong> Udemy regularly runs promotions on eligible courses. Check the marketplace before purchasing.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Look for instructor coupons:</strong> Individual instructors can distribute coupon codes for their courses through promotional announcements, websites, and social media.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Subscribe to promotional emails:</strong> Enable marketing notifications to receive information about Udemy's sales and special offers.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Compare course options:</strong> Explore multiple courses covering the same subject and compare their curriculum, instructor experience, ratings, and reviews.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Check course eligibility:</strong> Not every instructor participates in every Udemy promotion, so some courses may not qualify for platform-wide discounts.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Explore Personal Plan:</strong> If you intend to study several subjects, compare the subscription option with the cost of purchasing individual courses.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Use your wishlist:</strong> Save interesting courses and revisit them when a suitable promotion becomes available.</span>
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Udemy confirms that promotional prices and course eligibility can vary because instructors choose whether to participate in its Deals programme.
    </p>
  </div>
</div>


              </div>
            </div>
          </div>
        </section>

        {/* More Stores */}
        <section className="py-20 bg-white border-t border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-2xl font-black text-black mb-10">More Stores You&apos;ll Love</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {RELATED_STORES.map((store, i) => (
                <Link key={i} href={store.href} className="bg-white border border-[#f0f0f0] rounded-3xl p-6 text-center shadow-sm hover:border-[#056bfa] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="h-14 flex items-center justify-center mx-auto">
                    <img src={store.logo} alt={store.name} width={120} height={48} className="max-h-12 max-w-[120px] w-auto object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <h3 className="text-black font-black text-sm mt-5 mb-1">{store.name}</h3>
                  <p className="text-[#056bfa] font-black text-[12px] uppercase mb-4">{store.dealText}</p>
                  <span className="text-[#056bfa] font-black text-[12px] uppercase hover:underline decoration-2">Visit Store →</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/stores" className="inline-flex items-center gap-2 px-9 py-3.5 border-2 border-[#056bfa] text-[#056bfa] bg-white rounded-full font-black hover:bg-[#056bfa] hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl">
              <LayoutGrid className="w-4 h-4" /> View More Stores
            </Link>
          </div>
        </section>

        {/* Big Content Section */}
        <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Udemy Promo Code: Save on Online Courses and Learn New Skills
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA] rounded-tl-[24px] rounded-tr-[24px] rounded-bl-none rounded-br-none">
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-l-xl">Offer</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-r-xl">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 font-bold text-[14px]">
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Udemy Discount Code – Up to 80% Off Online Courses</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 80% OFF</td>
        <td className="p-5 text-gray-500 align-middle">First-time purchasers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Valid on eligible first-time online course purchases</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Eligible Udemy Courses</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Udemy Discount Code – 50% Off Online Courses</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">50% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Business, coding, design & marketing topics with lifetime access</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Select Online Courses</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Udemy Promo Code – 100% Off Select Courses</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">100% OFF (FREE)</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Limited-time free enrollment on select expert-led courses</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Select Promotional Courses</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Udemy Promo Code – Up to 85% Off Courses</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 85% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Technology, business & creative courses with lifetime access</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Thousands of Popular Courses</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Udemy Voucher Code – 25% Off Eligible Orders</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">25% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New learners & eligible users</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Applied automatically to qualifying purchases at checkout</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Eligible Plans & Courses</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Udemy Voucher Code – 50% Off Annual Plans</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">50% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Access to a growing library of premium courses on annual billing</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Qualifying Annual Subscriptions</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Udemy Coupon Code – Up to 40% Off Certification Exam Vouchers</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 40% OFF</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Training and exam vouchers for popular certification programs</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Certification Exam Vouchers</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Udemy Coupon Code – Up to 85% Off Personal Plan</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up to 85% OFF (First Year)</td>
        <td className="p-5 text-gray-500 align-middle">First-year subscribers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Access to thousands of premium courses with flexible online lessons</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Udemy Personal Plan (Year 1)</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Udemy Referral Code – Python Bootcamp Special Offer</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">₹569 (Reg. ₹3,199)</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">100 Days of Code™ Python bootcamp by Dr. Angela Yu with hands-on projects</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Python Bootcamp Course</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Udemy Referral Code – Career Accelerator Programs</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Special Pricing</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Step-by-step learning paths for Data Science and Game Development</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Career Accelerator Learning Paths</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Udemy Discount Deal – Learning Bundles from ₹1,328</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">From ₹1,328</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Hand-picked bundles for Python, Java, AWS, and Web Development</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Curated Tech Learning Bundles</td>
      </tr>
      <tr className="hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Udemy Discount Deal – Top-Rated Online Courses</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Limited-Time Discounts</td>
        <td className="p-5 text-gray-500 align-middle">New & existing customers</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Bestselling courses across all categories with lifetime access</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Global Udemy Course Catalog</td>
      </tr>
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Want to learn a new skill, improve your professional knowledge, or explore a different career path? Udemy makes online learning accessible through thousands of courses covering technology, business, creative skills, personal development, and more. Before enrolling, visit CouponsBit to find a Udemy promo code and explore available discounts on online courses.
          </p>
          <p>
            Whether you're learning Python, preparing for a certification, improving your digital marketing skills, or exploring artificial intelligence, a suitable course can help you move closer to your goals. Check available offers before purchasing and make your learning budget go further.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            What Can You Learn on Udemy?
          </h3>
          <p>
            Udemy covers a wide range of subjects, making it useful for beginners, working professionals, students, and people interested in learning something new.
          </p>

          <h3 className="text-lg font-black text-black mt-6 mb-2">
            1. Development and Programming
          </h3>
          <p>
            Build technical knowledge with courses covering programming languages, software development, and web technologies.
          </p>
          <p>
            Popular learning areas include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Python programming</li>
            <li>JavaScript and web development</li>
            <li>Java and C++</li>
            <li>Full-stack development</li>
            <li>Mobile app development</li>
            <li>Data structures and algorithms</li>
            <li>Software testing</li>
          </ul>
          <p>
            These courses can help beginners understand programming fundamentals and allow experienced developers to explore more advanced topics.
          </p>

          <h3 className="text-lg font-black text-black mt-6 mb-2">
            2. Business and Entrepreneurship
          </h3>
          <p>
            Explore courses designed to develop business knowledge and practical workplace skills.
          </p>
          <p>
            Topics include entrepreneurship, business strategy, project management, leadership, operations, business communication, and management.
          </p>

          <h3 className="text-lg font-black text-black mt-6 mb-2">
            3. Digital Marketing
          </h3>
          <p>
            Learn how to build an online presence, reach customers, and understand digital marketing channels.
          </p>
          <p>
            You can explore courses on:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Search engine optimisation (SEO)</li>
            <li>Social media marketing</li>
            <li>Google Ads and paid advertising</li>
            <li>Content marketing</li>
            <li>Email marketing</li>
            <li>Affiliate marketing</li>
            <li>Marketing analytics</li>
          </ul>
          <p>
            These subjects can be useful for freelancers, business owners, marketers, and anyone interested in online growth.
          </p>

          <h3 className="text-lg font-black text-black mt-6 mb-2">
            4. Artificial Intelligence and Data Science
          </h3>
          <p>
            As AI tools and data-driven technologies become increasingly important, Udemy offers courses covering machine learning, generative AI, data analytics, and related technologies.
          </p>
          <p>
            Explore subjects such as ChatGPT, prompt engineering, Python for data science, machine learning, deep learning, and business applications of AI.
          </p>

          <h3 className="text-lg font-black text-black mt-6 mb-2">
            5. Design and Creative Skills
          </h3>
          <p>
            Develop creative abilities through courses in graphic design, illustration, photography, video editing, animation, and user experience design.
          </p>
          <p>
            You can also find training on popular creative tools and software used by designers and content creators.
          </p>

          <h3 className="text-lg font-black text-black mt-6 mb-2">
            6. IT and Certification Preparation
          </h3>
          <p>
            Udemy provides courses and practice resources for learners preparing for selected professional and technology certifications.
          </p>
          <p>
            Explore training related to cloud computing, cybersecurity, networking, IT support, and certification examinations from recognised organisations.
          </p>

          <h3 className="text-lg font-black text-black mt-6 mb-2">
            7. Personal Development and Lifestyle
          </h3>
          <p>
            Learning does not have to be limited to professional goals. Udemy also features courses on productivity, communication, time management, language learning, music, health, and personal finance.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Find a Udemy Promo Code on CouponsBit
          </h3>
          <p>
            Before purchasing an online course, visit CouponsBit to check available Udemy offers and discount codes.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Visit CouponsBit and open the Udemy store page.</li>
            <li>Browse the available promo codes and course deals.</li>
            <li>Select an offer that matches the course you want to purchase.</li>
            <li>Review the offer conditions, including expiry dates and eligible courses.</li>
            <li>Copy the promo code if the promotion requires one.</li>
            <li>Visit Udemy and sign in to your account.</li>
            <li>Add your selected course to the shopping cart.</li>
            <li>Enter the discount code in the coupon field within the cart.</li>
            <li>Apply the code and check the revised course price before completing payment.</li>
          </ol>
          <p>
            Some Udemy promotions are automatically applied to eligible courses, so you may not need to enter a code manually.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Apply a Udemy Promo Code
          </h3>
          <p>
            Follow these steps to use an eligible Udemy discount code:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Open Udemy in your web browser.</li>
            <li>Search for the course you want to purchase.</li>
            <li>Review the course details, instructor information, ratings, and curriculum.</li>
            <li>Add the course to your shopping cart.</li>
            <li>Open the cart and locate the coupon or promotional code field.</li>
            <li>Enter your copied promo code and select Apply.</li>
            <li>Check that the discount has been reflected in the total.</li>
            <li>Complete the payment using an available payment method.</li>
          </ol>
          <p>
            Important: Udemy currently does not support coupon-code entry through its mobile app. If you have a code, use Udemy's website through a browser to apply it. You can still access your purchased courses through the mobile app afterwards.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Udemy Promo Codes and Pricing in Different Countries
          </h3>
          <p>
            Udemy supports international learners with localised pricing in several currencies. For CouponsBit shoppers, this is particularly relevant across India, the United States, Brazil, Japan, and Mexico.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden border border-[#f0f0f0] shadow-sm">
              <thead>
                <tr className="bg-[#e8f6f8] text-[#056bfa] font-black text-sm uppercase tracking-widest border-b border-[#f0f0f0]">
                  <th className="p-4">Target country</th>
                  <th className="p-4">Supported currency</th>
                  <th className="p-4">What shoppers should check</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f0f0] text-gray-600 font-bold text-sm">
                <tr>
                  <td className="p-4 text-black">India</td>
                  <td className="p-4">Indian Rupee (INR)</td>
                  <td className="p-4">Local course pricing, eligible discounts, and applicable taxes</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">United States</td>
                  <td className="p-4">US Dollar (USD)</td>
                  <td className="p-4">Course promotions, instructor coupons, and checkout offers</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Brazil</td>
                  <td className="p-4">Brazilian Real (BRL)</td>
                  <td className="p-4">Localised pricing and available payment methods</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Japan</td>
                  <td className="p-4">Japanese Yen (JPY)</td>
                  <td className="p-4">Course pricing, regional promotions, and payment options</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Mexico</td>
                  <td className="p-4">Mexican Peso (MXN)</td>
                  <td className="p-4">Local pricing, eligible course discounts, and payment methods</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Udemy uses a country-specific price-tier system rather than simply converting every course price using the current exchange rate. Prices can therefore differ between countries. Payment providers may also affect the currency charged in some circumstances.
          </p>
          <p>
            Before purchasing, confirm your account's country, the displayed course price, and the final amount at checkout.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Individual Courses vs. Udemy Personal Plan
          </h3>
          <p>
            Udemy offers more than one way to access learning content. Understanding the difference can help you choose an option that matches your learning habits.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden border border-[#f0f0f0] shadow-sm">
              <thead>
                <tr className="bg-[#e8f6f8] text-[#056bfa] font-black text-sm uppercase tracking-widest border-b border-[#f0f0f0]">
                  <th className="p-4">Feature</th>
                  <th className="p-4">Individual course</th>
                  <th className="p-4">Personal Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f0f0] text-gray-600 font-bold text-sm">
                <tr>
                  <td className="p-4 text-black">Payment</td>
                  <td className="p-4">One-time purchase</td>
                  <td className="p-4">Recurring subscription</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Course access</td>
                  <td className="p-4">Lifetime access to the purchased course, subject to platform terms</td>
                  <td className="p-4">Access to included courses while subscribed</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Course selection</td>
                  <td className="p-4">Individual marketplace courses</td>
                  <td className="p-4">Curated collection</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Best suited for</td>
                  <td className="p-4">Learning a specific skill</td>
                  <td className="p-4">Exploring multiple subjects</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Content availability</td>
                  <td className="p-4">Depends on the purchased course</td>
                  <td className="p-4">Depends on the subscription catalogue</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Udemy states that individual course purchases provide lifetime access to the purchased course, subject to continued account access and Udemy's licensing rights. Personal Plan provides access to its included collection for the duration of the subscription. Not every marketplace course is included in Personal Plan.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Things to Check Before Buying a Udemy Course
          </h3>
          <p>
            A discount should not be the only factor when choosing an online course. Consider these points before enrolling.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Review the course curriculum:</strong> Check the lessons and topics covered to make sure they match your learning goals.</li>
            <li><strong>Check the instructor's experience:</strong> Explore the instructor profile, professional background, and other courses.</li>
            <li><strong>Read student reviews:</strong> Ratings and reviews can help you understand the learning experience, although they should be considered alongside the actual course content.</li>
            <li><strong>Check the last update date:</strong> For subjects such as AI, programming, digital marketing, and software, updated lessons can be particularly important.</li>
            <li><strong>Understand the access terms:</strong> Individual marketplace courses and subscription courses have different access arrangements.</li>
            <li><strong>Review refund conditions:</strong> Udemy generally provides a 30-day refund window for eligible marketplace course purchases, subject to its refund policy and restrictions. Subscription purchases have different refund terms, so check those before signing up.</li>
          </ul>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Learn More for Less with Udemy and CouponsBit
          </h3>
          <p>
            Whether you're interested in coding, business, artificial intelligence, digital marketing, design, or personal development, Udemy offers courses for different learning goals and experience levels.
          </p>
          <p>
            Before enrolling, visit CouponsBit to explore the latest Udemy promo codes, online course discounts, and learning deals. Compare eligible offers, check regional pricing, and apply a valid coupon before completing your purchase.
          </p>
          <p>
            From India and the United States to Brazil, Japan, and Mexico, CouponsBit helps learners discover opportunities to make online education more affordable.
          </p>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"}
          <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* Accordion FAQ Section */}
        <div className="faq-section mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions About Udemy Promo Codes
          </h3>
          {[
            {
              q: "1. Where can I find a Udemy promo code?",
              a: "You can visit the Udemy store page on CouponsBit to explore available discount codes and course offers. Check the conditions before applying a code to your selected course."
            },
            {
              q: "2. Does Udemy offer discounts on online courses?",
              a: "Yes. Udemy regularly runs promotions on eligible marketplace courses and subscriptions. The discounts and participating courses can vary by region and promotional campaign."
            },
            {
              q: "3. Can I use an instructor coupon code on Udemy?",
              a: "Yes. Instructors can create and distribute coupon codes for their courses. These codes can be entered in the shopping cart, subject to the coupon's validity and redemption conditions."
            },
            {
              q: "4. Why is my Udemy promo code not working?",
              a: "A code may not work because it has expired, the selected course is excluded from the promotion, the instructor has not opted into the relevant promotional programme, or the code is not valid for your account or region. Also, coupon codes cannot currently be entered through the Udemy mobile app. Use the website through a browser instead."
            },
            {
              q: "5. Does Udemy offer lifetime access to courses?",
              a: "Yes. Individual marketplace course purchases generally provide lifetime access to the purchased course, subject to your account remaining in good standing and Udemy retaining the necessary licence for the content. Subscription access works differently."
            },
            {
              q: "6. Does Udemy support local currencies?",
              a: "Yes. Udemy supports several local currencies, including INR, USD, BRL, JPY, and MXN. The displayed price is determined through its regional pricing system and may differ between markets."
            },
            {
              q: "7. Is Udemy Personal Plan different from buying individual courses?",
              a: "Yes. Individual purchases provide access to specific courses, while Personal Plan is a recurring subscription that provides access to a curated collection of included courses."
            },
            {
              q: "8. Can I get a refund if I am not satisfied with a Udemy course?",
              a: "Eligible individual marketplace course purchases may qualify for a refund within 30 days, subject to Udemy's refund policy. Subscription purchases follow separate conditions and may not qualify for the same guarantee."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#056bfa] rotate-180")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white")} />
                </div>
              </button>
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        {/* Tag Cloud */}
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Udemy Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Udemy Promo Code",
              "Python Programming Deals",
              "Digital Marketing Courses",
              "Personal Plan Subscription",
              "IT & Cloud Certifications",
              "Graphic Design Sale",
              "Web Development Discounts",
              "AI & Machine Learning"
            ].map((tag) => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top Udemy Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "COURSES FROM $9.99",
                sub: "Flash sale on top-rated development & IT courses",
              },
              {
                heading: "PERSONAL PLAN TRIAL",
                sub: "Access thousands of courses with a monthly plan",
              },
              {
                heading: "INSTRUCTOR COUPONS",
                sub: "Up to 85% off with custom teacher discount codes",
              },
              {
                heading: "FREE COURSE OFFERS",
                sub: "Explore free introductory tutorials & lectures",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  U
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">
                    {deal.heading}
                  </p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">
                    {deal.sub}
                  </p>
                </div>
                <a
                  href={STORE_URL}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`Shop Udemy: ${deal.heading}`}
                  className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90"
                >
                  Get Deal
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      </main>

      <Footer />
    </div>
  );
}
