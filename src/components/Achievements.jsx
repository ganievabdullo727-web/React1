import React, { memo } from 'react'

const LIST = [
  { at: 5, icon: '⚡', label: 'Старт' },
  { at: 10, icon: '🔥', label: 'Десятка' },
  { at: 25, icon: '💎', label: 'Алмаз' },
  { at: 50, icon: '👑', label: 'Король' },
]

const Achievements = memo(({ t, best }) => (
  <div className="relative mt-5 flex justify-center gap-2">
    {LIST.map((a) => {
      const done = best >= a.at
      return (
        <div
          key={a.at}
          title={`${a.label}: ${a.at} кликов`}
          className={`flex h-12 w-12 flex-col items-center justify-center rounded-2xl border text-lg transition duration-500 ${t.chip} ${
            done ? 'scale-100 opacity-100 shadow-[0_0_18px_rgba(103,232,249,0.6)]' : 'scale-90 opacity-35 grayscale'
          }`}
        >
          <span>{a.icon}</span>
          <span className="text-[9px] font-semibold">{a.at}</span>
        </div>
      )
    })}
  </div>
))

export default Achievements