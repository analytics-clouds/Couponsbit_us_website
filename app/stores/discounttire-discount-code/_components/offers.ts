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

export const STORE_URL = "https://www.discounttire.com/";

export const COUPONS: Coupon[] = [
  {
    id: "c1",
    topLabel: "UP TO",
    mainValue: "$130",
    offText: "OFF",
    title: "Discount Tire Coupon Code: Up to $130 in Instant Savings",
    description: "Score up to $130 off select tire brands during this limited-time promotion.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Stack instant savings of up to $130 on eligible tires.",
      "Applies to select participating brands.",
      "Shop qualifying tires while the promotion is running.",
      "Savings are taken off right away on eligible purchases."
    ]
  },
  {
    id: "c2",
    topLabel: "SAVE",
    mainValue: "$80",
    offText: "OFF",
    title: "Discount Tire Coupon Code: Save $80 on a Set of 4 Tires",
    description: "Buy four eligible tires and take $80 off instantly.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get $80 off select sets of four tires.",
      "Applies to qualifying tire brands.",
      "A great time to replace all four tires at once.",
      "Available for a limited time."
    ]
  },
  {
    id: "c3",
    topLabel: "SAVE",
    mainValue: "$50",
    offText: "OFF",
    title: "Discount Tire Promo Code: Save $50 on Orders of $599+",
    description: "The more you spend, the more you save, with instant savings at checkout.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Take $50 off when your order reaches $599 or more.",
      "Discount applies automatically at checkout.",
      "Valid on eligible products.",
      "Limited-time savings on qualifying orders."
    ]
  },
  {
    id: "c4",
    topLabel: "SAVE",
    mainValue: "$80",
    offText: "OFF",
    title: "Discount Tire Promo Code: Save $80 on Mickey Thompson Tires",
    description: "Give your ride an upgrade with instant savings on Mickey Thompson tires.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save $80 on select Mickey Thompson tires.",
      "Instant savings apply to eligible purchases.",
      "Valid on qualifying tire models only.",
      "Offered for a limited time."
    ]
  },
  {
    id: "c5",
    topLabel: "FROM",
    mainValue: "$129",
    offText: "",
    title: "Discount Tire Discount Code: Yokohama YK-GTX Tires From $129",
    description: "Find dependable all-season tires at a budget-friendly price.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Yokohama YK-GTX tires start at $129.",
      "Built for steady performance all year long.",
      "Offered in eligible sizes.",
      "Limited-time pricing applies."
    ]
  },
  {
    id: "c6",
    topLabel: "FROM",
    mainValue: "$197",
    offText: "",
    title: "Discount Tire Discount Code: Bridgestone Dueler LX Tires From $197",
    description: "Fit your SUV or crossover with Bridgestone tires starting at $197.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Bridgestone Dueler LX tires begin at $197.",
      "A good match for smooth, comfortable daily driving.",
      "Offered in select tire sizes.",
      "Available for a limited time."
    ]
  },
  {
    id: "c7",
    topLabel: "SPECIAL",
    mainValue: "PRICING",
    offText: "",
    title: "Discount Tire Voucher Code: Continental CrossContact LX20 Special Pricing",
    description: "Save on premium touring tires with special promotional pricing.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get special pricing on Continental CrossContact LX20 tires.",
      "Built for a smooth, dependable touring ride.",
      "Offered in eligible tire sizes.",
      "Valid for a limited time."
    ]
  },
  {
    id: "c8",
    topLabel: "FROM",
    mainValue: "$95",
    offText: "",
    title: "Discount Tire Voucher Code: Milestar Interceptor AS810 Tires From $95",
    description: "Budget-friendly all-season tires are available from just $95.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Milestar Interceptor AS810 tires start at $95.",
      "Ideal for everyday driving.",
      "Offered in qualifying sizes.",
      "Limited-time pricing in effect."
    ]
  },
  {
    id: "c9",
    topLabel: "FROM",
    mainValue: "$70",
    offText: "",
    title: "Discount Tire Referral Code: Peerless Tire Chains From $70",
    description: "Get ready for winter roads with tire chains starting at $70.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Peerless Tire Chains begin at $70.",
      "Helps boost traction in snow and ice.",
      "Available for eligible vehicle sizes.",
      "Offer lasts while supplies last."
    ]
  },
  {
    id: "c10",
    topLabel: "SAVE",
    mainValue: "$50",
    offText: "OFF",
    title: "Discount Tire Referral Code: Save $50 or Choose Promotional Financing",
    description: "Pick instant savings or flexible financing on eligible purchases.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get $50 in instant savings on qualifying purchases.",
      "Or choose promotional financing at checkout.",
      "Valid on eligible products and orders.",
      "Limited-time offer for qualifying customers."
    ]
  }
];
