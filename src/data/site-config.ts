export interface NavLink {
  key: string;
  href: string;
}

export const mainNavLinks: NavLink[] = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  // { key: 'membership', href: '/membership' },
  // { key: 'reports', href: '/reports' },
  { key: 'news', href: '/news' },
  { key: 'contact', href: '/contact' },
];

export const footerServiceLinks: NavLink[] = [
  { key: 'savings', href: '/services/savings' },
  { key: 'loans', href: '/services/loans' },
  { key: 'fixedDeposit', href: '/services/fixed-deposit' },
  { key: 'moneyTransfer', href: '/services/money-transfer' },
  { key: 'financialEducation', href: '/services/financial-education' },
  { key: 'otherServices', href: '/services/other' },
];

export const footerResourceLinks: NavLink[] = [
  { key: 'annualReports', href: '/reports/annual' },
  { key: 'financialStatements', href: '/reports/financial-statements' },
  { key: 'policies', href: '/reports/policies' },
  { key: 'formsAndDocuments', href: '/reports/forms' },
  { key: 'downloads', href: '/reports/downloads' },
  { key: 'faqs', href: '/faqs' },
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
