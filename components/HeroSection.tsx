import Link from "next/link";
import { HeroIllustration } from "./HeroIllustration";

interface HeroSectionProps {
  badges: readonly string[];
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  ctaLearnMore: string;
  ctaExploreDocs: string;
  missionHref: string;
  projectsHref: string;
}

export function HeroSection({
  badges,
  titlePrefix,
  titleHighlight,
  subtitle,
  ctaLearnMore,
  ctaExploreDocs,
  missionHref,
  projectsHref,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#0a0e14]">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 section-grid-dark opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-left">
            <div className="flex flex-wrap gap-2 mb-6">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-teal-300 bg-teal-400/10 border border-teal-400/20"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight">
              {titlePrefix}{" "}
              <span className="text-[#00d1b2]">{titleHighlight}</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
              {subtitle}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href={missionHref}
                className="inline-flex items-center justify-center min-h-[48px] px-8 py-3.5 bg-[#00d1b2] text-[#0a0e14] font-semibold rounded-full hover:bg-[#2dd4bf] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,209,178,0.35)]"
              >
                {ctaLearnMore}
              </Link>
              <Link
                href={projectsHref}
                className="inline-flex items-center justify-center min-h-[48px] px-8 py-3.5 border border-slate-500/60 text-white font-semibold rounded-full hover:border-teal-400/70 hover:bg-white/5 transition-all duration-300"
              >
                {ctaExploreDocs}
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <HeroIllustration />
          </div>
        </div>

        <div className="lg:hidden mt-8 max-w-sm mx-auto">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
