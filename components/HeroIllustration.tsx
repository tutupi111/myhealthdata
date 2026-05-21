export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square animate-float">
      <div className="absolute inset-8 rounded-full bg-teal-400/10 blur-3xl animate-pulse-glow" />
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative w-full h-full drop-shadow-[0_0_40px_rgba(0,209,178,0.25)]"
        aria-hidden
      >
        <defs>
          <linearGradient id="layerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="layerGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="layerGrad3" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5eead4" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.25" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base platform */}
        <ellipse cx="200" cy="320" rx="120" ry="24" fill="#00d1b2" fillOpacity="0.15" />

        {/* Layer 1 - bottom */}
        <g transform="translate(80, 210)" filter="url(#glow)">
          <path
            d="M0 60 L120 20 L240 60 L240 110 L120 150 L0 110 Z"
            fill="url(#layerGrad3)"
            stroke="#2dd4bf"
            strokeOpacity="0.4"
            strokeWidth="1.5"
          />
        </g>

        {/* Layer 2 - middle */}
        <g transform="translate(60, 140)" filter="url(#glow)">
          <path
            d="M0 60 L140 15 L280 60 L280 110 L140 155 L0 110 Z"
            fill="url(#layerGrad2)"
            stroke="#2dd4bf"
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
          <rect x="118" y="52" width="44" height="44" rx="10" fill="#0a0e14" fillOpacity="0.35" stroke="#5eead4" strokeOpacity="0.6" />
          <path
            d="M132 74 C132 68 148 68 148 74 C148 80 140 86 140 86 C140 86 132 80 132 74Z"
            stroke="#5eead4"
            strokeWidth="2"
            fill="none"
          />
        </g>

        {/* Layer 3 - top */}
        <g transform="translate(40, 70)" filter="url(#glow)">
          <path
            d="M0 60 L160 10 L320 60 L320 110 L160 160 L0 110 Z"
            fill="url(#layerGrad1)"
            stroke="#5eead4"
            strokeOpacity="0.7"
            strokeWidth="2"
          />
          <rect x="138" y="48" width="44" height="44" rx="10" fill="#0a0e14" fillOpacity="0.35" stroke="#5eead4" strokeOpacity="0.8" />
          <path
            d="M152 66 V78 M146 72 H158 M146 58 H158 V66 H146 Z"
            stroke="#5eead4"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect x="198" y="48" width="44" height="44" rx="10" fill="#0a0e14" fillOpacity="0.35" stroke="#5eead4" strokeOpacity="0.8" />
          <circle cx="220" cy="70" r="10" stroke="#5eead4" strokeWidth="2" fill="none" />
        </g>

        {/* Accent nodes */}
        <circle cx="90" cy="120" r="4" fill="#2dd4bf" fillOpacity="0.8" />
        <circle cx="310" cy="180" r="3" fill="#38bdf8" fillOpacity="0.8" />
        <circle cx="320" cy="90" r="5" fill="#5eead4" fillOpacity="0.6" />
      </svg>
    </div>
  );
}
