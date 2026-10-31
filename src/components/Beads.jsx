import React, { memo } from 'react'

const N = 33
const R = 108
const C = 150
const IMAM_Y = C - R

const Defs = () => (
  <defs>
        <radialGradient id="tassel-head" cx="35%" cy="30%" r="80%">
      <stop offset="0%" stopColor="#fef3c7" />
      <stop offset="35%" stopColor="#f59e0b" />
      <stop offset="100%" stopColor="#6b2d0b" />
    </radialGradient>
    <radialGradient id="bead-off" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stopColor="#ffffff" />
      <stop offset="45%" stopColor="#f5efe6" />
      <stop offset="100%" stopColor="#b8a999" />
    </radialGradient>
    <radialGradient id="bead-gold" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stopColor="#fef3c7" />
      <stop offset="40%" stopColor="#f59e0b" />
      <stop offset="100%" stopColor="#78350f" />
    </radialGradient>
    <radialGradient id="bead-shadow">
      <stop offset="0%" stopColor="#451a03" stopOpacity="0.35" />
      <stop offset="100%" stopColor="#451a03" stopOpacity="0" />
    </radialGradient>
    {/* боковой свет на головке кисточки, как на цилиндре */}
    <linearGradient id="tassel-head" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#78350f" />
      <stop offset="28%" stopColor="#fcd34d" />
      <stop offset="55%" stopColor="#f59e0b" />
      <stop offset="100%" stopColor="#6b2d0b" />
    </linearGradient>
  </defs>
)

const Bead = ({ x, y, r, fill, lit }) => (
  <g
    className="transition-transform duration-300 ease-out motion-reduce:transition-none"
    style={{ transform: `scale(${lit ? 1.15 : 1})`, transformOrigin: `${x}px ${y}px` }}
  >
    <ellipse cx={x + 2} cy={y + r * 0.85} rx={r * 1.1} ry={r * 0.5} fill="url(#bead-shadow)" />
    <circle
      cx={x}
      cy={y}
      r={r}
      fill={fill}
      style={lit ? { filter: 'drop-shadow(0 0 5px rgba(16,185,129,0.75))' } : undefined}
    />
    <ellipse cx={x - r * 0.3} cy={y - r * 0.4} rx={r * 0.32} ry={r * 0.2} fill="#fff" opacity="0.85" />
    <circle cx={x + r * 0.35} cy={y + r * 0.4} r={r * 0.18} fill="#fff" opacity="0.18" />
  </g>
)

// Кисточка: шнурок, узелок, головка с обмоткой и бахрома
const FRINGE_START = IMAM_Y - 44
const FRINGE_END = IMAM_Y - 70

// t от -1 до 1: чем ближе к краю, тем короче нить, поэтому конец получается дугой
const strand = (k, total, spread, bulge) => {
  const t = (k - (total - 1) / 2) / ((total - 1) / 2)
  const x0 = C + t * 2
  const x1 = C + t * spread
  const yEnd = FRINGE_END + t * t * 7
  const mid = (FRINGE_START + yEnd) / 2
  return `M${x0} ${FRINGE_START} Q${C + t * (spread + bulge)} ${mid} ${x1} ${yEnd}`
}

const Tassel = () => (
  <g className="tassel-sway">
    {/* шнурок */}
    <path d={`M${C} ${IMAM_Y - 8} L${C} ${IMAM_Y - 29}`} stroke="#7c2d12" strokeWidth="2.2" strokeLinecap="round" />
    <path d={`M${C - 0.5} ${IMAM_Y - 9} L${C - 0.5} ${IMAM_Y - 28}`} stroke="#fbbf24" strokeWidth="0.6" strokeOpacity="0.8" />

    {/* бахрома: задний слой тёмный и шире, передний светлее */}
    <g strokeLinecap="round" fill="none">
      {Array.from({ length: 11 }, (_, k) => (
        <path
          key={`b${k}`}
          d={strand(k, 11, 2.3, 1)}
          stroke={k % 2 ? '#92400e' : '#78350f'}
          strokeWidth="1.1"
          opacity="0.9"
        />
      ))}
      {Array.from({ length: 14 }, (_, k) => (
        <path
          key={`f${k}`}
          d={strand(k, 14, 1.7, -1)}
          stroke={['#b45309', '#f59e0b', '#fbbf24', '#d97706'][k % 4]}
          strokeWidth="0.95"
        />
      ))}
    </g>

    {/* головка */}
    <path
      d={`M${C - 2.6} ${IMAM_Y - 33}
          C${C - 7.2} ${IMAM_Y - 36} ${C - 7.2} ${IMAM_Y - 42} ${C - 5.2} ${IMAM_Y - 46}
          L${C + 5.2} ${IMAM_Y - 46}
          C${C + 7.2} ${IMAM_Y - 42} ${C + 7.2} ${IMAM_Y - 36} ${C + 2.6} ${IMAM_Y - 33} Z`}
      fill="url(#tassel-head)"
    />
    {/* обмотка */}
    <path d={`M${C - 6.4} ${IMAM_Y - 38.5} Q${C} ${IMAM_Y - 36.5} ${C + 6.4} ${IMAM_Y - 38.5}`} stroke="#5b2108" strokeWidth="0.9" fill="none" opacity="0.7" />
    <path d={`M${C - 6.1} ${IMAM_Y - 42} Q${C} ${IMAM_Y - 40} ${C + 6.1} ${IMAM_Y - 42}`} stroke="#5b2108" strokeWidth="0.9" fill="none" opacity="0.7" />
    <path d={`M${C - 5.4} ${IMAM_Y - 45} Q${C} ${IMAM_Y - 43.5} ${C + 5.4} ${IMAM_Y - 45}`} stroke="#fde68a" strokeWidth="0.7" fill="none" opacity="0.6" />
    {/* блик */}
    <path d={`M${C - 3.6} ${IMAM_Y - 35} Q${C - 5} ${IMAM_Y - 40} ${C - 3.4} ${IMAM_Y - 44}`} stroke="#fff" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.55" />

    {/* узелок над головкой */}
    <Bead x={C} y={IMAM_Y - 31} r={3.6} lit={false} fill="url(#bead-gold)" />
  </g>
)

const Beads = memo(({ count }) => {
  return (
    <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full overflow-visible">
      <style>{`
        .tassel-sway { transform-origin: ${C}px ${IMAM_Y}px; animation: tassel-sway 4.5s ease-in-out infinite; }
        @keyframes tassel-sway { 0%, 100% { transform: rotate(-1.8deg); } 50% { transform: rotate(1.8deg); } }
        @media (prefers-reduced-motion: reduce) { .tassel-sway { animation: none; } }
      `}</style>
      <Defs />

      <circle cx={C} cy={C} r={R} fill="none" stroke="#78716c" strokeOpacity="0.5" strokeWidth="1.5" />

      {Array.from({ length: N }, (_, i) => {
        const a = ((i + 0.5) / N) * 2 * Math.PI - Math.PI / 2
        const on = i < count
        return (
          <Bead
            key={i}
            x={C + R * Math.cos(a)}
            y={C + R * Math.sin(a)}
            r={7}
            lit={on}
            fill={on ? 'url(#bead-on)' : 'url(#bead-off)'}
          />
        )
      })}

      <Tassel />

      <Bead x={C} y={IMAM_Y} r={9.5} lit={false} fill="url(#bead-gold)" />
    </svg>
  )
})

export default Beads