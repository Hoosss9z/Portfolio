
export type Experience = {
  role: string
  company: string
  start: string
  end: string
  location?: string
  bullets: string[]
  tech?: string[]
}

export type Project = {
  title: string
  description: string
  tech: string[]
  link?: string
  repo?: string
  image?: string
  highlights?: string[]
}

export type Education = {
  school: string
  degree: string
  start: string
  end: string
}

export type Profile = {
  name: string
  title: string
  tagline: string
  location: string
  email: string
  phone?: string
  socials: { label: string, href: string }[]
  skills: string[]
  experiences: Experience[]
  projects: Project[]
  education: Education[]
}

export const profile: Profile = {
  name: "Hussein El Moursi",
  title: "Développeur Full-Stack",
  tagline: "Développeur full‑stack junior motivé et adaptable. HTML, CSS, JavaScript, PHP, SQL, Python. Trilingue (arabe, français, anglais). Je conçois des solutions web utiles et orientées utilisateur.",
  location: "Marseille, France",
  email: "elmoursi.hussein9@gmail.com",
  phone: "+33 6 99 19 41 83",
  socials: [
    { label: "Email", href: "mailto:elmoursi.hussein9@gmail.com" }
  ],
  skills: [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "PHP", "SQL", "Python",
    "Git", "VS Code",
    "Électricité & maintenance", "Bâtiment intelligent"
  ],
  experiences: [
    {
      role: "Sales Advisor",
      company: "Aelia Duty Free — Aéroport Marseille Provence",
      start: "Mai 2023",
      end: "Présent",
      location: "Marseille, France",
      bullets: [
        "Expérience client personnalisée pour des voyageurs internationaux",
        "Gestion des stocks et optimisation du merchandising",
        "Travail quotidien en arabe, français et anglais"
      ],
      tech: []
    },
    {
      role: "Sales Advisor",
      company: "Leroy Merlin",
      start: "Nov 2022",
      end: "Août 2023",
      location: "Andelnans, France",
      bullets: [
        "Conseil aux clients pour leurs projets d’amélioration de l’habitat",
        "Gestion d’inventaire et disponibilité produit"
      ],
      tech: []
    },
    {
      role: "Apprenti Technicien",
      company: "ENGIE",
      start: "2019",
      end: "2020",
      location: "Besançon, France",
      bullets: [
        "Installation et maintenance de systèmes d’énergie renouvelable",
        "Maintenance préventive d’équipements électriques"
      ],
      tech: []
    },
    {
      role: "Stagiaire (Maintenance / Électricité)",
      company: "Vinci Facilities & Spie EST",
      start: "2017",
      end: "2019",
      location: "France",
      bullets: [
        "Support sur des projets d’installation et de maintenance électriques",
        "Participation aux formations sécurité et tutorat de nouveaux stagiaires"
      ],
      tech: []
    }
  ],
  projects: [
    {
      title: "Portfolio personnel",
      description: "Site personnel en Next.js/Tailwind présentant parcours, compétences et projets.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
      link: "/projects/portfolio",
      image: "/images/portfolio.png",      // attention: PAS /public/images/...
      highlights: ["One-page", "Responsive", "Animations légères"]
}
,
    {
      title: "Panier Gourmand (en cours de développement)",
      description: "Site e-commerce pour la vente en ligne de fruits, légumes et produits provençaux.",
      tech: ["React", "Node.js", "Express", "SQLite", "Vite"],
      image: "/images/PanierGG.png",
      highlights: ["E-commerce", "Paiement sécurisé", "Formulaire dynamique", "Responsive design"]
    },
    {
      title: "Générateur de devis (exercice)",
      description: "Application web simple pour créer et partager des devis PDF.",
      tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      link: "/projects/devis",
      highlights: ["CRUD", "PDF", "Auth basique"]
    }
  ],
  education: [
    { school: "ISCOD, Marseille", degree: "Bachelor Concepteur Développeur d’Applications", start: "2025", end: "2026" },
    { school: "Studi (en ligne), Belfort", degree: "Graduate Développeur Web Full‑Stack", start: "2022", end: "2023" },
    { school: "Open Sky Training, Aix‑en‑Provence", degree: "Certification PNC (Personnel Navigant Commercial)", start: "2022", end: "2022" },
    { school: "Lycée Raoul Follereau, Belfort", degree: "BTS Systèmes de Maintenance", start: "2021", end: "2022" },
    { school: "Lycée Pasteur Mont Roland, Dole", degree: "BTS Énergie & Domotique du Bâtiment", start: "2019", end: "2020" },
    { school: "Lycée Denis Diderot, Bavilliers", degree: "Bac Pro Électricité & Systèmes Connectés", start: "2016", end: "2019" }

  ]
}
