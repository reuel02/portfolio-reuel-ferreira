import type { Project, SkillCategory, NavLink, SocialLink } from '../types';

// ============================
// Links de Navegação
// ============================
export const navLinks: NavLink[] = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
];

// ============================
// Redes Sociais
// ============================
export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/reuel02',
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/reuel-ferreira/',
    icon: 'linkedin',
  },
];

// ============================
// Categorias de Skills
// ============================
export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'HTML/CSS', icon: '🌐' },
      { name: 'Tailwind CSS', icon: '💨' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'Flask', icon: '🧪' },
      { name: 'Node.js', icon: '🟩' },
      { name: 'REST APIs', icon: '🔗' },
    ],
  },
  {
    category: 'Banco de Dados',
    icon: '🗄️',
    skills: [
      { name: 'SQL Server', icon: '🛢️' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🐬' },
    ],
  },
  {
    category: 'Ferramentas',
    icon: '🛠️',
    skills: [
      { name: 'Git', icon: '📂' },
      { name: 'VS Code', icon: '💻' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Linux', icon: '🐧' },
    ],
  },
];

// ============================
// Projetos
// ============================
export const projects: Project[] = [
  {
    id: 1,
    title: 'BarberPRO',
    description:
      'O BarberPRO é uma plataforma SaaS desenvolvida para profissionalizar e automatizar o agendamento em barbearias de alto padrão.',
    image: '',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'Python', 'Flask', 'PostGreSQL'],
    githubUrl: 'https://github.com/reuel02/barberpro-web-frontend',
    demoUrl: '#',
    category: 'Full-Stack',
  },
  {
    id: 2,
    title: 'API RESTful Flask',
    description:
      'API backend robusta construída com Flask e SQLAlchemy, com documentação Swagger automática, autenticação JWT e integração com banco SQL Server.',
    image: '',
    techStack: ['Python', 'Flask', 'SQLAlchemy', 'Swagger'],
    githubUrl: 'https://github.com/seu-usuario/api-flask',
    category: 'Backend',
  },
  {
    id: 3,
    title: 'Portfolio Interativo',
    description:
      'Este portfolio! Construído com React e TypeScript, apresentando design moderno com tema escuro, animações suaves e responsividade completa.',
    image: '',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/seu-usuario/portfolio',
    demoUrl: '#',
    category: 'Frontend',
  },
  {
    id: 4,
    title: 'Sistema de Cadastro',
    description:
      'Aplicação full stack de cadastro com CRUD completo, validação de dados e integração frontend-backend. Interface responsiva com formulários dinâmicos.',
    image: '',
    techStack: ['React', 'Python', 'Flask', 'SQL Server'],
    githubUrl: 'https://github.com/seu-usuario/sistema-cadastro',
    category: 'Full Stack',
  },
];

// ============================
// Informações Pessoais
// ============================
export const personalInfo = {
  name: 'Reuel Ferreira',
  title: 'Desenvolvedor Full Stack',
  description:
    'Transformo processos manuais em plataformas digitais de alta performance. Desenvolvo sistemas robustos (Python/Flask) com interfaces premium (React/Tailwind) focadas na experiência do usuário e na eficiência do negócio. Do código à infraestrutura, entrego soluções prontas para escalar.',
  email: 'ferreirareuel3@gmail.com',
  location: 'Santos, São Paulo - Brasil',
};
