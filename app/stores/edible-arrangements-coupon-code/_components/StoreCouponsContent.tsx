"use client";

import React, { useState, useEffect } from "react";
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
  Copy,
  ChevronDown,
  MapPin,
  Globe,
  CheckCircle,
  Plane,
  Tv,
  Code,
  LayoutGrid,
  Zap,
  Laptop,
  Compass,
  Wifi,
  Package,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

interface Coupon {
  id: string;
  discount: string;
  label: string;
  badge?: "Best Offer" | "Popular" | "Trending";
  title: string;
  heading: string;
  sub: string;
  description: string;
  usedCount: string;
  expiresIn: string;
  code: string;
}

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const COUPONS: Coupon[] = [
  {
    id: "c1",
    discount: "$15",
    label: "SAVE",
    title: "Save $15 on Key Lime Cheesecake & Chocolate Dipped Fruit Box",
    heading: "Save $15",
    sub: "FRUIT BOX",
    description: "Surprise someone special with the Key Lime Cheesecake & Chocolate Dipped Fruit Box for just $29.99, down from $44.99. Eligible orders can arrive with 1-hour delivery.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
  {
    id: "c2",
    discount: "$20",
    label: "SAVE",
    title: "Save $20 on Key Lime Meet Sunshine Fruit Platter",
    heading: "Save $20",
    sub: "FRUIT PLATTER",
    description: "Add some brightness to any party with the fresh Key Lime Meet Sunshine Fruit Platter, just $34.99, down from $54.99. 1-hour delivery is offered at participating locations.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
  {
    id: "c3",
    discount: "$25",
    label: "SAVE",
    title: "Save $25 on Best of the Bake Key Lime Cheesecake Platter",
    heading: "Save $25",
    sub: "BAKE PLATTER",
    description: "Treat your guests to the Best of the Bake Key Lime Cheesecake Platter for just $49.99, down from $74.99. Features rich key lime cheesecake and an assortment of sweet treats.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
  {
    id: "c4",
    discount: "$31.98",
    label: "FROM",
    title: "Gift Bundles Starting at $31.98 at Edible Arrangements",
    heading: "From $31.98",
    sub: "GIFT BUNDLES",
    description: "Mark life's special moments with a gift bundle that includes a fruit bouquet, a cupcake, and a balloon, starting at just $31.98. Pick from six sizes to match any occasion.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
  {
    id: "c5",
    discount: "15%",
    label: "UNLOCK",
    title: "Unlock 15% Off Your Edible Arrangements Order",
    heading: "Unlock 15% OFF",
    sub: "OFF ORDER",
    description: "Add more to your cart at checkout and save even more — spend $50 more to unlock 15% off your eligible Edible Arrangements order. Stack with select seasonal gift collections.",
    usedCount: "0",
    expiresIn: "TBD",
    code: "",
  },
];

const RELATED_STORES: StoreItem[] = [
  { name: "Amazon", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp", dealText: "Up To 52% OFF", href: "/stores/amazon-discount-code" },
  { name: "Etsy", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787205138/etsy-logo_rpfkzs.webp", dealText: "Up To 75% OFF", href: "/stores/etsy-coupon-code" },
  { name: "Target", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787124413/target-logo_ycjzpz.webp", dealText: "Save Up To $100", href: "/stores/target-discount-code" },
  { name: "Walmart", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787037375/walamrt-logo_upfxvc.webp", dealText: "Up To 65% OFF", href: "/stores/walmart-promo-code" },
  { name: "Home Depot", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1787295216/home-depot-logo_aipbiv.webp", dealText: "Up To $350 Extra OFF", href: "/stores/home-depot-discount-code" },
  { name: "Snapfish", logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1793338496/snapfist-logo_vvb7cq.webp", dealText: "Up To 75% OFF", href: "/stores/snapfish-coupon-codes" },
];

export default function EdibleArrangementsCouponsContent() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastCode, setToastCode] = useState("");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [openCard, setOpenCard] = useState<Record<string, boolean>>({});

  const toggleDetails = (id: string) => setOpenCard((prev) => ({ ...prev, [id]: !prev[id] }));

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setToastCode(code);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

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
        {/* Section 1: Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#056bfa] hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">Stores</Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">Edible Arrangements</span>
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
                  <a href="https://www.ediblearrangements.com" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image
                        src="https://res.cloudinary.com/couponsbit/image/upload/v1793338496/edible_arrangements_logo_hcpsvl.webp"
                        alt="Edible Arrangements"
                        width={112}
                        height={112}
                        sizes="112px"
                        className="w-full h-full object-contain"
                        fetchPriority="high"
                      />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">Edible Arrangements Coupon Code</h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-60" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">(14.2k Ratings)</span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Find the latest Edible Arrangements discount code and Edible Arrangements promo code for October 2026 to save on fresh fruit gifts, gourmet desserts, and celebration bundles. Enjoy 30% OFF selected gift collections, 15% OFF eligible orders over $50, Key Lime Cheesecake & Chocolate Dipped Fruit Boxes from $29.99, and gift bundles starting at $31.98 with 1-hour delivery at participating locations. Apply a verified Edible Arrangements discount code or promo code at checkout to maximize your savings on every order.
                    </p>
                    <a
                      href="https://www.ediblearrangements.com"
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
                    { icon: Tag, val: "5", label: "Coupons" },
                    { icon: Percent, val: "5", label: "Deals" },
                    { icon: Users, val: "5M+", label: "Shoppers" },
                    { icon: BadgeCheck, val: "100%", label: "Verified" },
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

              {/* Right: Banner Slider */}
              <div className="hidden md:block flex-1">
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg group">
                  {[0, 1, 2].map((idx) => (
                    <div
                      key={idx}
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{ opacity: activeSlide === idx ? 1 : 0 }}
                    >
                      <a href="https://www.ediblearrangements.com" target="_blank" rel="nofollow noopener noreferrer" className="block w-full h-full">
                        <img
                          src="https://res.cloudinary.com/couponsbit/image/upload/v1793338496/edible_arrangements_logo_hcpsvl.webp"
                          alt="Edible Arrangements Coupon Code"
                          width={800}
                          height={350}
                          className="w-full h-full object-contain bg-[#f5f5f5]"
                          fetchPriority={idx === 0 ? "high" : undefined}
                          loading={idx === 0 ? undefined : "lazy"}
                        />
                      </a>
                    </div>
                  ))}

                  <button
                    onClick={() => setActiveSlide((prev) => (prev - 1 + 3) % 3)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-5 h-5 text-white rotate-180" />
                  </button>
                  <button
                    onClick={() => setActiveSlide((prev) => (prev + 1) % 3)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={cn("w-1.5 h-1.5 rounded-full transition-all", activeSlide === i ? "bg-white w-4" : "bg-white/40")}
                      />
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

        {/* Section 4: Coupons + Sidebar */}
        <section className="py-6 md:py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">

              {/* Left: Coupon Cards */}
              <div className="top-offers lg:w-[65%]">
            <div className="mb-10">
              <h2 className="text-2xl font-black text-black leading-tight">
                Edible Arrangements Coupon Codes & Offers
              </h2>
            </div>

            {/* Coupon 1 — Save $15 on Key Lime Cheesecake & Chocolate Dipped Fruit Box */}
            <div className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-row">
                  <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
                      <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$15</div>
                      <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">FRUIT BOX</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                        <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">
                        Edible Arrangements Discount Code: Save on the Key Lime Cheesecake & Chocolate Dipped Fruit Box
                      </h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">
                        Surprise someone special with a tasty dessert and fruit gift box for just $29.99.
                      </p>
                      <button type="button" onClick={() => toggleDetails("c1")} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                        View Details
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openCard["c1"] ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openCard["c1"] ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save $15 and pay $29.99 for the Key Lime Cheesecake & Chocolate Dipped Fruit Box, down from $44.99.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Eligible orders can arrive with 1-hour delivery.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Comes with creamy key lime cheesecake and hand-dipped chocolate-covered fruit.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A thoughtful gift for birthdays, celebrations, or last-minute surprises.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                      <a href="https://www.ediblearrangements.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Edible Arrangements deal" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon 2 — Save $20 on Key Lime Meet Sunshine Fruit Platter */}
            <div className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-row">
                  <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
                      <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$20</div>
                      <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">FRUIT PLATTER</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                        <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">
                        Edible Arrangements Discount Code: Save on the Key Lime Meet Sunshine Fruit Platter
                      </h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">
                        Add some brightness to any party with the fresh Key Lime Meet Sunshine Fruit Platter, just $34.99.
                      </p>
                      <button type="button" onClick={() => toggleDetails("c2")} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                        View Details
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openCard["c2"] ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openCard["c2"] ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save $20 and pay $34.99 instead of the regular $54.99.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>1-hour delivery is offered at participating locations.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Packed with fresh fruit that is easy to share with family and friends.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great for parties, office get-togethers, and weekend celebrations.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                      <a href="https://www.ediblearrangements.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Edible Arrangements deal" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon 3 — Save $25 on Best of the Bake Key Lime Cheesecake Platter */}
            <div className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-row">
                  <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE</p>
                      <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$25</div>
                      <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">BAKE PLATTER</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                        <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">
                        Edible Arrangements Promo Code: Save on the Best of the Bake Key Lime Cheesecake Platter
                      </h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">
                        Treat your guests to a sweet dessert spread with the Best of the Bake Key Lime Cheesecake Platter for just $49.99.
                      </p>
                      <button type="button" onClick={() => toggleDetails("c3")} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                        View Details
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openCard["c3"] ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openCard["c3"] ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save $25 and pay $49.99 instead of the regular $74.99.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>1-hour delivery makes gifting quick and easy.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Features an assortment of sweet treats, including rich key lime cheesecake.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A great centerpiece for holidays, birthdays, and family gatherings.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                      <a href="https://www.ediblearrangements.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Edible Arrangements deal" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon 4 — Gift Bundles Starting at $31.98 */}
            <div className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-row">
                  <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FROM</p>
                      <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">$31.98</div>
                      <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">GIFT BUNDLES</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                        <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">
                        Edible Arrangements Promo Code: Gift Bundles Starting at $31.98
                      </h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">
                        Mark life's special moments with a gift bundle that includes a fruit bouquet, a cupcake, and a balloon, starting at $31.98.
                      </p>
                      <button type="button" onClick={() => toggleDetails("c4")} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                        View Details
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openCard["c4"] ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openCard["c4"] ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Bundles start at just $31.98.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Pick from six sizes to match any occasion.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Each bundle has fresh fruit, a tasty cupcake, and a festive balloon.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>An easy gift idea for birthdays, congratulations, or a simple thank-you.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                      <a href="https://www.ediblearrangements.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Edible Arrangements deal" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon 5 — Unlock 15% Off Your Order */}
            <div className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-row">
                  <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">UNLOCK</p>
                      <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">15%</div>
                      <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">OFF ORDER</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                        <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">
                        Edible Arrangements Discount Deals: Unlock 15% Off Your Order
                      </h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">
                        Add more to your cart at checkout and save even more.
                      </p>
                      <button type="button" onClick={() => toggleDetails("c5")} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                        View Details
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openCard["c5"] ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openCard["c5"] ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Spend $50 more to unlock 15% off your eligible order.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Stack the extra savings with select seasonal gift collections.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Browse fruit arrangements, desserts, chocolate treats, and gift bundles.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A smart way to get more value when sending gifts to family or friends.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                      <a href="https://www.ediblearrangements.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Edible Arrangements deal" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon 6 — Enjoy Fast 1-Hour Delivery */}
            <div className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-row">
                  <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">FAST</p>
                      <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">1-HR</div>
                      <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">DELIVERY</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                        <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">
                        Edible Arrangements Discount Deals: Enjoy Fast 1-Hour Delivery
                      </h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">
                        Get fresh gifts to the door fast with same-day delivery options.
                      </p>
                      <button type="button" onClick={() => toggleDetails("c6")} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                        View Details
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openCard["c6"] ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openCard["c6"] ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Select arrangements can be delivered within 1 hour.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Ideal for last-minute birthdays, anniversaries, and celebrations.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Fresh fruit gifts arrive nicely arranged and ready to enjoy.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A handy choice when you need a thoughtful gift in a hurry.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                      <a href="https://www.ediblearrangements.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Edible Arrangements deal" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon 7 — Save on Fresh Fruit Gifts & Desserts */}
            <div className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-row">
                  <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SPECIAL</p>
                      <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">DEALS</div>
                      <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">FRUIT & DESSERTS</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                        <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">
                        Edible Arrangements Sale: Save on Fresh Fruit Gifts & Desserts
                      </h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">
                        Find limited-time deals on handcrafted fruit arrangements and gourmet desserts.
                      </p>
                      <button type="button" onClick={() => toggleDetails("c7")} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                        View Details
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openCard["c7"] ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openCard["c7"] ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Shop marked-down fruit boxes, platters, cheesecakes, and gift bundles.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Enjoy high-quality fruit paired with delicious sweet treats.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Find gifts for birthdays, holidays, thank-yous, and other special occasions.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Great for sharing with family, friends, or coworkers.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                      <a href="https://www.ediblearrangements.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Edible Arrangements deal" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon 8 — Shop Seasonal Favorites for Less */}
            <div className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-row">
                  <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE ON</p>
                      <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">SEASONAL</div>
                      <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">FAVORITES</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                        <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">
                        Edible Arrangements Sale: Shop Seasonal Favorites for Less
                      </h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">
                        Mark every occasion with seasonal gifts and limited-time online deals.
                      </p>
                      <button type="button" onClick={() => toggleDetails("c8")} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                        View Details
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openCard["c8"] ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openCard["c8"] ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Browse special savings on popular seasonal gift collections.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Pick from fruit platters, chocolate-dipped treats, and bakery favorites.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Choose delivery or pickup at participating locations.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A great way to surprise loved ones without overspending.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                      <a href="https://www.ediblearrangements.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Edible Arrangements deal" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon 9 — Save on Gourmet Gift Collections */}
            <div className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-row">
                  <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SAVE ON</p>
                      <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">GOURMET</div>
                      <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">GIFTS</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                        <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">
                        Edible Arrangements Discount Offers: Save on Gourmet Gift Collections
                      </h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">
                        Discover fresh fruit gifts and handcrafted treats at special prices for a limited time.
                      </p>
                      <button type="button" onClick={() => toggleDetails("c9")} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                        View Details
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openCard["c9"] ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openCard["c9"] ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Save across fruit arrangements, desserts, and celebration gifts.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Customize your order with balloons, sweets, and thoughtful add-ons.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Send a memorable gift with easy local delivery options.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Perfect for birthdays, holidays, anniversaries, and everyday celebrations.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                      <a href="https://www.ediblearrangements.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Edible Arrangements deal" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon 10 — Send Sweet Gifts for Less */}
            <div className="w-full max-w-7xl mx-auto mb-6">
              <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="flex flex-row">
                  <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                    <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                    <div className="text-center px-1">
                      <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[8px] sm:text-[9px] font-semibold leading-3">SEND</p>
                      <div className="text-[18px] sm:text-4xl font-extrabold leading-none mt-2">SWEET</div>
                      <p className="text-[10px] sm:text-xs font-bold mt-2 uppercase">GIFTS</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                    <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Limited Time</span>
                        <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">Verified Deal</span>
                      </div>
                      <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">
                        Edible Arrangements Discount Offers: Send Sweet Gifts for Less
                      </h3>
                      <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">
                        Make any celebration special with tasty gifts at friendly prices.
                      </p>
                      <button type="button" onClick={() => toggleDetails("c10")} className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1">
                        View Details
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openCard["c10"] ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openCard["c10"] ? "max-h-[250px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                        <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Check out special offers on fresh fruit, chocolate treats, and desserts.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Order online for fast delivery or easy store pickup.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>Find gifts for every budget without giving up quality.</li>
                          <li className="flex items-start gap-2"><span className="text-[#0344b0]">•</span>A wonderful way to celebrate life's special moments and save more.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-[210px] flex flex-col items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                      <a href="https://www.ediblearrangements.com" target="_blank" rel="nofollow noopener noreferrer" aria-label="Get Edible Arrangements deal" className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block">Get Deal</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

                {/* About Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">What Is Edible Arrangements?</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Edible Arrangements is a gifting brand known for turning fresh fruit into visually appealing arrangements that resemble floral bouquets. Instead of traditional flowers or a standard box of chocolates, customers can send arrangements featuring fresh-cut fruit, chocolate-dipped strawberries, and other edible treats.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    The brand offers a variety of gifts for different occasions, including birthdays, anniversaries, graduations, congratulations, thank-you gestures, and seasonal celebrations. Depending on availability, shoppers may also find fruit boxes, chocolate-covered treats, dessert options, and gift bundles.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Edible Arrangements combines presentation with food, making its products suitable for people who want to send something distinctive. Its offerings can be especially useful when you need a gift for someone who enjoys fresh fruit alongside chocolate and other sweet treats.

                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Since products, delivery options, and availability may vary by location, check the details for your preferred arrangement before ordering.

                  </p>

                  
                  <a href="https://www.ediblearrangements.com" target="_blank" rel="nofollow noopener noreferrer" className="text-[#056bfa] font-black text-sm flex items-center gap-1.5 hover:underline decoration-2">
                    Visit Store <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Categories Card */}
                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">Top Categories</h3>
                  <div className="space-y-1">
                    {[
                      { icon: Plane,  name: "Travel",             count: "420+", color: "text-teal-500",   href: "/categories/travel" },
                      { icon: Laptop, name: "Electronics",        count: "850+", color: "text-blue-500",   href: "/categories/electronics" },
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

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
  <h3 className="text-black font-black text-lg mb-8">
    Find an Edible Arrangements Coupon Code on CouponsBit
  </h3>
  <div className="space-y-6">
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      An Edible Arrangements coupon code can help you look for savings on eligible gifts and orders. If you're buying a fruit bouquet for a loved one or arranging a surprise for a special occasion, checking promotional offers before checkout is a smart way to manage your gift budget.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      CouponsBit helps shoppers discover coupon codes, promo codes, and discounts for participating retailers. Visit CouponsBit to check the latest available Edible Arrangements offers and review their conditions before using one.
    </p>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      Here are some types of promotions worth looking for:
    </p>
    <div className="space-y-3 text-gray-500 font-medium text-sm leading-relaxed pl-2">
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Percentage-off discounts:</strong> Eligible promotions may reduce the price of qualifying purchases by a specified percentage.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Dollar-off coupon codes:</strong> Some offers may provide a fixed discount when an order meets the stated requirements.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Seasonal promotions:</strong> Look for special offers around Valentine's Day, Mother's Day, Christmas, and other gifting occasions.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Gift and product deals:</strong> Selected arrangements or treats may be included in limited-time promotions.</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="text-black font-black">•</span>
        <span><strong>Delivery offers:</strong> Check whether any available promotion applies to delivery charges or provides a delivery-related benefit.</span>
      </p>
    </div>
    <p className="text-gray-500 font-medium text-sm leading-relaxed">
      These are offer types to look out for, not a guarantee that every promotion is currently available. Always check the latest listings and applicable restrictions.
    </p>
  </div>
</div>

              </div>
            </div>
          </div>
        </section>

        {/* Section 5: More Stores */}
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

        {/* Section 6: SEO + FAQ */}
        <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

      {/* Main Content Area */}
      <div className="prose max-w-none text-justify">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Edible Arrangements Coupon Code: Save on Fresh Fruit Gifts
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
          "Key Lime Cheesecake & Chocolate Dipped Fruit Box",
          "Save $15 ($29.99)",
          "All Users",
          "Reduced from $44.99 regular price. Includes creamy key lime cheesecake and hand-dipped fruit. 1-hour delivery available.",
          "Cheesecake & Dipped Fruit Box"
        ],
        [
          "Key Lime Meet Sunshine Fruit Platter",
          "Save $20 ($34.99)",
          "All Users",
          "Reduced from $54.99 regular price. Fresh fruit platter for sharing; 1-hour delivery at participating locations.",
          "Key Lime Meet Sunshine Platter"
        ],
        [
          "Best of the Bake Key Lime Cheesecake Platter",
          "Save $25 ($49.99)",
          "All Users",
          "Reduced from $74.99 regular price. Sweet dessert spread with rich key lime cheesecake. 1-hour delivery option.",
          "Key Lime Cheesecake Platter"
        ],
        [
          "Edible Arrangements Gift Bundles",
          "From $31.98",
          "All Users",
          "Includes fruit bouquet, cupcake, and balloon. Choose from six sizes for different occasions.",
          "Select Gift Bundles"
        ],
        [
          "Edible Arrangements Cart Discount Offer",
          "15% OFF",
          "All Users",
          "Spend $50 more to unlock 15% off eligible orders. Stackable with select seasonal collections.",
          "Qualifying Orders"
        ],
        [
          "Edible Arrangements Express Delivery Service",
          "1-Hour Delivery",
          "All Users",
          "Available on select handcrafted arrangements and fresh fruit gifts for same-day delivery.",
          "Eligible Express Orders"
        ],
        [
          "Fresh Fruit Gifts & Desserts Sale",
          "Special Savings",
          "All Users",
          "Limited-time markdowns across fruit boxes, platters, cheesecakes, and bakery bundles.",
          "Fruit Arrangements & Desserts"
        ],
        [
          "Edible Arrangements Seasonal Favorites",
          "Special Savings",
          "All Users",
          "Online promotional prices on seasonal fruit platters, chocolate-dipped treats, and bakery items. Delivery or pickup.",
          "Seasonal Gift Collections"
        ],
        [
          "Gourmet Gift Collections Discount",
          "Special Pricing",
          "All Users",
          "Handcrafted fruit gifts and desserts with customizable balloons and sweet add-ons.",
          "Gourmet Gift Collections"
        ],
        [
          "Edible Arrangements Sweet Gifts Offer",
          "Special Pricing",
          "All Users",
          "Budget-friendly fresh fruit and chocolate treats available for fast local delivery or store pickup.",
          "Select Fruit & Dessert Gifts"
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
            Looking for an Edible Arrangements coupon code to save on a delicious gift? Whether you're celebrating a birthday, planning an anniversary surprise, sending a thank-you gift, or making a holiday extra special, Edible Arrangements offers creative arrangements made with fresh fruit, chocolate-dipped treats, and other sweet surprises. With the right coupon code or promotional offer, you can make your gift memorable while keeping your spending in check.
          </p>
          <p>
            At CouponsBit, you can explore available Edible Arrangements coupon codes, discounts, and deals to find savings on eligible orders. Before placing your order, compare current offers and review their terms to see which promotion works best for your purchase.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Popular Edible Arrangements Gifts to Consider
          </h3>
          <p>
            Choosing the right gift depends on the occasion, the recipient's preferences, and your budget. Here are some options worth exploring when shopping with Edible Arrangements.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            1. Fresh Fruit Arrangements
          </h4>
          <p>
            Fresh fruit arrangements are among the brand's signature offerings. They feature fruit cut into decorative shapes and arranged to create a bouquet-style presentation. These gifts can work well for birthdays, congratulations, and celebrations where you want something different from a traditional flower bouquet.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            2. Chocolate-Dipped Strawberries
          </h4>
          <p>
            Chocolate-dipped strawberries offer a combination of fresh fruit and a sweet coating. They can make a thoughtful gift for anniversaries, Valentine's Day, date nights, and other romantic occasions. Check the available varieties and quantities before ordering.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            3. Fruit Boxes and Fresh Fruit Gifts
          </h4>
          <p>
            If you prefer a simpler presentation, explore fruit boxes and other fresh fruit gifts where available. These can be suitable for family celebrations, thank-you gestures, or sending a gift to someone who enjoys fresh produce.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            4. Sweet Treats and Gift Bundles
          </h4>
          <p>
            Depending on the current menu, you may find chocolate-covered fruit, desserts, or combinations of different treats. Gift bundles can be convenient when you want to send more than one type of item in a single order.
          </p>

          <h4 className="text-lg font-black text-black mt-6 mb-2">
            5. Holiday and Seasonal Gifts
          </h4>
          <p>
            Edible Arrangements often caters to gifting occasions throughout the year. Seasonal collections can offer themed designs and gift ideas for holidays such as Valentine's Day, Mother's Day, Halloween, and Christmas. Product availability and designs may change throughout the year.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            How to Use an Edible Arrangements Coupon Code
          </h3>
          <p>
            Applying an Edible Arrangements coupon code is generally straightforward. Follow these steps when shopping online:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Visit CouponsBit:</strong> Browse the available Edible Arrangements coupon codes and promotional offers.</li>
            <li><strong>Choose an offer:</strong> Select a coupon code that matches your intended purchase and check its terms.</li>
            <li><strong>Shop for your gift:</strong> Visit the Edible Arrangements website and choose an eligible arrangement, fruit box, or treat.</li>
            <li><strong>Review your order:</strong> Confirm the product details, delivery address, delivery date, and any applicable fees.</li>
            <li><strong>Enter the coupon code:</strong> If the offer requires a code, enter it in the designated promotional-code field during checkout.</li>
            <li><strong>Verify the discount:</strong> Make sure the eligible savings appear in your order total before completing payment.</li>
          </ol>
          <p>
            Some promotions may apply automatically, while others require a code. If a coupon doesn't work, check its expiration date, minimum purchase requirements, product exclusions, and any restrictions on combining offers.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Tips to Save More at Edible Arrangements
          </h3>
          <p>
            Finding a coupon code is only one part of saving money. A few simple shopping habits can help you make a better decision when ordering gifts.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Compare available arrangements:</strong> Check different sizes and product combinations to find an option that suits your budget.</li>
            <li><strong>Check the minimum spend:</strong> If a promotion requires a minimum order value, calculate whether your purchase qualifies before adding extra items.</li>
            <li><strong>Look for seasonal deals:</strong> Special occasions can bring promotional offers, so check for relevant deals when planning ahead.</li>
            <li><strong>Review delivery costs:</strong> The final price may include delivery charges, taxes, or other applicable fees. Consider these before comparing offers.</li>
            <li><strong>Order ahead for special dates:</strong> Planning early can give you more time to explore product choices and delivery availability.</li>
            <li><strong>Read the coupon terms:</strong> Some codes may exclude particular products, locations, or delivery options.</li>
            <li><strong>Check CouponsBit before checkout:</strong> Explore available Edible Arrangements coupon codes to see whether an eligible offer can reduce your total.</li>
          </ul>
          <p>
            The best deal is the one that provides genuine savings on a gift you actually want to send. Avoid purchasing unnecessary extras simply to qualify for a promotion unless the overall value makes sense for your budget.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Edible Arrangements for Every Occasion
          </h3>
          <p>
            Edible gifts can make celebrations feel more personal, especially when you choose something that reflects the recipient's tastes.
          </p>
          <p>
            For birthdays, a colorful fruit arrangement can make a cheerful surprise. For anniversaries or Valentine's Day, chocolate-dipped strawberries may be a suitable choice. For workplace celebrations, congratulations, or thank-you gifts, fruit boxes and assorted treats can offer an alternative to conventional presents.
          </p>
          <p>
            You can also consider Edible Arrangements when sending a gift to friends or family who live in another part of the United States. Check local delivery availability, product selection, and the delivery date before placing your order.
          </p>
          <p>
            Whatever the occasion, comparing products and checking an Edible Arrangements coupon code on CouponsBit can help you shop more thoughtfully.
          </p>

          <h3 className="text-xl font-black text-black mt-8 mb-4">
            Why Check CouponsBit for Edible Arrangements Deals?
          </h3>
          <p>
            CouponsBit helps shoppers in the United States discover coupon codes, promo codes, and deals across different retailers. Instead of paying the listed price without checking for available promotions, you can explore relevant offers before completing your purchase.
          </p>
          <p>
            When looking for Edible Arrangements savings, CouponsBit can be a useful starting point for checking available discounts and understanding the conditions attached to each offer.
          </p>
          <p>
            Before using a coupon, confirm that it is valid for your order and that the discount appears at checkout. Promotions may change, and not every code will apply to every product or location.
          </p>
          <p>
            Make your next fruit gift more budget-friendly by exploring Edible Arrangements coupon codes on CouponsBit before you order.
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
            Frequently Asked Questions
          </h3>
          {[
            {
              q: "1. Where can I find an Edible Arrangements coupon code?",
              a: "You can check CouponsBit for available Edible Arrangements coupon codes and promotional offers. Review the listed terms, expiration dates, and eligibility requirements before using a code."
            },
            {
              q: "2. How do I use an Edible Arrangements promo code?",
              a: "Choose an eligible offer, shop for your preferred gift, and enter the coupon code in the promotional-code field at checkout if required. Confirm that the discount appears in your order total before paying."
            },
            {
              q: "3. Does Edible Arrangements offer discounts on fruit bouquets?",
              a: "Promotions may be available on selected products or during particular campaigns. Check the retailer's current offers and CouponsBit listings to see whether an eligible discount applies to your chosen fruit bouquet."
            },
            {
              q: "4. Can I find Edible Arrangements deals for Valentine's Day and Mother's Day?",
              a: "Seasonal promotions may be available around major gifting occasions, including Valentine's Day and Mother's Day. Check current offers and product availability as the occasion approaches."
            },
            {
              q: "5. Why isn't my Edible Arrangements coupon code working?",
              a: "A code may have expired or may require a minimum purchase, eligible product, or specific location. It may also be restricted from use with other offers. Review the terms and make sure you've entered the code correctly."
            },
            {
              q: "6. Can I use more than one Edible Arrangements coupon code?",
              a: "The ability to combine promotions depends on the retailer's current terms. Check the conditions of each offer and the checkout rules to determine whether multiple discounts can be used together."
            },
            {
              q: "7. Does Edible Arrangements deliver across the United States?",
              a: "Delivery availability depends on the destination and the products offered in that area. Enter your delivery location on the retailer's website to check available products and dates before placing an order."
            },
            {
              q: "8. How can I save on Edible Arrangements delivery?",
              a: "Check for current delivery-related promotions and review the full order total before paying. Delivery options, fees, and promotional eligibility may vary by location and order."
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
            Popular Edible Arrangements Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Edible Arrangements Coupon Code",
              "Fresh Fruit Gifts",
              "Chocolate Dipped Strawberries",
              "Fruit Bouquet Deals",
              "Valentine's Day Gifts",
              "Mother's Day Offers",
              "Same Day Delivery",
              "Birthday Fruit Baskets"
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
            Today's Top Edible Deals
          </h3>
          <div className="space-y-6">
            {[
              {
                heading: "FRESH FRUIT BOUQUETS",
                sub: "Save on signature decorative fruit arrangements",
              },
              {
                heading: "CHOCOLATE STRAWBERRIES",
                sub: "Special discounts on dipped strawberry boxes",
              },
              {
                heading: "SAME DAY DELIVERY",
                sub: "Check local eligibility for last-minute gifts",
              },
              {
                heading: "SEASONAL GIFT BUNDLES",
                sub: "Up to 20% off selected holiday treat bundles",
              },
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                  E
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
                  href="https://www.ediblearrangements.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`Shop Edible Arrangements: ${deal.heading}`}
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
