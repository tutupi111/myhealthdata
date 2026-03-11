"use client";

import Link from "next/link";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { translations, type Locale } from "@/lib/i18n";

const navItems = [
  { key: "home" as const, href: "" },
  { key: "mission" as const, href: "/mission" },
  { key: "projects" as const, href: "/projects" },
  { key: "research" as const, href: "/research" },
  { key: "join" as const, href: "/join" },
  { key: "contact" as const, href: "/contact" },
] as const;

interface NavbarProps {
  lang: Locale;
}

export function Navbar({ lang }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;
  const basePath = `/${lang}`;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href={basePath}
            className="text-lg font-semibold text-slate-900 hover:text-teal-600 transition-colors"
          >
            MyDataHealth Foundation
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ key, href }) => (
              <Link
                key={key}
                href={`${basePath}${href}`}
                className="px-4 py-2 text-slate-600 hover:text-teal-600 font-medium rounded-lg hover:bg-slate-100/80 transition-all duration-200"
              >
                {t[key]}
              </Link>
            ))}

            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-slate-200">
              <LanguageSwitcher currentLang={lang} />
              <Link
                href={`/${lang}/portal/patient`}
                className="px-5 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-xl hover:bg-teal-700 transition-all duration-200 hover:shadow-md"
              >
                {t.login}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-1">
              {navItems.map(({ key, href }) => (
                <Link
                  key={key}
                  href={`${basePath}${href}`}
                  className="flex items-center min-h-[44px] px-4 py-3 text-slate-600 hover:text-teal-600 font-medium rounded-lg hover:bg-slate-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t[key]}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 mt-4 border-t border-slate-200">
                <LanguageSwitcher currentLang={lang} />
                <Link
                  href={`/${lang}/portal/patient`}
                  className="flex-1 text-center min-h-[44px] flex items-center justify-center px-4 py-3 bg-teal-600 text-white text-sm font-semibold rounded-xl"
                >
                  {t.login}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
