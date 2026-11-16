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

export const MACYS_COUPONS: Coupon[] = [
  {
    id: "mac1",
    topLabel: "UP TO",
    mainValue: "60%",
    offText: "OFF",
    title: "Macy’s Promo Code: Up to 60% Off the Big Home Event",
    description: "Freshen up your home with savings of up to 60% during Macy’s Big Home Event.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Take 15% to 60% off select home products.",
      "Shop furniture, décor, bedding, and more at lower prices.",
      "Find deals across a wide range of home essentials.",
      "A limited-time event with savings on eligible purchases.",
    ],
  },
  {
    id: "mac2",
    topLabel: "SAVE",
    mainValue: "40%–60%",
    offText: "OFF",
    title: "Macy’s Discount Code: Save 40%–60% During Star Deals Week",
    description: "Score big discounts across select categories during Star Deals Week.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 40% to 60% on participating products.",
      "Explore limited-time offers on popular brands.",
      "Shop fashion, home goods, and daily essentials.",
      "These savings are available during the event only.",
    ],
  },
  {
    id: "mac3",
    topLabel: "UP TO",
    mainValue: "50%",
    offText: "OFF",
    title: "Macy’s Coupon Code: Up to 50% Off Sale Essentials",
    description: "Save up to 50% on select essentials for every room and wardrobe.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get up to 50% off eligible sale essentials.",
      "Pick up everyday favorites at lower prices.",
      "Browse a variety of products across multiple categories.",
      "Available for a limited time.",
    ],
  },
  {
    id: "mac4",
    topLabel: "EXTRA",
    mainValue: "10%–30%",
    offText: "OFF",
    title: "Macy’s Deals: Extra 10%–30% Off the Friends & Family Sale",
    description: "Pick up additional savings during the Macy’s Friends & Family event.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Take an extra 10% to 30% off select departments.",
      "Save more on qualifying purchases throughout the sale.",
      "Shop fashion, beauty, home, and more.",
      "Limited-time promotion on eligible items.",
    ],
  },
  {
    id: "mac5",
    topLabel: "UP TO",
    mainValue: "75%",
    offText: "OFF",
    title: "Macy’s Offers: Up to 75% Off Diamond Sale Jewelry",
    description: "Find stunning jewelry with savings of up to 75%.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 75% on select jewelry during the Diamond Sale.",
      "Browse rings, necklaces, earrings, and more.",
      "Discover luxury styles at standout prices.",
      "Available while this limited-time event lasts.",
    ],
  },
  {
    id: "mac6",
    topLabel: "UP TO",
    mainValue: "40%",
    offText: "OFF",
    title: "Macy’s Discount Code: Up to 40% Off the Great Shoe Sale",
    description: "Step into savings with up to 40% off select footwear.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 40% on eligible shoe styles.",
      "Shop footwear for women, men, and kids.",
      "Find casual, athletic, and dress shoes at lower prices.",
      "Limited-time sale while eligible styles last.",
    ],
  },
  {
    id: "mac7",
    topLabel: "UP TO",
    mainValue: "60%",
    offText: "OFF",
    title: "Macy’s Voucher Code: Up to 60% Off Bedding Essentials",
    description: "Upgrade your bedroom with bedding essentials at up to 60% off.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 60% on select bedding products.",
      "Shop comforters, sheets, pillows, and more.",
      "Refresh your bedroom with quality basics for less.",
      "Available for a limited time.",
    ],
  },
  {
    id: "mac8",
    topLabel: "SAVE",
    mainValue: "$20",
    offText: "OFF",
    title: "Macy’s Coupon Code: $20 Off Orders Over $100",
    description: "Take $20 off when you spend $100 or more on eligible purchases.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get $20 off qualifying orders of $100 or more.",
      "Boost your savings on bigger purchases.",
      "Shop across participating Macy’s categories.",
      "Limited-time offer on eligible orders.",
    ],
  },
];
