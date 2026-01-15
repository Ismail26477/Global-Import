"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import { useRef } from "react"
import type * as THREE from "three"

function FloatingParticle({ position, speed }: { position: [number, number, number]; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y += Math.sin(clock.getElapsedTime() * speed) * 0.01
      meshRef.current.position.x += Math.cos(clock.getElapsedTime() * speed * 0.5) * 0.01
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.008
    }
  })

  return (
    <Sphere ref={meshRef} args={[0.2, 16, 16]} position={position}>
      <meshPhongMaterial color="#0369a1" emissive="#06b6d4" emissiveIntensity={0.3} />
    </Sphere>
  )
}

export function Floating3DBackground() {
  return (
    <Canvas className="absolute inset-0 -z-10">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.3} />

      <FloatingParticle position={[-2, 0, 0]} speed={1} />
      <FloatingParticle position={[2, 1, -1]} speed={1.5} />
      <FloatingParticle position={[0, -2, 0]} speed={0.8} />
      <FloatingParticle position={[1, 1, 1]} speed={1.2} />
      <FloatingParticle position={[-1, -1, -1]} speed={0.9} />
    </Canvas>
  )
}
