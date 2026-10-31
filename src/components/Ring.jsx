import React, { memo } from 'react'

const R = 70
const C = 2 * Math.PI * R

const Ring = memo(({ t, count, goal }) => {
  const progress = Math.min(count / goal, 1)

  return (
    <div className="relative mx-auto mt-4 h-52 w-52">
      <div
        className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-300 via-teal-300 to-emerald-300 blur-2xl transition-opacity duration-500"
        style={{ opacity: 0.2 + progress * 0.6 }}
      />
      <svg viewBox="0 0 160 160" className="relative h-full w-full -rotate-90">
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="45%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#6ee7b7" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r={R} fill="none" stroke={t.ring} strokeWidth="9" />
        <circle
          cx="80" cy="80" r={R} fill="none"
          stroke="url(#grad)" strokeWidth="9" strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - Math.max(progress, 0.02))}
          className="transition-all duration-500 ease-out"
          style={{ filter: 'drop-shadow(0 0 10px rgba(103,232,249,.9))' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          key={count}
          className={`pop bg-gradient-to-b bg-clip-text text-7xl font-black text-transparent ${t.num}`}
        >
          {count}
        </span>
      </div>
    </div>
  )
})

export default Ring