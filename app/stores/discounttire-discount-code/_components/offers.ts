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
  heading?: string;
  sub?: string;
}

export const STORE_URL = "https://www.discounttire.com/";

export const COUPONS: Coupon[] = [
  {
    id: "c1",
    label: "UP TO",
    value: "$130 OFF",
    title: "Discount Tire Coupon Code: Up to $130 in Instant Savings",
    desc: "Score up to $130 off select tire brands during this limited-time promotion.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Stack instant savings of up to $130 on eligible tires.",
      "Applies to select participating brands.",
      "Shop qualifying tires while the promotion is running.",
      "Savings are taken off right away on eligible purchases."
    ]
  },
  {
    id: "c2",
    label: "SAVE",
    value: "$80 OFF",
    title: "Discount Tire Coupon Code: Save $80 on a Set of 4 Tires",
    desc: "Buy four eligible tires and take $80 off instantly.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get $80 off select sets of four tires.",
      "Applies to qualifying tire brands.",
      "A great time to replace all four tires at once.",
      "Available for a limited time."
    ]
  },
  {
    id: "c3",
    label: "SAVE",
    value: "$50 OFF",
    title: "Discount Tire Promo Code: Save $50 on Orders of $599+",
    desc: "The more you spend, the more you save, with instant savings at checkout.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Take $50 off when your order reaches $599 or more.",
      "Discount applies automatically at checkout.",
      "Valid on eligible products.",
      "Limited-time savings on qualifying orders."
    ]
  },
  {
    id: "c4",
    label: "SAVE",
    value: "$80 OFF",
    title: "Discount Tire Promo Code: Save $80 on Mickey Thompson Tires",
    desc: "Give your ride an upgrade with instant savings on Mickey Thompson tires.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save $80 on select Mickey Thompson tires.",
      "Instant savings apply to eligible purchases.",
      "Valid on qualifying tire models only.",
      "Offered for a limited time."
    ]
  },
  {
    id: "c5",
    label: "FROM",
    value: "$129",
    title: "Discount Tire Discount Code: Yokohama YK-GTX Tires From $129",
    desc: "Find dependable all-season tires at a budget-friendly price.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Yokohama YK-GTX tires start at $129.",
      "Built for steady performance all year long.",
      "Offered in eligible sizes.",
      "Limited-time pricing applies."
    ]
  },
  {
    id: "c6",
    label: "FROM",
    value: "$197",
    title: "Discount Tire Discount Code: Bridgestone Dueler LX Tires From $197",
    desc: "Fit your SUV or crossover with Bridgestone tires starting at $197.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Bridgestone Dueler LX tires begin at $197.",
      "A good match for smooth, comfortable daily driving.",
      "Offered in select tire sizes.",
      "Available for a limited time."
    ]
  },
  {
    id: "c7",
    label: "SPECIAL",
    value: "PRICING",
    title: "Discount Tire Voucher Code: Continental CrossContact LX20 Special Pricing",
    desc: "Save on premium touring tires with special promotional pricing.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get special pricing on Continental CrossContact LX20 tires.",
      "Built for a smooth, dependable touring ride.",
      "Offered in eligible tire sizes.",
      "Valid for a limited time."
    ]
  },
  {
    id: "c8",
    label: "FROM",
    value: "$95",
    title: "Discount Tire Voucher Code: Milestar Interceptor AS810 Tires From $95",
    desc: "Budget-friendly all-season tires are available from just $95.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Milestar Interceptor AS810 tires start at $95.",
      "Ideal for everyday driving.",
      "Offered in qualifying sizes.",
      "Limited-time pricing in effect."
    ]
  },
  {
    id: "c9",
    label: "FROM",
    value: "$70",
    title: "Discount Tire Referral Code: Peerless Tire Chains From $70",
    desc: "Get ready for winter roads with tire chains starting at $70.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Peerless Tire Chains begin at $70.",
      "Helps boost traction in snow and ice.",
      "Available for eligible vehicle sizes.",
      "Offer lasts while supplies last."
    ]
  },
  {
    id: "c10",
    label: "SAVE",
    value: "$50 OFF",
    title: "Discount Tire Referral Code: Save $50 or Choose Promotional Financing",
    desc: "Pick instant savings or flexible financing on eligible purchases.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get $50 in instant savings on qualifying purchases.",
      "Or choose promotional financing at checkout.",
      "Valid on eligible products and orders.",
      "Limited-time offer for qualifying customers."
    ]
  }
];