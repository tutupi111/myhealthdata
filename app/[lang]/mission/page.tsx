import { SectionContainer } from "@/components/SectionContainer";
import { translations, type Locale } from "@/lib/i18n";

export default async function MissionPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = translations[lang];

  return (
    <SectionContainer className="py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
        {t.mission.title}
      </h1>
      <div className="space-y-6">
        {t.mission.content.map((paragraph, i) => (
          <p key={i} className="text-slate-600 text-lg leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </SectionContainer>
  );
}
