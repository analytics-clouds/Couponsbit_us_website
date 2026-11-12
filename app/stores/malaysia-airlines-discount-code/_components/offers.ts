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

export const MALAYSIA_AIRLINES_COUPONS: Coupon[] = [
  {
    id: "ma1",
    topLabel: "EXTRA",
    mainValue: "5%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Malaysia Airlines Promo Code – Extra 5% Off International Flights",
    description: "Get an extra 5% off select international flights and earn 2X Enrich Points.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get an extra 5% off eligible international flight bookings.",
      "Earn double Enrich Points on qualifying reservations.",
      "Available on select international routes.",
      "Great for Enrich members who want to save more.",
    ],
  },
  {
    id: "ma2",
    topLabel: "UP TO",
    mainValue: "35%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Malaysia Airlines Promo Code – Up to 35% Off Flights",
    description: "Save up to 35% on select international flights from the USA for a limited time.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 35% on eligible international flights.",
      "Valid on select routes departing from the USA.",
      "Promotional offer for a limited time.",
      "Perfect for your next international trip.",
    ],
  },
  {
    id: "ma3",
    topLabel: "UP TO",
    mainValue: "15%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Malaysia Airlines Promo Code – Up to 15% Off Online Flight Bookings",
    description: "Book online and save up to 15% on select flight fares.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 15% on eligible online bookings.",
      "Available on select flights only.",
      "Book directly through Malaysia Airlines.",
      "Ideal for booking flights online.",
    ],
  },
  {
    id: "ma4",
    topLabel: "From",
    mainValue: "$399",
    offText: "",
    title: "Malaysia Airlines Flight Deal – One-Way Fares from $399",
    description: "Fly from the USA to Kuala Lumpur with one-way fares starting at just $399.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "One-way fares start at $399.",
      "Available on select travel dates.",
      "Valid for flights from the USA to Kuala Lumpur.",
      "Great for budget-friendly international travel.",
    ],
  },
  {
    id: "ma5",
    topLabel: "UP TO",
    mainValue: "10%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Malaysia Airlines Promo Code – Up to 10% Off Website Bookings",
    description: "Book on the Malaysia Airlines website or app and save up to 10% on select flights.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 10% on eligible flight bookings.",
      "Valid on website and app reservations.",
      "Available on select routes.",
      "Best for booking direct online.",
    ],
  },
  {
    id: "ma6",
    topLabel: "UP TO",
    mainValue: "15%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Malaysia Airlines Promo Code – Up to 15% Off Online Payments",
    description: "Pay online and get up to 15% off eligible Malaysia Airlines flight bookings.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 15% when you pay online.",
      "Valid on select flight bookings.",
      "Available for a limited time.",
      "A simple way to save on your next trip.",
    ],
  },
];
