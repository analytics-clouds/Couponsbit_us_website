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

export const OPENART_COUPONS: Coupon[] = [
  {
    id: "c1",
    topLabel: "SALE",
    mainValue: "27%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "OpenArt Discount Code – Up to 27% Off on the Wonder Annual Plan",
    description: "Unlock premium AI creativity with the Wonder Annual Plan and save up to 27%.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save up to 27% on the Wonder Annual Plan.",
      "Get 106,000 credits every month.",
      "Use 100+ AI image, video, and audio models.",
      "A great fit for creators and professionals.",
    ],
  },
  {
    id: "c2",
    topLabel: "SALE",
    mainValue: "22%",
    offText: "OFF",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "OpenArt Discount Code – 22% Off on the Infinite Annual Plan",
    description: "Move up to the Infinite Annual Plan and get premium AI tools for less.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Save 22% on the Infinite Annual Plan.",
      "Get 24,000 credits each month.",
      "Commercial usage rights are included.",
      "Great for business and creative projects.",
    ],
  },
  {
    id: "c3",
    topLabel: "PROMO",
    mainValue: "$14",
    offText: "FROM",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "OpenArt Promo Code – Essential Plan from $14/Month",
    description: "Start making AI-generated content with the Essential Plan for just $14 a month.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Plans start at $14 a month.",
      "Create AI images, videos, and audio.",
      "Get strong creative tools.",
      "Perfect for beginners and hobbyists.",
    ],
  },
  {
    id: "c4",
    topLabel: "PROMO",
    mainValue: "$29",
    offText: "/MO",
    valueFontClass: "text-[24px] sm:text-5xl",
    title: "OpenArt Promo Code – Advanced Plan for $29/Month",
    description: "Build custom AI models and premium content with the Advanced Plan.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Subscribe for $29 a month.",
      "Train your own AI models and characters.",
      "Create high-quality visual content.",
      "Great for experienced creators.",
    ],
  },
  {
    id: "c5",
    topLabel: "VOUCHER",
    mainValue: "24,000",
    offText: "CREDITS",
    valueFontClass: "text-[20px] sm:text-4xl",
    title: "OpenArt Voucher Code – Infinite Monthly Plan with 24,000 Credits",
    description: "Fuel your creative projects with one of OpenArt's most popular monthly plans.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get 24,000 credits every month.",
      "Use premium AI generation tools.",
      "Create images, videos, and more.",
      "Perfect for people who create with AI often.",
    ],
  },
  {
    id: "c6",
    topLabel: "VOUCHER",
    mainValue: "106,000",
    offText: "CREDITS",
    valueFontClass: "text-[18px] sm:text-4xl",
    title: "OpenArt Voucher Code – Wonder Monthly Plan with 106,000 Credits",
    description: "Get the most creative freedom with OpenArt's best-value monthly plan.",
    code: "",
    verified: "Verified",
    userType: "All Users",
    validTill: "30 Nov 2026",
    points: [
      "Get 106,000 credits every month.",
      "Use advanced storytelling features.",
      "Generate plenty of creative content.",
      "Best for professional creators.",
    ],
  },
];
