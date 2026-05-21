import Link from "next/link";
import { ContactEmailLink } from "@/components/ContactEmailLink";
import { translations, type Locale } from "@/lib/i18n";

interface FooterProps {
  lang: Locale;
}

export function Footer({ lang }: FooterProps) {
  const t = translations[lang];
  const basePath = `/${lang}`;

  return (
    <footer className="bg-[#0a0e14] text-slate-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href={basePath} className="inline-flex items-center gap-2.5 group">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00d1b2]/15 border border-[#00d1b2]/30">
                <svg className="w-4 h-4 text-[#00d1b2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.5-2.5-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </span>
              <span className="text-lg font-semibold text-white group-hover:text-[#00d1b2] transition-colors">
                HealthData
              </span>
            </Link>
            <p className="mt-4 leading-relaxed max-w-sm text-sm">{t.footer.description}</p>
            <div className="mt-6">
              <ContactEmailLink
                contactTarget="footer-email"
                campaign="footer"
                className="text-slate-500 hover:text-[#00d1b2] font-normal text-sm"
                showIcon={false}
              />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.footer.platform}</h4>
            <nav className="flex flex-col gap-3 text-sm">
              <Link href={`${basePath}/portal/patient`} className="hover:text-[#00d1b2] transition-colors">
                {t.footer.platformLinks.individuals}
              </Link>
              <Link href={`${basePath}/portal/researcher`} className="hover:text-[#00d1b2] transition-colors">
                {t.footer.platformLinks.researchers}
              </Link>
              <Link href={`${basePath}/portal/admin`} className="hover:text-[#00d1b2] transition-colors">
                {t.footer.platformLinks.organizations}
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.footer.resources}</h4>
            <nav className="flex flex-col gap-3 text-sm">
              <Link href={`${basePath}/research`} className="hover:text-[#00d1b2] transition-colors">
                {t.footer.resourceLinks.docs}
              </Link>
              <Link href={`${basePath}/#open-source`} className="hover:text-[#00d1b2] transition-colors">
                {t.footer.resourceLinks.openSource}
              </Link>
              <Link href={`${basePath}/contact`} className="hover:text-[#00d1b2] transition-colors">
                {t.footer.resourceLinks.contact}
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.footer.about}</h4>
            <nav className="flex flex-col gap-3 text-sm">
              <Link href={`${basePath}/mission`} className="hover:text-[#00d1b2] transition-colors">
                {t.footer.aboutLinks.mission}
              </Link>
              <Link href={`${basePath}/projects`} className="hover:text-[#00d1b2] transition-colors">
                {t.footer.aboutLinks.projects}
              </Link>
              <Link href={`${basePath}/join`} className="hover:text-[#00d1b2] transition-colors">
                {t.footer.aboutLinks.join}
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href={`${basePath}/contact`} className="hover:text-[#00d1b2] transition-colors">
              {t.footer.privacyPolicy}
            </Link>
            <Link href={`${basePath}/contact`} className="hover:text-[#00d1b2] transition-colors">
              {t.footer.termsOfUse}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
