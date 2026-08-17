export interface TrustBadge {
  id: string;
  icon: 'reliable' | 'memberFocused' | 'transparency' | 'growth';
  label: string;
}

export const trustBadges: TrustBadge[] = [
  { id: 'reliable', icon: 'reliable', label: 'Reliable Service' },
  { id: 'member-focused', icon: 'memberFocused', label: 'Member Focused' },
  { id: 'transparency', icon: 'transparency', label: 'Transparency' },
  { id: 'growth', icon: 'growth', label: 'Together for Growth' },
];

export interface ContactInfoCard {
  id: string;
  icon: 'call' | 'email' | 'location' | 'clock';
  title: string;
  lines: string[];
  note: string;
}

export const contactInfoCards: ContactInfoCard[] = [
  {
    id: 'call',
    icon: 'call',
    title: 'Call Us',
    lines: ['+251 58 220 1033', '+251 91 662 2200'],
    note: 'Mon - Fri: 8:00 AM - 5:00 PM',
  },
  {
    id: 'email',
    icon: 'email',
    title: 'Email Us',
    lines: ['info@jabicoopscu.com.et', 'support@jabicoopscu.com.et'],
    note: 'We reply within 24 hours',
  },
  {
    id: 'location',
    icon: 'location',
    title: 'Head Office',
    lines: ['Finote Selam, West Gojjam', 'Amhara Region, Ethiopia'],
    note: 'P.O.Box 1018',
  },
  {
    id: 'hours',
    icon: 'clock',
    title: 'Working Hours',
    lines: ['Monday - Friday', '8:00 AM - 5:00 PM'],
    note: 'Saturday: 8:00 AM - 1:00 PM',
  },
];

export interface BranchListItem {
  id: string;
  name: string;
  location: string;
  phone: string;
  imageUrl: string;
}

export const branchesList: BranchListItem[] = [
  {
    id: 'bahir-dar',
    name: 'Bahir Dar Branch',
    location: 'Bahir Dar City Administration',
    phone: '+251 58 222 3344',
    imageUrl: '/images/branches/bahir-dar.jpg',
  },
  {
    id: 'debre-markos',
    name: 'Debre Markos Branch',
    location: 'Debre Markos Town',
    phone: '+251 58 223 4455',
    imageUrl: '/images/branches/debre-markos.jpg',
  },
  {
    id: 'bure',
    name: 'Bure Branch',
    location: 'Bure Town',
    phone: '+251 58 224 5566',
    imageUrl: '/images/branches/bure.jpg',
  },
  {
    id: 'addis-zemen',
    name: 'Addis Zemen Branch',
    location: 'Addis Zemen Town',
    phone: '+251 58 225 6677',
    imageUrl: '/images/branches/addis-zemen.jpg',
  },
  {
    id: 'dega-damot',
    name: 'Dega Damot Branch',
    location: 'Dega Damot Woreda',
    phone: '+251 58 226 7788',
    imageUrl: '/images/branches/dega-damot.jpg',
  },
];

export interface ContactFaqItem {
  id: string;
  question: string;
  answer: string;
}

export const contactFaq: ContactFaqItem[] = [
  {
    id: 'membership',
    question: 'How can I become a member of Jabi Cooperatives S.C.U?',
    answer: 'Visit any branch with a valid ID and complete the membership application form. Our staff will guide you through account opening and the initial savings deposit.',
  },
  {
    id: 'loan-requirements',
    question: 'What are the requirements for a loan?',
    answer: 'You need an active membership account, valid identification, proof of income or collateral, and a completed loan application form.',
  },
  {
    id: 'balance-check',
    question: 'How can I check my account balance?',
    answer: 'You can check your balance at any branch, through our mobile banking service, or by calling our customer service line.',
  },
  {
    id: 'interest-rates',
    question: 'What are your interest rates on savings and loans?',
    answer: 'Interest rates vary by product and are reviewed periodically. Please contact a branch or our support line for the most current rates.',
  },
  {
    id: 'update-info',
    question: 'How can I update my account information?',
    answer: 'Visit your nearest branch with valid identification to update your account details, or contact customer support for guidance.',
  },
];

export const headOfficeMapEmbedUrl =
  'https://maps.google.com/maps?q=Finote%20Selam%2C%20West%20Gojjam%2C%20Ethiopia&t=&z=13&ie=UTF8&iwloc=&output=embed';

export const headOfficeDirectionsUrl =
  'https://www.google.com/maps/search/?api=1&query=Finote+Selam+West+Gojjam+Ethiopia';
