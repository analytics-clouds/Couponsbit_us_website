export interface Coupon {
  id: string;
  topLabel?: string;
  mainValue?: string;
  offText?: string;
  label?: string;
  value?: string;
  title: string;
  desc?: string;
  description: string;
  code?: string;
  points: string[];
  bullets?: string[];
  verified?: string;
  userType?: string;
  validTill?: string;
}

export const HERTZ_COUPONS: Coupon[] = [
  {
    id: "hertz1",
    topLabel: "UP TO",
    mainValue: "10%",
    offText: "OFF",
    title: "Hertz Promo Code – Up to 10% Off Car Rentals",
    description: "Save up to 10% on Hertz car rentals with Hertz Gold Plus Rewards membership.",
    code: "",
    verified: "Verified",
    userType: "Members",
    validTill: "30 Nov 2026",
    points: [
      "Hertz Gold Plus Rewards members can save up to 10% on eligible rentals.",
      "Savings are available through the year.",
      "Membership is required to get the discount.",
      "A fit for travelers who rent cars often.",
    ],
  },
  {
    id: "hertz2",
    topLabel: "FLAT",
    mainValue: "10%",
    offText: "OFF",
    title: "Hertz Promo Code – 10% Off for ICAEW Members",
    description: "ICAEW members can save 10% on Hertz car rentals worldwide.",
    code: "",
    verified: "Verified",
    userType: "Members",
    validTill: "30 Nov 2026",
    points: [
      "Eligible ICAEW members get 10% off qualifying Hertz rentals.",
      "Applies to car hire bookings worldwide.",
      "Comes through a partner benefit for members.",
      "Proof of membership may be needed.",
    ],
  },
  {
    id: "hertz3",
    topLabel: "FROM",
    mainValue: "£349",
    offText: "DEAL",
    title: "Hertz Discount Code – Volkswagen ID.7 Pro S Match Plus From £349",
    description: "Look at the Volkswagen ID.7 Pro S Match Plus through Hertz Rent2Buy, starting at £349.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "The Volkswagen ID.7 Pro S Match Plus starts at £349.",
      "Offered through Hertz Rent2Buy, which lets you rent a car with the option to buy it.",
      "Covers one selected Volkswagen model.",
      "Check the Rent2Buy terms for how often the £349 is charged and what it covers.",
    ],
  },
  {
    id: "hertz4",
    topLabel: "SPECIAL",
    mainValue: "PCO",
    offText: "DEAL",
    title: "Hertz Discount Code – PCO-Ready Car",
    description: "Get a PCO-ready car through Hertz Rent2Buy with weekly payments.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "PCO-ready cars are available through Hertz Rent2Buy.",
      "Made for drivers who need a vehicle for private hire in London.",
      "Offers weekly payment options.",
      "Check the Rent2Buy terms for prices and requirements.",
    ],
  },
  {
    id: "hertz5",
    topLabel: "FLAT",
    mainValue: "$50",
    offText: "OFF",
    title: "Hertz Voucher Code – $50 Off SUV and Minivan Rentals",
    description: "Save $50 on eligible weekly Hertz SUV and minivan rentals.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Takes $50 off qualifying weekly SUV and minivan rentals.",
      "Lowers the cost of larger vehicle bookings.",
      "Applies to eligible weekly rentals.",
      "A fit for families and groups traveling together.",
    ],
  },
  {
    id: "hertz6",
    topLabel: "UP TO",
    mainValue: "25%",
    offText: "OFF",
    title: "Hertz Voucher Code – Up to 25% Off Car Rentals",
    description: "Save up to 25% on your next eligible Hertz rental.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Offers up to 25% off qualifying Hertz car rentals.",
      "Lowers your travel costs.",
      "The exact discount depends on your dates and location.",
      "A fit for travelers planning a rental.",
    ],
  },
  {
    id: "hertz7",
    topLabel: "FLAT",
    mainValue: "20%",
    offText: "OFF",
    title: "Hertz Coupon Code – 20% Off Your Next Rental",
    description: "Save 20% on the best available rate for eligible Hertz rentals.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Takes 20% off your next qualifying Hertz rental.",
      "Applies to the best available rate.",
      "Applies to selected vehicle reservations.",
      "A fit for customers planning future rentals.",
    ],
  },
  {
    id: "hertz8",
    topLabel: "UP TO",
    mainValue: "15%",
    offText: "OFF",
    title: "Hertz Coupon Code – Up to 15% Off With Mastercard",
    description: "Eligible Mastercard cardholders can save up to 15% on Hertz car rentals worldwide.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Mastercard Standard, Gold, and Business cardholders can save up to 15%.",
      "Applies to car hire bookings worldwide.",
      "Comes through the Hertz and Mastercard partnership.",
      "Check your card's eligibility and the offer terms before you book.",
    ],
  },
];
