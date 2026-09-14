import React from "react";
import { CheckCircle2, Sliders, ArrowRightCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { unionComparisonData } from "@/data/unionComparisonData";

export default async function UnionComparisonSection() {
  const t = await getTranslations("AboutPage.unionComparison");
  const similarityItems = t.raw("similarities.items") as string[];
  const differenceItems = t.raw("differences.items") as string[];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#022777] sm:text-4xl transition-colors duration-300 ">
            {t("heading")}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base text-gray-600 sm:mt-4">
            {t("subtitle")}
          </p>
        </div>

        {/* Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Similarities Card */}
          <div className="group bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <div className="p-2.5 bg-blue-50 text-blue-700 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-100">
                  <Sliders className="size-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                    {t("similarities.heading")}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {t("similarities.subtitle")}
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {similarityItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-2 rounded-lg transition-colors duration-200 hover:bg-blue-50/50"
                  >
                    <CheckCircle2 className="size-5 text-blue-600 shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-sm text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Differences / Cooperative Advantages Card */}
          <div className="group bg-white rounded-2xl border-2 border-emerald-500 p-6 sm:p-8 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-600 hover:shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg transition-all duration-300 group-hover:bg-emerald-700 group-hover:px-4">
              {t("differences.badge")}
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-100">
                  <ArrowRightCircle className="size-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-emerald-700">
                    {t("differences.heading")}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {t("differences.subtitle")}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {differenceItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-2 rounded-lg transition-colors duration-200 hover:bg-emerald-50/60"
                  >
                    <CheckCircle2 className="size-5 text-emerald-600 shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-sm text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rates Highlight Footer */}
            <div className="mt-8 pt-5 border-t border-gray-100 grid grid-cols-3 gap-2 text-center bg-emerald-50/50 rounded-xl p-3 transition-colors duration-300 group-hover:bg-emerald-100/60">
              <div className="p-1 rounded-lg transition-transform duration-200 hover:scale-105">
                <p className="text-[11px] text-gray-500 font-medium">
                  {t("rates.loanRates")}
                </p>
                <p className="text-xs sm:text-sm font-bold text-emerald-800">
                  {unionComparisonData.loanInterestRateRange}
                </p>
              </div>
              <div className="border-x border-emerald-100 p-1 rounded-lg transition-transform duration-200 hover:scale-105">
                <p className="text-[11px] text-gray-500 font-medium">
                  {t("rates.savingsRate")}
                </p>
                <p className="text-xs sm:text-sm font-bold text-emerald-800">
                  {unionComparisonData.savingsInterestRate}
                </p>
              </div>
              <div className="p-1 rounded-lg transition-transform duration-200 hover:scale-105">
                <p className="text-[11px] text-gray-500 font-medium">
                  {t("rates.fixedDeposit")}
                </p>
                <p className="text-xs sm:text-sm font-bold text-emerald-800">
                  {unionComparisonData.termDepositRateRange}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
