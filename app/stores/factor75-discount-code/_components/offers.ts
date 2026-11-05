export interface Coupon {
  id: string;
  topLabel: string;
  mainValue: string;
  offText: string;
  valueFontClass: string;
  title: string;
  description: string;
  code: string;
  verified: string;
  userType: string;
  validTill: string;
  points: string[];
}

export const FACTOR75_COUPONS: Coupon[] = [
  {
    id: "f75-1",
    topLabel: "Up To",
    mainValue: "$130",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Factor75 Healthy Eating Deal – Up to $130 OFF + FREE Breakfast for 1 Year",
    description: "Make healthy eating easier and more affordable with Factor75's exclusive meal plan savings.",
    code: "",
    verified: "Verified",
    userType: "New Customers",
    validTill: "30 Nov 2026",
    points: [
      "Get up to $130 OFF across your first meal deliveries as a new customer",
      "Enjoy FREE Breakfast for 1 Year with eligible subscription plans",
      "Choose from fresh, chef-prepared meals designed for convenience and nutrition",
    ],
  },
  {
    id: "f75-2",
    topLabel: "Up To",
    mainValue: "$126",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Factor75 Limited-Time Promotion – Up to $126 OFF",
    description: "Exclusive promotion available for new Factor75 customers.",
    code: "",
    verified: "Verified",
    userType: "New Customers",
    validTill: "30 Nov 2026",
    points: [
      "Save up to $126 on your first six meal boxes",
      "Includes FREE Breakfast for 1 Year with qualifying recurring plans",
      "Choose from a wide variety of fresh, chef-crafted meals delivered weekly",
    ],
  },
];
