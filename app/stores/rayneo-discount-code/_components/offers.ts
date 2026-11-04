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
}

export const RAYNEO_COUPONS: Coupon[] = [
  {
    id: 'ray1',
    topLabel: 'UPTO',
    mainValue: '$70',
    offText: 'OFF',
    title: 'UPTO $70 OFF – RayNeo Air Series Sale',
    description: 'Upgrade your entertainment experience with exclusive savings on RayNeo Air Series products.',
    code: 'RAYNEO10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      'Enjoy UPTO $70 OFF on Air Series devices',
      'Premium AR viewing experience at special prices',
      'Limited-time offer while stocks last',
    ],
  },
  {
    id: 'ray2',
    topLabel: 'Starting At',
    mainValue: '$299',
    offText: '',
    title: 'RayNeo Air 4 Pro – AR Glasses Deal',
    description: 'Experience the future of entertainment with RayNeo Air 4 Pro AR Glasses.',
    code: 'RAYNEO10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      "World's first HDR10 AR Glasses at just $299",
      'Premium quad-speaker audio by Bang & Olufsen',
      'Immersive giant-screen viewing experience',
    ],
  },
  {
    id: 'ray3',
    topLabel: 'Save',
    mainValue: '$130',
    offText: 'OFF',
    title: 'Best Offer Save $130 – RayNeo X3 Pro AI',
    description: 'Experience next-generation smart eyewear with advanced AI and AR technology.',
    code: 'RAYNEO10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      'Save $130 instantly on purchase',
      'Sale Price: $1,169 (Regular $1,299)',
      'Worldwide Olympic Partner product',
    ],
  },
  {
    id: 'ray4',
    topLabel: 'Save',
    mainValue: '$70',
    offText: 'OFF',
    title: 'Save $70 – Air 3s + HDMI Adapter Bundle',
    description: 'Upgrade your entertainment setup with the ultimate legacy device hub bundle.',
    code: 'RAYNEO10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      'Save $70 on combo purchase',
      'Includes Air 3s + HDMI Adapter',
      'Easy plug-and-play connectivity',
    ],
  },
  {
    id: 'ray5',
    topLabel: 'Save',
    mainValue: '$70',
    offText: 'OFF',
    title: 'Save $70 – RayNeo Air 3s & Pocket TV Bundle',
    description: 'Enjoy wireless entertainment anywhere with this smart TV bundle.',
    code: 'RAYNEO10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      'Save $70 instantly',
      'Bundle Price: $309 (Regular $379)',
      'Includes Wireless Google TV Mate',
    ],
  },
  {
    id: 'ray6',
    topLabel: 'Starting At',
    mainValue: '$254.15',
    offText: '',
    title: 'RayNeo Air 4 Pro AR Glasses Offer – Starting At $254.15',
    description: 'Experience immersive visuals with premium AR display technology.',
    code: 'RAYNEO10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      "World's First HDR10 display in AR glasses",
      '201" giant virtual screen experience',
      'Sale Price: $254.15 (Regular $299)',
    ],
  },
  {
    id: 'ray7',
    topLabel: 'Price',
    mainValue: '$1,169',
    offText: '',
    title: 'RayNeo X3 Pro AI + AR Smart Glasses',
    description: 'Advanced AR smart glasses with support for customized vision lenses.',
    code: 'RAYNEO10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      'Supports customized nearsighted lenses',
      'AI-powered smart features included',
      'Price: $1,169 (Regular $1,299)',
    ],
  },
  {
    id: 'ray8',
    topLabel: 'Only At',
    mainValue: '$89',
    offText: '',
    title: 'RayNeo JoyDock – Giant-Screen Gaming Companion',
    description: 'Transform your gaming experience with portable giant-screen support.',
    code: 'RAYNEO10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      'Ideal for immersive gaming sessions',
      'Portable and easy-to-use device',
      'Available for $89 only',
    ],
  },
];
