import { motion } from 'framer-motion'
import Hero3D from './Hero3D.jsx'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section className="hero-section relative h-screen min-h-[680px] flex flex-col items-center justify-center text-center overflow-hidden">
      <Hero3D />

      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 px-5">
        <motion.div variants={fadeUp} className="font-mono text-xs tracking-[0.35em] text-cyan uppercase mb-6">
          27 — 29 MARCH · NATIONAL INSTITUTE OF TECHNOLOGY
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display font-black leading-[0.95] text-gradient-hero text-[48px] sm:text-[72px] md:text-[96px] lg:text-[128px]"
        >
          TECHFEST
          <br />
          2026
        </motion.h1>

        <motion.p variants={fadeUp} className="font-body font-light text-muted max-w-xl mx-auto mt-6 mb-10 text-base md:text-lg leading-relaxed">
          The future isn&apos;t attended. It&apos;s activated. Three days of hackathons, robotics, AI
          competitions and live builds — where student engineers ship the next decade.
        </motion.p>

        <motion.div variants={fadeUp} className="flex gap-4 justify-center flex-wrap">
          <motion.a
            href="#register"
            whileHover={{ y: -2, boxShadow: '0 0 50px rgba(177,76,255,0.45)' }}
            className="font-mono text-sm tracking-wide px-8 py-4 rounded-sm bg-gradient-to-r from-cyan to-violet text-void font-semibold shadow-[0_0_30px_rgba(76,243,255,0.25)]"
          >
            Enter the Core
          </motion.a>
          <motion.a
            href="#events"
            whileHover={{ borderColor: '#4cf3ff', color: '#4cf3ff' }}
            className="font-mono text-sm tracking-wide px-8 py-4 rounded-sm border border-line text-white"
          >
            Explore Events
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] text-muted">SCROLL</span>
        <div className="w-px h-9 bg-gradient-to-b from-cyan to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
