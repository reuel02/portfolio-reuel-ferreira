import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6">
      {/* Subtle background orb */}
      <div className="orb orb-cyan w-[350px] h-[350px] top-20 -left-40 animate-glow-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionTitle
          title="Projetos"
          subtitle="Alguns dos projetos que desenvolvi recentemente"
        />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
