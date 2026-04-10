import type { ProjectCardProps } from '../types';

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden group">
      {/* Image / Placeholder */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent-violet-dim to-accent-cyan-dim">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl block mb-2">🚀</span>
              <span className="text-text-muted text-sm">{project.category}</span>
            </div>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center pb-4">
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/20 transition-colors border border-white/10"
            >
              GitHub →
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-accent-violet/80 text-white text-sm font-medium hover:bg-accent-violet transition-colors"
              >
                Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent-violet transition-colors">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
