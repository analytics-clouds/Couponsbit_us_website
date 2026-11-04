"use client";

import { useState, useEffect } from "react";
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
  RefreshCw, 
  Clock, 
  Copy, 
  ChevronDown, 
  Package, 
  Truck, 
  Shield, 
  Laptop, 
  Shirt, 
  Home, 
  Sparkles, 
  BookOpen, 
  CheckCircle,
  X,
  ArrowRight,
  Ticket,
  Flame,
  Gamepad2,
  Tv,
  Coins,
  Cpu,
  Monitor,
  Plane,Key, CalendarClock, Layers, Terminal,
  Code,
  Zap,
  LayoutGrid,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { type Coupon, DRIFFLE_COUPONS } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  { name: "Unipin", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782198037/unipijn-coupon-code_nh4xhc.webp", dealText: "Top-Ups From $0.94", href: "/stores/unipin-discount-code" },
  { name: "Kinguin", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783494079/kinguin-coupon-code_ugjj9s.jpg", dealText: "Up to 97% OFF", href: "/stores/kinguin-discount-code" },
  { name: "GamsGo", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787739252/gamesgo-logo_xo1xw9.webp", dealText: "Save Up to 85%", href: "/stores/gamsgo-discount-code" },
  { name: "Envato Elements", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781775923/envato-coupon-code_rhfnbt.webp", dealText: "Up to 50% OFF", href: "/stores/envato-elements-discount-code" },
  { name: "Hostinger", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1785130842/hostinger-logo_m9ubvs.webp", dealText: "Up To 80% OFF", href: "/stores/hostinger-discount-code" },
  { name: "Sintra", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1781776169/sintra-coupon-code_piyu2d.webp", dealText: "Up to 70% OFF", href: "/stores/sintra-discount-code" },
];

export default function DriffleCouponsContent() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);

  // Slide auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (coupon: Coupon) => {
    navigator.clipboard.writeText(coupon.code);
    setToastCode(coupon.code);
    setShowToast(true);
    setActiveModalCoupon(coupon);
    setShowModal(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      {showModal && activeModalCoupon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-black font-black text-xl mb-2">Coupon Code Copied!</h3>
            <div className="bg-[#e8f6f8] border border-[#056bfa]/20 rounded-2xl px-6 py-3 mb-6">
              <span className="text-[#056bfa] font-black text-2xl font-mono">{activeModalCoupon.code}</span>
            </div>
            <a href="https://www.tkqlhce.com/click-100938140-17275810?sid=1015"
              target="_blank" rel="nofollow noopener noreferrer"
              onClick={() => setShowModal(false)}
              className="block w-full bg-[#056bfa] text-white font-black py-4 rounded-2xl mb-3 hover:bg-[#005f91] transition-colors">
              Continue to Driffle →
            </a>
            <button onClick={() => setShowModal(false)}
              className="text-gray-500 font-bold text-sm hover:text-black transition-colors">
              Close Window
            </button>
          </div>
        </div>
      )}
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

      {/* Main Content Start */}
      <main>
        {/* Section 1: Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">Driffle</span>
            </nav>
          </div>
        </div>

        {/* Section 2: Store Header */}
        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left: Store Info */}
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href="https://www.tkqlhce.com/click-100938140-17275810?sid=1015" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1781775923/driffle-coupon-code_n2upgl.webp" alt="Driffle" width={112} height={112} className="w-full h-full object-contain" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Driffle Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(14k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more with the latest Driffle Discount Code and Driffle Promo Code for November 2026. Enjoy up to 95% OFF on XCOM 2 and up to 81% OFF on EA SPORTS FC 26. You can also save up to 94% on Neverwinter Nights: Enhanced Edition, 61% OFF Monster Hunter Wilds, 57% OFF Roblox Gift Cards, and 55% OFF Ghost of Tsushima Director's Cut. Browse verified Driffle deals on digital game keys, gift cards, and gaming currencies with instant delivery.
                    </p>
                    <a
                      href="https://www.tkqlhce.com/click-100938140-17275810?sid=1015"
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
                    { icon: Tag, val: "14", label: "Coupons" },
                    { icon: Percent, val: "300+", label: "Deals" },
                    { icon: Users, val: "500k+", label: "Gamers" },
                    { icon: BadgeCheck, val: "100%", label: "Verified" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <stat.icon className="w-4.5 h-4.5 text-[#056bfa]" />
                       <div>
                         <p className="text-black font-black text-xs leading-none">{stat.val}</p>
                         <p className="text-gray-500 font-bold text-[12px] uppercase mt-0.5">{stat.label}</p>
                       </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right: Featured Banner Slider */}
              <div className="hidden md:block flex-1">
                <div className="relative rounded-2xl overflow-hidden h-[250px] md:h-[250px] shadow-lg group">
                  {/* Slide 1 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 0 ? 1 : 0 }}>
                    <a href="https://www.tkqlhce.com/click-100938140-17275810?sid=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782129759/driffle_discount_code_y0ysgi.webp" alt="Driffle Discount Code" width={800} height={350} className="w-full h-full object-cover" />
                    </a>
                  </div>

                  {/* Slide 2 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 1 ? 1 : 0 }}>
                    <a href="https://www.tkqlhce.com/click-100938140-17275810?sid=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782129760/driffle_promo_code_jtopjs.webp" alt="Driffle Promo Code" width={800} height={350} className="w-full h-full object-cover" />
                    </a>
                  </div>

                  {/* Slide 3 */}
                  <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeSlide === 2 ? 1 : 0 }}>
                    <a href="https://www.tkqlhce.com/click-100938140-17275810?sid=1015" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1782129759/driffle_voucher_code_iv3csa.webp" alt="Driffle Voucher Code" width={800} height={350} className="w-full h-full object-cover" />
                    </a>
                  </div>

                  {/* Controls */}
                  <button onClick={() => setActiveSlide((prev) => (prev - 1 + 3) % 3)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-5 h-5 text-white rotate-180" />
                  </button>
                  <button onClick={() => setActiveSlide((prev) => (prev + 1) % 3)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {[0, 1, 2].map(i => (
                      <button key={i} onClick={() => setActiveSlide(i)} className={cn("w-1.5 h-1.5 rounded-full transition-all", activeSlide === i ? "bg-white w-4" : "bg-white/40")} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Trust Bar */}
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

        {/* Section 4: Coupons Section + Right Sidebar */}
        <section className="py-6 md:py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Left Column: Coupons */}
              <div className="top-offers lg:w-[65%]">
                <div className="mb-8">
                  <h2 className="text-2xl font-black text-black leading-tight">Driffle Coupon Codes & Offers</h2>
                  <p className="text-gray-500 font-bold text-sm tracking-wide mt-1">14 Coupons & Offers Available</p>
                </div>

          

                {DRIFFLE_COUPONS.map((coupon) => (
                  <div key={coupon.id} id={coupon.id} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">{coupon.topLabel}</p>
                            <div className="text-[24px] sm:text-5xl font-extrabold leading-none mt-2">{coupon.mainValue}</div>
                            <p className="text-[11px] sm:text-sm font-bold mt-2 uppercase">{coupon.offText}</p>
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
                            <button type="button"
                              onClick={() => setExpandedCouponId(expandedCouponId === coupon.id ? null : coupon.id)}
                              className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                              View Details
                              <ChevronDown size={16} className={`transition-transform duration-300 ${expandedCouponId === coupon.id ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${expandedCouponId === coupon.id ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                              <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                                {coupon.points.map((point, pi) => (
                                  <li key={pi} className="flex items-start gap-2">
                                    <span className="text-[#056bfa]">•</span>{point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                            <a href="https://www.tkqlhce.com/click-100938140-17275810?sid=1015" target="_blank" rel="nofollow noopener noreferrer" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                    <img
                      src="https://res.cloudinary.com/couponsbit/image/upload/v1788251342/google_preferred_source_badge_light_en_j9wixw.png"
                      alt="Add as a preferred source on Google"
                      width={280}
                      height={70}
                      className="w-full max-w-[260px] h-auto object-contain"
                    />
                  </a>
                </div>

                {/* About Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">About Driffle</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Driffle is a global digital gaming marketplace that connects gamers with affordable digital products, including game keys, gift cards, gaming subscriptions, downloadable content (DLC), software licenses, and in-game currencies. The platform has gained popularity among gamers looking for convenient access to digital entertainment products while exploring opportunities to save money on their purchases.
                  </p>
                  <a href="https://www.tkqlhce.com/click-100938140-17275810?sid=1015" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Categories Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Laptop, name: "Electronics",        count: "850+", color: "text-blue-500",   href: "/categories/electronics" },
                        { icon: Plane,  name: "Travel",             count: "420+", color: "text-teal-500",   href: "/categories/travel" },
                        { icon: Tv,     name: "Entertainment",      count: "210+", color: "text-purple-500", href: "/categories/entertainment" },
                        { icon: Code,   name: "Software & Digital", count: "300+", color: "text-violet-500", href: "/categories/software" },
                        { icon: Zap,    name: "Mobile & Telecom",   count: "320+", color: "text-green-500",  href: "/categories/mobile" }
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

                {/* Why Shop Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <h3 className="text-black font-black text-lg mb-8">What Can You Buy on Driffle?</h3>

  <div className="space-y-8">
    {[
      { 
        icon: Key, 
        title: "Video Game Keys", 
        sub: "Purchase digital game activation keys for popular PC and console titles across various genres." 
      },
      { 
        icon: Ticket, 
        title: "Gift Cards", 
        sub: "Find gift cards for gaming platforms, digital stores, entertainment services, and online marketplaces." 
      },
      { 
        icon: CalendarClock, 
        title: "Gaming Subscriptions", 
        sub: "Purchase or renew subscription services that provide access to online gaming, multiplayer features, and game libraries." 
      },
      { 
        icon: Coins, 
        title: "In-Game Currency", 
        sub: "Buy digital currencies used in popular online games for character upgrades, cosmetic items, and premium content." 
      },
      { 
        icon: Layers, 
        title: "Downloadable Content (DLC)", 
        sub: "Expand your gaming experience with additional content, expansions, and bonus features." 
      },
      { 
        icon: Terminal, 
        title: "Software Licenses", 
        sub: "Driffle also offers software activation keys and productivity tools for various user needs." 
      }
    ].map((item, i) => (
      <div key={item.title} className="flex gap-4 items-start text-justify">
        <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
          <item.icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-black font-black text-sm leading-tight mb-2">{item.title}</p>
          <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
            {item.sub}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


              </div>

            </div>
          </div>
        </section>

        {/* Section 5: More Stores You'll Love */}
        <section className="py-20 bg-white border-t border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-2xl font-black text-black mb-10">More Stores You'll Love</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {RELATED_STORES.map((store, i) => (
                <Link 
                  key={i} 
                  href={store.href}
                  className="bg-white border border-[#f0f0f0] rounded-3xl p-6 text-center shadow-sm hover:border-[#056bfa] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="h-14 flex items-center justify-center mx-auto">
                    <img src={store.logo} alt={store.name} width={120} height={48} className="max-h-12 max-w-[120px] w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
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

        <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
      {/* Left: Text Content */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Driffle Coupon Codes, Promo Codes & Gaming Deals 2026
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
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Neverwinter Nights Enhanced Edition</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up To 94% OFF</td>
        <td className="p-5 text-gray-500 align-middle">All Users</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Global digital key with instant access</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Neverwinter Nights Enhanced Edition</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">XCOM 2</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up To 95% OFF</td>
        <td className="p-5 text-gray-500 align-middle">All Users</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Available for PC, Mac & Linux</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">XCOM 2 digital key</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">EA SPORTS FC 26</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up To 81% OFF</td>
        <td className="p-5 text-gray-500 align-middle">All Users</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Perfect for online multiplayer fans</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">EA SPORTS FC 26 digital key</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Roblox 1000 Robux Gift Card</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up To 57% OFF</td>
        <td className="p-5 text-gray-500 align-middle">All Users</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Instant digital delivery available</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">1000 Robux global gift card</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Forza Horizon 6</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up To 37% OFF</td>
        <td className="p-5 text-gray-500 align-middle">All Users</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Available for PC & Xbox Series X|S</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Forza Horizon 6 digital key</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Enshrouded</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up To 32% OFF</td>
        <td className="p-5 text-gray-500 align-middle">All Users</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Europe Steam digital key available</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Enshrouded digital key</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Monster Hunter Wilds</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up To 61% OFF</td>
        <td className="p-5 text-gray-500 align-middle">All Users</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Action-packed multiplayer gameplay</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Monster Hunter Wilds digital key</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">Ghost of Tsushima Director's Cut</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up To 55% OFF</td>
        <td className="p-5 text-gray-500 align-middle">All Users</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">Includes Director's Cut content</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">Ghost of Tsushima Director's Cut</td>
      </tr>
      <tr className="hover:bg-gray-50/50 transition-colors">
        <td className="p-5 text-black font-black align-middle max-w-[220px]">PUBG Mobile UC Pack</td>
        <td className="p-5 text-[#056BFA] font-black align-middle">Up To 14% OFF</td>
        <td className="p-5 text-gray-500 align-middle">All Users</td>
        <td className="p-5 text-gray-500 align-middle max-w-[200px]">6000 UC + 2100 bonus UC</td>
        <td className="p-5 text-gray-500 align-middle max-w-[240px]">PUBG Mobile UC top-up</td>
      </tr>
    </tbody>
  </table>
</div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            Looking for the latest <strong>Driffle coupon codes, promo codes, and gaming deals</strong>? You've come to the right place. At Couponsbit, we help gamers save on video games, gift cards, <Link href="/stores/gamsgo-discount-code" className="text-[#056bfa] hover:underline">gaming subscriptions</Link>, in-game currency, software licenses, and digital products with verified Driffle discounts and exclusive offers.
          </p>
          <p>
            Whether you're a PC gamer, console enthusiast, casual player, or dedicated collector, Driffle offers access to a wide selection of digital gaming products at competitive prices. Before making your next purchase, check Couponsbit for the latest Driffle deals and savings opportunities.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">About Driffle</h3>
          
            <p>
              Driffle caters to players across multiple gaming platforms, making it easier to find products for PC, Xbox, PlayStation, Nintendo, and other popular gaming ecosystems. In addition to video games, the marketplace offers gift cards, software products, digital memberships, and gaming-related digital content.
            </p>
            <p>
              One of Driffle's biggest advantages is the variety of products available in a single marketplace. Whether you're purchasing a newly released game, renewing a subscription service, <Link href="/stores/unipin-discount-code" className="text-[#056bfa] hover:underline">adding funds to a gaming account</Link>, or buying digital content for your favorite title, Driffle provides a streamlined purchasing experience.
            </p>
            <p>
              At Couponsbit, we help gamers maximize their savings with the latest Driffle coupon codes, promo codes, and gaming deals.
            </p>
          </div>


          {/* How to Use Steps */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#056bfa] mb-8">How to Use a Driffle Coupon Code</h3>
            <div className="space-y-6">
              {[
                "Step 1: Browse Available Driffle Deals — Visit the Driffle page on Couponsbit and explore the latest discounts, promo codes, and gaming offers.",
                "Step 2: Choose Your Preferred Offer — Select the deal that best matches the product you're planning to purchase.",
                "Step 3: Copy the Coupon Code — Click to reveal and copy the promo code if one is available.",
                "Step 4: Visit Driffle — Go to the Driffle website and add your desired products to your cart.",
                "Step 5: Apply the Promo Code — During checkout, enter the coupon code in the designated field and verify that the discount has been applied.",
                "Step 6: Complete Your Purchase — Finalize your order and enjoy savings on your gaming and digital products."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-normal mt-2 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Best Ways to Save at Driffle</h3>
            <p><strong>Check Couponsbit Before Every Purchase:</strong> Always visit Couponsbit before purchasing games, gift cards, or subscriptions to find the latest Driffle promo codes.</p>
            <p><strong>Watch for Seasonal Gaming Sales:</strong> Gaming marketplaces often offer major discounts during special events throughout the year. Look for deals during: Black Friday, Cyber Monday, Summer Gaming Sales, Holiday Promotions, New Year Deals, and Back-to-School Sales.</p>
            <p><strong>Compare Available Offers:</strong> Different products may feature different promotions, making it worthwhile to review all available deals.</p>
            <p><strong>Look for Bundle Discounts:</strong> Some gaming products and subscriptions may offer better value when purchased as part of a bundle.</p>
            <p><strong>Monitor New Release Promotions:</strong> Publishers occasionally provide launch discounts or promotional pricing for newly released titles.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Gamers Choose Driffle</h3>
            <p><strong>Wide Product Catalog:</strong> The platform offers games, gift cards, subscriptions, software, and digital products in one place.</p>
            <p><strong>Multiple Gaming Platforms:</strong> Gamers can find products compatible with PC, PlayStation, Xbox, Nintendo, and other popular platforms.</p>
            <p><strong>Digital Delivery:</strong> Many products are delivered digitally, allowing customers to access their purchases quickly.</p>
            <p><strong>Global Marketplace:</strong> Driffle serves gamers from various regions and offers access to a broad selection of digital entertainment products.</p>
            <p><strong>Convenient Shopping Experience:</strong> The platform is designed to simplify the process of purchasing gaming-related digital content.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Use Couponsbit for Driffle Deals?</h3>
            <p><strong>Verified Discounts:</strong> We regularly update available Driffle offers to help users find current promotions and coupon codes.</p>
            <p><strong>Easy Savings:</strong> Find gaming deals, digital product discounts, and promo codes in one convenient location.</p>
            <p><strong>Completely Free:</strong> Couponsbit is free to use and helps consumers save on gaming, software, travel, technology, shopping, and more.</p>
            <p><strong>Updated Offers:</strong> Our team continuously monitors deals to help users access the latest savings opportunities.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#056bfa] mb-4">Level Up Your Savings with Driffle</h3>
            <p>Whether you're purchasing the latest game release, topping up your gaming wallet, renewing a subscription, or buying digital content for your favorite platform, Driffle offers a convenient marketplace for gamers and digital shoppers.</p>
            <p>Before completing your purchase, visit Couponsbit to explore the latest Driffle coupon codes, promo codes, and gaming deals. With verified discounts and regularly updated offers, Couponsbit helps you enjoy more gaming while spending less.</p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button 
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#056bfa] font-black text-[11px] uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"} <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* FAQs Accordion */}
        <div className="faq-section mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
          {[
            { q: "Does Driffle offer coupon codes?", a: "Yes. Driffle occasionally provides promo codes, discounts, and special offers on gaming products and digital content." },
            { q: "Where can I find Driffle promo codes?", a: "You can find the latest Driffle coupon codes and gaming deals directly on Couponsbit." },
            { q: "What products does Driffle sell?", a: "Driffle offers video game keys, gift cards, gaming subscriptions, software licenses, downloadable content, and in-game currencies." },
            { q: "Can I buy products for multiple gaming platforms?", a: "Yes. Driffle supports a variety of gaming ecosystems, including PC and major console platforms." },
            { q: "Are Driffle products delivered digitally?", a: "Many products available through Driffle are delivered digitally, allowing for convenient access after purchase." },
            { q: "Is Couponsbit free to use?", a: "Absolutely. Couponsbit is completely free and helps users discover verified coupon codes, discounts, and promotional offers." }
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
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Driffle Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Game Keys", "PC Game Keys", "Steam Gift Card", "Xbox Live Sub", "Driffle Promo Code", "PSN Codes", "In-Game Currency", "Gaming Subscriptions"].map(tag => (
              <span
                key={tag}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#056bfa] uppercase tracking-widest shadow-sm border border-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Driffle Deals</h3>
          <div className="space-y-6">
            {DRIFFLE_COUPONS.slice(0, 5).map((coupon, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">D</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">{coupon.topLabel} {coupon.mainValue} {coupon.offText}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{coupon.description}</p>
                </div>
                <a href="https://www.tkqlhce.com/click-100938140-17275810?sid=1015" target="_blank" rel="nofollow noopener noreferrer" className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90">Get Deal</a>
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
