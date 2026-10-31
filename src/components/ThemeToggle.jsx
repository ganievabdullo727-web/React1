import React, { memo } from 'react'

const ThemeToggle = memo(({ dark, onToggle }) => (
  <button
    onClick={onToggle}
    aria-label="Сменить тему"
    className={`relative h-8 w-16 rounded-full border border-white/50 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] transition-colors duration-500 ${
      dark ? 'bg-slate-700' : 'bg-sky-200'
    }`}
  >
    <span
      className={`absolute top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-b from-white to-slate-300 text-xs shadow transition-all duration-500 ${
        dark ? 'left-9' : 'left-0.5'
      }`}
    >
      {dark ? '🌙' : '☀️'}
    </span>
  </button>
))

export default ThemeToggle
