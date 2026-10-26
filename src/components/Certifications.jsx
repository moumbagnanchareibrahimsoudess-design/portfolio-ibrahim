import React from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck, Sparkles, Verified } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications({ lang }) {
  return (
    <section id="certifications" className="py-24 relative bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'fr' ? 'ACCRÉDITATIONS OFFICIELLES' : 'OFFICIAL ACCREDITATIONS'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'fr' ? '6 Certifications Vérifiées (Credly)' : '6 Verified Credentials (Credly)'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'fr'
              ? "Délivrées par Cisco Networking Academy, IBM SkillsBuild et le Python Institute. Cliquez sur chaque badge pour accéder à la vérification numérique en direct."
              : "Issued by Cisco Networking Academy, IBM SkillsBuild, and Python Institute. Click any credential for direct digital live verification."}
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {portfolioData.certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Badge Image + Issuer Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 shrink-0 bg-slate-900 rounded-xl p-2 border border-white/10 group-hover:border-emerald-500/40 transition-colors flex items-center justify-center">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-contain filter drop-shadow-md"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-400">
                      <Verified className="w-3.5 h-3.5" />
                      {cert.issuer}
                    </span>
                    <h3 className="text-base font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors mt-0.5">
                      {cert.name}
                    </h3>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Verified Skills */}
                <div className="pt-3 border-t border-white/5 mb-4">
                  <span className="text-[10px] uppercase font-mono text-slate-500 font-semibold block mb-2">
                    {lang === 'fr' ? 'Compétences validées :' : 'Validated skills:'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.slice(0, 4).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500">
                        +{cert.skills.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Verify on Credly CTA */}
              <div className="pt-3 border-t border-white/5">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                >
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'fr' ? 'Vérifier sur Credly' : 'Verify on Credly'}</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Global Credly Profile Banner */}
        <div className="max-w-3xl mx-auto glass-card p-6 rounded-2xl border border-emerald-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'fr' ? 'Profil Credly Public Vérifié' : 'Public Verified Credly Profile'}</span>
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Moumbagna Nchare Ibrahim Soudess • Cisco Networking Academy & IBM SkillsBuild
            </p>
          </div>
          <a
            href={portfolioData.personal.credly}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-xs shrink-0 hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            <span>{lang === 'fr' ? 'Voir mon profil Credly' : 'View Credly Profile'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
