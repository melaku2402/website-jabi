export interface NavLink {
  label: string;
  href: string;
}

export const mainNavLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  // { label: 'Membership', href: '/membership' },
  // { label: 'Reports', href: '/reports' },
  { label: 'News & Events', href: '/news' },
  { label: 'Contact Us', href: '/contact' },
];

export const footerServiceLinks: NavLink[] = [
  { label: 'Savings', href: '/services/savings' },
  { label: 'Loans', href: '/services/loans' },
  { label: 'Fixed Deposit', href: '/services/fixed-deposit' },
  { label: 'Money Transfer', href: '/services/money-transfer' },
  { label: 'Financial Education', href: '/services/financial-education' },
  { label: 'Other Services', href: '/services/other' },
];

export const footerResourceLinks: NavLink[] = [
  { label: 'Annual Reports', href: '/reports/annual' },
  { label: 'Financial Statements', href: '/reports/financial-statements' },
  { label: 'Policies', href: '/reports/policies' },
  { label: 'Forms & Documents', href: '/reports/forms' },
  { label: 'Downloads', href: '/reports/downloads' },
  { label: 'FAQs', href: '/faqs' },
];

export const siteContact = {
  address: 'Finote Selam, West Gojjam, Ethiopia',
  phones: ['+251 58 220 1033', '+251 91 662 2200'],
  email: 'info@jabicoopscu.com.et',
  workingHours: 'Mon - Fri: 8:00 AM - 5:00 PM',
};

export const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
] as const;
