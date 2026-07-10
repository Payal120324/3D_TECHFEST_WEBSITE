import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#events', label: 'Events' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#speakers', label: 'Speakers' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-16 py-5 backdrop-blur-md transition-colors duration-300 border-b ${
        scrolled ? 'bg-[#06081499]/90 border-line' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="flex items-center gap-2 font-display font-bold tracking-wider text-sm md:text-base">
        <span className="core-dot w-2.5 h-2.5 rounded-full bg-cyan shadow-[0_0_12px_#4cf3ff,0_0_24px_#4cf3ff]" />
        TECHFEST // 2026
      </div>

      <div className="hidden md:flex gap-9 font-mono text-xs tracking-widest">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="relative text-muted hover:text-white transition-colors group">
            {l.label}
            <span className="absolute left-0 -bottom-1 h-px w-0 bg-cyan shadow-[0_0_8px_#4cf3ff] transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      <motion.a
        href="#register"
        whileHover={{ scale: 1.05, backgroundColor: '#4cf3ff', color: '#05060d' }}
        className="font-mono text-xs tracking-widest px-5 py-2.5 border border-cyan text-cyan rounded-sm bg-cyan/5"
      >
        Register
      </motion.a>
    </nav>
  )
}
