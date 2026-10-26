import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Rocket, ArrowDown, Award, Sparkles, FileText, Send } from 'lucide-react';
import Terminal from './Terminal';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ lang }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width - 0.5) * 60;
    const y = ((clientY - rect.top) / rect.height - 0.5) * 60;
    setMousePos({ x, y });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient"
    >
      
      {/* Background cyber grid & glow effects */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none"></div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* 3D Glass Emblem Dynamique avec Lévitation & Parallaxe Interactif */}
      <motion.div
        animate={{
          y: [-18, 18, -18],
          rotate: [-3.5, 3.5, -3.5],
        }}
        transition={{
          y: { repeat: Infinity, duration: 5.5, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 7, ease: "easeInOut" },
        }}
        style={{
          transform: `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))`
        }}
        className="absolute top-1/2 left-1/2 w-[460px] h-[460px] sm:w-[650px] sm:h-[650px] pointer-events-none select-none opacity-30 mix-blend-screen -z-0 transition-transform duration-300 ease-out"
      >
        <div className="relative w-full h-full">
          {/* Halo caustique tournant */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-emerald-500/25 via-cyan-500/20 to-purple-500/15 blur-2xl animate-spin" style={{ animationDuration: '24s' }}></div>
          <img
            src="/glass-emblem.jpg"
            alt="3D Glass Cyber Shield Emblem"
            className="relative w-full h-full object-contain rounded-full filter drop-shadow-[0_0_90px_rgba(16,185,129,0.4)]"
          />
        </div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-8 backdrop-blur-sm animate-pulse-slow">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>{portfolioData.personal.availableFor[lang]}</span>
        </div>

        {/* Profile Photo Avatar */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-6 group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 blur-md opacity-75 group-hover:opacity-100 transition-opacity animate-pulse-slow"></div>
          <img
            src="/profile.jpeg"
            alt={portfolioData.personal.fullName}
            className="relative w-full h-full object-cover rounded-full border-2 border-emerald-400/80 shadow-2xl bg-slate-900"
          />
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-[#07090e] rounded-full shadow-md" title="Disponible"></span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
          <span className="block">{portfolioData.personal.name}</span>
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 text-3xl sm:text-5xl lg:text-6xl">
            {lang === 'fr' 
              ? "Cybersécurité • IA • Entrepreneuriat" 
              : "Cybersecurity • AI • Entrepreneurship"}
          </span>
        </h1>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-normal mb-10 leading-relaxed">
          {portfolioData.personal.tagline[lang]}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-16">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all flex items-center gap-2"
          >
            <Rocket className="w-4 h-4" />
            <span>{lang === 'fr' ? 'Explorer mes Projets' : 'Explore My Projects'}</span>
          </a>

          <a
            href="/cv.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white font-semibold text-sm border border-white/10 hover:border-cyan-500/40 transition-all flex items-center gap-2 backdrop-blur-sm"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>{lang === 'fr' ? 'Consulter mon CV (A4)' : 'View Resume (A4)'}</span>
          </a>

          <a
            href="#certifications"
            className="px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-white font-semibold text-sm border border-white/10 hover:border-emerald-500/40 transition-all flex items-center gap-2 backdrop-blur-sm"
          >
            <Award className="w-4 h-4 text-emerald-400" />
            <span>{lang === 'fr' ? '6 Certifications' : '6 Certifications'}</span>
          </a>

          <a
            href="#contact"
            className="px-5 py-3 rounded-xl bg-transparent hover:bg-white/5 text-slate-300 hover:text-white font-medium text-sm border border-slate-700/80 transition-all flex items-center gap-2"
          >
            <Send className="w-4 h-4 text-emerald-400" />
            <span>{lang === 'fr' ? 'Contact' : 'Contact'}</span>
          </a>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14">
          {portfolioData.stats.map((stat, idx) => (
            <div key={idx} className="glass-card p-4 rounded-xl text-center border border-white/5 hover:border-emerald-500/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300 font-mono">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                {stat.label[lang]}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Terminal */}
        <div className="mt-8">
          <Terminal lang={lang} />
        </div>

      </div>
    </section>
  );
}
