'use client'

import { useEffect, useState } from 'react'

export default function ScrollGradientBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-20"
      style={{
        backgroundImage: `
          linear-gradient(
            to bottom,
            #0f172a,
            #0d5ee0ff,
            #000000ff,
            #0c606eff,
            #0f172a
          )
        `,
        backgroundSize: '100% 500vh',
        backgroundRepeat: 'repeat-y',
        backgroundPositionY: `${scrollY}px`,
        transition: 'background-position 0.2s ease-out',
      }}
    />
  )
}
