// Toggle du menu de navigation sur mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Ferme le menu quand un lien est cliqué (utile en navigation par ancres)
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ───────────────────────── Traduction FR / EN ───────────────────────── */

const translations = {
  fr: {
    'meta.title': 'Mohamed Fatnassi — Développeur Front-End',
    'meta.description': "Mohamed Fatnassi, développeur front-end disponible pour des projets et collaborations. HTML, CSS, JavaScript, Tailwind CSS, sites vitrines et interfaces modernes.",
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.services': 'Services',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'nav.cta': 'Me contacter',
    'hero.status': 'Disponible pour des projets & collaborations',
    'hero.eyebrow': 'Développeur Front-End',
    'hero.sub': "Je conçois et j'intègre des interfaces web propres, rapides et accessibles avec HTML, CSS, JavaScript & Tailwind CSS. Actuellement disponible pour des missions freelance, des collaborations ou un poste de développeur front-end, je transforme des idées en pages qui vivent réellement dans le navigateur.",
    'hero.cta1': 'Voir mes projets ↓',
    'hero.cta2': 'Discutons de votre projet',
    'about.label': '01 — Qui suis-je',
    'about.title': 'À propos de moi',
    'about.p1': "Je suis Mohamed Fatnassi, développeur front-end passionné par la création de sites web modernes, interactifs et accessibles. Mon approche repose sur la maîtrise des langages fondamentaux pour concevoir des interfaces intuitives et soignées.",
    'about.p2': "Mon objectif est de continuer à améliorer mes compétences, à construire des projets concrets et à évoluer vers un profil de développeur web complet — tout en restant disponible pour accompagner de nouveaux projets et collaborations.",
    'about.langLabel': 'Langues',
    'about.techLabel': 'Technos maîtrisées',
    'about.lang.fr': '🇫🇷 Français — Courant',
    'about.lang.ar': '🇸🇦 Arabe — Courant',
    'about.lang.en': '🇬🇧 Anglais — Technique',
    'about.tech.responsive': 'Responsive Design',
    'about.tech.vars': 'Variables CSS',
    'skills.label': '02 — Ce que je sais faire',
    'skills.title': 'Compétences',
    'skills.cat1.title': 'Langages & Frameworks',
    'skills.cat2.title': 'Mise en page & Responsive',
    'skills.cat3.title': 'Interactivité',
    'skills.cat4.title': 'Savoir-être',
    'skills.tag.responsive': 'Responsive Design',
    'skills.tag.vars': 'Variables CSS',
    'skills.tag.forms': 'Formulaires interactifs',
    'skills.soft.rigueur': '🎯 Rigueur',
    'skills.soft.autonomie': '🧭 Autonomie',
    'skills.soft.reactivite': '⚡ Réactivité',
    'skills.soft.equipe': "🤝 Esprit d'équipe",
    'skills.soft.detail': '🔍 Sens du détail',
    'skills.soft.curiosite': '📚 Curiosité & apprentissage continu',
    'skills.soft.delais': '⏱️ Respect des délais',
    'skills.soft.communication': '💬 Communication claire',
    'services.label': '03 — Ce que je propose',
    'services.title': 'Services',
    'services.s1.title': 'Développement Web',
    'services.s1.desc': "Intégration front-end sur mesure avec HTML, CSS, Tailwind et JavaScript, pour des interfaces propres, rapides et fidèles à vos maquettes.",
    'services.s2.title': 'Sites vitrines',
    'services.s2.desc': "Création de sites vitrines modernes et responsives pour présenter votre activité, vos services et convertir vos visiteurs en clients.",
    'services.s3.title': 'Sites e-commerce',
    'services.s3.desc': "Mise en place de boutiques en ligne claires et fonctionnelles, pensées pour la navigation produit et une expérience d'achat fluide.",
    'services.s4.title': 'Sites WordPress',
    'services.s4.desc': "Création et personnalisation de sites sous WordPress, adaptés à vos besoins et faciles à faire évoluer par la suite.",
    'services.s5.title': 'Correction & maintenance',
    'services.s5.desc': "Correction de bugs, mises à jour et maintenance régulière pour garder votre site performant, sécurisé et à jour.",
    'projects.label': '04 — Mes réalisations',
    'projects.title': 'Projets',
    'projects.tag.architecture': 'Architecture',
    'projects.tag.interior': "Design d'intérieur",
    'projects.tag.medical': 'Médical',
    'projects.tag.restaurant': 'Restauration',
    'projects.link': 'Voir le projet →',
    'projects.bbh.desc': "Site vitrine pour un cabinet d'architecture d'intérieur et de rénovation, avec devis rapide et prise de contact WhatsApp.",
    'projects.bbh.note': "<strong>Particularité :</strong> hero plein écran avec image de fond sombre — travail sur l'overlay et le contraste pour garder le texte lisible, plus un bouton WhatsApp flottant.",
    'projects.archiwelt.desc': "Site vitrine pour une agence d'architecture couplée à un centre de formation certifiant (Revit, SketchUp, AutoCAD, Photoshop).",
    'projects.archiwelt.note': "<strong>Particularité :</strong> double positionnement agence + académie à valoriser dans une même hero, sans diluer le message principal.",
    'projects.legoo.desc': "Site vitrine haut de gamme pour un cabinet d'architecture basé entre Alger et Paris, axé sur la présentation de réalisations.",
    'projects.legoo.note': "<strong>Particularité :</strong> hero plein écran sur photo lumineuse — équilibrage du contraste texte/image et petits repères de géolocalisation stylisés.",
    'projects.bienetre.desc': "Vitrine pour un aménageur d'intérieur, articulée autour d'un book de réalisations et d'une prise de rendez-vous simple via WhatsApp.",
    'projects.bienetre.note': "<strong>Particularité :</strong> palette claire et chaleureuse, à l'opposé des autres projets — travail sur des tons doux plutôt qu'un thème sombre.",
    'projects.utopia.desc': "Site pour un cabinet dentaire, avec présentation des soins, de l'équipe et un accès direct à la prise de rendez-vous.",
    'projects.utopia.note': "<strong>Particularité :</strong> mise en avant de statistiques de confiance (note Google, avis vérifiés) via des cartes flottantes en overlay sur la photo du cabinet.",
    'projects.assiette.desc': "Site vitrine pour un restaurant familial, avec présentation du menu, galerie et informations pratiques (horaires, budget).",
    'projects.assiette.note': "<strong>Particularité :</strong> identité chaleureuse orientée restauration, avec horaires et budget mis en évidence dès la première section pour rassurer le visiteur.",
    'contact.label': '05 — Discutons de votre projet',
    'contact.title': 'Contact',
    'contact.info.title': 'Coordonnées directes',
    'contact.info.sub': 'Retrouvez-moi sur mon profil professionnel ou contactez-moi directement :',
    'form.name.label': 'Nom',
    'form.name.placeholder': 'Votre nom',
    'form.email.label': 'Email',
    'form.phone.label': 'Numéro de téléphone',
    'form.service.label': 'Service souhaité',
    'form.service.opt0': 'Choisissez un service (optionnel)',
    'form.service.opt1': 'Développement Web',
    'form.service.opt2': 'Site vitrine',
    'form.service.opt3': 'Site e-commerce',
    'form.service.opt4': 'Site WordPress',
    'form.service.opt5': 'Correction & maintenance',
    'form.service.opt6': 'Autre',
    'form.message.label': 'Message',
    'form.message.placeholder': 'Décrivez votre projet...',
    'form.submit': 'Envoyer le message →',
    'form.status.sending': 'Envoi en cours...',
    'form.status.missingContact': 'Merci de renseigner au moins votre email ou votre numéro de téléphone.',
    'form.status.success': 'Merci ! Votre message a bien été envoyé.',
    'form.status.errorServer': "Une erreur est survenue. Veuillez réessayer ou m'écrire directement par email.",
    'form.status.errorNetwork': "Impossible d'envoyer le message. Vérifiez votre connexion et réessayez.",
    'footer.text': '© 2026 Mohamed Fatnassi — Tous droits réservés.',
  },
  en: {
    'meta.title': 'Mohamed Fatnassi — Front-End Developer',
    'meta.description': "Mohamed Fatnassi, front-end developer available for projects and collaborations. HTML, CSS, JavaScript, Tailwind CSS, business websites and modern interfaces.",
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cta': 'Contact me',
    'hero.status': 'Available for projects & collaborations',
    'hero.eyebrow': 'Front-End Developer',
    'hero.sub': "I design and build clean, fast and accessible web interfaces with HTML, CSS, JavaScript & Tailwind CSS. Currently available for freelance work, collaborations or a front-end developer role, I turn ideas into pages that truly live in the browser.",
    'hero.cta1': 'View my projects ↓',
    'hero.cta2': "Let's talk about your project",
    'about.label': '01 — Who I am',
    'about.title': 'About me',
    'about.p1': "I'm Mohamed Fatnassi, a front-end developer passionate about building modern, interactive and accessible websites. My approach relies on mastering the core languages to design intuitive, polished interfaces.",
    'about.p2': "My goal is to keep improving my skills, build concrete projects and grow into a well-rounded web developer profile — all while staying available for new projects and collaborations.",
    'about.langLabel': 'Languages',
    'about.techLabel': 'Technologies',
    'about.lang.fr': '🇫🇷 French — Fluent',
    'about.lang.ar': '🇸🇦 Arabic — Fluent',
    'about.lang.en': '🇬🇧 English — Technical',
    'about.tech.responsive': 'Responsive Design',
    'about.tech.vars': 'CSS Variables',
    'skills.label': '02 — What I can do',
    'skills.title': 'Skills',
    'skills.cat1.title': 'Languages & Frameworks',
    'skills.cat2.title': 'Layout & Responsive',
    'skills.cat3.title': 'Interactivity',
    'skills.cat4.title': 'Soft Skills',
    'skills.tag.responsive': 'Responsive Design',
    'skills.tag.vars': 'CSS Variables',
    'skills.tag.forms': 'Interactive forms',
    'skills.soft.rigueur': '🎯 Rigor',
    'skills.soft.autonomie': '🧭 Autonomy',
    'skills.soft.reactivite': '⚡ Responsiveness',
    'skills.soft.equipe': '🤝 Team spirit',
    'skills.soft.detail': '🔍 Attention to detail',
    'skills.soft.curiosite': '📚 Curiosity & continuous learning',
    'skills.soft.delais': '⏱️ Meeting deadlines',
    'skills.soft.communication': '💬 Clear communication',
    'services.label': '03 — What I offer',
    'services.title': 'Services',
    'services.s1.title': 'Web Development',
    'services.s1.desc': "Custom front-end integration with HTML, CSS, Tailwind and JavaScript, for clean, fast interfaces that match your designs pixel for pixel.",
    'services.s2.title': 'Business websites',
    'services.s2.desc': "Building modern, responsive websites to showcase your business and services and turn visitors into clients.",
    'services.s3.title': 'E-commerce websites',
    'services.s3.desc': "Setting up clear, functional online stores designed for smooth product browsing and a seamless shopping experience.",
    'services.s4.title': 'WordPress websites',
    'services.s4.desc': "Building and customizing WordPress websites, tailored to your needs and easy to evolve afterwards.",
    'services.s5.title': 'Fixes & maintenance',
    'services.s5.desc': "Bug fixes, updates and regular maintenance to keep your website fast, secure and up to date.",
    'projects.label': '04 — My work',
    'projects.title': 'Projects',
    'projects.tag.architecture': 'Architecture',
    'projects.tag.interior': 'Interior Design',
    'projects.tag.medical': 'Medical',
    'projects.tag.restaurant': 'Restaurant',
    'projects.link': 'View project →',
    'projects.bbh.desc': "Business website for an interior architecture & renovation firm, with a quick quote request and WhatsApp contact.",
    'projects.bbh.note': "<strong>Highlight:</strong> full-screen hero with a dark background image — careful work on the overlay and contrast to keep the text readable, plus a floating WhatsApp button.",
    'projects.archiwelt.desc': "Business website for an architecture agency paired with a certifying training center (Revit, SketchUp, AutoCAD, Photoshop).",
    'projects.archiwelt.note': "<strong>Highlight:</strong> a dual agency + academy positioning to showcase within a single hero, without diluting the main message.",
    'projects.legoo.desc': "High-end business website for an architecture firm based between Algiers and Paris, focused on showcasing past work.",
    'projects.legoo.note': "<strong>Highlight:</strong> full-screen hero over a bright photo — balancing text/image contrast, plus small stylised geolocation markers.",
    'projects.bienetre.desc': "Showcase website for an interior design firm, built around a portfolio of past work and a simple WhatsApp booking flow.",
    'projects.bienetre.note': "<strong>Highlight:</strong> a light, warm palette, unlike the other projects — working with soft tones instead of a dark theme.",
    'projects.utopia.desc': "Website for a dental clinic, presenting treatments, the team and a direct path to booking an appointment.",
    'projects.utopia.note': "<strong>Highlight:</strong> trust statistics (Google rating, verified reviews) highlighted through floating cards overlaid on the clinic photo.",
    'projects.assiette.desc': "Business website for a family restaurant, with a menu showcase, gallery and practical info (hours, budget).",
    'projects.assiette.note': "<strong>Highlight:</strong> a warm restaurant-focused identity, with opening hours and budget highlighted right from the first section to reassure visitors.",
    'contact.label': "05 — Let's talk about your project",
    'contact.title': 'Contact',
    'contact.info.title': 'Direct contact',
    'contact.info.sub': 'Find me on my professional profile or reach out directly:',
    'form.name.label': 'Name',
    'form.name.placeholder': 'Your name',
    'form.email.label': 'Email',
    'form.phone.label': 'Phone number',
    'form.service.label': 'Service needed',
    'form.service.opt0': 'Choose a service (optional)',
    'form.service.opt1': 'Web Development',
    'form.service.opt2': 'Business website',
    'form.service.opt3': 'E-commerce website',
    'form.service.opt4': 'WordPress website',
    'form.service.opt5': 'Fixes & maintenance',
    'form.service.opt6': 'Other',
    'form.message.label': 'Message',
    'form.message.placeholder': 'Describe your project...',
    'form.submit': 'Send message →',
    'form.status.sending': 'Sending...',
    'form.status.missingContact': 'Please provide at least your email or your phone number.',
    'form.status.success': 'Thanks! Your message has been sent.',
    'form.status.errorServer': "Something went wrong. Please try again or email me directly.",
    'form.status.errorNetwork': "Couldn't send the message. Check your connection and try again.",
    'footer.text': '© 2026 Mohamed Fatnassi — All rights reserved.',
  },
};

let currentLang = 'fr';

function applyLanguage(lang) {
  const dict = translations[lang] || translations.fr;
  currentLang = lang;

  document.documentElement.lang = lang;
  if (dict['meta.title']) document.title = dict['meta.title'];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict['meta.description']) metaDesc.setAttribute('content', dict['meta.description']);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
  });

  try {
    localStorage.setItem('mf_lang', lang);
  } catch (e) {
    /* stockage indisponible, on ignore silencieusement */
  }
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    if (lang && lang !== currentLang) applyLanguage(lang);
  });
});

// Restaure la langue précédemment choisie (si disponible)
(function initLanguage() {
  let savedLang = null;
  try {
    savedLang = localStorage.getItem('mf_lang');
  } catch (e) {
    savedLang = null;
  }
  applyLanguage(savedLang === 'en' ? 'en' : 'fr');
})();

/* ───────────────────── Formulaire de contact (Formspree) ───────────────────── */

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const t = translations[currentLang] || translations.fr;

    // Vérifie qu'au moins un moyen de contact (email ou téléphone) est renseigné
    const hasEmail = emailField && emailField.value.trim() !== '';
    const hasPhone = phoneField && phoneField.value.trim() !== '';

    if (!hasEmail && !hasPhone) {
      formStatus.textContent = t['form.status.missingContact'];
      formStatus.className = 'form-status error';
      (emailField || phoneField).focus();
      return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const formData = new FormData(contactForm);

    formStatus.textContent = t['form.status.sending'];
    formStatus.className = 'form-status';
    if (submitBtn) submitBtn.disabled = true;

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        formStatus.textContent = t['form.status.success'];
        formStatus.className = 'form-status success';
        contactForm.reset();
      } else {
        formStatus.textContent = t['form.status.errorServer'];
        formStatus.className = 'form-status error';
      }
    } catch (error) {
      formStatus.textContent = t['form.status.errorNetwork'];
      formStatus.className = 'form-status error';
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

// Apparition en douceur des sections au défilement
const revealEls = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (revealEls.length && !prefersReducedMotion && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Mise en évidence du lien de navigation correspondant à la section visible
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link');

if (sections.length && navAnchors.length && 'IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach((a) => {
            a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { threshold: 0.4, rootMargin: '-96px 0px -55% 0px' }
  );
  sections.forEach((section) => navObserver.observe(section));
}
