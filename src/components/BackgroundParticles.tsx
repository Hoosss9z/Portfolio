'use client'

import { useCallback, useMemo } from 'react'
import Particles from 'react-tsparticles'
import type { Engine, ISourceOptions } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim' // ✅ version légère correcte

export default function BackgroundParticles() {
  const handleInit = useCallback(async (engine: Engine): Promise<void> => {
    await loadSlim(engine)
  }, [])

  const options = useMemo<ISourceOptions>(() => ({
    fullScreen: { enable: false },
    background: { color: 'transparent' },
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      number: {
        value: 60,
        density: { enable: true, area: 800 },
      },
      color: {
        value: ['#8b5cf6', '#22d3ee', '#fb923c'],
      },
      shape: { type: 'circle' },
      opacity: { value: 0.3 },
      size: { value: { min: 3, max: 9 } },
      links: {
        enable: true,
        color: '#ffffff',
        opacity: 0.6,
        distance: 140,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        outModes: { default: 'bounce' },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
        onClick: { enable: true, mode: 'push' },
        resize: true,
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.35 } },
        push: { quantity: 3 },
        repulse: { distance: 120 },
      },
    },
  }), [])

  return (
    <div className="fixed inset-0 z-30 pointer-events-none">
      <Particles
        id="tsparticles"
        init={handleInit}
        options={options}
        className="w-full h-full"
      />
    </div>
  )
}
