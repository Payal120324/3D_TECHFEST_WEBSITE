import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { STATS } from '../data.js'

function Counter({ target }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1600
    const start = performance.now()
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setVal(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target])

  return (
    <div ref={ref} className="font-display text-4xl font-bold text-cyan drop-shadow-[0_0_20px_rgba(76,243,255,0.4)]">
      {val}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative z-10 px-5 md:px-16 py-32 md:py-36">
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <Reveal>
          <div className="font-mono text-xs tracking-[0.3em] text-violet uppercase mb-3">// About the Fest</div>
          <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-6">
            A three-day system upgrade for student engineering
          </h2>
          <p className="text-muted font-light leading-loose mb-4">
            TechFest 2026 is the campus&apos;s largest student-run technology festival —{' '}
            <strong className="text-white font-medium">38 events</strong>,{' '}
            <strong className="text-white font-medium">6 competition arenas</strong>, and a hackathon that runs
            through the night. It exists for one reason: to give builders a stage before the industry does.
          </p>
          <p className="text-muted font-light leading-loose">
            Every arena on this site is a real space on campus. The AI Core above the fold isn&apos;t a mascot —
            it&apos;s a live render of the same particle-and-light rig that lights the main stage on opening night.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-px bg-line border border-line rounded overflow-hidden">
            {STATS.map((s) => (
              <div key={s.label} className="glass p-7">
                <Counter target={s.num} />
                <div className="font-mono text-[11px] tracking-wider text-muted mt-1.5 uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
