'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 💎 Contenu du hero (au-dessus du fond dégradé global) */}
      <div className="grid md:grid-cols-2 items-center gap-8 container relative z-10">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]"
          >
            {profile.name ? `${profile.name} — ` : ''}
            <span className="text-primary">{profile.title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 text-lg text-white/80 max-w-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="/projects" className="px-5 py-3 rounded-xl bg-primary hover:shadow-glow transition font-medium">
              Voir mes projets
            </a>
            <a href="/contact" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition font-medium">
              Me contacter
            </a>
            <a href="/cv.pdf" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition font-medium">
              Télécharger mon CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-lg">
            <Image
              src="/images/moi.jpg"
              alt="Hussein El Moursi"
              width={600}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
