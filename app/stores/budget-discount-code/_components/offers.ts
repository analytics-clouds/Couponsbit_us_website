export interface Offer {
  id: string;
  discount: string;
  label: string;
  badge?: "Best Offer" | "Popular" | "Trending";
  title: string;
  heading: string;
  sub: string;
  description: string;
  usedCount: string;
  expiresIn: string;
  code: string;
}

export const OFFERS: Offer[] = [
  { id: "c1", discount: "35%", label: "UP TO", badge: "Best Offer", title: "Budget Summer Sale – Up To 35% OFF", heading: "Up To 35% OFF", sub: "Summer Sale", description: "Book your next rental and save up to 35% off when you pay now, plus a free vehicle upgrade on eligible bookings.", usedCount: "0", expiresIn: "TBD", code: "BUDGET1" },
  { id: "c2", discount: "25%", label: "UP TO", badge: "Popular", title: "Budget Weekly Rental Deal – Up To 25% OFF", heading: "Up To 25% OFF", sub: "Weekly Rental Deal", description: "Save up to 25% off on rentals of 5 days or more, perfect for road trips and extended travel.", usedCount: "0", expiresIn: "TBD", code: "BUDGET2" },
  { id: "c3", discount: "$10", label: "GET", badge: "Trending", title: "Budget – Get $10 OFF Rentals Over $175", heading: "$10 OFF", sub: "Rentals Over $175", description: "Save $10 off when your rental is $175 or more, valid on rentals of 3 days or longer.", usedCount: "0", expiresIn: "TBD", code: "BUDGET3" },
  { id: "c4", discount: "$29.99", label: "STARTING AT", title: "Budget Truck Rental – Cargo Vans From $29.99/Day", heading: "Starting At $29.99", sub: "Cargo Van Rental", description: "Rent a cargo van from just $29.99 per day, ideal for moving apartments, furniture, or large items.", usedCount: "0", expiresIn: "TBD", code: "BUDGET4" },
  { id: "c5", discount: "15%", label: "UP TO", title: "Budget Young Driver Special – Up To 15% OFF", heading: "Up To 15% OFF", sub: "Young Driver Special", description: "Young travelers can save up to 15% off eligible rentals with trusted Budget service.", usedCount: "0", expiresIn: "TBD", code: "BUDGET5" },
];
