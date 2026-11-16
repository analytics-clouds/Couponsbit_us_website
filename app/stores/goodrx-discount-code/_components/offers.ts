export interface Coupon {
  id: string;
  topLabel?: string;
  topLabell?: string;
  mainValue?: string;
  value?: string;
  offText?: string;
  title: string;
  description?: string;
  desc?: string;
  code?: string;
  verified: string;
  userType: string;
  validTill: string;
  points?: string[];
  bullets?: string[];
}

export const GOODRX_COUPONS: Coupon[] = [
  {
    id: "c1",
    topLabell: "FLAT",
    value: "20% OFF",
    title: "GoodRx Voucher Code: 20% Off Your First Chewy Pharmacy Order",
    desc: "Take 20% off your first Chewy Pharmacy purchase through GoodRx.",
    verified: "Verified",
    userType: "New Customers",
    validTill: "30 Nov 2026",
    bullets: [
      "Get 20% off your first eligible Chewy Pharmacy order.",
      "Enter the code at checkout to claim your discount.",
      "Valid on qualifying first-time purchases.",
      "Limited-time promotion on eligible pharmacy products."
    ]
  },
  {
    id: "c2",
    topLabell: "FREE",
    value: "60 DAYS",
    title: "GoodRx Voucher Code: 60 Free Days of Gold Membership",
    desc: "Try GoodRx Gold free for 60 days on an eligible monthly plan.",
    verified: "Verified",
    userType: "New Members",
    validTill: "30 Nov 2026",
    bullets: [
      "Enjoy 60 free days of an individual GoodRx Gold monthly membership.",
      "Valid on monthly plans only.",
      "Unlock member-only prescription savings during your trial.",
      "Open to eligible new members."
    ]
  },
  {
    id: "c3",
    topLabell: "FLAT",
    value: "4% OFF",
    title: "GoodRx Referral Code: 4% Off Storewide",
    desc: "Save on eligible GoodRx purchases with a storewide discount.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Take 4% off eligible storewide purchases.",
      "Enter the code at checkout.",
      "Applies to qualifying orders only.",
      "Available for a limited time."
    ]
  },
  {
    id: "c4",
    topLabell: "FLAT",
    value: "$50 OFF",
    title: "GoodRx Referral Code: $50 Off Apoquel",
    desc: "Save big on eligible Apoquel purchases through GoodRx.",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    bullets: [
      "Get $50 off eligible Apoquel purchases.",
      "Use the code to claim your discount.",
      "Valid on qualifying orders only.",
      "Offered for a limited time."
    ]
  },
  {
    id: "grx1",
    topLabel: "FROM",
    mainValue: "$39/MO",
    offText: "",
    title: "GoodRx Discount Code – Online Weight Loss Care | $39/Month",
    description: "Access online weight loss care and support for eligible patients in the USA",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get help with GLP-1 prescription treatment through online care",
      "Membership starts at $39 per month",
      "Explore convenient virtual care and potential access to lower-cost brand-name GLP-1 medications",
    ],
  },
  {
    id: "grx2",
    topLabel: "FREE",
    mainValue: "250+ RX",
    offText: "",
    title: "GoodRx Companion – 250+ Free Medications | From $14.99/Month",
    description: "Join GoodRx Companion and get access to 250+ medications for $0",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Unlock additional savings on prescriptions and eligible healthcare services",
      "Get discounts on dental, vision, laboratory, imaging and online care services",
      "Membership starts from $14.99 per month with a free trial option",
    ],
  },
  {
    id: "grx3",
    topLabel: "LOW AS",
    mainValue: "$149",
    offText: "",
    title: "GoodRx – Foundayo GLP-1 Medication | As Low As $149",
    description: "Save on eligible Foundayo GLP-1 medication with prices starting as low as $149",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Explore potential prescription savings through GoodRx in the USA",
      "Compare medication pricing and find lower-cost options where available",
      "Prescription requirements and eligibility may apply",
    ],
  },
  {
    id: "grx4",
    topLabel: "LOW AS",
    mainValue: "$299",
    offText: "",
    title: "GoodRx – Zepbound KwikPen | As Low As $299",
    description: "Get potential savings on eligible Zepbound KwikPen prescriptions from as low as $299",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Compare available prescription prices through GoodRx",
      "Explore savings options for eligible patients across the USA",
      "Prescription and eligibility requirements may apply",
    ],
  },
  {
    id: "grx5",
    topLabel: "LOW AS",
    mainValue: "$149",
    offText: "",
    title: "GoodRx – Wegovy | As Low As $149",
    description: "Save on eligible Wegovy products with prices starting as low as $149",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Explore available prescription savings through GoodRx in the USA",
      "Compare prices across participating pharmacies to find potential savings",
      "Prescription requirements and eligibility restrictions may apply",
    ],
  },
  {
    id: "grx6",
    topLabel: "FREE",
    mainValue: "$19 CARE",
    offText: "",
    title: "GoodRx Companion – Free Medications & $19 Online Care",
    description: "Get access to 250+ medications for free through GoodRx Companion",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Find hundreds of additional medications priced under $10",
      "Access $19 online care visits 7 days a week",
      "Receive discounts on eligible dental, vision, lab and imaging services",
    ],
  },
];
