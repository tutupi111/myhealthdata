import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { FeatureCard } from "@/components/FeatureCard";
import { PortalCard } from "@/components/PortalCard";
import { ProjectCard } from "@/components/ProjectCard";
import { GlobalImpactCard } from "@/components/GlobalImpactCard";
import { SectionHeader, ProblemCard } from "@/components/SectionHeader";
import {
  IconShield,
  IconLocked,
  IconPatient,
  IconData,
  IconAI,
  IconResearch,
  IconResearcher,
  IconAdmin,
} from "@/components/icons";
import { translations, type Locale } from "@/lib/i18n";

const problemIcons = [IconShield, IconLocked, IconPatient, IconData];

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = translations[lang];

  return (
    <>
      <HeroSection
        badges={t.hero.badges}
        titlePrefix={t.hero.titlePrefix}
        titleHighlight={t.hero.titleHighlight}
        subtitle={t.hero.subtitle}
        ctaLearnMore={t.hero.ctaLearnMore}
        ctaExploreDocs={t.hero.ctaExploreDocs}
        missionHref={`/${lang}/mission`}
        projectsHref={`/${lang}/projects`}
      />

      {/* The Health Data Problem */}
      <section className="py-20 md:py-28 px-4 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title={t.problem.title} subtitle={t.problem.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.problem.items.map((item, i) => {
              const Icon = problemIcons[i];
              return (
                <ProblemCard
                  key={i}
                  icon={<Icon />}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision + Global Impact */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden bg-[#0a0e14]">
        <div className="absolute inset-0 section-grid-dark opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <SectionHeader
            title={t.vision.title}
            subtitle={t.vision.content}
            dark
          />
          <h3 className="text-center text-xl font-semibold text-white mb-10">
            {t.globalImpact.title}
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {t.globalImpact.stats.map((stat, i) => (
              <GlobalImpactCard key={i} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-28 px-4 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title={t.whatWeDo.title} subtitle={t.whatWeDo.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
        </div>
      </section>

      {/* Access the Platform */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden bg-[#0a0e14]">
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <SectionHeader
            title={t.platformAccess.title}
            subtitle={t.platformAccess.subtitle}
            dark
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <PortalCard
              icon={<IconPatient />}
              title={t.platformAccess.patient.title}
              description={t.platformAccess.patient.description}
              href={`/${lang}/portal/patient`}
              ctaLabel={t.platformAccess.patient.cta}
            />
            <PortalCard
              icon={<IconResearcher />}
              title={t.platformAccess.researcher.title}
              description={t.platformAccess.researcher.description}
              href={`/${lang}/portal/researcher`}
              ctaLabel={t.platformAccess.researcher.cta}
            />
            <PortalCard
              icon={<IconAdmin />}
              title={t.platformAccess.admin.title}
              description={t.platformAccess.admin.description}
              href={`/${lang}/contact`}
              ctaLabel={t.platformAccess.admin.cta}
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-28 px-4 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title={t.projects.title} subtitle={t.projects.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {t.projects.items.map((project, i) => (
              <ProjectCard
                key={i}
                name={project.name}
                description={project.description}
                tag={project.tag}
                viewProjectLabel={t.projects.viewProject}
                href={`/${lang}/projects`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section id="open-source" className="relative py-20 md:py-24 px-4 overflow-hidden bg-[#0a0e14]">
        <div className="absolute inset-0 section-grid-dark opacity-20 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#00d1b2]/10 text-[#00d1b2] mb-6">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t.openSource.title}
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-10">
            {t.openSource.content}
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[48px] gap-3 px-8 py-3.5 bg-[#00d1b2] text-[#0a0e14] font-semibold rounded-full hover:bg-[#2dd4bf] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,209,178,0.35)]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            {t.openSource.cta}
          </a>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden mesh-gradient">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.12) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t.joinMovement.title}
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-10">
            {t.joinMovement.content}
          </p>
          <Link
            href={`/${lang}/join`}
            className="inline-flex items-center justify-center min-h-[48px] gap-2 px-10 py-4 bg-white text-[#0a0e14] font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            {t.joinMovement.cta}
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
