import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { ContactEmailLink } from "@/components/ContactEmailLink";
import { ContactForm } from "@/components/ContactForm";
import { SectionContainer } from "@/components/SectionContainer";
import { translations, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang].contactPage;
  return {
    title: t.title,
    description: t.intro,
    alternates: { canonical: `/${lang}/contact` },
    openGraph: { url: `/${lang}/contact`, title: t.title, description: t.intro },
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
      <div className="max-w-3xl mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          {t.contactPage.title}
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          {t.contactPage.intro}
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        <Card className="lg:col-span-2 h-fit">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            {t.contactPage.emailLabel}
          </h2>
          <ContactEmailLink
            contactTarget="contact-page-email"
            campaign="contact-page"
          />
          <p className="mt-4 text-sm text-slate-500 leading-relaxed">
            {t.contactPage.emailHint}
          </p>
        </Card>

        <Card className="lg:col-span-3">
          <ContactForm lang={lang} />
        </Card>
      </div>
    </SectionContainer>
  );
}
