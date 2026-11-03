import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { Group, Mesh } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { useFinePointer } from '../hooks/useFinePointer'
import { useTheme } from '../theme'

function hasWebGL() {
  if (typeof window === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')),
    )
  } catch {
    return false
  }
}

function Dust({ color }: { color: string }) {
  const positions = useMemo(() => {
    // Deterministic pseudo-random shell so the scene is stable across renders.
    let seed = 0x9e3779b9
    const random = () => {
      seed = (seed + 0x6d2b79f5) | 0
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }

    const count = 360
    const array = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      const radius = 2.1 + random() * 1.7
      const theta = random() * Math.PI * 2
      const phi = Math.acos(2 * random() - 1)
      array[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      array[i * 3 + 1] = radius * Math.cos(phi) * 0.82
      array[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta)
    }
    return array
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.017}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  )
}

type SculptureProps = {
  ink: string
  muted: string
  still: boolean
}

function Sculpture({ ink, muted, still }: SculptureProps) {
  const knot = useRef<Mesh>(null)
  const shell = useRef<Mesh>(null)
  const group = useRef<Group>(null)

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime

    if (group.current) {
      group.current.rotation.z = Math.sin(time * 0.12) * 0.08
    }
    if (still) return

    if (knot.current) {
      knot.current.rotation.x += delta * 0.07
      knot.current.rotation.y += delta * 0.12
    }
    if (shell.current) {
      shell.current.rotation.y -= delta * 0.045
      shell.current.rotation.x += delta * 0.02
    }
  })

  return (
    <group ref={group} rotation={[0.15, 0, 0]}>
      <mesh ref={knot}>
        <torusKnotGeometry args={[1.02, 0.26, 140, 14]} />
        <meshBasicMaterial color={ink} wireframe transparent opacity={0.4} />
      </mesh>

      <mesh ref={shell}>
        <icosahedronGeometry args={[1.85, 1]} />
        <meshBasicMaterial color={muted} wireframe transparent opacity={0.16} />
      </mesh>

      <mesh rotation={[Math.PI / 2.1, 0.35, 0]}>
        <torusGeometry args={[2.42, 0.004, 8, 180]} />
        <meshBasicMaterial color={muted} transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[Math.PI / 1.55, -0.6, Math.PI / 5]}>
        <torusGeometry args={[2.72, 0.003, 8, 180]} />
        <meshBasicMaterial color={muted} transparent opacity={0.3} />
      </mesh>

      <mesh position={[1.85, 1.05, -0.4]} rotation={[0.4, 0.2, 0]}>
        <octahedronGeometry args={[0.22, 0]} />
        <meshBasicMaterial color={ink} wireframe transparent opacity={0.6} />
      </mesh>
      <mesh position={[-1.95, -0.85, 0.7]} rotation={[0.9, 0.6, 0]}>
        <tetrahedronGeometry args={[0.16, 0]} />
        <meshBasicMaterial color={muted} wireframe transparent opacity={0.55} />
      </mesh>

      <Dust color={muted} />
    </group>
  )
}

/** Minimal drag-orbit wrapper (keeps three's own controls, drops drei). */
function Controls({ autoRotate }: { autoRotate: boolean }) {
  const { camera, gl } = useThree()
  const controls = useRef<OrbitControls | null>(null)

  useEffect(() => {
    const instance = new OrbitControls(camera, gl.domElement)
    instance.enablePan = false
    instance.enableZoom = false
    instance.enableDamping = true
    instance.dampingFactor = 0.06
    instance.rotateSpeed = 0.55
    instance.autoRotate = autoRotate
    instance.autoRotateSpeed = 0.55
    instance.minPolarAngle = Math.PI / 3.4
    instance.maxPolarAngle = Math.PI / 1.75
    controls.current = instance

    return () => {
      controls.current = null
      instance.dispose()
    }
  }, [camera, gl, autoRotate])

  useFrame(() => controls.current?.update())

  return null
}

function FallbackScene() {
  return (
    <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
      <div className="relative aspect-square w-[68%] max-w-[380px]">
        {[0, 12, 24, 36].map((inset) => (
          <div
            key={inset}
            className="absolute rounded-full border border-line-soft"
            style={{ inset: `${inset}%` }}
          />
        ))}
        <div className="absolute inset-[44%] border border-line" />
      </div>
    </div>
  )
}

export function Scene() {
  const { theme } = useTheme()
  const reduceMotion = useReducedMotion() ?? false
  const finePointer = useFinePointer()
  const [webgl] = useState(hasWebGL)
  const [visible, setVisible] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = containerRef.current
    if (!element || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const dark = theme === 'dark'
  const ink = dark ? '#F0F0F0' : '#333333'
  const muted = dark ? '#B0B0B0' : '#707070'

  if (!webgl) {
    return <FallbackScene />
  }

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="Abstract wireframe sculpture you can drag to rotate"
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
    >
      <Canvas
        dpr={[1, 1.75]}
        frameloop={visible ? 'always' : 'never'}
        camera={{ position: [0, 0.3, 5.4], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Sculpture ink={ink} muted={muted} still={reduceMotion} />
        {finePointer ? <Controls autoRotate={!reduceMotion} /> : null}
      </Canvas>
    </div>
  )
}
