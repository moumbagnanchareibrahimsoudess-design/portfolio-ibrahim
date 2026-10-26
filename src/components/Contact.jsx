import React, { useState } from 'react';
import { Mail, Award, Send, Check, Copy, MessageSquare, Sparkles, Phone, MapPin, GraduationCap } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ lang }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xrpppbjl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 }
        });
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMessage(
          data?.errors?.map(err => err.message).join(', ') ||
          (lang === 'fr' 
            ? "Une erreur est survenue. N'hésitez pas à m'écrire directement à ibrahimsoudess7@gmail.com" 
            : "An error occurred. Feel free to email me directly at ibrahimsoudess7@gmail.com")
        );
      }
    } catch (err) {
      setErrorMessage(
        lang === 'fr' 
          ? "Erreur réseau. Vous pouvez m'écrire directement par email à ibrahimsoudess7@gmail.com" 
          : "Network error. You can email me directly at ibrahimsoudess7@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>{lang === 'fr' ? 'ENTRER EN CONTACT' : 'GET IN TOUCH'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'fr' ? 'Discutons de Votre Projet ou d\'une Collaboration' : 'Let\'s Discuss a Project or Opportunity'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'fr'
              ? "Disponible pour des stages, des missions de développement, des défis en cybersécurité ou des projets d'innovation IA."
              : "Available for internships, software development projects, cybersecurity challenges, or innovative AI collaborations."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Info Side (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'fr' ? 'Canaux Directs' : 'Direct Channels'}</span>
              </h3>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2">
                <span className="text-[11px] text-slate-400 font-mono block">
                  {lang === 'fr' ? 'Adresse Email Professionnelle' : 'Professional Email Address'}
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-sm font-mono text-emerald-400 hover:underline truncate"
                  >
                    {portfolioData.personal.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copier l'email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <span className="text-[10px] text-emerald-400 font-mono">
                    ✓ {lang === 'fr' ? 'Email copié dans le presse-papier !' : 'Email copied to clipboard!'}
                  </span>
                )}
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2">
                <span className="text-[11px] text-slate-400 font-mono block">
                  {lang === 'fr' ? 'Téléphone & WhatsApp' : 'Phone & WhatsApp'}
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={portfolioData.personal.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-cyan-400 hover:underline flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{portfolioData.personal.phone}</span>
                  </a>
                  <a
                    href={portfolioData.personal.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-semibold"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Location & University Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1.5 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <GraduationCap className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="font-medium">{portfolioData.personal.university}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{portfolioData.personal.location}</span>
                </div>
              </div>

              {/* Links */}
              <div className="space-y-3 pt-2">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold border border-white/5 transition-all group"
                >
                  <span className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-white" />
                    <span>GitHub (@Ibrah656im)</span>
                  </span>
                  <span className="text-slate-500 group-hover:text-emerald-400 font-mono">→</span>
                </a>

                <a
                  href={portfolioData.personal.credly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold border border-white/5 transition-all group"
                >
                  <span className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span>Credly (6 {lang === 'fr' ? 'Badges' : 'Credentials'})</span>
                  </span>
                  <span className="text-slate-500 group-hover:text-cyan-400 font-mono">→</span>
                </a>
              </div>

            </div>
          </div>

          {/* Form Side (7 cols) */}
          <div className="lg:col-span-7 glass-card p-8 rounded-2xl border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {lang === 'fr' ? 'Message Pris en Compte !' : 'Message Received!'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  {lang === 'fr'
                    ? "Merci pour votre message ! Je vous répondrai dans les plus brefs délais sur votre adresse email."
                    : "Thank you for reaching out! I will respond to your email as soon as possible."}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-4 px-5 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
                >
                  {lang === 'fr' ? 'Envoyer un autre message' : 'Send another message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      {lang === 'fr' ? 'Votre Nom' : 'Your Name'} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Alexandre Dubois"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      {lang === 'fr' ? 'Votre Email' : 'Your Email'} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nom@entreprise.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    {lang === 'fr' ? 'Sujet' : 'Subject'} *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={lang === 'fr' ? 'Ex: Opportunité de Stage / Collaboration Projet' : 'Ex: Internship Opportunity / Project Collaboration'}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    {lang === 'fr' ? 'Votre Message' : 'Your Message'} *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'fr' ? 'Détaillez votre projet ou proposition...' : 'Describe your project or inquiry...'}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-bold text-xs tracking-wide uppercase transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  <span>
                    {isSubmitting
                      ? (lang === 'fr' ? 'Transmission en cours...' : 'Sending...')
                      : (lang === 'fr' ? 'Transmettre le Message' : 'Transmit Message')}
                  </span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
