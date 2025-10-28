'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <Link href={href} className="relative px-4 py-2 rounded-xl text-white/80 hover:text-white transition">
      {active && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 bg-white/10 rounded-xl border border-white/20"
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
      <span className="relative">{children}</span>
    </Link>
  )
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-ink/80 backdrop-blur">

      <div className="container">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="logo-text font-bold tracking-tight text-white text-lg">
            HE<span className="text-accent">.</span>
          </Link>
        
          <div className="flex gap-1">
            <NavLink href="/">Accueil</NavLink>
            <NavLink href="/projects">Projets</NavLink>
            <NavLink href="/about">À propos</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </nav>
      </div>
    </header>
  )
}
