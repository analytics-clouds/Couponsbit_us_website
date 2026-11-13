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

export const VALVOLINE_COUPONS: Coupon[] = [
  {
    id: "v1",
    topLabel: "UP TO",
    mainValue: "50%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Valvoline Promo Code – Up to 50% Off Vehicle Maintenance",
    description: "Save up to 50% on eligible vehicle maintenance services at Valvoline.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "Nov 2026",
    points: [
      "Get up to 50% off on qualifying maintenance services",
      "Save on selected services to keep your vehicle in good shape",
      "Keep your vehicle running smoothly without spending much",
      "This limited-period offer is valid at participating locations",
    ],
  },
  {
    id: "v2",
    topLabel: "FLAT",
    mainValue: "30%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Valvoline Promo Code – Flat 30% Off Service Offers",
    description: "Enjoy instant savings on eligible Valvoline services.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "Nov 2026",
    points: [
      "Get a flat 30% discount on qualifying services",
      "Valid on selected maintenance and vehicle care services",
      "A smart way to bring down your service costs",
      "Redeem this limited-period offer before it expires",
    ],
  },
  {
    id: "v3",
    topLabel: "SAVE",
    mainValue: "$15",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Valvoline Discount Code – $15 Off Synthetic Blend Oil Change",
    description: "Save on your next Synthetic Blend Oil Change service.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "Nov 2026",
    points: [
      "Get $15 off on an eligible Synthetic Blend Oil Change",
      "Keep your engine healthy with regular oil service",
      "Available at participating Valvoline service centres",
      "Avail these limited-period savings today",
    ],
  },
  {
    id: "v4",
    topLabel: "SAVE",
    mainValue: "$10",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Valvoline Discount Code – $10 Off Conventional Oil Change",
    description: "Reduce the cost of your next Full-Service Conventional Oil Change.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "Nov 2026",
    points: [
      "Save $10 on an eligible Full-Service Conventional Oil Change",
      "Get professional oil change service at a lower price",
      "Keep your vehicle well maintained for less",
      "Offer is available for a limited period",
    ],
  },
  {
    id: "v5",
    topLabel: "UP TO",
    mainValue: "40%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Valvoline Coupon Code – Up to 40% Off Radiator Services",
    description: "Save on radiator maintenance with this limited-period Valvoline offer.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "Nov 2026",
    points: [
      "Get up to 40% off on eligible radiator services",
      "Protect your cooling system with professional maintenance",
      "Valid on qualifying radiator service appointments",
      "Book your service before the promotion ends",
    ],
  },
  {
    id: "v6",
    topLabel: "SAVE",
    mainValue: "20%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Valvoline Coupon Code – Save 20% on Select Items",
    description: "Enjoy extra savings on eligible Valvoline products.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "Nov 2026",
    points: [
      "Save 20% on select qualifying items",
      "Apply the coupon code at checkout",
      "This is a community-verified promotional offer",
      "Redeem the offer while it is still available",
    ],
  },
];
