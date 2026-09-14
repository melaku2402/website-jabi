import { CheckCircle2 } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function WhyChooseUs() {
  const t = await getTranslations("ServicesPage.whyChooseUs");
  const items = t.raw("items") as string[];
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-emerald-100 hover:shadow-md sm:p-6">
      <h3 className="text-xl font-extrabold text-blue-950">
        {t("heading")}
      </h3>
      <ul className="mt-4 space-y-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="group flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-emerald-50/60 hover:text-blue-950 hover:translate-x-1"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0 fill-emerald-600 text-white transition-transform duration-200 group-hover:scale-110 group-hover:fill-emerald-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
