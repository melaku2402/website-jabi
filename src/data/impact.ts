export interface ImpactItem {
  id: string;
  icon: 'assets' | 'capital' | 'surplus' | 'growth' | 'years';
  value: string;
  label: string;
}

export const homeImpact: ImpactItem[] = [
  { id: 'assets', icon: 'assets', value: '7.76B ETB', label: 'Total Assets' },
  { id: 'capital', icon: 'capital', value: '1.09B ETB', label: 'Total Capital' },
  { id: 'surplus', icon: 'surplus', value: '135.03M ETB', label: 'Net Surplus' },
  { id: 'growth', icon: 'growth', value: '5,988', label: 'Annual Asset Growth (2019-2023)' },
  { id: 'years', icon: 'years', value: '25+', label: 'Years of Trusted Service' },
];
