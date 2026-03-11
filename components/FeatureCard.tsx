import { type ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative h-full rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-sm p-6 md:p-8 shadow-lg shadow-slate-200/30 transition-all duration-300 hover:shadow-xl hover:shadow-teal-100/50 hover:border-teal-200/80 hover:-translate-y-2">
      <div className="absolute top-0 left-8 right-8 h-0.5 rounded-full bg-gradient-to-r from-teal-500/50 to-cyan-500/50 opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(20,184,166,0.3)] transition-opacity" />
      <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 p-5 text-teal-600 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(20,184,166,0.25)]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-[18px]">{description}</p>
    </div>
  );
}
