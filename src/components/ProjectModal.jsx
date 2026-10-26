import React from 'react';
import { X, ExternalLink, Shield, CheckCircle2, Layers, Cpu } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';

export default function ProjectModal({ project, lang, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d131f] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-emerald-950/60 scrollbar-thin">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium mb-3 border border-emerald-500/20">
            <span>{project.badge}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            {project.subtitle[lang]}
          </p>
        </div>

        {/* Detailed Description */}
        <div className="mb-6">
          <h4 className="text-xs uppercase font-mono text-slate-400 font-semibold mb-2 flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            {lang === 'fr' ? 'Contexte & Objectifs' : 'Context & Objectives'}
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
            {project.description[lang]}
          </p>
        </div>

        {/* Key Highlights */}
        <div className="mb-6">
          <h4 className="text-xs uppercase font-mono text-slate-400 font-semibold mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            {lang === 'fr' ? 'Fonctionnalités Clés & Logique Métier' : 'Key Highlights & Business Logic'}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security / Robustness Box */}
        {project.securityFeatures && (
          <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/30">
            <h4 className="text-xs uppercase font-mono text-emerald-400 font-bold mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              {lang === 'fr' ? 'Mesures de Sécurité & Robustesse' : 'Security Measures & Hardening'}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.securityFeatures}
            </p>
          </div>
        )}

        {/* Technologies Stack */}
        <div className="mb-8">
          <h4 className="text-xs uppercase font-mono text-slate-400 font-semibold mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-purple-400" />
            {lang === 'fr' ? 'Technologies Utilisées' : 'Technologies Used'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-200 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions / Links */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-white/10 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>{lang === 'fr' ? 'Voir sur GitHub' : 'View on GitHub'}</span>
          </a>

          <button
            onClick={onClose}
            className="ml-auto px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
          >
            {lang === 'fr' ? 'Fermer' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
}
