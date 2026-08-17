"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { servicesFaq } from "@/data/services-detail";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-emerald-100 hover:shadow-md sm:p-6">
      <h3 className="text-xl font-extrabold text-blue-950">
        Frequently Asked Questions
      </h3>
      <div className="mt-4 space-y-1.5">
        {servicesFaq.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`group rounded-lg border transition-all duration-200 ${
                isOpen
                  ? "border-emerald-200/80 bg-emerald-50/40"
                  : "border-transparent hover:border-emerald-100 hover:bg-emerald-50/30"
              }`}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-2.5 text-sm font-semibold text-blue-950 transition-colors group-hover:text-emerald-700">
                  <HelpCircle
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                      isOpen
                        ? "text-emerald-600"
                        : "text-emerald-500 group-hover:text-emerald-600"
                    }`}
                  />
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-gray-400 transition-all duration-200 group-hover:text-emerald-600 ${
                    isOpen ? "rotate-180 text-emerald-600" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-2.5 pb-2.5 pl-9 text-xs leading-relaxed text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
