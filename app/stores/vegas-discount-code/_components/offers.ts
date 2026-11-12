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

export const VEGAS_COUPONS: Coupon[] = [
  {
    id: "vg1",
    topLabel: "UP TO",
    mainValue: "35%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Vegas.com Discount Code – Up to 35% Off at Flamingo Las Vegas",
    description: "Stay at Flamingo Las Vegas from just $49 a night for a limited time.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 35% on Flamingo Las Vegas hotel stays.",
      "Rates start at just $49 a night.",
      "Stay right on the famous Las Vegas Strip.",
      "Perfect for vacations, couples, and weekend getaways.",
    ],
  },
  {
    id: "vg2",
    topLabel: "UP TO",
    mainValue: "30%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Vegas.com Discount Code – Up to 30% Off on Cirque du Soleil Tickets",
    description: "See world-famous Cirque du Soleil shows for less.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 30% on Cirque du Soleil tickets.",
      "Tickets start at just $162.",
      "Pick from popular Las Vegas shows.",
      "Great for families, couples, and entertainment fans.",
    ],
  },
  {
    id: "vg3",
    topLabel: "SAVE",
    mainValue: "9%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Vegas.com Promo Code – 9% Off on Grand Canyon Bus Tour",
    description: "Explore the Grand Canyon and Hoover Dam with lower-priced tour tickets.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 9% on the West Rim & Hoover Dam Bus Tour.",
      "Tours start at just $146.",
      "Includes stops at two famous attractions.",
      "Perfect for sightseeing and day trips.",
    ],
  },
  {
    id: "vg4",
    topLabel: "UP TO",
    mainValue: "19%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Vegas.com Promo Code – Up to 19% Off on Michael Jackson ONE",
    description: "Catch the hit Michael Jackson ONE show for less.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 19% on Michael Jackson ONE tickets.",
      "Tickets start at only $126.",
      "Enjoy the spectacular Cirque du Soleil production.",
      "Great for music fans and Las Vegas visitors.",
    ],
  },
  {
    id: "vg5",
    topLabel: "SAVE",
    mainValue: "17%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Vegas.com Voucher Code – 17% Off at Paris Las Vegas",
    description: "Book your stay at Paris Las Vegas and get special savings.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 17% on Paris Las Vegas hotel stays.",
      "Rates start at just $40 a night.",
      "Stay in the heart of the Las Vegas Strip.",
      "Ideal for vacations and romantic getaways.",
    ],
  },
  {
    id: "vg6",
    topLabel: "SAVE",
    mainValue: "18%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "Vegas.com Voucher Code – 18% Off on Titanic Exhibition Tickets",
    description: "Visit the Titanic: The Artifact Exhibition for less.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 18% on Titanic exhibition tickets.",
      "Tickets start at just $36.",
      "Check out real artifacts and interactive exhibits.",
      "Perfect for history fans and family outings.",
    ],
  },
];
