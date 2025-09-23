
import Section from '@/components/Section'
import TimelineItem from '@/components/TimelineItem'
import { profile } from '@/data/profile'

export default function AboutPage() {
  return (
    <>
      <Section title="À propos" subtitle="Parcours, valeurs et manière de travailler">
        <div className="card space-y-4">
          <p className="text-white/80">Je suis un développeur junior passionné par les expériences web soignées, accessibles et hautement performantes. J’aime donner des couleurs aux produits et travailler en équipe pour livrer rapidement de la valeur.</p>
          <p className="text-white/70">J’interviens sur la conception UI, le front-end moderne et l’intégration de services back. J’adore optimiser les Core Web Vitals et mettre en place des design systems réutilisables.</p>
        </div>
      </Section>
      <Section title="Expériences" subtitle="Ce que j’ai construit et appris">
        <div className="card">
          {profile.experiences.map((e, i)=> (
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
            {profile.education.map((ed, i)=> (
              <li key={i}><span className="font-semibold">{ed.degree}</span> — {ed.school} ({ed.start} — {ed.end})</li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  )
}
