import Link from "next/link";

interface ProjectCardProps {
  name: string;
  description: string;
  tag: string;
  viewProjectLabel: string;
  href: string;
}

export function ProjectCard({
  name,
  description,
  tag,
  viewProjectLabel,
  href,
}: ProjectCardProps) {
  return (
    <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <span className="inline-block w-fit px-3 py-1 text-xs font-medium text-[#0f766e] bg-teal-50 rounded-full mb-4">
        {tag}
      </span>
      <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#0f766e] transition-colors">
        {name}
      </h3>
      <p className="text-slate-600 leading-relaxed flex-grow">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center text-[#00d1b2] font-medium text-sm gap-2 hover:gap-3 transition-all duration-300"
      >
        {viewProjectLabel}
        <span>→</span>
      </Link>
    </div>
  );
}
