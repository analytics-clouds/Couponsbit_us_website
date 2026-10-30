export interface Offer {
  id: string;
  label: string;
  value: string;
  sub?: string;
  title: string;
  desc: string;
  bullets: string[];
}

export const OFFERS: Offer[] = [
  {
    id: "c1",
    label: "Save",
    value: "$450",
    sub: "OFF",
    title: "Beelink GTR9 Pro AI Mini PC – Save $450",
    desc: "Get the AMD Ryzen™ AI Max+ 395 powered GTR9 Pro at $4,349, with OpenClaw and Local LLM pre-installed for advanced AI workloads.",
    bullets: [
      "AMD Ryzen™ AI Max+ 395 processor",
      "OpenClaw and Local LLM pre-installed",
      "Now $4,349 — built for AI, ML and professional workloads",
    ],
  },
  {
    id: "c2",
    label: "UP TO",
    value: "35%",
    sub: "OFF",
    title: "Beelink ME Mini NAS PC – Up To 35% OFF",
    desc: "Save up to 35% on the Beelink ME Mini 6-slot home storage NAS PC, starting at $329.",
    bullets: [
      "6-slot home storage NAS PC",
      "Powered by Intel N95/N150",
      "Perfect for home storage, backup and media servers",
    ],
  },
  {
    id: "c3",
    label: "UP TO",
    value: "30%",
    sub: "OFF",
    title: "OpenClaw SSD Upgrade Kit – Up To 30% OFF",
    desc: "Save up to 30% on the pre-installed OpenClaw SSD Upgrade Kit, starting at $189.",
    bullets: [
      "High-speed SSD storage upgrade",
      "Perfect for OpenClaw and Local LLM deployments",
      "Starting at $189",
    ],
  },
  {
    id: "c4",
    label: "UP TO",
    value: "21%",
    sub: "OFF",
    title: "Beelink AI Mini PC Sale – Save Up To 21% OFF",
    desc: "Save up to 21% across Beelink's latest AMD Ryzen™ AI and Intel-powered Mini PCs.",
    bullets: [
      "AMD Ryzen™ AI and Intel-powered Mini PCs",
      "Great for AI development and Local LLMs",
      "Also suited for gaming and content creation",
    ],
  },
  {
    id: "c5",
    label: "UP TO",
    value: "21%",
    sub: "OFF",
    title: "Beelink EQR7 Mini PC – Up To 21% OFF",
    desc: "Save up to 21% on the Beelink EQR7 AMD Ryzen™ 7 7735HS/7735U mini PC, starting at $539.",
    bullets: [
      "AMD Ryzen™ 7 7735HS/7735U processor",
      "Starting at $539",
      "Great for work, entertainment and productivity",
    ],
  },
  {
    id: "c6",
    label: "UP TO",
    value: "21%",
    sub: "OFF",
    title: "Beelink SER10 OpenClaw Edition – Up To 21% OFF",
    desc: "Save up to 21% on the Beelink SER10 MAX OpenClaw Edition, starting at $1,339.",
    bullets: [
      "OpenClaw and Local LLM pre-installed",
      "Designed for AI developers and local inference",
      "Starting at $1,339",
    ],
  },
  {
    id: "c7",
    label: "UP TO",
    value: "19%",
    sub: "OFF",
    title: "Beelink SER10 MAX AI PC – Up To 19% OFF",
    desc: "Save up to 19% on the Beelink SER10 MAX AMD Ryzen™ AI 9 HX 470, starting at $1,299.",
    bullets: [
      "AMD Ryzen™ AI 9 HX 470 with AMD XDNA 2 architecture",
      "Available with 32GB or 64GB DDR5",
      "Starting at $1,299",
    ],
  },
  {
    id: "c8",
    label: "UP TO",
    value: "18%",
    sub: "OFF",
    title: "Beelink SER9 Pro – Up To 18% OFF",
    desc: "Get the Beelink SER9 Pro AMD Ryzen™ 7 H 255 starting at $739 — save up to 18%.",
    bullets: [
      "AMD Ryzen™ 7 H 255 processor",
      "Starting at $739",
      "Great performance for creators and multitasking",
    ],
  },
  {
    id: "c9",
    label: "UP TO",
    value: "17%",
    sub: "OFF",
    title: "Beelink EX Mate Pro – Up To 17% OFF",
    desc: "Save up to 17% on the new Beelink EX Mate Pro laptop companion, now available for $199.",
    bullets: [
      "Laptop companion device",
      "Now available for $199",
      "New launch — limited-time USA offer",
    ],
  },
];
