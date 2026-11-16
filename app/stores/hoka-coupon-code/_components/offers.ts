export interface Offer {
  id: string;
  label: string;
  value: string;
  title: string;
  desc: string;
  bullets: string[];
  verified?: string;
  userType?: string;
  validTill?: string;
}

export const OFFERS: Offer[] = [
  {
    id: "c1",
    label: "FLAT",
    value: "30% OFF",
    title: "HOKA Coupon Code: Ora Athletic Slide 30% Off",
    desc: "Slip into everyday comfort with the Ora Athletic Slide at a lower price.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get the Ora Athletic Slide for just $39.",
      "That’s 30% off the regular $60 price.",
      "Made for post-workout recovery and daily wear.",
      "Limited-time offer while supplies last."
    ]
  },
  {
    id: "c2",
    label: "UP TO",
    value: "50% OFF",
    title: "HOKA Coupon Code: Up to 50% Off Accessories",
    desc: "Save big on select HOKA accessories for a limited time.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Take up to 50% off select accessories.",
      "Browse hats, socks, bags, and other essentials.",
      "Discounts apply to eligible products only.",
      "Available for a limited time."
    ]
  },
  {
    id: "c3",
    label: "FLAT",
    value: "30% OFF",
    title: "HOKA Promo Code: Crescendo XC Running Shoes 30% Off",
    desc: "Gear up for race day with savings on the Crescendo XC shoes.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get the all-gender Crescendo XC Running Shoes for $63.",
      "That’s 30% off the regular $90 price.",
      "Built for strong cross-country performance.",
      "Limited-time offer on eligible sizes."
    ]
  },
  {
    id: "c4",
    label: "FLAT",
    value: "20% OFF",
    title: "HOKA Promo Code: Clifton 10 Women’s Running Shoes 20% Off",
    desc: "Save on lightweight comfort with the Clifton 10.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get the Women’s Clifton 10 for $124.",
      "That’s 20% off the regular $155 price.",
      "Made for everyday runs and training.",
      "Available for a limited time."
    ]
  },
  {
    id: "c5",
    label: "FLAT",
    value: "30% OFF",
    title: "HOKA Discount Code: Mach 6 Men’s Running Shoes 30% Off",
    desc: "Get top-tier running performance for less.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Pick up the Men’s Mach 6 Running Shoes for $98.",
      "That’s 30% off the regular $140 price.",
      "Built for speed and everyday training.",
      "Available while supplies last."
    ]
  },
  {
    id: "c6",
    label: "FLAT",
    value: "10% OFF",
    title: "HOKA Discount Code: 10% Off for New Members",
    desc: "New members can unlock extra savings on eligible orders.",
    verified: "Verified",
    userType: "New Members",
    validTill: "30 Nov 2026",
    bullets: [
      "Take 10% off your first eligible HOKA purchase.",
      "Enjoy free standard shipping with this offer.",
      "Open to new members only.",
      "Limited-time promotion."
    ]
  },
  {
    id: "c7",
    label: "FROM",
    value: "$70",
    title: "HOKA Voucher Code: High-Cushion Shoes From $70",
    desc: "Check out plush, cushioned running shoes at friendly prices.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Shop HOKA high-cushion shoes starting at $70.",
      "Pick from a range of eligible styles.",
      "Made for comfort and everyday performance.",
      "Limited-time pricing available."
    ]
  },
  {
    id: "c8",
    label: "SAVE",
    value: "20% OFF",
    title: "HOKA Voucher Code: Save 20% When You Buy 2+ Items",
    desc: "Save more when you shop for multiple HOKA products.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get 20% off when you buy two or more eligible items.",
      "Mix and match qualifying HOKA products.",
      "Discount applies to eligible purchases.",
      "Available for a limited time."
    ]
  }
];
