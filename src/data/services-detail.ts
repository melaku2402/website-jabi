export interface ServiceCardDetail {
  id: string;
  icon: 'savings' | 'loans' | 'fixedDeposit' | 'moneyTransfer' | 'financialEducation' | 'other';
  iconColor: 'green' | 'orange' | 'blue';
  title: string;
  description: string;
  ctaLabel: 'Learn More' | 'Apply Now';
  href: string;
}

export const servicesGridDetail: ServiceCardDetail[] = [
  {
    id: 'savings',
    icon: 'savings',
    iconColor: 'green',
    title: 'Savings',
    description: 'Secure your future and earn interest on flexible savings options.',
    ctaLabel: 'Learn More',
    href: '/services/savings',
  },
  {
    id: 'loans',
    icon: 'loans',
    iconColor: 'orange',
    title: 'Loans',
    description: 'Affordable loans for personal, business and agricultural needs.',
    ctaLabel: 'Apply Now',
    href: '/services/loans',
  },
  {
    id: 'fixedDeposit',
    icon: 'fixedDeposit',
    iconColor: 'green',
    title: 'Fixed Deposit',
    description: 'Grow your savings with secure fixed deposit accounts.',
    ctaLabel: 'Learn More',
    href: '/services/fixed-deposit',
  },
  {
    id: 'moneyTransfer',
    icon: 'moneyTransfer',
    iconColor: 'blue',
    title: 'Money Transfer',
    description: 'Send and receive money quickly and safely.',
    ctaLabel: 'Learn More',
    href: '/services/money-transfer',
  },
  {
    id: 'financialEducation',
    icon: 'financialEducation',
    iconColor: 'green',
    title: 'Financial Education',
    description: 'We empower our members with financial knowledge.',
    ctaLabel: 'Learn More',
    href: '/services/financial-education',
  },
  {
    id: 'other',
    icon: 'other',
    iconColor: 'blue',
    title: 'Other Services',
    description: 'ATM, Mobile banking, Insurance and Bill Payment.',
    ctaLabel: 'Learn More',
    href: '/services/other',
  },
];

export interface FeaturedServiceContent {
  label: string;
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  imageUrl: string;
}

export const featuredService: FeaturedServiceContent = {
  label: 'Featured Service',
  title: 'Personal & Business Loans',
  description:
    'We provide flexible loan solutions to help you achieve your personal and business goals.',
  features: ['Agricultural Loan', 'Business Loan', 'Emergency Loan', 'Education Loan'],
  ctaLabel: 'Apply Now',
  ctaHref: '/services/loans',
  imageUrl: '/images/services/featured-loans.jpg',
};

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

export const howItWorksSteps: HowItWorksStep[] = [
  { step: '01', title: 'Become a Member', description: 'Join Jabi Cooperatives and open an account.' },
  { step: '02', title: 'Apply', description: 'Choose the service and submit your application.' },
  { step: '03', title: 'Verification', description: 'We verify your documents and information.' },
  { step: '04', title: 'Approval', description: 'Your application is reviewed and approved.' },
  { step: '05', title: 'Receive Service', description: 'Enjoy fast, secure and reliable financial services.' },
];

export const whyChooseUs: string[] = [
  'Fast and easy process',
  'Competitive rates and fees',
  'Secure and reliable transactions',
  'Professional and friendly support',
  'Digital banking convenience',
  'Trusted by thousands of members',
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const servicesFaq: FaqItem[] = [
  {
    id: 'access',
    question: 'Who can access Jabi Cooperative services?',
    answer: 'Any registered member of Jabi Cooperatives Saving & Credit Union in good standing can access our full range of services.',
  },
  {
    id: 'requirements',
    question: 'What are the requirements for a loan?',
    answer: 'Applicants need an active membership account, valid identification, proof of income or collateral, and a completed loan application form.',
  },
  {
    id: 'approval-time',
    question: 'How long does loan approval take?',
    answer: 'Most loan applications are reviewed and approved within a few business days after all required documents are submitted.',
  },
  {
    id: 'multiple-loans',
    question: 'Can I apply for more than one loan?',
    answer: 'Members may hold multiple loan products subject to eligibility review and their overall repayment capacity.',
  },
  {
    id: 'repayment',
    question: 'How can I repay my loan?',
    answer: 'Repayments can be made at any branch, through payroll deduction, or via our mobile banking channels.',
  },
];
