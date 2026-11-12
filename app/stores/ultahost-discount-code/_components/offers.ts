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

export const ULTAHOST_COUPONS: Coupon[] = [
  {
    id: "c1",
    topLabel: "UP TO",
    mainValue: "62%",
    offText: "OFF",
    title: "Game Hosting – SAVE UP TO 62%",
    description: "Host your favorite games from only $2.00/month (Regular Price $5.30/month).",
    affiliateUrl: "https://ultahost.sjv.io/c/4303217/1888268/22575?subId1=subid&subId2=1015",
    points: [
      "Lag-free gaming with high-performance dedicated servers",
      "Fast deployment with premium hardware and global connectivity",
      "Perfect for Minecraft, Rust, CS2, Valheim and more",
    ],
  },
  {
    id: "c2",
    topLabel: "SAVE",
    mainValue: "45%",
    offText: "OFF",
    title: "Windows Hosting – SAVE 45%",
    description: "Get Windows Hosting from just $13.99/month (Regular Price $25.50/month).",
    affiliateUrl: "https://ultahost.sjv.io/c/4303217/1888268/22575?subId1=subid&subId2=1015",
    points: [
      "Includes full Remote Desktop (RDP) access and secure performance",
      "Optimized for ASP.NET, MSSQL and Windows applications",
      "Reliable hosting backed by enterprise-grade infrastructure",
    ],
  },
  {
    id: "c3",
    topLabel: "UP TO",
    mainValue: "40%",
    offText: "OFF",
    title: "Flash Sale – All Hosting Services",
    description: "Get UP TO 40% OFF on UltaHost hosting plans starting from just $3.29/month.",
    affiliateUrl: "https://ultahost.sjv.io/c/4303217/1888268/22575?subId1=subid&subId2=1015",
    points: [
      "99.99% uptime with free DDoS protection and unlimited bandwidth",
      "24/7 expert support for websites, stores, businesses and developers",
      "Risk-Free with a 30-Day Money-Back Guarantee",
    ],
  },
  {
    id: "c4",
    topLabel: "SAVE",
    mainValue: "40%",
    offText: "OFF",
    title: "Power Plus VPS Hosting – SAVE 40%",
    description: "Get the Power Plus VPS plan for only $32.80/month (Regular Price $54.80/month).",
    affiliateUrl: "https://ultahost.sjv.io/c/4303217/1888268/22575?subId1=subid&subId2=1015",
    points: [
      "4 CPU Cores, 8GB DDR5 RAM and 250GB NVMe SSD storage",
      "Unlimited bandwidth, managed server and dedicated IP",
      "Ideal for growing businesses and high-performance websites",
    ],
  },
  {
    id: "c5",
    topLabel: "SAVE",
    mainValue: "40%",
    offText: "OFF",
    title: "VPS Basic Hosting – SAVE 40%",
    description: "Start with VPS Basic for just $4.80/month (Regular Price $7.99/month).",
    affiliateUrl: "https://ultahost.sjv.io/c/4303217/1888268/22575?subId1=subid&subId2=1015",
    points: [
      "1 CPU Core, 1GB DDR5 RAM and 30GB NVMe SSD storage",
      "Free SSL Certificate and Dedicated IP included",
      "Perfect for beginners, personal projects and small business websites",
    ],
  },
  {
    id: "c6",
    topLabel: "SAVE",
    mainValue: "20%",
    offText: "OFF",
    title: "Ulta-X1 Dedicated Server – SAVE 20%",
    description: "Get the Ulta-X1 Dedicated Server for only $74.80/month (Regular Price $93.50/month).",
    affiliateUrl: "https://ultahost.sjv.io/c/4303217/1888268/22575?subId1=subid&subId2=1015",
    points: [
      "Powered by Intel Xeon processor with 16GB DDR3 RAM",
      "Dedicated resources for maximum speed, security and reliability",
      "Best for enterprise websites, SaaS platforms and large applications",
    ],
  },
  {
    id: "c7",
    topLabel: "SAVE",
    mainValue: "40%",
    offText: "OFF",
    title: "Shared Starter Hosting – SAVE 40%",
    description: "Launch your website for only $3.80/month (Regular Price $5.99/month).",
    affiliateUrl: "https://ultahost.sjv.io/c/4303217/1888268/22575?subId1=subid&subId2=1015",
    points: [
      "Free SSL, Free Backups and Free Domain Transfer",
      "Unlimited Bandwidth with fast NVMe SSD storage",
      "Great for blogs, portfolios and business websites",
    ],
  },
  {
    id: "c8",
    topLabel: "SAVE",
    mainValue: "40%",
    offText: "OFF",
    title: "Mac Hosting – SAVE 40%",
    description: "Get premium Mac Hosting from just $16.50/month (Regular Price $27.50/month).",
    affiliateUrl: "https://ultahost.sjv.io/c/4303217/1888268/22575?subId1=subid&subId2=1015",
    points: [
      "Built for developers, designers and creative professionals",
      "High-performance macOS environment with reliable uptime",
      "Ideal for iOS development, Xcode and Apple-based projects",
    ],
  },
];

