export interface Coupon {
  id: string;
  topLabel: string;
  mainValue: string;
  offText: string;
  valueFontClass?: string;
  title: string;
  description: string;
  code: string;
  verified: string;
  userType: string;
  validTill: string;
  points: string[];
}

export const SUPERRUN_COUPONS: Coupon[] = [
  {
    id: "s1",
    topLabel: "SAVE",
    mainValue: "$30",
    offText: "",
    title: "Superun Promo Code – RUN Pro Foldable Treadmill, Save $30",
    description: "Upgrade your home workouts with the RUN Pro Foldable Treadmill at a lower price.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save $30 on the Superun RUN Pro Foldable Treadmill with Table Board",
      "Get it for just $264.99 for a limited period",
      "The foldable design helps you save space at home",
      "Shop now before this limited-period deal ends",
    ],
  },
  {
    id: "s2",
    topLabel: "SAVE",
    mainValue: "$20",
    offText: "",
    title: "Superun Promo Code – Walk&Run 2-in-1 Treadmill, Save $20",
    description: "Enjoy both walking and running workouts with this foldable treadmill.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save $20 on the Superun Walk&Run 2-in-1 Foldable Treadmill",
      "Buy it for just $249.99",
      "Compact design that fits easily in most homes",
      "Available while this promotion lasts",
    ],
  },
  {
    id: "s3",
    topLabel: "Only",
    mainValue: "$39.99",
    offText: "",
    title: "Superun Discount Code – Treadmill Remote Control, $39.99",
    description: "Replace your treadmill remote with an official Superun accessory.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Buy the Superun Treadmill Remote Control Replacement for $39.99",
      "Made for compatible Superun treadmills",
      "A handy replacement for a lost or damaged remote",
      "Shop this limited-period offer today",
    ],
  },
  {
    id: "s4",
    topLabel: "SAVE",
    mainValue: "$10",
    offText: "",
    title: "Superun Discount Code – WALK Urban Under Desk Treadmill, Save $10",
    description: "Stay active while you work with the WALK Urban Under Desk Treadmill.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save $10 on the Superun WALK Urban Under Desk Treadmill",
      "Get yours for just $129.00",
      "Great for walking while working or studying",
      "Limited-period savings are available right now",
    ],
  },
  {
    id: "s5",
    topLabel: "Up to",
    mainValue: "35%",
    offText: "OFF",
    title: "Superun Coupon Code – Save Up to 35%",
    description: "Unlock extra savings with this limited-period Superun offer.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 35% on eligible Superun products",
      "Apply the coupon code at checkout",
      "This community offer is still awaiting verification",
      "Redeem it before the promotion expires",
    ],
  },
  {
    id: "s6",
    topLabel: "Up to",
    mainValue: "65%",
    offText: "OFF",
    title: "Superun Coupon Code – Save Up to 65%",
    description: "Grab one of the biggest Superun savings available.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get up to 65% off on eligible Superun products",
      "Enter the coupon code at checkout",
      "This promotional offer is marked as not yet verified",
      "Shop early while the deal is available",
    ],
  },
  {
    id: "s7",
    topLabel: "Up to",
    mainValue: "40%",
    offText: "OFF",
    title: "Superun Voucher Code – Save Up to 40%",
    description: "Enjoy additional savings on selected Superun products.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 40% on qualifying purchases",
      "Use the coupon code at checkout",
      "This community promotion is currently pending verification",
      "Limited-period offer, while stocks last",
    ],
  },
  {
    id: "s8",
    topLabel: "FREE",
    mainValue: "SHIPPING",
    offText: "",
    title: "Superun Deals – Free Shipping Storewide",
    description: "Save on delivery with free shipping across the Superun store.",
    code: "fempower100",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Enjoy free shipping on eligible storewide orders",
      "Apply code fempower100 at checkout if required",
      "This is a verified storewide shipping offer",
      "Shop now to save on your order total",
    ],
  },
];
