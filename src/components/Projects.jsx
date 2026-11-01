import React, { useState } from 'react';
import { Rocket, ArrowUpRight, Shield, Layers, Eye, Sparkles } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects({ lang }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = [
    { id: 'all', label: { fr: 'Tous les Projets', en: 'All Projects' } },
    { id: 'security', label: { fr: 'Cybersécurité & Threat Intel', en: 'Cybersecurity & Threat Intel' } },
    { id: 'startup', label: { fr: 'Plateforme Web & Startup', en: 'Platform & Startup' } },
    { id: 'logistics', label: { fr: 'Logistique & Traçabilité', en: 'Logistics & Tracking' } },
    { id: 'web', label: { fr: 'Sites Vitrines', en: 'Web Showcases' } }
  ];

  const filteredProjects = activeFilter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Rocket className="w-3.5 h-3.5" />
            <span>{lang === 'fr' ? 'RÉALISATIONS CONCRÈTES' : 'PROVEN IMPLEMENTATIONS'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'fr' ? 'Mes Projets & Systèmes Développés' : 'Engineered Projects & Systems'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'fr'
              ? "Des solutions complètes intégrant bases de données relationnelles, logique métier complexe et sécurité applicative native."
              : "End-to-end applications combining relational databases, complex business logic, and native application security."}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeFilter === tab.id
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5'
              }`}
            >
              {tab.label[lang]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border border-white/10 group"
            >
              <div>
                {/* Badge & Type */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {project.badge}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">
                  {project.subtitle[lang]}
                </p>

                {/* Security highlight tag if present */}
                {project.securityFeatures && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-emerald-300 text-[11px] mb-4 font-mono">
                    <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{lang === 'fr' ? 'Sécurité durcie (CSRF/SQLi/XSS)' : 'Hardened Security'}</span>
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[11px] font-mono text-slate-500">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{lang === 'fr' ? 'Étude de cas' : 'Case study'}</span>
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Code source"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for detailed view */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            lang={lang}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
