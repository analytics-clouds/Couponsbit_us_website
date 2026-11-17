export interface Coupon {
  id: string;
  topLabel?: string;
  mainValue?: string;
  offText?: string;
  title: string;
  description: string;
  code?: string;
  points: string[];
  affiliateUrl?: string;
  verified?: boolean | string;
  userType?: string;
  validTill?: string;
  discount?: string;
  expiry?: string;
  type?: "code" | "deal";
  isVerified?: boolean;
  terms?: string[];
  label?: string;
}

const AFFILIATE_URL =
  "http://affiliate.jetpacglobal.com/c/4303217/1833340/21879?subId1=1015";

export const JETPAC_COUPONS: Coupon[] = [
  {
    id: "c1",
    topLabel: "UP TO",
    mainValue: "70%",
    offText: "OFF",
    title: "Jetpac Promo Code: Save Up to 70% on International eSIMs",
    description: "Save up to 70% on international eSIM plans with Jetpac.",
    code: "ANC10",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Enter code ANC10 at checkout for an extra 10% off eligible purchases.",
      "Pay up to 70% less than typical roaming rates.",
      "Shop affordable eSIM plans for international trips.",
      "Available for a limited time.",
    ],
    affiliateUrl: AFFILIATE_URL,
  },
  {
    id: "c2",
    topLabel: "UP TO",
    mainValue: "53%",
    offText: "OFF",
    title: "Jetpac Promo Code: Up to 53% Off Airport Lounge Access",
    description: "Relax before your flight with discounted airport lounge access through Jetpac.",
    code: "ANC10",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Use code ANC10 to take an extra 10% off eligible offers.",
      "Get up to 53% off select airport lounge access.",
      "Unwind before takeoff with budget-friendly lounge options.",
      "Limited-time travel offer.",
    ],
    affiliateUrl: AFFILIATE_URL,
  },
  {
    id: "c3",
    topLabel: "GET",
    mainValue: "$10",
    offText: "REWARD",
    title: "Jetpac Discount Code: $10 Refer a Friend Reward",
    description: "Earn rewards when you invite friends to Jetpac.",
    code: "ANC10",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Use code ANC10 for an extra 10% off eligible purchases.",
      "Refer a friend and they get $5 off their first eSIM purchase.",
      "Collect rewards through the Jetpac referral program.",
      "Available for a limited time.",
    ],
    affiliateUrl: AFFILIATE_URL,
  },
  {
    id: "c4",
    topLabel: "UP TO",
    mainValue: "15%",
    offText: "EARN",
    title: "Jetpac Discount Code: Earn Up to 15% Affiliate Commission",
    description: "Join the Jetpac affiliate program and start earning.",
    code: "ANC10",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Use code ANC10 for an extra 10% off eligible purchases.",
      "Earn up to 15% commission on qualifying Jetpac sales.",
      "Open to affiliate partners who promote Jetpac services.",
      "A limited-time opportunity for eligible users.",
    ],
    affiliateUrl: AFFILIATE_URL,
  },
  {
    id: "c5",
    topLabel: "ONLY",
    mainValue: "$9.99",
    offText: "",
    title: "Jetpac Coupon Code: Worldwide Voice Calls, 30 Minutes for $9.99",
    description: "Stay in touch around the globe with affordable calling plans.",
    code: "ANC10",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Enter code ANC10 for an extra 10% off eligible purchases.",
      "Get 30 minutes of worldwide voice calls for $9.99.",
      "Make calls easily while you travel.",
      "Available for a limited time.",
    ],
    affiliateUrl: AFFILIATE_URL,
  },
  {
    id: "c6",
    topLabel: "ONLY",
    mainValue: "$4.99",
    offText: "",
    title: "Jetpac Coupon Code: Worldwide Voice Calls, 15 Minutes for $4.99",
    description: "Make affordable international calls with Jetpac.",
    code: "ANC10",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Use code ANC10 to save an extra 10% on eligible purchases.",
      "Get 15 minutes of worldwide voice calls for $4.99.",
      "Stay connected on international trips.",
      "Limited-time calling offer.",
    ],
    affiliateUrl: AFFILIATE_URL,
  },
  {
    id: "c7",
    topLabel: "ONLY",
    mainValue: "$35",
    offText: "",
    title: "Jetpac Voucher Code: Madrid Airport Lounge Access for $35",
    description: "Save on a premium lounge experience in Madrid.",
    code: "ANC10",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Apply code ANC10 for an extra 10% off eligible purchases.",
      "Get lounge access at Adolfo Suárez Madrid-Barajas Airport for $35.",
      "Enjoy a comfortable break before your flight.",
      "Applies to select lounge services.",
    ],
    affiliateUrl: AFFILIATE_URL,
  },
  {
    id: "c8",
    topLabel: "ONLY",
    mainValue: "$14",
    offText: "",
    title: "Jetpac Voucher Code: Beijing Airport Fast Track for $14",
    description: "Speed through the airport with Jetpac Fast Track.",
    code: "ANC10",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Use code ANC10 to get an extra 10% off eligible purchases.",
      "Get Beijing Capital International Airport Fast Track for $14.",
      "Spend less time waiting with convenient airport services.",
      "Limited-time travel deal.",
    ],
    affiliateUrl: AFFILIATE_URL,
  },
  {
    id: "c9",
    topLabel: "FLAT",
    mainValue: "30%",
    offText: "OFF",
    title: "Jetpac Deals: 30% Off Storewide",
    description: "Save on Jetpac products and services with this storewide offer.",
    code: "ANC10",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Enter code ANC10 for an additional 10% off eligible purchases.",
      "Apply the code at checkout.",
      "Enjoy storewide savings on select Jetpac services.",
      "Availability may vary.",
    ],
    affiliateUrl: AFFILIATE_URL,
  },
  {
    id: "c10",
    topLabel: "UP TO",
    mainValue: "42%",
    offText: "OFF",
    title: "Jetpac Deals: Up to 42% Off Clearance Items",
    description: "Pick up extra savings on select Jetpac clearance offers.",
    code: "ANC10",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Use code ANC10 for an extra 10% off eligible purchases.",
      "Save up to 42% on marked-down clearance items.",
      "Browse select products at reduced prices.",
      "Limited-time clearance promotion.",
    ],
    affiliateUrl: AFFILIATE_URL,
  },
  {
    id: "c11",
    topLabel: "FLAT",
    mainValue: "18%",
    offText: "OFF",
    title: "Jetpac Offers: 18% Off Storewide",
    description: "Enjoy extra savings across eligible Jetpac services.",
    code: "ANC10",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Enter code ANC10 to get an extra 10% off eligible purchases.",
      "Take 18% off storewide.",
      "Valid on qualifying Jetpac products and services.",
      "Check the offer terms before checkout.",
    ],
    affiliateUrl: AFFILIATE_URL,
  },
];

