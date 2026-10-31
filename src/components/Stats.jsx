import React, { memo } from 'react'

const Stats = memo(({ t, history, total, best }) => (
  <div className="relative mt-5 text-left">
    <div className="mb-3 grid grid-cols-2 gap-3">
      {[['Сейчас', total], ['Рекорд', best]].map(([label, value]) => (
        <div key={label} className={`rounded-2xl border px-4 py-2 backdrop-blur-md ${t.chip}`}>
          <p className={`text-[10px] uppercase tracking-widest ${t.sub}`}>{label}</p>
          <p className="text-xl font-bold">{value}</p>
        </div>
      ))}
    </div>
    <ul className={`space-y-1 text-xs ${t.sub}`}>
      {history.length === 0 && <li>Пока нет кликов</li>}
      {history.map((h) => (
        <li key={h.id} className="slide flex justify-between">
          <span>Клик</span>
          <span>{h.time}</span>
        </li>
      ))}
    </ul>
  </div>
))

export default Stats