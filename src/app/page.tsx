import Hero from '../components/Hero'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import SkillBar from '../components/SkillBar'
import TimelineItem from '../components/TimelineItem'
import BackgroundParticles from '../components/BackgroundParticles'
import ScrollGradientBackground from '../components/ScrollGradientBackground'
import { profile } from '../data/profile'

export default function HomePage() {
  return (
    <div className="relative overflow-hidden min-h-screen">

      {/* 🌈 Dégradé scrollé (derrière) */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <ScrollGradientBackground />
      </div>

      {/* 🌌 Particules (au-dessus du fond) */}
      <div className="fixed inset-0 -z-40 pointer-events-none">
        <BackgroundParticles />
      </div>

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
              <SkillBar label="HTML / CSS" value={85} />
              <SkillBar label="JavaScript / TypeScript" value={80} />
              <SkillBar label="React / Next.js" value={75} />
              <SkillBar label="Node.js" value={65} />
            </div>
            <div>
              <SkillBar label="PHP / SQL" value={60} />
              <SkillBar label="Python" value={55} />
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
        <Section title="Contact" subtitle="Parlons de votre prochain projet ou de mon prochain poste 🎯">
          <div className="card">
            <div className="flex flex-wrap gap-4">
              {profile.socials.map((s, i) => (
                <a
                  key={i}
                  className="px-4 py-2 rounded-xl bg-white/10 border border-white/15"
                  href={s.href}
                  target="_blank"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <p className="text-white/70 mt-4">
              Email : <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a> •{" "}
              <a className="underline" href="/cv.pdf" target="_blank">Mon CV (PDF)</a>
            </p>
          </div>
        </Section>
      </section>

    </div>
  )
}
