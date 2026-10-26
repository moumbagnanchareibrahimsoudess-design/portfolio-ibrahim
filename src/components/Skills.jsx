import React from 'react';
import { Cpu, Shield, Database, Code, CheckCircle, Flame, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills({ lang }) {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Cybersécurité & Réseaux':
      case 'Cybersecurity & Networking':
        return <Shield className="w-5 h-5 text-emerald-400" />;
      case 'Intelligence Artificielle & Data':
      case 'AI & Data':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Développement Backend & BDD':
      case 'Backend & Databases':
        return <Database className="w-5 h-5 text-blue-400" />;
      default:
        return <Code className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{lang === 'fr' ? 'ARSENAL TECHNIQUE' : 'TECHNICAL ARSENAL'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'fr' ? 'Compétences & Niveaux de Maîtrise' : 'Skills & Mastery Levels'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'fr'
              ? "Une cartographie claire entre technologies éprouvées en projet réel, certifications validées et compétences en cours d'approfondissement."
              : "A transparent map balancing production-tested technologies, official credentials, and active continuous learning."}
          </p>
        </div>

        {/* 4 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.skillsData.map((group, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all shadow-xl"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {getCategoryIcon(group.category[lang])}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {group.category[lang]}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">
                      {group.level}
                    </span>
                  </div>
                </div>
              </div>

              {/* Skill Items */}
              <div className="space-y-4">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-slate-200 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                        {skill.status[lang]}
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 rounded-full bg-slate-800/80 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
