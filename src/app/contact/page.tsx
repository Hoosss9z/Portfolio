'use client'

import Section from '@/components/Section'
import { useState } from 'react'
import { profile } from '@/data/profile'

const FORM_ENDPOINT = 'https://formspree.io/f/xrbyydak' // ⬅️ mets ton endpoint ici

type FormState = { ok: boolean; message: string } | null

export default function ContactPage() {
  const [status, setStatus] = useState<FormState>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Progressive enhancement : si JS est actif, on gère l’envoi côté client pour rester sur la page
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)

    // Honeypot anti-bot
    if (String(fd.get('website') || '')) return

    const name = String(fd.get('name') || '').trim()
    const email = String(fd.get('email') || '').trim()
    const message = String(fd.get('message') || '').trim()

    if (!name || !email || !message) {
      setStatus({ ok: false, message: 'Nom, e-mail et message sont obligatoires.' })
      return
    }

    try {
      setLoading(true)
      setStatus(null)
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        form.reset()
        setStatus({ ok: true, message: 'Merci ! Votre message a bien été envoyé ✅' })
      } else {
        setStatus({
          ok: false,
          message: (data as any)?.errors?.[0]?.message || 'Impossible d’envoyer le message. Réessayez.'
        })
      }
    } catch {
      setStatus({ ok: false, message: 'Erreur réseau. Vérifiez votre connexion.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section title="Contact" subtitle="Parlons de votre prochain projet ou de mon prochain poste 🎯">
      <div className="card max-w-2xl">
        <form
          action={FORM_ENDPOINT}            // ✅ fallback HTML si JS désactivé
          method="POST"
          acceptCharset="UTF-8"
          onSubmit={onSubmit}
          className="space-y-4"
          noValidate
        >
          {/* Honeypot anti-spam (caché) */}
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid md:grid-cols-2 gap-4">
            <input
              required
              name="name"
              placeholder="Nom *"
              className="px-4 py-3 rounded-xl bg-white/5 border border-white/15 outline-none focus:border-secondary"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email *"
              className="px-4 py-3 rounded-xl bg-white/5 border border-white/15 outline-none focus:border-secondary"
            />
          </div>

          <input
            name="subject"
            placeholder="Sujet"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 outline-none focus:border-secondary"
          />

          <textarea
            required
            name="message"
            placeholder="Message *"
            rows={6}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 outline-none focus:border-secondary"
          />

          {/* Options utiles pour Formspree */}
          <input type="hidden" name="_subject" value="[Portfolio] Nouveau message" />
          {/* Redirection si JS désactivé */}
          <input type="hidden" name="_next" value="/contact?sent=1" />

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-3 rounded-xl bg-secondary hover:shadow-glow transition font-medium disabled:opacity-60"
            >
              {loading ? 'Envoi…' : 'Envoyer'}
            </button>
            <a href={`mailto:${profile.email}`} className="text-white/80 hover:text-white">
              …ou m’écrire directement
            </a>
          </div>

          {status && (
            <p className={status.ok ? 'text-green-400' : 'text-red-400'}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </Section>
  )
}
