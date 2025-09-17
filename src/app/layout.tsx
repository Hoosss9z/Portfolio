
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ReadingProgress from '../components/ReadingProgress'


export const metadata: Metadata = {
  title: 'Portfolio — Développeur',
  description: 'Portfolio moderne, modulaire et coloré en Next.js + Tailwind.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <ReadingProgress />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

