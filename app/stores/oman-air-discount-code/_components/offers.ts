export interface Coupon {
  id: string;
  topLabel: string;
  mainValue: string;
  offText?: string;
  title: string;
  description: string;
  code?: string;
  points: string[];
  affiliateUrl: string;
  verified?: boolean;
  userType?: string;
  validTill?: string;
}

export const OMAN_AIR_COUPONS: Coupon[] = [
  {
    id: "c1",
    topLabel: "UP TO",
    mainValue: "50%",
    offText: "OFF",
    title: "Oman Air Discount Code – Up to 50% Off with Oman Air Pass",
    description: "Save up to 50% on select flights when you buy the Oman Air Pass.",
    affiliateUrl: "https://tracking.syndicmarketing.com/c?o=21657167&m=23654&a=636605&aff_click_id=1015&sub_aff_id=1015",
    points: [
      "Save up to 50% on eligible flight bookings with the Oman Air Pass.",
      "Enjoy lower fares on select routes.",
      "Book your flights with extra flexibility.",
      "Great for frequent travelers and vacation planning.",
    ],
  },
  {
    id: "c2",
    topLabel: "From",
    mainValue: "$328",
    offText: "",
    title: "Oman Air Discount Code – Dhaka to Muscat from $328",
    description: "Book one-way Economy flights from Dhaka to Muscat starting at just $328.",
    affiliateUrl: "https://tracking.syndicmarketing.com/c?o=21657167&m=23654&a=636605&aff_click_id=1015&sub_aff_id=1015",
    points: [
      "One-way Economy fares start at $328.",
      "Fly from Dhaka (DAC) to Muscat (MCT).",
      "Enjoy a comfortable trip with Oman Air.",
      "Perfect for business and leisure travelers.",
    ],
  },
  {
    id: "c3",
    topLabel: "From",
    mainValue: "$165",
    offText: "",
    title: "Oman Air Promo Code – Chennai to Muscat from $165",
    description: "Fly from Chennai to Muscat with one-way fares starting at only $165.",
    affiliateUrl: "https://tracking.syndicmarketing.com/c?o=21657167&m=23654&a=636605&aff_click_id=1015&sub_aff_id=1015",
    points: [
      "One-way Economy fares start at just $165.",
      "Travel from Chennai (MAA) to Muscat (MCT).",
      "Enjoy dependable service and comfort on board.",
      "Great for low-cost international travel.",
    ],
  },
  {
    id: "c4",
    topLabel: "From",
    mainValue: "$705",
    offText: "",
    title: "Oman Air Promo Code – Muscat to Jakarta from $705",
    description: "Fly from Muscat to Jakarta with fares starting at $705.",
    affiliateUrl: "https://tracking.syndicmarketing.com/c?o=21657167&m=23654&a=636605&aff_click_id=1015&sub_aff_id=1015",
    points: [
      "One-way Economy fares start at $705.",
      "Fly from Muscat (MCT) to Jakarta (CGK).",
      "Enjoy a comfortable international trip.",
      "Ideal for business trips and vacations.",
    ],
  },
  {
    id: "c5",
    topLabel: "FLAT",
    mainValue: "25%",
    offText: "OFF",
    title: "Oman Air Voucher Code – Flat 25% Off on Flights",
    description: "Save 25% on select Economy and Business Class flights.",
    affiliateUrl: "https://tracking.syndicmarketing.com/c?o=21657167&m=23654&a=636605&aff_click_id=1015&sub_aff_id=1015",
    points: [
      "Get a flat 25% discount on eligible flight bookings.",
      "Available on select Economy and Business Class fares.",
      "Book your trip for less with this limited-time offer.",
      "Perfect for domestic and international travelers.",
    ],
  },
];

