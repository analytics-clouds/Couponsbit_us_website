export interface Coupon {
  id: string;
  topLabel: string;
  mainValue: string;
  offText: string;
  title: string;
  description: string;
  code: string;
  points: string[];
}

export const YOUFIBRE_COUPONS: Coupon[] = [
  {
    id: "youfibre1",
    topLabel: "ONLY",
    mainValue: "£25",
    offText: "/MO",
    title: "YouFibre Promo Code: Get Full Fibre 1000 for £25/Month",
    description: "Get YouFibre Full Fibre 1000 broadband for £25 per month.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Price: £25 per month at a fixed monthly price.",
      "Speed: Up to 1000 Mbps, as listed for this plan.",
      "Best for: Households that stream, work from home, or use several devices at once.",
      "Before you order: Check the contract length, any setup fees, and whether YouFibre is available at your address.",
    ],
  },
  {
    id: "youfibre2",
    topLabel: "ONLY",
    mainValue: "£50",
    offText: "/MO",
    title: "YouFibre Promo Code: Get YOU 8000 for £50/Month",
    description: "Upgrade to the YouFibre YOU 8000 plan, with speeds up to 7000 Mbps, for £50 per month.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Price: £50 per month.",
      "Speed: Up to 7000 Mbps.",
      "Contract: A 24-month fixed-price agreement for predictable payments.",
      "Before you order: Check that your home and devices can make use of these speeds.",
    ],
  },
  {
    id: "youfibre3",
    topLabel: "FROM",
    mainValue: "£30",
    offText: "/MO",
    title: "YouFibre Discount Code: Get YOU 2000 for £30/Month",
    description: "Get YouFibre YOU 2000 full fiber broadband, with speeds up to 1800 Mbps, starting from £30 per month.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Price: Starting from £30 per month.",
      "Speed: Up to 1800 Mbps.",
      "Contract: A 24-month fixed-price broadband agreement.",
      "Before you order: \"Starting from\" means the price can vary, so confirm your final monthly cost.",
    ],
  },
  {
    id: "youfibre4",
    topLabel: "ONLY",
    mainValue: "£25",
    offText: "/MO",
    title: "YouFibre Discount Code: Get YOU 1000 for £25/Month",
    description: "Choose YouFibre YOU 1000 full fiber broadband for £25 per month.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Price: £25 per month.",
      "Speed: Up to 900 Mbps.",
      "Contract: A 24-month fixed-price deal that locks in your price.",
      "Before you order: Check the early exit terms before you commit to 24 months.",
    ],
  },
  {
    id: "youfibre5",
    topLabel: "ONLY",
    mainValue: "£129.99",
    offText: "/MO",
    title: "YouFibre Voucher Code: Get YOU 8000 Rolling Plan",
    description: "Get YouFibre YOU 8000 Rolling Monthly broadband for £129.99 per month.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Price: £129.99 per month.",
      "Speed: Up to 7000 Mbps.",
      "Flexibility: A rolling monthly plan with no fixed contract period.",
      "Before you order: The rolling plan costs more per month than the 24-month plan, so compare both.",
    ],
  },
  {
    id: "youfibre6",
    topLabel: "ONLY",
    mainValue: "£44.99",
    offText: "/MO",
    title: "YouFibre Voucher Code: Get YOU 2000 Rolling Plan",
    description: "Choose YouFibre YOU 2000 Rolling Monthly broadband for £44.99 per month.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Price: £44.99 per month.",
      "Speed: Up to 1800 Mbps on full fiber.",
      "Flexibility: A rolling monthly option with no long-term commitment.",
      "Before you order: Compare it with the 24-month YOU 2000 plan to see what flexibility costs you.",
    ],
  },
  {
    id: "youfibre7",
    topLabel: "ONLY",
    mainValue: "£39.99",
    offText: "/MO",
    title: "YouFibre Coupon Code: Get YOU 1000 Rolling Plan",
    description: "Get YouFibre YOU 1000 Rolling Monthly broadband for £39.99 per month.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Price: £39.99 per month.",
      "Speed: Up to 900 Mbps.",
      "Flexibility: Monthly rolling service without a long-term commitment.",
      "Before you order: Compare it with the 24-month YOU 1000 plan, which is cheaper per month.",
    ],
  },
];
