import Hero from '../components/Hero'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import SkillBar from '../components/SkillBar'
import TimelineItem from '../components/TimelineItem'
import { profile } from '../data/profile'

export default function HomePage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* 💎 Contenu principal */}
      <Hero />

      <section id="projects" className="mt-16 md:mt-24 lg:mt-32">
        <Section title="Projets phares" subtitle="Sélection de projets représentatifs">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
            {profile.projects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </Section>
      </section>

      <section id="skills">
        <Section title="Compétences" subtitle="Front • Back • Outils">
          <div className="card grid md:grid-cols-2 gap-6">
            <div>
              <SkillBar label="HTML / CSS" value={50} />
              <SkillBar label="JavaScript / TypeScript" value={50} />
              <SkillBar label="React / Next.js" value={25} />
              <SkillBar label="Node.js" value={30} />
            </div>
            <div>
              <SkillBar label="PHP / SQL" value={20} />
              <SkillBar label="Python" value={15} />
              <SkillBar label="Git / GitHub" value={75} />
              <SkillBar label="UI / Accessibilité" value={60} />
            </div>
          </div>
        </Section>
      </section>

      <section id="about">
        <Section title="À propos" subtitle="Parcours et manière de travailler">
          <div className="card space-y-4">
            <p className="text-white/80">{profile.tagline}</p>
            <p className="text-white/70">
              Trilingue (arabe, français, anglais), à l’aise en environnement multiculturel.
              Orientation produit et service client, avec une vraie appétence pour le web moderne.
            </p>
          </div>
        </Section>

        <Section title="Expériences" subtitle="Ce que j’ai construit et appris">
          <div className="card">
            {profile.experiences.map((e, i) => (
              <TimelineItem
                key={i}
                role={e.role}
                company={e.company}
                period={`${e.start} — ${e.end}`}
                location={e.location}
                bullets={e.bullets}
                tech={e.tech}
              />
            ))}
          </div>
        </Section>

        <Section title="Formation">
          <div className="card">
            <ul className="list-disc list-inside text-white/80">
              {profile.education.map((ed, i) => (
                <li key={i}>
                  <span className="font-semibold">{ed.degree}</span> — {ed.school} ({ed.start} — {ed.end})
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </section>

      <section id="contact">
        <Section title="Contact" subtitle="Parlons de votre prochain projet 🎯">
          {/* Formulaire sans serveur (Formspree) */}
          <form
            action="https://formspree.io/f/XXXXXXXX"  /* ⬅️ remplace par ton endpoint */
            method="POST"
            acceptCharset="UTF-8"
            className="card grid gap-4 max-w-2xl"
            noValidate
          >
            {/* Honeypot anti-spam */}
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm text-white/70">Nom *</label>
                <input
                  id="name" name="name" required placeholder="Votre nom"
                  className="px-3 py-2 rounded-xl bg-white/5 border border-white/15 outline-none focus:border-primary"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm text-white/70">Email *</label>
                <input
                  id="email" name="email" type="email" required placeholder="vous@email.com"
                  className="px-3 py-2 rounded-xl bg-white/5 border border-white/15 outline-none focus:border-primary"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="subject" className="text-sm text-white/70">Sujet</label>
              <input
                id="subject" name="subject" placeholder="Sujet du message"
                className="px-3 py-2 rounded-xl bg-white/5 border border-white/15 outline-none focus:border-primary"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm text-white/70">Message *</label>
              <textarea
                id="message" name="message" required rows={6} placeholder="Décris ton projet ou ta question"
                className="px-3 py-2 rounded-xl bg-white/5 border border-white/15 outline-none focus:border-primary"
              />
            </div>

            {/* Options utiles Formspree */}
            <input type="hidden" name="_subject" value="[Portfolio] Nouveau message" />
            <input type="hidden" name="_next" value="/contact?sent=1" />

            <div className="flex items-center gap-3">
              <button className="px-5 py-3 rounded-xl bg-primary hover:shadow-glow transition font-medium">
                Envoyer
              </button>
              <p className="text-white/70">
                Ou écrivez-moi directement :{' '}
                <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
            </div>
          </form>
        </Section>
      </section>
    </div>
  )
}
