export interface Coupon {
  id: string;
  topLabel: string;
  mainValue: string;
  offText: string;
  title: string;
  description: string;
  code: string;
  verified: string;
  userType: string;
  validTill: string;
  points: string[];
  valueFontClass?: string;
}

export const KRISP_COUPONS: Coupon[] = [
  {
    id: "c1",
    topLabel: "SALE",
    mainValue: "80%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Krisp Discount Code – Up to 80% Off on Sale Plans",
    description: "Save up to 80% on Krisp sale plans and make your meetings sound better for less.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 80% on select Krisp plans.",
      "Get AI-powered noise cancellation and voice enhancement.",
      "Improve audio quality for meetings and online calls.",
      "Great for remote workers, students, and business teams.",
    ],
  },
  {
    id: "c2",
    topLabel: "SALE",
    mainValue: "26%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Krisp Discount Code – 26% Off on Sales Solutions",
    description: "Boost your team's performance with Krisp solutions at 26% off.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 26% on eligible Krisp solutions.",
      "Make calls clearer during customer conversations.",
      "Use AI-powered tools for better communication.",
      "Great for sales professionals and support teams.",
    ],
  },
  {
    id: "c3",
    topLabel: "PROMO",
    mainValue: "30%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Krisp Promo Code – 30% Off on Business Plans",
    description: "Cut your business costs with Krisp plans that save you up to 30%.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get 30% off eligible business plans.",
      "Spend less on hardware with AI-powered audio features.",
      "Improve meeting quality without extra equipment.",
      "Perfect for growing businesses and remote teams.",
    ],
  },
  {
    id: "c4",
    topLabel: "PROMO",
    mainValue: "30%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Krisp Promo Code – Up to 30% Off on Premium Plans",
    description: "Get premium Krisp features and save up to 30% on select plans.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 30% on eligible Krisp subscriptions.",
      "Get premium AI meeting and voice tools.",
      "Pick a flexible plan that fits the way you work.",
      "Great for professionals who meet online every day.",
    ],
  },
  {
    id: "c5",
    topLabel: "VOUCHER",
    mainValue: "40%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Krisp Voucher Code – 40% Off Storewide",
    description: "Get 40% off across the Krisp store for a limited time.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 40% on eligible Krisp products and plans.",
      "Unlock premium meeting and audio features.",
      "Make your voice sound better on online calls.",
      "Perfect for personal and business use.",
    ],
  },
  {
    id: "c6",
    topLabel: "VOUCHER",
    mainValue: "50%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Krisp Voucher Code – 50% Off on Krisp Plans",
    description: "Make the most of this limited-time deal and save 50% on select Krisp plans.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get 50% off eligible Krisp subscriptions.",
      "Use advanced AI-powered communication tools.",
      "Upgrade your meetings with clearer audio.",
      "A smart pick for remote work and virtual teamwork.",
    ],
  },
  {
    id: "c7",
    topLabel: "COUPON",
    mainValue: "30%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Krisp Coupon Code – 30% Off on Annual Plans",
    description: "Pick an annual Krisp plan and save up to 30%.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 30% on eligible annual memberships.",
      "Unlock premium features all year long.",
      "Pay less than you would with monthly billing.",
      "Best for long-term users and business teams.",
    ],
  },
];
