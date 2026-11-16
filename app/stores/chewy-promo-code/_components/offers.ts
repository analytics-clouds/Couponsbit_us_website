export interface Coupon {
  id: string;
  title: string;
  description?: string;
  code?: string;
  label?: string;
  value?: string;
  desc?: string;
  bullets?: string[];
  verified?: string;
  userType?: string;
  validTill?: string;
}

export const STORE_URL = "https://www.chewy.com/";

export const COUPONS: Coupon[] = [
  {
    id: "c1",
    label: "UP TO",
    value: "50% OFF",
    title: "Chewy Coupon Code – 50% Off First Autoship Order",
    desc: "Save 50% on your first Autoship order for eligible flea and tick treatments.",
    verified: "Verified",
    userType: "First-Time Autoship",
    validTill: "30 Nov 2026",
    bullets: [
      "Get 50% off your first Autoship purchase on eligible flea and tick medications.",
      "Offer applies to qualifying prescription products.",
      "Autoship helps you schedule recurring pet care deliveries.",
      "Available for first-time eligible Autoship orders."
    ]
  },
  {
    id: "c2",
    label: "FREE",
    value: "$15 eGIFT CARD",
    title: "Chewy Coupon Code – Free $15 eGift Card on $49+ Orders",
    desc: "Receive a free $15 eGift Card when you spend $49 or more.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get a free $15 eGift Card with eligible orders over $49.",
      "Offer applies to qualifying purchases only.",
      "Shop pet food, treats, toys, and other essentials.",
      "Limited-time promotion while eligible."
    ]
  },
  {
    id: "c3",
    label: "BUY 3",
    value: "GET 4TH FREE",
    title: "Chewy Promo Code – Buy 3, Get the 4th Free Pet Toys",
    desc: "Stock up on your pet's favorite toys with this special offer.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Buy any three eligible pet toys and get the fourth free.",
      "Offer applies to selected top-rated toys.",
      "Mix and match from participating products.",
      "Available for a limited time."
    ]
  },
  {
    id: "c4",
    label: "FLAT",
    value: "50% OFF",
    title: "Chewy Promo Code – 50% Off First Order",
    desc: "New customers can save big on their first Chewy purchase.",
    verified: "Verified",
    userType: "New Customers",
    validTill: "30 Nov 2026",
    bullets: [
      "Get 50% off your first eligible order.",
      "Offer is available for new customers.",
      "Shop thousands of pet products at discounted prices.",
      "Valid for a limited time."
    ]
  },
  {
    id: "c5",
    label: "FROM",
    value: "$12.74",
    title: "Chewy Discount Code – Nylabone Tough Chewer Dog Toy From $12.74",
    desc: "Keep your dog entertained with the durable Nylabone Tough Chewer Toy.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Buy the Nylabone Tough Chewer Dog Toy from $12.74.",
      "Designed for dogs that love aggressive chewing.",
      "Suitable for everyday play and chewing.",
      "Available while supplies last."
    ]
  },
  {
    id: "c6",
    label: "FREE",
    value: "$15 eGIFT CARD",
    title: "Chewy Discount Code – Free $15 eGift Card on $49+ Orders",
    desc: "Earn a bonus gift card when you shop eligible pet essentials.",
    verified: "Verified",
    userType: "New Customers",
    validTill: "30 Nov 2026",
    bullets: [
      "Get a free $15 eGift Card on purchases of $49 or more.",
      "Offer is available for eligible new customers.",
      "Shop pet food, treats, toys, and accessories.",
      "Promotion is available for a limited time."
    ]
  },
  {
    id: "c7",
    label: "UP TO",
    value: "50% OFF",
    title: "Chewy Voucher Code – 50% Off First Flea & Tick Autoship",
    desc: "Save on your first recurring order of flea and tick protection.",
    verified: "Verified",
    userType: "First-Time Autoship",
    validTill: "30 Nov 2026",
    bullets: [
      "Get 50% off your first Autoship order on eligible flea and tick products.",
      "Offer applies to qualifying prescription medications.",
      "Set up Autoship for convenient scheduled deliveries.",
      "Available for first-time eligible Autoship customers."
    ]
  },
  {
    id: "c8",
    label: "FROM",
    value: "$40.98",
    title: "Chewy Voucher Code – Frontline Plus for Small Dogs From $40.98",
    desc: "Protect your dog with Frontline Plus starting at $40.98.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Frontline Plus for Small Dogs starts from $40.98.",
      "Helps protect against fleas and ticks.",
      "Available on eligible product sizes.",
      "Limited-time pricing applies."
    ]
  },
  {
    id: "c9",
    label: "FREE",
    value: "DELIVERY",
    title: "Chewy Referral Code – Free Delivery on First Orders Over $35",
    desc: "Enjoy fast shipping on your first eligible Chewy order.",
    verified: "Verified",
    userType: "New Customers",
    validTill: "30 Nov 2026",
    bullets: [
      "Get free 1–3 day delivery on first orders over $35.",
      "Offer is available for qualifying new customers.",
      "Shop thousands of pet supplies with fast shipping.",
      "Valid on eligible purchases only."
    ]
  }
];
