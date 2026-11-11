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
  valueFontClass?: string;
}

export const KIWI_COUPONS: Coupon[] = [
  {
    id: "c1",
    topLabel: "SALE",
    mainValue: "$580",
    offText: "UP TO",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Kiwi Discount Code – Join Kiwi.com Club for Travel Rewards",
    description: "Join the Kiwi.com Club for free and get travel rewards worth up to $580.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get travel rewards worth up to $580 with a free membership.",
      "Unlock member-only flight fares and travel perks.",
      "Enjoy extra savings on eligible bookings.",
      "Great for frequent travelers who want to save more.",
    ],
  },
  {
    id: "c2",
    topLabel: "SALE",
    mainValue: "$320",
    offText: "FROM",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Kiwi Discount Code – Chicago to Los Angeles Flights from $320",
    description: "Book your trip from Chicago to Los Angeles with fares starting at just $320.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Fly from Chicago to Los Angeles from $320.",
      "Save on domestic flights for work or leisure.",
      "Find low fares for your next trip.",
      "Perfect for weekend getaways and business travel.",
    ],
  },
  {
    id: "c3",
    topLabel: "PROMO",
    mainValue: "$102",
    offText: "FROM",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Kiwi Promo Code – Vancouver to Los Angeles Flights from $102",
    description: "Fly from Vancouver to Los Angeles with fares starting at only $102.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Book flights from Vancouver to Los Angeles from $102.",
      "Enjoy low-cost travel between Canada and the US.",
      "Find budget-friendly fares for your next vacation.",
      "Great for travelers who want to save on cross-border flights.",
    ],
  },
  {
    id: "c4",
    topLabel: "PROMO",
    mainValue: "$64",
    offText: "FROM",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Kiwi Promo Code – Portland to Los Angeles Flights from $64",
    description: "Grab low fares from Portland to Los Angeles, starting at just $64.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Fly from Portland to Los Angeles from only $64.",
      "Save on one of Kiwi.com's best-value domestic routes.",
      "Book low-cost tickets for business or holiday travel.",
      "Great for budget-minded travelers and weekend trips.",
    ],
  },
];
