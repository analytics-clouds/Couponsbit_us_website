"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Tag,
  Percent,
  Users,
  BadgeCheck,
  ExternalLink,
  HeartHandshake,
  ShieldAlert,
  Calendar,
  Receipt,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  Gift,
  Truck,
  Tv,
  Trophy,
  Play,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "GamsGo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787739252/gamesgo-logo_xo1xw9.webp", dealText: "Save Up to 85%", href: "/stores/gamsgo-discount-code" },
  { name: "Stubhub", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/stubhub-coupon-code_fplhay.webp", dealText: "Flat 10% OFF", href: "/stores/stubhub-discount-code" },
  { name: "SeatGeek", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788868873/seatgeek-logo_rhvjww.webp", dealText: "Up to $20 Off Tickets", href: "/stores/seatgeek-promo-code" },
  { name: "Vivid Seats", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788951742/vividset-logo_pzyiuj.webp", dealText: "15% OFF First Order", href: "/stores/vivid-seats-promo-code" },
  { name: "Viagogo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/viagogo-coupon-code_t65aol.webp", dealText: "Starting at $332", href: "/stores/viagogo-discount-code" },
  { name: "Spirit Halloween", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/spirti-logo_x4nbor.webp", dealText: "Up To 75% OFF", href: "/stores/spirit-halloween-discount-code" },
];

const STORE_URL = "https://www.peacocktv.com";

export default function PeacockCouponsContent() {
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      <Navbar />

      {/* Toast Notification */}
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
              <span className="text-black font-extrabold">Peacock</span>
            </nav>
          </div>
        </div>

        {/* Store Header */}
        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1789994531/peacock-logo_mhfin7.webp" alt="Peacock" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Peacock Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.3</span>
                      <span className="text-gray-600 font-bold text-sm">(15.2k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Discover the latest Peacock Discount Code offers and verified Peacock promo Code deals. Get eligible military plans from $2.99/month, enjoy Peacock Premium from $7.99/month, or access Premium Plus for $13.99/month. Compare verified streaming offers and choose the subscription that delivers the best value.
                    </p>
                    <a
                      href={STORE_URL}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                    >
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "9", label: "Offers" },
                    { icon: Percent, val: "70+", label: "Deals" },
                    { icon: Users, val: "4M+", label: "Shoppers" },
                    { icon: BadgeCheck, val: "100%", label: "Verified" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <stat.icon className="w-4.5 h-4.5 text-[#056bfa]" />
                       <div>
                         <div className="text-black font-black text-xs leading-none">{stat.val}</div>
                         <p className="text-gray-500 font-bold text-[12px] uppercase mt-0.5">{stat.label}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:block flex-1">
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg group">
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: 1 }}>
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1790324559/57_ssp7cy.webp" alt="Peacock Promo Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
                    </a>
                  </div>
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
                { icon: RefreshCw, title: "Updated Daily", sub: "New offers every single day" }
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
              <div className="top-offers lg:w-[65%]">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">Peacock Promo Codes & Offers</h2>
                </div>

                {[
                  { label: "FROM", value: "$2.99/MO", title: "Peacock Promo Code – Military Discount Starting at $2.99/Month", desc: "Eligible military members can enjoy Peacock plans starting at $2.99 per month.", bullets: ["Access premium entertainment at a discounted monthly price.", "Check the offer requirements and eligibility before activating the plan."] },
                  { label: "FROM", value: "$7.99/MO", title: "Peacock Promo Code – Premium Plan Starting at $7.99/Month", desc: "Get the Peacock Premium Plan starting at $7.99 per month.", bullets: ["Enjoy access to Peacock’s selection of movies, shows, sports and entertainment.", "Activate the eligible offer and choose the plan that fits your streaming needs."] },
                  { label: "FROM", value: "$7.99", title: "Peacock Discount Code – Select Monthly Plan Starting at $7.99", desc: "Choose a qualifying Peacock monthly plan starting at $7.99.", bullets: ["Stream a variety of entertainment content with a Peacock subscription.", "Review the available plan details before activating the offer."] },
                  { label: "ONLY", value: "$7.99", title: "Peacock Discount Code – Premium Monthly Plan for $7.99", desc: "Get the Peacock Premium Monthly Plan for $7.99.", bullets: ["Enjoy premium streaming access across eligible movies, shows and entertainment.", "Check the current subscription terms before signing up."] },
                  { label: "ONLY", value: "$13.99/MO", title: "Peacock Premium Plus Plan – Just $13.99/Month", desc: "Get the Peacock Premium Plus Plan for just $13.99 per month.", bullets: ["Upgrade your streaming experience with the Premium Plus subscription.", "Explore the plan benefits and activate the offer if eligible."] },
                  { label: "FROM", value: "$25", title: "Peacock Gift Cards – Starting From $25", desc: "Get Peacock Gift Cards starting from $25.", bullets: ["Choose a gift card value that works for your entertainment needs.", "Gift cards offer a convenient way to give Peacock streaming access."] },
                  { label: "FROM", value: "$169.99", title: "Peacock Premium Plus Annual Plan – Starting From $169.99", desc: "Grab the Peacock Premium Plus Annual Plan starting from $169.99.", bullets: ["Enjoy an annual streaming subscription with eligible Premium Plus benefits.", "Choose an annual plan for convenient long-term access to Peacock entertainment."] },
                  { label: "ONLY", value: "$6.99/MO", title: "Peacock Premium for Medical Pros & First Responders – $6.99/Month", desc: "Eligible medical professionals and first responders can get Peacock Premium for $6.99 per month.", bullets: ["Enjoy premium streaming access at a special monthly rate.", "Verify your eligibility before activating the offer."] },
                  { label: "PERK", value: "FREE", title: "Peacock Premium Included Free With Walmart+ Membership", desc: "Get Peacock Premium included at no additional cost with an eligible Walmart+ membership.", bullets: ["Enjoy Peacock entertainment alongside your Walmart+ membership ben"] },
                ].map((c, i) => (
                  <div key={i} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[10px] sm:tracking-[5px] text-[8px] sm:text-[15px] font-semibold leading-3">{c.label}</p>
                            <div className="text-[15px] sm:text-4xl font-extrabold leading-none mt-2">{c.value}</div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                          <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                              <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                            </div>
                            <h2 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">{c.title}</h2>
                            <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">{c.desc}</p>
                            <button type="button" onClick={() => setOpen(!open)} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                              View Details
                              <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                              <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                                {c.bullets.map((b, bi) => (
                                  <li key={bi} className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>{b}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Peacock: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sidebar */}
              <div className="lg:w-[35%] space-y-8">

                <div className="w-full flex justify-center mb-6">
                  <a
                    href="https://www.google.com/preferences/source?q=couponsbit.us"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                  >
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Peacock?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Peacock is a streaming service from NBCUniversal that combines entertainment from across NBC, Bravo, Universal, Telemundo, and other content brands. Instead of focusing on just one type of programming, Peacock gives subscribers access to a broad mix of television, movies, live events, sports, news, kids' programming, and Peacock Originals.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The platform is particularly useful for viewers who want a mixture of current TV, movies, sports, and exclusive streaming content. Its library includes films from studios such as Universal, DreamWorks Animation, and Focus Features, along with NBC and Bravo programming and Peacock Originals.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Sports are another major part of Peacock. The service currently offers live coverage across sports such as NFL, NBA, MLB, WNBA, Premier League, NCAA football and basketball, golf, motorsports, and other major sporting events.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Peacock also supports multiple profiles and can be streamed across a wide range of smart TVs, streaming devices, computers, smartphones, tablets, and gaming consoles.

                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Tv, name: "Originals & Movies", count: "20+", color: "text-blue-500", href: "/categories/entertainment" },
                        { icon: Trophy, name: "Live Sports", count: "15+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Play, name: "Premium Plans", count: "12+", color: "text-pink-500", href: "/categories/entertainment" },
                        { icon: Gift, name: "Bundles", count: "8+", color: "text-teal-500", href: "/categories/entertainment" },
                        { icon: Search, name: "New Releases", count: "6+", color: "text-orange-500", href: "/categories/entertainment" },
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

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <h3 className="text-black font-black text-lg mb-8">
    How to Find More Peacock Savings
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Finding a promo code is only one part of comparing subscription offers. A few additional steps can help you make a more informed choice.
    </p>
    <div className="space-y-4 text-gray-500 font-medium text-sm leading-relaxed">
      <p>
        <strong className="text-black font-black block mb-1">Compare subscription plans.</strong>
        Don't choose a higher-tier plan simply because it offers more features. Consider whether you actually need downloads, fewer advertisements, sports access, or other premium features.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Check annual options.</strong>
        If you already know you'll use Peacock throughout the year, compare monthly and annual plans. Peacock currently offers annual billing options for its plans, although the available plans and terms can change.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Look for eligibility-based promotions.</strong>
        Students, young adults, and certain professional groups may have access to dedicated offers. Check whether you qualify before using a general coupon code.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Check before renewing.</strong>
        Promotions can be particularly relevant when you're deciding whether to start, renew, or change a subscription. Always review the current terms rather than assuming an older deal is still active.
      </p>
      <p>
        <strong className="text-black font-black block mb-1">Check CouponsBit before checkout.</strong>
        A quick search for a current Peacock promo code can help you see whether there is an available promotion worth using.
      </p>
    </div>
  </div>
</div>


              </div>
            </div>
          </div>
        </section>

        {/* More Stores */}
        <section className="py-20 bg-white border-t border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-2xl font-black text-black mb-10">More Stores You'll Love</h2>
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
              <LayoutGrid className="w-4 h-4" />
              View More Stores
            </Link>
          </div>
        </section>

        {/* SEO Text Section */}
        <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Peacock Promo Code, Coupon Code & Discount Offers
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tl-[22px]">Offer</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tr-[22px]">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-[#333333] font-bold text-[14px]">
      {[
        ["Military Discount Plan", "From $2.99 / Month", "Eligible Military Members", "Special discounted monthly rate upon military status verification", "Peacock Subscription"],
        ["Peacock Premium Plan", "$7.99 / Month", "All Users", "Access to movies, shows, live sports, and original entertainment", "Monthly Subscription"],
        ["Select Monthly Plan", "From $7.99 / Month", "All Users", "Select qualifying monthly plan for full streaming access", "Peacock Plans"],
        ["Premium Monthly Subscription", "$7.99 / Month", "All Users", "Standard premium streaming access; check current terms at signup", "Premium Streaming"],
        ["Peacock Premium Plus Plan", "$13.99 / Month", "All Users", "Ad-free experience with offline downloads & live channel access", "Premium Plus Plan"],
        ["Peacock Gift Cards", "From $25", "All Users", "Convenient digital or physical gift cards for streaming access", "Gift Cards"],
        ["Premium Plus Annual Plan", "From $169.99 / Year", "All Users", "Convenient long-term annual streaming with Premium Plus perks", "Annual Subscription"],
        ["Medical Pros & First Responders Offer", "$6.99 / Month", "Medical Pros & First Responders", "Special monthly rate available upon status verification", "Peacock Premium"],
        ["Peacock Premium with Walmart+", "FREE with Walmart+", "Walmart+ Members", "Included at no additional cost with eligible Walmart+ membership", "Walmart+ Perk"]
      ].map((row, i) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 8 && "border-b-0")}>
          <td className="p-5 text-[#333333] font-black align-middle max-w-[220px]">{row[0]}</td>
          <td className="p-5 text-[#056BFA] font-black align-middle">{row[1]}</td>
          <td className="p-5 text-[#333333] align-middle">{row[2]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[200px]">{row[3]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[240px]">{row[4]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Streaming has become part of everyday entertainment, but paying for multiple services every month can quickly add up. If Peacock is on your watchlist, checking for a Peacock promo code before starting or renewing your subscription can be a simple way to look for an available offer.
          </p>
          <p>
            Peacock brings together movies, TV shows, original programming, live sports, news, kids' entertainment, and always-on channels in one streaming platform. Depending on the current promotion, shoppers may find subscription offers, special discounts, or targeted promotions that can make signing up more appealing. On CouponsBit, you can check available Peacock offers before heading to the streaming service and choose the deal that fits your viewing needs.
          </p>

          <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Find a Peacock Promo Code
        </h3>
        <p>
          A Peacock promo code can be useful when you're ready to start a new subscription or take advantage of a promotional campaign. Since streaming promotions can change based on eligibility, timing, and subscription type, it's worth checking the latest available offer before completing your signup.
        </p>
        <p>
          CouponsBit makes this process easier by bringing Peacock promotions together in one place. Before choosing a plan, look through the available offers and check the terms attached to the promotion. Some deals may be designed for new subscribers, while others can be available only to specific groups or during particular promotional periods.
        </p>
        <p>
          If you already have a Peacock subscription, check whether the offer applies to existing members before attempting to redeem it.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Peacock Coupons, Deals &amp; Offers
        </h3>
        <p>
          Peacock promotions can take several forms. A traditional coupon code isn't always the only way to get a better subscription offer. Depending on the promotion running at the time, you may find special subscription pricing, targeted discounts, annual-plan promotions, or eligibility-based offers.
        </p>
        <p>
          That's why it's useful to compare the available Peacock deals rather than automatically choosing the first subscription option you see.
        </p>
        <p>
          <strong>Subscription Offers:</strong> Peacock currently offers several subscription choices, including Select, Premium, and Premium Plus. Select provides access to TV content with ads, while Premium expands the service to include movies, sports, and Peacock Originals. Premium Plus adds features such as downloads and an ad-free experience with limited exceptions. The right plan depends largely on what you actually watch. Someone interested primarily in TV programming may have different needs from a sports fan who wants live events or a household that wants downloads and fewer advertisements.
        </p>
        <p>
          <strong>Student and Young Adult Offers:</strong> Peacock also runs eligibility-based promotions from time to time. For example, its current young-adult program provides eligible people ages 18–24 with a promotional rate after verification. Eligible college and university students can also find dedicated Peacock offers, subject to the current terms and verification requirements. If you qualify for one of these programs, compare the dedicated offer with any general Peacock promo code before subscribing.
        </p>
        <p>
          <strong>Special Eligibility Offers:</strong> Peacock also has promotional programs for certain groups, including medical professionals and first responders. Eligible users can verify their status and receive a unique promotional code to redeem. Because eligibility requirements and promotional terms can change, always review the current conditions before signing up.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          What Can You Watch on Peacock?
        </h3>
        <p>
          One of Peacock's biggest advantages is the variety of content available through the platform.
        </p>
        <p>
          <strong>Movies:</strong> Movie fans can explore a large selection covering genres such as comedy, action, horror, romance, drama, family entertainment, and more. Peacock also carries movies from major Hollywood studios alongside original and exclusive content. Whether you're looking for something for movie night or want to catch up on a familiar franchise, Peacock's movie library gives subscribers plenty of options.
        </p>
        <p>
          <strong>TV Shows:</strong> Peacock brings together current NBC and Bravo programming, classic shows, Peacock Originals, and other popular television content. Its collection includes recognizable franchises and shows across comedy, drama, reality TV, crime, and other genres. For viewers who regularly watch NBC or Bravo programming, the service can also provide a convenient way to keep up with selected shows and content.
        </p>
        <p>
          <strong>Peacock Originals:</strong> Original programming is another reason subscribers may choose Peacock. Peacock Originals include shows and movies produced by or exclusively available through the platform. If you're signing up specifically for an original series or movie, checking for a Peacock coupon code or promotional subscription offer before subscribing can be worthwhile.
        </p>
        <p>
          <strong>Live Sports:</strong> Peacock has become an important option for sports viewers, with live programming covering professional and college sports as well as international competitions. Its lineup includes NFL, NBA, MLB, WNBA, Premier League, NCAA sports, golf, and motorsports, among others. For sports fans, timing can matter. A promotion found before a major sports season or event may make the subscription more attractive.
        </p>
        <p>
          <strong>Kids &amp; Family Entertainment:</strong> Peacock also offers movies and shows for children, making it suitable for households looking for family entertainment. Its library includes children's movies and series alongside parental and profile features designed for different viewers.
        </p>
        <p>
          <strong>News &amp; Spanish-Language Content:</strong> The platform isn't limited to entertainment. Peacock also features news and Spanish-language programming, including content from Telemundo.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Peacock Channels for Always-On Entertainment
        </h3>
        <p>
          If you don't want to spend time scrolling through individual titles, Peacock also offers always-on channels. These channels can make it easier to find programming based on a familiar theme or type of content.
        </p>
        <p>
          The service currently highlights channels featuring entertainment, news, sports, and other programming, giving viewers another way to discover something to watch.
        </p>
        <p>
          This can be particularly useful when you want background entertainment or simply don't know what to choose.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Peacock Promo Code for Sports Streaming
        </h3>
        <p>
          Sports can be a major reason to subscribe to Peacock, particularly during busy seasons.
        </p>
        <p>
          NFL fans can follow selected live games and football programming, while soccer viewers can watch Premier League coverage. The platform also carries NBA, MLB, WNBA, college sports, golf, motorsports, and other live events.
        </p>
        <p>
          During major sporting periods, it's worth checking CouponsBit for a current Peacock promo code before purchasing a subscription. Promotions may change around major events, seasons, or targeted campaigns, so checking shortly before signing up is the safest approach.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          Seasonal Peacock Deals
        </h3>
        <p>
          Streaming services often introduce special promotions around major shopping periods, and Peacock can also run promotional campaigns throughout the year.
        </p>
        <p>
          Keep an eye out for potential offers around:
        </p>
        <p>New Year entertainment</p>
        <p>Valentine's Day</p>
        <p>Spring streaming campaigns</p>
        <p>Summer entertainment</p>
        <p>Back-to-school season</p>
        <p>Halloween</p>
        <p>Thanksgiving</p>
        <p>Black Friday</p>
        <p>Cyber Monday</p>
        <p>Christmas and holiday gifting</p>
        <p>
          Not every promotion will run every year, and eligibility can vary. The best approach is to check CouponsBit when you're ready to subscribe rather than relying on an old offer.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-[#056bfa] mb-4">
          How to Use a Peacock Promo Code
        </h3>
        <p>
          Redeeming a promotional offer is generally straightforward, although the exact process can depend on the promotion.
        </p>
        <p>
          1. Find a current Peacock promo code on CouponsBit.
        </p>
        <p>
          2. Read the offer details and eligibility requirements.
        </p>
        <p>
          3. Visit Peacock and select the appropriate subscription or promotional offer.
        </p>
        <p>
          4. Create an account or sign in if the promotion allows existing subscribers to participate.
        </p>
        <p>
          5. Enter the promotional code when prompted.
        </p>
        <p>
          6. Add a valid payment method if required.
        </p>
        <p>
          7. Complete the signup process and confirm that the promotional offer has been applied.
        </p>
        <p>
          Peacock states that a valid payment method is required to redeem a promotional code, even when the promotion provides a special introductory period or price.
        </p>
        <p>
          You can also check your Peacock account after redemption. Peacock says a successfully applied promotional code will appear under the current promotional offer in the Your Plan section.
        </p>
      </div>
    </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use CouponsBit for Peacock Deals?</h3>
              <p>CouponsBit gives shoppers a convenient place to look for available promotional opportunities before heading to a merchant or subscription service.</p>
              <p>Instead of searching across multiple websites for a Peacock discount code, you can start with the offers available on CouponsBit and review the relevant details before subscribing.</p>
              <p>The goal isn't simply to find a code. It's to help you understand what type of offer is available, whether it matches your purchase or subscription, and what restrictions may apply.</p>
              <p>That extra check can be useful when you're subscribing during a major entertainment season, looking for sports coverage, or simply trying to avoid paying the standard rate when a valid promotion is available.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Start Streaming With a Peacock Promo Code</h3>
              <p>Whether you're interested in Peacock Originals, blockbuster movies, NBC and Bravo shows, live sports, kids' entertainment, or always-on channels, Peacock offers plenty of ways to fill your watchlist.</p>
              <p>Before starting your subscription, take a moment to check CouponsBit for a current Peacock promo code. Compare the available promotion with Peacock's current plans and eligibility offers, review the terms, and then choose the subscription that matches the way you watch.</p>
              <p>With new shows, movies, sports seasons, and promotional campaigns arriving throughout the year, checking for an updated offer before you subscribe can become a useful part of your streaming routine.</p>
            </div>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline cursor-pointer"
        >
          {isReadMore ? "Read Less" : "Read More"}
          <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isReadMore && "rotate-180")} />
        </button>

        {/* Accordion FAQ Section */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Peacock Promo Code FAQs
          </h3>
          {[
            { q: "Does Peacock have promo codes?", a: "Yes. Peacock offers promotional codes through various campaigns and eligibility-based programs. Availability, eligibility, and terms can vary, so check for a current offer before subscribing." },
            { q: "Where can I find a Peacock promo code?", a: "You can check CouponsBit for available Peacock promotions before visiting Peacock to complete your subscription." },
            { q: "Can existing Peacock subscribers use a promo code?", a: "It depends on the specific promotion. Some offers are restricted to new subscribers, while certain targeted promotions may be available to existing members. Always check the terms of the individual offer." },
            { q: "Does Peacock offer student discounts?", a: "Peacock offers special pricing for eligible students, subject to its current eligibility requirements and promotional terms." },
            { q: "Does Peacock offer young adult discounts?", a: "Yes. Peacock currently has a young-adult offer for eligible people ages 18–24, with verification required." },
            { q: "Can I use a Peacock promo code without a payment method?", a: "Peacock states that a valid payment method is required to redeem a promotional code." },
            { q: "How do I know if my Peacock promo code worked?", a: "After applying the promotion, you can check your Peacock account. Peacock says a successfully applied promotional offer will appear under Your Plan." },
            { q: "Does Peacock offer sports?", a: "Yes. Peacock offers live sports programming including NFL, NBA, MLB, WNBA, Premier League, NCAA sports, golf, motorsports, and other events." },
            { q: "Can I give Peacock as a gift?", a: "Yes. Peacock offers digital gift cards that can be sent through email or text, and both new and existing subscribers can redeem them toward a Peacock plan." }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors cursor-pointer"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all duration-300", openFaq === i && "bg-[#056bfa]")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500 transition-transform duration-300", openFaq === i && "text-white rotate-180")} />
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
            Popular Peacock Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Peacock Promo Code",
              "Student Discount $1.99/mo",
              "Annual Subscription Savings",
              "Premier League Live Stream",
              "Young Adult Offer",
              "Peacock Premium Plus",
              "NBC & Bravo Shows",
              "Digital Gift Cards"
            ].map((tag) => (
              <span key={tag} className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white cursor-pointer hover:bg-[#056bfa] hover:text-white transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar Deals */}
        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Today's Top Peacock Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "MILITARY DISCOUNT", sub: "Plans From $2.99/Month" },
              { heading: "PREMIUM PLAN", sub: "From $7.99/Month" },
              { heading: "PREMIUM PLUS", sub: "Just $13.99/Month" },
              { heading: "GIFT CARDS", sub: "Starting From $25" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  {i + 1}
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
                  href="https://www.peacocktv.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`Shop Peacock: ${deal.heading}`}
                  className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90 flex-shrink-0"
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
