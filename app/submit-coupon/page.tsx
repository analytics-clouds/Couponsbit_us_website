import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SubmitCouponPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main className="min-h-[60vh] flex items-center justify-center pt-20">
        <h1 className="text-3xl font-bold text-brand-primary">Submit a Coupon — Coming Soon</h1>
      </main>
      <Footer />
    </div>
  );
}
