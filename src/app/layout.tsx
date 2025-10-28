import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ReadingProgress from '../components/ReadingProgress'
import ScrollGradient from '../components/ScrollGradient'
import BackToTop from '../components/BackToTop'



export const metadata: Metadata = {
  title: 'Portfolio — Développeur',
  description: 'Portfolio moderne et coloré en Next.js + Tailwind.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      {/* important: pas de bg-radial ici pour ne pas couvrir le scroll-gradient */}
      <body className="relative text-white bg-ink">
        <ScrollGradient />       {/* ⬅️ second plan animé */}
        <Navbar />
        <ReadingProgress />
        <main className="relative z-10 pt-16 md:pt-20">{children}</main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  )
}
