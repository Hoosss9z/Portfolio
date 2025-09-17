
export default function SkillBadge({ label }: { label: string }) {
  return <span className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 border border-white/15 text-sm">{label}</span>
}
