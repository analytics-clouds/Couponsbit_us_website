"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight, Star, Tag, Percent, Users, BadgeCheck, ExternalLink,
  ShieldCheck, PiggyBank, RefreshCw, ChevronDown, CheckCircle, LayoutGrid,
  Footprints, Shirt, Package, Truck, Search,
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
  { name: "Birkenstock", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1792648468/birkenstork_logo_nin4ru.webp", dealText: "Up To 50% OFF", href: "/stores/birkenstock-promo-code" },
  { name: "Nike", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/nike-logo_loaadj.webp", dealText: "Up To 60% OFF", href: "/stores/nike-discount-code" },
  { name: "Adidas", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788783181/adidas-logo_brulmo.webp", dealText: "Up To 50% OFF", href: "/stores/adidas-promo-code" },
  { name: "Converse", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/converse-logo_dpz4ux.webp", dealText: "Up To 50% OFF", href: "/stores/converse-promo-code" },
  { name: "Abercrombie", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787571687/abercombie-fetch_ereq8r.webp", dealText: "Up To 50% OFF", href: "/stores/abercrombie-discount-code" },
  { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
];

const STORE_URL = "https://www.ariat.com";

export default function AriatCouponsContent() {
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
              <span className="text-black font-extrabold">Ariat</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1793614080/Ariat-Logo_fsk8nx.webp" alt="Ariat" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Ariat Promo Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.7</span>
                      <span className="text-gray-600 font-bold text-sm">(6.8k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find the latest Ariat promo code and Ariat discount code to save on western boots, workwear, apparel, jeans, and accessories. Enjoy an extra 25% OFF your cart, 20% OFF sale styles, 20% OFF military savings, and 10% OFF your first purchase with verified November 2026 offers. Shop genuine Ariat deals on cowboy boots, work boots, clothing, and outdoor essentials while maximizing your savings with the latest online promotions.
                    </p>
                    <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors">
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "7", label: "Offers" },
                    { icon: Percent, val: "50+", label: "Deals" },
                    { icon: Users, val: "900K+", label: "Shoppers" },
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
                    <div className="w-full h-full bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#6B3410] flex items-center justify-center">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1793614080/Ariat-Logo_fsk8nx.webp" alt="Ariat Promo Code" width={280} height={120} className="max-h-32 w-auto object-contain filter brightness-0 invert" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Ariat Promo Codes & Offers</h2>
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Ariat: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Ariat?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Ariat is an American footwear and apparel brand known for combining Western-inspired designs with performance-focused features. The brand serves equestrian athletes, ranchers, workers, and customers who want functional footwear and clothing.

                  </p>

                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Its collection includes cowboy boots, riding boots, work boots, casual shoes, jeans, shirts, jackets, and accessories. Ariat is particularly recognised for incorporating footwear technologies designed to support comfort, stability, and performance during demanding activities.
                  </p>

                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    From the ranch to the workplace and everyday outings, the brand offers products for men, women, and children.

                  </p>
                 
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                  <div className="space-y-1">
                    {[
                      { icon: Footprints, name: "Western Boots", count: "20+", color: "text-amber-700", href: "/categories/fashion" },
                      { icon: Package, name: "Work Boots", count: "15+", color: "text-blue-500", href: "/categories/fashion" },
                      { icon: Shirt, name: "Apparel", count: "25+", color: "text-green-500", href: "/categories/fashion" },
                      { icon: Truck, name: "Free Shipping", count: "10+", color: "text-teal-500", href: "/categories/fashion" },
                      { icon: Search, name: "New Arrivals", count: "8+", color: "text-orange-500", href: "/categories/fashion" },
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
    What Can You Shop for at Ariat?
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Ariat offers footwear, clothing, and accessories for different needs. Here are some of the main categories to explore.
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>1. Western Boots:</strong> Explore Ariat's Western boot collection, featuring traditional cowboy-inspired designs, different toe shapes, shaft heights, and materials. These boots are available in styles for everyday wear, ranch activities, and Western fashion.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>2. Work Boots:</strong> Ariat work boots are designed for people who need dependable footwear on the job. Depending on the style, you can find features such as waterproof construction, protective toe options, slip-resistant outsoles, and cushioning technologies.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>3. Riding and Equestrian Boots:</strong> The brand offers riding footwear for equestrian activities, including paddock boots, tall riding boots, and other performance-oriented styles. Explore the product specifications to find a suitable option for your riding discipline.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>4. Clothing and Apparel:</strong> Ariat's apparel collection includes:</span>
      </p>
      <div className="pl-6 space-y-2">
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span><strong>Jeans and denim:</strong> Everyday denim in different fits and washes.</span>
        </p>
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span><strong>Shirts:</strong> Western shirts, polos, casual shirts, and performance styles.</span>
        </p>
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span><strong>Jackets and vests:</strong> Outerwear for changing weather and outdoor activities.</span>
        </p>
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span><strong>Workwear:</strong> Clothing designed for demanding work environments.</span>
        </p>
        <p className="flex items-start gap-2">
          <span className="text-black font-black">-</span>
          <span><strong>Activewear:</strong> Selected performance-focused clothing for movement and outdoor use.</span>
        </p>
      </div>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>5. Casual Shoes and Sneakers:</strong> Beyond boots, Ariat offers casual shoes and sneakers for everyday use. These styles combine practical comfort features with designs suited to relaxed outfits.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>6. Accessories:</strong> Complete your look with belts, hats, caps, socks, and other accessories. You can also explore selected bags and footwear-care products.</span>
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
          Ariat Promo Code: Save on Western Boots, Workwear & Apparel
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
          "Ariat Full-Price Style Discount",
          "10% OFF",
          "All Users",
          "Valid on eligible regular-priced boots, apparel, and western accessories for a limited time.",
          "Eligible Full-Price Purchases"
        ],
        [
          "Ariat Select Orders Discount",
          "10% OFF",
          "All Users",
          "Short-term online offer on chosen boots, clothing, and accessory favorites.",
          "Select Orders & Products"
        ],
        [
          "Ariat Free Rush Shipping Deal",
          "Free Rush Shipping",
          "All Users",
          "Complimentary rush shipping speed applied automatically to qualifying orders over $250.",
          "Orders $250+"
        ],
        [
          "Ariat First Purchase Welcome Offer",
          "10% OFF",
          "New Customers",
          "Requires member registration on first eligible order covering boots, workwear, and western apparel.",
          "First Qualifying Order"
        ],
        [
          "Ariat General Purchase Savings",
          "10% OFF",
          "All Users",
          "Promotional savings applied across a wide range of qualifying footwear and clothing collections.",
          "Qualifying Purchases"
        ],
        [
          "Ariat Western & Boot Refresh Deal",
          "15% OFF",
          "All Users",
          "Limited-time percentage discount across eligible western boots, clothing, and closet staples.",
          "Eligible Orders"
        ],
        [
          "Ariat Extra Savings Promotional Deal",
          "Extra 20% OFF",
          "All Users",
          "Additional discount applied to selected boots, jeans, jackets, and accessories during the promo period.",
          "Eligible Items"
        ],
        [
          "Ariat Sale Styles Extra Discount",
          "20% OFF",
          "All Users",
          "Extra 20% off marked-down seasonal footwear, boots, and activewear styles.",
          "Selected Sale Items"
        ],
        [
          "Ariat Clearance Collection Savings",
          "Extra 20% OFF",
          "All Users",
          "Additional savings on selected clearance boots, clothing, and gear while stock lasts.",
          "Select Clearance Styles"
        ],
        [
          "Ariat Sitewide Savings Offer",
          "10% OFF",
          "All Users",
          "Online discount valid sitewide on workwear, western boots, and daily apparel.",
          "Qualifying Sitewide Orders"
        ],
        [
          "Ariat Seasonal Closet Refresh",
          "20% OFF",
          "All Users",
          "Short-term order savings across boots, outdoor apparel, and functional accessories.",
          "Eligible Ariat Purchases"
        ],
        [
          "Ariat Daily Basics Discount",
          "10% OFF",
          "All Users",
          "Save 10% on chosen essential footwear, workwear clothing, and daily accessories.",
          "Qualifying Select Items"
        ],
        [
          "Ariat Tiered Spend & Save Offer",
          "Up to $100 OFF",
          "Qualifying Bank Cardholders",
          "Save $15 on $150+, $35 on $250+, or $100 on $500+ spend thresholds at checkout.",
          "Tiered Spending Orders"
        ],
        [
          "Ariat Direct Order Savings",
          "$10 OFF",
          "Qualifying Bank Cardholders",
          "Instant $10 price reduction applied directly to eligible boot and apparel totals.",
          "Qualifying Purchases"
        ],
        [
          "Ariat Cart Extra Savings Event",
          "Extra 25% OFF",
          "All Users",
          "Major limited-time sale event extra discount on western and workwear collections.",
          "Eligible Cart Items"
        ],
        [
          "Ariat Clearance Sale Event",
          "From $9",
          "All Users",
          "New markdowns starting as low as $9 across footwear, clothing, and accessories.",
          "Ariat Sale Collection"
        ],
        [
          "Ariat Insider Shopping Perks",
          "Free Shipping & Free Returns",
          "Ariat Insiders",
          "Exclusive member perks featuring free standard shipping and hassle-free returns.",
          "Ariat Insider Purchases"
        ],
        [
          "Ariat Express Delivery Offer",
          "Free Express Shipping",
          "All Users",
          "Free express international shipping speed applied to qualifying orders over £200.",
          "Orders £200+"
        ],
        [
          "Ariat Military & Family Discount",
          "20% OFF",
          "Verified Military Members",
          "Exclusive verification-based 20% savings for military personnel, veterans, and immediate families.",
          "Qualifying Military Orders"
        ],
        [
          "Ariat Welcome Subscriber Deal",
          "10% OFF",
          "New Customers",
          "Welcome discount code sent upon signup for first-time workwear and western collection orders.",
          "First Purchase"
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
            Looking for durable boots, comfortable workwear, or classic Western clothing? Ariat brings performance and style together with footwear and apparel designed for work, riding, and everyday wear. Before shopping, check CouponsBit for an Ariat promo code and explore available offers on your favourite styles.
          </p>
          <p>
            Whether you need riding boots, sturdy work shoes, denim, or outdoor clothing, Ariat has options for different activities and lifestyles. Browse the collection and look for a suitable discount before completing your order.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Find an Ariat Promo Code on CouponsBit
          </h3>
          <p>
            Before ordering from Ariat, visit CouponsBit to check the latest available promotions.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Open CouponsBit and visit the Ariat store page.</li>
            <li>Browse the listed promo codes and available discounts.</li>
            <li>Select an offer that matches your shopping requirements.</li>
            <li>Check the terms, including product exclusions and eligibility.</li>
            <li>Copy the promo code if the offer requires one.</li>
            <li>Visit Ariat's US website and add your preferred products to the shopping bag.</li>
            <li>Continue to the My Bag page and find the promo code box below the order summary.</li>
            <li>Enter your code, select Apply, and check the updated total before checkout.</li>
          </ol>
          <p>
            Ariat allows only one promo code per order, and its welcome offer cannot be combined with other promotions.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Save More at Ariat
          </h3>
          <p>
            A promo code is one way to reduce your shopping total. You can also explore these options before placing an order.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Sign up for email updates:</strong> Ariat offers new email subscribers 10% off their first order. The offer is for new subscribers, excludes clearance products, and applies to US orders.</li>
            <li><strong>Shop the sale section:</strong> Check Ariat's official sale collection for discounts on selected footwear, clothing, and accessories.</li>
            <li><strong>Explore military discounts:</strong> Eligible US military personnel and veterans can receive 10% off after verification through SheerID.</li>
            <li><strong>Join Ariat Insider:</strong> Members receive benefits that include free shipping and free returns on eligible domestic orders, without a minimum purchase requirement.</li>
            <li><strong>Watch for seasonal promotions:</strong> Ariat announces selected product discounts and special offers through its website, email updates, and social channels.</li>
          </ul>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Ariat Insider: Benefits Worth Exploring
          </h3>
          <p>
            Ariat Insider is the brand's membership programme for customers who shop directly through Ariat.com. Membership provides benefits designed to make online shopping more convenient.
          </p>
          <p>
            According to Ariat's official website, Insider benefits include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Free shipping on eligible domestic orders.</li>
            <li>Free returns.</li>
            <li>Access to member benefits and selected offers.</li>
          </ul>
          <p>
            Ariat states that Insider members receive free shipping and free returns on all orders without a minimum purchase requirement. Check the programme terms for current eligibility and details.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Things to Know Before Ordering from Ariat
          </h3>
          <p>
            Before buying boots or clothing, review a few details to make a more informed purchase.
          </p>
          <p>
            <strong>Check the size guide:</strong> Footwear fit can vary by style. Review the product's sizing information and measurements before choosing your size.
          </p>
          <p>
            <strong>Compare product features:</strong> Work boots, riding boots, and casual footwear serve different purposes. Check the product description for features such as waterproofing, toe protection, sole construction, and intended use.
          </p>
          <p>
            <strong>Review shipping eligibility:</strong> Ariat's US website ships to all 50 states and APO/FPO addresses, but does not ship directly to US territories or internationally through its standard domestic service.
          </p>
          <p>
            <strong>Understand the return policy:</strong> Ariat.com offers free returns within 90 days of purchase for US orders, subject to its return conditions.
          </p>
          <p>
            <strong>Buy from authorised sellers:</strong> Ariat warns shoppers about websites selling counterfeit products. Shop through Ariat.com or use its authorised retailer directory when buying elsewhere.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Shop Ariat and Find More Savings with CouponsBit
          </h3>
          <p>
            From classic cowboy boots and riding footwear to durable workwear and everyday apparel, Ariat offers products for a range of activities and styles. Before placing your order, visit CouponsBit to explore available Ariat promo codes, discount offers, and boot deals.
          </p>
          <p>
            Compare the offers, check their conditions, and apply an eligible code to your purchase. Find the Ariat products you need while making the most of your shopping budget.
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
            Frequently Asked Questions About Ariat Promo Codes
          </h3>
          {[
            {
              q: "1. Where can I find an Ariat promo code?",
              a: "Visit the Ariat page on CouponsBit to check available promo codes and discounts. You can also explore Ariat's official promotions page for current offers."
            },
            {
              q: "2. Does Ariat offer a first-order discount?",
              a: "Yes. Ariat offers new email subscribers 10% off their first order. The offer is limited to new subscribers, excludes clearance products, and is valid for US orders."
            },
            {
              q: "3. Does Ariat offer a military discount?",
              a: "Yes. Eligible US military personnel and veterans can receive 10% off after verifying their status through SheerID."
            },
            {
              q: "4. Can I use multiple Ariat promo codes on one order?",
              a: "No. Ariat allows only one promo code per order. Its first-order email discount also cannot be combined with other offers."
            },
            {
              q: "5. Does Ariat offer free shipping?",
              a: "Yes. Ariat offers free ground shipping on domestic US orders. Ariat Insider members also receive free shipping without an order minimum, subject to programme terms."
            },
            {
              q: "6. How long do I have to return an Ariat order?",
              a: "Ariat.com offers free returns within 90 days of purchase for US orders, subject to the return policy and product conditions."
            },
            {
              q: "7. Where do I enter an Ariat promo code?",
              a: "Add your selected products to your shopping bag and proceed to the My Bag page. Enter your promo code in the box below the order summary and select Apply."
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
            Popular Ariat Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Ariat Promo Code",
              "Western Cowboy Boots",
              "Work Boots Deals",
              "Ariat Insider Benefits",
              "10% First Order Discount",
              "Military & Veteran Savings",
              "Equestrian Riding Boots",
              "Flame Resistant Workwear"
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
            Today's Top Ariat Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "10% OFF FIRST ORDER",
                sub: "Sign up for emails and save on your first purchase",
              },
              {
                heading: "ARIAT INSIDER",
                sub: "Free shipping & 90-day returns on all orders",
              },
              {
                heading: "MILITARY DISCOUNT",
                sub: "10% off for military personnel & veterans",
              },
              {
                heading: "SALE FOOTWEAR & WEAR",
                sub: "Up to 40% off clearance boots & clothing",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  A
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
                  aria-label={`Shop Ariat: ${deal.heading}`}
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
