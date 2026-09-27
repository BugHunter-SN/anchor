import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei'

function Blob({ position, color, scale, speed, distort }) {
  const ref = useRef()

  useFrame((_, delta) => {
    ref.current.rotation.x += delta * speed * 0.12
    ref.current.rotation.y += delta * speed * 0.08
  })

  return (
    <Float speed={speed} rotationIntensity={0.35} floatIntensity={1.3}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 5]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={1.4}
          roughness={0.3}
          metalness={0.05}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 4]} intensity={1.3} color="#f4e6c1" />
      <directionalLight position={[-5, -3, -4]} intensity={0.5} color="#123023" />

      <Blob position={[2.1, 0.7, -1]} color="#e8b34d" scale={1.35} speed={0.75} distort={0.32} />
      <Blob position={[-2.4, -0.9, -2.2]} color="#2f6b4f" scale={2.1} speed={0.45} distort={0.28} />
      <Blob position={[-0.6, 1.6, -3]} color="#9fc3a6" scale={0.85} speed={1.05} distort={0.4} />
      <Blob position={[1.4, -1.6, -2.6]} color="#d69a3c" scale={0.6} speed={1.3} distort={0.45} />

      <Environment preset="dawn" />
    </>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
