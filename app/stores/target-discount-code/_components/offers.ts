export interface Coupon {
  id: string;
  topLabel: string;
  mainValue: string;
  offText: string;
  title: string;
  description: string;
  code: string;
  verified: string;
  userType: string;
  validTill: string;
  points: string[];
}

export const TARGET_COUPONS: Coupon[] = [
  {
    id: "t1",
    topLabel: "SAVE",
    mainValue: "$100",
    offText: "",
    title: "Target Promo Code – Save Up to $100 on Apple Devices",
    description: "Save up to $100 on select Apple devices",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Discover limited-time savings on popular Apple products",
      "Shop eligible devices online and find great technology deals",
      "Availability, exclusions and quantities may vary",
    ],
  },
  {
    id: "t2",
    topLabel: "UP TO",
    mainValue: "50%",
    offText: "OFF",
    title: "Target Promo Code – Up to 50% OFF Pillows & Bedding",
    description: "Get up to 50% OFF select pillows and bedding",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Refresh your bedroom with comfortable and stylish bedding essentials",
      "Online-only savings are available on eligible products",
      "Shop while supplies last and upgrade your sleep space for less",
    ],
  },
  {
    id: "t3",
    topLabel: "UP TO",
    mainValue: "50%",
    offText: "OFF",
    title: "Target Promo Code – Up to 50% OFF Clothing for All",
    description: "Save up to 50% OFF select clothing for women, men and kids",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Discover everyday styles at reduced prices during the clearance event",
      "Shop seasonal fashion, wardrobe essentials and more",
      "Quantities are limited and exclusions may apply",
    ],
  },
  {
    id: "t4",
    topLabel: "UP TO",
    mainValue: "40%",
    offText: "OFF",
    title: "Target – Up to 40% OFF Storage & Home Improvement",
    description: "Save up to 40% OFF select storage and home improvement products",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Organize your home with practical storage solutions and essentials",
      "Find useful products for closets, rooms, garages and home projects",
      "Shop eligible items online while the offer lasts",
    ],
  },
  {
    id: "t5",
    topLabel: "SAVE",
    mainValue: "13%",
    offText: "OFF",
    title: "Target – Sharpie S-Gel Pens 4-Pack | 13% OFF",
    description: "Get the Sharpie S-Gel Pens 4-pack for $4.89, down from $5.59",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save $0.70 with an effective discount of 13% OFF",
      "Features black 0.7mm medium-tip ink for smooth everyday writing",
      "Great for school supplies, office work and stationery collections",
    ],
  },
  {
    id: "t6",
    topLabel: "SAVE",
    mainValue: "40%",
    offText: "OFF",
    title: "Target – Gucci Guilty Elixir de Parfum Pour Homme | 40% OFF",
    description: "Shop Gucci Guilty Elixir de Parfum Pour Homme for $109.80, down from $183",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save $73.20 with an effective discount of 40% OFF",
      "Discover an intense men's fragrance with rich, long-lasting notes",
      "A premium fragrance pick for everyday wear or gifting",
    ],
  },
  {
    id: "t7",
    topLabel: "SHOP",
    mainValue: "CLEARANCE",
    offText: "",
    title: "Target – Women's Eloise Sandals | Clearance Sale",
    description: "Get Women's Eloise Sandals with Memory Foam Insole for $24.50, down from $35",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save $10.50 on this clearance footwear deal",
      "Designed with a memory foam insole for added everyday comfort",
      "A versatile choice for casual outfits and warm-weather styling",
    ],
  },
  {
    id: "t8",
    topLabel: "SHOP",
    mainValue: "UNDER $20",
    offText: "",
    title: "Target – Champion Men's Big Script T-Shirt | Under $20",
    description: "Shop the Champion Men's Big Script T-Shirt for $12.60–$18.00",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Selected styles are available on clearance when purchased online",
      "A casual everyday tee featuring the recognizable Champion look",
      "Great budget-friendly option for casual wardrobes and college style",
    ],
  },
];
