export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
  rating: number; // out of 5
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ato. Yohannes Bekele',
    role: 'Member since 2015 · Finote Selam Branch',
    quote:
      'Jabi Cooperatives helped me grow my small business through their affordable loan services. The staff genuinely care about their members, not just the transactions.',
    avatarUrl: '/images/testimonials/yohannes-bekele.jpg',
    rating: 5,
  },
  {
    id: '2',
    name: 'W/ro. Genet Mulugeta',
    role: 'Member since 2018 · Bahir Dar Branch',
    quote:
      'The savings culture I built with Jabi Cooperatives changed my family\u2019s future. Opening my account was simple, and the team explains everything clearly.',
    avatarUrl: '/images/testimonials/genet-mulugeta.jpg',
    rating: 5,
  },
  {
    id: '3',
    name: 'Ato. Dawit Assefa',
    role: 'Member since 2012 · Debre Markos Branch',
    quote:
      'I have been a member for over a decade. Every branch visit feels personal, and their digital services now make banking even more convenient for our community.',
    avatarUrl: '/images/testimonials/dawit-assefa.jpg',
    rating: 5,
  },
];
