import Reveal from './Reveal.jsx'
import { TIMELINE } from '../data.js'

export default function Timeline() {
  return (
    <section id="timeline" className="relative z-10 px-5 md:px-16 py-32 md:py-36">
      <Reveal className="max-w-xl mb-16">
        <div className="font-mono text-xs tracking-[0.3em] text-violet uppercase mb-3">// Signal Path</div>
        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight">The three-day sequence</h2>
        <p className="text-muted mt-4 font-light">
          One continuous energy path from opening ceremony to awards night.
        </p>
      </Reveal>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-[14px] top-1.5 bottom-1.5 w-px bg-gradient-to-b from-cyan via-violet to-amber shadow-[0_0_12px_rgba(76,243,255,0.4)]" />

        {TIMELINE.map((item, i) => (
          <Reveal key={item.h} delay={i * 0.08} className="relative pl-14 pb-13 last:pb-0">
            <div className="absolute left-0 top-0.5 w-3.5 h-3.5 rounded-full bg-void border-2 border-cyan shadow-[0_0_16px_#4cf3ff] z-10" />
            <div className="font-mono text-xs text-violet tracking-wider">{item.t}</div>
            <h4 className="font-display text-lg mt-2 mb-1.5">{item.h}</h4>
            <p className="text-muted text-sm font-light leading-relaxed">{item.p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
