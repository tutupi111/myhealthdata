interface GlobalImpactCardProps {
  value: string;
  label: string;
}

export function GlobalImpactCard({ value, label }: GlobalImpactCardProps) {
  return (
    <div className="group relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 transition-all duration-300 hover:bg-white/10 hover:border-teal-400/30 hover:-translate-y-1">
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent opacity-60 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(20,184,166,0.3)]" />
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
        {value}
      </div>
      <p className="text-slate-400 text-sm md:text-base">{label}</p>
    </div>
  );
}
