interface GlobalImpactCardProps {
  value: string;
  label: string;
}

export function GlobalImpactCard({ value, label }: GlobalImpactCardProps) {
  return (
    <div className="group rounded-2xl bg-[#111827]/80 border border-white/10 p-6 md:p-8 text-center transition-all duration-300 hover:border-[#00d1b2]/30 hover:-translate-y-1">
      <div className="text-3xl md:text-4xl font-bold text-[#00d1b2] mb-2 tracking-tight">
        {value}
      </div>
      <p className="text-slate-400 text-sm">{label}</p>
    </div>
  );
}
