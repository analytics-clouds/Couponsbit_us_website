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
  valueFontClass?: string;
}

export const OBSBOT_COUPONS: Coupon[] = [
  {
    id: "obsbot1",
    topLabel: "FROM",
    mainValue: "$499",
    offText: "DEAL",
    title: "OBSBOT Promo Code – Tail Air 4K Camera From $499",
    description: "Get the OBSBOT Tail Air 4K Camera for streaming and recording, starting at $499.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "The OBSBOT Tail Air 4K Camera starts at $499.",
      "Records and streams video in 4K.",
      "Gives creators a lower starting price on streaming equipment.",
      "Final price depends on the bundle you choose.",
    ],
  },
  {
    id: "obsbot2",
    topLabel: "FROM",
    mainValue: "$199.99",
    offText: "DEAL",
    title: "OBSBOT Promo Code – Insta360 Link 2 4K Webcam From $199.99",
    description: "Get the Insta360 Link 2 4K Webcam starting at $199.99.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "The Insta360 Link 2 4K Webcam starts at $199.99.",
      "Works for streaming and video calls.",
      "This is an Insta360 product, not an OBSBOT one.",
      "A fit for people who want to improve their video quality.",
    ],
  },
  {
    id: "obsbot3",
    topLabel: "FROM",
    mainValue: "$129",
    offText: "DEAL",
    title: "OBSBOT Discount Code – Tiny 2 Lite 4K Webcam From $129",
    description: "Get the OBSBOT Tiny 2 Lite 4K Webcam starting at $129.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "The Tiny 2 Lite 4K Webcam starts at $129.",
      "Records and streams in 4K.",
      "Offers a lower-priced option for video recording.",
      "A fit for streamers and remote workers.",
    ],
  },
  {
    id: "obsbot4",
    topLabel: "FROM",
    mainValue: "$299",
    offText: "DEAL",
    title: "OBSBOT Discount Code – Tiny 2 4K AI Webcam From $299",
    description: "Get the OBSBOT Tiny 2 4K AI Webcam starting at $299.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "The Tiny 2 4K AI Webcam starts at $299.",
      "Includes AI-based camera features.",
      "Records and streams in 4K.",
      "A fit for content creators and remote professionals.",
    ],
  },
  {
    id: "obsbot5",
    topLabel: "FROM",
    mainValue: "$75.05",
    offText: "DEAL",
    title: "OBSBOT Voucher Code – Tiny SE AI Webcam From $75.05",
    description: "Get the OBSBOT Tiny SE AI Webcam starting at $75.05.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "The Tiny SE AI Webcam starts at $75.05.",
      "Includes AI webcam features at a lower price.",
      "An entry-level option in the OBSBOT lineup.",
      "A fit for people on a budget.",
    ],
  },
  {
    id: "obsbot6",
    topLabel: "FROM",
    mainValue: "$59",
    offText: "DEAL",
    title: "OBSBOT Voucher Code – VOX SE Wireless Microphone From $59",
    description: "Get the OBSBOT VOX SE Wireless Microphone starting at $59.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "The VOX SE Wireless Microphone starts at $59.",
      "Records audio without a cable.",
      "Works for recordings and streams.",
      "A fit for creators who want better audio.",
    ],
  },
  {
    id: "obsbot7",
    topLabel: "FROM",
    mainValue: "$49",
    offText: "DEAL",
    title: "OBSBOT Deals – Tiny 2 Remote Control From $49",
    description: "Get the OBSBOT Tiny 2 Smart Remote starting at $49.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "The Tiny 2 Remote Control starts at $49.",
      "Lets you control camera functions from a distance.",
      "An accessory for OBSBOT Tiny 2 owners.",
      "Check that it works with your camera model.",
    ],
  },
  {
    id: "obsbot8",
    topLabel: "FREE",
    mainValue: "SHIP",
    offText: "DEAL",
    title: "OBSBOT Offers – Free Shipping on Orders",
    description: "Get free standard shipping on most eligible OBSBOT orders.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Free standard shipping applies to most eligible orders.",
      "The shipping discount is applied automatically at checkout.",
      "Helps lower the total cost of your order.",
      "Some items or regions may be excluded, so check the shipping terms.",
    ],
  },
];
