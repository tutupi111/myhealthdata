"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { translations, type Locale } from "@/lib/i18n";
import { getAppLoginUrl, getAppDashboardUrl, LOGGED_IN_COOKIE_NAME } from "@/lib/config";

function hasLoggedInCookie(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie.split(";").some((c) => c.trim().startsWith(`${LOGGED_IN_COOKIE_NAME}=`));
}

const navItems = [
  { key: "home" as const, href: "" },
  { key: "platform" as const, href: "/projects" },
  { key: "useCases" as const, href: "/research" },
  { key: "docs" as const, href: "https://github.com", external: true },
  { key: "about" as const, href: "/mission" },
  { key: "openSource" as const, href: "#open-source" },
] as const;

interface NavbarProps {
  lang: Locale;
}

function BrandLogo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00d1b2]/15 border border-[#00d1b2]/30">
        <svg className="w-4 h-4 text-[#00d1b2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2C8.5 2 6 4.5 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.5-2.5-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </span>
      <span className="text-lg font-semibold text-white tracking-tight">HealthData</span>
    </span>
  );
}

export function Navbar({ lang }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const t = translations[lang].nav;
  const basePath = `/${lang}`;

  useEffect(() => {
    setIsLoggedIn(hasLoggedInCookie());
  }, []);

  const renderNavLink = (
    key: (typeof navItems)[number]["key"],
    href: string,
    external?: boolean,
  ) => {
    const className =
      "px-3 py-2 text-sm text-slate-300 hover:text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-200";

    if (external) {
      return (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {t[key]}
        </a>
      );
    }

    const linkHref = href.startsWith("#") ? `${basePath}${href}` : `${basePath}${href}`;

    return (
      <Link key={key} href={linkHref} className={className}>
        {t[key]}
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0e14]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={basePath} className="hover:opacity-90 transition-opacity">
            <BrandLogo />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(({ key, href, ...rest }) =>
              renderNavLink(key, href, "external" in rest && rest.external),
            )}

            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-white/10">
              <LanguageSwitcher currentLang={lang} variant="dark" />
              {isLoggedIn ? (
                <a
                  href={getAppDashboardUrl()}
                  className="px-4 py-2 text-sm text-slate-300 hover:text-white font-medium transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.enterDashboard}
                </a>
              ) : (
                <a
                  href={getAppLoginUrl("patient")}
                  className="px-4 py-2 text-sm text-slate-300 hover:text-white font-medium transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.login}
                </a>
              )}
              <Link
                href={`${basePath}/join`}
                className="px-5 py-2.5 bg-[#00d1b2] text-[#0a0e14] text-sm font-semibold rounded-full hover:bg-[#2dd4bf] transition-all duration-200"
              >
                {t.joinMovement}
              </Link>
            </div>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-slate-300 hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-1">
              {navItems.map(({ key, href, ...rest }) => (
                <Link
                  key={key}
                  href={href.startsWith("#") ? `${basePath}${href}` : href.startsWith("http") ? href : `${basePath}${href}`}
                  className="flex items-center min-h-[44px] px-4 py-3 text-slate-300 hover:text-white font-medium rounded-lg hover:bg-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                  {...("external" in rest && rest.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {t[key]}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 mt-4 border-t border-white/10">
                <LanguageSwitcher currentLang={lang} variant="dark" />
                {isLoggedIn ? (
                  <a
                    href={getAppDashboardUrl()}
                    className="text-center min-h-[44px] flex items-center justify-center px-4 py-3 text-slate-300 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.enterDashboard}
                  </a>
                ) : (
                  <a
                    href={getAppLoginUrl("patient")}
                    className="text-center min-h-[44px] flex items-center justify-center px-4 py-3 text-slate-300 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.login}
                  </a>
                )}
                <Link
                  href={`${basePath}/join`}
                  className="text-center min-h-[44px] flex items-center justify-center px-4 py-3 bg-[#00d1b2] text-[#0a0e14] text-sm font-semibold rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.joinMovement}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
