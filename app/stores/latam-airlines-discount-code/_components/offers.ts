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

export const LATAM_COUPONS: Coupon[] = [
  {
    id: 'lat1',
    topLabel: 'Earn',
    mainValue: '40,000',
    offText: 'Bonus Miles',
    title: 'LATAM Airlines Credit Card Offer – Earn 40,000 Bonus Miles',
    description: 'Get rewarded with bonus miles on approved LATAM Airlines credit cards.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      'Earn 40,000 bonus miles',
      'Redeem miles for South America flights',
      'Minimum spend terms apply',
    ],
  },
  {
    id: 'lat2',
    topLabel: 'starting',
    mainValue: '$308',
    offText: '',
    title: 'Flights from New York to Santiago, Chile.',
    description: 'Book affordable direct flights from New York to Santiago.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      'Departure: 08/10/26',
      'Fares starting at USD 308',
      'Direct economy flight available',
    ],
  },
  {
    id: 'lat3',
    topLabel: 'UPTO',
    mainValue: '40%',
    offText: 'OFF',
    title: 'UPTO 40% OFF On Packages, Hotels & Car Rentals',
    description: 'Save big on complete travel bookings with LATAM Airlines offers.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      'Up to 40% OFF sitewide bookings',
      'Applicable on orders above $40',
      'Covers concerts, sports & live events',
    ],
  },
  {
    id: 'lat4',
    topLabel: 'Starting',
    mainValue: '$554',
    offText: '',
    title: 'Miami To Rio De Janeiro – Starting At USD 554',
    description: 'Enjoy budget-friendly fares from Miami to Rio De Janeiro.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      'Departure: 08/21/26',
      'One-way economy booking',
      'Flight with connection included',
    ],
  },
  {
    id: 'lat5',
    topLabel: 'starting at',
    mainValue: '$136',
    offText: '',
    title: 'Miami To Punta Cana – Starting At $136',
    description: 'Grab affordable flights to Punta Cana at the best prices.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      'Flights starting at $136',
      'Affordable vacation travel deal',
      'Special LATAM pricing available',
    ],
  },
  {
    id: 'lat6',
    topLabel: 'Flat',
    mainValue: '10%',
    offText: 'OFF',
    title: 'Flat 10% OFF Sitewide On Orders Above $40',
    description: 'Unlock instant savings on concerts, sports events, live shows and more.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026',
    points: [
      'Flat 10% OFF on sitewide bookings',
      'Applicable on orders above $40',
      'Covers concerts, sports & live events',
    ],
  },
];
