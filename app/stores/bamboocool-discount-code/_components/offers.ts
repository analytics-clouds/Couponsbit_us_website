export interface Offer {
  id: string;
  label: string;
  value: string;
  title: string;
  desc: string;
  bullets: string[];
}

export const OFFERS: Offer[] = [
  { id: "c1", label: "UP TO", value: "25% OFF", title: "BambooCool Discount Code – Summer Collection | Up to 25% OFF", desc: "Save up to 25% OFF on selected summer underwear and apparel", bullets: ["Enjoy lightweight bamboo fabrics designed for breathable everyday comfort", "Get FREE SHIPPING on eligible orders over $49", "Explore soft, comfortable styles made for warm-weather wear"] },
  { id: "c2", label: "ONLY", value: "$27.29", title: "BambooCool Discount Code – Men's Polo Shirt | $27.29", desc: "Save from the regular price of $45.99 on this clearance deal", bullets: ["Features a comfortable short-sleeve design for casual everyday outfits", "A versatile option for summer styling and daily wear"] },
  { id: "c3", label: "ONLY", value: "$36.99", title: "BambooCool – Women's Seamless Briefs 5-Pack | $36.99", desc: "Shop the Mid-Waist Seamless Women's Briefs 5-Pack for $36.99", bullets: ["Save compared with the regular price of $38.99", "Seamless construction offers a smooth and comfortable everyday fit", "Practical multi-pack option for refreshing your underwear drawer"] },
  { id: "c4", label: "ONLY", value: "$56.94", title: "BambooCool – Men's Boxer Briefs 7-Pack | $56.94", desc: "Get the Days of the Week Men's Boxer Briefs 7-Pack for $56.94", bullets: ["Reduced from the regular price of $66.99", "Seven-piece pack provides a fresh pair for each day of the week", "Designed for comfortable everyday use and easy wardrobe rotation"] },
  { id: "c5", label: "ONLY", value: "$56.99", title: "BambooCool – Men's Bamboo Underwear 7-Pack | $56.99", desc: "Shop the Bamboo Cool Men's Underwear 7-Pack for $56.99", bullets: ["Save from the regular price of $65.99", "Bamboo fabric offers a soft and breathable feel for everyday wear", "Multi-pack design makes it easy to stock up on essentials"] },
  { id: "c6", label: "ONLY", value: "$35.99", title: "BambooCool – Women's Lace Hipster Bikini 6-Pack | $35.99", desc: "Get the Women's Lace Hipster Bikini 6-Pack for $35.99", bullets: ["Reduced from the regular price of $39.99", "Features a feminine lace detail with a comfortable hipster silhouette", "Six-piece pack makes a practical addition to your everyday essentials"] },
  { id: "c7", label: "ONLY", value: "$36.74", title: "BambooCool – Seamless High-Waist Thongs 6-Pack | $36.74", desc: "Shop the Seamless High-Waist Women's Thongs 6-Pack for $36.74", bullets: ["Save compared with the regular price of $43.99", "High-waist seamless construction provides a smooth fit under clothing", "A convenient six-piece collection for everyday wear"] },
  { id: "c8", label: "ONLY", value: "$32.59", title: "BambooCool – Lightweight Lace Trim Pajama Set | $32.59", desc: "Get the Lightweight Women's Lace Trim Pajama Set for $32.59", bullets: ["Reduced from the regular price of $33.99", "Features a lightweight design with stylish lace trim detailing", "Ideal for comfortable summer nights and relaxed lounging"] },
  { id: "c9", label: "ONLY", value: "$49.34", title: "BambooCool – Women's Short-Sleeve Pajama Set | $49.34", desc: "Shop the Women's Short-Sleeve Pajama Set for $49.34", bullets: ["Save from the regular price of $55.99", "Short-sleeve styling makes it suitable for comfortable warm-weather sleep", "A versatile choice for relaxing at home or nighttime wear"] },
  { id: "c10", label: "SAVE", value: "20% OFF", title: "BambooCool Discount Code – First Order | 20% OFF", desc: "Sign up and receive 20% OFF your first BambooCool order", bullets: ["Get access to exclusive promotions and new-arrival updates", "A great opportunity for new customers to save on bamboo apparel and underwear", "Offer applies to eligible first orders according to the store's terms"] },
];
