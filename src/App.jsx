import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import Beads from './components/Beads'

const DHIKR = [
  { ar: 'سُبْحَانَ ٱللَّٰهِ', ru: 'Субханаллах', tr: 'Свят Аллах' },
  { ar: 'ٱلْحَمْدُ لِلَّٰهِ', ru: 'Альхамдулиллях', tr: 'Хвала Аллаху' },
  { ar: 'ٱللَّٰهُ أَكْبَرُ', ru: 'Аллаху акбар', tr: 'Аллах велик' },
]

const KEY = 'tasbih-state'
const OLD_KEY = 'tasbih-total'
const EMPTY = { total: 0, step: 0, count: 0, rounds: 0 }

const load = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY))
    if (saved && [saved.total, saved.step, saved.count, saved.rounds].every(Number.isFinite)) {
      return saved
    }
    const total = Math.floor(Number(localStorage.getItem(OLD_KEY))) || 0
    if (total > 0) {
      const idx = (total - 1) % 99
      return {
        total,
        step: Math.floor(idx / 33),
        count: (idx % 33) + 1,
        rounds: Math.floor(total / 99),
      }
    }
  } catch {}
  return EMPTY
}

const reducer = (s, a) => {
  switch (a.type) {
    case 'tap': {
      if (s.count < 33) {
        const count = s.count + 1
        const done = s.step === 2 && count === 33
        return { ...s, count, total: s.total + 1, rounds: s.rounds + (done ? 1 : 0) }
      }
      return { ...s, step: (s.step + 1) % 3, count: 1, total: s.total + 1 }
    }
    case 'undo': {
      if (s.count === 0) return s
      const wasDone = s.step === 2 && s.count === 33
      return {
        ...s,
        count: s.count - 1,
        total: Math.max(0, s.total - 1),
        rounds: s.rounds - (wasDone ? 1 : 0),
      }
    }
    case 'goto':
      return a.step === s.step && s.count === 0 ? s : { ...s, step: a.step, count: 0 }
    case 'reset':
      return EMPTY
    default:
      return s
  }
}

const glass =
  'border border-white/70 bg-white/40 shadow-[0_4px_10px_-4px_rgba(146,64,14,0.25),inset_0_1px_0_rgba(255,255,255,0.9)]'
const pill =
  'rounded-2xl px-5 py-2 text-sm font-medium text-stone-600 transition hover:bg-white/70 active:translate-y-px active:scale-95 disabled:opacity-40 disabled:hover:bg-white/40'

const App = () => {
  const [s, dispatch] = useReducer(reducer, undefined, load)
  const [confirming, setConfirming] = useState(false)
  const prevTotal = useRef(s.total)
  const cardRef = useRef(null)

  const { total, step, count, rounds } = s
  const finished = step === 2 && count === 33
  const stepDone = count === 33
  const dhikr = DHIKR[step]

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(s))
    } catch {}
  }, [s])

  useEffect(() => {
    if (total > prevTotal.current) {
      navigator.vibrate?.(count === 33 ? [30, 40, 30] : 12)
    }
    prevTotal.current = total
  }, [total, count])

  useEffect(() => {
    if (!confirming) return
    const t = setTimeout(() => setConfirming(false), 4000)
    return () => clearTimeout(t)
  }, [confirming])

  const tap = useCallback(() => {
    setConfirming(false)
    dispatch({ type: 'tap' })
  }, [])

  const goto = useCallback((i) => {
    setConfirming(false)
    dispatch({ type: 'goto', step: i })
  }, [])

  const undo = useCallback(() => dispatch({ type: 'undo' }), [])

  const reset = useCallback(() => {
    dispatch({ type: 'reset' })
    setConfirming(false)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') return setConfirming(false)
      if (e.repeat) return
      if (e.key === 'ArrowLeft') return goto(Math.max(0, step - 1))
      if (e.key === 'ArrowRight') return goto(Math.min(2, step + 1))
      const isSpace = e.code === 'Space'
      if (isSpace || e.key === 'ArrowUp') {
        if (isSpace && e.target.closest?.('button')) return
        e.preventDefault()
        tap()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [tap, goto, step])

  const onMove = (e) => {
    const el = cardRef.current
    if (!el || e.pointerType !== 'mouse') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`
  }
  const onLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = ''
  }

  return (
    // pb-10 поднимает карточку чуть выше центра
    <div className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-gradient-to-br from-amber-100 via-orange-100 to-emerald-200 px-4 pb-10 pt-4 text-stone-800">
      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-amber-300/60 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-emerald-300/60 blur-3xl" />

      <div
        className="relative w-full max-w-sm"
        style={{ perspective: '1200px' }}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
      >
        <div
          ref={cardRef}
          className="rounded-[2rem] border border-white/70 bg-gradient-to-b from-white/60 to-white/20 p-5 text-center shadow-[0_30px_70px_-20px_rgba(146,64,14,0.4),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.3)] backdrop-blur-2xl transition-transform duration-150 ease-out motion-reduce:transition-none"
        >
          <h1 className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
            Тасбих
          </h1>

          {/* Текущий зикр */}
          <div className="mt-4 min-h-[6.75rem]">
            <p
              lang="ar"
              dir="rtl"
              className="font-serif text-4xl leading-relaxed text-stone-900 [text-shadow:0_1px_0_#fff,0_3px_6px_rgba(146,64,14,0.2)]"
            >
              {dhikr.ar}
            </p>
            <p className="mt-1 text-lg font-semibold">{dhikr.ru}</p>
            <p className="text-sm text-stone-600">{dhikr.tr}</p>
          </div>

          {/* 3D-кольцо из бусин и кнопка */}
          <div className="relative mx-auto mt-4 h-64 w-64" style={{ perspective: '800px' }}>
            <div className="absolute inset-x-6 -bottom-2 h-6 rounded-full bg-amber-950/25 blur-xl" />

            <div
              className="absolute inset-0"
              style={{ transform: 'rotateX(24deg)', transformStyle: 'preserve-3d' }}
            >
              <Beads count={count} />

              <div className="absolute inset-[3.2rem]" style={{ transform: 'translateZ(26px)' }}>
                <button
                  onClick={tap}
                  aria-label={`Нажать. ${dhikr.ru}, ${count} из 33`}
                  className="flex h-full w-full flex-col items-center justify-center rounded-full border border-white/90 bg-gradient-to-b from-white to-amber-50 shadow-[0_9px_0_#6ee7b7,0_20px_30px_-6px_rgba(6,78,59,0.45),inset_0_2px_0_#fff,inset_0_-8px_16px_rgba(16,185,129,0.15)] transition-all duration-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/60 active:translate-y-[7px] active:shadow-[0_2px_0_#6ee7b7,0_6px_12px_-4px_rgba(6,78,59,0.45),inset_0_2px_0_#fff,inset_0_-8px_16px_rgba(16,185,129,0.15)] motion-reduce:transition-none"
                >
                  <span
                    aria-live="off"
                    className="text-6xl font-black tracking-tight text-stone-900 [text-shadow:0_2px_0_#fff,0_4px_8px_rgba(146,64,14,0.25)]"
                  >
                    {count}
                  </span>
                  <span className="text-xs text-stone-500">из 33</span>
                </button>
              </div>
            </div>
          </div>

          {/* Статус */}
          <p aria-live="polite" className="mt-3 h-5 text-sm font-medium text-emerald-700">
            {finished
              ? 'Тасбих завершён. Мааша Аллах'
              : stepDone
              ? 'Нажмите, чтобы перейти к следующему зикру'
              : ''}
          </p>

          {/* Три этапа */}
          <div className="mt-3 grid grid-cols-3 gap-2">
            {DHIKR.map((d, i) => {
              const active = i === step && !finished
              const done = i < step || finished
              return (
                <button
                  key={d.ru}
                  onClick={() => goto(i)}
                  aria-current={i === step ? 'step' : undefined}
                  className={`rounded-2xl border px-2 py-2 text-[11px] font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 active:scale-95 ${
                    active
                      ? 'border-emerald-400 bg-white/90 text-emerald-800 shadow-[0_6px_14px_-4px_rgba(16,185,129,0.55),inset_0_1px_0_#fff]'
                      : done
                      ? 'border-amber-300 bg-amber-100/70 text-amber-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:bg-amber-100'
                      : 'border-white/70 bg-white/30 text-stone-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:bg-white/60'
                  }`}
                >
                  {d.ru}
                </button>
              )
            })}
          </div>

          {/* Статистика */}
          <div className="mt-3 grid grid-cols-2 gap-3 text-left">
            <div className={`rounded-2xl px-4 py-2 ${glass}`}>
              <p className="text-[10px] uppercase tracking-widest text-stone-500">Всего</p>
              <p className="text-xl font-bold">{total}</p>
            </div>
            <div className={`rounded-2xl px-4 py-2 ${glass}`}>
              <p className="text-[10px] uppercase tracking-widest text-stone-500">Кругов по 99</p>
              <p className="text-xl font-bold">{rounds}</p>
            </div>
          </div>

          {/* Действия */}
          <div className="mt-3 flex h-10 items-center justify-center gap-2">
            {confirming ? (
              <>
                <span className="text-sm font-medium text-stone-700">Сбросить всё?</span>
                <button
                  onClick={reset}
                  autoFocus
                  className="rounded-2xl border border-red-300 bg-red-100/80 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-200/80 active:scale-95"
                >
                  Да
                </button>
                <button onClick={() => setConfirming(false)} className={`${pill} ${glass}`}>
                  Нет
                </button>
              </>
            ) : (
              <>
                <button onClick={undo} disabled={count === 0} className={`${pill} ${glass}`}>
                  Отменить
                </button>
                <button
                  onClick={() => setConfirming(true)}
                  disabled={total === 0}
                  className={`${pill} ${glass}`}
                >
                  Сбросить
                </button>
              </>
            )}
          </div>

          <p className="mt-2 text-[11px] text-stone-500">
            Пробел или ↑ считают, ← → переключают зикр
          </p>
        </div>
      </div>
    </div>
  )
}

export default App