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

export const SUBWAY_COUPONS: Coupon[] = [
  {
    id: "sw1",
    topLabel: "SAVE",
    mainValue: "20% OFF",
    offText: "",
    title: "Subway Promo Code: 20% Off Your First Order",
    description: "Save 20% on your first Subway order as a new customer.",
    code: "",
    verified: "Verified",
    userType: "New Users",
    validTill: "30 Nov 2026",
    points: [
      "Get 20% off your first eligible Subway order.",
      "Open to new customers in the USA.",
      "Valid on qualifying online orders.",
      "Limited-time offer.",
    ],
  },
  {
    id: "sw2",
    topLabel: "SAVE",
    mainValue: "20% OFF",
    offText: "",
    title: "Subway Promo Code: 20% Off Member Orders",
    description: "Subway members can enjoy exclusive savings on eligible purchases.",
    code: "",
    verified: "Verified",
    userType: "Members",
    validTill: "30 Nov 2026",
    points: [
      "Save 20% on qualifying orders as a Subway member.",
      "Available on participating member accounts.",
      "Valid for a limited time.",
      "Terms apply.",
    ],
  },
  {
    id: "sw3",
    topLabel: "SAVE",
    mainValue: "10% OFF",
    offText: "",
    title: "Subway Discount Code: 10% Off Your First Order",
    description: "Pick up extra savings when you place your first Subway order.",
    code: "",
    verified: "Verified",
    userType: "New Users",
    validTill: "30 Nov 2026",
    points: [
      "Get 10% off your first eligible purchase.",
      "Available to new customers.",
      "Valid on qualifying orders only.",
      "Limited-time offer.",
    ],
  },
  {
    id: "sw4",
    topLabel: "SAVE",
    mainValue: "$2 OFF",
    offText: "+ BOGO",
    title: "Subway Discount Code: Save $2 Plus Buy One, Get One",
    description: "Take advantage of special in-store Subway promotions.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save $2 on select menu items.",
      "Enjoy Buy One, Get One offers at participating restaurants.",
      "Deals vary by participating location in the USA.",
      "Availability may vary.",
    ],
  },
  {
    id: "sw5",
    topLabel: "FROM",
    mainValue: "$4.99",
    offText: "",
    title: "Subway Coupon Code: Meals From $4.99",
    description: "Grab your favorite Subway meal starting at just $4.99.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Meal prices start at only $4.99.",
      "Includes select meal combinations.",
      "Available at participating locations.",
      "Prices may vary by location.",
    ],
  },
  {
    id: "sw6",
    topLabel: "FROM",
    mainValue: "$6.99",
    offText: "",
    title: "Subway Coupon Code: Meal of the Day From $6.99",
    description: "Enjoy daily meal specials at friendly prices.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Meal of the Day starts at $6.99.",
      "Pick from select featured meals.",
      "Available for a limited time.",
      "Prices may vary by location.",
    ],
  },
  {
    id: "sw7",
    topLabel: "FROM",
    mainValue: "$2.39",
    offText: "",
    title: "Subway Voucher Code: Bottled Beverages From $2.39",
    description: "Quench your thirst with affordable bottled drinks.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Bottled beverages start at just $2.39.",
      "Choose from select drink options.",
      "Available at participating Subway restaurants.",
      "Prices may vary by location.",
    ],
  },
  {
    id: "sw8",
    topLabel: "FROM",
    mainValue: "$6.99",
    offText: "",
    title: "Subway Voucher Code: Steak Philly Combo From $6.99",
    description: "Enjoy a satisfying Steak Philly Combo at a great price.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Steak Philly Combo starts at $6.99.",
      "Available at participating Subway locations.",
      "Applies to select combo meals.",
      "Prices may vary by location.",
    ],
  },
];
