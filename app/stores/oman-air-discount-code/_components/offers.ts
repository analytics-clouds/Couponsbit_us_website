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

export const STORE_URL = "https://www.omanair.com/";

export const OMAN_AIR_COUPONS: Coupon[] = [
  {
    id: "omanair1",
    topLabel: "UP TO",
    mainValue: "50%",
    offText: "OFF",
    title: "Oman Air Promo Code: Save Up to 50% on Oman Air Pass",
    description: "Save up to 50% on selected Oman Air flights when you purchase the Oman Air Pass.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Savings: Up to 50% off eligible flights, depending on the route.",
      "How it works: The discount comes with the purchase of an Oman Air Pass.",
      "Routes: Available on selected routes and flight options only.",
      "Before you buy: This is a limited-time offer, so check the Pass terms and which routes qualify.",
    ],
  },
  {
    id: "omanair2",
    topLabel: "FROM",
    mainValue: "$328",
    offText: "DEAL",
    title: "Oman Air Promo Code: Fly Dhaka to Muscat From $328",
    description: "Book one-way Economy flights from Dhaka to Muscat from $328.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Route: Dhaka to Muscat, one way.",
      "Fare: Starting from $328.",
      "Cabin: Oman Air Economy class.",
      "Before you book: \"From\" fares depend on dates and availability, so check the final price.",
    ],
  },
  {
    id: "omanair3",
    topLabel: "FROM",
    mainValue: "$165",
    offText: "DEAL",
    title: "Oman Air Discount Code: Fly Chennai to Muscat From $165",
    description: "Get one-way Oman Air flights from Chennai to Muscat from $165.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Route: Chennai to Muscat, one way.",
      "Fare: Starting from $165.",
      "Best for: Travelers looking for a lower-priced flight to Oman.",
      "Before you book: Confirm the fare for your travel dates, since prices change.",
    ],
  },
  {
    id: "omanair4",
    topLabel: "FROM",
    mainValue: "$705",
    offText: "DEAL",
    title: "Oman Air Discount Code: Fly Muscat to Jakarta From $705",
    description: "Travel from Muscat to Jakarta with Oman Air fares from $705.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Route: Muscat to Jakarta, one way.",
      "Fare: Starting from $705.",
      "Best for: Travelers heading to Indonesia.",
      "Before you book: Check the final price and fare conditions at checkout.",
    ],
  },
  {
    id: "omanair5",
    topLabel: "FLAT",
    mainValue: "25%",
    offText: "OFF",
    title: "Oman Air Voucher Code: Get Flat 25% Off Flights",
    description: "Save 25% on selected Oman Air Economy and Business Class flights.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Savings: A flat 25% off eligible flight bookings.",
      "Cabins: Available in both Economy and Business Class.",
      "Routes: Limited-time savings on selected routes only.",
      "Before you book: Confirm that your route and travel dates qualify.",
    ],
  },
  {
    id: "omanair6",
    topLabel: "UP TO",
    mainValue: "20%",
    offText: "OFF",
    title: "Oman Air Coupon Code: Save Up to 20% on Flights",
    description: "Get up to 20% off Oman Air Business and Economy Class flights.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Savings: Up to 20% off selected flight bookings.",
      "Cabins: Discounted fares across Business and Economy Class.",
      "Best for: Travelers planning international trips on Oman Air.",
      "Before you book: The discount varies by route and fare, so check your final price.",
    ],
  },
  {
    id: "omanair7",
    topLabel: "SPECIAL",
    mainValue: "LOW",
    offText: "FARES",
    title: "Oman Air Deals: Book Flights at Low Fares",
    description: "Find Oman Air flight deals with lower fares on selected routes.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Fares: Lower prices on selected routes.",
      "Destinations: Offers on trending destinations.",
      "Timing: Savings are available for a limited time.",
      "Before you book: Deals change often, so confirm current fares on the official Oman Air site.",
    ],
  },
  {
    id: "omanair8",
    topLabel: "SPECIAL",
    mainValue: "SAVE",
    offText: "DEAL",
    title: "Oman Air Offers: Flight Savings",
    description: "Discover current Oman Air offers on selected flights and travel deals.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Savings: Discounts on selected Oman Air flight bookings.",
      "Cabins: Offers across Economy and Business Class fares.",
      "Timing: Special promotions are available for a limited time.",
      "Before you book: Check the terms for each promotion before you pay.",
    ],
  },
];

