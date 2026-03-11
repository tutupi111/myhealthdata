import { SectionContainer } from "@/components/SectionContainer";
import { translations, type Locale } from "@/lib/i18n";

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = translations[lang];

  return (
    <SectionContainer className="py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
        {t.researchPage.title}
      </h1>
      <p className="text-slate-600 text-lg leading-relaxed">
        {t.researchPage.intro}
      </p>
    </SectionContainer>
  );
}
