import { personalInfo } from '../data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Gradient Orbs — Background */}
      <div className="orb orb-violet w-[500px] h-[500px] -top-40 -left-40 animate-float" />
      <div className="orb orb-cyan w-[400px] h-[400px] -bottom-32 -right-32 animate-float-slow" />
      <div className="orb orb-violet w-[300px] h-[300px] top-1/3 right-1/4 animate-glow-pulse" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-subtle bg-bg-surface/50 text-text-secondary text-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Disponível para novos projetos
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 animate-slide-up">
          <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl md:text-3xl text-text-secondary font-light tracking-wide mb-6 animate-slide-up"
          style={{ animationDelay: '0.15s' }}
        >
          {personalInfo.title}
        </p>

        {/* Description */}
        <p className="text-text-secondary/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          {personalInfo.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: '0.45s' }}
        >
          <a
            href="#projects"
            className="btn-glow px-8 py-4 rounded-xl text-white font-semibold text-base tracking-wide"
          >
            Ver Meus Projetos
          </a>
          <a
            href="#contact"
            className="btn-outline px-8 py-4 rounded-xl font-semibold text-base tracking-wide"
          >
            Entrar em Contato
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-bounce">
        <span className="text-text-muted text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-text-muted/40 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-accent-violet animate-scroll-bounce" />
        </div>
      </div>
    </section>
  );
}
