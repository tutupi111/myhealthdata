import type { Metadata } from "next";
import { SectionContainer } from "@/components/SectionContainer";
import { translations, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    alternates: { canonical: `/${lang}/contact` },
    openGraph: { url: `/${lang}/contact` },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = translations[lang];

  return (
    <SectionContainer className="py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
        {t.contactPage.title}
      </h1>
      <p className="text-slate-600 text-lg leading-relaxed">
        {t.contactPage.intro}
      </p>
    </SectionContainer>
  );
}
