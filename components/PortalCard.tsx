import Link from "next/link";
import { type ReactNode } from "react";

interface PortalCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
}

export function PortalCard({
  icon,
  title,
  description,
  href,
  ctaLabel,
}: PortalCardProps) {
  return (
    <Link href={href} className="block h-full group">
      <div className="h-full rounded-2xl border border-white/10 bg-[#111827]/80 backdrop-blur-sm p-6 md:p-8 transition-all duration-300 hover:border-[#00d1b2]/40 hover:shadow-[0_0_30px_rgba(0,209,178,0.12)] hover:-translate-y-1 flex flex-col">
        <div className="mb-6 inline-flex rounded-xl bg-[#00d1b2]/10 p-4 text-[#00d1b2] transition-all duration-300 group-hover:scale-105">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#2dd4bf] transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-sm flex-grow leading-relaxed">{description}</p>
        <span className="mt-6 inline-flex items-center text-[#00d1b2] font-medium text-sm gap-2 group-hover:gap-3 transition-all duration-300">
          {ctaLabel}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </div>
    </Link>
  );
}
