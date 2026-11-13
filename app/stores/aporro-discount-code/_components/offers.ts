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

export const APORRO_COUPONS: Coupon[] = [
  {
    id: "c1",
    topLabel: "SAVE",
    mainValue: "$50",
    offText: "OFF",
    title: "Aporro Promo Code – Welcome Offer, Get $50 Off",
    description: "Subscribe to Aporro emails and unlock an exclusive $50 discount.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save $50 as soon as you join the Aporro email list.",
      "This welcome offer is meant for new subscribers only.",
      "Use the discount on eligible Aporro jewellery collections.",
      "Sign up today to avail this limited-period offer.",
    ],
  },
  {
    id: "c2",
    topLabel: "COMBO",
    mainValue: "$99",
    offText: "",
    title: "Aporro Promo Code – 2-Chain Combo for $99",
    description: "Add to your jewellery collection with the Aporro 2-Chain Combo at just $99.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get the Aporro 2-Chain Combo for only $99.",
      "Enjoy premium style at a special bundle price.",
      "Ideal for everyday wear or for layering with other accessories.",
      "Shop this limited-period deal before it gets over.",
    ],
  },
  {
    id: "c3",
    topLabel: "FROM",
    mainValue: "$89",
    offText: "",
    title: "Aporro Discount Code – Micro Custom Round Photo Pendant, From $89",
    description: "Create a personal keepsake with a custom photo pendant starting at $89.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Design your own Micro Custom Round Photo Pendant from $89.",
      "Add your favourite photo for a truly unique accessory.",
      "Makes a thoughtful gift for family and friends.",
      "Place your order while this offer is on.",
    ],
  },
  {
    id: "c4",
    topLabel: "SAVE",
    mainValue: "45%",
    offText: "OFF",
    title: "Aporro Discount Code – S925 Baguette Mix Halo Stud Earrings, Save 45%",
    description: "Get 45% off on stylish S925 Baguette Mix Halo Stud Earrings.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Enjoy 45% off on the S925 Baguette Mix Halo Stud Earring Set.",
      "Made with a modern baguette halo design.",
      "A lovely pick for daily wear as well as special occasions.",
      "Limited-period savings, available while stocks last.",
    ],
  },
  {
    id: "c5",
    topLabel: "ONLY",
    mainValue: "$70",
    offText: "",
    title: "Aporro Coupon Code – Trove Orbit Pearl Chain, Rose Gold, $70",
    description: "Pick up the elegant Trove Orbit Pearl Chain for just $70.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Buy the 8mm Trove Orbit Pearl Chain in Rose Gold for $70.",
      "Stylish pearl chain design that suits everyday wear.",
      "A fashionable accessory to complete any outfit.",
      "Grab this limited-period offer before it expires.",
    ],
  },
  {
    id: "c6",
    topLabel: "SAVE",
    mainValue: "23%",
    offText: "OFF",
    title: "Aporro Coupon Code – Saint Mary Double Pendant Chain Set, Save 23%",
    description: "Save on a stylish layered jewellery set from Aporro.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get 23% off on the Saint Mary Double Pendant & Chain Layer Set.",
      "Comes with a matching pendant and a layered chain design.",
      "Perfect for giving your collection a bold new look.",
      "Shop now while this promotion is on.",
    ],
  },
  {
    id: "c7",
    topLabel: "ONLY",
    mainValue: "$40",
    offText: "",
    title: "Aporro Voucher Code – 6mm Iced Clasp Rope Chain, Yellow Gold, $40",
    description: "Add timeless style with a yellow gold rope chain at just $40.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Buy the 6mm Iced Clasp Rope Chain in Yellow Gold for $40.",
      "Comes with a secure iced clasp for a premium finish.",
      "Looks great on its own or with your favourite pendant.",
      "Available for a limited period only.",
    ],
  },
  {
    id: "c8",
    topLabel: "ONLY",
    mainValue: "$40",
    offText: "",
    title: "Aporro Voucher Code – 6mm Iced Clasp Rope Chain, Rose Gold, $40",
    description: "Complete your look with a rose gold rope chain at only $40.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get the 6mm Iced Clasp Rope Chain in Rose Gold for just $40.",
      "Designed with an eye-catching iced clasp.",
      "Goes well with pendants and other jewellery pieces.",
      "Shop this limited-period offer today.",
    ],
  },
  {
    id: "c9",
    topLabel: "BUNDLE",
    mainValue: "$149",
    offText: "",
    title: "Aporro Deals – Pendant & 2 Chains Bundle, $149",
    description: "Get more value with a complete jewellery bundle at $149.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Buy one pendant and two matching chains for just $149.",
      "Save more by choosing the bundle over individual pieces.",
      "Easily mix and match your favourite jewellery styles.",
      "Don’t miss this limited-period Aporro bundle deal.",
    ],
  },
];
