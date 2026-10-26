import React, { useState, useEffect } from 'react';
import { Shield, Terminal as TerminalIcon, Globe, Menu, X, ArrowUpRight, Award, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: { fr: "Piliers", en: "Pillars" }, href: "#pillars" },
    { name: { fr: "Projets", en: "Projects" }, href: "#projects" },
    { name: { fr: "Certifications", en: "Certifications" }, href: "#certifications" },
    { name: { fr: "Compétences", en: "Skills" }, href: "#skills" },
    { name: { fr: "À propos", en: "About" }, href: "#about" },
    { name: { fr: "Contact", en: "Contact" }, href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 flex items-center justify-center font-mono font-bold text-emerald-400 group-hover:border-emerald-400 transition-colors">
            IS
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
          </div>
          <div>
            <span className="font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
              Ibrahim Soudess
            </span>
            <span className="block text-[11px] text-slate-400 font-mono">
              Cyber • AI • Builder
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-white/5 rounded-full transition-all"
            >
              {link.name[lang]}
            </a>
          ))}
        </nav>

        {/* Actions (Lang + CTA) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-white/10 transition-colors"
            title="Changer de langue / Switch language"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>{lang.toUpperCase()}</span>
          </button>

          <a
            href="/cv.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{lang === 'fr' ? 'Mon CV' : 'Resume'}</span>
          </a>

          <a
            href={portfolioData.personal.credly}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all shadow-sm hover:shadow-emerald-500/20"
          >
            <Award className="w-4 h-4" />
            <span>Credly (6)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="p-2 text-xs font-mono rounded-lg bg-slate-800 text-slate-200 border border-white/10"
          >
            {lang.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white border border-white/10"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e17] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-white/5 rounded-lg"
            >
              {link.name[lang]}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href="/cv.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-sm font-semibold"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'fr' ? 'Consulter & Imprimer mon CV (A4)' : 'View & Print my Resume (A4)'}</span>
            </a>
            <a
              href={portfolioData.personal.credly}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-sm font-semibold"
            >
              <Award className="w-4 h-4" />
              <span>{lang === 'fr' ? 'Vérifier mes 6 badges Credly' : 'Verify my 6 Credly badges'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
