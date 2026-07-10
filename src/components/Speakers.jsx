import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { SPEAKERS } from '../data.js'

export default function Speakers() {
  return (
    <section id="speakers" className="relative z-10 px-5 md:px-16 py-32 md:py-36">
      <Reveal className="max-w-xl mb-16">
        <div className="font-mono text-xs tracking-[0.3em] text-violet uppercase mb-3">// Transmission</div>
        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight">Voices on the main stage</h2>
        <p className="text-muted mt-4 font-light">
          Engineers and founders who&apos;ll be broadcasting live from the keynote deck.
        </p>
      </Reveal>

      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
        {SPEAKERS.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="rounded-lg p-[2px] h-full"
              style={{ background: 'linear-gradient(135deg, rgba(76,243,255,0.5), rgba(177,76,255,0.5))' }}
            >
              <div className="bg-navy-2 rounded-[7px] p-7 h-full">
                <div
                  className="relative w-[72px] h-[72px] rounded-full mb-4.5 flex items-center justify-center"
                  style={{ background: 'conic-gradient(from 180deg, #4cf3ff, #b14cff, #ffb13b, #4cf3ff)' }}
                >
                  <div className="absolute inset-[3px] rounded-full bg-navy-2" />
                  <span className="relative z-10 font-display font-bold">{s.init}</span>
                </div>
                <h4 className="font-display text-lg mb-1">{s.name}</h4>
                <div className="font-mono text-[11.5px] text-cyan tracking-wide">{s.role}</div>
                <p className="mt-3.5 text-muted text-sm leading-relaxed font-light">{s.bio}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
