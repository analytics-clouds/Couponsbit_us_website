export interface Coupon {
  id: string;
  topLabel: string;
  mainValue: string;
  offText: string;
  title: string;
  description: string;
  code: string;
  points: string[];
  affiliateUrl: string;
  verified: string;
  userType: string;
  validTill: string;
}

export const FLIXBUS_COUPONS: Coupon[] = [
  {
    id: "c1",
    topLabel: "GET",
    mainValue: "20%",
    offText: "OFF",
    title: "FlixBus Discount Code – 20% Off on the FlixBus App",
    description: "Get 20% off when you book your trip through the FlixBus app using coupon code FLXAUGND.",
    code: "FLXAUGND",
    points: [
      "Use coupon code FLXAUGND to save 20% on eligible app bookings.",
      "Book your tickets fast through the FlixBus mobile app.",
      "Enjoy low-cost travel on popular routes.",
      "Great for travelers who like to book on the go.",
    ],
    affiliateUrl: "https://www.flixbus.com.au/",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
  },
  {
    id: "c2",
    topLabel: "SAVE",
    mainValue: "16%",
    offText: "OFF",
    title: "FlixBus Promo Code – 16% Off on Bus Tickets",
    description: "Save 16% on your next FlixBus trip with coupon code FLXAUGND.",
    code: "FLXAUGND",
    points: [
      "Enter coupon code FLXAUGND to get 16% off eligible bookings.",
      "Ride in comfort on modern coaches.",
      "Book your trip online in just a few steps.",
      "Perfect for budget-friendly travel across Australia.",
    ],
    affiliateUrl: "https://www.flixbus.com.au/",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
  },
  {
    id: "c3",
    topLabel: "EXTRA",
    mainValue: "INR 100",
    offText: "OFF",
    title: "FlixBus Voucher Code – Extra INR 100 Off",
    description: "Use coupon code FLXAUGND and get an extra INR 100 off your booking.",
    code: "FLXAUGND",
    points: [
      "Enter coupon code FLXAUGND to receive an additional INR 100 discount.",
      "Save more on select FlixBus routes.",
      "Book online for a quick and easy experience.",
      "Great for travelers who want to cut their travel costs.",
    ],
    affiliateUrl: "https://www.flixbus.com.au/",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
  },
  {
    id: "c4",
    topLabel: "EXTRA",
    mainValue: "20%",
    offText: "OFF",
    title: "FlixBus Coupon Code – 20% Off on Sydney to Thredbo Trips",
    description: "Travel from Sydney to Thredbo with fares starting at just $74.99 using coupon code FLXAUGND.",
    code: "FLXAUGND",
    points: [
      "Use coupon code FLXAUGND to save an extra 20% on eligible bookings.",
      "One-way fares start at just $74.99.",
      "Ride in comfort via the Perisher Skitube route.",
      "Ideal for snow trips and winter getaways.",
    ],
    affiliateUrl: "https://www.flixbus.com.au/",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
  },
  {
    id: "c5",
    topLabel: "FLAT",
    mainValue: "50%",
    offText: "OFF",
    title: "FlixBus Discount Code – 50% Off Your Next Trip",
    description: "Use coupon code FLXAUGND to save 50% on your next FlixBus trip.",
    code: "FLXAUGND",
    points: [
      "Enter coupon code FLXAUGND to get 50% off eligible bus tickets.",
      "Explore popular destinations across Australia for less.",
      "Ride in comfortable, modern coaches.",
      "Perfect for vacations, weekend trips, and everyday travel.",
    ],
    affiliateUrl: "https://www.flixbus.com.au/",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
  },
  {
    id: "c6",
    topLabel: "Starting At",
    mainValue: "$9.99",
    offText: "One-Way",
    title: "FlixBus Promo Code – One-Way Fares from $9.99",
    description: "Book one-way fares from just $9.99, and use coupon code FLXAUGND for extra savings where eligible.",
    code: "FLXAUGND",
    points: [
      "Enter coupon code FLXAUGND on qualifying bookings.",
      "One-way fares start at only $9.99 on select routes.",
      "Ride in modern coaches with comfy seating.",
      "Great for low-cost city-to-city travel.",
    ],
    affiliateUrl: "https://www.flixbus.com.au/",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
  },
];

