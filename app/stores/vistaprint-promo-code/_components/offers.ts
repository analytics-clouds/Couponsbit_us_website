export interface Coupon {
  id: string;
  topLabel?: string;
  label?: string;
  value?: string;
  mainValue?: string;
  offText?: string;
  title: string;
  description: string;
  desc?: string;
  code?: string;
  verified?: string | boolean;
  userType?: string;
  validTill?: string;
  points?: string[];
  bullets?: string[];
}

export const VISTAPRINT_COUPONS: Coupon[] = [
  {
    id: "c1",
    topLabel: "FREE",
    mainValue: "SHIP",
    offText: "$100+",
    title: "VistaPrint Promo Code – Free Shipping on Orders Over $100",
    description: "Get free economy shipping when your eligible VistaPrint order reaches $100 or more.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Economy shipping is free on qualifying orders of $100 or more.",
      "Covers custom prints, business products, and personalized items.",
      "Cuts delivery costs on larger orders.",
      "Handy if you're ordering in bulk.",
    ],
  },
  {
    id: "c2",
    topLabel: "UP TO",
    mainValue: "40%",
    offText: "OFF",
    title: "VistaPrint Promo Code – Up to 40% Off Calendars",
    description: "Save up to 40% on selected personalized calendar designs from VistaPrint.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Offers up to 40% off eligible calendar products.",
      "Lets you build a calendar around your own photos.",
      "Personalization options work for home use or gifts.",
      "A good pick if you're making a photo calendar.",
    ],
  },
  {
    id: "c3",
    topLabel: "UP TO",
    mainValue: "15%",
    offText: "OFF",
    title: "VistaPrint Discount Code – Up to 15% Off Premium Business Cards",
    description: "Save up to 15% on selected Premium Business Cards at VistaPrint.",
    code: "SAVEVP",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Takes up to 15% off eligible Premium Business Card orders.",
      "Enter code SAVEVP at checkout to apply the discount.",
      "Useful for printing cards for networking and branding.",
      "Suits business owners and working professionals.",
    ],
  },
  {
    id: "c4",
    topLabel: "UP TO",
    mainValue: "20%",
    offText: "OFF",
    title: "VistaPrint Discount Code – Up to 20% Off Your First Order",
    description: "First-time VistaPrint customers can save up to 20% on an eligible first order.",
    code: "NEW20",
    verified: "Verified",
    userType: "New Users",
    validTill: "30 Nov 2026",
    points: [
      "Enter code NEW20 to get up to 20% off qualifying purchases.",
      "Applies when you place your first VistaPrint order.",
      "Works on custom products such as prints and business materials.",
      "Intended for new customers only.",
    ],
  },
  {
    id: "c5",
    topLabel: "SAVE",
    mainValue: "$20",
    offText: "OFF",
    title: "VistaPrint Voucher Code – $20 Off Orders of $100+",
    description: "Take $20 off qualifying VistaPrint orders that total $100 or more.",
    code: "SHOPCART",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Enter code SHOPCART to save $20 on eligible orders of $100 or more.",
      "Orders of $200 or more qualify for $50 off.",
      "Applies to personalized products at checkout.",
      "Helps lower the cost of larger orders.",
    ],
  },
  {
    id: "c6",
    topLabel: "FROM",
    mainValue: "$35.99",
    offText: "DEAL",
    title: "VistaPrint Voucher Code – Champion Powerblend Hoodie From $35.99",
    description: "Order the Champion Powerblend Unisex Hoodie from VistaPrint, with prices starting at $35.99.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Selected Champion Powerblend hoodies start at $35.99.",
      "Customization options suit personal or promotional use.",
      "Prices on available styles go up to $54.99 each.",
      "A fit for shoppers designing custom apparel.",
    ],
  },
  {
    id: "c7",
    topLabel: "FROM",
    mainValue: "$25.49",
    offText: "DEAL",
    title: "VistaPrint Coupon Code – JERZEES NuBlend Hoodie From $25.49",
    description: "Order the JERZEES NuBlend Hoodie from VistaPrint, with prices starting at $25.49.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Selected JERZEES NuBlend hoodies start at $25.49 each.",
      "Heat transfer customization is available for your design.",
      "Prices on available styles go up to $39.99.",
      "A fit for custom clothing orders.",
    ],
  },
  {
    id: "c8",
    topLabel: "FROM",
    mainValue: "$2.32",
    offText: "DEAL",
    title: "VistaPrint Coupon Code – Recycled Cotton Canvas Tote Bag From $2.32",
    description: "Order recycled cotton canvas tote bags from VistaPrint, starting at $2.32 each.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Selected tote bags range from $2.32 to $4.02 each.",
      "Can be customized for personal or business use.",
      "Made with recycled cotton canvas, a reusable carry option.",
      "A practical choice for bulk tote bag orders.",
    ],
  },
  {
    id: "c9",
    topLabel: "FROM",
    mainValue: "$0.13",
    offText: "EACH",
    title: "VistaPrint Referral Code – Custom Hang Tags From $0.13 Each",
    description: "Create custom hang tags for retail packaging at roughly $0.13 each.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "A pack of 500 custom hang tags is listed at $61.00.",
      "Adds a personalized touch to product packaging and branding.",
      "Offers custom design options for retail and business needs.",
      "Useful for businesses that need packaging supplies.",
    ],
  },
];
