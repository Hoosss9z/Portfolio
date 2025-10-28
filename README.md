
# Portfolio Développeur — Next.js + Tailwind (TypeScript)

Moderne, modulaire et coloré. Conçu pour candidater rapidement.

## ⚡️ Démarrage

```bash
npm install
npm run dev
# puis ouvre http://localhost:3000
```

## 🧱 Structure

- `src/app` — App Router Next.js (pages Accueil, Projets, À propos, Contact)
- `src/components` — Composants modulaires (Navbar, Hero, ProjectCard…)
- `src/data/profile.ts` — **Tes données** (à remplir à partir de tes CV)
- `public/` — Assets (favicon, images)

## 🎨 Personnaliser le style

Couleurs, ombres, fond radial : `tailwind.config.ts` + `globals.css`.

## 🚀 Déployer

- **Vercel** (recommandé) : brancher le repo GitHub → *Deploy*.
- Alternatives : Netlify, Render.

## ✉️ Formulaire de contact

Actuellement en “mock” (front seulement). Branche un service :
- Formspree (no‑code)
- Resend + route API Next.js

## 📄 Remplir avec tes CV

Ouvre `src/data/profile.ts` et remplace les champs (skills, expériences, projets, éducation).
Je peux le faire pour toi dès que tu m’envoies tes deux CV.
