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
  ExternalLink, HeartHandshake, ShieldAlert, Calendar, Receipt,
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  Dumbbell,
  Gift,
  ShoppingBag,
  Truck,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

interface Deal {
  id: string;
  label: string;
  heading: string;
  sub: string;
}

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const DEALS: Deal[] = [
  { id: "d1", label: "NEW", heading: "New Customer Offer", sub: "Latest Deals" },
  { id: "d2", label: "DEAL", heading: "Smith Machine Deal", sub: "Featured Picks" },
  { id: "d3", label: "DEAL", heading: "Power Rack Discount", sub: "Featured Picks" },
  { id: "d4", label: "DEAL", heading: "Free Shipping Offer", sub: "Featured Picks" },
  { id: "d5", label: "DEAL", heading: "Adjustable Bench Bundle", sub: "Featured Picks" },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Planet Fitness", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789535819/planet_fitness_promo_code_yaozty.webp", dealText: "From $15/Month", href: "/stores/planet-fitness-promo-code" },
  { name: "Merachfit", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/merachfit-logo_kz4fuc.webp", dealText: "Save Up To $260", href: "/stores/merachfit-discount-code" },
  { name: "Superrun", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787037376/superrun_w6lj1n.webp", dealText: "Save $30 OFF", href: "/stores/superrun-discount-code" },
  { name: "Ballboyz", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782373660/ballboyz-coupon-code_rduo3k.jpg", dealText: "Up to 50% OFF", href: "/stores/ballboyz-discount-code" },
  { name: "RingConn", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784618847/ringconn-logo_y95vtu.webp", dealText: "Starting From $199", href: "/stores/ringconn-discount-code" },
  { name: "GoodRx", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/goodrx-logo_ibgfjr.webp", dealText: "From $39/Month", href: "/stores/goodrx-discount-code" },
];

const STORE_URL = "https://majorfitness.sjv.io/c/4303217/1835793/21930?subId1=1015";

export default function MajorFitnessCouponsContent() {
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
              <span className="text-black font-extrabold">Major Fitness</span>
            </nav>
          </div>
        </div>

        {/* Store Header */}
        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1789640583/major-fitness_aum53e.webp" alt="Major Fitness" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Major Fitness Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(6.4k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Use the latest Major Fitness Discount Code and Major Fitness Promo Code for September 2026 to save $250 on the B52 PRO, get $50 OFF as a new member, enjoy the B52 Standard from $1,119.99, and claim a FREE Hoodie & Tee on orders over $2,000. Shop verified deals on home gyms, benches, dumbbells, plates, and accessories.
                    </p>
                    <a
                      href={STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 mb-2 bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors"
                    >
                      Visit Store <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                  </div>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 md:pl-[136px]">
                  {[
                    { icon: Tag, val: "23", label: "Offers" },
                    { icon: Percent, val: "100+", label: "Deals" },
                    { icon: Users, val: "500K+", label: "Shoppers" },
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
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img src="https://res.cloudinary.com/couponsbit/image/upload/v1789732193/46_zx1q4g.webp" alt="Major Fitness Discount Code" width={800} height={350} className="w-full h-full object-contain bg-[#f8f8f8]" fetchPriority="high" />
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
                  <h2 className="text-2xl font-black text-black leading-tight">Major Fitness Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "SAVE", value: "$50 OFF", title: "Major Fitness Discount Code – $50 Off for New Members", desc: "New members can get $50 off their first qualifying purchase.", bullets: ["Sign up to access the new-member saving.", "Check the offer terms before completing your order.", "A useful saving for anyone building a home fitness setup."] },
                  { label: "SAVE", value: "$250 OFF", title: "Major Fitness Discount Code – Save $250 on B52 PRO", desc: "Save $250 on the B52 PRO during the Fall Fitness Sale.", bullets: ["Build your own package and unlock additional savings.", "The promotion is designed for complete home gym setups.", "Check the latest major fitness discount code before checkout."] },
                  { label: "ONLY", value: "$1,119.99", title: "Major Fitness Discount Code – B52 Standard for $1,119.99", desc: "The B52 Standard is available for $1,119.99.", bullets: ["The brand describes this as its lowest price ever.", "Combine it with other eligible products to build your setup.", "Check for a major fitness coupon code before ordering."] },
                  { label: "GIFT", value: "FREE GIFT", title: "Major Fitness Discount Code – Free Hoodie & Tee on $2,000+", desc: "Spend $2,000 or more sitewide during the Fall Fitness Sale.", bullets: ["Receive a free Hoodie & Tee Gift Set.", "The offer applies to qualifying purchases.", "Check the current major fitness discount code before checkout."] },
                  { label: "ONLY", value: "$3,999.99", title: "Major Fitness Discount Code – B17 Flying Fortress $3,999.99", desc: "The B17 Flying Fortress All-In-One is priced at $3,999.99.", bullets: ["Its previous listed price was $4,199.99.", "It is part of the Major Fitness Heritage Series.", "Look for a major fitness promo code before purchasing."] },
                  { label: "ONLY", value: "$1,949.99", title: "Major Fitness Discount Code – Urethane Dumbbells $1,949.99", desc: "The Urethane Octagonal-Shield Dumbbells are $1,949.99.", bullets: ["The previous listed price was $2,299.99.", "They are designed for strength and home gym training.", "Check for a major fitness discount code before checkout."] },
                  { label: "FROM", value: "$139.99", title: "Major Fitness Discount Code – Olympic Grip Plates From $139.99", desc: "Rubber Coated Olympic Cast Iron Grip Plates start at $139.99.", bullets: ["The plates are designed for Olympic-style strength training.", "Choose the appropriate weight option for your setup.", "Check for a major fitness coupon code before ordering."] },
                  { label: "EARN", value: "$500", title: "Major Fitness Discount Code – $500 Feature Opportunity", desc: "Eligible customers can receive $500 to get featured.", bullets: ["Selected stories may appear across Major Fitness channels.", "The opportunity is part of the brand's fifth-anniversary campaign.", "Check the current promotion details before submitting."] },
                  { label: "EARN", value: "$1,500", title: "Major Fitness Discount Code – $1,500 Filming Opportunity", desc: "Selected participants can receive $1,500 to upgrade their setup.", bullets: ["Stories may be included in the brand's fifth-anniversary film.", "The promotion offers an opportunity to share your fitness journey.", "Review the eligibility requirements before applying."] },
                  { label: "FROM", value: "$949.99", title: "Major Fitness Discount Code – F35 Home Gym From $949.99", desc: "The F35 All-In-One Home Gym starts at $949.99.", bullets: ["It features a wall-mount folding design.", "It is designed for compact home gym spaces.", "Check for a major fitness discount code before buying."] },
                  { label: "ONLY", value: "$379.99", title: "Major Fitness Discount Code – Lever Arms $379.99", desc: "Major Fitness Lever Arms are listed at $379.99.", bullets: ["The previous listed price was $429.99.", "They can be added to a compatible strength-training setup.", "Look for a major fitness promo code before checkout."] },
                  { label: "ONLY", value: "$169.99", title: "Major Fitness Discount Code – Adjustable Monolift $169.99", desc: "The Adjustable Monolift Attachment is available for $169.99.", bullets: ["The previous listed price was $199.99.", "It is an attachment for compatible strength equipment.", "Check the latest major fitness discount code before ordering."] },
                  { label: "ONLY", value: "$949.99", title: "Major Fitness Promo Code – Pulley & Weight Stack Bundle $949.99", desc: "The Aluminum Pulley & Weight Stack Bundle costs $949.99.", bullets: ["The previous listed price was $1,079.99.", "It combines pulley equipment with a weight stack.", "Apply a major fitness promo code if an eligible offer is available."] },
                  { label: "FROM", value: "$399.99", title: "Major Fitness Promo Code – AH64 Apache Bench From $399.99", desc: "The Heritage Series AH64 Apache Adjustable Weight Bench starts at $399.99.", bullets: ["It is part of the Major Fitness Heritage Series.", "Its adjustable design supports different training positions.", "Check for a major fitness promo code before checkout."] },
                  { label: "ONLY", value: "$3,999.99", title: "Major Fitness Promo Code – B17 Flying Fortress $3,999.99", desc: "The Heritage Series B17 Flying Fortress is $3,999.99.", bullets: ["It was previously listed at $4,199.99.", "The all-in-one gym is designed for home strength training.", "Check the latest major fitness promo code before purchasing."] },
                  { label: "SAVE", value: "5% OFF", title: "Major Fitness Promo Code – 5% Off for Military & First Responders", desc: "Eligible military and first responders can unlock 5% off.", bullets: ["Verification is required to access the discount.", "The offer is also presented alongside a student discount.", "Complete verification before using the major fitness promo code."] },
                  { label: "SAVE", value: "5% OFF", title: "Major Fitness Promo Code – 5% Off for Students", desc: "Eligible students can unlock an exclusive 5% discount.", bullets: ["Verification is required before the discount becomes available.", "Check the current eligibility requirements before ordering.", "A useful option for those studying health and fitness degree programs."] },
                  { label: "ONLY", value: "$169.99", title: "Major Fitness Discount Code – Color Change Plates $169.99", desc: "The Color Change Plates 1.25LB–10LB Set costs $169.99.", bullets: ["The previous listed price was $199.99.", "The set includes multiple weight options for training.", "Check for a major fitness coupon code before checkout."] },
                  { label: "FROM", value: "$29.99", title: "Major Fitness Discount Code – Barbell Collars From $29.99", desc: "Major Fitness Barbell Collars start at $29.99.", bullets: ["The previous listed price was $36.99.", "They are designed for use with Olympic barbells.", "Check for a major fitness discount code before purchasing."] },
                  { label: "ONLY", value: "$99.99", title: "Major Fitness Discount Code – Heritage J-Hooks $99.99", desc: "Heritage Series J-Hooks are available for $99.99.", bullets: ["The previous listed price was $129.99.", "They are designed as a rack accessory for strength training.", "Look for a major fitness promo code before checkout."] },
                  { label: "ONLY", value: "$49.99", title: "Major Fitness Promo Code – Sandwich J-Hooks $49.99", desc: "Sandwich J-Hooks are listed at $49.99.", bullets: ["The previous listed price was $69.99.", "They provide an additional rack accessory for your home gym.", "Apply a major fitness promo code if eligible."] },
                  { label: "ONLY", value: "$949.99", title: "Major Fitness Promo Code – Pulley & Weight Stack Bundle $949.99", desc: "The Aluminum Pulley & Weight Stack Bundle is $949.99.", bullets: ["Its previous listed price was $1,079.99.", "It combines pulley equipment and a weight stack.", "Check for the latest major fitness promo code before ordering."] },
                  { label: "SHOP", value: "ALL GEAR", title: "Major Fitness Discount Code – Fitness Equipment for Every Training Goal", desc: "Explore equipment from Major Fitness for different home training needs.", bullets: ["Options include gyms, benches, plates, dumbbells and accessories.", "People researching a fitness science degree or physical fitness degree can also find equipment relevant to strength training.", "Check the latest major fitness discount code before completing your purchase."] },
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
                            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={`Shop Major Fitness: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                    rel="noopener noreferrer"
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Major Fitness?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Major Fitness is a home fitness equipment brand focused on bringing serious strength-training equipment into residential spaces. The company says it began in 2022 with the goal of making serious strength training more accessible at home, developing durable and versatile systems for people who want to train consistently without depending entirely on a commercial gym.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand specializes in equipment designed to combine multiple workout functions in a single setup. Its range includes Smith machines, power racks, adjustable benches, barbells, dumbbells, weight plates, cable and pulley accessories, specialty machines, and other home gym essentials.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Major Fitness particularly focuses on space-efficient home gym systems. Its all-in-one equipment can combine strength-training functions that would otherwise require several individual machines, making the brand relevant for beginners setting up their first gym as well as experienced lifters expanding an existing setup.

                  </p>
                  
                  <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Dumbbell, name: "Smith Machines", count: "20+", color: "text-blue-500", href: "/categories/health" },
                        { icon: ShoppingBag, name: "Power Racks", count: "15+", color: "text-purple-500", href: "/categories/health" },
                        { icon: Gift, name: "Bench Bundles", count: "10+", color: "text-pink-500", href: "/categories/health" },
                        { icon: Truck, name: "Free Shipping", count: "40+", color: "text-teal-500", href: "/categories/health" },
                        { icon: Search, name: "New Arrivals", count: "12+", color: "text-orange-500", href: "/categories/health" },
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
  <h3 className="text-black font-black text-lg mb-2">
    Why Isn't My Major Fitness Discount Code Working?
  </h3>
  <p className="text-gray-500 font-medium text-[11px] leading-relaxed mb-8">
    A code may fail for several reasons. It could have expired, may only apply to selected products, or could have eligibility requirements that your order doesn't meet. Before trying another code, check:
  </p>
  <div className="space-y-8">
    {[
      {
        icon: Calendar,
        title: "Whether the code is still active",
        sub: "Verify the expiration date to ensure the promotion has not expired.",
      },
      {
        icon: Receipt,
        title: "Whether you've entered it correctly",
        sub: "Double-check for typos, unwanted spaces, or capitalization issues.",
      },
      {
        icon: ShieldAlert,
        title: "Whether your products qualify",
        sub: "Ensure the items in your cart are eligible for the specific promotion.",
      },
      {
        icon: Tag,
        title: "Whether a minimum purchase requirement applies",
        sub: "Confirm if your cart total meets the required spending threshold.",
      },
      {
        icon: HeartHandshake,
        title: "Whether the offer is limited to new customers or a specific group",
        sub: "Check if the discount is restricted to first-time buyers or specific member tiers.",
      },
      {
        icon: Gift,
        title: "Whether the promotion can be combined with another offer",
        sub: "Make sure you are not stacking incompatible coupons or site-wide discounts.",
      },
      {
        icon: Truck,
        title: "Whether the discount applies to the particular product or collection",
        sub: "Some codes are restricted to specific categories or excluded items.",
      },
      {
        icon: Receipt,
        title: "Compare against current sale prices",
        sub: "For larger purchases, it's also worth comparing the code against the current sale price or promotional offer rather than assuming a coupon will always provide the biggest benefit.",
      },
    ].map((item) => (
      <div key={item.title} className="flex gap-4 items-start">
        <div className="w-10 h-10 shrink-0 bg-[#e8f6f8] rounded-2xl flex items-center justify-center text-[#056bfa]">
          <item.icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-black font-black text-sm leading-tight mb-2">
            {item.title}
          </p>
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
          Major Fitness Discount Code, Promo Code & Discount Offers
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
        ["New Member Offer", "$50 OFF", "New Members", "Sign up required to access first-purchase savings", "Qualifying First Purchases"],
        ["B52 PRO Fall Fitness Sale", "$250 OFF", "All Users", "Save $250 on B52 PRO package setups", "B52 PRO Power Rack"],
        ["B52 Standard Deal", "$1,119.99", "All Users", "Promoted as the lowest price ever", "B52 Standard Gym"],
        ["Free Hoodie & Tee Gift Set", "FREE GIFT", "Orders $2,000+", "Free hoodie & tee gift set on qualifying minimum spend", "Sitewide Orders $2,000+"],
        ["B17 Flying Fortress All-In-One", "$3,999.99", "All Users", "Was $4,199.99; part of the Heritage Series", "B17 Flying Fortress Gym"],
        ["Urethane Dumbbells Set", "$1,949.99", "All Users", "Was $2,299.99; Octagonal-Shield design for strength training", "Urethane Dumbbells"],
        ["Olympic Cast Iron Grip Plates", "From $139.99", "All Users", "Rubber coated Olympic cast iron grip plates", "Olympic Grip Plates"],
        ["Fifth-Anniversary Feature Opportunity", "Earn $500", "Eligible Customers", "Submit your story for a chance to be featured on brand channels", "Community Submissions"],
        ["Fifth-Anniversary Filming Opportunity", "Earn $1,500", "Eligible Customers", "Share your fitness journey for a chance to upgrade your setup", "Film Project Submissions"],
        ["F35 All-In-One Home Gym", "From $949.99", "All Users", "Wall-mount folding design for compact spaces", "F35 Home Gym"],
        ["Major Fitness Lever Arms", "$379.99", "All Users", "Was $429.99; rack attachment for strength training", "Lever Arms Attachment"],
        ["Adjustable Monolift Attachment", "$169.99", "All Users", "Was $199.99; compatible strength rack attachment", "Monolift Attachment"],
        ["Pulley & Weight Stack Bundle", "$949.99", "All Users", "Was $1,079.99; combines aluminum pulley and weight stack", "Pulley & Stack Bundle"],
        ["AH64 Apache Adjustable Bench", "From $399.99", "All Users", "Heritage Series adjustable bench with multiple positions", "AH64 Weight Bench"],
        ["Military & First Responders Discount", "5% OFF", "Military & First Responders", "Verification required before discount activation", "Sitewide Purchases"],
        ["Student Discount", "5% OFF", "Eligible Students", "Verification required via student status portal", "Sitewide Purchases"],
        ["Color Change Plates Set", "$169.99", "All Users", "Was $199.99; includes 1.25LB–10LB fractional plate set", "Color Change Plates"],
        ["Barbell Collars", "From $29.99", "All Users", "Was $36.99; compatible with Olympic barbells", "Barbell Collars"],
        ["Heritage Series J-Hooks", "$99.99", "All Users", "Was $129.99; heavy-duty rack J-hooks accessory", "Heritage J-Hooks"],
        ["Sandwich J-Hooks", "$49.99", "All Users", "Was $69.99; protective rack accessory for home gyms", "Sandwich J-Hooks"],
        ["All Gym Gear & Equipment", "Various Pricing", "All Users", "Full selection of racks, benches, plates, and accessories", "Sitewide Catalog"]
      ].map((row, i) => (
        <tr key={i} className={cn("border-b border-gray-200 hover:bg-gray-50/50 transition-colors", i === 20 && "border-b-0")}>
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
            Building a home gym is a serious investment, especially when you want equipment that can keep up with your training as your strength and goals progress. From all-in-one Smith machines and power racks to adjustable benches, barbells, dumbbells, and workout accessories, Major Fitness gives home athletes plenty of ways to create a training setup around their space.
          </p>
          <p>
            If you're planning to shop for new home gym equipment, checking for a Major Fitness discount code before placing your order can be a useful way to look for an available offer. Along with coupons and promotional offers, you can also explore Major Fitness's sale collections and special discount programs to find opportunities that fit your purchase.
          </p>

          <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
  <p>
    Before committing to a large home gym purchase, take a moment to check for a current Major Fitness discount code. This is especially useful when you're buying larger equipment or putting together several pieces for a complete setup.
  </p>
  <p>
    A discount code may apply differently depending on the promotion, product, order requirements, or eligibility rules. That's why it helps to review the offer details before adding a code at checkout.
  </p>
  <p>
    You can also compare an available code with Major Fitness's own deals, sale collections, and special discount programs. The best option for your order can depend on what you're buying and which promotions are active at the time.
  </p>

  <div className="space-y-8">
    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Major Fitness Coupons, Deals & Offers</h3>
      <p>A Major Fitness coupon isn't necessarily the only way to reduce your overall shopping cost. The brand regularly highlights promotions and special offers across its website, while certain customer groups may also qualify for dedicated discounts.</p>
      <p>When you're shopping, look beyond a single coupon code and check whether there are:</p>
      <p><strong>Exclusive Savings:</strong> Current Major Fitness discount codes, military or first-responder discounts, student discounts, and referral-related offers.</p>
      <p><strong>Product & Bundle Deals:</strong> Product-specific promotions, sale or clearance offers, seasonal promotions, bundle or package savings, and special event promotions.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Major Fitness Smith Machines & Power Racks</h3>
      <p>Smith machines and power racks are core product categories designed to provide a versatile foundation for home strength training without filling an entire room with separate machines.</p>
      <p><strong>Smith Machines:</strong> All-in-one systems like the B52 and B17 Flying Fortress combine squats, presses, rows, and cable-based exercises into a unified setup.</p>
      <p><strong>Power Racks:</strong> All-in-one stations such as the F22 and F35 support squats, bench presses, and pulley movements. The F35 is specifically designed for space-conscious setups with its wall-mounted folding design.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Adjustable Benches, Weights & Accessories</h3>
      <p>A good adjustable bench expands your training options with dumbbells, barbells, racks, and cable systems for targeting different muscle groups.</p>
      <p>Major Fitness also offers fundamental free weights—including barbells, dumbbells, bumper plates, cast iron plates, and change plates—alongside modular attachments like pulley systems, lever arms, leg-extension attachments, dip bars, spotter arms, and lat-pulldown extensions.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Building a Home Gym for Your Goals</h3>
      <p>Your ideal setup depends on how you train and your available space:</p>
      <p><strong>For Beginners & Free Weights:</strong> Start with a bench, adjustable weights, and a versatile rack, expanding as your needs grow.</p>
      <p><strong>For Strength Focus:</strong> Build around a power rack or Smith machine paired with an adjustable bench, barbell, and weight plates.</p>
      <p><strong>For Compact Spaces & All-in-One:</strong> Opt for wall-mounted folding systems like the F35 or complete multi-station systems to maximize limited floor space.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black text-[#056bfa] mb-4">Seasonal Shopping & How to Save</h3>
      <p>Major retail events like Black Friday, Cyber Monday, New Year fitness sales, Memorial Day, Labor Day, and holiday promotions are great times to upgrade your setup.</p>
      <p>Check Major Fitness's current seasonal promotional pages alongside available discount codes on CouponsBit to compare offers and ensure you get the best price at checkout.</p>
    </div>
  </div>

  {!isReadMore && (
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
  )}
</div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">How to Use a Major Fitness Discount Code</h3>
              <p>Once you've found an eligible discount code, applying it is generally straightforward.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Select the Major Fitness equipment you want to purchase.</li>
                <li>Add the products to your shopping cart.</li>
                <li>Review your cart carefully.</li>
                <li>Look for the field provided for a promotional or discount code.</li>
                <li>Enter your Major Fitness discount code.</li>
                <li>Apply the code and check whether the promotion has been reflected in your order.</li>
                <li>Review the final order details before completing checkout.</li>
              </ul>
              <p>If the code doesn't apply, check its terms first. Some offers may be limited to particular products, customer groups, order requirements, or promotional periods.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">How to Save More on Major Fitness Equipment</h3>
              <p>Shopping strategically can matter when you're purchasing home gym equipment.</p>
              <p>Start by deciding what your workout actually requires. Buying a large all-in-one machine can make sense for some home gyms, while another shopper may get more value from a rack, bench, barbell, and weights purchased separately.</p>
              <p>You can also compare compatible accessories before checkout. If you're already buying a rack or Smith machine, adding compatible attachments later may be more practical than purchasing everything immediately.</p>
              <p>Most importantly, check for a Major Fitness discount code before completing your order and compare it with the brand's current deals and eligible discounts.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Why Check CouponsBit for Major Fitness Offers?</h3>
              <p>Finding a discount is easier when you don't have to search through multiple pages before every purchase.</p>
              <p>CouponsBit helps shoppers discover available coupon codes, promotional offers, deals, and discounts for brands they already plan to shop with. When you're preparing to invest in home gym equipment, checking the latest Major Fitness offers before checkout can give you another opportunity to identify an applicable promotion.</p>
              <p>Instead of assuming the first offer you see is the only one available, compare the current Major Fitness discount code with other eligible deals and choose the offer that matches your purchase requirements.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#056bfa] mb-4">Shop Major Fitness With a Discount Code</h3>
              <p>A home gym doesn't have to be built overnight. Whether you're starting with an adjustable bench and free weights or planning a complete setup around a Smith machine or power rack, Major Fitness offers equipment for different training styles and spaces.</p>
              <p>Before you check out, take a few moments to look for a current Major Fitness discount code, compare it with available deals, and review the promotion's terms. A little research before a major equipment purchase can help you make a more informed shopping decision while building the home gym you actually want.</p>
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
        <div className="faq-section mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            FAQs About Major Fitness Discount Codes
          </h3>
          {[
            { q: "Does Major Fitness offer discount codes?", a: "Major Fitness offers promotions and discounts from time to time. Available offers can vary, so check for a current discount code and compare it with the brand's active deals before checkout." },
            { q: "Can I use a Major Fitness discount code on all products?", a: "Not necessarily. Discount codes can have individual terms, exclusions, or product restrictions. Always review the conditions associated with the specific offer." },
            { q: "Does Major Fitness offer student discounts?", a: "Major Fitness currently highlights an education discount program. Eligibility and terms can change, so students should check the current requirements before purchasing." },
            { q: "Does Major Fitness offer military or first-responder discounts?", a: "Yes. Major Fitness currently lists discount programs for military personnel and first responders, subject to applicable requirements." },
            { q: "What equipment does Major Fitness sell?", a: "Major Fitness sells a broad range of home gym equipment, including Smith machines, power racks, benches, barbells, dumbbells, weight plates, specialty machines, attachments, and fitness accessories." },
            { q: "Is Major Fitness good for a small home gym?", a: "Major Fitness offers space-conscious equipment, including folding and wall-mounted systems. The right choice depends on your available space, workout goals, ceiling height, and the amount of equipment you want to include." },
            { q: "How can I find Major Fitness deals?", a: "Check the brand's current promotions, sale sections, eligible discount programs, and available Major Fitness discount codes before placing an order. Comparing these options can help you identify the offer that works for your purchase." }
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
            Popular Major Fitness Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Major Fitness Discount Code",
              "Smith Machine Deals",
              "Power Rack Discounts",
              "Military & First Responder",
              "Student Discount Program",
              "Home Gym Equipment",
              "Weight Plates & Barbells",
              "Clearance & Special Offers"
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
            Today's Top Major Fitness Deals
          </h3>
          <div className="space-y-6">
            {[
              { heading: "DEAL OF THE WEEK", sub: "Save Up to $380 OFF Smith Machines" },
              { heading: "EXCLUSIVE SAVINGS", sub: "Extra 5% OFF for Students & Frontline Staff" },
              { heading: "WELCOME OFFER", sub: "$50 OFF Orders Over $500 w/ Email Sign-Up" },
              { heading: "FREE SHIPPING", sub: "Free Standard Shipping Available Sitewide" }
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
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Shop Major Fitness: ${deal.heading}`}
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
