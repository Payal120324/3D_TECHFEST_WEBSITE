import { useRef } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { EVENTS } from '../data.js'

function EventCard({ ev, index }) {
  const cardRef = useRef(null)

  function handleMove(e) {
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = e.clientX - r.left
    const py = e.clientY - r.top
    el.style.setProperty('--mx', `${px}px`)
    el.style.setProperty('--my', `${py}px`)
    const rx = ((py / r.height) - 0.5) * -8
    const ry = ((px / r.width) - 0.5) * 8
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`
  }
  function handleLeave() {
    const el = cardRef.current
    if (el) el.style.transform = 'perspective(800px) rotateX(0) rotateY(0)'
  }

  return (
    <Reveal delay={index * 0.06}>
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="event-card relative rounded-md border border-line glass p-7 overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-cyan/50 hover:shadow-[0_20px_60px_-20px_rgba(76,243,255,0.25)]"
        style={{
          backgroundImage:
            'radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(76,243,255,0.14), transparent 60%)',
        }}
      >
        <div className="font-mono text-[11px] text-violet tracking-wider">ARENA / {ev.i}</div>
        <h3 className="font-display font-bold text-xl mt-3 mb-2.5">{ev.name}</h3>
        <p className="text-muted text-sm leading-relaxed font-light">{ev.desc}</p>
        <span className="inline-block mt-4 font-mono text-[10.5px] tracking-wider text-cyan border border-cyan/30 px-2.5 py-1.5 rounded-sm">
          {ev.tag}
        </span>
      </div>
    </Reveal>
  )
}

export default function Events() {
  return (
    <section id="events" className="relative z-10 px-5 md:px-16 py-32 md:py-36">
      <Reveal className="max-w-xl mb-16">
        <div className="font-mono text-xs tracking-[0.3em] text-violet uppercase mb-3">// Arenas</div>
        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight">
          Six arenas. One night that doesn&apos;t end.
        </h2>
        <p className="text-muted mt-4 font-light">
          Hover a card to power it up. Each arena runs its own track, judging panel, and prize pool.
        </p>
      </Reveal>

      <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {EVENTS.map((ev, i) => (
          <EventCard key={ev.i} ev={ev} index={i} />
        ))}
      </div>
    </section>
  )
}
