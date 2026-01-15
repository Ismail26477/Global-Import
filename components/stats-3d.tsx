"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import { useRef, Suspense } from "react"
import type * as THREE from "three"

function AnimatedSphere({ value, color, delay }: { value: string; color: string; delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (meshRef.current && groupRef.current) {
      const elapsed = clock.getElapsedTime()
      groupRef.current.rotation.z = elapsed * 0.5 + delay
      meshRef.current.scale.x = 1 + Math.sin(elapsed + delay) * 0.2
      meshRef.current.scale.y = 1 + Math.sin(elapsed + delay) * 0.2
      meshRef.current.scale.z = 1 + Math.sin(elapsed + delay) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <Sphere ref={meshRef} args={[0.6, 32, 32]}>
        <meshPhongMaterial color={color} emissive={color} emissiveIntensity={0.3} shininess={100} />
      </Sphere>
    </group>
  )
}

export function Stats3D() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {[
        { value: "500+", label: "Suppliers", color: "#0369a1" },
        { value: "50K+", label: "Shipments", color: "#06b6d4" },
        { value: "25+", label: "Countries", color: "#0891b2" },
      ].map((stat, index) => (
        <div key={index} className="text-center">
          <div className="h-24 w-full rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
            <Suspense fallback={<div className="w-full h-full bg-blue-50" />}>
              <Canvas camera={{ position: [0, 0, 1.5] }} gl={{ antialias: true }}>
                <ambientLight intensity={0.8} />
                <pointLight position={[5, 5, 5]} intensity={0.5} />
                <AnimatedSphere value={stat.value} color={stat.color} delay={index * 2} />
              </Canvas>
            </Suspense>
          </div>
          <p className="text-2xl font-bold text-primary mt-3">{stat.value}</p>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
