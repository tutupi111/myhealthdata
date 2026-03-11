import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { SectionContainer } from "@/components/SectionContainer";
import { FeatureCard } from "@/components/FeatureCard";
import { PortalCard } from "@/components/PortalCard";
import { ProjectCard } from "@/components/ProjectCard";
import {
  IconFragmented,
  IconLocked,
  IconAccess,
  IconUnderstand,
  IconAI,
  IconData,
  IconResearch,
  IconPatient,
  IconResearcher,
  IconAdmin,
} from "@/components/icons";
import { translations, type Locale } from "@/lib/i18n";

const problemIcons = [IconFragmented, IconLocked, IconAccess, IconUnderstand];

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = translations[lang];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        ctaMission={t.hero.ctaMission}
        ctaProjects={t.hero.ctaProjects}
        missionHref={`/${lang}/mission`}
        projectsHref={`/${lang}/projects`}
      />

      {/* The Problem */}
      <SectionContainer className="bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">
          {t.problem.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.problem.items.map((item, i) => {
            const Icon = problemIcons[i];
            return (
              <div
                key={i}
                className="group rounded-2xl border border-slate-200/80 bg-slate-50/50 p-8 transition-all duration-300 hover:shadow-lg hover:border-teal-200/80 hover:bg-white"
              >
                <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-teal-600 shadow-sm">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* Our Vision */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-teal-50/30 to-blue-50/40" />
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 148, 136, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(13, 148, 136, 0.05) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            {t.vision.title}
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
            {t.vision.content}
          </p>
        </div>
      </section>

      {/* What We Do */}
      <SectionContainer className="bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">
          {t.whatWeDo.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<IconAI />}
            title={t.whatWeDo.cards[0].title}
            description={t.whatWeDo.cards[0].description}
          />
          <FeatureCard
            icon={<IconData />}
            title={t.whatWeDo.cards[1].title}
            description={t.whatWeDo.cards[1].description}
          />
          <FeatureCard
            icon={<IconResearch />}
            title={t.whatWeDo.cards[2].title}
            description={t.whatWeDo.cards[2].description}
          />
        </div>
      </SectionContainer>

      {/* Platform Access */}
      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            {t.platformAccess.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <PortalCard
              icon={<IconPatient />}
              title={t.platformAccess.patient.title}
              description={t.platformAccess.patient.description}
              href={`/${lang}/portal/patient`}
              accessLabel={t.platformAccess.accessPortal}
            />
            <PortalCard
              icon={<IconResearcher />}
              title={t.platformAccess.researcher.title}
              description={t.platformAccess.researcher.description}
              href={`/${lang}/portal/researcher`}
              accessLabel={t.platformAccess.accessPortal}
            />
            <PortalCard
              icon={<IconAdmin />}
              title={t.platformAccess.admin.title}
              description={t.platformAccess.admin.description}
              href={`/${lang}/portal/admin`}
              accessLabel={t.platformAccess.accessPortal}
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <SectionContainer className="bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">
          {t.projects.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {t.projects.items.map((project, i) => (
            <ProjectCard
              key={i}
              name={project.name}
              description={project.description}
            />
          ))}
        </div>
      </SectionContainer>

      {/* Open Source */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-white to-blue-50/30" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            {t.openSource.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            {t.openSource.content}
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all duration-300 hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            {t.openSource.cta}
          </a>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t.joinMovement.title}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-12">
            {t.joinMovement.content}
          </p>
          <Link
            href={`/${lang}/join`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 text-white font-semibold rounded-xl hover:bg-teal-400 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5"
          >
            {t.joinMovement.cta}
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
