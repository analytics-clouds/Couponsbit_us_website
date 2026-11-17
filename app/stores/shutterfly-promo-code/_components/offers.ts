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

export const SHUTTERFLY_COUPONS: Coupon[] = [
  {
    id: "c1",
    topLabel: "SALE",
    mainValue: "50%",
    offText: "OFF",
    title: "Shutterfly – 50% OFF Cards & Stationery",
    description: "Get a flat 50% OFF on eligible cards and stationery orders at Shutterfly.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Meet the minimum cart value requirement of $45 or more to qualify for the discount.",
      "Enjoy FREE shipping on eligible orders with this limited-time USA deal.",
    ],
  },
  {
    id: "c2",
    topLabel: "SALE",
    mainValue: "40%",
    offText: "OFF",
    title: "Shutterfly – 40% OFF Photo Books + FREE Extra Pages",
    description: "Save 40% OFF on eligible photo books at Shutterfly.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Enjoy unlimited FREE extra pages to create a more memorable and personalized photo book.",
      "This offer is available to all eligible Shutterfly customers in the USA.",
    ],
  },
  {
    id: "c3",
    topLabel: "NEW",
    mainValue: "$13.99",
    offText: "",
    title: "Shutterfly – Gallery of Ten Photo Mug for $13.99",
    description: "Create a personalized Gallery of Ten Photo Mug using favorite photos from your camera roll.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get the featured 11 oz photo mug for just $13.99, reduced from $19.99.",
      "Personalize your mug with memorable photos for a unique everyday gift or keepsake.",
      "Shop this Shutterfly USA deal while the promotional price is available.",
    ],
  },
  {
    id: "c4",
    topLabel: "DEAL",
    mainValue: "$9.99",
    offText: "",
    title: "Shutterfly – 11 oz Photo Mugs for $9.99",
    description: "Get selected 11 oz White Photo Mugs for just $9.99 at Shutterfly.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Create a personalized mug featuring your favorite photos and memories.",
      "Make a thoughtful personalized gift for birthdays, holidays, family and special occasions.",
      "Shop the offer while selected photo mug designs remain available.",
    ],
  },
  {
    id: "c5",
    topLabel: "DEAL",
    mainValue: "FREE",
    offText: "PRINTS",
    title: "Shutterfly FREE Photo Prints – Code MEMS",
    description: "Get FREE photo prints from Shutterfly using code MEMS on eligible orders.",
    code: "MEMS",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Turn your favorite digital memories into physical prints to display or share.",
      "Choose from Shutterfly's personalized photo printing options for your favorite moments.",
      "Use code MEMS at checkout and check the offer terms for eligible USA orders.",
    ],
  },
  {
    id: "c6",
    topLabel: "DEAL",
    mainValue: "$37.99",
    offText: "",
    title: "Shutterfly 8x11 Wall Calendars – From $37.99",
    description: "Shop personalized 8x11 Wall Calendars at Shutterfly starting from $37.99.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Add your favorite photos and memories to create a customized calendar.",
      "Create a practical and personal addition to your home or office.",
      "Order your personalized Shutterfly calendar for delivery in the USA.",
    ],
  },
  {
    id: "c7",
    topLabel: "NEW",
    mainValue: "$164.80",
    offText: "",
    title: "Shutterfly Loving Festive Script Holiday Card – Up to 37% OFF",
    description: "Shop the Loving Festive Script Holiday Card from the Shutterfly Trending Now collection.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get the featured card design for $164.80 compared with the original $261.60 price.",
      "Save $96.80 on the selected holiday card design.",
      "Create personalized holiday stationery for sending festive greetings to family and friends.",
    ],
  },
  {
    id: "c8",
    topLabel: "SALE",
    mainValue: "20%",
    offText: "OFF",
    title: "Shutterfly Fleece Blankets – Extra 20% OFF",
    description: "Get an Extra 20% OFF eligible fleece blankets at Shutterfly.",
    code: "EXTRA20",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Use code EXTRA20 at checkout to claim the additional discount.",
      "Personalize your fleece blanket with favorite photos, memories or custom designs.",
      "Shop this limited-time USA offer while eligible fleece blankets are available.",
    ],
  },
  {
    id: "c9",
    topLabel: "DEAL",
    mainValue: "FREE",
    offText: "SHIP",
    title: "Shutterfly – FREE Shipping on Orders $99+",
    description: "Get FREE shipping on qualifying Shutterfly orders of $99 or more.",
    code: "SHIP99",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Use code SHIP99 at checkout to claim the shipping offer.",
      "Save on delivery costs while ordering personalized photo books, gifts, prints and more.",
      "Offer applies to eligible USA orders meeting the required $99 minimum.",
    ],
  },
];
