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
    value: "70% OFF",
    title: "Kohl’s Coupon Code: Up to 70% Off Clearance Sale",
    desc: "Save up to 70% on clearance styles during Kohl’s limited-time sale.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Take up to 70% off select clearance items.",
      "Find more sizes and styles available in stores.",
      "Shop multiple categories at lower prices.",
      "Clearance deals last while supplies do."
    ]
  },
  {
    id: "c2",
    label: "FLAT",
    value: "$10 OFF",
    title: "Kohl’s Coupon Code: $10 Off $50+ on Toys",
    desc: "Kohl’s Rewards members can take $10 off qualifying toy purchases over $50.",
    verified: "Verified",
    userType: "Kohl’s Rewards Members",
    validTill: "30 Nov 2026",
    bullets: [
      "Get $10 off when you spend $50 or more on eligible toys.",
      "The discount applies at checkout.",
      "Available exclusively to Kohl’s Rewards members.",
      "Shop before this limited-time offer expires."
    ]
  },
  {
    id: "c3",
    label: "UP TO",
    value: "50% OFF",
    title: "Kohl’s Promo Code: Up to 50% Off Kitchen Appliances",
    desc: "Upgrade your kitchen with savings of up to 50% on select appliances.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 50% on eligible kitchen appliances.",
      "Shop popular appliances during this Epic Deal.",
      "Refresh your kitchen and spend less.",
      "Available for a limited time."
    ]
  },
  {
    id: "c4",
    label: "DEAL",
    value: "$7.19",
    title: "Kohl’s Deals: Croft & Barrow V-Neck Tee for $7.19",
    desc: "Pick up the Women’s Croft & Barrow Essential V-Neck Tee for just $7.19.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get the V-Neck Tee for $7.19, down from $11.99.",
      "Save on an everyday wardrobe staple.",
      "Available while promotional pricing lasts.",
      "Shop before this verified deal ends."
    ]
  },
  {
    id: "c5",
    label: "UP TO",
    value: "70% OFF",
    title: "Kohl’s Offers: Up to 70% Off New Clearance Markdowns",
    desc: "Check out fresh markdowns with savings of up to 70%.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 70% on newly marked-down clearance items.",
      "Browse discounts across select categories.",
      "Snag limited-time bargains while inventory lasts.",
      "A great chance to save on seasonal favorites."
    ]
  },
  {
    id: "c6",
    label: "UP TO",
    value: "50% OFF",
    title: "Kohl’s Discount Code: Up to 50% Off Storewide",
    desc: "Enjoy savings of up to 50% across select Kohl’s categories.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get up to 50% off eligible storewide purchases.",
      "Shop fashion, home essentials, and more.",
      "Explore discounts on a wide range of products.",
      "Limited-time savings are live now."
    ]
  },
  {
    id: "c7",
    label: "FLAT",
    value: "15% OFF",
    title: "Kohl’s New User Offer: Flat 15% Off Your First Order",
    desc: "New shoppers can take 15% off their first Kohl’s purchase.",
    verified: "Verified",
    userType: "New Customers",
    validTill: "30 Nov 2026",
    bullets: [
      "Save 15% on your first eligible order.",
      "Exclusive offer for new customers.",
      "A nice way to start saving on your first haul.",
      "Available for a limited time."
    ]
  },
  {
    id: "c8",
    label: "UP TO",
    value: "30% OFF",
    title: "Kohl’s Deals: Up to 30% Off Levi’s Clothing",
    desc: "Freshen up your wardrobe with savings on select Levi’s styles.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 30% on eligible Levi’s clothing.",
      "Shop select loose-fit and casual apparel.",
      "Upgrade your everyday wardrobe for less.",
      "Available for a limited time."
    ]
  },
  {
    id: "c9",
    label: "UP TO",
    value: "50% OFF",
    title: "Kohl’s Footwear Sale: Up to 50% Off",
    desc: "Step into savings with up to 50% off select footwear.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 50% on eligible shoes and footwear.",
      "Shop styles for the whole family.",
      "Find everyday and athletic footwear at lower prices.",
      "Limited-time sale while supplies last."
    ]
  },
  {
    id: "c10",
    label: "UP TO",
    value: "40% OFF",
    title: "Kohl’s Women’s Clothing Sale: Up to 40% Off",
    desc: "Save up to 40% on stylish women’s clothing at Kohl’s.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Take up to 40% off select women’s apparel.",
      "Shop everyday fashion and seasonal styles.",
      "Refresh your wardrobe with limited-time savings.",
      "Applies to eligible items only."
    ]
  },
  {
    id: "c11",
    label: "UP TO",
    value: "40% OFF",
    title: "Kohl’s Offers: Up to 40% Off Men’s Activewear",
    desc: "Stay active and save on select men’s activewear.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 40% on eligible men’s activewear.",
      "Shop workout essentials and casual performance wear.",
      "Get quality apparel at lower prices.",
      "Available for a limited time."
    ]
  },
  {
    id: "c12",
    label: "SAVE",
    value: "15% OFF",
    title: "Kohl’s Clearance Deals: Save 15%",
    desc: "Take an extra 15% off eligible clearance products.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Enjoy 15% off qualifying clearance items.",
      "Stack extra savings on already reduced products.",
      "Shop select clearance categories.",
      "Available for a limited time."
    ]
  },
  {
    id: "c13",
    label: "FLAT",
    value: "40% OFF",
    title: "Kohl’s Discount Code: Flat 40% Off Sweaters & Tops",
    desc: "Refresh your wardrobe with 40% off select sweaters and tops.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save 40% on eligible sweaters and tops.",
      "Find seasonal styles at lower prices.",
      "A great time to update your everyday wardrobe.",
      "Shop while the promotion lasts."
    ]
  },
  {
    id: "c14",
    label: "SAVE",
    value: "30% OFF",
    title: "Kohl’s Offers: Save 30% on Outdoor & Garden Decor",
    desc: "Dress up your outdoor spaces with 30% savings.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get 30% off select outdoor and garden décor.",
      "Add stylish accents to your patio and garden.",
      "Shop seasonal décor at lower prices.",
      "Limited-time offer on eligible products."
    ]
  },
  {
    id: "c15",
    label: "FLAT",
    value: "30% OFF",
    title: "Kohl’s Deals: Flat 30% Off Patio Furniture",
    desc: "Upgrade your outdoor living space and save 30%.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Enjoy 30% off select patio furniture.",
      "Shop seating, tables, and outdoor essentials.",
      "Refresh your backyard for less.",
      "Available while promotional pricing lasts."
    ]
  },
  {
    id: "c16",
    label: "FLAT",
    value: "35% OFF",
    title: "Kohl’s Card Offer: Flat 35% Off Orders",
    desc: "Kohl’s Card members can save 35% on eligible purchases.",
    verified: "Verified",
    userType: "Kohl’s Card Members",
    validTill: "30 Nov 2026",
    bullets: [
      "Get 35% off qualifying orders with a Kohl’s Card.",
      "Exclusive savings for eligible cardholders.",
      "Shop across participating categories.",
      "Limited-time member offer."
    ]
  },
  {
    id: "c17",
    label: "FLAT",
    value: "30% OFF",
    title: "Kohl’s Coupon Code: 30% Off Kitchen & Dining",
    desc: "Save 30% on select kitchen and dining essentials.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Enjoy 30% off eligible kitchen and dining products.",
      "Shop cookware, tableware, and home basics.",
      "Upgrade your kitchen and spend less.",
      "Available for a limited time."
    ]
  },
  {
    id: "c18",
    label: "FLAT",
    value: "25% OFF",
    title: "Kohl’s Discount Code: Flat 25% Off Women’s Jockey Products",
    desc: "Save 25% on select women’s Jockey essentials.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Take 25% off eligible women’s Jockey products.",
      "Shop comfortable everyday basics for less.",
      "Limited-time savings on select styles.",
      "Valid while promotional stock lasts."
    ]
  },
  {
    id: "c19",
    label: "UP TO",
    value: "25% OFF",
    title: "Kohl’s Offers: Up to 25% Off Athletic Shoes",
    desc: "Find athletic footwear with savings of up to 25%.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save up to 25% on select athletic shoes.",
      "Shop footwear for training, walking, and everyday wear.",
      "Enjoy discounts on popular styles.",
      "Available for a limited time."
    ]
  },
  {
    id: "c20",
    label: "FLAT",
    value: "$15 OFF",
    title: "Kohl’s Coupon Code: $15 Off Orders Over $75",
    desc: "Save $15 when your qualifying order hits $75 or more.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get $15 off eligible purchases over $75.",
      "Boost your savings on larger orders.",
      "Applies to qualifying products.",
      "Shop before this limited-time offer ends."
    ]
  },
  {
    id: "c21",
    label: "FLAT",
    value: "$10 OFF",
    title: "Kohl’s Promo Code: $10 Off Orders Over $25",
    desc: "Spend $25 or more and save $10 instantly.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Save $10 on eligible purchases over $25.",
      "Handy for everyday shopping and essentials.",
      "A qualifying minimum purchase is required.",
      "Available for a limited time."
    ]
  },
  {
    id: "c22",
    label: "EARN",
    value: "$10 CASH",
    title: "Kohl’s Cashback Offer: Earn $10 Kohl’s Cash",
    desc: "Earn rewards as you shop during the promotional period.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get $10 in Kohl’s Cash for every $50 you spend.",
      "Rewards apply to qualifying purchases.",
      "The more you spend during the promotion, the more you earn.",
      "Redeem Kohl’s Cash according to program terms."
    ]
  },
  {
    id: "c23",
    label: "FROM",
    value: "$14",
    title: "Kohl’s Deals: Jewelry Styles From $14",
    desc: "Shop beautiful jewelry starting at just $14.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Browse select jewelry styles from $14.",
      "Find affordable accessories for any occasion.",
      "Explore necklaces, earrings, bracelets, and more.",
      "Limited-time pricing on eligible styles."
    ]
  }
];
