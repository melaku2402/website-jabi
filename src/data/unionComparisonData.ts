// 1. Types Interface
export interface InstitutionalComparison {
  similarities: string[];
  differences: string[];
  loanInterestRateRange: string;
  savingsInterestRate: string;
  termDepositRateRange: string;
}

// 2. Extracted & Translated Data Export
export const unionComparisonData: InstitutionalComparison = {
  similarities: [
    "Provides various types of financial savings services like any standard financial institution.",
    "Calculates and pays interest on deposited/saved funds.",
    "Offers credit and loan services to qualified members.",
    "Ensure member fund security and confidentiality.",
    "provide financial statements and reporting.",
    "provide loan and credit facilities.",
    "Accept deposits from members. ",
    "Offer saving and fixed deposit accounts.",
  ],
  differences: [
    "Operates strictly based on the plans and democratic decisions of member primary cooperatives.",
    "Member cooperatives are the direct owners of all the Union's assets.",
    "Provides loans at lower interest rates (8% – 14%) as determined by the general assembly.",
    "Distributes annual net profits back to member cooperatives as dividends.",
    "Provides professional training and technical support to cooperative leaders and employees.",
    "Tailors all operations and financial services directly to member needs.",
    "Pays higher savings interest rates (7.5%) compared to conventional financial institutions.",
    "Serves all community segments, ensuring access for low-income individuals without heavy collateral.",
    "Offers competitive time/fixed-deposit interest rates ranging from 8% to 11%.",
  ],
  loanInterestRateRange: "8% - 14%",
  savingsInterestRate: "7.5%",
  termDepositRateRange: "8% - 11%",
};
