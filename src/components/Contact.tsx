import { useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionTitle from './SectionTitle';
import { socialLinks } from '../data/portfolio';

// Status do envio do formulário
type SendStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<SendStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reseta o status após 5 segundos
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6">
      {/* Background orb */}
      <div className="orb orb-violet w-[400px] h-[400px] -bottom-40 right-0 animate-float-slow" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionTitle
          title="Contato"
          subtitle="Tem um projeto em mente? Vamos conversar!"
        />

        <div className="grid md:grid-cols-5 gap-10">
          {/* Form — 3 columns */}
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-text-secondary text-sm mb-2 font-medium">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                required
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-text-secondary text-sm mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-text-secondary text-sm mb-2 font-medium">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Conte-me sobre seu projeto..."
                required
                rows={5}
                className="input-field resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full px-8 py-4 rounded-xl font-semibold text-base tracking-wide transition-all duration-300 ${
                status === 'success'
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : status === 'error'
                  ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                  : 'btn-glow text-white'
              } ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {status === 'idle' && 'Enviar Mensagem'}
              {status === 'sending' && (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Enviando...
                </span>
              )}
              {status === 'success' && '✅ Mensagem enviada com sucesso!'}
              {status === 'error' && '❌ Erro ao enviar. Tente novamente.'}
            </button>
          </form>

          {/* Info — 2 columns */}
          <div className="md:col-span-2 space-y-6">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-text-primary font-semibold text-base mb-4">
                Vamos nos conectar
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Estou disponível para projetos freelance, colaborações e oportunidades de trabalho.
                Não hesite em entrar em contato!
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={link.platform}
                  >
                    {link.icon === 'github' ? (
                      /* GitHub SVG Icon */
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    ) : (
                      /* LinkedIn SVG Icon */
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">⚡</span>
                <h3 className="text-text-primary font-semibold text-sm">Resposta Rápida</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Normalmente respondo em até 24 horas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
