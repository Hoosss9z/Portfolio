import Section from '../../../components/Section'

export default function PortfolioProjectPage() {
  return (
    <Section
      title="Portfolio — Hussein El Moursi"
      subtitle="Next.js • Tailwind • Framer Motion"
    >
      <div className="card space-y-4">
        <p>
            Ce portfolio est un site one-page réalisé avec Next.js et Tailwind.
            Il présente mon parcours, mes compétences et mes projets de manière
            moderne, colorée et responsive.
        </p>

        <ul className="list-disc list-inside text-white/80">
          <li>Stack : Next.js 14, TypeScript, Tailwind, Framer Motion</li>
          <li>Design : fond radial, palette violet/cyan/orange</li>
          <li>Fonctionnalités : barres de compétences, timeline, bouton CV</li>
          <li>Déployé gratuitement sur Vercel</li>
        </ul>

        <a
          className="inline-block mt-4 px-4 py-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
          href="/"
        >
          Voir la démo (Accueil)
        </a>
      </div>
    </Section>
  )
}
