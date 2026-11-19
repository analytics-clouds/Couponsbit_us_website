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

export const PLANET_FITNESS_COUPONS: Coupon[] = [
  {
    id: "c1",
    topLabel: "NEW",
    mainValue: "$1 DOWN",
    offText: "SAVE",
    title: "Planet Fitness Promo Code – $1 Down + $10/Month",
    description: "New members can join with just $1 down and pay $10 a month with this limited-time Planet Fitness membership offer.",
    code: "",
    verified: "Verified",
    userType: "New Members",
    validTill: "30 Nov 2026",
    points: [
      "The no-commitment deal is available to new members and ends today; additional fees and restrictions may apply.",
      "Check Planet Fitness deals and membership cost details at participating USA Planet Fitness locations.",
    ],
  },
  {
    id: "c2",
    topLabel: "FROM",
    mainValue: "$24.99",
    offText: "SAVE",
    title: "Planet Fitness Promo Code – PF Black Card Membership From $24.99/Month",
    description: "The PF Black Card membership starts at $24.99 per month, plus applicable taxes and fees.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Members can access any participating club, bring a guest anytime and use PF+ premium digital workouts.",
      "Compare Planet Fitness prices and Planet Fitness gym membership benefits before joining.",
    ],
  },
  {
    id: "c3",
    topLabel: "FROM",
    mainValue: "$15",
    offText: "OFF",
    title: "Planet Fitness Promo Code – Classic Membership From $15/Month",
    description: "Planet Fitness Classic Membership starts at $15 per month, plus applicable taxes and fees.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Enjoy unlimited access to your selected home club with this standard Planet Fitness membership.",
      "Check Planet Fitness hours, Planet Fitness hrs and club availability at your preferred location.",
    ],
  },
  {
    id: "c4",
    topLabel: "DEAL",
    mainValue: "OPTIONS",
    offText: "OFF",
    title: "Planet Fitness Promo Code – Membership Options",
    description: "Choose between the PF Black Card and Classic Membership based on the access and benefits you need.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Both membership options provide access to The Judgement Free Zone and cardio and strength equipment.",
      "Compare Planet Fitness membership cost, Planet Fitness coupons and available Planet Fitness deals before signing up.",
    ],
  },
  {
    id: "c5",
    topLabel: "DEAL",
    mainValue: "LOCATOR",
    offText: "SAVE",
    title: "Planet Fitness Promo Code – Find A Club",
    description: "Explore Planet Fitness locations across the USA to find a convenient Planet Fitness gym.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Check the nearest Planet Fitness club for current Planet Fitness hours and available membership options.",
      "Use the official club locator to compare nearby locations, membership prices and access details.",
    ],
  },
  {
    id: "c6",
    topLabel: "DEAL",
    mainValue: "SEASONAL",
    offText: "OFF",
    title: "Planet Fitness Promo Code – Summer Pass",
    description: "Explore seasonal Planet Fitness offers such as the Planet Fitness Summer Pass when available.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "A summer pass Planet Fitness promotion can provide a flexible way for eligible visitors to enjoy participating clubs.",
      "Check current Planet Fitness summer pass availability, terms and participating USA locations.",
    ],
  },
  {
    id: "c7",
    topLabel: "DEAL",
    mainValue: "DAY PASS",
    offText: "SAVE",
    title: "Planet Fitness Promo Code – Day Pass & Visitor Options",
    description: "Check whether a Planet Fitness day pass or visitor pass is available at your preferred club.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Visitor access and guest policies can vary depending on membership type and individual club rules.",
      "Contact or check your nearest Planet Fitness location for current pass options and requirements.",
    ],
  },
  {
    id: "c8",
    topLabel: "DEAL",
    mainValue: "24-HR",
    offText: "OFF",
    title: "Planet Fitness Promo Code – 24-Hour Club Access",
    description: "Some Planet Fitness locations offer extended or 24-hour access depending on the individual club.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Check Planet Fitness 24 hours availability before planning a late-night or early-morning workout.",
      "Search your local Planet Fitness gym for current hours, including any available 24 hour Planet Fitness near me options.",
    ],
  },
];
