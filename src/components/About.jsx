import React from 'react';
import { User, Milestone, Compass, GraduationCap, Target, HeartHandshake, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About({ lang }) {
  const timeline = [
    {
      year: "2024 - 2025",
      title: { fr: "Fondations & Premiers Systèmes", en: "Foundations & First Systems" },
      description: {
        fr: "Création dès les années de lycée de solutions concrètes pour répondre à des besoins d'entreprises : système de gestion logistique Livra-Cam (QR Codes), site vitrine ETS KAMAL et plateforme ITSM.",
        en: "Engineering concrete business solutions since high school: Livra-Cam logistics system (QR Codes), ETS KAMAL showcase, and enterprise ITSM ticketing."
      }
    },
    {
      year: "2026",
      title: { fr: "Plateforme Tekrin & Accréditations Mondiales", en: "Tekrin Platform & Global Accreditations" },
      description: {
        fr: "Développement d'envergure de la plateforme Tekrin (réseau social & marketplace de techniciens). Obtention successive de 6 certifications officielles délivrées par Cisco et IBM SkillsBuild (Cyber, IA Générative, Python, Réseaux).",
        en: "Major full-scale development of Tekrin platform. Earning 6 official verified certifications from Cisco and IBM SkillsBuild (Cyber, GenAI, Python, Networking)."
      }
    },
    {
      year: { fr: "Aujourd'hui & Futur", en: "Today & Beyond" },
      title: { fr: "Université de Yaoundé 1 & Vision Produit", en: "University of Yaounde 1 & Product Vision" },
      description: {
        fr: "Poursuite d'études en informatique à l'Université de Yaoundé 1. Recherche active de stages, d'alternances et de partenariats technologiques pour concevoir des produits sécurisés et intelligents.",
        en: "Pursuing Computer Science degree at University of Yaounde 1. Actively seeking internships, apprenticeships, and tech ventures to build secure, intelligent software."
      }
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>{lang === 'fr' ? 'PARCOURS & VISION' : 'JOURNEY & VISION'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'fr' ? 'À Propos d\'Ibrahim Soudess' : 'About Ibrahim Soudess'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio card (5 cols) */}
          <div className="lg:col-span-5 glass-card p-8 rounded-2xl border border-white/10 shadow-2xl space-y-6">
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-lg shadow-emerald-950/50 bg-slate-900">
              <img
                src="/profile.jpeg"
                alt={portfolioData.personal.fullName}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                {portfolioData.personal.fullName}
              </h3>
              <p className="text-xs font-mono text-emerald-400 mt-1">
                {portfolioData.personal.title[lang]}
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {portfolioData.personal.bio[lang]}
            </p>

            <div className="pt-4 border-t border-white/5 space-y-2 text-xs text-slate-400 font-mono">
              <div className="flex items-center justify-between">
                <span>{lang === 'fr' ? 'Statut :' : 'Status:'}</span>
                <span className="text-white font-medium">{lang === 'fr' ? 'Étudiant en Informatique' : 'CS Student'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>{lang === 'fr' ? 'Université :' : 'University:'}</span>
                <span className="text-cyan-400 font-medium">{portfolioData.personal.university}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>{lang === 'fr' ? 'Localisation :' : 'Location:'}</span>
                <span className="text-white font-medium">{portfolioData.personal.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>{lang === 'fr' ? 'Disponibilité :' : 'Availability:'}</span>
                <span className="text-emerald-400 font-semibold">{lang === 'fr' ? 'Ouvert aux opportunités' : 'Open to opportunities'}</span>
              </div>
            </div>

            <a
              href="/cv.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-semibold transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === 'fr' ? 'Consulter & Imprimer mon CV (A4)' : 'View & Print Resume (A4)'}</span>
            </a>
          </div>

          {/* Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>{lang === 'fr' ? 'Étapes Marquantes du Parcours' : 'Key Journey Milestones'}</span>
            </h3>

            <div className="relative pl-6 border-l-2 border-emerald-500/30 space-y-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#07090e] border-2 border-emerald-400 group-hover:scale-125 transition-transform"></div>

                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-1">
                    {typeof item.year === 'object' ? item.year[lang] : item.year}
                  </span>

                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.title[lang]}
                  </h4>

                  <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
