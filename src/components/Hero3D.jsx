import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function makeGlowTexture() {
  const c = document.createElement('canvas')
  c.width = c.height = 256
  const ctx = c.getContext('2d')
  const grd = ctx.createRadialGradient(128, 128, 0, 128, 128, 128)
  grd.addColorStop(0, 'rgba(76,243,255,0.9)')
  grd.addColorStop(0.4, 'rgba(76,243,255,0.25)')
  grd.addColorStop(1, 'rgba(76,243,255,0)')
  ctx.fillStyle = grd
  ctx.fillRect(0, 0, 256, 256)
  return new THREE.CanvasTexture(c)
}

function Particles() {
  const ref = useRef()
  const positions = useMemo(() => {
    const COUNT = 900
    const arr = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      const r = 3.5 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0006
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#8ad9ff" size={0.02} transparent opacity={0.55} />
    </points>
  )
}

function Ring({ radius, color, tiltX, tiltZ, opacity, spin }) {
  const ref = useRef()
  useFrame(() => {
    if (ref.current) ref.current.rotation.z += spin
  })
  return (
    <mesh ref={ref} rotation={[tiltX, 0, tiltZ]}>
      <torusGeometry args={[radius, 0.006, 8, 128]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  )
}

function AICore({ mouse, scrollT }) {
  const group = useRef()
  const glowMesh = useRef()
  const shell1 = useRef()
  const shell2 = useRef()
  const sprite = useRef()
  const glowTex = useMemo(() => makeGlowTexture(), [])
  const target = useRef({ x: 0, y: 0 })

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    target.current.x += (mouse.current.x - target.current.x) * 0.04
    target.current.y += (mouse.current.y - target.current.y) * 0.04

    if (group.current) {
      group.current.rotation.y = t * 0.18 + target.current.x * 0.4
      group.current.rotation.x = Math.sin(t * 0.15) * 0.08 + target.current.y * 0.25
      group.current.position.y = -scrollT.current * 0.6
    }
    if (shell1.current) shell1.current.rotation.y -= 0.003
    if (shell2.current) shell2.current.rotation.y += 0.0018

    const pulse = 1 + Math.sin(t * 1.4) * 0.04
    if (glowMesh.current) glowMesh.current.scale.setScalar(pulse)
    if (sprite.current) sprite.current.material.opacity = 0.4 + Math.sin(t * 1.1) * 0.08

    const cam = state.camera
    cam.position.z = 9 - scrollT.current * 2.4
    cam.position.y = scrollT.current * 1.6
    cam.lookAt(0, 0, 0)
  })

  return (
    <group ref={group}>
      <mesh ref={glowMesh}>
        <icosahedronGeometry args={[1.15, 2]} />
        <meshBasicMaterial color="#4cf3ff" transparent opacity={0.12} />
      </mesh>

      <mesh ref={shell1}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshBasicMaterial color="#4cf3ff" wireframe transparent opacity={0.55} />
      </mesh>

      <mesh ref={shell2}>
        <icosahedronGeometry args={[2.05, 1]} />
        <meshBasicMaterial color="#b14cff" wireframe transparent opacity={0.28} />
      </mesh>

      <Ring radius={2.7} color="#4cf3ff" tiltX={Math.PI / 2.3} tiltZ={0.3} opacity={0.6} spin={0.0016} />
      <Ring radius={3.2} color="#b14cff" tiltX={Math.PI / 2.8} tiltZ={-0.5} opacity={0.45} spin={-0.0011} />
      <Ring radius={3.6} color="#ffb13b" tiltX={Math.PI / 2.1} tiltZ={1.1} opacity={0.3} spin={0.0008} />

      <sprite ref={sprite} scale={[6, 6, 1]}>
        <spriteMaterial map={glowTex} transparent opacity={0.5} blending={THREE.AdditiveBlending} depthWrite={false} />
      </sprite>
    </group>
  )
}

function Scene({ mouse, scrollT }) {
  const { scene } = useThree()
  useEffect(() => {
    scene.fog = new THREE.FogExp2(0x05060d, 0.035)
  }, [scene])

  return (
    <>
      <AICore mouse={mouse} scrollT={scrollT} />
      <Particles />
    </>
  )
}

export default function Hero3D() {
  const mouse = useRef({ x: 0, y: 0 })
  const scrollT = useRef(0)

  useEffect(() => {
    const handleMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    const heroHeight = document.querySelector('.hero-section')?.clientHeight || window.innerHeight
    const handleScroll = () => {
      scrollT.current = Math.min(window.scrollY / heroHeight, 1.4)
    }
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Canvas
      className="absolute inset-0 z-0"
      camera={{ position: [0, 0, 9], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene mouse={mouse} scrollT={scrollT} />
    </Canvas>
  )
}
