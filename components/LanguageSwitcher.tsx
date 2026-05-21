"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeNames, type Locale } from "@/lib/i18n";

interface LanguageSwitcherProps {
  currentLang: Locale;
  variant?: "light" | "dark";
}

export function LanguageSwitcher({
  currentLang,
  variant = "light",
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const newLang: Locale = currentLang === "en" ? "zh" : "en";
  const pathWithoutLang = pathname?.replace(/^\/(en|zh)/, "") || "";
  const switchHref = `/${newLang}${pathWithoutLang}`;

  const className =
    variant === "dark"
      ? "text-sm font-medium text-slate-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
      : "text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-100";

  return (
    <Link href={switchHref} className={className}>
      {currentLang === "en" ? localeNames.zh : localeNames.en}
    </Link>
  );
}
