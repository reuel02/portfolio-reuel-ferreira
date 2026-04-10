import { type IconType } from 'react-icons';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,

  SiTailwindcss,
  SiPython,
  SiFlask,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,

  SiGit,

  SiDocker,
  SiLinux,
} from 'react-icons/si';
import { TbApi, TbDatabase } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import SectionTitle from './SectionTitle';
import { skillCategories, personalInfo } from '../data/portfolio';

// Mapa de nomes de skills → ícones SVG reais + cores
const skillIconMap: Record<string, { icon: IconType; color: string }> = {
  'React': { icon: SiReact, color: '#61DAFB' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
  'HTML/CSS': { icon: SiHtml5, color: '#E34F26' },

  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'Python': { icon: SiPython, color: '#3776AB' },
  'Flask': { icon: SiFlask, color: '#FFFFFF' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  'REST APIs': { icon: TbApi, color: '#8B5CF6' },
  'SQL Server': { icon: TbDatabase, color: '#CC2927' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
  'MySQL': { icon: SiMysql, color: '#4479A1' },
  'Git': { icon: SiGit, color: '#F05032' },
  'VS Code': { icon: VscVscode, color: '#007ACC' },
  'Docker': { icon: SiDocker, color: '#2496ED' },
  'Linux': { icon: SiLinux, color: '#FCC624' },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Sobre Mim"
          subtitle="Conheça um pouco mais sobre minha trajetória e tecnologias que utilizo"
        />

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-text-secondary leading-relaxed text-base md:text-lg">
              Especialista em criar o motor e a vitrine de aplicações modernas. No Back-end, domino a tríade Python, Flask e SQLAlchemy para garantir que os dados fluam com segurança. No Front-end, utilizo React e Tailwind CSS para entregar interfaces que não são apenas bonitas, mas funcionais e rápidas.
            </p>
            <p className="text-text-secondary leading-relaxed text-base md:text-lg">
              Acredito que um software robusto nasce da organização. Por isso, aplico padrões de arquitetura limpa e documentação rigorosa em cada linha de código. Busco constantemente o equilíbrio entre a estabilidade de uma infraestrutura bem montada e a fluidez de uma UI intuitiva.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass-card rounded-xl p-4">
                <p className="text-text-muted text-xs uppercase tracking-widest mb-1">Localização</p>
                <p className="text-text-primary font-medium">📍 {personalInfo.location}</p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <p className="text-text-muted text-xs uppercase tracking-widest mb-1">Email</p>
                <p className="text-text-primary font-medium text-sm truncate">✉️ {personalInfo.email}</p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories.map((cat) => (
              <div key={cat.category} className="glass-card rounded-xl p-5">
                <h3 className="text-text-primary font-semibold text-sm tracking-wide mb-4">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => {
                    const mapped = skillIconMap[skill.name];
                    const IconComponent = mapped?.icon;
                    const iconColor = mapped?.color || '#8888a0';

                    return (
                      <div
                        key={skill.name}
                        className="group/skill flex flex-col items-center gap-1.5 cursor-default"
                        title={skill.name}
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:-translate-y-1"
                          style={{
                            background: `${iconColor}15`,
                            border: `1px solid ${iconColor}30`,
                          }}
                        >
                          {IconComponent ? (
                            <IconComponent
                              size={26}
                              color={iconColor}
                              className="transition-all duration-300 group-hover/skill:drop-shadow-lg"
                              style={{
                                filter: `drop-shadow(0 0 0px ${iconColor})`,
                              }}
                              onMouseEnter={(e) => {
                                (e.currentTarget as SVGElement).style.filter = `drop-shadow(0 0 8px ${iconColor})`;
                              }}
                              onMouseLeave={(e) => {
                                (e.currentTarget as SVGElement).style.filter = `drop-shadow(0 0 0px ${iconColor})`;
                              }}
                            />
                          ) : (
                            <span className="text-lg">{skill.icon}</span>
                          )}
                        </div>
                        <span className="text-text-muted text-[0.65rem] font-medium text-center leading-tight group-hover/skill:text-text-secondary transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
