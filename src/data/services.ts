

export interface ServiceItem {
  id: string;
  icon: 'savings' | 'loans' | 'fixedDeposit' | 'moneyTransfer' | 'financialEducation' | 'other';
  title: string;
  description: string;
  href: string;
}

export interface LoanTypeItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  href: string;
}

// --- Main Home Services Data ---

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
    description: 'Flexible financing solutions including Agricultural, Business, Emergency, and Education loans.',
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

// --- Loan Sub-Types Data ---

export const loanTypes: LoanTypeItem[] = [
  {
    id: 'agricultural-loan',
    title: 'Agricultural Loan',
    description: 'Empowering farmers and agricultural enterprises with tailored financing for equipment, seeds, livestock, and land development.',
    features: [
      'Seasonal repayment plans matching harvest cycles',
      'Competitive interest rates for rural farmers',
      'Financing for modern machinery, seeds, and fertilizers',
    ],
    href: '/services/loans/agricultural',
  },
  {
    id: 'business-loan',
    title: 'Business Loan',
    description: 'Fuel your business growth with capital for working capital, inventory expansion, technology upgrades, or operational needs.',
    features: [
      'Flexible loan terms tailored to cash flow',
      'Fast approval process for micro and small enterprises',
      'High ceiling limits for cooperative members',
    ],
    href: '/services/loans/business',
  },
  {
    id: 'emergency-loan',
    title: 'Emergency Loan',
    description: 'Quick financial relief designed to help members navigate unexpected urgent expenses, medical bills, or personal crises.',
    features: [
      'Fast-track 24–48 hour processing time',
      'Minimal documentation requirements',
      'Manageable short-term repayment options',
    ],
    href: '/services/loans/emergency',
  },
  {
    id: 'education-loan',
    title: 'Education Loan',
    description: 'Invest in the future with dedicated loans covering tuition fees, training programs, books, and educational materials.',
    features: [
      'Low, subsidized interest rates for students and parents',
      'Flexible schedules aligned with academic terms',
      'Covers domestic and international study expenses',
    ],
    href: '/services/loans/education',
  },
];