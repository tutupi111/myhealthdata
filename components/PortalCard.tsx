import Link from "next/link";
import { type ReactNode } from "react";

interface PortalCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  accessLabel: string;
}

export function PortalCard({ icon, title, description, href, accessLabel }: PortalCardProps) {
  return (
    <Link href={href} className="block h-full group">
      <div className="h-full rounded-2xl border-2 border-slate-600/50 bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 transition-all duration-300 hover:border-teal-400/60 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] hover:-translate-y-1 flex flex-col">
        <div className="mb-6 inline-flex rounded-xl bg-teal-500/20 p-4 text-teal-400 transition-all duration-300 group-hover:scale-105">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-sm flex-grow">{description}</p>
        <span className="mt-6 inline-flex items-center text-teal-400 font-medium text-sm gap-2 group-hover:gap-4 transition-all duration-300">
          {accessLabel}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </div>
    </Link>
  );
}
