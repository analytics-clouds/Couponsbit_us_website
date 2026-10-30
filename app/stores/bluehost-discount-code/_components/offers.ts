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
  { id: "c1", discount: "60%", label: "UP TO", badge: "Best Offer", title: "Up to 60% OFF on Top Categories", heading: "Up to 60% OFF", sub: "Top Categories", description: "Shop for electronics, fashion, home & more and get up to 60% discount on selected items.", usedCount: "112k", expiresIn: "2 days", code: "AMAZON60" },
  { id: "c2", discount: "50%", label: "FLAT", badge: "Popular", title: "Flat 50% OFF on Electronics", heading: "Flat 50% OFF", sub: "Electronics", description: "Get flat 50% off on best selling electronics & accessories.", usedCount: "95k", expiresIn: "3 days", code: "ELEC50" },
  { id: "c3", discount: "30%", label: "FLAT", badge: "Trending", title: "Flat 30% OFF on Fashion", heading: "Flat 30% OFF", sub: "Fashion", description: "Save big on clothing, footwear, watches & more.", usedCount: "88k", expiresIn: "1 day", code: "FASHION30" },
  { id: "c4", discount: "10%", label: "EXTRA", title: "Extra 10% OFF on Prepaid Orders", heading: "Extra 10% OFF", sub: "Prepaid Orders", description: "Pay using UPI, Cards, Net Banking & get extra 10% off.", usedCount: "76k", expiresIn: "2 days", code: "PREPAID10" },
  { id: "c5", discount: "FREE", label: "DELIVERY", title: "Free Delivery on First Order", heading: "Free Delivery", sub: "On First Order", description: "Get FREE delivery on your first order on Bluehost.", usedCount: "65k", expiresIn: "5 days", code: "FREESHIP" },
  { id: "c6", discount: "₹200", label: "FLAT", title: "Get ₹200 OFF on Min. Order ₹999", heading: "₹200 OFF", sub: "On Min. Order ₹999", description: "Use code and get flat ₹200 off on minimum order of ₹999.", usedCount: "54k", expiresIn: "3 days", code: "SAVE200" },
];
