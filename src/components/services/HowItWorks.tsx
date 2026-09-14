
import {
  UserPlus,
  ClipboardList,
  Search,
  BadgeCheck,
  PackageCheck,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { howItWorksSteps } from "@/data/services-detail";

const stepIcons = [UserPlus, ClipboardList, Search, BadgeCheck, PackageCheck];

export async function HowItWorks() {
  const t = await getTranslations("ServicesPage.howItWorks");
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <h2 className="text-center text-xl font-bold tracking-wider text-blue-950 uppercase sm:text-2xl">
        {t("heading")}
      </h2>

      {/* Desktop view */}
      <div className="relative mt-12 hidden lg:block">
        {/* Connecting line with small node circles */}
        <div className="absolute left-[10%] right-[10%] top-6 flex items-center justify-between -z-10">
          <div className="h-[1.5px] flex-1 bg-blue-200" />
          <div className="h-2 w-2 rounded-full border border-blue-400 bg-white" />
          <div className="h-[1.5px] flex-1 bg-blue-200" />
          <div className="h-2 w-2 rounded-full border border-blue-400 bg-white" />
          <div className="h-[1.5px] flex-1 bg-blue-200" />
          <div className="h-2 w-2 rounded-full border border-blue-400 bg-white" />
          <div className="h-[1.5px] flex-1 bg-blue-200" />
        </div>

        <div className="grid grid-cols-5 gap-4">
          {howItWorksSteps.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div
                key={step.step}
                className="group flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-600 bg-white text-blue-900 shadow-sm transition-all duration-300 group-hover:border-blue-950 group-hover:bg-blue-950 group-hover:text-white group-hover:shadow-md group-hover:scale-110">
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </span>
                <p className="mt-3 text-xs font-bold text-blue-950 transition-colors duration-300 group-hover:text-blue-600">
                  {step.step}
                </p>
                <p className="mt-1 text-sm font-extrabold text-blue-950 transition-colors duration-300 group-hover:text-blue-900">
                  {t(`steps.${step.step}.title`)}
                </p>
                <p className="mt-1.5 max-w-[180px] text-xs leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
                  {t(`steps.${step.step}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile view */}
      <div className="mt-10 space-y-6 lg:hidden">
        {howItWorksSteps.map((step, idx) => {
          const Icon = stepIcons[idx];
          return (
            <div
              key={step.step}
              className="group flex items-start gap-4 cursor-pointer transition-transform duration-300 hover:translate-x-1"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-600 bg-white text-blue-900 shadow-sm transition-all duration-300 group-hover:border-blue-950 group-hover:bg-blue-950 group-hover:text-white group-hover:shadow-md">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold text-blue-950 transition-colors duration-300 group-hover:text-blue-600">
                  {step.step}
                </p>
                <p className="text-sm font-extrabold text-blue-950">
                  {t(`steps.${step.step}.title`)}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                  {t(`steps.${step.step}.description`)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}