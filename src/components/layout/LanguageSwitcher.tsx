"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const t = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchLocale(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="flex items-center gap-1.5 text-xs font-semibold">
      <Globe className="h-3.5 w-3.5" />
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          <button
            type="button"
            disabled={isPending || loc === locale}
            onClick={() => switchLocale(loc)}
            className={
              loc === locale
                ? "text-emerald-400"
                : "text-blue-100 hover:text-white"
            }
          >
            {loc === "am" ? t("switchToAmharic") : t("switchToEnglish")}
          </button>
          {i < routing.locales.length - 1 && (
            <span className="mx-1 text-blue-300">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
