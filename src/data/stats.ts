export interface StatItem {
  id: string;
  label: string;
  value: string;
  suffix?: string;
  icon: 'members' | 'cooperatives' | 'branches' | 'employees' | 'assets' | 'loans';
}

export const primaryStats: StatItem[] = [
  { id: 'members', label: 'Members', value: '27,199', suffix: '+', icon: 'members' },
  { id: 'cooperatives', label: 'Primary Cooperatives', value: '251', icon: 'cooperatives' },
  { id: 'branches', label: 'Branches', value: '25', icon: 'branches' },
  { id: 'employees', label: 'Employees', value: '133', icon: 'employees' },
  { id: 'assets', label: 'Total Assets', value: '1.85B+', suffix: ' ETB', icon: 'assets' },
  { id: 'loans', label: 'Total Loans', value: '1.09B+', suffix: ' ETB', icon: 'loans' },
];
