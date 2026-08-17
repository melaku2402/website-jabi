export interface ServiceItem {
  id: string;
  icon: 'savings' | 'loans' | 'fixedDeposit' | 'moneyTransfer' | 'financialEducation' | 'other';
  title: string;
  description: string;
  href: string;
}

export const homeServices: ServiceItem[] = [
  {
    id: 'savings',
    icon: 'savings',
    title: 'Savings',
    description: 'Secure your future and earn interest on flexible savings options.',
    href: '/services/savings',
  },
  {
    id: 'loans',
    icon: 'loans',
    title: 'Loans',
    description: 'Affordable loans for personal, business and agricultural needs.',
    href: '/services/loans',
  },
  {
    id: 'fixedDeposit',
    icon: 'fixedDeposit',
    title: 'Fixed Deposit',
    description: 'Grow your savings with flexible and secure fixed deposits.',
    href: '/services/fixed-deposit',
  },
  {
    id: 'moneyTransfer',
    icon: 'moneyTransfer',
    title: 'Money Transfer',
    description: 'Send and receive money quickly and safely.',
    href: '/services/money-transfer',
  },
  {
    id: 'financialEducation',
    icon: 'financialEducation',
    title: 'Financial Education',
    description: 'We empower our members with financial knowledge.',
    href: '/services/financial-education',
  },
  {
    id: 'other',
    icon: 'other',
    title: 'Other Services',
    description: 'ATM, Bill Payment, Insurance and more services.',
    href: '/services/other',
  },
];
