
'use client'
import Section from '@/components/Section'
import { useState } from 'react'
import { profile } from '@/data/profile'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  return (
    <Section title="Contact" subtitle="Parlons de votre prochain projet ou de mon prochain poste 🎯">
      <div className="card max-w-2xl">
        <form
          onSubmit={(e)=>{e.preventDefault(); setStatus('sent')}}
          className="space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input required placeholder="Nom" className="px-4 py-3 rounded-xl bg-white/5 border border-white/15 outline-none focus:border-secondary" />
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/15 outline-none focus:border-secondary" />
          </div>
          <input placeholder="Sujet" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 outline-none focus:border-secondary" />
          <textarea required placeholder="Message" rows={6} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 outline-none focus:border-secondary" />
          <div className="flex items-center gap-4">
            <button className="px-5 py-3 rounded-xl bg-secondary hover:shadow-glow transition font-medium" type="submit">Envoyer</button>
            <a href={`mailto:${profile.email}`} className="text-white/80 hover:text-white">…ou m’écrire directement</a>
          </div>
          {status === 'sent' && <p className="text-green-400">Message simulé envoyé (front uniquement). Branche un service (Formspree, Resend) pour un vrai envoi.</p>}
        </form>
      </div>
    </Section>
  )
}
