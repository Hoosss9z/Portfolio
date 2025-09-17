export default function SeparatorWave() {
  return (
    <div className="relative mt-16 md:mt-24">
      {/* vague SVG */}
      <svg viewBox="0 0 1440 120" className="w-full h-16 md:h-24 block" aria-hidden>
        <path
          d="M0,64 C240,128 480,0 720,32 C960,64 1200,96 1440,48 L1440,120 L0,120 Z"
          fill="url(#grad)"
          opacity="0.6"
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgb(139 92 246 / 0.25)" />
            <stop offset="50%" stopColor="rgb(34 211 238 / 0.25)" />
            <stop offset="100%" stopColor="rgb(251 146 60 / 0.25)" />
          </linearGradient>
        </defs>
      </svg>

      {/* fine ligne lumineuse */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-purple-500/40 via-cyan-400/40 to-orange-400/40 blur-[0.5px]" />
    </div>
  );
}
