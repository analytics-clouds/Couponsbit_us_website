export interface Offer {
  id: string;
  label: string;
  value: string;
  sub?: string;
  title: string;
  desc: string;
  bullets: string[];
}

export const OFFERS: Offer[] = [
  {
    id: "c1",
    label: "Join For",
    value: "$19",
    title: "Avis Drive Gold Membership – Limited-Time Offer",
    desc: "Join Avis Drive Gold for just $19 (regular price $39) for a limited time.",
    bullets: [
      "Unlock exclusive member-only discounts on car rentals throughout the year",
      "Enjoy premium benefits and faster bookings with Avis Drive Gold",
      "Sign up today and start saving on every journey",
    ],
  },
  {
    id: "c2",
    label: "UP TO",
    value: "20%",
    sub: "OFF",
    title: "Avis – Member Savings Across The USA",
    desc: "Rent your favorite vehicle and save up to 20% off on eligible bookings.",
    bullets: [
      "Choose from SUVs, luxury cars, sedans, and family-friendly vehicles",
      "Enjoy flexible pickup locations and hassle-free reservations nationwide",
      "Book with Avis and travel smarter while spending less",
    ],
  },
  {
    id: "c3",
    label: "Only",
    value: "$99",
    sub: "/yr",
    title: "Avis Drive Gold Annual Membership – Just $99",
    desc: "Get Avis Drive Gold Annual Membership for only $99 for a full year of exclusive savings.",
    bullets: [
      "Enjoy discounted car rentals across the USA, UK, and Europe",
      "Access member-only pricing and premium travel benefits on every booking",
      "Limited-time offer — enroll before the promotion ends",
    ],
  },
  {
    id: "c4",
    label: "UP TO",
    value: "20%",
    sub: "OFF",
    title: "Avis – Save Up To 20% On Every Rental",
    desc: "Save up to 20% off on every eligible car rental across the USA.",
    bullets: [
      "Enjoy premium vehicles at discounted member-exclusive prices",
      "Perfect for business trips, vacations, and weekend getaways",
      "Join Avis Drive today and unlock year-round rental savings",
    ],
  },
];
