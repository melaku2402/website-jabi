export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  subtitle?: string; // Add optional subtitle property
}

export const partners: Partner[] = [
  { id: 'cooperative-commission', name: 'Cooperative Commission', logoUrl: '/images/partners/cooperative-commission.jpg' },
  { id: 'nbe', name: 'National Bank of Ethiopia', logoUrl: '/images/partners/nbe.jpg' },
  { id: 'cbe', name: 'Commercial Bank of Ethiopia', logoUrl: '/images/partners/cbe.jpg' },
  { id: 'eic', name: 'Ethiopian Insurance Corporation', logoUrl: '/images/partners/eic.jpg' },
  { id: 'dashin-bank', name: 'Dashin Bank', logoUrl: '/images/partners/dashin-bank.jpg' },
  { id: 'tseday-bank', name: 'Tsedey Bank', logoUrl: '/images/partners/tsedey-bank.jpg' },
  { id: 'ethioTell', name: 'Ethio tellecom', logoUrl: '/images/partners/ethioTell.jpg' },
  { id: 'other-partners', name: 'Other Partners', logoUrl: '/images/partners/other.jpg' },
];