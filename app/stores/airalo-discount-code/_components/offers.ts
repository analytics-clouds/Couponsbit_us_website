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

export const AIRALO_COUPONS: Coupon[] = [
  {
    id: "air1",
    topLabel: "From",
    mainValue: "$27",
    offText: "/7 DAYS",
    title: "Airalo Promo Code – Unlimited USA eSIM from $27",
    description: "Stay connected across the US with unlimited high-speed data for just $27 for 7 days.",
    code: "AC10ALL",
    verified: "Verified",
    userType: "New & Existing",
    validTill: "TBD",
    points: [
      "Use code **AC10ALL** at checkout to get eligible savings.",
      "Get unlimited high-speed data on the T-Mobile 5G network for seven days.",
      "Plans start at only $27 with dependable nationwide coverage.",
      "A great pick for travelers visiting the US for a short trip.",
    ],
  },
  {
    id: "air2",
    topLabel: "Only",
    mainValue: "$59",
    offText: "/30 DAYS",
    title: "Airalo Promo Code – 50GB USA eSIM for $59",
    description: "Get 50GB of high-speed data for 30 days at a fixed price of $59.",
    code: "AC10ALL",
    verified: "Verified",
    userType: "New & Existing",
    validTill: "TBD",
    points: [
      "Enter code **AC10ALL** at checkout on eligible purchases.",
      "Buy 50GB of mobile data for just $59.",
      "Stay connected for up to 30 days with one eSIM plan.",
      "Ideal for long vacations, business trips, and remote work.",
    ],
  },
  {
    id: "air3",
    topLabel: "UP TO",
    mainValue: "10%",
    offText: "CASHBACK",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Airalo Discount Code – Earn Up to 10% Cashback",
    description: "Get up to 10% cashback on eligible Airalo eSIM purchases through Airalo Rewards.",
    code: "AC10ALL",
    verified: "Verified",
    userType: "New & Existing",
    validTill: "TBD",
    points: [
      "Enter code **AC10ALL** to save on qualifying purchases where eligible.",
      "Earn up to 10% cashback through Airalo Rewards.",
      "Rewards are added as Airmoney for future orders.",
      "A smart choice for frequent international travelers.",
    ],
  },
  {
    id: "air4",
    topLabel: "UP TO",
    mainValue: "20%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Airalo Discount Code – Up to 20% Off",
    description: "Save up to 20% on select USA eSIM plans during eligible promotions.",
    code: "AC10ALL",
    verified: "Verified",
    userType: "New & Existing",
    validTill: "TBD",
    points: [
      "Enter code **AC10ALL** to get available discounts on qualifying plans.",
      "Save up to 20% on select USA eSIM packages.",
      "Cut your travel data costs with limited-time savings.",
      "Perfect for existing customers who want to save more.",
    ],
  },
  {
    id: "air5",
    topLabel: "EARN",
    mainValue: "$3",
    offText: "",
    title: "Airalo Coupon Code – Refer Friends & Earn $3",
    description: "Earn $3 in Airmoney each time an eligible friend joins through your referral.",
    code: "AC10ALL",
    verified: "Verified",
    userType: "New & Existing",
    validTill: "TBD",
    points: [
      "Use code **AC10ALL** on eligible purchases for extra savings.",
      "Give friends $3 in Airmoney to help them get started.",
      "Get $3 in Airmoney for every successful referral.",
      "Use referral rewards toward future eSIM purchases.",
    ],
  },
  {
    id: "air6",
    topLabel: "SAVE",
    mainValue: "15%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Airalo Coupon Code – 15% Off Your First eSIM",
    description: "Save 15% on your first eligible Airalo eSIM purchase.",
    code: "AC10ALL",
    verified: "Verified",
    userType: "New & Existing",
    validTill: "TBD",
    points: [
      "Enter code **AC10ALL** at checkout on eligible first orders.",
      "Take 15% off your first eligible eSIM activation.",
      "Activate your eSIM digitally in just a few minutes.",
      "A great way to save before your next US trip.",
    ],
  },
  {
    id: "air7",
    topLabel: "From",
    mainValue: "$4.50",
    offText: "",
    title: "Airalo Voucher Code – USA eSIM Plans from $4.50",
    description: "Pick low-cost USA eSIM plans starting at just $4.50.",
    code: "AC10ALL",
    verified: "Verified",
    userType: "New & Existing",
    validTill: "TBD",
    points: [
      "Enter code **AC10ALL** to get eligible savings at checkout.",
      "Shop USA eSIM plans with prices starting at $4.50.",
      "Choose the data package that fits your trip.",
      "Skip pricey roaming charges with low-cost prepaid data.",
    ],
  },
];
