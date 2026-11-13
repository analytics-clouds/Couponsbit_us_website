export interface Offer {
  id: string;
  discount: string;
  label: string;
  badge?: "Best Offer" | "Popular" | "Trending" | "Verified";
  title: string;
  heading: string;
  sub: string;
  description: string;
  points: string[];
  usedCount: string;
  expiresIn: string;
  code: string;
}

export const OFFERS: Offer[] = [
  {
    id: "c1",
    discount: "35%",
    label: "UP TO",
    badge: "Best Offer",
    title: "Budget Promo Code – Summer Sale Up to 35% Off",
    heading: "Up to 35% Off",
    sub: "Summer Sale",
    description: "Save up to 35% on your next Budget rental when you pay in advance.",
    points: [
      "Enjoy savings of up to 35% on eligible rental bookings.",
      "Pay now to get the biggest available discount.",
      "Pick from participating rental locations and vehicle categories.",
      "Book during this limited-time promotion to get the most savings.",
    ],
    usedCount: "0",
    expiresIn: "30 Nov 2026",
    code: "",
  },
  {
    id: "c2",
    discount: "25%",
    label: "UP TO",
    badge: "Verified",
    title: "Budget Promo Code – Weekly Rental Up to 25% Off",
    heading: "Up to 25% Off",
    sub: "Weekly Rental",
    description: "Save more on longer trips with up to 25% off weekly rentals.",
    points: [
      "Get up to 25% off rentals of five days or longer.",
      "Perfect for vacations, business travel, or long road trips.",
      "The discount applies to eligible weekly reservations.",
      "Reserve your vehicle before this limited-time offer ends.",
    ],
    usedCount: "0",
    expiresIn: "30 Nov 2026",
    code: "",
  },
  {
    id: "c3",
    discount: "$10",
    label: "SAVE",
    badge: "Verified",
    title: "Budget Discount Code – $10 Off Rentals Over $175",
    heading: "$10 Off",
    sub: "Orders Over $175",
    description: "Save $10 when your qualifying Budget rental totals $175 or more.",
    points: [
      "Get $10 off eligible rentals worth $175 or more.",
      "A good way to save on longer or premium rentals.",
      "Qualifying reservations must meet the minimum rental total.",
      "Take advantage of this limited-time chance to save.",
    ],
    usedCount: "0",
    expiresIn: "30 Nov 2026",
    code: "",
  },
  {
    id: "c4",
    discount: "$29.99",
    label: "FROM",
    badge: "Verified",
    title: "Budget Discount Code – Cargo Vans from $29.99/Day",
    heading: "From $29.99/Day",
    sub: "Cargo Vans",
    description: "Rent a Budget cargo van starting at just $29.99 a day.",
    points: [
      "Cargo van rentals start at only $29.99 a day.",
      "Ideal for moving, deliveries, or hauling large items.",
      "Pick from dependable, roomy rental vehicles.",
      "Book now while this limited-time rate is available.",
    ],
    usedCount: "0",
    expiresIn: "30 Nov 2026",
    code: "",
  },
  {
    id: "c5",
    discount: "15%",
    label: "UP TO",
    badge: "Verified",
    title: "Budget Coupon Code – Young Driver Special Up to 15% Off",
    heading: "Up to 15% Off",
    sub: "Young Driver Special",
    description: "Young drivers can get extra savings on eligible Budget rentals.",
    points: [
      "Save up to 15% on qualifying rentals for young drivers.",
      "Eligible travelers can enjoy lower rental costs.",
      "Available on participating vehicle rentals and locations.",
      "Book before this limited-time promotion ends.",
    ],
    usedCount: "0",
    expiresIn: "30 Nov 2026",
    code: "",
  },
  {
    id: "c6",
    discount: "15%",
    label: "UP TO",
    badge: "Verified",
    title: "Budget Coupon Code – Pay Now & Save Up to 15% Off",
    heading: "Up to 15% Off",
    sub: "Pay Now & Save",
    description: "Choose the Pay Now option and get instant rental savings.",
    points: [
      "Save up to 15% when you pay for your rental in advance.",
      "Paying upfront helps you lock in lower rental prices.",
      "Available on eligible Budget reservations.",
      "This limited-time offer is available while promotions last.",
    ],
    usedCount: "0",
    expiresIn: "30 Nov 2026",
    code: "",
  },
  {
    id: "c7",
    discount: "2 DAYS",
    label: "FREE",
    badge: "Verified",
    title: "Budget Voucher Code – Switzerland 7 Days for the Price of 5",
    heading: "7 Days for Price of 5",
    sub: "Switzerland Special",
    description: "Get two extra rental days at no added cost in Switzerland.",
    points: [
      "Rent a vehicle for seven days and pay for only five.",
      "Available on qualifying Budget rentals in Switzerland.",
      "Perfect for long vacations and road trips.",
      "Book during the promotional period to get this offer.",
    ],
    usedCount: "0",
    expiresIn: "30 Nov 2026",
    code: "",
  },
  {
    id: "c8",
    discount: "1 DAY",
    label: "FREE",
    badge: "Verified",
    title: "Budget Voucher Code – Weekend Special 3 Days for the Price of 2",
    heading: "3 Days for Price of 2",
    sub: "Weekend Special",
    description: "Get an extra rental day free on eligible weekend bookings.",
    points: [
      "Rent for three days and pay for only two.",
      "Available on qualifying weekend vehicle rentals.",
      "A great way to extend your trip without extra rental costs.",
      "Reserve your vehicle before this limited-time deal ends.",
    ],
    usedCount: "0",
    expiresIn: "30 Nov 2026",
    code: "",
  },
];
