import { type ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  dark = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 ${className}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold tracking-tight ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            dark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface ProblemCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function ProblemCard({ icon, title, description }: ProblemCardProps) {
  return (
    <div className="group rounded-2xl bg-white border border-slate-200/80 p-6 md:p-8 shadow-sm hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300">
      <div className="mb-5 inline-flex rounded-xl bg-teal-50 p-3.5 text-[#00d1b2] group-hover:bg-teal-100/80 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
