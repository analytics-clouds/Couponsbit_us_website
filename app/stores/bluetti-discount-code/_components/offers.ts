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
  { id: "c1", discount: "$150", label: "SAVE", title: "BLUETTI Power – Elite 300 + Charger 2, Save $150", heading: "$150", sub: "BLUETTI Power", description: "Save $150 on the Elite 300 + Charger 2 bundle, the world’s smallest 3kWh portable power station.", usedCount: "0", expiresIn: "TBD", code: "BLUETTI1" },
  { id: "c2", discount: "$200", label: "SAVE", title: "BLUETTI Power – Apex 300 + 2×B300K, Save $200", heading: "$200", sub: "BLUETTI Power", description: "Get $200 OFF the Apex 300 expansion bundle with massive 8,294.4Wh expandable power capacity.", usedCount: "0", expiresIn: "TBD", code: "BLUETTI2" },
  { id: "c3", discount: "$249", label: "FREE", title: "BLUETTI Power – FREE $249 Trolley With Apex 300 Bundle", heading: "$249", sub: "BLUETTI Power", description: "Buy a select Apex 300 bundle and receive a FREE trolley worth $249.", usedCount: "0", expiresIn: "TBD", code: "BLUETTI3" },
  { id: "c4", discount: "$1,199", label: "From", title: "BLUETTI Power – Elite 300 From $1,199", heading: "$1,199", sub: "BLUETTI Power", description: "The world’s smallest 3kWh portable power station, starting at just $1,199.", usedCount: "0", expiresIn: "TBD", code: "BLUETTI4" },
  { id: "c5", discount: "$1,699", label: "From", title: "BLUETTI Power – Apex 300 From $1,699", heading: "$1,699", sub: "BLUETTI Power", description: "Delivers both 120V & 240V power simultaneously, starting from $1,699.", usedCount: "0", expiresIn: "TBD", code: "BLUETTI5" },
];
