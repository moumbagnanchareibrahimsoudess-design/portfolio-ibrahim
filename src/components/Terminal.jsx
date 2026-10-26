import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Maximize2, Minimize2, Check, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Terminal({ lang }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: lang === 'fr' 
        ? "Session shell initialisée. Tapez 'help' ou cliquez sur les commandes rapides ci-dessous."
        : "Shell session initialized. Type 'help' or click quick commands below."
    }
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText) => {
    const rawCmd = (cmdText || input).trim();
    if (!rawCmd) return;

    const lower = rawCmd.toLowerCase();
    const newHistory = [...history, { type: 'user', text: rawCmd }];

    switch (lower) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: lang === 'fr' 
            ? "Commandes disponibles :\n  • whoami    : Présentation d'Ibrahim Soudess\n  • certs     : Afficher mes 6 certifications IBM & Cisco\n  • projects  : Découvrir mes systèmes (Tekrin, ITSM, Livra-Cam...)\n  • skills    : Voir mon arsenal technique\n  • contact   : Informations de contact direct\n  • sudo      : Tenter une élévation de privilèges\n  • clear     : Effacer l'écran"
            : "Available commands:\n  • whoami    : About Ibrahim Soudess\n  • certs     : Display my 6 IBM & Cisco certifications\n  • projects  : Discover my systems (Tekrin, ITSM, Livra-Cam...)\n  • skills    : View technical arsenal\n  • contact   : Direct contact details\n  • sudo      : Attempt privilege escalation\n  • clear     : Clear screen"
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `${portfolioData.personal.fullName}\n${portfolioData.personal.title[lang]}\n${portfolioData.personal.bio[lang]}`
        });
        break;

      case 'certs':
        const certList = portfolioData.certifications.map(c => `  ✓ ${c.name} — ${c.issuer} (${c.date})`).join('\n');
        newHistory.push({
          type: 'output',
          text: (lang === 'fr' ? "Certifications Officielles Vérifiées (Credly) :\n" : "Official Verified Credentials (Credly):\n") + certList
        });
        break;

      case 'projects':
        const projList = portfolioData.projects.map(p => `  • [${p.title}] : ${p.subtitle[lang]} (Stack: ${p.technologies.slice(0, 3).join(', ')})`).join('\n');
        newHistory.push({
          type: 'output',
          text: (lang === 'fr' ? "Systèmes & Projets majeurs :\n" : "Engineered Systems & Major Projects:\n") + projList
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: lang === 'fr'
            ? "Arsenal Technique :\n  • Sécurité : CSRF, Requêtes préparées SQLi, XSS, Audit Logs, Packet Tracer\n  • IA & Data : LLMs, Prompt Engineering, Python, IBM Granite, AI Ethics\n  • Backend : PHP 8, MySQL/MariaDB, PDO, Architecture MVC, QR Code\n  • Frontend : Tailwind CSS, JavaScript ES6+, HTML5, React"
            : "Technical Arsenal:\n  • Security: CSRF mitigation, Prepared SQL queries, XSS sanitization, Audit Logs, Packet Tracer\n  • AI & Data: LLMs, Prompt Engineering, Python, IBM Granite, AI Ethics\n  • Backend: PHP 8, MySQL/MariaDB, PDO, MVC Architecture, QR Code Engine\n  • Frontend: Tailwind CSS, JavaScript ES6+, HTML5, React"
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email: ${portfolioData.personal.email}\nGitHub: ${portfolioData.personal.github}\nCredly: ${portfolioData.personal.credly}`
        });
        break;

      case 'sudo':
      case 'sudo su':
        newHistory.push({
          type: 'error',
          text: lang === 'fr' 
            ? "ALERTE SÉCURITÉ : Tentative d'élévation non autorisée. Incident consigné dans le journal d'audit !" 
            : "SECURITY ALERT: Unauthorized escalation attempt. Incident recorded in audit log!"
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: lang === 'fr' 
            ? `Commande non reconnue: '${rawCmd}'. Tapez 'help' pour la liste.`
            : `Unknown command: '${rawCmd}'. Type 'help' for available commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand();
    }
  };

  const quickCommands = ['whoami', 'certs', 'projects', 'skills', 'contact'];

  return (
    <div className={`w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-emerald-500/30 bg-[#080d14]/90 backdrop-blur-md shadow-2xl shadow-emerald-950/40 font-mono text-xs transition-all duration-300 ${isExpanded ? 'scale-105' : ''}`}>
      
      {/* Terminal Title Bar */}
      <div className="bg-[#0f1724] px-4 py-2.5 flex items-center justify-between border-b border-white/10 select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-slate-400 text-[11px] flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
            ibrahim@security-lab:~
          </span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="hover:text-slate-200 transition-colors p-1"
            title="Agrandir / Réduire"
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-64 overflow-y-auto space-y-2 text-slate-300 scrollbar-thin">
        {history.map((item, idx) => (
          <div key={idx} className="leading-relaxed">
            {item.type === 'system' && (
              <div className="text-slate-500 italic flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>{item.text}</span>
              </div>
            )}
            {item.type === 'user' && (
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="text-cyan-400 font-bold">$</span>
                <span className="text-white font-semibold">{item.text}</span>
              </div>
            )}
            {item.type === 'output' && (
              <pre className="text-slate-300 whitespace-pre-wrap font-mono pl-4 border-l border-emerald-500/30 my-1 py-0.5">
                {item.text}
              </pre>
            )}
            {item.type === 'error' && (
              <div className="text-red-400 pl-4 border-l border-red-500/30">
                {item.text}
              </div>
            )}
          </div>
        ))}

        {/* Input line */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-emerald-400 font-bold">ibrahim@lab:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={lang === 'fr' ? "Tapez 'help'..." : "Type 'help'..."}
            className="flex-1 bg-transparent border-none outline-none text-emerald-300 placeholder-slate-600 focus:ring-0 text-xs font-mono"
            autoFocus
          />
        </div>
        <div ref={bottomRef} />
      </div>

      {/* Quick Clickable Commands */}
      <div className="px-4 py-2 bg-[#0c121d] border-t border-white/5 flex flex-wrap items-center gap-2">
        <span className="text-[10px] text-slate-500 uppercase font-semibold mr-1">
          {lang === 'fr' ? 'Raccourcis :' : 'Quick Run:'}
        </span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 rounded text-[11px] bg-slate-800/80 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 border border-white/5 hover:border-emerald-500/30 transition-all font-mono"
          >
            {cmd}
          </button>
        ))}
        <button
          onClick={() => handleCommand('clear')}
          className="ml-auto px-2 py-0.5 rounded text-[10px] text-slate-500 hover:text-slate-300 transition-colors"
        >
          {lang === 'fr' ? 'Effacer' : 'Clear'}
        </button>
      </div>

    </div>
  );
}
