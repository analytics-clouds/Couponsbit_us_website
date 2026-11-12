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

export const FIREFLYZ_COUPONS: Coupon[] = [
  {
    id: "ff1",
    topLabel: "UP TO",
    mainValue: "60%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Firefly Discount Code – Up to 60% Off Extra Baggage",
    description: "Pre-book your extra baggage online and save up to 60% before your flight.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 60% on pre-booked extra baggage.",
      "Available when you book baggage online in advance.",
      "Valid on eligible flight bookings.",
      "A great way to cut your travel costs.",
    ],
  },
  {
    id: "ff2",
    topLabel: "UP TO",
    mainValue: "30%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Firefly Student Promo Code – Up to 30% Off Flights",
    description: "Students can save up to 30% on select domestic and international flights.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 30% on eligible student fares.",
      "Valid on select domestic and international routes.",
      "Available on verified student bookings.",
      "Perfect for low-cost student travel.",
    ],
  },
  {
    id: "ff3",
    topLabel: "SAVE",
    mainValue: "10%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Firefly Voucher Code – 10% Off Book Now, Pay Later",
    description: "Save 10% when you pay for your flight with eligible Buy Now, Pay Later options.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get 10% off with eligible BNPL payment methods.",
      "Available on qualifying flight bookings.",
      "Payment offer for a limited time.",
      "Ideal for travelers who like flexible payments.",
    ],
  },
  {
    id: "ff4",
    topLabel: "From",
    mainValue: "$29",
    offText: "",
    title: "Firefly Promo Code – One-Way Flights from $29",
    description: "Book one-way flights to popular U.S. destinations from just $29.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "One-way fares start at $29.",
      "Available on select U.S. routes.",
      "Valid for eligible travel dates.",
      "Great for budget-friendly trips.",
    ],
  },
  {
    id: "ff5",
    topLabel: "SAVE",
    mainValue: "3,500",
    offText: "Points",
    title: "Firefly Reward Code – Redeem 3,500 Points on Hotels",
    description: "Use 3,500 Reward Points on eligible hotel bookings and save on your stay.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Redeem 3,500 Reward Points on hotel bookings.",
      "Valid at participating hotel partners.",
      "Available on eligible reservations.",
      "A smart way to use your travel rewards.",
    ],
  },
  {
    id: "ff6",
    topLabel: "EARN",
    mainValue: "10%",
    offText: "EXTRA",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Firefly Referral Code – Earn 10% Extra Reward Points",
    description: "Convert eligible bank reward points and get an extra 10% bonus.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Earn 10% extra Reward Points on eligible conversions.",
      "Available with participating bank rewards programs.",
      "The bonus applies to qualifying point transfers.",
      "Great for getting the most out of your travel rewards.",
    ],
  },
  {
    id: "ff7",
    topLabel: "EXTRA",
    mainValue: "5%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Firefly Discount Code – Extra 5% Off Summer Travel",
    description: "Get an extra 5% off eligible U.S. flights and earn 2X Reward Points.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save an extra 5% on select U.S. flight bookings.",
      "Earn double Reward Points on eligible purchases.",
      "Available during the Summer Travel Sale.",
      "Perfect for travelers who want extra savings and rewards.",
    ],
  },
];
