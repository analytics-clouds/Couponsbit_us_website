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

export const ETIHAD_COUPONS: Coupon[] = [
  {
    id: "et1",
    topLabel: "UP TO",
    mainValue: "20%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Etihad Discount Code – Up to 20% Off Global Flight Sale",
    description: "Save up to 20% on select international flight bookings during the Etihad Global Sale.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 20% on eligible international flights.",
      "Available on select routes worldwide.",
      "Global Sale offer for a limited time.",
      "Perfect for planning your next international trip.",
    ],
  },
  {
    id: "et2",
    topLabel: "From",
    mainValue: "$522",
    offText: "",
    title: "Etihad Promo Code – Round-Trip Fares to Málaga from $522",
    description: "Book a round-trip flight to Málaga with fares starting at just $522.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Round-trip fares start at $522.",
      "Fly to Málaga at a lower price.",
      "Available on select travel dates.",
      "Great for your next European getaway.",
    ],
  },
  {
    id: "et3",
    topLabel: "UP TO",
    mainValue: "30%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Etihad Voucher Code – Up to 30% Off Business Class",
    description: "Get up to 30% off Business Class fares on select flights from the USA.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 30% on Business Class tickets.",
      "Valid on select departures from the USA.",
      "Available for a limited time.",
      "Ideal for travelers who want premium comfort.",
    ],
  },
  {
    id: "et4",
    topLabel: "SAVE",
    mainValue: "25%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Etihad Discount Code – 25% Off on Europe Hotels",
    description: "Get 25% off select hotel stays across Europe for a limited time.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 25% on participating European hotels.",
      "Valid on select hotel bookings.",
      "Lodging offer for a limited time.",
      "A great way to cut your travel costs.",
    ],
  },
  {
    id: "et5",
    topLabel: "From",
    mainValue: "$769",
    offText: "",
    title: "Etihad Promo Code – Economy Fares from $769",
    description: "Fly internationally with Economy Class fares starting at just $769.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Economy fares start at $769.",
      "Available on select international routes.",
      "Valid for eligible travel dates.",
      "Perfect for low-cost overseas travel.",
    ],
  },
  {
    id: "et6",
    topLabel: "UP TO",
    mainValue: "10%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Etihad Student Discount Code – Up to 10% Off Economy Fares",
    description: "Students can save up to 10% on eligible Etihad Economy Class bookings.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 10% on Economy Class fares.",
      "Available on eligible student bookings.",
      "Valid on select routes.",
      "Great for students planning international travel.",
    ],
  },
  {
    id: "et7",
    topLabel: "UP TO",
    mainValue: "15%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Etihad Referral Code – Up to 15% Off Early Bird Flights",
    description: "Book your trip early and save up to 15% on select flights.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 15% when you book in advance.",
      "Valid on select flight routes.",
      "Available for a limited time.",
      "Best for travelers who plan ahead.",
    ],
  },
];
