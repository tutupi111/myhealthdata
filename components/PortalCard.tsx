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
      <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-teal-100/50 hover:border-teal-200/80 hover:-translate-y-1 flex flex-col">
        <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-teal-50 to-blue-50 p-4 text-teal-600 transition-transform duration-300 group-hover:scale-105">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 text-sm flex-grow">{description}</p>
        <span className="mt-6 inline-flex items-center text-teal-600 font-medium text-sm group-hover:gap-2 transition-all">
          {accessLabel}
          <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </div>
    </Link>
  );
}
