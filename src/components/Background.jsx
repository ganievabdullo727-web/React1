import React, { memo, useMemo } from 'react'

const Background = memo(({ t, progress }) => {
  const dots = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: 30 + Math.random() * 70,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 6,
        dur: 6 + Math.random() * 8,
      })),
    []
  )

  return (
    <>
      <div className={`float-a absolute left-1/2 top-1/2 h-80 w-80 -translate-x-[90%] -translate-y-[70%] rounded-full blur-3xl ${t.blob1}`} />
      <div className={`float-b absolute left-1/2 top-1/2 h-80 w-80 -translate-x-[5%] -translate-y-[10%] rounded-full blur-3xl ${t.blob2}`} />
      <div
        className={`absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] transition-opacity duration-700 ${t.blob3}`}
        style={{ opacity: 0.3 + progress * 0.7 }}
      />
      {dots.map((d) => (
        <span
          key={d.id}
          className={`dot absolute rounded-full ${t.dot}`}
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.dur}s`,
          }}
        />
      ))}
    </>
  )
})

export default Background