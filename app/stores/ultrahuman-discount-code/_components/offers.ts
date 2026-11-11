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

export const ULTRAHUMAN_COUPONS: Coupon[] = [
  {
    id: "c1",
    topLabel: "SALE",
    mainValue: "40%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Ultrahuman Discount Code – 40% Off on Ring AIR",
    description: "Upgrade your wellness routine with up to 40% off the Ultrahuman Ring AIR for a limited time.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 40% on the Ultrahuman Ring AIR.",
      "Get 2-hour delivery in select cities.",
      "Delivery is available from 11 AM to 7 PM.",
      "Great for tracking sleep, recovery, and daily health.",
    ],
  },
  {
    id: "c2",
    topLabel: "SALE",
    mainValue: "30%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Ultrahuman Discount Code – 30% Off + 3 Free Months of UltrahumanX",
    description: "Save more on your order and get three free months of the UltrahumanX Care and Insurance Plan.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get 30% off eligible Ultrahuman products.",
      "Get three free months of UltrahumanX.",
      "Enjoy extra protection and care benefits.",
      "Offer valid for a limited time while available.",
    ],
  },
  {
    id: "c3",
    topLabel: "PROMO",
    mainValue: "20%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Ultrahuman Promo Code – 20% Off Sitewide",
    description: "Get 20% off eligible Ultrahuman products for a limited time.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 20% on qualifying orders.",
      "Shop wellness products across the site.",
      "Upgrade your health tracking for less.",
      "Great for first-time and returning customers.",
    ],
  },
  {
    id: "c4",
    topLabel: "PROMO",
    mainValue: "20%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Ultrahuman Promo Code – Up to 20% Off on Ring AIR",
    description: "Save up to 20% when you buy the Ultrahuman Ring AIR.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get up to 20% off the Ring AIR.",
      "Track sleep, movement, and recovery.",
      "Get advanced health insights.",
      "A great pick for everyday wellness.",
    ],
  },
  {
    id: "c5",
    topLabel: "VOUCHER",
    mainValue: "46%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Ultrahuman Voucher Code – Flat 46% Off on Home Products",
    description: "Save big on select home products with this limited-time deal.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Enjoy a flat 46% discount on eligible products.",
      "Shop select home essentials for less.",
      "Savings available for a limited time.",
      "Great for upgrading your home setup.",
    ],
  },
  {
    id: "c6",
    topLabel: "VOUCHER",
    mainValue: "25%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Ultrahuman Voucher Code – 25% Off Sitewide",
    description: "Take advantage of 25% off eligible Ultrahuman products.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 25% on qualifying purchases.",
      "Check out premium wellness technology.",
      "Shop limited-time deals.",
      "Great for getting the most out of your savings.",
    ],
  },
  {
    id: "c7",
    topLabel: "COUPON",
    mainValue: "30%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Ultrahuman Coupon Code – 30% Off on Ring AIR",
    description: "Get a bigger discount on the Ultrahuman Ring AIR for a limited time.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 30% on eligible Ring AIR purchases.",
      "Try lightweight, comfortable wearable technology.",
      "Monitor sleep, recovery, and activity.",
      "Ideal for fitness and wellness fans.",
    ],
  },
  {
    id: "c8",
    topLabel: "COUPON",
    mainValue: "10%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Ultrahuman Coupon Code – 10% Off on All Orders",
    description: "Get extra savings on your next Ultrahuman purchase with this sitewide offer.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 10% on eligible orders.",
      "Shop health and wellness products.",
      "Limited-time savings on select purchases.",
      "Perfect for everyday wellness shopping.",
    ],
  },
];
