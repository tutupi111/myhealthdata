import Link from "next/link";
import { SectionContainer } from "@/components/SectionContainer";
import { translations, type Locale } from "@/lib/i18n";

export default async function JoinPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = translations[lang];

  return (
    <SectionContainer className="py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
        {t.joinPage.title}
      </h1>
      <p className="text-slate-600 text-lg mb-12 leading-relaxed">
        {t.joinPage.intro}
      </p>
      <Link
        href={`/${lang}/contact`}
        className="inline-block px-8 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
      >
        {translations[lang].nav.contact}
      </Link>
    </SectionContainer>
  );
}
