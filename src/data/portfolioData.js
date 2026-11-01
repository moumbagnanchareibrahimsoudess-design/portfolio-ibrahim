export const portfolioData = {
  personal: {
    name: "Ibrahim Soudess",
    fullName: "Moumbagna Nchare Ibrahim Soudess",
    title: {
      fr: "Étudiant en Informatique & Bâtisseur Tech",
      en: "Computer Science Student & Tech Builder"
    },
    tagline: {
      fr: "À la croisée de la Cybersécurité, de l'Intelligence Artificielle et de l'Entrepreneuriat.",
      en: "At the crossroads of Cybersecurity, Artificial Intelligence, and Entrepreneurship."
    },
    bio: {
      fr: "Jeune étudiant passionné par l'architecture logicielle sécurisée, les applications concrètes de l'IA et la création de produits innovants. Dès le lycée, j'ai conçu et développé des systèmes d'information complets (plateformes web, outils de gestion logistique avec QR code, helpdesk ITSM sécurisé contre les failles CSRF/SQLi/XSS). Titulaire de 6 certifications officielles délivrées par Cisco et IBM SkillsBuild, je combine rigueur technique, curiosité permanente et vision produit.",
      en: "Young student passionate about secure software architecture, practical AI applications, and building innovative tech products. Since high school, I have engineered full-featured systems (web platforms, logistics QR tracking tools, ITSM helpdesks hardened against CSRF/SQLi/XSS). Holding 6 official certifications from Cisco and IBM SkillsBuild, I combine technical rigor, continuous learning, and product mindset."
    },
    location: "Yaoundé, Cameroun",
    phone: "+237 689 98 18 51",
    whatsapp: "https://wa.me/237689981851",
    university: "Université de Yaoundé 1",
    email: "ibrahimsoudess7@gmail.com",
    github: "https://github.com/moumbagnanchareibrahimsoudess-design",
    credly: "https://www.credly.com/users/moumbagna-nchare-ibrahim-soudess/badges",
    linkedin: "https://www.linkedin.com/in/moumbagna-nchare-ibrahim-soudess-85072a390",
    fiverr: "https://fr.fiverr.com/ibrahimsoudes1",
    facebook: "https://www.facebook.com/ibrahim.soudess.ibrahim.soudess",
    x: "https://x.com/MSoudess98608",
    instagram: "https://www.instagram.com/ibrahimsoudess/",
    availableFor: {
      fr: "Stages, Alternances, Projets Innovants & Collaborations",
      en: "Internships, Apprenticeships, Innovative Projects & Collaborations"
    }
  },

  stats: [
    { label: { fr: "Projets Systèmes Conçus", en: "Engineered Systems" }, value: "4+" },
    { label: { fr: "Certifications Officielles", en: "Official Certifications" }, value: "6" },
    { label: { fr: "Badges Cisco & IBM", en: "Cisco & IBM Badges" }, value: "100%" },
    { label: { fr: "Sécurité & Robustesse", en: "Security-First Focus" }, value: "A+" }
  ],

  pillars: [
    {
      id: "cyber",
      icon: "ShieldCheck",
      title: { fr: "Cybersécurité & Défense", en: "Cybersecurity & Defense" },
      subtitle: { fr: "Sécurisation applicative & Réseau", en: "Application & Network Security" },
      description: {
        fr: "Conception orientée sécurité : protection contre les vulnérabilités majeures (OWASP, injections SQL, failles CSRF, XSS), traçabilité avec logs d'audit, bases de réseaux informatiques (Cisco) et cryptographie.",
        en: "Security-first architecture: mitigation of critical vulnerabilities (OWASP, SQLi, CSRF, XSS), audit trail logging, computer networking fundamentals (Cisco), and applied cryptography."
      },
      tags: ["OWASP", "CSRF Protection", "PDO Prepared", "Audit Logs", "Packet Tracer", "Threat Defense"]
    },
    {
      id: "ai",
      icon: "Brain",
      title: { fr: "Intelligence Artificielle", en: "Artificial Intelligence" },
      subtitle: { fr: "IA Générative, LLMs & Machine Learning", en: "Generative AI, LLMs & ML" },
      description: {
        fr: "Maîtrise des concepts d'IA générative et de prompt engineering (certifié IBM & Cisco). Intégration de modèles intelligents, analyse prédictive et automatisation de processus complexes.",
        en: "Proficiency in generative AI concepts and advanced prompt engineering (certified by IBM & Cisco). Integration of intelligent models, predictive workflows, and automated pipeline solutions."
      },
      tags: ["Generative AI", "Prompt Engineering", "IBM Granite", "LLMs", "Machine Learning", "Python"]
    },
    {
      id: "entrepreneurship",
      icon: "Rocket",
      title: { fr: "Entrepreneuriat & Produit", en: "Entrepreneurship & Product" },
      subtitle: { fr: "De l'Idée au Déploiement Métier", en: "From Idea to Production Solution" },
      description: {
        fr: "Création de plateformes centrées sur le besoin utilisateur réel : réseaux de professionnels, systèmes logistiques à QR Code, outils de ticketing et d'analyse financière pour entreprises.",
        en: "Building platforms focused on real-world market needs: professional service networks, QR logistics tracking, IT ticketing, and enterprise data analytics."
      },
      tags: ["Product Vision", "UI/UX", "Problem Solving", "MVP to Scale", "Market Fit"]
    }
  ],

  certifications: [
    {
      id: "ibm-cyber",
      name: "Cybersecurity Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "Octobre 2026",
      image: "https://images.credly.com/images/50b96632-6cbb-40b7-ac0e-b83f49ff7f94/image.png",
      url: "https://www.credly.com/org/ibm-skillsbuild/badge/cybersecurity-fundamentals",
      category: "cyber",
      skills: ["Cryptography", "Threat Analysis", "Incident Response", "Vulnerability Management", "Social Engineering"]
    },
    {
      id: "ibm-genai",
      name: "Getting Started with Generative AI",
      issuer: "IBM SkillsBuild",
      date: "Octobre 2026",
      image: "https://images.credly.com/images/0889a0f2-f9c7-41db-bc68-b2e7f7dd0238/BadgeEmblem_GettingStartedWithGenerativeAI.png",
      url: "https://www.credly.com/org/ibm-skillsbuild/badge/getting-started-with-generative-ai",
      category: "ai",
      skills: ["Generative AI", "Large Language Models", "Prompt Engineering", "IBM Granite", "AI Ethics"]
    },
    {
      id: "cisco-python",
      name: "Python Essentials 1",
      issuer: "Cisco & OpenEDG Python Institute",
      date: "Septembre 2026",
      image: "https://images.credly.com/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/image.png",
      url: "https://www.credly.com/org/cisco/badge/python-essentials-1.1",
      category: "dev",
      skills: ["Algorithmic Thinking", "Procedural Programming", "Python Standard Library", "Data Structures"]
    },
    {
      id: "cisco-net",
      name: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "Juillet 2026",
      image: "https://images.credly.com/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/image.png",
      url: "https://www.credly.com/org/cisco/badge/networking-basics",
      category: "cyber",
      skills: ["IPv4 / IPv6", "Protocols & Standards", "Packet Tracer", "Network Architecture", "Wireless Access"]
    },
    {
      id: "cisco-ai",
      name: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy",
      date: "Juillet 2026",
      image: "https://images.credly.com/images/e2d12302-10f9-40d4-8ff1-066a7008b61d/blob",
      url: "https://www.credly.com/org/cisco/badge/introduction-to-modern-ai",
      category: "ai",
      skills: ["Chatbots & Agents", "Computer Vision", "Machine Translation", "AI Capabilities & Pitfalls"]
    },
    {
      id: "cisco-cyber",
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "Mars 2026",
      image: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
      url: "https://www.credly.com/org/cisco/badge/introduction-to-cybersecurity",
      category: "cyber",
      skills: ["Threat Detection", "Cyber Best Practices", "Network Vulnerabilities", "Privacy & Confidentiality"]
    }
  ],

  projects: [
    {
      id: "tekrin",
      title: "Tekrin",
      subtitle: {
        fr: "Réseau social & marketplace de proximité pour techniciens et professionnels",
        en: "Proximity social network & marketplace for skilled technicians"
      },
      category: "startup",
      featured: true,
      badge: "Plateforme Web & Entrepreneuriat",
      description: {
        fr: "Plateforme web complète favorisant l'économie locale et la visibilité des artisans et techniciens. Comprend un système d'onboarding par étapes (wizard), un flux d'actualités dynamique (feed), une vitrine de réalisations avec avis vérifiés, ainsi qu'un espace annonceur et gestionnaire de demandes d'intervention.",
        en: "Full-scale web platform driving local economy and visibility for skilled technicians. Features multi-step onboarding wizard, dynamic feed, portfolio showcase with verified ratings, advertiser management, and incoming service requests."
      },
      highlights: [
        "Architecture modulaire complète (profils, feed, annonces, avis)",
        "Onboarding guidé multi-étapes pour les professionnels",
        "Système de réputation et d'évaluation avec notation",
        "Gestionnaire de campagnes publicitaires internes"
      ],
      technologies: ["PHP 8", "MySQL", "JavaScript Vanilla", "CSS3 / Modern UI", "Sessions sécurisées"],
      github: "https://github.com/moumbagnanchareibrahimsoudess-design/tekrin",
      demo: "#",
      type: "Application Web Complète",
      securityFeatures: "Authentification robuste, assainissement des entrées, contrôle des rôles (utilisateurs / techniciens)"
    },
    {
      id: "itsm-kamal",
      title: "Support Interne ITSM (ETS KAMAL)",
      subtitle: {
        fr: "Système de billetterie & helpdesk d'entreprise conforme aux normes ITSM",
        en: "Enterprise IT helpdesk & ticketing system following ITSM standards"
      },
      category: "security",
      featured: true,
      badge: "Cybersécurité & ITSM",
      description: {
        fr: "Solution de gestion des incidents et demandes internes conçue pour ETS KAMAL. Intègre un algorithme de calcul automatique de priorité (Impact × Urgence), un tableau de bord analytique temps réel avec graphiques, et un système d'export certifié PDF/CSV.",
        en: "Internal incident & service request management system designed for ETS KAMAL. Incorporates real-time priority matrix calculation (Impact × Urgency), interactive analytics dashboard with Chart.js, and certified PDF/CSV exports."
      },
      highlights: [
        "Matrice automatique de priorité ITSM en temps réel",
        "Dashboard interactif avec visualisations Chart.js",
        "Export instantané en fiches d'intervention PDF (html2pdf.js) et CSV",
        "Traçabilité totale des interventions via table de logs d'audit"
      ],
      technologies: ["PHP (MySQLi)", "MySQL / MariaDB", "Tailwind CSS", "Chart.js", "html2pdf.js"],
      github: "https://github.com/moumbagnanchareibrahimsoudess-design/gestion-demande-interne",
      demo: "#",
      type: "Outil Métier & Cybersécurité",
      securityFeatures: "Jetons CSRF, requêtes préparées anti-SQLi, sanitization htmlspecialchars anti-XSS, logs d'audit immuables"
    },
    {
      id: "livra-cam",
      title: "Livra-Cam",
      subtitle: {
        fr: "Solution logistique de suivi d'expéditions et génération de QR Codes",
        en: "Logistics tracking solution with dynamic QR Code dispatch"
      },
      category: "logistics",
      featured: true,
      badge: "Logistique & Automatisation",
      description: {
        fr: "Application de gestion des flux de livraison de colis. Génération dynamique de QR Codes pour chaque colis, impression d'étiquettes de bordereaux normalisées et génération automatique de rapports quotidiens d'activité.",
        en: "Parcel logistics and delivery workflow automation system. Generates dynamic QR Codes per parcel, prints standardized logistics labels, and produces daily automated management reports."
      },
      highlights: [
        "Génération instantanée de QR Codes de traçabilité",
        "Mise en page d'impression d'étiquettes d'expédition au format standard",
        "Rapports quotidiens d'activité et statistiques de livraison",
        "Connexion PDO sécurisée sans émulation de requêtes préparées"
      ],
      technologies: ["PHP (PDO)", "MySQL", "QR Code Engine", "CSS Print Media", "JavaScript"],
      github: "https://github.com/moumbagnanchareibrahimsoudess-design/livra-cam",
      demo: "#",
      type: "Système Logistique",
      securityFeatures: "PDO natif sans émulation (protection stricte contre les injections SQL), masquage des erreurs sensibles"
    },
    {
      id: "ets-kamal-showcase",
      title: "ETS KAMAL Vitrine",
      subtitle: {
        fr: "Site vitrine pour distributeur d'équipements informatiques et bureautiques",
        en: "Corporate showcase for IT equipment and printing solutions"
      },
      category: "web",
      featured: false,
      badge: "Web & E-Commerce Vitrine",
      description: {
        fr: "Vitrine web élégante mettant en valeur un catalogue de solutions bureautiques et matériels informatiques de marques reconnues (Canon, Dell, HP, Ricoh).",
        en: "Modern web showcase presenting office printing equipment and computer hardware catalog for major enterprise brands (Canon, Dell, HP, Ricoh)."
      },
      highlights: [
        "Interface responsive moderne et épurée",
        "Mise en avant des gammes de produits et fiches techniques",
        "Formulaire de prise de contact et demande de devis"
      ],
      technologies: ["HTML5", "CSS3 Custom", "JavaScript Vanilla"],
      github: "https://github.com/Ibrah656im/ets-kamal",
      demo: "#",
      type: "Site Vitrine",
      securityFeatures: "Bonnes pratiques de structure HTML5 et validation de formulaires"
    },
    {
      id: "cyber-ai-lab",
      title: "Cyber & AI Innovation Lab",
      subtitle: {
        fr: "Laboratoire R&D : expérimentations en sécurité défensive, pentest & agents IA",
        en: "R&D Lab: defensive security experiments, pentesting labs & AI agents"
      },
      category: "rd",
      featured: true,
      badge: "R&D & Expérimentations",
      description: {
        fr: "Espace expérimental regroupant mes scripts Python d'automatisation, simulations d'analyse réseau (Cisco Packet Tracer), veille sur les vulnérabilités CVE et conception de prompts avancés pour agents IA.",
        en: "Experimental workshop gathering Python automation scripts, Cisco Packet Tracer network security simulations, CVE vulnerability research, and advanced LLM agent prompting frameworks."
      },
      highlights: [
        "Scripts Python d'analyse et de traitement de données réseau",
        "Simulations de topologies sécurisées sous Cisco Packet Tracer",
        "Exploration de modèles d'IA générative (IBM Granite, LLMs open-source)",
        "Veille proactive en cybersécurité et analyse de vecteurs d'attaque"
      ],
      technologies: ["Python 3", "Cisco Packet Tracer", "Generative AI", "Linux / Bash", "Wireshark"],
      github: "https://github.com/Ibrah656im",
      demo: "#",
      type: "Projet de Recherche & Pratique",
      securityFeatures: "Analyse de menaces, principes de moindre privilège, chiffrement"
    }
  ],

  skillsData: [
    {
      category: { fr: "Cybersécurité & Réseaux", en: "Cybersecurity & Networking" },
      level: "Avancé / Certifié",
      icon: "Shield",
      color: "emerald",
      skills: [
        { name: "Protection CSRF & XSS", level: 90, status: { fr: "Maîtrisé", en: "Proficient" } },
        { name: "Requêtes Préparées & SQLi Defense", level: 92, status: { fr: "Maîtrisé", en: "Proficient" } },
        { name: "Protocoles & Réseaux (IPv4/TCP/UDP)", level: 85, status: { fr: "Certifié Cisco", en: "Cisco Certified" } },
        { name: "Cisco Packet Tracer", level: 82, status: { fr: "Pratique", en: "Practiced" } },
        { name: "Audit Logs & Traçabilité", level: 88, status: { fr: "Maîtrisé", en: "Proficient" } },
        { name: "Fondations Cryptographie & Menaces", level: 85, status: { fr: "Certifié IBM", en: "IBM Certified" } }
      ]
    },
    {
      category: { fr: "Intelligence Artificielle & Data", en: "AI & Data" },
      level: "Certifié & En expansion",
      icon: "Cpu",
      color: "purple",
      skills: [
        { name: "Prompt Engineering Avancé", level: 90, status: { fr: "Certifié IBM", en: "IBM Certified" } },
        { name: "Large Language Models (LLMs)", level: 85, status: { fr: "Certifié IBM", en: "IBM Certified" } },
        { name: "Python pour la Data & Algorithmes", level: 86, status: { fr: "Certifié Cisco", en: "Cisco Certified" } },
        { name: "Éthique de l'IA & Risk Atlas", level: 88, status: { fr: "Certifié IBM", en: "IBM Certified" } },
        { name: "Agents Intelligents & Chatbots", level: 82, status: { fr: "Certifié Cisco", en: "Cisco Certified" } }
      ]
    },
    {
      category: { fr: "Développement Backend & BDD", en: "Backend & Databases" },
      level: "Pratique Solide & Production",
      icon: "Database",
      color: "blue",
      skills: [
        { name: "PHP 8 (PDO / MySQLi)", level: 92, status: { fr: "Confirmé", en: "Advanced" } },
        { name: "MySQL / MariaDB", level: 90, status: { fr: "Confirmé", en: "Advanced" } },
        { name: "Architecture MVC & ITSM", level: 85, status: { fr: "Confirmé", en: "Advanced" } },
        { name: "Gestion des Sessions & Authentification", level: 90, status: { fr: "Confirmé", en: "Advanced" } },
        { name: "Génération QR Code & Rapports PDF/CSV", level: 92, status: { fr: "Confirmé", en: "Advanced" } }
      ]
    },
    {
      category: { fr: "Frontend & UI/UX Moderne", en: "Frontend & Modern UI/UX" },
      level: "Pratique & Moderne",
      icon: "Code",
      color: "cyan",
      skills: [
        { name: "HTML5 sémantique & CSS3", level: 95, status: { fr: "Confirmé", en: "Advanced" } },
        { name: "Tailwind CSS", level: 90, status: { fr: "Confirmé", en: "Advanced" } },
        { name: "JavaScript Moderne (ES6+)", level: 82, status: { fr: "Intermédiaire+", en: "Intermediate+" } },
        { name: "React 18 & Vite", level: 75, status: { fr: "En apprentissage actif", en: "Active Learning" } },
        { name: "Chart.js & Data Viz", level: 85, status: { fr: "Confirmé", en: "Advanced" } }
      ]
    }
  ]
};
