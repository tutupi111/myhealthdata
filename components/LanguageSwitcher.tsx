"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeNames, type Locale } from "@/lib/i18n";

interface LanguageSwitcherProps {
  currentLang: Locale;
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const newLang: Locale = currentLang === "en" ? "zh" : "en";
  const pathWithoutLang = pathname?.replace(/^\/(en|zh)/, "") || "";
  const switchHref = `/${newLang}${pathWithoutLang}`;

  return (
    <Link
      href={switchHref}
      className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-100"
    >
      {currentLang === "en" ? localeNames.zh : localeNames.en}
    </Link>
  );
}
