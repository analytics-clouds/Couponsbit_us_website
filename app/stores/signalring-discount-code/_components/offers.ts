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


export const SIGNALRING_COUPONS: Coupon[] = [
  {
    id: "sr1",
    topLabel: "Only",
    mainValue: "$399",
    offText: "",
    title: "SignalRing Promo Code – Smart Ring, $399",
    description: "Experience smart wearable technology with the Signal Ring at $399.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get the Signal Ring for just $399",
      "Available in sizes 5 to 13 for a comfortable fit",
      "Made to bring together style and smart features",
      "Shop this limited-period offer today",
    ],
  },
  {
    id: "sr2",
    topLabel: "Up to",
    mainValue: "5 DAYS",
    offText: "BATTERY",
    title: "SignalRing Promo Code – Smart Ring with 5-Day Battery",
    description: "Stay connected for longer with a smart ring that gives up to five days of battery life.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Enjoy up to 5 days of battery life on a single charge",
      "Built for reliable performance in daily use",
      "Comfortable to wear through your whole daily routine",
      "Available for a limited period only",
    ],
  },
  {
    id: "sr3",
    topLabel: "Only",
    mainValue: "$399",
    offText: "",
    title: "SignalRing Discount Code – Bluetooth Wearable Ring, $399",
    description: "Upgrade your wearable tech with the Bluetooth-enabled Signal Ring.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Shop the Bluetooth Signal Ring for just $399",
      "Comes with Bluetooth Low Energy connectivity",
      "Made for smooth everyday use",
      "Order now while this offer is on",
    ],
  },
  {
    id: "sr4",
    topLabel: "FREE",
    mainValue: "SIZING KIT",
    offText: "",
    title: "SignalRing Discount Code – Free Sizing Kit & 30-Day Returns",
    description: "Buy your Signal Ring and get a complimentary sizing kit.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Purchase the Signal Ring for $399",
      "Get a free sizing kit along with your order",
      "Shop with confidence, thanks to the 30-day return policy",
      "This limited-period promotion is on right now",
    ],
  },
  {
    id: "sr5",
    topLabel: "Save",
    mainValue: "15%",
    offText: "OFF",
    title: "SignalRing Coupon Code – Save 15% Storewide",
    description: "Save 15% on eligible SignalRing products with this verified storewide offer.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Enjoy 15% off on qualifying purchases across the store",
      "Apply the coupon code at checkout to claim your savings",
      "The offer is valid on eligible catalogue purchases",
      "Redeem this verified deal before it expires",
    ],
  },
  {
    id: "sr6",
    topLabel: "Save",
    mainValue: "15%",
    offText: "OFF",
    title: "SignalRing Coupon Code – Save 15% on Personalized Gifts",
    description: "Save on personalized gifts with this limited-period SignalRing offer.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get 15% off on eligible personalized gifts",
      "Enter the coupon code at checkout",
      "Browse unique personalized gift options for every occasion",
      "Shop before this promotion ends",
    ],
  },
  {
    id: "sr7",
    topLabel: "Save",
    mainValue: "10%",
    offText: "OFF",
    title: "SignalRing Voucher Code – Save 10% Storewide",
    description: "Make extra savings on your SignalRing purchase.",
    code: "",
    verified: "Yes",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get 10% off on eligible storewide purchases",
      "Apply the coupon code at checkout, if it is accepted",
      "The offer is valid on qualifying products",
      "Limited-period savings, available while the promotion lasts",
    ],
  },
];