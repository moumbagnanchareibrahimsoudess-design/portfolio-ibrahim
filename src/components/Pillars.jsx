import React from 'react';
import { ShieldCheck, Brain, Rocket, Lock, Cpu, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Pillars({ lang }) {
  const getIcon = (id) => {
    switch (id) {
      case 'cyber': return <ShieldCheck className="w-8 h-8 text-emerald-400" />;
      case 'ai': return <Brain className="w-8 h-8 text-purple-400" />;
      case 'entrepreneurship': return <Rocket className="w-8 h-8 text-cyan-400" />;
      default: return <Lock className="w-8 h-8 text-emerald-400" />;
    }
  };

  const getBorderColor = (id) => {
    switch (id) {
      case 'cyber': return 'group-hover:border-emerald-500/50 hover:shadow-emerald-500/10';
      case 'ai': return 'group-hover:border-purple-500/50 hover:shadow-purple-500/10';
      case 'entrepreneurship': return 'group-hover:border-cyan-500/50 hover:shadow-cyan-500/10';
      default: return 'group-hover:border-slate-500';
    }
  };

  return (
    <section id="pillars" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-white/10 text-emerald-400 text-xs font-mono mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>{lang === 'fr' ? 'TRIANGLE D\'EXPERTISE' : 'CORE PILLARS'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'fr' ? 'Mes 3 Piliers de Prédilection' : 'My 3 Focus Areas'}
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'fr' 
              ? "Une synergie unique entre la rigueur de la cybersécurité, la puissance de l'IA et l'impact pragmatique de l'entrepreneuriat."
              : "A unique synergy between cybersecurity rigor, AI power, and pragmatic entrepreneurial impact."}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`group glass-card p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-1.5 shadow-xl ${getBorderColor(pillar.id)} flex flex-col justify-between`}
            >
              <div>
                {/* Icon & Subtitle */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    {getIcon(pillar.id)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    {pillar.subtitle[lang]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {pillar.title[lang]}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {pillar.description[lang]}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {pillar.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
