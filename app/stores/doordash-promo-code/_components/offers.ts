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
}

export const STORE_URL = "https://www.doordash.com/";

export const COUPONS: Coupon[] = [
  {
    id: "c1",
    topLabel: "$0",
    mainValue: "DELIVERY",
    offText: "FEE",
    title: "DoorDash Coupon Code: $0 Delivery Fee on Your First Order",
    description: "Get your first eligible DoorDash order delivered without paying a delivery fee.",
    code: "",
    verified: "Verified",
    userType: "New Customers",
    validTill: "30 Nov 2026",
    points: [
      "Pay nothing for delivery on your first DoorDash order.",
      "Open to eligible new customers.",
      "Order from participating restaurants and stores.",
      "Limited-time offer on qualifying orders."
    ]
  },
  {
    id: "c2",
    topLabel: "SAVE",
    mainValue: "30%",
    offText: "OFF",
    title: "DoorDash Coupon Code: Save 30% on Your Order",
    description: "Cut the cost of eligible DoorDash orders for a limited time.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Take 30% off qualifying DoorDash orders.",
      "Applies to eligible restaurants.",
      "Savings show up instantly at checkout.",
      "Available for a limited time."
    ]
  },
  {
    id: "c3",
    topLabel: "FLAT",
    mainValue: "20%",
    offText: "OFF",
    title: "DoorDash Promo Code: 20% Off Chips & Queso",
    description: "Snack on a classic combo for less.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 20% on eligible chips and queso orders.",
      "Valid at participating restaurants.",
      "Discount runs for a limited time.",
      "Applies to qualifying menu items."
    ]
  },
  {
    id: "c4",
    topLabel: "FLAT",
    mainValue: "15%",
    offText: "OFF",
    title: "DoorDash Promo Code: 15% Off Taco Bell Orders Over $34",
    description: "Save more when you place a bigger Taco Bell order through DoorDash.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Take 15% off Taco Bell orders of $34 or more.",
      "Applies to eligible menu items.",
      "Valid on qualifying purchases.",
      "Limited-time promotion for DoorDash customers."
    ]
  },
  {
    id: "c5",
    topLabel: "FROM",
    mainValue: "$7.15",
    offText: "",
    title: "DoorDash Discount Code: Starbucks Caramel Frappuccino From $7.15",
    description: "Order a Starbucks favorite starting at $7.15.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Starbucks Caramel Frappuccino starts at $7.15.",
      "Easy ordering through DoorDash.",
      "Available at participating Starbucks locations.",
      "Prices may differ by location."
    ]
  },
  {
    id: "c6",
    topLabel: "FLAT",
    mainValue: "$5",
    offText: "OFF",
    title: "DoorDash Discount Code: $5 Off Zio Al's Orders Over $35",
    description: "Save on your next pizza night with Zio Al's.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get $5 off when your order hits $35 or more.",
      "Valid at participating Zio Al's Pizza & Pasta locations.",
      "Discount is applied at checkout.",
      "Available for a limited time."
    ]
  },
  {
    id: "c7",
    topLabel: "FLAT",
    mainValue: "$15",
    offText: "OFF",
    title: "DoorDash Voucher Code: $15 Off Select Wine",
    description: "Save when you stock up on select wines.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Take $15 off when you buy six bottles of eligible wine.",
      "Applies to participating wine selections.",
      "Discount is applied at checkout.",
      "Offered for a limited time."
    ]
  },
  {
    id: "c8",
    topLabel: "SAVE",
    mainValue: "$1",
    offText: "OFF",
    title: "DoorDash Voucher Code: Save $1 on Red Bull",
    description: "Grab your go-to energy drink and save right away.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save $1 when you buy two eligible 12 oz Red Bull cans.",
      "Applies to qualifying products.",
      "Valid on eligible orders.",
      "Limited-time promotion while supplies last."
    ]
  },
  {
    id: "c9",
    topLabel: "FLAT",
    mainValue: "$6",
    offText: "OFF",
    title: "DoorDash Referral Code: $6 Off Orders Over $40",
    description: "Save on qualifying orders from Jackson's Food Stores.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get $6 off when your order reaches $40 or more.",
      "Valid at participating Jackson's Food Stores locations.",
      "Discount is applied at checkout on eligible purchases.",
      "Available for a limited time."
    ]
  }
];
