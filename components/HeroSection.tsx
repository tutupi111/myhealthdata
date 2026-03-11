import Link from "next/link";
import { HeroNetworkBackground } from "./HeroNetworkBackground";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaMission: string;
  ctaProjects: string;
  missionHref: string;
  projectsHref: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaMission,
  ctaProjects,
  missionHref,
  projectsHref,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <HeroNetworkBackground />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(11, 17, 32, 0.65)" }}
      />

      <div className="relative z-10 w-full max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-[56px] sm:text-[60px] md:text-[64px] font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg">
          {title}
        </h1>
        <p className="mt-8 text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed max-w-[600px] mx-auto">
          {subtitle}
        </p>
        <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={missionHref}
            className="group inline-flex items-center justify-center px-8 py-4 bg-teal-500 text-white font-semibold rounded-xl hover:bg-teal-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] hover:-translate-y-0.5"
          >
            {ctaMission}
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href={projectsHref}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-400/60 text-white font-semibold rounded-xl hover:border-teal-400/80 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(20,184,166,0.2)] transition-all duration-300"
          >
            {ctaProjects}
          </Link>
        </div>
      </div>
    </section>
  );
}
