
'use client'
import { useEffect, useState } from 'react'
export default function ReadingProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100
      setPct(scrolled)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="fixed top-16 left-0 right-0 h-1 bg-white/5 z-40">
      <div className="h-full" style={{ width: `${pct}%`, background: 'linear-gradient(90deg, rgba(124,58,237,.9), rgba(6,182,212,.9))' }} />
    </div>
  )
}
