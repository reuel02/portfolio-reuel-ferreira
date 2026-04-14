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
    title: 'ZapCart - Catálogo digital',
    description:
      'Catálogo digital e carrinho de compras Mobile-First com checkout direto no WhatsApp. Desenvolvido com React, Vite e Tailwind CSS focado em conversão e usabilidade sem taxas para o lojista.',
    image: '../screenshots/zap-cart-preview.png',
    techStack: ['JavaScript', 'React', 'TailwindCSS', 'Vite'],
    githubUrl: 'https://github.com/reuel02/zapcart',
    demoUrl: "zapcart-azure.vercel.app/",
    category: 'Front-end',
  },
  {
    id: 3,
    title: 'Portfolio Interativo',
    description:
      'Este portfolio! Construído com React e TypeScript, apresentando design moderno com tema escuro, animações suaves e responsividade completa.',
    image: '../screenshots/portfolio-dev-preview.png',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/reuel02/portfolio-reuel-ferreira',
    demoUrl: 'https://portfoliodev-reuel-ferreira.vercel.app/',
    category: 'Front-end',
  },
  {
    id: 4,
    title: 'BarberPRO API',
    description:
      'API MVC construída com Python, Flask, SQLAlchemy e PostgreSQL para gerenciar agendas, profissionais e validação inteligente de horários.',
    image: '../screenshots/api-barberpro-preview.png',
    techStack: ['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy'],
    githubUrl: 'https://github.com/reuel02/barberpro-api-backend',
    category: 'Back-end',
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
