import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e) => {
      gsap.to(el, { left: e.clientX, top: e.clientY, duration: 0.6, ease: 'power3.out' })
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={ref}
      className="fixed w-[420px] h-[420px] rounded-full z-[1] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      style={{
        left: -500,
        top: -500,
        background: 'radial-gradient(circle, rgba(76,243,255,0.08), transparent 70%)',
      }}
    />
  )
}
