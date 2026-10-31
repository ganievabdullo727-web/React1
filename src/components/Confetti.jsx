import React, { memo, useMemo } from 'react'

const COLORS = ['#67e8f9', '#5eead4', '#ffffff', '#fde68a', '#7dd3fc']

const Confetti = memo(({ active }) => {
  const pieces = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: 10 + Math.random() * 80,
        x: (Math.random() - 0.5) * 260,
        r: (Math.random() - 0.5) * 900,
        delay: Math.random() * 0.25,
        color: COLORS[i % COLORS.length],
        size: 6 + Math.random() * 6,
      })),
    []
  )

  if (!active) return null

  return (
    <div className="pointer-events-none absolute left-1/2 top-1/4 z-20 h-0 w-full max-w-md -translate-x-1/2">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti absolute rounded-sm"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.5,
            background: p.color,
            animationDelay: `${p.delay}s`,
            '--x': `${p.x}px`,
            '--r': `${p.r}deg`,
          }}
        />
      ))}
    </div>
  )
})

export default Confetti