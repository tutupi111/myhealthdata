import Link from "next/link";
import { SectionContainer } from "@/components/SectionContainer";
import { translations, type Locale } from "@/lib/i18n";

export default async function AdminPortalPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = translations[lang];

  return (
    <SectionContainer className="py-20">
      <div className="max-w-2xl mx-auto text-center">
        <span className="inline-block px-4 py-1 bg-teal-100 text-teal-700 text-sm font-medium rounded-full mb-6">
          {t.portal.comingSoon}
        </span>
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          {t.platformAccess.admin.title}
        </h1>
        <p className="text-slate-600 mb-8">{t.portal.description}</p>
        <Link
          href={`/${lang}`}
          className="text-teal-600 font-medium hover:text-teal-700"
        >
          {t.portal.backToHome}
        </Link>
      </div>
    </SectionContainer>
  );
}
