import React from 'react';
import { ArrowUp, ShieldCheck, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ lang }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-[#05070a] border-t border-white/5 text-xs text-slate-500 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
          <span>
            © {new Date().getFullYear()} {portfolioData.personal.fullName}.
          </span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="hidden md:inline text-slate-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 inline" />
            Security-First & Product Driven
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <span>{lang === 'fr' ? 'Haut de page' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
