"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Globe,
  TrendingUp,
  Heart,
  BookOpen,
  Briefcase,
  Mail,
  ArrowRight,
  CheckCircle,
  Users,
  Sparkles,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CareersContent() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#19798d] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Section 1: Hero */}
      <section className="relative w-full pt-[100px] pb-[120px] bg-gradient-to-br from-[#0f5a6b] via-[#19798d] to-[#1a9db5] overflow-hidden mt-[64px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-48 -right-24 w-[600px] h-[600px] bg-[#e8f6f8]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full shadow-md mb-8 animate-pulse"
          >
            <span className="text-[#19798d] font-bold text-sm tracking-wide">✦ We're Building the Future of Savings</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white font-extrabold text-4xl md:text-7xl mb-6 drop-shadow-sm"
          >
            Join the Couponsbit Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-lg md:text-xl max-w-[650px] mx-auto mb-14 leading-relaxed"
          >
            Help us make the world a better place to shop with great savings
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <a
              href="#open-positions"
              className="inline-flex items-center gap-2 bg-white text-[#19798d] px-10 py-4 rounded-full font-black text-base shadow-2xl hover:scale-105 transition-all active:scale-95"
            >
              View Open Positions <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,105.77,117.81,104,176.89,97.43,235.97,90.86,281.42,75.29,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* Section 2: Breadcrumb */}
      <div className="bg-white border-b border-[#f0f0f0]">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#19798d] font-medium hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-black font-extrabold">Careers</span>
          </nav>
        </div>
      </div>

      {/* Section 3: Why Work With Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#e8f6f8] text-[#19798d] rounded-full text-xs font-black uppercase tracking-widest mb-6">WHY COUPONSBIT</span>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Why Work With Us</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Be part of a passionate, remote-friendly team on a mission to help millions of shoppers save money</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Remote First",
                desc: "Work from anywhere in the world. We are a fully distributed team that believes great work can happen from anywhere.",
                bg: "bg-[#19798d]",
              },
              {
                icon: TrendingUp,
                title: "Fast Growing",
                desc: "Be part of a rapidly scaling platform. We are growing fast and there is real ownership and impact at every level.",
                bg: "bg-[#0f5a6b]",
              },
              {
                icon: Heart,
                title: "Real Impact",
                desc: "Help millions of shoppers save money daily. Every feature you build, every deal you add touches real people's lives.",
                bg: "bg-[#FF6B9D]",
              },
              {
                icon: BookOpen,
                title: "Keep Learning",
                desc: "Grow your skills in a supportive team. We invest in people with learning resources, mentorship and room to grow.",
                bg: "bg-[#F39C12]",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-[40px] border border-[#f0f0f0] flex flex-col group transition-all duration-300 shadow-sm hover:shadow-xl hover:border-[#19798d]"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform", card.bg)}>
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-black mb-4">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Open Positions */}
      <section id="open-positions" className="py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#e8f6f8] text-[#19798d] rounded-full text-xs font-black uppercase tracking-widest mb-6">JOIN US</span>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Open Positions</h2>
            <p className="text-gray-500 text-lg">We are always looking for great people to join our growing team</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[48px] border border-[#f0f0f0] shadow-sm p-16 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 bg-[#e8f6f8] rounded-full flex items-center justify-center mb-8">
              <Briefcase className="w-10 h-10 text-[#19798d]" />
            </div>
            <h3 className="text-2xl font-black text-black mb-4">
              No open positions right now — but we're always growing!
            </h3>
            <p className="text-gray-500 font-bold text-base max-w-md mb-10 leading-relaxed">
              We don't have any active openings at the moment, but we are always interested in hearing from talented people. Send us your CV and we will reach out when the right opportunity comes up.
            </p>
            <a
              href="mailto:careers@couponsbit.us"
              className="inline-flex items-center gap-3 bg-[#19798d] hover:bg-[#0f5a6b] text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all active:scale-95"
            >
              <Mail className="w-4 h-4" />
              Send Us Your CV
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Our Culture */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left: Visual */}
            <div className="w-full lg:w-1/2">

    <img 
      src="/career.webp" 
      alt="Our Culture" 
      className="w-full h-full object-cover rounded-[36px] shadow-xl"
    />


</div>

            {/* Right: Culture text */}
            <div className="w-full lg:w-1/2">
              <span className="inline-block px-4 py-1.5 bg-[#e8f6f8] text-[#19798d] rounded-full text-xs font-black uppercase tracking-widest mb-6">OUR CULTURE</span>
              <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-8">
                A Team That Cares About What It Builds
              </h2>

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                <p>
                  At Couponsbit we are a remote-first team spread across time zones. We believe in giving people the freedom to do their best work wherever they are most productive — whether that is at home, a café, or anywhere in between.
                </p>
                <p>
                  We are a passionate, mission-driven group united by one goal — helping shoppers around the world save money on every purchase they make. Every line of code and every verified coupon we publish is a small step toward that mission.
                </p>
                <p>
                  We move fast, take ownership, and learn from each other every day. There are no rigid hierarchies here — just good people doing meaningful work and growing together.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Flexible hours, async-friendly culture",
                  "Transparent feedback and open communication",
                  "Ownership from day one — no micromanagement",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#22c55e] shrink-0" />
                    <span className="text-gray-700 font-bold text-sm tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Stay Updated */}
      <section className="py-24 bg-[#e8f6f8]">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <span className="inline-block px-4 py-1.5 bg-white text-[#19798d] rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-sm">STAY IN THE LOOP</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Get Notified When We Hire</h2>
          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
            Leave your email and we will reach out as soon as a role that fits your skills opens up.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full h-14 px-6 rounded-full border-2 border-[#19798d]/20 bg-white outline-none focus:border-[#19798d] transition-all font-bold text-sm text-black placeholder:text-gray-400"
            />
            <Button className="w-full sm:w-auto h-14 bg-[#19798d] hover:bg-[#0f5a6b] text-white px-8 rounded-full font-black text-sm uppercase tracking-widest shadow-xl transition-all active:scale-95 shrink-0 flex items-center gap-2">
              <Send className="w-4 h-4" />
              Notify Me
            </Button>
          </div>

          <p className="text-gray-400 text-xs font-bold mt-6 uppercase tracking-widest">
            We respect your privacy. No spam ever.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-[#19798d] to-[#0f5a6b] py-24 text-center text-white relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#e8f6f8]/5 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-7xl md:text-9xl mb-8 block select-none"
          >
            🚀
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-4">Ready to Make an Impact?</h2>
          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
            Even if there are no open roles right now, we would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:careers@couponsbit.us"
              className="w-full sm:w-auto px-12 py-6 bg-white text-[#19798d] rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-all text-center"
            >
              Send Your CV
            </a>
            <Link
              href="/about"
              className="w-full sm:w-auto px-12 py-6 border-2 border-white text-white rounded-full font-black text-xl hover:bg-white hover:text-[#19798d] transition-all text-center"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
