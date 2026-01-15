"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, Suspense } from "react"
import type * as THREE from "three"

interface Service3DCardProps {
  index: number
  icon: string
  title: string
}

function RotatingIcon() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshPhongMaterial color="#0369a1" shininess={100} emissive="#06b6d4" emissiveIntensity={0.2} />
    </mesh>
  )
}

export function Services3DCard({ index, icon, title }: Service3DCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6 hover:shadow-lg transition-all group">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-100 to-cyan-100"></div>

      {/* 3D Canvas - FIXED */}
      <div className="relative z-10 mb-4 h-32 w-full overflow-hidden rounded-lg bg-white/50 backdrop-blur">
        <Suspense fallback={<div className="w-full h-full bg-white/30" />}>
          <Canvas camera={{ position: [0, 0, 2] }} gl={{ antialias: true }}>
            <ambientLight intensity={0.8} />
            <pointLight position={[5, 5, 5]} intensity={0.6} />
            <RotatingIcon />
          </Canvas>
        </Suspense>
      </div>

      <h3 className="relative z-10 text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="relative z-10 text-sm text-muted-foreground">Premium service with advanced capabilities</p>
    </div>
  )
}
