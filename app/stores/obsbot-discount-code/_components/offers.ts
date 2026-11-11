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
    id: "c1",
    topLabel: "SALE",
    mainValue: "$499",
    offText: "FROM",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "OBSBOT Discount Code – OBSBOT Tail Air 4K Camera from $499",
    description: "Stream and record in sharp 4K with the OBSBOT Tail Air, starting at just $499.",
    code: "OBSBOTTAILAIR",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get the OBSBOT Tail Air 4K NDI Streaming Camera from $499.",
      "Shoot clear 4K video for live streaming and content creation.",
      "Go wireless for a cleaner, more flexible setup.",
      "A great fit for streamers, teachers, and professional video creators.",
    ],
  },
  {
    id: "c2",
    topLabel: "SALE",
    mainValue: "$199.99",
    offText: "FROM",
    valueFontClass: "text-[20px] sm:text-4xl",
    title: "OBSBOT Discount Code – Insta360 Link 2 4K Webcam from $199.99",
    description: "Upgrade your setup with the Insta360 Link 2 4K Webcam, starting at $199.99.",
    code: "OBSBOTLINK2",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Buy the Insta360 Link 2 4K Webcam from $199.99.",
      "Record sharp 4K video with smooth PTZ camera movement.",
      "Make online meetings, streams, and content look better.",
      "Great for professionals, creators, and remote workers.",
    ],
  },
  {
    id: "c3",
    topLabel: "PROMO",
    mainValue: "$129",
    offText: "FROM",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "OBSBOT Promo Code – Tiny 2 Lite 4K Webcam from $129",
    description: "Get top-notch 4K webcam quality with the OBSBOT Tiny 2 Lite for just $129.",
    code: "OBSBOTTINY2LITE",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get the OBSBOT Tiny 2 Lite 4K Webcam from $129.",
      "Capture high-quality 4K video for meetings and streaming.",
      "Enjoy a compact webcam with strong performance.",
      "Perfect for students, professionals, and content creators.",
    ],
  },
  {
    id: "c4",
    topLabel: "PROMO",
    mainValue: "$299",
    offText: "FROM",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "OBSBOT Promo Code – Tiny 2 4K AI Webcam from $299",
    description: "Shoot professional-looking videos with the OBSBOT Tiny 2 4K AI Webcam, starting at $299.",
    code: "OBSBOTTINY2",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Buy the OBSBOT Tiny 2 4K AI Webcam from $299.",
      "Get detailed 4K video with smart AI tracking.",
      "Make polished videos for work, streaming, or online classes.",
      "A great pick for creators and business professionals.",
    ],
  },
  {
    id: "c5",
    topLabel: "VOUCHER",
    mainValue: "$75.05",
    offText: "FROM",
    valueFontClass: "text-[20px] sm:text-4xl",
    title: "OBSBOT Voucher Code – Tiny SE AI Webcam from $75.05",
    description: "Get dependable AI-powered video quality with the OBSBOT Tiny SE for only $75.05.",
    code: "OBSBOTTINYSE",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get the OBSBOT Tiny SE AI Webcam from $75.05.",
      "Record clear 1080P video with smart tracking features.",
      "Make video calls, streams, and virtual meetings look better.",
      "Perfect for everyday use at home and in the office.",
    ],
  },
  {
    id: "c6",
    topLabel: "VOUCHER",
    mainValue: "$59",
    offText: "FROM",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "OBSBOT Voucher Code – VOX SE Wireless Microphone from $59",
    description: "Record clear wireless sound with the OBSBOT VOX SE Microphone, starting at $59.",
    code: "OBSBOTVOXSE",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Buy the OBSBOT VOX SE Wireless Microphone from $59.",
      "Enjoy wireless audio and more freedom while you record.",
      "Get clearer voice quality for videos and live streams.",
      "Great for creators, presenters, and remote professionals.",
    ],
  },
  {
    id: "c7",
    topLabel: "DEAL",
    mainValue: "$49",
    offText: "FROM",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "OBSBOT Offer – Tiny 2 Remote Control from $49",
    description: "Control your OBSBOT Tiny 2 camera more easily with the Smart Remote, starting at $49.",
    code: "OBSBOTREMOTE",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get the OBSBOT Tiny 2 Remote Control from $49.",
      "Control compatible camera features with ease.",
      "Make quicker adjustments while streaming or recording.",
      "A handy accessory for OBSBOT Tiny 2 owners.",
    ],
  },
];
