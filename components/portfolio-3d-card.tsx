"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Box } from "@react-three/drei"
import { useRef } from "react"
import type * as THREE from "three"

interface Portfolio3DCardProps {
  title: string
  description: string
  color: string
  index: number
}

function RotatingCube({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.015
      meshRef.current.scale.z = 1 + Math.sin(Date.now() * 0.003) * 0.2
    }
  })

  return (
    <Box ref={meshRef} args={[1, 1, 1]}>
      <meshPhongMaterial color={color} emissive={color} emissiveIntensity={0.4} shininess={120} />
    </Box>
  )
}

export function Portfolio3DCard({ title, description, color, index }: Portfolio3DCardProps) {
  const colorMap: Record<string, string> = {
    "from-blue-500 to-cyan-500": "#0891b2",
    "from-purple-500 to-pink-500": "#a855f7",
    "from-orange-500 to-amber-500": "#f97316",
    "from-emerald-500 to-teal-500": "#14b8a6",
    "from-rose-500 to-red-500": "#ef4444",
  }

  const rgbColor = colorMap[color] || "#0891b2"

  return (
    <div className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group border border-blue-100 rounded-lg">
      {/* 3D Canvas */}
      <div className="bg-gradient-to-br from-slate-100 to-slate-50 h-32 relative overflow-hidden">
        <Canvas>
          <ambientLight intensity={0.7} />
          <pointLight position={[5, 5, 5]} intensity={0.8} />
          <RotatingCube color={rgbColor} />
        </Canvas>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
