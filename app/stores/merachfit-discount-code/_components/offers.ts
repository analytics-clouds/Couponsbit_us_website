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

export const MERACHFIT_COUPONS: Coupon[] = [
  {
    id: "mf1",
    topLabel: "SAVE",
    mainValue: "$250",
    offText: "OFF",
    title: "Merachfit Promo Code – $250 Off on NovaRow 950 Dual Resistance Rower",
    description: "Save $250 on the NovaRow 950 Dual Resistance Rowing Machine for a limited time.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save $250 and get the NovaRow 950 for just $469.99.",
      "Dual resistance gives you a realistic rowing workout at home.",
      "A great pick for full-body cardio and strength training.",
      "Extra savings may apply at checkout on eligible orders.",
    ],
  },
  {
    id: "mf2",
    topLabel: "SAVE",
    mainValue: "$260",
    offText: "OFF",
    title: "Merachfit Promo Code – $260 Off on Q1S Interactive Rowing Machine",
    description: "Upgrade your home gym with the Q1S Interactive Rowing Machine and save $260.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save $260 and pay only $469.99 instead of $729.99.",
      "Enjoy interactive rowing workouts at home.",
      "Perfect for beginners and experienced fitness fans.",
      "Extra savings may apply at checkout on eligible orders.",
    ],
  },
  {
    id: "mf3",
    topLabel: "SAVE",
    mainValue: "30%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Merachfit Discount Code – UltraWalk W60 Plus Walking Pad 30% Off",
    description: "Take 30% off the UltraWalk W60 Plus Walking Pad.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 30% and get it for only $349.99.",
      "The compact design fits easily in a home or office.",
      "Great for staying active while you work or relax.",
      "Extra savings may apply at checkout on eligible orders.",
    ],
  },
  {
    id: "mf4",
    topLabel: "SAVE",
    mainValue: "$170",
    offText: "OFF",
    title: "Merachfit Discount Code – $170 Off on CoreRow R300 Water Rower",
    description: "Enjoy a smooth rowing workout and save $170 on the CoreRow R300.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save $170 and get it for just $279.99.",
      "Has a durable rubberwood frame with water resistance.",
      "Ideal for realistic indoor rowing workouts.",
      "Extra savings may apply at checkout on eligible orders.",
    ],
  },
  {
    id: "mf5",
    topLabel: "SAVE",
    mainValue: "$190",
    offText: "OFF",
    title: "Merachfit Coupon Code – $190 Off on CoreRow R28 Wooden Water Rower",
    description: "Get the CoreRow R28 Wooden Water Rower at a lower price.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save $190 and pay only $269.99.",
      "The wooden build gives it a premium look and feel.",
      "Perfect for full-body home fitness training.",
      "Extra savings may apply at checkout on eligible orders.",
    ],
  },
  {
    id: "mf6",
    topLabel: "SAVE",
    mainValue: "$61",
    offText: "OFF",
    title: "Merachfit Coupon Code – $61 Off on S23 Recumbent Bike",
    description: "Save $61 on the S23 Recumbent Bike for comfortable indoor cycling.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get the S23 Recumbent Bike for just $239.",
      "Made for low-impact cardio workouts.",
      "Great for home fitness and rehab exercises.",
      "Extra savings may apply at checkout on eligible orders.",
    ],
  },
  {
    id: "mf7",
    topLabel: "SAVE",
    mainValue: "$109.99",
    offText: "OFF",
    title: "Merachfit Voucher Code – $109.99 Off on Simulated Stair Machine",
    description: "Get a foldable stair machine for less with this limited-time offer.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save $109.99 and pay only $49.99.",
      "The foldable design makes storage simple and easy.",
      "A great option for cardio and lower-body workouts.",
      "Extra savings may apply at checkout on eligible orders.",
    ],
  },
  {
    id: "mf8",
    topLabel: "Only",
    mainValue: "$339.99",
    offText: "",
    title: "Merachfit Voucher Code – NovaRow RS3 Magnetic Rower for $339.99",
    description: "Bring home the NovaRow RS3 Magnetic Rower for only $339.99.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get the NovaRow RS3 for just $339.99.",
      "Magnetic resistance gives you smooth, quiet workouts.",
      "Ideal for building endurance and total-body strength.",
      "Extra savings may apply at checkout on eligible orders.",
    ],
  },
];
