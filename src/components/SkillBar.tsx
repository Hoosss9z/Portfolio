
export default function SkillBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm text-white/80 mb-1">
        <span>{label}</span><span>{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-primary/60 to-secondary/60" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
