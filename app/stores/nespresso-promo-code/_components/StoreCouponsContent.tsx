"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Star, Tag, Percent, Users, BadgeCheck, ExternalLink,
  ShieldCheck, PiggyBank, RefreshCw, ChevronDown, CheckCircle, LayoutGrid,
  Coffee, Package, Gift, Recycle, Search,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { OFFERS } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Starbucks", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/starbucks-logo_loaadj.webp", dealText: "Up To 30% OFF", href: "/stores/starbucks-promo-code" },
  { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
  { name: "Harry and David", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793688836/harryand-david-logo_psaq9y.webp", dealText: "Up To 30% OFF", href: "/stores/harry-and-david-promo-code" },
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/walmart-logo_dpz4ux.webp", dealText: "Up To 50% OFF", href: "/stores/walmart-promo-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/target-logo_ereq8r.webp", dealText: "Up To 40% OFF", href: "/stores/target-promo-code" },
  { name: "Vuori", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1793688836/vuori_euoigj.webp", dealText: "20% OFF First Order", href: "/stores/vuori-discount-code" },
];

const STORE_URL = "https://www.nespresso.com";

export default function NespressoCouponsContent() {
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      <Navbar />

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
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">Nespresso</span>
            </nav>
          </div>
        </div>

        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1793688836/nespresso-logo_evanwx.webp" alt="Nespresso" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Nespresso Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.8</span>
                      <span className="text-gray-600 font-bold text-sm">(9.2k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more with the latest Nespresso Discount Code and Nespresso Promo Code for November 2026. Enjoy 20% OFF on selected CitiZ and Aeroccino coffee machine bundles or get a FREE Essenza Mini when you purchase eligible Original Line coffee sleeves. You can also save up to 18% OFF on Essenza Mini bundles, 10% OFF selected coffee machines and accessories, and enjoy exclusive bundle deals on Pixie, Lattissima, and office coffee solutions. Browse verified Nespresso offers and brew premium coffee for less.
                    </p>
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors">
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "7", label: "Offers" },
                    { icon: Percent, val: "30+", label: "Deals" },
                    { icon: Users, val: "1.2M+", label: "Shoppers" },
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
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg">
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                    <div className="w-full h-full bg-gradient-to-br from-[#c8102e] via-[#a00d24] to-[#6b0617] flex items-center justify-center">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1793688836/nespresso-logo_evanwx.webp" alt="Nespresso Promo Code" width={280} height={120} className="max-h-32 w-auto object-contain filter brightness-0 invert" fetchPriority="high" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <section className="py-6 md:py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="top-offers lg:w-[65%]">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-black leading-tight">Nespresso Promo Codes & Offers</h2>
                </div>
                {OFFERS.map((c, i) => (
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
                              View Details <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Nespresso: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:w-[35%] space-y-8">
                <div className="w-full flex justify-center mb-6">
                  <a href="https://www.google.com/preferences/source?q=couponsbit.us" target="_blank" rel="nofollow noopener noreferrer" className="inline-block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg">
                    <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1788251342/google_preferred_source_badge_light_en_j9wixw.png" alt="Add as a preferred source on Google" width={280} height={70} className="w-full max-w-[260px] h-auto object-contain" priority />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">What Is Nespresso?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Nespresso is a coffee brand known for its capsule-based coffee machines and individually portioned coffee capsules. It offers a convenient way to prepare coffee at home or in the office without measuring and grinding coffee beans for every cup.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand's US collection includes coffee machines, espresso and coffee capsules, milk frothers, travel mugs, and other coffee accessories. Its two main machine systems are Original and Vertuo, each designed around a different brewing experience.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Nespresso also offers coffee subscriptions and services such as AutoReplenish, which helps customers receive their preferred capsules regularly. 

                  </p>
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                  <div className="space-y-1">
                    {[
                      { icon: Coffee, name: "Coffee Machines", count: "20+", color: "text-red-700", href: "/categories/more" },
                      { icon: Package, name: "Coffee Capsules", count: "30+", color: "text-blue-500", href: "/categories/more" },
                      { icon: Gift, name: "Gift Sets", count: "10+", color: "text-green-500", href: "/categories/more" },
                      { icon: Recycle, name: "Refurbished", count: "8+", color: "text-teal-500", href: "/categories/more" },
                      { icon: Search, name: "Accessories", count: "15+", color: "text-orange-500", href: "/categories/more" },
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
    What Can You Shop for at Nespresso?
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Nespresso offers more than coffee machines. You can explore different products to build a coffee setup that matches your preferences.
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>1. Nespresso Coffee Machines:</strong> Choose from machines designed for different brewing styles and kitchen spaces.</span>
      </p>
      <div className="pl-6 space-y-2">
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span><strong>Original machines:</strong> Designed for espresso and lungo-style coffee, with options for people who enjoy traditional espresso-based drinks.</span>
        </p>
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span><strong>Vertuo machines:</strong> Use barcode-equipped capsules to adjust brewing parameters and prepare different cup sizes.</span>
        </p>
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span><strong>Compact machines:</strong> Explore smaller designs that fit conveniently into limited kitchen spaces.</span>
        </p>
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span><strong>Milk-based coffee setups:</strong> Pair compatible machines with milk frothers to prepare cappuccinos, lattes, and other milk-based drinks.</span>
        </p>
      </div>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>2. Original Coffee Capsules:</strong> The Original range offers espresso and lungo blends in different intensities and flavour profiles. You can explore lighter, balanced, and stronger coffee options depending on your taste.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>3. Vertuo Coffee Capsules:</strong> Vertuo capsules come in different blends and cup sizes, allowing you to prepare espresso, double espresso, gran lungo, and larger cups of coffee with compatible machines.</span>
      </p>
      <p className="text-gray-500 font-medium text-sm leading-relaxed pl-6">
        Remember: Original and Vertuo capsules are designed for their respective systems and are not interchangeable. Check your machine's compatibility before ordering.
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>4. Coffee Accessories:</strong> Complete your coffee corner with accessories such as milk frothers, capsule dispensers, mugs, travel cups, and other coffee essentials.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>5. Coffee Subscriptions:</strong> Nespresso's AutoReplenish service lets customers schedule recurring coffee orders. Eligible subscriptions may include additional savings and promotional benefits, subject to the current terms.</span>
      </p>
    </div>
  </div>
</div>
              </div>
            </div>
          </div>
        </section>

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
              <LayoutGrid className="w-4 h-4" /> View More Stores
            </Link>
          </div>
        </section>

        <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Nespresso Promo Code: Save on Coffee Machines, Pods & Accessories
        </h2>

        <div className="my-12 overflow-x-auto rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
  <table className="w-full text-left border-collapse min-w-[850px]">
    <thead>
      <tr className="bg-[#056BFA]">
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tl-[22px]">Offer</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Discount / Price</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Eligibility</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider">Key Conditions</th>
        <th scope="col" className="p-5 text-[15px] font-black text-white uppercase tracking-wider rounded-tr-[22px]">Applicable On</th>
      </tr>
    </thead>
    <tbody className="text-[#333333] font-bold text-[14px]">
      {[
        [
          "Nespresso 5-Sleeve Original Line Bundle",
          "₹4,490",
          "All Users",
          "Special bundle pricing when purchasing any 5 Original Line coffee sleeves.",
          "5 Original Line Sleeves"
        ],
        [
          "Nespresso 10 or 20 Sleeve Bulk Discount",
          "From ₹7,990",
          "All Users",
          "Get 10 Original Line sleeves for ₹7,990 or 20 Original Line sleeves for ₹15,490.",
          "10 or 20 Original Line Sleeves"
        ],
        [
          "Nespresso Diwali Free Essenza Mini Offer",
          "Free Machine",
          "All Users",
          "Receive a free Essenza Mini coffee machine when purchasing 40 Original Line sleeves.",
          "40 Original Line Sleeves Purchase"
        ],
        [
          "Nespresso CitiZ + Aeroccino Machine Bundle",
          "20% OFF (₹34,999)",
          "All Users",
          "Includes CitiZ machine, Aeroccino milk frother, and 5 Original Line coffee sleeves.",
          "CitiZ with Aeroccino Bundle"
        ],
        [
          "Nespresso CitiZ Machine & Sleeves Bundle",
          "₹26,999",
          "All Users",
          "Bundle includes compact CitiZ coffee machine with any 5 Original Line sleeves.",
          "CitiZ Machine + 5 Sleeves"
        ],
        [
          "Nespresso CitiZ Machine Discount",
          "10% OFF",
          "All Users",
          "Save 10% on the CitiZ machine when purchased alongside 1 Original Line sleeve.",
          "CitiZ Coffee Machine"
        ],
        [
          "Nespresso New Pixie Machine Intro Deal",
          "10% OFF",
          "All Users",
          "Introductory promotional offer on the new compact Pixie machine in the Original range.",
          "New Pixie Machine"
        ],
        [
          "Nespresso Lattissima Milk Coffee Bundle",
          "From ₹36,999",
          "All Users",
          "Bundle deal featuring the Lattissima machine paired with any 5 Original Line sleeves.",
          "Lattissima Bundle + 5 Sleeves"
        ],
        [
          "Nespresso Lattissima Machine Discount",
          "10% OFF",
          "All Users",
          "Get 10% off the Lattissima milk coffee machine when buying 1 Original Line sleeve.",
          "Lattissima Coffee Machine"
        ],
        [
          "Nespresso Coffee Accessories Offer",
          "10% OFF",
          "All Users",
          "Discount on cups, travel mugs, and essentials. Excludes Aeroccino 3 and Descaling Kit.",
          "Selected Coffee Accessories"
        ],
        [
          "Nespresso Essenza Mini Full Bundle",
          "18% OFF (₹28,499)",
          "All Users",
          "Includes Essenza Mini machine, Aeroccino milk frother, and 4 Original Line sleeves.",
          "Essenza Mini + Aeroccino Bundle"
        ],
        [
          "Nespresso Essenza Mini Machine Deal",
          "10% OFF",
          "All Users",
          "Save 10% on the compact Essenza Mini machine when buying 1 Original Line sleeve.",
          "Essenza Mini Machine"
        ],
        [
          "Nespresso Professional Office Setup",
          "₹49,999",
          "All Users / Businesses",
          "Includes Zenius Professional Machine, Aeroccino, and 4 Professional Coffee Boxes.",
          "Zenius Office Solution"
        ],
        [
          "Nespresso Coffee Essentials Savings",
          "10% OFF",
          "Qualifying Bank Cardholders",
          "Save 10% on selected coffee accessories, cups, travel mugs, and daily essentials.",
          "Selected Coffee Essentials"
        ],
        [
          "Nespresso Festive Gift Voucher Deal",
          "Free Machine",
          "All Users",
          "Receive a complimentary Essenza Mini machine with qualifying coffee sleeve purchases.",
          "Eligible Coffee Orders"
        ],
        [
          "Nespresso CitiZ Coffee Bundle Voucher",
          "20% OFF",
          "All Users",
          "20% promotional discount on the CitiZ with Aeroccino bundle plus 5 coffee sleeves.",
          "CitiZ Aeroccino Bundle"
        ]
      ].map((row, i, arr) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === arr.length - 1 && "border-b-0")}>
          <td className="p-5 text-[#333333] font-black align-middle max-w-[220px]">{row[0]}</td>
          <td className="p-5 text-[#056BFA] font-black align-middle">{row[1]}</td>
          <td className="p-5 text-[#333333] align-middle">{row[2]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[240px]">{row[3]}</td>
          <td className="p-5 text-[#333333] align-middle max-w-[200px]">{row[4]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Love the taste of café-style coffee at home? Nespresso makes it easy to prepare espresso, lungo, cappuccino, and other coffee favourites with its machines and range of coffee capsules. If you're planning to upgrade your coffee setup or restock your favourite blends, check CouponsBit for a Nespresso promo code before placing your order.
          </p>
          <p>
            From compact espresso machines to versatile coffee makers, capsules, and accessories, explore Nespresso's collection and look for available offers that make your next coffee purchase more rewarding.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Find a Nespresso Promo Code on CouponsBit
          </h3>
          <p>
            Before buying a machine or ordering coffee capsules, visit CouponsBit to check available Nespresso discounts.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Open CouponsBit and visit the Nespresso store page.</li>
            <li>Browse the available promo codes and offers.</li>
            <li>Select an offer that matches the products you want to purchase.</li>
            <li>Read its conditions, including eligibility, minimum order value, and expiry date.</li>
            <li>Copy the promo code if the offer requires one.</li>
            <li>Visit Nespresso's US website and add your chosen products to the cart.</li>
            <li>Continue to checkout and enter the code in the promotional code field.</li>
            <li>Apply the code and check that the discount appears in your order summary.</li>
          </ol>
          <p>
            Some Nespresso offers apply automatically or require a specific sign-up or subscription process. Follow the offer instructions rather than assuming every discount uses a checkout code.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Apply a Nespresso Promo Code
          </h3>
          <p>
            Using an eligible Nespresso promo code is straightforward:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Visit the Nespresso website and sign in or create an account if required.</li>
            <li>Browse coffee machines, capsules, or accessories.</li>
            <li>Add your selected products to the shopping cart.</li>
            <li>Proceed to checkout.</li>
            <li>Find the promo code or promotional offer field.</li>
            <li>Enter your copied code and apply it.</li>
            <li>Review the updated total before completing payment.</li>
          </ol>
          <p>
            If the discount does not appear, check the offer's expiry date, eligible products, minimum purchase requirements, and restrictions on combining promotions.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Ways to Save More at Nespresso
          </h3>
          <p>
            A promo code can help reduce your shopping total, but there are other ways to explore Nespresso offers.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Check new-customer offers:</strong> Nespresso's US welcome page currently advertises a $10 coffee discount code supplied with a new machine, along with other welcome offers. Check the latest eligibility requirements before ordering.</li>
            <li><strong>Explore machine promotions:</strong> Check the official offers page for discounts on selected Original and Vertuo machines. Offers and eligible models can change.</li>
            <li><strong>Consider AutoReplenish:</strong> Nespresso currently advertises 10% off eligible AutoReplenish orders over $75. Review the subscription conditions before signing up.</li>
            <li><strong>Look for coffee bundles and gifts:</strong> Some promotions reward qualifying capsule purchases with complimentary sleeves or accessories. Check the current offer terms and minimum quantities.</li>
            <li><strong>Use referral rewards:</strong> Eligible existing customers can access referral rewards through their Nespresso accounts. The program has specific purchase and redemption conditions.</li>
            <li><strong>Check shipping benefits:</strong> Registered US customers can qualify for free standard shipping on orders of $50 or more, excluding tax, under Nespresso's published shipping terms.</li>
          </ul>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Original vs. Vertuo: Which Nespresso System Should You Choose?
          </h3>
          <p>
            Not sure which machine system suits you? Here's a simple comparison.
          </p>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden border border-[#f0f0f0] shadow-sm">
              <thead>
                <tr className="bg-[#e8f6f8] text-[#056bfa] font-black text-sm uppercase tracking-widest border-b border-[#f0f0f0]">
                  <th className="p-4">Feature</th>
                  <th className="p-4">Original</th>
                  <th className="p-4">Vertuo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f0f0] text-gray-600 font-bold text-sm">
                <tr>
                  <td className="p-4 text-black">Coffee style</td>
                  <td className="p-4">Espresso and lungo</td>
                  <td className="p-4">Multiple cup sizes</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Brewing system</td>
                  <td className="p-4">Pressure-based extraction</td>
                  <td className="p-4">Centrifusion technology</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Capsule design</td>
                  <td className="p-4">Original capsules</td>
                  <td className="p-4">Vertuo capsules</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Best suited for</td>
                  <td className="p-4">Espresso-focused coffee drinkers</td>
                  <td className="p-4">People who enjoy different coffee sizes</td>
                </tr>
                <tr>
                  <td className="p-4 text-black">Compatibility</td>
                  <td className="p-4">Original machines only</td>
                  <td className="p-4">Vertuo machines only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Your choice depends on the kind of coffee you enjoy and the cup sizes you prefer. Check capsule compatibility before buying a machine or placing a coffee order.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Enjoy Better Coffee and Save with CouponsBit
          </h3>
          <p>
            Whether you're buying your first Nespresso machine, exploring new coffee blends, or restocking your favourite capsules, there's plenty to discover in the Nespresso collection.
          </p>
          <p>
            Before placing your order, visit CouponsBit to explore the latest Nespresso promo codes, coffee machine deals, capsule discounts, and special offers. Compare available promotions, check their terms, and apply an eligible discount to make your next coffee purchase more rewarding.
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
            Frequently Asked Questions About Nespresso Promo Codes
          </h3>
          {[
            {
              q: "1. Where can I find a Nespresso promo code?",
              a: "Visit the Nespresso store page on CouponsBit to check available promo codes, machine discounts, and coffee offers. Read the conditions to confirm that your order qualifies."
            },
            {
              q: "2. Are Nespresso Original and Vertuo capsules interchangeable?",
              a: "No. Original and Vertuo capsules are designed for different machine systems. Always select capsules that match your Nespresso machine."
            },
            {
              q: "3. Does Nespresso offer discounts for new customers?",
              a: "Yes. Nespresso's US welcome page advertises introductory offers for new customers, including a coffee discount code supplied with a new machine. Offers and eligibility conditions may change."
            },
            {
              q: "4. Does Nespresso offer free shipping?",
              a: "Nespresso's US shipping terms provide free standard shipping to registered customers on qualifying orders of $50 or more, excluding tax. Different conditions may apply to guest orders and non-continental US locations."
            },
            {
              q: "5. What is Nespresso AutoReplenish?",
              a: "AutoReplenish is Nespresso's recurring coffee delivery service. Customers can schedule orders of their preferred capsules, and eligible orders may receive promotional benefits. Check the current terms before subscribing."
            },
            {
              q: "6. Can I combine two Nespresso promo codes?",
              a: "It depends on the specific promotion. Nespresso's terms generally restrict combining offers, although certain referral rewards may be combined with one additional promo code when both sets of conditions are met."
            },
            {
              q: "7. Can I return a Nespresso machine?",
              a: "Machines purchased directly from Nespresso can generally be returned within 30 days of receipt, subject to the return conditions. Products purchased from another retailer must be returned to that retailer. Check the current policy before sending an item back."
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
            Popular Nespresso Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Nespresso Promo Code",
              "Vertuo Machine Deals",
              "Original Capsules Sale",
              "Coffee Pod Discounts",
              "AutoReplenish Savings",
              "New Customer Offer",
              "Free Shipping over $50",
              "Espresso Accessories"
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
            Today's Top Nespresso Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "WELCOME OFFER",
                sub: "$10 coffee discount code with a new machine",
              },
              {
                heading: "AUTOREPLENISH",
                sub: "10% off eligible recurring orders over $75",
              },
              {
                heading: "FREE SHIPPING",
                sub: "Free standard delivery on US orders over $50",
              },
              {
                heading: "MACHINE BUNDLES",
                sub: "Save up to $50 on machine & Aeroccino bundles",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  N
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
                  aria-label={`Shop Nespresso: ${deal.heading}`}
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
