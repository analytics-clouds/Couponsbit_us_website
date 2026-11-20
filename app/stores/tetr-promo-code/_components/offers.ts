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

export const TETR_COUPONS: Coupon[] = [
  {
    id: 'tetr1',
    topLabel: 'ONLY',
    mainValue: '$33K',
    offText: 'DEAL',
    title: 'Tetr Promo Code – Pathfinder: US Edition for USD 33,000',
    description: 'Join the Tetr Pathfinder: US Edition summer program for a total fee of USD 33,000.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      'A summer program where students explore career interests.',
      'The academic fee is USD 28,000 and covers tuition, business immersions, and cultural immersions.',
      'A USD 5,000 administrative fee includes the capstone project.',
      'The total fee is USD 33,000, including applicable taxes.',
    ],
  },
  {
    id: 'tetr2',
    topLabel: 'GLOBAL',
    mainValue: 'TECH',
    offText: 'PROGRAM',
    title: "Tetr Promo Code – Global Master's Program in Technology",
    description: "Study management of technology across three economies in Tetr's international master's program.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      'Covers the management of technology across three different economies.',
      'Includes global learning experiences.',
      'Includes hands-on academic activities abroad.',
      "Check Tetr's site for fees, entry requirements, and accreditation.",
    ],
  },
  {
    id: 'tetr3',
    topLabel: 'ONLY',
    mainValue: '$62.7K',
    offText: 'DEAL',
    title: 'Tetr Discount Code – Family Business Program for USD 62,790',
    description: "Join Tetr's global leadership program for students who may run a family business.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      'The total program fee is USD 62,790, including applicable taxes.',
      'Academic fees cover tuition and global immersions across seven countries.',
      'Administrative charges cover program management and 12 months of mentorship.',
      'Built for students from family-owned business backgrounds.',
    ],
  },
  {
    id: 'tetr4',
    topLabel: 'ONLY',
    mainValue: '$55K',
    offText: 'DEAL',
    title: 'Tetr Discount Code – Global Gap Year Program for USD 55,000',
    description: "Spend a gap year across nine countries with Tetr's Global Gap Year Program.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      'The yearly program fee is USD 55,000.',
      'Academic fees include tuition, academic immersions, and business immersions.',
      'A separate yearly program management fee of USD 3,000 applies.',
      'Total cost is the program fee plus the management fee, so confirm the full amount with Tetr.',
    ],
  },
  {
    id: 'tetr5',
    topLabel: 'STUDY',
    mainValue: '9+',
    offText: 'COUNTRIES',
    title: 'Tetr Voucher Code – Global Learning Across 9 Countries',
    description: "Learn in several countries through Tetr's global learning program.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      'Includes study in countries such as Dubai, India, China, Ghana, the United States, Argentina, and parts of Europe.',
      'Includes Cornell University and FITT-IIT immersion programs.',
      'Includes internships and hands-on projects.',
      "Check Tetr's site for the details of each partnership.",
    ],
  },
  {
    id: 'tetr6',
    topLabel: 'RAISE',
    mainValue: '$75K+',
    offText: 'FUNDING',
    title: 'Tetr Voucher Code – Kickstarter Showdown Challenge',
    description: 'Take part in the Kickstarter Showdown Challenge, where student teams run crowdfunding campaigns.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      'Student teams launch crowdfunding campaigns with mentor guidance.',
      'Teams aim to raise over USD 75,000 collectively.',
      'Includes 110+ students across 18 teams.',
      'Includes participants from more than 45 nationalities.',
    ],
  },
  {
    id: 'tetr7',
    topLabel: 'SPECIAL',
    mainValue: 'DEALS',
    offText: 'OFFER',
    title: 'Tetr Deals – Global Entrepreneurship Programs',
    description: "Browse Tetr's international education programs for students interested in business.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      "Includes master's, gap year, leadership, and summer programs.",
      'Combines global travel, business projects, and classroom learning.',
      'Builds entrepreneurship and leadership skills across several countries.',
      "Check each program's page for fees and entry requirements.",
    ],
  },
  {
    id: 'tetr8',
    topLabel: 'GLOBAL',
    mainValue: 'STUDY',
    offText: 'OFFER',
    title: 'Tetr Offers – International Business Learning',
    description: "Learn about Tetr's international education programs.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      'Includes international travel and business projects.',
      'Includes hands-on learning alongside coursework.',
      'Programs are aimed at students interested in entrepreneurship and innovation.',
      "Check each program's page for fees and entry requirements.",
    ],
  },
];
