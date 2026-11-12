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

const STORE_URL = "https://performance.gotrackier.com/click?campaign_id=4801&pub_id=1015";

export const MCAFEE_COUPONS: Coupon[] = [
  {
    id: "c1",
    topLabel: "UP TO",
    mainValue: "75%",
    offText: "OFF",
    title: "McAfee Discount Code – Up to 75% Off on Total Protection",
    description: "Protect up to 5 devices with McAfee Total Protection starting at just $24.99.",
    affiliateUrl: STORE_URL,
    points: [
      "Save up to 75% and get Total Protection from only $24.99.",
      "Protect up to five compatible devices with one subscription.",
      "Get antivirus, identity, and privacy protection.",
      "Great for individuals and families who want complete security.",
    ],
  },
  {
    id: "c2",
    topLabel: "FLAT",
    mainValue: "66%",
    offText: "OFF",
    title: "McAfee Discount Code – 66% Off on Total Protection Plan",
    description: "Save 66% on the McAfee Total Protection Plan for a limited time.",
    affiliateUrl: STORE_URL,
    points: [
      "Get a flat 66% discount on eligible Total Protection plans.",
      "Plans start at just $49.99.",
      "Get trusted antivirus and online privacy features.",
      "Perfect for everyday device protection.",
    ],
  },
  {
    id: "c3",
    topLabel: "SAVE",
    mainValue: "$110",
    offText: "OFF",
    title: "McAfee Promo Code – $110 Off on Advanced Plan",
    description: "Move up to the McAfee Advanced Plan and save $110.",
    affiliateUrl: STORE_URL,
    points: [
      "Save $110 on the Advanced Plan, starting at $89.99 a year.",
      "Get top-notch security and identity protection.",
      "Comes with advanced online privacy features.",
      "A smart pick for users who need extra protection.",
    ],
  },
  {
    id: "c4",
    topLabel: "SAVE",
    mainValue: "$80",
    offText: "OFF",
    title: "McAfee Promo Code – $80 Off on Individual Ultimate Plan",
    description: "Get McAfee's top personal security plan for less.",
    affiliateUrl: STORE_URL,
    points: [
      "Save $80 on the Individual Ultimate Plan.",
      "Plans start at only $79.99 a year.",
      "Get McAfee's most complete personal protection.",
      "Great for users who want advanced online security.",
    ],
  },
  {
    id: "c5",
    topLabel: "UP TO",
    mainValue: "$225",
    offText: "OFF",
    title: "McAfee Voucher Code – Up to $225 Off on Family Plans",
    description: "Protect your whole family and save up to $225.",
    affiliateUrl: STORE_URL,
    points: [
      "Save up to $225 on eligible McAfee Family Plans.",
      "Family plans start at just $69.99 a year.",
      "Protect several family members and devices.",
      "Ideal for households that need complete digital security.",
    ],
  },
  {
    id: "c6",
    topLabel: "EXTRA",
    mainValue: "10%",
    offText: "OFF",
    title: "McAfee Voucher Code – Extra 10% Off During Back-to-School Sale",
    description: "Save even more during McAfee's Back-to-School promotion.",
    affiliateUrl: STORE_URL,
    points: [
      "Get an extra 10% off eligible McAfee subscriptions.",
      "Available on select plans for students and families.",
      "Get trusted antivirus and privacy protection.",
      "Perfect for school, college, and home use.",
    ],
  },
  {
    id: "c7",
    topLabel: "Starting At",
    mainValue: "$24.99",
    offText: "",
    title: "McAfee Coupon Code – Premium Antivirus from $24.99",
    description: "Get dependable antivirus protection starting at only $24.99.",
    affiliateUrl: STORE_URL,
    points: [
      "Premium Antivirus plans start at just $24.99.",
      "Protect your PC, Mac, or mobile devices.",
      "Block viruses, malware, and online threats.",
      "Great for everyday digital security.",
    ],
  },
  {
    id: "c8",
    topLabel: "Starting From",
    mainValue: "$69.99",
    offText: "/yr",
    title: "McAfee Coupon Code – Multi-Device Security from $69.99/Year",
    description: "Secure all your compatible devices with one subscription.",
    affiliateUrl: STORE_URL,
    points: [
      "Plans start at only $69.99 a year.",
      "Protect unlimited compatible devices with eligible plans.",
      "Get antivirus, privacy, and identity protection.",
      "Perfect for families and people with many devices.",
    ],
  },
];

