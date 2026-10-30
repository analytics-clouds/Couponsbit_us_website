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
  { id: "c1", discount: "14%", label: "SAVE", title: "Amazon Discount Code – Crayola Classpack Markers for $59.99 | Save 14% on School Supplies", heading: "14% OFF", sub: "Amazon Discount Code", description: "Get the Crayola Broad Line Markers Classpack (256 Count) for only $59.99 (Was $69.99).", usedCount: "0", expiresIn: "TBD", code: "AMAZON1" },
  { id: "c2", discount: "52%", label: "SAVE", title: "Amazon Discount Code – Zikopomi Weighted Vest for $11.99 | Flat 52% OFF", heading: "52% OFF", sub: "Amazon Discount Code", description: "Buy the Zikopomi Weighted Vest for just $11.99 (Was $24.99).", usedCount: "0", expiresIn: "TBD", code: "AMAZON2" },
  { id: "c3", discount: "50%", label: "SAVE", title: "Save More with Amazon Discount Code – Resistance Bands for $9.99 | Save 50% Today", heading: "50% OFF", sub: "Save More with Amazon Discount Code", description: "Grab Resistance Bands for just $9.99 (Was $19.99).", usedCount: "0", expiresIn: "TBD", code: "AMAZON3" },
  { id: "c4", discount: "33%", label: "SAVE", title: "Amazon Fitness Deals – YOTTOY Cordless Jump Rope for $9.98 | Flat 33% OFF", heading: "33% OFF", sub: "Amazon Fitness Deals", description: "Get the YOTTOY Cordless Jump Rope for only $9.98 (Was $14.97).", usedCount: "0", expiresIn: "TBD", code: "AMAZON4" },
  { id: "c5", discount: "33%", label: "SAVE", title: "Amazon Discount Code – Dr. Arthritis Wrist Brace for $9.95 | Save 33%", heading: "33% OFF", sub: "Amazon Discount Code", description: "Buy the Dr. Arthritis Wrist Brace for only $9.95 (Was $14.95).", usedCount: "0", expiresIn: "TBD", code: "AMAZON5" },
];
