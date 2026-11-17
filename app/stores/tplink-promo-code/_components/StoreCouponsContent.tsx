"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Star,
  Users,
  Copy,
  Check,
  X,
  Tag,
  Percent,
  BadgeCheck,
  PiggyBank,
  RefreshCw,
  LayoutGrid,
  Router,
  Network,
  Gamepad2,
  Calculator,
  Video,
  Plug,
  Calendar,
  Package,
  Clock,
  Wifi,
  Home,
  Camera,
  Search,
  ShoppingBag,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { type Coupon, TPLINK_COUPONS } from "./offers";

interface StoreItem {
  name: string;
  logo: string;
  dealText: string;
  href: string;
}

const RELATED_STORES: StoreItem[] = [
  {
    name: "Geekbuying",
    logo: "https://res.cloudinary.com/couponsbit/image/upload/v1784707355/geekbuying-logo_pnkeev.webp",
    dealText: "Up To 56% OFF",
    href: "/stores/geekbuying-discount-code",
  },
  {
    name: "HP",
    logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782890859/hp-coupon-code_vaogna.webp",
    dealText: "Up to 69% OFF",
    href: "/stores/hp-discount-code",
  },
  {
    name: "Dell",
    logo: "https://res.cloudinary.com/couponsbit/image/upload/v1782890858/dell-coupon-code_mxtssy.webp",
    dealText: "Up to 69% OFF",
    href: "/stores/dell-discount-code",
  },
  {
    name: "Beelink",
    logo: "https://res.cloudinary.com/couponsbit/image/upload/v1783494081/beelink-coupon-code_gephnd.jpg",
    dealText: "Up to 35% OFF",
    href: "/stores/beelink-discount-code",
  },
  {
    name: "Apple",
    logo: "https://res.cloudinary.com/couponsbit/image/upload/v1787205138/apple-logo_vrakxu.webp",
    dealText: "Up To $150 Gift Card",
    href: "/stores/apple-discount-code",
  },
  {
    name: "Amazon",
    logo: "https://res.cloudinary.com/couponsbit/image/upload/f_auto,q_auto/v1786002074/amazon-logo_vt811s.webp",
    dealText: "Up To 52% OFF",
    href: "/stores/amazon-discount-code",
  },
];

const STORE_URL =
  "https://tplinksystemsinc.sjv.io/c/4303217/3280858/42255?subId1=1015";

export default function TplinkCouponsContent() {
  // Exactly 8 state variables per template spec
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<"all" | "codes" | "deals">("all");
  const [sortOrder, setSortOrder] = useState<"featured" | "discount">("featured");
  const [isReadMore, setIsReadMore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    code: string;
    affiliateUrl: string;
    title: string;
  }>({
    isOpen: false,
    code: "",
    affiliateUrl: "",
    title: "",
  });

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleOpenModal = (coupon: Coupon) => {
    if (coupon.code) {
      setModalData({
        isOpen: true,
        code: coupon.code,
        affiliateUrl: coupon.affiliateUrl,
        title: coupon.title,
      });
      navigator.clipboard.writeText(coupon.code);
      setCopiedId(coupon.id);
      setTimeout(() => setCopiedId(null), 2500);
      window.open(coupon.affiliateUrl, "_blank", "noopener,noreferrer");
    } else {
      window.open(coupon.affiliateUrl, "_blank", "noopener,noreferrer");
    }
  };

  const filteredCoupons = TPLINK_COUPONS.filter((coupon) => {
    if (filterType === "codes") return Boolean(coupon.code);
    if (filterType === "deals") return !coupon.code;
    return true;
  }).sort((a, b) => {
    if (sortOrder === "discount") {
      const aVal = parseInt(a.mainValue.replace(/[^0-9]/g, "")) || 0;
      const bVal = parseInt(b.mainValue.replace(/[^0-9]/g, "")) || 0;
      return bVal - aVal;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#056bfa] selection:text-white">
      {/* Code Modal Popup */}
      {modalData.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 text-center shadow-2xl">
            <button
              onClick={() => setModalData((prev) => ({ ...prev, isOpen: false }))}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 bg-[#e8f6f8] text-[#056bfa] rounded-2xl flex items-center justify-center mx-auto mb-4 font-black text-2xl">
              ✓
            </div>
            <h3 className="text-xl font-black text-black mb-2">Code Copied!</h3>
            <p className="text-gray-600 text-sm mb-6">{modalData.title}</p>
            <div className="flex items-center justify-between border-2 border-dashed border-[#056bfa] rounded-2xl p-3 bg-gray-50 mb-6">
              <span className="font-mono text-xl font-black text-[#056bfa] tracking-wider">
                {modalData.code}
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(modalData.code);
                  setCopiedId("modal");
                  setTimeout(() => setCopiedId(null), 2500);
                }}
                className="bg-[#056bfa] text-white p-2.5 rounded-xl hover:bg-[#005f91] transition-colors"
              >
                {copiedId === "modal" ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <a
              href={modalData.affiliateUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="w-full inline-block bg-[#056bfa] hover:bg-[#005f91] text-white font-bold py-3.5 rounded-2xl transition-colors text-center"
            >
              Go to Store & Redeem
            </a>
          </div>
        </div>
      )}

      <Navbar />

      <main>
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-7xl py-3.5">
            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="text-[#056bfa] hover:underline">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <Link href="/stores" className="text-[#056bfa] hover:underline">
                Stores
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-black font-extrabold">TP-Link</span>
            </nav>
          </div>
        </div>

        {/* Store Header */}
        <section className="bg-white py-4 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[45%]">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-0 md:mb-8">
                  <a
                    href={STORE_URL}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <div className="w-28 h-28 shrink-0 border-2 border-[#f0f0f0] rounded-2xl shadow-md flex items-center justify-center bg-white overflow-hidden">
                      <Image
                        src="https://res.cloudinary.com/couponsbit/image/upload/v1788248210/tp-link-logo_y9efya.webp"
                        alt="TP-Link"
                        width={112}
                        height={112}
                        sizes="112px"
                        className="w-full h-full object-contain"
                        fetchPriority="high"
                      />
                    </div>
                  </a>
                  <div>
                    <h1 className="text-black font-black text-3xl md:text-4xl mb-2">
                      TP-Link Promo Code
                    </h1>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map((i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />
                      </div>
                      <span className="text-black font-black text-sm">4.5</span>
                      <span className="text-gray-600 font-bold text-sm">
                        (31.6k Ratings)
                      </span>
                    </div>
                    <p className="store-description text-gray-600 text-sm leading-relaxed max-w-[400px] text-justify">
                      Upgrade your smart home with TP-Link Promo Code savings, including up to 50% off Tapo devices and 45% off Deco Wi-Fi 7 systems. TP-Link Discount Code offers also include 30% off robot vacuums, 42% off security camera packs, and Buy 2 Get 2 Free on MagCam C425 cameras. Shop smart cameras, networking gear, and automated cleaning devices with hand-picked deals. Verified codes are updated for Nov 2026, helping shoppers find tested savings on top TP-Link products.
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
                    {
                      icon: Tag,
                      val: `${TPLINK_COUPONS.length}`,
                      label: "Offers",
                    },
                    { icon: Percent, val: "2.4k", label: "Deals" },
                    { icon: Users, val: "10M+", label: "Shoppers" },
                    { icon: BadgeCheck, val: "100%", label: "Verified" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <stat.icon className="w-4.5 h-4.5 text-[#056bfa]" />
                      <div>
                        <div className="text-black font-black text-xs leading-none">
                          {stat.val}
                        </div>
                        <p className="text-gray-500 font-bold text-[12px] uppercase mt-0.5">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:block flex-1">
                <div className="relative rounded-2xl overflow-hidden h-[250px] shadow-lg group">
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ opacity: 1 }}
                  >
                    <a
                      href={STORE_URL}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img
                        src="https://res.cloudinary.com/couponsbit/image/upload/v1788436259/20_ujztbz.webp"
                        alt="TP-Link Promo Code"
                        width={800}
                        height={350}
                        className="w-full h-full object-contain bg-[#f8f8f8]"
                        fetchPriority="high"
                      />
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
                {
                  icon: Star,
                  title: "Top Deals",
                  sub: "Best offers handpicked for you",
                },
                {
                  icon: ShieldCheck,
                  title: "Verified Coupons",
                  sub: "100% working & tested codes",
                },
                {
                  icon: PiggyBank,
                  title: "Big Savings",
                  sub: "Save more on every order",
                },
                {
                  icon: RefreshCw,
                  title: "Updated Daily",
                  sub: "New offers every single day",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 justify-center md:border-r last:border-0 border-[#e0e0e0] px-4"
                >
                  <item.icon className="w-6 h-6 text-[#056bfa] shrink-0" />
                  <div className="text-left">
                    <p className="text-black font-black text-sm leading-none">
                      {item.title}
                    </p>
                    <p className="text-gray-500 font-bold text-[12px] mt-0.5">
                      {item.sub}
                    </p>
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
                  <h2 className="text-2xl font-black text-black leading-tight">
                    TP-Link Promo Codes & Offers
                  </h2>
                </div>

                {filteredCoupons.map((c) => (
                  <div key={c.id} className="w-full max-w-7xl mx-auto mb-6">
                    <div className="bg-[#f8f8f8] border border-gray-200 rounded-[24px] overflow-hidden shadow-sm">
                      <div className="flex flex-row">
                        <div className="relative w-[90px] sm:w-[160px] bg-gradient-to-b from-[#056bfa] to-[#006d9b] flex items-center justify-center py-6 sm:py-8 text-white shrink-0">
                          <div className="absolute -right-3 top-8 sm:top-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="absolute -right-3 bottom-8 sm:bottom-10 w-6 h-6 bg-[#f8f8f8] rounded-full"></div>
                          <div className="text-center px-1">
                            <p className="uppercase tracking-[2px] sm:tracking-[8px] text-[15px] sm:text-[15px] font-semibold leading-3">
                              {c.topLabel}
                            </p>
                            <div className="text-[15px] sm:text-3xl font-extrabold leading-none mt-2">
                              {c.mainValue}
                            </div>
                            {c.offText && (
                              <p className="text-[10px] sm:text-[11px] font-bold text-white/90 uppercase tracking-widest mt-1">
                                {c.offText}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                          <div className="flex-1 px-3 sm:px-6 py-3 sm:py-5 border-b lg:border-b-0 lg:border-r border-dashed border-gray-300 min-w-0">
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="bg-red-100 text-red-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                                Limited Time
                              </span>
                              <span className="bg-green-100 text-green-700 text-[7px] sm:text-[9px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase whitespace-nowrap">
                                Verified Deal
                              </span>
                            </div>
                            <h3 className="text-[15px] sm:text-[22px] font-extrabold text-[#061b3a] leading-[22px] sm:leading-snug">
                              {c.title}
                            </h3>
                            <p className="mt-2 sm:mt-3 text-gray-600 text-[13px] sm:text-sm leading-6">
                              {c.description}
                            </p>
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedCouponId(
                                  expandedCouponId === c.id ? null : c.id
                                )
                              }
                              className="mt-3 sm:mt-4 text-[#061b3a] font-bold text-[13px] sm:text-sm flex items-center gap-1"
                            >
                              View Details
                              <ChevronDown
                                size={16}
                                className={cn(
                                  "transition-transform duration-300",
                                  expandedCouponId === c.id && "rotate-180"
                                )}
                              />
                            </button>
                            <div
                              className={cn(
                                "overflow-hidden transition-all duration-300",
                                expandedCouponId === c.id
                                  ? "max-h-[250px] opacity-100 mt-3"
                                  : "max-h-0 opacity-0"
                              )}
                            >
                              <ul className="space-y-2 text-gray-700 text-[13px] sm:text-sm leading-6">
                                {c.points.map((b, bi) => (
                                  <li
                                    key={bi}
                                    className="flex items-start gap-2"
                                  >
                                    <span className="text-[#0344b0]">•</span>
                                    {b}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="w-full lg:w-[210px] flex items-center justify-center px-3 sm:px-5 py-3 sm:py-6">
                            {c.code ? (
                              <button
                                type="button"
                                onClick={() => handleOpenModal(c)}
                                className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
                              >
                                Get Code
                              </button>
                            ) : (
                              <button
                                type="button"
                                onClick={() => handleOpenModal(c)}
                                className="w-full lg:w-auto bg-[#056bfa] hover:bg-[#005f91] text-white font-bold text-[18px] sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-md transition-all duration-300 text-center block"
                              >
                                Get Deal
                              </button>
                            )}
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
                  <h3 className="text-black font-black text-lg mb-6">
                    Find a TP-Link Promo Code
                  </h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    A TP-Link promo code can help you save on networking
                    hardware, smart-home tech, security cameras, and related
                    accessories. Promotions vary by regional store, so check
                    the specific terms and conditions before purchasing.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Offers can include percentage discounts on mesh WiFi
                    systems, deals on security cameras, promotional picks on
                    networking bundles, and sales around seasonal shopping
                    periods.
                  </p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed mb-6 text-justify">
                    Before ordering, check CouponsBit for current TP-Link
                    coupons, promo codes, and discount offers to make sure you
                    get the best available deal.
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
                  <h3 className="text-black font-black text-lg mb-6">
                    Top Categories
                  </h3>
                  <div className="space-y-1">
                    {[
                      {
                        icon: Wifi,
                        name: "Electronics",
                        count: "850+",
                        color: "text-blue-500",
                        href: "/categories/electronics",
                      },
                      {
                        icon: ShoppingBag,
                        name: "Entertainment",
                        count: "210+",
                        color: "text-purple-500",
                        href: "/categories/entertainment",
                      },
                      {
                        icon: Home,
                        name: "Mobile & Telecom",
                        count: "320+",
                        color: "text-green-500",
                        href: "/categories/mobile",
                      },
                      {
                        icon: Camera,
                        name: "Software & Digital",
                        count: "300+",
                        color: "text-violet-500",
                        href: "/categories/software",
                      },
                      {
                        icon: Search,
                        name: "Travel",
                        count: "420+",
                        color: "text-teal-500",
                        href: "/categories/travel",
                      },
                    ].map((cat, i) => (
                      <Link
                        key={i}
                        href={cat.href}
                        className="flex items-center justify-between py-3 border-b border-[#f0f0f0] last:border-0 group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <cat.icon className={cn("w-4.5 h-4.5", cat.color)} />
                          <span className="text-gray-600 font-bold text-sm group-hover:text-black transition-colors">
                            {cat.name}
                          </span>
                        </div>
                        <span className="bg-[#e8f6f8] text-[#0451c4] px-2.5 py-0.5 rounded-full text-[12px] font-black">
                          {cat.count} Coupons
                        </span>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/categories"
                    className="block mt-6 text-[#056bfa] font-black text-[11px] uppercase tracking-widest hover:underline"
                  >
                    View All Categories →
                  </Link>
                </div>

                <div className="bg-white rounded-[32px] border border-[#f0f0f0] p-8 shadow-sm">
                  <h3 className="text-black font-black text-lg mb-6">
                    How to Get the Best Deals on TP-Link
                  </h3>
                  <div className="space-y-8">
                    {[
                      {
                        icon: Tag,
                        title: "Check CouponsBit Before Checkout",
                        sub: "Before placing an order on TP-Link's website, visit CouponsBit to check whether a relevant promo code, voucher, discount, or deal is available.",
                      },
                      {
                        icon: Percent,
                        title: "Compare Mesh Systems vs. Extenders",
                        sub: "If you only need coverage in one extra room, a range extender can be more cost-effective than buying a full mesh WiFi system.",
                      },
                      {
                        icon: Calendar,
                        title: "Shop During Major Seasonal Sales",
                        sub: "Shopping events such as Black Friday, Cyber Monday, back-to-school season, and holiday promotions are great times to find significant savings on TP-Link hardware.",
                      },
                      {
                        icon: Package,
                        title: "Look for Bundles and Multi-Packs",
                        sub: "Mesh systems and smart-home products often come in multi-packs, which generally provide a lower per-unit cost than buying single items.",
                      },
                      {
                        icon: Clock,
                        title: "Check the Promotion Terms",
                        sub: "Promotions can be country-specific or limited to selected product lines. Checking the details beforehand prevents unexpected checkout surprises.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="flex gap-4 items-start text-justify"
                      >
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
            <h2 className="text-2xl font-black text-black mb-10">
              More Stores You'll Love
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {RELATED_STORES.map((store, i) => (
                <Link
                  key={i}
                  href={store.href}
                  className="bg-white border border-[#f0f0f0] rounded-3xl p-6 text-center shadow-sm hover:border-[#056bfa] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="h-14 flex items-center justify-center mx-auto">
                    <img
                      src={store.logo}
                      alt={store.name}
                      width={120}
                      height={48}
                      className="max-h-12 max-w-[120px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-black font-black text-sm mt-5 mb-1">
                    {store.name}
                  </h3>
                  <p className="text-[#056bfa] font-black text-[12px] uppercase mb-4">
                    {store.dealText}
                  </p>
                  <span className="text-[#056bfa] font-black text-[12px] uppercase hover:underline decoration-2">
                    Visit Store →
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/stores"
              className="inline-flex items-center gap-2 px-9 py-3.5 border-2 border-[#056bfa] text-[#056bfa] bg-white rounded-full font-black hover:bg-[#056bfa] hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl"
            >
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
                  TP-Link Promo Code, Discount Code & Networking Deals
                </h2>

                <div className="my-12 overflow-hidden rounded-[24px] border-2 border-gray-100 bg-white shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[850px] border-collapse text-left">
                      <thead>
                        <tr className="bg-[#056BFA]">
                          <th
                            scope="col"
                            className="p-5 text-[15px] font-black uppercase tracking-wider text-white"
                          >
                            Offer
                          </th>
                          <th
                            scope="col"
                            className="p-5 text-[15px] font-black uppercase tracking-wider text-white"
                          >
                            Discount / Price
                          </th>
                          <th
                            scope="col"
                            className="p-5 text-[15px] font-black uppercase tracking-wider text-white"
                          >
                            Product Line
                          </th>
                          <th
                            scope="col"
                            className="p-5 text-[15px] font-black uppercase tracking-wider text-white"
                          >
                            Key Features &amp; Details
                          </th>
                          <th
                            scope="col"
                            className="p-5 text-[15px] font-black uppercase tracking-wider text-white"
                          >
                            Applicable On
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-[14px] font-bold text-gray-600">
                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            Tapo Anniversary Sale Deals
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            Up to 50% OFF
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            Tapo
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            Earn 3X rewards points; covers security cameras, automation &amp; robot vacuums
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            Eligible Tapo smart home products
                          </td>
                        </tr>

                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            Tapo RV50 Pro Omni Robot Vacuum
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            $499.99 (Save $200)
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            Tapo Cleaning
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            15,000Pa suction power, self-cleaning dock, LiDAR + Dual-Laser navigation
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            Tapo RV50 Pro Omni Robot Vacuum &amp; Mop
                          </td>
                        </tr>

                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            Deco 7 Pro Wi-Fi 7 Mesh System
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            $539.98 (Save $210)
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            Deco Mesh
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            BE10000 indoor coverage + BE25 Outdoor Wi-Fi 7 with seamless roaming
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            Deco 7 Pro Outdoor Wi-Fi 7 Mesh System Bundle
                          </td>
                        </tr>

                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            Tapo C660 4K Solar Camera Bundle
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            $599.95 (Save $230)
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            Tapo Security
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            4K UHD video, solar pan/tilt cameras, includes CentralHub H500
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            Tapo C660 Kit 4K Solar Security Camera Bundle
                          </td>
                        </tr>

                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            MagCam C425 2K Wireless Cameras
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            Buy 2, Get 2 Free ($259.96)
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            Tapo Cameras
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            Save $260 on 4-pack; 2K QHD video, battery power, magnetic installation
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            MagCam 2K Wireless Camera 4-Pack
                          </td>
                        </tr>

                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            MagCam C460 4K Solar Cameras
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            $259.97 (Save $190 / 42% OFF)
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            Tapo Cameras
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            4K UHD video, solar-powered operation, magnetic mounting for simple installation
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            Tapo C460 MagCam 4K Solar Camera 3-Pack
                          </td>
                        </tr>

                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            Tapo C460 Smart Security Bundle
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            $479.95 (Save $270 / 36% OFF)
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            Tapo Security
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            4K UHD video, solar power, CentralHub H500 included for connected coverage
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            Tapo C460 Kit Smart CentralHub Bundle
                          </td>
                        </tr>

                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            Tapo C660 4K Solar Outdoor Camera 3-Pack
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            $349.97 (Save $160 / 31% OFF)
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            Tapo Cameras
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            4K UHD resolution with pan/tilt flexibility for wider outdoor surveillance
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            Tapo C660 Kit 4K Solar Outdoor Camera 3-Pack
                          </td>
                        </tr>

                        <tr className="border-b border-gray-200 transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            Deco 7 Pro BE10000 2-Pack
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            $329.99 (Save $269.99 / 45% OFF)
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            Deco Mesh
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            Wi-Fi 7 BE10000 speeds, covers up to 5,800 sq ft, 2.5G WAN/LAN ports
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            Deco 7 Pro Tri-Band Wi-Fi 7 Mesh System 2-Pack
                          </td>
                        </tr>

                        <tr className="transition-colors hover:bg-gray-50/50">
                          <td className="max-w-[220px] p-5 align-middle font-black text-black break-words">
                            Tapo RV30 MAX Plus Robot Vacuum
                          </td>
                          <td className="p-5 align-middle font-black whitespace-nowrap text-[#056BFA]">
                            $229.99 (Save $100 / 30% OFF)
                          </td>
                          <td className="p-5 align-middle whitespace-nowrap text-gray-500">
                            Tapo Cleaning
                          </td>
                          <td className="max-w-[200px] p-5 align-middle text-gray-500 break-words">
                            5,300Pa suction power, auto-empty dock, LiDAR + IMU dual navigation
                          </td>
                          <td className="max-w-[240px] p-5 align-middle text-gray-500 break-words">
                            Tapo RV30 MAX Plus LiDAR Robot Vacuum &amp; Mop
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Expandable Content Area */}
                <div
                  className={cn(
                    "text-gray-500 font-bold leading-relaxed space-y-6 relative transition-all",
                    !isReadMore && "max-h-[500px] overflow-hidden"
                  )}
                >
                  <div className="space-y-4">
                    <p>
                      Are you looking for ways to improve your home or office Wi-Fi, add smart-home devices, or upgrade your home security setup? Before completing your purchase, checking for a TP-Link promo code on CouponsBit can help you find discounts, deals, and promotional savings on eligible products.
                    </p>
                    <p>
                      TP-Link is a global manufacturer of networking hardware and smart tech products, offering a broad catalog that includes Wi-Fi routers, mesh Wi-Fi systems, range extenders, smart security cameras, video doorbells, smart plugs, robot vacuums, and business networking gear.
                    </p>
                    <p>
                      Whether you're shopping for a high-performance router, expanding wireless coverage with a Deco mesh system, or building a connected smart home with Tapo, using a promo code can help you save.
                    </p>
                    <p>
                      CouponsBit brings together available TP-Link promo codes, discount codes, coupon offers, and seasonal deals so you can compare savings options before checkout.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      Save With a TP-Link Promo Code
                    </h3>
                    <p>
                      Upgrading your home Wi-Fi or adding smart-home devices can quickly become an investment. Routers, mesh nodes, security cameras, and smart plugs often work best when purchased together to cover your entire living space.
                    </p>
                    <p>
                      A TP-Link discount code or promotional deal can help reduce the cost of your equipment, whether you're purchasing a single router or an entire whole-home system.
                    </p>
                    <p>Depending on what's currently available, promotions may include:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>TP-Link promo codes for selected products</li>
                      <li>Deco mesh Wi-Fi discount codes</li>
                      <li>Tapo smart-home and camera offers</li>
                      <li>Bundle savings on multi-pack systems</li>
                      <li>Seasonal and holiday deals</li>
                      <li>Free shipping on qualifying orders</li>
                    </ul>
                    <p>
                      Always review the terms, eligible products, and regional requirements associated with each code before applying it at checkout.
                    </p>
                  </div>

                  <div
                    className={cn(
                      "text-gray-600 space-y-8 relative",
                      !isReadMore && "max-h-[500px] overflow-hidden"
                    )}
                  >
                    {/* Header & Overview */}
                    <div className="space-y-4">
                      <h2 className="text-2xl font-black text-[#056bfa]">
                        What Can You Buy from TP-Link?
                      </h2>
                      <p>
                        TP-Link offers a wide catalog designed for home users, gamers, remote workers, and businesses.
                      </p>
                      <p>Its products generally fall into two primary ecosystems:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                          <h4 className="font-bold text-[#056bfa]">Deco & Networking</h4>
                          <p className="text-sm">
                            Routers, mesh Wi-Fi systems, range extenders, network switches, powerline adapters, and network interface cards designed to provide reliable, high-speed connectivity throughout homes and offices.
                          </p>
                        </div>
                        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                          <h4 className="font-bold text-[#056bfa]">Tapo Smart Home</h4>
                          <p className="text-sm">
                            Security cameras, video doorbells, smart plugs, smart lighting, environmental sensors, and robot vacuums designed to make home automation simple, accessible, and secure.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Deco Mesh Wi-Fi */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        TP-Link Deco Mesh Wi-Fi Systems
                      </h3>
                      <p>
                        Deco is TP-Link's flagship whole-home mesh Wi-Fi line. Unlike traditional Wi-Fi setups that rely on a single router, Deco systems use multiple units placed throughout the home to create a seamless, unified wireless network.
                      </p>
                      <p>Key advantages of Deco mesh systems include:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                        <div className="flex items-center gap-2">✓ Seamless roaming under a single network name (SSID)</div>
                        <div className="flex items-center gap-2">✓ AI-driven roaming optimization</div>
                        <div className="flex items-center gap-2">✓ Easy setup and management via the Deco app</div>
                        <div className="flex items-center gap-2">✓ Built-in parental controls and network security</div>
                        <div className="flex items-center gap-2">✓ Support for Wi-Fi 6, Wi-Fi 6E, and Wi-Fi 7 standards</div>
                      </div>
                    </div>

                    {/* Tapo Smart Home Ecosystem */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        TP-Link Tapo Smart Home Ecosystem
                      </h3>
                      <p>
                        Tapo is TP-Link's consumer smart-home brand, offering devices that can be controlled through a single app.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                          <h4 className="font-bold text-[#056bfa]">Smart Security Cameras</h4>
                          <p className="text-sm">
                            Indoor and outdoor cameras with 2K or 4K resolution, color night vision, motion detection, two-way audio, and solar panel options for continuous operation.
                          </p>
                        </div>
                        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                          <h4 className="font-bold text-[#056bfa]">Robot Vacuums & Mops</h4>
                          <p className="text-sm">
                            LiDAR navigation, powerful suction up to 15,000Pa, auto-emptying docks, and simultaneous mopping capabilities for hands-free home cleaning.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Routers & Gaming */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        Archer Routers & Gaming Performance
                      </h3>
                      <p>
                        For users who need maximum throughput and low latency, TP-Link's Archer router series offers high-speed Wi-Fi 6, 6E, and 7 options. Dedicated gaming models feature traffic prioritization, game accelerators, and high-gain antennas to deliver a smooth gaming experience.
                      </p>
                    </div>

                    {!isReadMore && (
                      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                    )}
                  </div>

                  {/* How-To Steps Box */}
                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#056bfa] mb-8">
                      How to Use a TP-Link Promo Code
                    </h3>
                    <div className="space-y-6">
                      {[
                        {
                          title: "Step 1: Check CouponsBit",
                          text: "Visit CouponsBit and find the latest TP-Link promo codes and promotional offers.",
                        },
                        {
                          title: "Step 2: Choose Your Offer",
                          text: "Select the coupon or deal that matches the networking or smart-home product you want to buy.",
                        },
                        {
                          title: "Step 3: Review Conditions",
                          text: "Check eligibility requirements, minimum order values, and valid regional store domains.",
                        },
                        {
                          title: "Step 4: Copy the Code",
                          text: "Copy the promotional code to your clipboard before navigating to the store.",
                        },
                        {
                          title: "Step 5: Add Products to Cart",
                          text: "Select your desired TP-Link devices and proceed to checkout.",
                        },
                        {
                          title: "Step 6: Apply the Promo Code",
                          text: "Paste your code in the promo code field and confirm that the discount appears in your final order total.",
                        },
                      ].map((step, i) => (
                        <div key={i} className="flex gap-6 items-start">
                          <div className="w-10 h-10 shrink-0 bg-[#056bfa] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 italic">
                            {i + 1}
                          </div>
                          <div className="mt-1">
                            <strong className="text-gray-900 font-black block">
                              {step.title}
                            </strong>
                            <p className="text-gray-700 font-bold leading-relaxed">
                              {step.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#056bfa] mb-4">
                      Why Choose CouponsBit for TP-Link Deals?
                    </h3>
                    <p>
                      CouponsBit is designed to make saving money easy. Instead of searching through multiple coupon websites with outdated codes, CouponsBit verifies offers so you can quickly find working deals on networking equipment, smart home gear, and tech products.
                    </p>
                    <p>
                      Before finalizing your next TP-Link purchase, check CouponsBit to make sure you're getting the best possible price.
                    </p>
                  </div>

                  {!isReadMore && (
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
                  )}
                </div>

                <button
                  onClick={() => setIsReadMore(!isReadMore)}
                  className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline"
                >
                  {isReadMore ? "Read Less" : "Read More"}{" "}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isReadMore && "rotate-180"
                    )}
                  />
                </button>

                {/* Accordion FAQs */}
                <div className="faq-section mt-20 space-y-4">
                  <h3 className="text-2xl font-black text-black mb-8">
                    Frequently Asked Questions About TP-Link Promo Codes
                  </h3>
                  {[
                    {
                      q: "What is a TP-Link promo code?",
                      a: "A TP-Link promo code is a promotional code that may provide a discount or other benefit on an eligible purchase. The exact terms vary between promotions.",
                    },
                    {
                      q: "Where can I find TP-Link promo codes?",
                      a: "You can check Couponsbit for available TP-Link promotional offers, discount codes, and deals before shopping. Make sure to select the appropriate offer for your country and product.",
                    },
                    {
                      q: "Does a TP-Link promo code work in every country?",
                      a: "Not necessarily. Promotions can be region-specific. A code offered in the USA may not work on the Canadian or UK store, so check the terms and use the correct regional website.",
                    },
                    {
                      q: "Can I use a TP-Link promo code on any product?",
                      a: "That depends on the specific promotion. Some codes may be limited to selected products, categories, customers, regions, or dates. Always check the applicable terms before checkout.",
                    },
                    {
                      q: "What products does TP-Link sell?",
                      a: "TP-Link sells a wide range of networking and smart-home products, including routers, mesh Wi-Fi systems, range extenders, switches, access points, network adapters, 4G/5G routers, smart cameras, video doorbells, smart plugs, smart lighting, robot vacuums, and business networking equipment.",
                    },
                    {
                      q: "What is TP-Link Deco?",
                      a: "Deco is TP-Link's whole-home mesh Wi-Fi product family. Multiple Deco units can work together to provide a unified wireless network throughout a home.",
                    },
                    {
                      q: "What is TP-Link Tapo?",
                      a: "Tapo is TP-Link's smart-home ecosystem, with products including security cameras, video doorbells, smart plugs, smart bulbs, sensors, and smart appliances such as robot vacuums.",
                    },
                    {
                      q: "Does TP-Link sell gaming routers?",
                      a: "Yes. TP-Link offers gaming-oriented Archer routers with features designed for gaming and high-performance connectivity.",
                    },
                    {
                      q: "Does TP-Link sell 5G routers?",
                      a: "Yes. TP-Link offers 5G and 4G routers in various regional catalogs. The UK range, for example, includes the Archer NX200 5G router.",
                    },
                    {
                      q: "Does TP-Link offer business networking products?",
                      a: "Yes. Its Omada ecosystem includes business networking products such as access points, switches, gateways, controllers, and other networking equipment.",
                    },
                    {
                      q: "Does TP-Link sell WiFi range extenders?",
                      a: "Yes. TP-Link offers a range of WiFi extenders designed to boost coverage alongside its routers and mesh systems.",
                    },
                  ].map((faq, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
                      >
                        <span className="text-black font-black text-base">
                          {faq.q}
                        </span>
                        <div
                          className={cn(
                            "bg-[#f0f0f0] p-2 rounded-xl transition-all",
                            openFaq === i && "bg-[#056bfa]"
                          )}
                        >
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 text-gray-500 transition-transform",
                              openFaq === i && "text-white rotate-180"
                            )}
                          />
                        </div>
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300 px-8 bg-white",
                          openFaq === i
                            ? "max-h-60 pb-8 opacity-100"
                            : "max-h-0 opacity-0 pb-0"
                        )}
                      >
                        <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar Area */}
              <div className="space-y-10">
                <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#056bfa]/5">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
                    Popular TP-Link Searches
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "Deco Mesh Deals",
                      "Wi-Fi 7 Routers",
                      "Tapo Security Cameras",
                      "TP-Link Promo Code",
                      "Smart Plugs",
                      "Range Extenders",
                      "Robot Vacuums",
                      "Archer Routers",
                    ].map((tag) => (
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
                    Today's Top TP-Link Deals
                  </h3>
                  <div className="space-y-6">
                    {TPLINK_COUPONS.slice(0, 5).map((deal) => (
                      <div
                        key={deal.id}
                        className="flex items-center gap-4 group cursor-pointer"
                      >
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#056bfa] font-black text-xl italic shadow-inner">
                          T
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#056bfa] transition-colors">
                            {deal.title}
                          </p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">
                            {deal.description}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleOpenModal(deal)}
                          className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#056bfa] hover:text-white transition-all active:scale-90"
                        >
                          {deal.code ? "Get Code" : "Get Deal"}
                        </button>
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
