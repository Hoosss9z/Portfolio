export default function Section({ title, subtitle, children }: { title: string, subtitle?: string, children: React.ReactNode }) {
  return (
    <section className="container relative mt-20">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">{title} <span className="text-accent">★</span></h2>
        {subtitle && <p className="text-white/70 mt-2">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}
