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

export const OFFERS: Coupon[] = [
  {
    id: "c1",
    topLabel: "UP TO",
    mainValue: "35%",
    offText: "OFF",
    title: "Budget Promo Code – Summer Sale Up to 35% Off",
    description: "Save up to 35% on your next Budget rental when you pay in advance.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Enjoy savings of up to 35% on eligible rental bookings.",
      "Pay now to get the biggest available discount.",
      "Pick from participating rental locations and vehicle categories.",
      "Book during this limited-time promotion to get the most savings.",
    ],
  },
  {
    id: "c2",
    topLabel: "UP TO",
    mainValue: "25%",
    offText: "OFF",
    title: "Budget Promo Code – Weekly Rental Up to 25% Off",
    description: "Save more on longer trips with up to 25% off weekly rentals.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get up to 25% off rentals of five days or longer.",
      "Perfect for vacations, business travel, or long road trips.",
      "The discount applies to eligible weekly reservations.",
      "Reserve your vehicle before this limited-time offer ends.",
    ],
  },
  {
    id: "c3",
    topLabel: "SAVE",
    mainValue: "$10",
    offText: "",
    title: "Budget Discount Code – $10 Off Rentals Over $175",
    description: "Save $10 when your qualifying Budget rental totals $175 or more.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get $10 off eligible rentals worth $175 or more.",
      "A good way to save on longer or premium rentals.",
      "Qualifying reservations must meet the minimum rental total.",
      "Take advantage of this limited-time chance to save.",
    ],
  },
  {
    id: "c4",
    topLabel: "FROM",
    mainValue: "$29.99",
    offText: "",
    title: "Budget Discount Code – Cargo Vans from $29.99/Day",
    description: "Rent a Budget cargo van starting at just $29.99 a day.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Cargo van rentals start at only $29.99 a day.",
      "Ideal for moving, deliveries, or hauling large items.",
      "Pick from dependable, roomy rental vehicles.",
      "Book now while this limited-time rate is available.",
    ],
  },
  {
    id: "c5",
    topLabel: "UP TO",
    mainValue: "15%",
    offText: "OFF",
    title: "Budget Coupon Code – Young Driver Special Up to 15% Off",
    description: "Young drivers can get extra savings on eligible Budget rentals.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 15% on qualifying rentals for young drivers.",
      "Eligible travelers can enjoy lower rental costs.",
      "Available on participating vehicle rentals and locations.",
      "Book before this limited-time promotion ends.",
    ],
  },
  {
    id: "c6",
    topLabel: "UP TO",
    mainValue: "15%",
    offText: "OFF",
    title: "Budget Coupon Code – Pay Now & Save Up to 15% Off",
    description: "Choose the Pay Now option and get instant rental savings.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 15% when you pay for your rental in advance.",
      "Paying upfront helps you lock in lower rental prices.",
      "Available on eligible Budget reservations.",
      "This limited-time offer is available while promotions last.",
    ],
  },
  {
    id: "c7",
    topLabel: "FREE",
    mainValue: "2 DAYS",
    offText: "",
    title: "Budget Voucher Code – Switzerland 7 Days for the Price of 5",
    description: "Get two extra rental days at no added cost in Switzerland.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Rent a vehicle for seven days and pay for only five.",
      "Available on qualifying Budget rentals in Switzerland.",
      "Perfect for long vacations and road trips.",
      "Book during the promotional period to get this offer.",
    ],
  },
  {
    id: "c8",
    topLabel: "FREE",
    mainValue: "1 DAY",
    offText: "",
    title: "Budget Voucher Code – Weekend Special 3 Days for the Price of 2",
    description: "Get an extra rental day free on eligible weekend bookings.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Rent for three days and pay for only two.",
      "Available on qualifying weekend vehicle rentals.",
      "A great way to extend your trip without extra rental costs.",
      "Reserve your vehicle before this limited-time deal ends.",
    ],
  },
];
