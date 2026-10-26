"use client";

import React, { useState, useMemo, useRef } from "react";
import Link from "next/link";
import {
  Star,
  Search,
  Sparkles,
  CheckCircle,
  BadgeCheck,
  ChevronRight,
  MessageSquare,
  Users,
  DollarSign,
  Pencil,
  ArrowRight,
  Filter,
  X,
  ExternalLink,
  ChevronDown,
  RotateCcw,
  Send,
  AlertCircle,
  ThumbsUp,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Recaptcha } from "@/components/Recaptcha";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ReviewItem {
  id: string;
  name: string;
  avatar?: string;
  avatarBg?: string;
  initial?: string;
  date: string;
  rating: number;
  comment: string;
  source: "google" | "trustpilot" | "couponsbit";
  sourceLabel: string;
  verified: boolean;
  storeName?: string;
}

const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Rahul Sharma",
    initial: "R",
    avatarBg: "bg-[#e8f0fe] text-[#056bfa]",
    date: "2 days ago",
    rating: 5,
    comment:
      "CouponsBit always helps me save money on online shopping. I recently used an Amazon coupon and saved $120. Great platform with genuine offers!",
    source: "google",
    sourceLabel: "Google Review",
    verified: true,
    storeName: "Amazon",
  },
  {
    id: "rev-2",
    name: "Priya Mehta",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    date: "5 days ago",
    rating: 5,
    comment:
      "I always check CouponsBit before shopping online. The latest deals and coupon codes are always updated. Very helpful website!",
    source: "trustpilot",
    sourceLabel: "Trustpilot Review",
    verified: true,
    storeName: "General",
  },
  {
    id: "rev-3",
    name: "Amit Verma",
    initial: "A",
    avatarBg: "bg-[#eff6ff] text-[#2563eb]",
    date: "1 week ago",
    rating: 5,
    comment:
      "Found a great discount code for Flipkart. The code worked perfectly and saved me a lot. Thank you CouponsBit!",
    source: "couponsbit",
    sourceLabel: "CouponsBit Review",
    verified: true,
    storeName: "Flipkart",
  },
  {
    id: "rev-4",
    name: "Neha Kapoor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    date: "1 week ago",
    rating: 5,
    comment:
      "Amazing collection of offers and deals. I use this site for Myntra, Nykaa and Amazon. Highly recommended!",
    source: "google",
    sourceLabel: "Google Review",
    verified: true,
    storeName: "Myntra",
  },
  {
    id: "rev-5",
    name: "Sandeep Kumar",
    initial: "S",
    avatarBg: "bg-[#dcfce7] text-[#16a34a]",
    date: "2 weeks ago",
    rating: 5,
    comment:
      "Trustpilot brought me here and I'm glad. CouponsBit has genuine coupons and the website is easy to use.",
    source: "trustpilot",
    sourceLabel: "Trustpilot Review",
    verified: true,
    storeName: "General",
  },
  {
    id: "rev-6",
    name: "Kavita Singh",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    date: "2 weeks ago",
    rating: 5,
    comment:
      "Excellent platform for finding working coupon codes. Saved money on my recent Zepto order. Keep it up!",
    source: "couponsbit",
    sourceLabel: "CouponsBit Review",
    verified: true,
    storeName: "Zepto",
  },
  {
    id: "rev-7",
    name: "David Miller",
    initial: "D",
    avatarBg: "bg-[#fef3c7] text-[#d97706]",
    date: "3 weeks ago",
    rating: 5,
    comment:
      "Booked roundtrip flights through a promo code on Couponsbit and saved over $180! Literally the only coupon site that had a code that wasn't expired.",
    source: "google",
    sourceLabel: "Google Review",
    verified: true,
    storeName: "Cheapflights",
  },
  {
    id: "rev-8",
    name: "Sarah Jenkins",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
    date: "3 weeks ago",
    rating: 5,
    comment:
      "Customer support actually helped when a code had an expiration question. Clean layout, zero spam popups, and verified discount codes that actually work.",
    source: "trustpilot",
    sourceLabel: "Trustpilot Review",
    verified: true,
    storeName: "StubHub",
  },
  {
    id: "rev-9",
    name: "Vikram Malhotra",
    initial: "V",
    avatarBg: "bg-[#ede9fe] text-[#7c3aed]",
    date: "1 month ago",
    rating: 4,
    comment:
      "Great web hosting promo codes. I used the Bluehost coupon listed here and got the discount without issues. Smooth experience overall.",
    source: "couponsbit",
    sourceLabel: "CouponsBit Review",
    verified: true,
    storeName: "Bluehost",
  },
  {
    id: "rev-10",
    name: "Emily Watson",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
    date: "1 month ago",
    rating: 5,
    comment:
      "I run a small boutique and love finding supplies with verified codes here. Highly recommend bookmarking Couponsbit!",
    source: "google",
    sourceLabel: "Google Review",
    verified: true,
    storeName: "VistaPrint",
  },
  {
    id: "rev-11",
    name: "Rohan Patel",
    initial: "R",
    avatarBg: "bg-[#fee2e2] text-[#dc2626]",
    date: "1 month ago",
    rating: 5,
    comment:
      "Saved on my concert tickets through their Viagogo discount code. I honestly was skeptical at first but it applied instantly at checkout.",
    source: "trustpilot",
    sourceLabel: "Trustpilot Review",
    verified: true,
    storeName: "Viagogo",
  },
  {
    id: "rev-12",
    name: "Ananya Roy",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&auto=format&fit=crop&q=80",
    date: "1 month ago",
    rating: 5,
    comment:
      "Love the Deals of the Week and Deals of the Day sections. Makes it so fast to see genuine offers across all categories.",
    source: "couponsbit",
    sourceLabel: "CouponsBit Review",
    verified: true,
    storeName: "General",
  },
];

export default function FeedbackPageContent() {
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [activeFilter, setActiveFilter] = useState<"all" | "google" | "trustpilot" | "couponsbit">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "highest" | "lowest">("newest");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state for modal
  const [modalForm, setModalForm] = useState({
    fullName: "",
    email: "",
    rating: 5,
    category: "General Experience",
    storeName: "",
    message: "",
  });
  const [modalErrors, setModalErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  // Filter and sort reviews
  const filteredReviews = useMemo(() => {
    return reviews
      .filter((rev) => {
        if (activeFilter !== "all" && rev.source !== activeFilter) {
          return false;
        }
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = rev.name.toLowerCase().includes(q);
          const matchComment = rev.comment.toLowerCase().includes(q);
          const matchStore = rev.storeName?.toLowerCase().includes(q);
          return matchName || matchComment || matchStore;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "highest") return b.rating - a.rating;
        if (sortBy === "lowest") return a.rating - b.rating;
        return 0; // Default order is chronological/initial
      });
  }, [reviews, activeFilter, searchQuery, sortBy]);

  const displayedReviews = filteredReviews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredReviews.length;

  const countFor = (source: "all" | "google" | "trustpilot" | "couponsbit") => {
    if (source === "all") return reviews.length;
    return reviews.filter((r) => r.source === source).length;
  };

  const validateModal = () => {
    const errs: { [key: string]: string } = {};
    if (!modalForm.fullName.trim() || modalForm.fullName.trim().length < 2) {
      errs.fullName = "Please enter your name (min 2 characters)";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(modalForm.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!modalForm.message.trim() || modalForm.message.trim().length < 10) {
      errs.message = "Review must be at least 10 characters";
    }
    setModalErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateModal()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...modalForm,
          recaptchaToken,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const newReview: ReviewItem = {
          id: data.review?.id || `rev-${Date.now()}`,
          name: modalForm.fullName,
          initial: modalForm.fullName.charAt(0).toUpperCase(),
          avatarBg: "bg-[#e8f0fe] text-[#056bfa]",
          date: "Just now",
          rating: modalForm.rating,
          comment: modalForm.message,
          source: "couponsbit",
          sourceLabel: "CouponsBit Review",
          verified: true,
          storeName: modalForm.storeName || undefined,
        };
        setReviews([newReview, ...reviews]);
        setSubmitSuccess(true);
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Failed to submit review. Please try again.");
      }
    } catch {
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetModal = () => {
    setModalForm({
      fullName: "",
      email: "",
      rating: 5,
      category: "General Experience",
      storeName: "",
      message: "",
    });
    setModalErrors({});
    setSubmitSuccess(false);
    setRecaptchaToken(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] font-sans selection:bg-[#056bfa] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full pt-16 pb-20 md:pt-20 md:pb-24 bg-gradient-to-b from-[#eaf3ff] via-[#f4f8fe] to-[#fafbfc] overflow-hidden">
        {/* Decorative Floating Blobs / Watermarks */}
        <div className="absolute top-10 left-6 md:left-20 w-24 h-24 bg-[#056bfa]/10 rounded-3xl rotate-12 blur-sm pointer-events-none" />
        <div className="absolute top-28 right-8 md:right-28 w-28 h-28 bg-[#056bfa]/10 rounded-full blur-md pointer-events-none" />
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#056bfa]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          {/* Breadcrumb Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-sm border border-[#e2e8f0] rounded-full text-xs font-semibold text-gray-600 mb-6 shadow-sm">
            <Link href="/" className="hover:text-[#056bfa] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#056bfa] font-bold">Feedback & Reviews</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#0f172a] tracking-tight leading-tight mb-4">
            Customer Reviews &amp; <span className="text-[#056bfa]">Feedback</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            See what thousands of shoppers say about CouponsBit.
            <br className="hidden sm:inline" />
            Your feedback helps us improve and keeps our coupons updated and reliable.
          </p>

          {/* Top 3 Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12 text-left">
            {/* Google Reviews Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e2e8f0] shadow-sm hover:shadow-xl hover:border-[#056bfa]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#f8fafc] border border-gray-100 flex items-center justify-center p-2.5 shadow-sm">
                    {/* Google Multicolor 'G' */}
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.13C3.26 21.36 7.33 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.24C.45 8.15 0 9.97 0 12s.45 3.85 1.24 5.42l4.04-3.13z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.58l4.04 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base leading-tight">Google Reviews</h3>
                    <p className="text-xs text-gray-400 font-semibold">Verified Merchant Rating</p>
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-black text-gray-900">4.9</span>
                  <div className="flex items-center gap-0.5 text-[#fbbf24]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-500 font-semibold mb-6">2,540+ Reviews</p>
              </div>

              <a
                href="https://g.page/r/CRCex_k060vPECE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#f1f5f9] hover:bg-[#056bfa] text-[#056bfa] hover:text-white rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 group-hover:bg-[#056bfa] group-hover:text-white"
              >
                <span>View Google Reviews</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Trustpilot Reviews Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e2e8f0] shadow-sm hover:shadow-xl hover:border-[#00b67a]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00b67a]/10 border border-[#00b67a]/20 flex items-center justify-center p-2.5 shadow-sm">
                    {/* Trustpilot Green Star */}
                    <svg viewBox="0 0 24 24" className="w-7 h-7">
                      <polygon
                        fill="#00b67a"
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base leading-tight">Trustpilot Reviews</h3>
                    <p className="text-xs text-gray-400 font-semibold">Community Verified</p>
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-black text-gray-900">4.8</span>
                  <div className="flex items-center gap-0.5 text-[#fbbf24]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-500 font-semibold mb-6">1,320+ Reviews</p>
              </div>

              <a
                href="https://www.trustpilot.com/evaluate/couponsbit.us"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#f1f5f9] hover:bg-[#00b67a] text-[#00b67a] hover:text-white rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 group-hover:bg-[#00b67a] group-hover:text-white"
              >
                <span>View Trustpilot Reviews</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Write a Review Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#056bfa]/20 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#056bfa]/10 to-transparent rounded-bl-full pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#056bfa]/10 border border-[#056bfa]/20 flex items-center justify-center mb-4 text-[#056bfa]">
                  <Pencil className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Write a Review</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  Share your experience with CouponsBit coupons and help other online shoppers save more.
                </p>
              </div>

              <Button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 bg-[#056bfa] hover:bg-[#0451c4] text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Write a Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>

          {/* Stats Ribbon Bar */}
          <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-[#e2e8f0] py-6 px-6 sm:px-10 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {/* Stat 1 */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#e8f0fe] flex items-center justify-center text-[#056bfa] shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">50,000+</p>
                <p className="text-xs text-gray-500 font-semibold">Happy Users</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#eff6ff] flex items-center justify-center text-[#2563eb] shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">5,000+</p>
                <p className="text-xs text-gray-500 font-semibold">Reviews</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#ecfdf5] flex items-center justify-center text-[#10b981] shrink-0">
                <DollarSign className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">$2M+</p>
                <p className="text-xs text-gray-500 font-semibold">Money Saved</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#fffbeb] flex items-center justify-center text-[#f59e0b] shrink-0">
                <Star className="w-6 h-6 fill-[#f59e0b]" />
              </div>
              <div className="text-left">
                <p className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">4.8/5</p>
                <p className="text-xs text-gray-500 font-semibold">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Reviews Feed Section */}
      <section id="reviews-feed" className="py-14 bg-[#fafbfc]">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header Row: Title on Left, Search + Sort on Right */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                Latest <span className="text-[#056bfa]">Reviews</span>
              </h2>
              <p className="text-gray-500 text-sm mt-1">Real reviews from Google, Trustpilot and our website users.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Search Bar */}
              <div className="relative min-w-[240px]">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search reviews..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(6);
                  }}
                  className="w-full h-11 pl-10 pr-8 bg-white border border-gray-200 rounded-xl text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#056bfa] focus:ring-2 focus:ring-[#056bfa]/10 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="h-11 px-4 pr-9 bg-white border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 appearance-none focus:outline-none focus:border-[#056bfa] cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="highest">Highest Rating</option>
                  <option value="lowest">Lowest Rating</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Tab Filters */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-b border-gray-200 pb-4 mb-8">
            <button
              onClick={() => {
                setActiveFilter("all");
                setVisibleCount(6);
              }}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer",
                activeFilter === "all"
                  ? "bg-[#056bfa] text-white shadow-md shadow-[#056bfa]/20"
                  : "bg-white text-gray-600 hover:text-[#056bfa] border border-gray-200"
              )}
            >
              All Reviews ({countFor("all")})
            </button>

            <button
              onClick={() => {
                setActiveFilter("google");
                setVisibleCount(6);
              }}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer",
                activeFilter === "google"
                  ? "bg-[#056bfa] text-white shadow-md shadow-[#056bfa]/20"
                  : "bg-white text-gray-600 hover:text-[#056bfa] border border-gray-200"
              )}
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.13C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.24C.45 8.15 0 9.97 0 12s.45 3.85 1.24 5.42l4.04-3.13z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.58l4.04 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
                />
              </svg>
              <span>Google Reviews ({countFor("google")})</span>
            </button>

            <button
              onClick={() => {
                setActiveFilter("trustpilot");
                setVisibleCount(6);
              }}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer",
                activeFilter === "trustpilot"
                  ? "bg-[#056bfa] text-white shadow-md shadow-[#056bfa]/20"
                  : "bg-white text-gray-600 hover:text-[#00b67a] border border-gray-200"
              )}
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                <polygon
                  fill="#00b67a"
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
              <span>Trustpilot Reviews ({countFor("trustpilot")})</span>
            </button>

            <button
              onClick={() => {
                setActiveFilter("couponsbit");
                setVisibleCount(6);
              }}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer",
                activeFilter === "couponsbit"
                  ? "bg-[#056bfa] text-white shadow-md shadow-[#056bfa]/20"
                  : "bg-white text-gray-600 hover:text-[#056bfa] border border-gray-200"
              )}
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#056bfa]" />
              <span>CouponsBit Reviews ({countFor("couponsbit")})</span>
            </button>
          </div>

          {/* Cards Grid */}
          {displayedReviews.length === 0 ? (
            <div className="bg-white rounded-3xl border border-gray-200 p-12 text-center max-w-md mx-auto my-12">
              <div className="w-16 h-16 rounded-full bg-[#f1f5f9] flex items-center justify-center mx-auto mb-4 text-gray-400">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">No reviews found</h3>
              <p className="text-gray-500 text-xs mb-6">
                Try clearing your search query or switching to another filter.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("all");
                }}
                className="rounded-full text-xs font-bold"
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {displayedReviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e2e8f0] shadow-sm hover:shadow-lg hover:border-[#056bfa]/30 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Author Row */}
                    <div className="flex items-center gap-3.5 mb-3.5">
                      {rev.avatar ? (
                        <img
                          src={rev.avatar}
                          alt={rev.name}
                          className="w-11 h-11 rounded-full object-cover border border-gray-100 shadow-sm"
                        />
                      ) : (
                        <div
                          className={cn(
                            "w-11 h-11 rounded-full flex items-center justify-center font-black text-sm shadow-sm",
                            rev.avatarBg || "bg-[#e8f0fe] text-[#056bfa]"
                          )}
                        >
                          {rev.initial || rev.name.charAt(0)}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-gray-900 text-sm truncate">{rev.name}</h4>
                        </div>
                        <p className="text-[11px] text-gray-400 font-medium">{rev.date}</p>
                      </div>
                      {rev.storeName && (
                        <span className="text-[10px] font-bold px-2.5 py-1 bg-[#f1f5f9] text-gray-600 rounded-full shrink-0">
                          {rev.storeName}
                        </span>
                      )}
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-3 text-[#fbbf24]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "w-4 h-4",
                            i < rev.rating
                              ? "fill-[#fbbf24] text-[#fbbf24]"
                              : "fill-gray-200 text-gray-200"
                          )}
                        />
                      ))}
                    </div>

                    {/* Comment Body */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 font-normal">
                      &ldquo;{rev.comment}&rdquo;
                    </p>
                  </div>

                  {/* Card Footer: Platform Badge & Verified Purchase */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                    {/* Platform */}
                    <div className="flex items-center gap-1.5">
                      {rev.source === "google" && (
                        <>
                          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                            <path
                              fill="#4285F4"
                              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"
                            />
                            <path
                              fill="#34A853"
                              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.13C3.26 21.36 7.33 24 12 24z"
                            />
                            <path
                              fill="#FBBC05"
                              d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.24C.45 8.15 0 9.97 0 12s.45 3.85 1.24 5.42l4.04-3.13z"
                            />
                            <path
                              fill="#EA4335"
                              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.58l4.04 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
                            />
                          </svg>
                          <span className="text-gray-600 font-semibold text-[11px]">Google Review</span>
                        </>
                      )}
                      {rev.source === "trustpilot" && (
                        <>
                          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                            <polygon
                              fill="#00b67a"
                              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                            />
                          </svg>
                          <span className="text-gray-600 font-semibold text-[11px]">Trustpilot Review</span>
                        </>
                      )}
                      {rev.source === "couponsbit" && (
                        <>
                          <MessageCircle className="w-3.5 h-3.5 text-[#056bfa]" />
                          <span className="text-gray-600 font-semibold text-[11px]">CouponsBit Review</span>
                        </>
                      )}
                    </div>

                    {/* Verified Tag */}
                    {rev.verified && (
                      <div className="flex items-center gap-1 text-[#16a34a] font-bold text-[11px]">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>VERIFIED PURCHASE</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="px-8 py-3 rounded-full border-gray-300 text-gray-700 hover:border-[#056bfa] hover:text-[#056bfa] text-xs font-bold transition-all shadow-sm flex items-center gap-2 mx-auto"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Load More Reviews</span>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Share Your Experience Bottom Banner (Exact match to image) */}
      <section className="py-12 bg-[#fafbfc]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#d9ebff] via-[#e6f1ff] to-[#d4e8ff] p-8 sm:p-12 overflow-hidden border border-[#b9dafb] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Soft decorative stars */}
            <div className="absolute top-4 right-10 text-[#056bfa]/20 font-black text-2xl select-none pointer-events-none">
              ★
            </div>
            <div className="absolute bottom-3 right-40 text-[#056bfa]/20 font-black text-xl select-none pointer-events-none">
              ★
            </div>

            {/* Left side: Megaphone Icon + Text */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 z-10">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-[#056bfa] shrink-0">
                {/* Megaphone icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  <path d="m3 11 18-5v12L3 14v-3z" />
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                </svg>
              </div>

              <div>
                <span className="text-[11px] font-extrabold text-[#056bfa] uppercase tracking-wider block mb-1">
                  LOVE USING COUPONSBIT?
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a] leading-tight mb-2">
                  Share Your <span className="text-[#056bfa]">Experience</span>
                </h2>
                <p className="text-gray-600 text-sm max-w-lg leading-relaxed">
                  Help other shoppers by writing a review. Your feedback keeps our coupons updated and reliable.
                </p>
              </div>
            </div>

            {/* Right side: Button */}
            <div className="z-10 shrink-0">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-[#056bfa] hover:bg-[#0451c4] text-white rounded-2xl text-sm font-extrabold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 group"
              >
                <span>Write a Review</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Review Modal Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8"
            >
              {/* Close Button */}
              <button
                onClick={resetModal}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {!submitSuccess ? (
                <>
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-[#e8f0fe] text-[#056bfa] rounded-full text-[11px] font-bold uppercase tracking-wider mb-2">
                      LEAVE A REVIEW
                    </span>
                    <h3 className="text-2xl font-black text-gray-900">Share Your Experience</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Your review will help thousands of shoppers find working coupons and deals.
                    </p>
                  </div>

                  <form onSubmit={handleModalSubmit} className="space-y-4">
                    {/* Star Rating Picker */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        Your Rating: <span className="text-[#056bfa] font-extrabold">{modalForm.rating} of 5 Stars</span>
                      </label>
                      <div className="flex items-center gap-1.5 p-3 bg-[#f8fafc] rounded-2xl border border-gray-200">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setModalForm({ ...modalForm, rating: star })}
                            className="p-1 hover:scale-110 transition-transform"
                          >
                            <Star
                              className={cn(
                                "w-7 h-7 cursor-pointer transition-colors",
                                star <= modalForm.rating
                                  ? "fill-[#fbbf24] text-[#fbbf24]"
                                  : "text-gray-300 fill-transparent"
                              )}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          placeholder="e.g. John Doe"
                          value={modalForm.fullName}
                          onChange={(e) => {
                            setModalForm({ ...modalForm, fullName: e.target.value });
                            if (modalErrors.fullName) setModalErrors({ ...modalErrors, fullName: "" });
                          }}
                          className={cn(
                            "w-full h-11 px-3.5 bg-white border rounded-xl text-xs font-medium outline-none transition-all",
                            modalErrors.fullName
                              ? "border-red-400 focus:ring-2 focus:ring-red-100"
                              : "border-gray-200 focus:border-[#056bfa] focus:ring-2 focus:ring-[#056bfa]/10"
                          )}
                        />
                        {modalErrors.fullName && (
                          <p className="text-[10px] text-red-500 font-semibold mt-1">{modalErrors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={modalForm.email}
                          onChange={(e) => {
                            setModalForm({ ...modalForm, email: e.target.value });
                            if (modalErrors.email) setModalErrors({ ...modalErrors, email: "" });
                          }}
                          className={cn(
                            "w-full h-11 px-3.5 bg-white border rounded-xl text-xs font-medium outline-none transition-all",
                            modalErrors.email
                              ? "border-red-400 focus:ring-2 focus:ring-red-100"
                              : "border-gray-200 focus:border-[#056bfa] focus:ring-2 focus:ring-[#056bfa]/10"
                          )}
                        />
                        {modalErrors.email && (
                          <p className="text-[10px] text-red-500 font-semibold mt-1">{modalErrors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Store Name / Brand (Optional) */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Store / Coupon Used <span className="text-gray-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Amazon, Viagogo, Driffle, Cheapflights"
                        value={modalForm.storeName}
                        onChange={(e) => setModalForm({ ...modalForm, storeName: e.target.value })}
                        className="w-full h-11 px-3.5 bg-white border border-gray-200 rounded-xl text-xs font-medium outline-none focus:border-[#056bfa] focus:ring-2 focus:ring-[#056bfa]/10 transition-all"
                      />
                    </div>

                    {/* Review text */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Your Review</label>
                      <textarea
                        rows={4}
                        placeholder="Tell other shoppers how much you saved, whether the code worked, or how CouponsBit helped you..."
                        value={modalForm.message}
                        onChange={(e) => {
                          setModalForm({ ...modalForm, message: e.target.value });
                          if (modalErrors.message) setModalErrors({ ...modalErrors, message: "" });
                        }}
                        className={cn(
                          "w-full p-3.5 bg-white border rounded-xl text-xs font-medium outline-none transition-all resize-none",
                          modalErrors.message
                            ? "border-red-400 focus:ring-2 focus:ring-red-100"
                            : "border-gray-200 focus:border-[#056bfa] focus:ring-2 focus:ring-[#056bfa]/10"
                        )}
                      />
                      {modalErrors.message && (
                        <p className="text-[10px] text-red-500 font-semibold mt-1">{modalErrors.message}</p>
                      )}
                    </div>

                    {/* ReCAPTCHA */}
                    <div className="pt-1">
                      <Recaptcha
                        onVerify={(token) => setRecaptchaToken(token)}
                        onExpire={() => setRecaptchaToken(null)}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-[#056bfa] hover:bg-[#0451c4] text-white rounded-xl text-xs font-black shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Review</span>
                        </>
                      )}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center">
                  <div className="w-16 h-16 bg-[#ecfdf5] rounded-full flex items-center justify-center mx-auto mb-4 text-[#10b981]">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Thank You for Your Review!</h3>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed mb-6">
                    Your feedback has been received and added to our community reviews. We appreciate you helping others save more!
                  </p>
                  <Button
                    onClick={resetModal}
                    className="px-6 py-2.5 bg-[#056bfa] hover:bg-[#0451c4] text-white rounded-full text-xs font-bold"
                  >
                    Close
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
