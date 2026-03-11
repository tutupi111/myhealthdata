interface ProjectCardProps {
  name: string;
  description: string;
  tag: string;
}

export function ProjectCard({ name, description, tag }: ProjectCardProps) {
  return (
    <div className="group h-full rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-sm p-6 md:p-8 shadow-lg shadow-slate-200/30 transition-all duration-300 hover:shadow-xl hover:shadow-teal-100/40 hover:border-teal-200/80 hover:-translate-y-2 hover:scale-[1.02]">
      <div className="mb-6 h-1 w-14 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300 group-hover:w-20 group-hover:shadow-[0_0_12px_rgba(20,184,166,0.4)]" />
      <span className="inline-block px-3 py-1 text-xs font-medium text-teal-600 bg-teal-50 rounded-full mb-4">
        {tag}
      </span>
      <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
        {name}
      </h3>
      <p className="text-slate-600 text-[18px] leading-relaxed">{description}</p>
    </div>
  );
}
