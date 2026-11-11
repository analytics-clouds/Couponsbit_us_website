export interface Coupon {
  id: string;
  topLabel: string;
  mainValue: string;
  offText?: string;
  valueFontClass?: string;
  title: string;
  description: string;
  code: string;
  verified: string;
  userType: string;
  validTill: string;
  points: string[];
}

export const BALLBOYZ_COUPONS: Coupon[] = [
  {
    id: "c1",
    topLabel: "SALE",
    mainValue: "$60",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "BallBoyz Discount Code – $60 Off on Full Body Acne Gameplan",
    description: "Clear up breakouts on your face and body with the BallBoyz Full Body Acne Gameplan and save $60.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save $60 on the Full Body Acne Gameplan.",
      "Comes with products for both face and body acne care.",
      "Supports a full daily skincare routine.",
      "Great for anyone who deals with frequent breakouts.",
    ],
  },
  {
    id: "c2",
    topLabel: "SALE",
    mainValue: "50%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "BallBoyz Discount Code – 50% Off on BOYZ Face Acne Gameplan",
    description: "Take on stubborn breakouts with the bestselling BOYZ Face Acne Gameplan at 50% off.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 50% on the BOYZ Face Acne Gameplan.",
      "Comes with a full facial acne care routine.",
      "Made to help your skin look clearer.",
      "Perfect for managing acne every day.",
    ],
  },
  {
    id: "c3",
    topLabel: "PROMO",
    mainValue: "40%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "BallBoyz Promo Code – Up to 40% Off During Summer Acne Sale",
    description: "Shop the BallBoyz Summer Acne Sale and save up to 40% on skincare must-haves.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 40% on select acne care products.",
      "Stock up on skincare basics for the summer.",
      "Find discounts across popular BallBoyz products.",
      "Great for keeping your skin clearer all year long.",
    ],
  },
  {
    id: "c4",
    topLabel: "PROMO",
    mainValue: "$40",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "BallBoyz Promo Code – $40 Off the Pimple Pack",
    description: "Pick up the BallBoyz Pimple Pack today and save $40 for a limited time.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get $40 off the BallBoyz Pimple Pack.",
      "Packs several products into one skincare bundle.",
      "Makes it simple to build a full acne routine.",
      "Perfect for dealing with everyday breakouts.",
    ],
  },
  {
    id: "c5",
    topLabel: "VOUCHER",
    mainValue: "$69.99",
    offText: "ONLY",
    valueFontClass: "text-[20px] sm:text-4xl",
    title: "BallBoyz Voucher Code – Face Acne Gameplan for $69.99",
    description: "Step up your skincare routine with the BallBoyz Face Acne Gameplan for only $69.99.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Buy the Face Acne Gameplan for just $69.99.",
      "Comes with products for a full facial skincare routine.",
      "Helps make your daily acne care simpler.",
      "Great for anyone who wants healthier-looking skin.",
    ],
  },
  {
    id: "c6",
    topLabel: "VOUCHER",
    mainValue: "20%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "BallBoyz Voucher Code – Extra 20% Off Build Your Own Bundle",
    description: "Put together your own skincare bundle and get an extra 20% off your order.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save an extra 20% when you build your own bundle.",
      "Mix and match your favorite BallBoyz products.",
      "Create a routine that fits your skincare needs.",
      "Ideal for shoppers who want a personalized routine.",
    ],
  },
  {
    id: "c7",
    topLabel: "COUPON",
    mainValue: "SCRUB",
    offText: "ESSENTIAL",
    valueFontClass: "text-[18px] sm:text-4xl",
    title: "BallBoyz Coupon Code – Activated Charcoal Face Scrub",
    description: "Keep your skin feeling fresh with the BallBoyz Activated Charcoal Face Scrub.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Deep cleans your skin with activated charcoal.",
      "Helps clear away dirt, oil, and everyday buildup.",
      "Easy to add to your regular skincare routine.",
      "Great for keeping your skin looking cleaner.",
    ],
  },
  {
    id: "c8",
    topLabel: "COUPON",
    mainValue: "SCRUB",
    offText: "ESSENTIAL",
    valueFontClass: "text-[18px] sm:text-4xl",
    title: "BallBoyz Coupon Code – Zit Destroyer Body Scrub",
    description: "Take on body breakouts with the BallBoyz Zit Destroyer Body Scrub.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Helps cleanse skin that is prone to body acne.",
      "Exfoliates and clears away buildup on your skin.",
      "Works well in regular body care routines.",
      "Ideal for keeping your skin feeling fresh and clean.",
    ],
  },
];
