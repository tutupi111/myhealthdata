interface ProjectCardProps {
  name: string;
  description: string;
}

export function ProjectCard({ name, description }: ProjectCardProps) {
  return (
    <div className="group h-full rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-teal-100/50 hover:border-teal-200/80 hover:-translate-y-1">
      <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-300 group-hover:w-16" />
      <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
        {name}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
