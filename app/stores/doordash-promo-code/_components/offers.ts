export interface Coupon {
  id: string;
  title: string;
  description?: string;
  code?: string;
  label?: string;
  value?: string;
  desc?: string;
  bullets?: string[];
  verified?: string;
  userType?: string;
  validTill?: string;
}

export const STORE_URL = "https://www.doordash.com/";

export const COUPONS: Coupon[] = [
  {
    id: "c1",
    label: "$0",
    value: "DELIVERY FEE",
    title: "DoorDash Coupon Code: $0 Delivery Fee on Your First Order",
    desc: "Get your first eligible DoorDash order delivered without paying a delivery fee.",
    verified: "Verified",
    userType: "New Customers",
    validTill: "30 Nov 2026",
    bullets: [
      "Pay nothing for delivery on your first DoorDash order.",
      "Open to eligible new customers.",
      "Order from participating restaurants and stores.",
      "Limited-time offer on qualifying orders."
    ]
  },
  {
    id: "c2",
    label: "SAVE",
    value: "30% OFF",
    title: "DoorDash Coupon Code: Save 30% on Your Order",
    desc: "Cut the cost of eligible DoorDash orders for a limited time.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Take 30% off qualifying DoorDash orders.",
      "Applies to eligible restaurants.",
      "Savings show up instantly at checkout.",
      "Available for a limited time."
    ]
  },
  {
    id: "c3",
    label: "FLAT",
    value: "20% OFF",
    title: "DoorDash Promo Code: 20% Off Chips & Queso",
    desc: "Snack on a classic combo for less.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save 20% on eligible chips and queso orders.",
      "Valid at participating restaurants.",
      "Discount runs for a limited time.",
      "Applies to qualifying menu items."
    ]
  },
  {
    id: "c4",
    label: "FLAT",
    value: "15% OFF",
    title: "DoorDash Promo Code: 15% Off Taco Bell Orders Over $34",
    desc: "Save more when you place a bigger Taco Bell order through DoorDash.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Take 15% off Taco Bell orders of $34 or more.",
      "Applies to eligible menu items.",
      "Valid on qualifying purchases.",
      "Limited-time promotion for DoorDash customers."
    ]
  },
  {
    id: "c5",
    label: "FROM",
    value: "$7.15",
    title: "DoorDash Discount Code: Starbucks Caramel Frappuccino From $7.15",
    desc: "Order a Starbucks favorite starting at $7.15.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Starbucks Caramel Frappuccino starts at $7.15.",
      "Easy ordering through DoorDash.",
      "Available at participating Starbucks locations.",
      "Prices may differ by location."
    ]
  },
  {
    id: "c6",
    label: "FLAT",
    value: "$5 OFF",
    title: "DoorDash Discount Code: $5 Off Zio Al’s Orders Over $35",
    desc: "Save on your next pizza night with Zio Al’s.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get $5 off when your order hits $35 or more.",
      "Valid at participating Zio Al’s Pizza & Pasta locations.",
      "Discount is applied at checkout.",
      "Available for a limited time."
    ]
  },
  {
    id: "c7",
    label: "FLAT",
    value: "$15 OFF",
    title: "DoorDash Voucher Code: $15 Off Select Wine",
    desc: "Save when you stock up on select wines.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Take $15 off when you buy six bottles of eligible wine.",
      "Applies to participating wine selections.",
      "Discount is applied at checkout.",
      "Offered for a limited time."
    ]
  },
  {
    id: "c8",
    label: "SAVE",
    value: "$1 OFF",
    title: "DoorDash Voucher Code: Save $1 on Red Bull",
    desc: "Grab your go-to energy drink and save right away.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save $1 when you buy two eligible 12 oz Red Bull cans.",
      "Applies to qualifying products.",
      "Valid on eligible orders.",
      "Limited-time promotion while supplies last."
    ]
  },
  {
    id: "c9",
    label: "FLAT",
    value: "$6 OFF",
    title: "DoorDash Referral Code: $6 Off Orders Over $40",
    desc: "Save on qualifying orders from Jackson’s Food Stores.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get $6 off when your order reaches $40 or more.",
      "Valid at participating Jackson’s Food Stores locations.",
      "Discount is applied at checkout on eligible purchases.",
      "Available for a limited time."
    ]
  }
];