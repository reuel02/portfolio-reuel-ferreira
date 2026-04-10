import { useState, useEffect } from 'react';
import { navLinks } from '../data/portfolio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-navbar py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-tight gradient-text hover:opacity-80 transition-opacity"
        >
          RF
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          onClick={toggleMobileMenu}
          aria-label="Abrir menu"
        >
          <span
            className={`block w-6 h-0.5 bg-text-secondary transition-all duration-300 group-hover:bg-accent-violet ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-secondary transition-all duration-300 group-hover:bg-accent-violet ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-secondary transition-all duration-300 group-hover:bg-accent-violet ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-navbar mt-2 mx-6 rounded-xl p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-lg"
              onClick={closeMobileMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
