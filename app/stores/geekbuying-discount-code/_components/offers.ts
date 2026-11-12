export interface Coupon {
  id: string;
  topLabel: string;
  mainValue: string;
  offText: string;
  valueFontClass?: string;
  title: string;
  description: string;
  code: string;
  verified: string;
  userType: string;
  validTill: string;
  points: string[];
}

export const GEEKBUYING_COUPONS: Coupon[] = [
  {
    id: "gb1",
    topLabel: "SAVE",
    mainValue: "56%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Geekbuying Discount Code – 56% Off on Refurbished DJI Mic Mini",
    description: "Get the Refurbished DJI Mic Mini Wireless Microphone for only $79.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 56% and pay just $79 instead of $179.99.",
      "Enjoy clear wireless audio for videos and streaming.",
      "Small and easy to take anywhere.",
      "Great for creators, vloggers, and podcasters.",
    ],
  },
  {
    id: "gb2",
    topLabel: "SAVE",
    mainValue: "53%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Geekbuying Discount Code – 53% Off on DJI Mic Mini Transmitter",
    description: "Upgrade your recording setup with the DJI Mic Mini Transmitter.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 53% and get it for only $26.",
      "Perfect as a spare or replacement transmitter.",
      "Gives you dependable wireless audio.",
      "Ideal for content creators and filmmakers.",
    ],
  },
  {
    id: "gb3",
    topLabel: "Only",
    mainValue: "$592.27",
    offText: "",
    title: "Geekbuying Promo Code – Joyor S5-Z Electric Scooter for $592.27",
    description: "Ride farther for less with the Joyor S5-Z Electric Scooter.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get the Joyor S5-Z for only $592.27.",
      "Ships from US stock for faster delivery.",
      "Made for comfortable daily commuting.",
      "Great for city travel and weekend rides.",
    ],
  },
  {
    id: "gb4",
    topLabel: "SAVE",
    mainValue: "40%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Geekbuying Promo Code – 40% Off on ZIKE 100W Charging Station",
    description: "Charge several devices at once with the ZIKE 100W GaN Charging Station.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 40% and pay only $59.99 instead of $99.99.",
      "Has four charging ports for extra convenience.",
      "Fast GaN charging for compatible devices.",
      "Perfect for home and office setups.",
    ],
  },
  {
    id: "gb5",
    topLabel: "Only",
    mainValue: "$885.61",
    offText: "",
    title: "Geekbuying Voucher Code – Joyor S10-S-Z Electric Scooter for $885.61",
    description: "Get the powerful Joyor S10-S-Z Electric Scooter at a lower price.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Buy the Joyor S10-S-Z for only $885.61.",
      "Ships from US stock for quick delivery.",
      "Built for smooth, dependable performance.",
      "Ideal for longer daily commutes.",
    ],
  },
  {
    id: "gb6",
    topLabel: "SAVE",
    mainValue: "40%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Geekbuying Voucher Code – 40% Off on Deal of the Day",
    description: "Shop today's featured Geekbuying deal and save more.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 40% on today's Deal of the Day.",
      "Featured products start at just $59.99.",
      "Limited-time offers on popular tech products.",
      "Great for finding daily tech bargains.",
    ],
  },
  {
    id: "gb7",
    topLabel: "SAVE",
    mainValue: "46%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Geekbuying Coupon Code – 46% Off on LONGER Laser Engraver",
    description: "Upgrade your workshop with the LONGER Laser B1 30W Laser Engraver.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 46% and pay only $749 instead of $1,399.99.",
      "Has a powerful 30W laser for precise engraving.",
      "Works for many DIY and business projects.",
      "Great for makers, hobbyists, and small businesses.",
    ],
  },
  {
    id: "gb8",
    topLabel: "SAVE",
    mainValue: "18%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Geekbuying Coupon Code – 18% Off on MESWAO B1 Tablet",
    description: "Get the MESWAO B1 Android Tablet for less.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 18% and pay only $229 instead of $279.99.",
      "Has a large 14.1-inch Android display.",
      "Great for streaming, browsing, and productivity.",
      "Perfect for work, school, and entertainment.",
    ],
  },
];
