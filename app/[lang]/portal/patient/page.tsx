import type { Metadata } from "next";
import Link from "next/link";
import { SectionContainer } from "@/components/SectionContainer";
import { translations, type Locale } from "@/lib/i18n";
import { getAppLoginUrl } from "@/lib/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    alternates: { canonical: `/${lang}/portal/patient` },
    openGraph: { url: `/${lang}/portal/patient` },
  };
}

export default async function PatientPortalPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = translations[lang];

  return (
    <SectionContainer className="py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          {t.platformAccess.patient.title}
        </h1>
        <p className="text-slate-600 mb-8">{t.portal.loginAtApp}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getAppLoginUrl("patient")}
            className="inline-flex items-center justify-center px-8 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors"
          >
            {t.portal.goToLogin}
          </a>
          <Link
            href={`/${lang}`}
            className="text-teal-600 font-medium hover:text-teal-700"
          >
            {t.portal.backToHome}
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
