"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Box, Environment } from "@react-three/drei"
import { useRef, Suspense } from "react"
import type * as THREE from "three"

function AnimatedBox({ position, delay }: { position: [number, number, number]; delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const elapsed = clock.getElapsedTime()
      meshRef.current.position.y = position[1] + Math.sin(elapsed + delay) * 0.5
      meshRef.current.rotation.x += 0.003
      meshRef.current.rotation.z += 0.004
    }
  })

  return (
    <Box ref={meshRef} args={[0.6, 0.6, 0.6]} position={position}>
      <meshStandardMaterial color="#0369a1" metalness={0.8} roughness={0.2} />
    </Box>
  )
}

export function Animated3DBoxes() {
  return (
    <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl overflow-hidden">
      <Suspense fallback={<div className="w-full h-full bg-blue-50" />}>
        <Canvas camera={{ position: [0, 0, 3] }} gl={{ antialias: true }}>
          <ambientLight intensity={1} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#06b6d4" />

          <AnimatedBox position={[-1.5, 0, 0]} delay={0} />
          <AnimatedBox position={[0, 0.5, -1]} delay={2} />
          <AnimatedBox position={[1.5, -0.5, 0]} delay={4} />

          <Environment preset="city" />
        </Canvas>
      </Suspense>
    </div>
  )
}
