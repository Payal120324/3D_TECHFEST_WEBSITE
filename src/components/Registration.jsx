import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { EVENT_DATE } from '../data.js'

function useCountdown(targetDate) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    const target = new Date(targetDate).getTime()
    function tick() {
      const diff = Math.max(target - Date.now(), 0)
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return time
}

export default function Registration() {
  const { d, h, m, s } = useCountdown(EVENT_DATE)
  const units = [
    ['DAYS', d],
    ['HRS', h],
    ['MIN', m],
    ['SEC', s],
  ]

  return (
    <section id="register" className="relative z-10 px-5 md:px-16 py-32 md:py-36">
      <Reveal>
        <div
          className="relative rounded-xl border border-line px-6 md:px-20 py-16 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(76,243,255,0.06), rgba(177,76,255,0.06))',
          }}
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">Your seat in the arena is still open</h2>
          <p className="text-muted max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Registration includes all six arenas, the 72-hour hackathon, and floor access for opening night.
            Teams of up to 4.
          </p>

          <div className="flex gap-5 justify-center flex-wrap mb-10">
            {units.map(([label, val]) => (
              <div key={label} className="min-w-[76px]">
                <div className="font-mono text-3xl font-semibold text-cyan drop-shadow-[0_0_18px_rgba(76,243,255,0.4)]">
                  {String(val).padStart(2, '0')}
                </div>
                <div className="font-mono text-[10px] tracking-wider text-muted mt-1">{label}</div>
              </div>
            ))}
          </div>

          <motion.a
            href="#contact"
            whileHover={{ y: -2, boxShadow: '0 0 50px rgba(177,76,255,0.45)' }}
            className="inline-block font-mono text-sm tracking-wide px-11 py-4.5 rounded-sm bg-gradient-to-r from-cyan to-violet text-void font-semibold"
          >
            Reserve Your Spot →
          </motion.a>
        </div>
      </Reveal>
    </section>
  )
}
