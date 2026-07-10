export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-line px-5 md:px-16 pt-14 pb-10">
      <div className="flex flex-wrap justify-between gap-8 mb-10">
        <div>
          <h5 className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase mb-4">Techfest 2026</h5>
          <a href="#about" className="block text-sm mb-2.5 opacity-85 hover:opacity-100 hover:text-cyan transition-colors">About</a>
          <a href="#events" className="block text-sm mb-2.5 opacity-85 hover:opacity-100 hover:text-cyan transition-colors">Events</a>
          <a href="#timeline" className="block text-sm mb-2.5 opacity-85 hover:opacity-100 hover:text-cyan transition-colors">Timeline</a>
        </div>
        <div>
          <h5 className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase mb-4">Contact</h5>
          <a href="mailto:crew@techfest2026.dev" className="block text-sm mb-2.5 opacity-85 hover:opacity-100 hover:text-cyan transition-colors">
            crew@techfest2026.dev
          </a>
          <span className="block text-sm mb-2.5 opacity-85">National Institute of Technology, Main Campus</span>
        </div>
        <div>
          <h5 className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase mb-4">Follow the signal</h5>
          <a href="#" className="block text-sm mb-2.5 opacity-85 hover:opacity-100 hover:text-cyan transition-colors">Instagram</a>
          <a href="#" className="block text-sm mb-2.5 opacity-85 hover:opacity-100 hover:text-cyan transition-colors">X / Twitter</a>
          <a href="#" className="block text-sm mb-2.5 opacity-85 hover:opacity-100 hover:text-cyan transition-colors">Discord</a>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-3 font-mono text-[11px] text-muted border-t border-line pt-6">
        <span>© 2026 TECHFEST — Student Technical Council</span>
        <span>BUILT WITH REACT + THREE FIBER + GSAP</span>
      </div>
    </footer>
  )
}
