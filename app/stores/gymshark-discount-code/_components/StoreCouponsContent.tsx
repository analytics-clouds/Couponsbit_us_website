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
  ShieldCheck,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  LayoutGrid,
  Search,
  Truck,
  Shirt,
  Dumbbell,
  Zap,
  Gift,
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
  { name: "Nike", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787050069/nike-logo_loaadj.webp", dealText: "Up To 60% OFF", href: "/stores/nike-discount-code" },
  { name: "Adidas", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1788783181/adidas-logo_brulmo.webp", dealText: "Up To 50% OFF", href: "/stores/adidas-promo-code" },
  { name: "Wiskii", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784699426/wishki-logo_qveoyb.webp", dealText: "Up To 60% OFF", href: "/stores/wiskii-discount-code" },
  { name: "Halara", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789535819/halara_coupon_code_ujuwnv.webp", dealText: "Up To 80% OFF", href: "/stores/halara-coupon-code" },
  { name: "HOKA", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789994531/hoka-logo_zrq4ot.webp", dealText: "Up To 50% OFF", href: "/stores/hoka-coupon-code" },
  { name: "Lulus", logo: "https://res.cloudinary.com/couponsbit/image/upload/v1789994531/lulus-logo_pl1byq.webp", dealText: "Up To 80% OFF", href: "/stores/lulus-promo-code" },
];

const STORE_URL = "https://www.gymshark.com";

export default function GymsharkCouponsContent() {
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
              <span className="text-black font-extrabold">Gymshark</span>
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
                      <Image src="https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1792648467/gymshark-logo_hvljlf.webp" alt="Gymshark" width={112} height={112} sizes="112px" className="w-full h-full object-contain" fetchPriority="high" />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Gymshark Discount Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-40" />
                      </div>
                      <span className="text-black font-black text-sm">4.6</span>
                      <span className="text-gray-600 font-bold text-sm">(9.4k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Save more with the latest Gymshark Discount Code offers and verified Gymshark Promo Code deals. Shop activewear up to 50% OFF — grab the Lift Seamless Jacket for just $37.50 or the Soft Sculpt Sports Bra for $25. Score Apex Seamless Leggings at $54 (40% off) and women's joggers up to 40% off. New arrivals start at $12. Students save 15%, new users get 10% off their first order. Millions trust Gymshark for premium gym wear at unbeatable prices.
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
                    { icon: Tag, val: "18", label: "Offers" },
                    { icon: Percent, val: "60+", label: "Deals" },
                    { icon: Users, val: "2M+", label: "Shoppers" },
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
                      <div className="w-full h-full bg-[#f8f8f8] flex items-center justify-center">
                        <Image src="https://res.cloudinary.com/couponsbit/image/upload/v1793089136/74_sw7o7o.webp" alt="Gymshark Discount Code" width={800} height={350} className="w-full h-full bg-[#f8f8f8]" fetchPriority="high" />
                      </div>
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
                  <h2 className="text-2xl font-black text-black leading-tight">Gymshark Discount Codes & Offers</h2>
                </div>

                {[
                  { label: "EXTRA", value: "15% OFF", title: "Gymshark Discount Code – Extra 15% OFF for Students", desc: "Students can enjoy an extra 15% discount on eligible Gymshark purchases.", bullets: ["Save more on workout clothing, gym essentials, and performance apparel.", "Refresh your fitness wardrobe with styles designed for training and everyday wear.", "Check the student discount eligibility and terms to make the most of this Gymshark offer."] },
                  { label: "50%", value: "OFF", title: "Gymshark Discount Code – Last Chance Lift Seamless Zip Up Jacket – 50% OFF", desc: "Get the Lift Seamless Zip Up Jacket in Black/Black Mari for just $37.50 instead of $75.", bullets: ["Save 50% on this selected Gymshark jacket before it leaves the collection.", "Add a versatile layer to your gym wardrobe for warm-ups and everyday styling.", "Shop this last-chance deal while stock lasts, as the featured style will not be restocked."] },
                  { label: "50%", value: "OFF", title: "Gymshark Discount Code – Soft Sculpt V-Neck Sports Bra – 50% OFF", desc: "Shop the Soft Sculpt V-Neck Sports Bra in Light Support, Heavy Blue for $25 instead of $50.", bullets: ["Enjoy 50% OFF and save $25 on this selected sports bra.", "Refresh your workout wardrobe with a stylish option for your training sessions.", "Grab this last-chance offer before the item sells out."] },
                  { label: "40%", value: "OFF", title: "Gymshark Discount Code – Apex Seamless Leggings – 40% OFF", desc: "Get Apex Seamless Leggings in Black/Graphite Grey for $54 instead of $90.", bullets: ["Save 40% and enjoy a $36 discount on these selected leggings.", "Add a versatile pair of leggings to your gym and activewear collection.", "Shop the last-chance sale while this style remains available."] },
                  { label: "40%", value: "OFF", title: "Gymshark Discount Code – Collegiate Graphic Crew Neck Pullover – 40% OFF", desc: "Buy the Collegiate Graphic Crew Neck Pullover in Black/Pebble Grey for $45 instead of $75.", bullets: ["Save 40% and get $30 off this oversized-fit pullover.", "Pair this casual layer with leggings, joggers, or your favourite everyday outfits.", "Shop this last-chance Gymshark deal before the selected style is gone."] },
                  { label: "ONLY", value: "$55", title: "Gymshark Discount Code – Whitney Simmons x Gymshark Adapt Solid Sports Bra", desc: "Discover the Adapt Solid Sports Bra from the Whitney Simmons x Gymshark collection for $55.", bullets: ["Explore a light-support sports bra designed for your activewear wardrobe.", "Pair it with your favourite Gymshark leggings or shorts for a coordinated look.", "Shop this featured collection and check for any eligible Gymshark discount codes."] },
                  { label: "ONLY", value: "$55", title: "Gymshark Discount Code – Lift Seamless Tank with Shelf", desc: "Get the Lift Seamless Tank with Shelf for $55.", bullets: ["Explore a tank top featuring a built-in bra shelf for a streamlined workout look.", "Add this versatile piece to your gym wardrobe for training and active days.", "Check current Gymshark discount code offers for eligible savings on your purchase."] },
                  { label: "40%", value: "OFF", title: "Gymshark Discount Code – Women's Joggers – 40% OFF", desc: "Save 40% on selected women's joggers at Gymshark.", bullets: ["Find comfortable styles for gym sessions, warm-ups, and casual everyday wear.", "Refresh your activewear collection with versatile joggers at discounted prices.", "Browse eligible styles and check the latest Gymshark discount code offers."] },
                  { label: "10%", value: "OFF", title: "Gymshark Discount Code – New User Offer – 10% OFF", desc: "Enjoy 10% OFF your first order with the Gymshark new-user offer.", bullets: ["Shop selected gym clothing, workout essentials, and activewear favourites.", "Save on your first purchase when you meet the offer's eligibility requirements.", "Check the latest Gymshark discount code terms before placing your order."] },
                  { label: "40%", value: "OFF", title: "Gymshark Discount Code – Sweatpants – 40% OFF", desc: "Get 40% OFF selected Gymshark sweatpants.", bullets: ["Explore comfortable bottoms for workouts, rest days, and relaxed everyday outfits.", "Choose from eligible styles and enjoy savings on your activewear essentials.", "Shop the sale and check whether additional Gymshark discount codes can be applied."] },
                  { label: "40%", value: "OFF", title: "Gymshark Discount Code – Women's Black Leggings – 40% OFF", desc: "Save 40% on selected women's black leggings at Gymshark.", bullets: ["Discover versatile black activewear to pair with sports bras, tanks, and workout tops.", "Find styles suitable for training sessions and everyday fitness outfits.", "Shop eligible leggings and check current Gymshark discount code offers for extra savings."] },
                  { label: "10%", value: "OFF", title: "Gymshark Discount Code – Signup Offer – 10% OFF", desc: "Sign up to access the advertised 10% discount on eligible orders.", bullets: ["Explore Gymshark's range of training clothes, activewear, and gym accessories.", "Enjoy potential savings on your selected products through the signup offer.", "Review the offer terms and discount code requirements before checkout."] },
                  { label: "15%", value: "OFF", title: "Gymshark Discount Code – Student Discount – 15% OFF", desc: "Eligible students can save 15% on qualifying Gymshark purchases.", bullets: ["Shop activewear essentials, training tops, leggings, and other gym favourites.", "Make your student budget go further with a discount on eligible products.", "Verify your student status and review the offer conditions before using the discount."] },
                  { label: "10%", value: "OFF", title: "Gymshark Discount Code – Student Offer – 10% OFF Sitewide", desc: "Get the advertised 10% student discount on eligible sitewide orders.", bullets: ["Explore a wide range of Gymshark clothing and workout essentials.", "Save on qualifying products for training, fitness, and everyday wear.", "Check student verification requirements and current terms before checkout."] },
                  { label: "FROM", value: "$12", title: "Gymshark Discount Code – New Arrivals – Prices Starting at $12", desc: "Discover Gymshark new arrivals with prices starting at $12.", bullets: ["Explore fresh activewear styles and update your gym wardrobe.", "Find new pieces for training, workouts, and casual everyday outfits.", "Browse available products and check for applicable Gymshark discount codes."] },
                  { label: "30%", value: "OFF", title: "Gymshark Discount Code – Men's Shorts – 30% OFF", desc: "Save 30% on selected men's shorts at Gymshark.", bullets: ["Explore activewear styles for gym training, exercise, and casual wear.", "Find versatile shorts to pair with your favourite workout tops.", "Shop eligible styles and check the latest Gymshark discount code offers for additional savings."] },
                  { label: "UP TO", value: "40% OFF", title: "Gymshark Discount Code – Accessories Sale – Up to 40% OFF", desc: "Enjoy up to 40% OFF selected Gymshark accessories.", bullets: ["Explore workout add-ons and fitness essentials at reduced prices.", "Find practical accessories to complement your training wardrobe.", "Shop the accessories sale and check the offer terms for eligible additional discounts."] },
                  { label: "FROM", value: "$36", title: "Gymshark Discount Code – Men's Sweatsuits – Prices Starting at $36", desc: "Shop selected men's sweatsuits with prices starting at $36.", bullets: ["Discover coordinated styles for warm-ups, rest days, and casual outings.", "Update your everyday wardrobe with comfortable matching pieces.", "Browse available options and check for current Gymshark discount code offers."] },
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
                            <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" aria-label={`Shop Gymshark: ${c.title}`} className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
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
                  <h3 className="text-black font-black text-lg mb-6">What Is Gymshark?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Gymshark is a fitness apparel and accessories brand founded in 2012. Built around training and gym culture, it creates performance-focused clothing for men and women, combining functional fabrics with modern fits. Its collections cover weight training, <Link href="/stores/hoka-coupon-code" className="text-[#056bfa] hover:underline">running</Link>, studio workouts and everyday athleisure. 

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    From supportive leggings to training shorts and comfortable hoodies, Gymshark caters to people who want clothing that can keep up with their workouts while fitting into their <Link href="/stores/lulus-promo-code" className="text-[#056bfa] hover:underline">everyday wardrobes</Link>.

                  </p>
                  
                  <a href={STORE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                   <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                   <div className="space-y-1">
                      {[
                        { icon: Dumbbell, name: "Gym Wear", count: "40+", color: "text-blue-500", href: "/categories/fashion" },
                        { icon: Shirt, name: "Hoodies & Tops", count: "30+", color: "text-purple-500", href: "/categories/fashion" },
                        { icon: Zap, name: "Leggings & Shorts", count: "25+", color: "text-pink-500", href: "/categories/fashion" },
                        { icon: Truck, name: "Free Shipping", count: "20+", color: "text-teal-500", href: "/categories/fashion" },
                        { icon: Search, name: "New Arrivals", count: "10+", color: "text-orange-500", href: "/categories/fashion" },
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
    Shop Gymshark's Popular Collections
  </h3>
  <div className="space-y-6">
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Leggings and sports bras:</strong> Explore workout essentials in different fits and support levels for lifting, running, Pilates and other training sessions.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Men's training clothes:</strong> Browse gym T-shirts, tank tops, shorts, joggers and performance-focused tops.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Seamless activewear:</strong> Discover collections designed for movement, with body-contouring fits and versatile workout staples.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Hoodies and sweatpants:</strong> Add comfortable layers for warm-ups, travel and rest days.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Running apparel:</strong> Find clothing designed for running sessions, from breathable tops to running shorts and tights.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Accessories and basics:</strong> Complete your gym bag with practical training essentials and everyday staples.</span>
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
          Gymshark Discount Code, Promo Codes & Activewear Deals
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
          "Gymshark Student Discount Offer",
          "Extra 15% OFF",
          "Verified Students",
          "Requires student status verification. Extra savings on eligible activewear and gym essentials.",
          "Qualifying Gymshark Purchases"
        ],
        [
          "Lift Seamless Zip Up Jacket Sale",
          "50% OFF ($37.50)",
          "All Users",
          "Reduced from $75 original price. Last-chance deal in Black/Black Mari; will not be restocked.",
          "Lift Seamless Zip Up Jacket"
        ],
        [
          "Soft Sculpt V-Neck Sports Bra Sale",
          "50% OFF ($25)",
          "All Users",
          "Reduced from $50 original price (Save $25) in Light Support, Heavy Blue while stock lasts.",
          "Soft Sculpt V-Neck Sports Bra"
        ],
        [
          "Apex Seamless Leggings Sale",
          "40% OFF ($54)",
          "All Users",
          "Reduced from $90 original price (Save $36) in Black/Graphite Grey. Last-chance sale.",
          "Apex Seamless Leggings"
        ],
        [
          "Collegiate Graphic Crew Neck Pullover",
          "40% OFF ($45)",
          "All Users",
          "Reduced from $75 original price (Save $30) in Black/Pebble Grey. Oversized fit.",
          "Collegiate Graphic Pullover"
        ],
        [
          "Whitney Simmons x Gymshark Adapt Bra",
          "$55",
          "All Users",
          "Featured collection light-support sports bra designed for workout and activewear.",
          "Adapt Solid Sports Bra"
        ],
        [
          "Lift Seamless Tank with Shelf",
          "$55",
          "All Users",
          "Includes built-in bra shelf for a streamlined workout fit.",
          "Lift Seamless Tank Top"
        ],
        [
          "Gymshark Women's Joggers Sale",
          "40% OFF",
          "All Users",
          "Price reduction on selected women's joggers for workout and casual wear.",
          "Selected Women's Joggers"
        ],
        [
          "Gymshark New User Discount",
          "10% OFF",
          "New Users",
          "Applies to first order upon meeting eligibility requirements at checkout.",
          "First Eligible Purchase"
        ],
        [
          "Gymshark Sweatpants Sale",
          "40% OFF",
          "All Users",
          "Savings on selected sweatpants for workouts, rest days, and casual wear.",
          "Selected Sweatpants"
        ],
        [
          "Gymshark Women's Black Leggings Sale",
          "40% OFF",
          "All Users",
          "Discounted pricing on selected women's black leggings styles.",
          "Selected Black Leggings"
        ],
        [
          "Gymshark Signup Offer",
          "10% OFF",
          "New Subscribers",
          "Sign up to receive the advertised discount on eligible training clothes and activewear.",
          "Eligible Orders"
        ],
        [
          "Gymshark Student Verification Offer",
          "15% OFF",
          "Verified Students",
          "Verified students get 15% off qualifying gym favourites and activewear essentials.",
          "Qualifying Purchases"
        ],
        [
          "Gymshark Sitewide Student Offer",
          "10% OFF",
          "Verified Students",
          "Advertised 10% student discount across eligible sitewide orders upon verification.",
          "Sitewide Eligible Orders"
        ],
        [
          "Gymshark New Arrivals",
          "From $12",
          "All Users",
          "Fresh activewear arrivals and workout essentials starting at budget-friendly prices.",
          "New Arrivals Collection"
        ],
        [
          "Gymshark Men's Shorts Sale",
          "30% OFF",
          "All Users",
          "Savings on selected men's shorts styles for gym, training, and casual wear.",
          "Selected Men's Shorts"
        ],
        [
          "Gymshark Accessories Sale",
          "Up to 40% OFF",
          "All Users",
          "Discounted prices on selected fitness add-ons, gym bags, and active accessories.",
          "Selected Gym Accessories"
        ],
        [
          "Gymshark Men's Sweatsuits Offer",
          "From $36",
          "All Users",
          "Coordinated men's sweatsuit sets and matching pieces starting at $36.",
          "Selected Men's Sweatsuits"
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
            Your workout wardrobe should work as hard as you do. Whether you're chasing a new personal best, building a consistent gym routine or finding activewear that looks just as good outside the gym, Gymshark has options for different training styles. Before refreshing your collection, check CouponsBit for a Gymshark discount code and available deals to make your next activewear purchase better value.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Find a Gymshark Discount Code on CouponsBit
          </h3>
          <p>
            Looking for a way to spend less on your next gymwear haul? Browse CouponsBit for a Gymshark discount code, promo code or current sale offer before checking out. Promotions can vary by country, product and eligibility, so review each offer's terms before using it.
          </p>
          <p>
            Gymshark also offers a newsletter discount for eligible first-time customers and regional discounts for certain groups. Its official support page lists student offers in selected markets, a UK youth discount, a Blue Light Card discount in the UK, and eligible athlete codes. Availability and terms vary, so check the official discount guidance for your location.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Use a Gymshark Promo Code
          </h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Visit CouponsBit and browse the available Gymshark discount offers.</li>
            <li>Select a code and check its expiry date, eligibility and exclusions.</li>
            <li>Visit Gymshark's official store for your region and add your chosen items to your cart.</li>
            <li>Enter the code in the discount field at checkout, if required.</li>
            <li>Confirm the discount appears in your order total before completing the purchase.</li>
          </ol>
          <p>
            If your code doesn't work, check that you're shopping on the correct regional website, entering the code accurately and meeting any offer requirements. Gymshark states that only one discount code can be used per order, and many codes don't apply to sale items.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            When to Look for Gymshark Deals
          </h3>
          <p>
            Keep an eye on seasonal promotions, limited-time sales, new collection launches and end-of-season offers. If you regularly shop with Gymshark, joining its newsletter can help you hear about promotions and new product drops. Eligible shoppers may also benefit from verified student or other regional discount programmes. Always check the terms rather than assuming offers can be combined.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Get More From Your Gymshark Shopping
          </h3>
          <p>
            From everyday gym basics to training-ready outfits, choose pieces that suit your routine, fit and preferred activities. Before placing your order, visit CouponsBit to look for a Gymshark discount code, promo code and current deals. Compare eligible offers, read the conditions and find activewear that fits both your training goals and your budget.
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
            FAQs About Gymshark Discount Codes
          </h3>
          {[
            {
              q: "Does Gymshark offer discount codes?",
              a: "Yes. Gymshark offers selected promotions, newsletter discounts and certain regional or eligibility-based discounts. Availability changes, so check CouponsBit and Gymshark's official terms."
            },
            {
              q: "Can I use more than one Gymshark code?",
              a: "Gymshark states that discount codes cannot be stacked; only one code can be used per order."
            },
            {
              q: "Does Gymshark offer student discounts?",
              a: "Gymshark lists student discounts through verification partners in selected markets. Check the current programme and eligibility requirements for your country."
            },
            {
              q: "Can I use a discount code on sale items?",
              a: "Many Gymshark codes exclude sale items. Review the offer conditions before checking out."
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
            Popular Gymshark Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Gymshark Discount Code",
              "Activewear Deals",
              "Student Discount",
              "Blue Light Card Offer",
              "Gym Leggings Sale",
              "Newsletter Discount",
              "Athlete Codes",
              "Free Delivery Offers"
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
            Today's Top Gymshark Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "NEWSLETTER DISCOUNT",
                sub: "Save on your first order when you sign up",
              },
              {
                heading: "STUDENT & YOUTH",
                sub: "Exclusive discount for verified students",
              },
              {
                heading: "BLUE LIGHT CARD",
                sub: "Special savings for UK key workers",
              },
              {
                heading: "OUTLET & SALE",
                sub: "Save on selected activewear collections",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  G
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
                  aria-label={`Shop Gymshark: ${deal.heading}`}
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
