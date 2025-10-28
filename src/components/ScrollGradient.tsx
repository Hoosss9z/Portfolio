'use client'

import { useEffect, useRef } from 'react'

export default function ScrollGradient() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current!
    const doc = document.documentElement
    let raf: number | null = null

    const paint = () => {
      const max = Math.max(1, doc.scrollHeight - window.innerHeight)
      const t = Math.min(1, Math.max(0, window.scrollY / max)) // 0..1

      // 🎨 Couleurs plus vives : bleu -> violet -> cyan lumineux
      const h1 = 225, h2 = 275, h3 = 195
      const h =
        t < 0.5
          ? h1 + (h2 - h1) * (t / 0.5)
          : h2 + (h3 - h2) * ((t - 0.5) / 0.5)

      // saturation et luminosité plus élevées
      const s = 80
      const top = `hsl(${h} ${s}% 28%)`
      const mid = `hsl(${h} ${s}% 18%)`
      const bot = `hsl(${h} ${s}% 10%)`

      // ✅ Dégradé vif, opaque et fluide
      el.style.backgroundImage = `
        radial-gradient(1200px 700px at 20% 10%, ${top} 0%, ${mid} 60%),
        radial-gradient(1000px 650px at 80% 85%, ${mid} 0%, ${bot} 65%),
        linear-gradient(${top}, ${bot})
      `
    }

    const onScrollOrResize = () => {
      if (raf != null) return
      raf = requestAnimationFrame(() => {
        paint()
        raf = null
      })
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)
    paint()
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: 'rgb(9 11 28)', // fallback discret
        transition: 'background-image 0.4s ease-out',
      }}
    />
  )
}
