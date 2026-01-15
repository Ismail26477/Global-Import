"use client"

import { Canvas } from "@react-three/fiber"
import { Sphere, Environment } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef, Suspense } from "react"
import type * as THREE from "three"

function GlobeModel() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0005
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 64, 32]} scale={1.2}>
      <meshPhongMaterial color="#0369a1" shininess={5} emissive="#06b6d4" emissiveIntensity={0.2} />
    </Sphere>
  )
}

export function Hero3DGlobe() {
  return (
    <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl overflow-hidden">
      <Suspense fallback={<div className="w-full h-full bg-blue-50" />}>
        <Canvas camera={{ position: [0, 0, 2.5] }} gl={{ antialias: true }}>
          <ambientLight intensity={1.2} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <GlobeModel />
          <Environment preset="studio" />
        </Canvas>
      </Suspense>
    </div>
  )
}
