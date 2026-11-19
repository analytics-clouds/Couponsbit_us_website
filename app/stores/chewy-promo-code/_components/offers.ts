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

export const STORE_URL = "https://www.chewy.com/";

export const COUPONS: Coupon[] = [
  {
    id: "c1",
    topLabel: "UP TO",
    mainValue: "50%",
    offText: "OFF",
    title: "Chewy Coupon Code – 50% Off First Autoship Order",
    description: "Save 50% on your first Autoship order for eligible flea and tick treatments.",
    code: "",
    verified: "Verified",
    userType: "First-Time Autoship",
    validTill: "30 Nov 2026",
    points: [
      "Get 50% off your first Autoship purchase on eligible flea and tick medications.",
      "Offer applies to qualifying prescription products.",
      "Autoship helps you schedule recurring pet care deliveries.",
      "Available for first-time eligible Autoship orders."
    ]
  },
  {
    id: "c2",
    topLabel: "FREE",
    mainValue: "$15 eGIFT CARD",
    offText: "",
    title: "Chewy Coupon Code – Free $15 eGift Card on $49+ Orders",
    description: "Receive a free $15 eGift Card when you spend $49 or more.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get a free $15 eGift Card with eligible orders over $49.",
      "Offer applies to qualifying purchases only.",
      "Shop pet food, treats, toys, and other essentials.",
      "Limited-time promotion while eligible."
    ]
  },
  {
    id: "c3",
    topLabel: "BUY 3",
    mainValue: "GET 4TH",
    offText: "FREE",
    title: "Chewy Promo Code – Buy 3, Get the 4th Free Pet Toys",
    description: "Stock up on your pet's favorite toys with this special offer.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Buy any three eligible pet toys and get the fourth free.",
      "Offer applies to selected top-rated toys.",
      "Mix and match from participating products.",
      "Available for a limited time."
    ]
  },
  {
    id: "c4",
    topLabel: "FLAT",
    mainValue: "50%",
    offText: "OFF",
    title: "Chewy Promo Code – 50% Off First Order",
    description: "New customers can save big on their first Chewy purchase.",
    code: "",
    verified: "Verified",
    userType: "New Customers",
    validTill: "30 Nov 2026",
    points: [
      "Get 50% off your first eligible order.",
      "Offer is available for new customers.",
      "Shop thousands of pet products at discounted prices.",
      "Valid for a limited time."
    ]
  },
  {
    id: "c5",
    topLabel: "FROM",
    mainValue: "$12.74",
    offText: "",
    title: "Chewy Discount Code – Nylabone Tough Chewer Dog Toy From $12.74",
    description: "Keep your dog entertained with the durable Nylabone Tough Chewer Toy.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Buy the Nylabone Tough Chewer Dog Toy from $12.74.",
      "Designed for dogs that love aggressive chewing.",
      "Suitable for everyday play and chewing.",
      "Available while supplies last."
    ]
  },
  {
    id: "c6",
    topLabel: "FREE",
    mainValue: "$15 eGIFT CARD",
    offText: "",
    title: "Chewy Discount Code – Free $15 eGift Card on $49+ Orders",
    description: "Earn a bonus gift card when you shop eligible pet essentials.",
    code: "",
    verified: "Verified",
    userType: "New Customers",
    validTill: "30 Nov 2026",
    points: [
      "Get a free $15 eGift Card on purchases of $49 or more.",
      "Offer is available for eligible new customers.",
      "Shop pet food, treats, toys, and accessories.",
      "Promotion is available for a limited time."
    ]
  },
  {
    id: "c7",
    topLabel: "UP TO",
    mainValue: "50%",
    offText: "OFF",
    title: "Chewy Voucher Code – 50% Off First Flea & Tick Autoship",
    description: "Save on your first recurring order of flea and tick protection.",
    code: "",
    verified: "Verified",
    userType: "First-Time Autoship",
    validTill: "30 Nov 2026",
    points: [
      "Get 50% off your first Autoship order on eligible flea and tick products.",
      "Offer applies to qualifying prescription medications.",
      "Set up Autoship for convenient scheduled deliveries.",
      "Available for first-time eligible Autoship customers."
    ]
  },
  {
    id: "c8",
    topLabel: "FROM",
    mainValue: "$40.98",
    offText: "",
    title: "Chewy Voucher Code – Frontline Plus for Small Dogs From $40.98",
    description: "Protect your dog with Frontline Plus starting at $40.98.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Frontline Plus for Small Dogs starts from $40.98.",
      "Helps protect against fleas and ticks.",
      "Available on eligible product sizes.",
      "Limited-time pricing applies."
    ]
  },
  {
    id: "c9",
    topLabel: "FREE",
    mainValue: "DELIVERY",
    offText: "",
    title: "Chewy Referral Code – Free Delivery on First Orders Over $35",
    description: "Enjoy fast shipping on your first eligible Chewy order.",
    code: "",
    verified: "Verified",
    userType: "New Customers",
    validTill: "30 Nov 2026",
    points: [
      "Get free 1–3 day delivery on first orders over $35.",
      "Offer is available for qualifying new customers.",
      "Shop thousands of pet supplies with fast shipping.",
      "Valid on eligible purchases only."
    ]
  }
];
