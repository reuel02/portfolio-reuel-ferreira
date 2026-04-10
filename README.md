<div align="center">

# 🚀 Portfolio — Reuel Ferreira

**Desenvolvedor Full Stack**

Portfolio interativo construído com React, TypeScript e Tailwind CSS, apresentando design moderno com tema escuro, animações suaves e responsividade completa.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)

[🔗 Ver Online](https://portfoliodev-reuel-ferreira.vercel.app/) · [📂 Repositório](https://github.com/reuel02/portfolio-reuel-ferreira)

</div>

---

## 📸 Preview

<div align="center">

| Hero | Sobre Mim |
|------|-----------|
| ![Hero](./screenshots/hero.png) | ![Sobre](./screenshots/about.png) |

| Projetos | Contato |
|----------|---------|
| ![Projetos](./screenshots/projects.png) | ![Contato](./screenshots/contact.png) |

</div>

---

## ✨ Features

- 🌙 **Dark Theme Premium** — Paleta de cores escura com gradientes violet → cyan
- 💎 **Glassmorphism** — Cards com backdrop-blur e bordas semitransparentes
- 🎯 **Ícones SVG Reais** — Logos oficiais das tecnologias via `react-icons`
- 📱 **Responsivo** — Layout adaptável para mobile, tablet e desktop
- ⚡ **Animações Suaves** — Float, fade-in, slide-up, glow-pulse no hover
- 🔤 **Tipografia Inter** — Fonte moderna do Google Fonts
- 📨 **Formulário de Contato** — Campos estilizados com validação
- 🧩 **Componentizado** — Arquitetura modular e reutilizável

---

## 🛠️ Tech Stack

| Camada | Tecnologias |
|--------|-------------|
| **Frontend** | React 19, TypeScript, Tailwind CSS v4 |
| **Build** | Vite 8 |
| **Ícones** | react-icons (Simple Icons, Tabler, VS Code) |
| **Tipografia** | Google Fonts (Inter) |
| **Linting** | ESLint |

---

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Navbar.tsx       # Navegação fixa com glassmorphism
│   ├── Hero.tsx         # Seção principal com CTAs
│   ├── About.tsx        # Sobre mim + grid de skills
│   ├── Projects.tsx     # Grid de projetos
│   ├── ProjectCard.tsx  # Card individual de projeto
│   ├── Contact.tsx      # Formulário de contato
│   ├── Footer.tsx       # Rodapé
│   └── SectionTitle.tsx # Título reutilizável de seção
├── data/
│   └── portfolio.ts     # Dados do portfolio (projetos, skills, info)
├── types/
│   └── index.ts         # Interfaces TypeScript
├── pages/
│   └── Landing.tsx      # Página principal
├── App.tsx              # Componente root
├── App.css              # Utility classes customizadas
├── index.css            # Design system + animações
└── main.tsx             # Entry point
```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/reuel02/portfolio-reuel-ferreira.git

# Acesse a pasta
cd portfolio-reuel-ferreira

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173/`

### Build para Produção

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

---

## 🎨 Personalização

### Dados Pessoais

Edite o arquivo `src/data/portfolio.ts` para atualizar:

- **Informações pessoais** — nome, título, descrição, email, localização
- **Projetos** — título, descrição, tech stack, links
- **Skills** — categorias e tecnologias
- **Links sociais** — GitHub, LinkedIn

### Design System

As cores, fontes e animações estão configuradas em:

- `src/index.css` — Variáveis do tema (`@theme`), keyframes, estilos globais
- `src/App.css` — Classes utilitárias (glassmorphism, botões, gradientes)

---

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como referência.

---

<div align="center">

Feito por **[Reuel Ferreira](https://github.com/reuel02)**

[![GitHub](https://img.shields.io/badge/GitHub-reuel02-181717?style=flat-square&logo=github)](https://github.com/reuel02)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Reuel_Ferreira-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/reuel-ferreira/)

</div>
