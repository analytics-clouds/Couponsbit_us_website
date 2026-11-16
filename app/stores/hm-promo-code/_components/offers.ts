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
    label: "UP TO",
    value: "72% OFF",
    title: "H&M Coupon Code: Up to 72% Off Women’s Summer Sale",
    desc: "Give your closet a fresh look with up to 72% off select women’s summer styles.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 72% on select women’s summer clothing.",
      "Snag the Layered Crop Top for $16.99, marked down from $59.99.",
      "Shop seasonal fashion at lower prices.",
      "Available for a limited time."
    ]
  },
  {
    id: "c2",
    label: "UP TO",
    value: "70% OFF",
    title: "H&M Coupon Code: Up to 70% Off the MAMA Jersey Set",
    desc: "Save big on maternity basics with this limited-time deal.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get the MAMA 2-Piece Textured Jersey Set for $14.99.",
      "That’s 70% off the regular $49.99 price.",
      "Made for everyday comfort during pregnancy.",
      "Limited-time deal on select maternity wear."
    ]
  },
  {
    id: "c3",
    label: "UP TO",
    value: "72% OFF",
    title: "H&M Promo Code: Up to 72% Off Summer Fashion",
    desc: "Find stylish summer staples at prices that are hard to beat.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 72% on select summer fashion.",
      "Browse women’s clothing, dresses, and seasonal must-haves.",
      "Discounts apply to eligible items.",
      "Offered for a limited time."
    ]
  },
  {
    id: "c4",
    label: "UP TO",
    value: "70% OFF",
    title: "H&M Promo Code: Up to 70% Off Jelly Flip-Flops",
    desc: "Kick off summer with marked-down footwear.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get Jelly Flip-Flops for only $7.49.",
      "That’s 70% off the regular $24.99 price.",
      "A great pick for casual, everyday wear.",
      "Available while stocks last."
    ]
  },
  {
    id: "c5",
    label: "UP TO",
    value: "70% OFF",
    title: "H&M Discount Code: Up to 70% Off Beauty Products",
    desc: "Stock up on your H&M beauty favorites for less.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Take up to 70% off select beauty products.",
      "Shop makeup and beauty basics at lower prices.",
      "Discounts apply to eligible items.",
      "Limited-time promotion."
    ]
  },
  {
    id: "c6",
    label: "UP TO",
    value: "62% OFF",
    title: "H&M Discount Code: Up to 62% Off Sports Leggings",
    desc: "Add to your activewear lineup and save extra.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get H&M MOVE Sports Leggings for $16.99.",
      "That’s 62% off the regular $44.99 price.",
      "SoftMove™ fabric keeps you comfortable all day.",
      "Offered for a limited time."
    ]
  },
  {
    id: "c7",
    label: "UP TO",
    value: "62% OFF",
    title: "H&M Voucher Code: Up to 62% Off Printed T-Shirts",
    desc: "Pick up casual basics at reduced prices.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Grab the Relaxed-Fit Printed T-Shirt for $12.99.",
      "Save up to 62% on select styles.",
      "An easy choice for everyday wear.",
      "Applies to eligible items."
    ]
  },
  {
    id: "c8",
    label: "UP TO",
    value: "62% OFF",
    title: "H&M Voucher Code: Up to 62% Off the Denim Collection",
    desc: "Update your denim lineup and save more.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 62% on select denim styles.",
      "Pick up Baggy Regular Waist Jeans for $34.99.",
      "Explore a mix of trending denim fits.",
      "Limited-time offer on eligible items."
    ]
  },
  {
    id: "c9",
    label: "UP TO",
    value: "77% OFF",
    title: "H&M Referral Code: Up to 77% Off Men’s Resort Shirt",
    desc: "Score stylish men’s shirts at standout prices.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get the Regular-Fit Jacquard Resort Shirt for $6.99.",
      "That’s 77% off the regular $29.99 price.",
      "Ideal for vacations and laid-back outings.",
      "Available for a limited time."
    ]
  },
  {
    id: "c10",
    label: "UP TO",
    value: "70% OFF",
    title: "H&M Referral Code: Up to 70% Off the Open-Knit Polo Shirt",
    desc: "Refresh your wardrobe with marked-down men’s essentials.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Pick up the Relaxed-Fit Open-Knit Polo Shirt for $14.99.",
      "That’s 70% off the regular $49.99 price.",
      "A smart choice for smart-casual looks.",
      "Available while stocks last."
    ]
  },
  {
    id: "c11",
    label: "UP TO",
    value: "35% OFF",
    title: "H&M Cashback Offers: Up to 35% Off Men’s Accessories",
    desc: "Pick up everyday accessories for less.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 35% on select men’s accessories.",
      "Get the 2-Pack Socks for just $6.49.",
      "Discount applies to eligible accessories.",
      "Available for a limited time."
    ]
  },
  {
    id: "c12",
    label: "UP TO",
    value: "60% OFF",
    title: "H&M Cashback Offers: Up to 60% Off Men’s T-Shirts & Tops",
    desc: "Restock your basics with discounted men’s apparel.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 60% on select T-shirts and tops.",
      "Pick up the Linen-Blend Polo Shirt for $19.99.",
      "Shop everyday essentials at lower prices.",
      "Limited-time offer on eligible items."
    ]
  },
  {
    id: "c13",
    label: "UP TO",
    value: "67% OFF",
    title: "H&M Wallet Offers: Up to 67% Off Men’s Shorts",
    desc: "Save on comfy shorts for any occasion.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Take up to 67% off select men’s shorts.",
      "Grab Loose-Fit Cotton Cargo Shorts for $14.99.",
      "Perfect for casual, everyday wear.",
      "Available while supplies last."
    ]
  },
  {
    id: "c14",
    label: "UP TO",
    value: "65% OFF",
    title: "H&M Wallet Offers: Up to 65% Off Men’s Blazers & Suits",
    desc: "Build out your formal wardrobe with major savings.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 65% on select blazers and suits.",
      "Get the Double-Breasted Jacket for $34.99.",
      "Ideal for the office and special occasions.",
      "Limited-time promotion."
    ]
  },
  {
    id: "c15",
    label: "UP TO",
    value: "58% OFF",
    title: "H&M Bank Offers: Up to 58% Off Men’s Shoes",
    desc: "Find stylish footwear at lower prices.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 58% on select men’s shoes.",
      "Pick up Canvas Espadrilles for $20.99.",
      "Discounts apply to eligible footwear.",
      "Offered for a limited time."
    ]
  },
  {
    id: "c16",
    label: "UP TO",
    value: "70% OFF",
    title: "H&M Bank Offers: Up to 70% Off Home Bedding",
    desc: "Give your home a fresh look with marked-down bedding.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 70% on select bedding products.",
      "Get the Linen-Blend Bedspread for $20.99.",
      "Shop stylish home basics at lower prices.",
      "Valid for a limited time."
    ]
  },
  {
    id: "c17",
    label: "UP TO",
    value: "70% OFF",
    title: "H&M Coupon Code: Up to 70% Off Beauty & Makeup",
    desc: "Score big savings on makeup must-haves.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 70% on select beauty products.",
      "Pick up the Mattifying Powder for just $4.49.",
      "Discounts apply to eligible makeup items.",
      "Limited-time offer."
    ]
  },
  {
    id: "c18",
    label: "UP TO",
    value: "69% OFF",
    title: "H&M Coupon Code: Up to 69% Off Fragrances",
    desc: "Save on select fragrances and perfumes.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Take up to 69% off select fragrances.",
      "Get Eau de Toilette for just $2.49.",
      "Shop premium scents at lower prices.",
      "Available while stocks last."
    ]
  }
];
