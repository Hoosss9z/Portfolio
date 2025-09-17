
export default function TimelineItem({ role, company, period, location, bullets, tech }: {
  role: string, company: string, period: string, location?: string, bullets: string[], tech?: string[]
}) {
  return (
    <div className="relative pl-8 pb-10">
      <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-secondary shadow-glow" />
      <h3 className="font-semibold">{role} — <span className="text-white/70">{company}</span></h3>
      <p className="text-white/60 text-sm">{period}{location ? ` • ${location}` : ""}</p>
      <ul className="list-disc list-inside text-white/80 mt-2">
        {bullets.map((b, i)=> <li key={i}>{b}</li>)}
      </ul>
      {tech && tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {tech.map((t, i)=> <span key={i} className="px-2 py-1 rounded bg-white/10 text-xs border border-white/15">{t}</span>)}
        </div>
      )}
      <div className="absolute left-0 top-0 h-full border-l border-white/15" />
    </div>
  )
}
