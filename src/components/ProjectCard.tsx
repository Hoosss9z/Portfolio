
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({title, description, tech, link, repo, image, highlights}: {
  title: string, description: string, tech: string[], link?: string, repo?: string, image?: string, highlights?: string[]
}) {
  return (
    <article className="card group">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-white/70 mt-2">{description}</p>
          {highlights && highlights.length > 0 && (
            <ul className="list-disc list-inside mt-3 text-white/70">
              {highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          )}
          <div className="flex flex-wrap gap-2 mt-4">
            {tech.map((t, i) => <span key={i} className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm">{t}</span>)}
          </div>
          <div className="flex gap-4 mt-5">
            {repo && <a className="inline-flex items-center gap-2 text-white/80 hover:text-white" href={repo} target="_blank" rel="noreferrer"><Github size={18}/> Code</a>}
            {link && <a className="inline-flex items-center gap-2 text-white/80 hover:text-white" href={link} target="_blank" rel="noreferrer"><ExternalLink size={18}/> Démo</a>}
          </div>
        </div>
        <div className="w-full md:w-64 aspect-video bg-white/5 border border-white/10 rounded-xl" style={{backgroundImage: image ? `url(${image})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center'}} />
      </div>
    </article>
  )
}
