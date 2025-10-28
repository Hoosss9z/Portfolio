
import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import { profile } from '@/data/profile'

export default function ProjectsPage() {
  return (
    <Section title="Tous mes projets" subtitle="Du prototype à la production">
      <div className="grid md:grid-cols-2 gap-6">
        {profile.projects.map((p, i)=> <ProjectCard key={i} {...p} />)}
      </div>
    </Section>
  )
}
