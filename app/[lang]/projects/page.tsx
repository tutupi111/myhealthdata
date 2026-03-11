import { SectionContainer } from "@/components/SectionContainer";
import { ProjectCard } from "@/components/ProjectCard";
import { translations, type Locale } from "@/lib/i18n";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = translations[lang];

  return (
    <SectionContainer className="py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
        {t.projectsPage.title}
      </h1>
      <p className="text-slate-600 text-lg mb-12">{t.projectsPage.intro}</p>
      <div className="grid md:grid-cols-3 gap-8">
        {t.projects.items.map((project, i) => (
          <ProjectCard
            key={i}
            name={project.name}
            description={project.description}
            tag={project.tag}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
