// ============================
// Tipos TypeScript do Portfolio
// ============================

/** Representa um projeto no portfolio */
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  category: string;
}

/** Representa uma habilidade individual */
export interface Skill {
  name: string;
  icon: string;
}

/** Categoria de habilidades (ex: Frontend, Backend) */
export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

/** Link de navegação */
export interface NavLink {
  label: string;
  href: string;
}

/** Link de rede social */
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

/** Props do componente SectionTitle */
export interface SectionTitleProps {
  title: string;
  subtitle: string;
}

/** Props do componente ProjectCard */
export interface ProjectCardProps {
  project: Project;
}
