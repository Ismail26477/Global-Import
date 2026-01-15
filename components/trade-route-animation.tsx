"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text } from "@react-three/drei"
import { useRef, useEffect } from "react"
import * as THREE from "three"

interface Ship {
  id: number
  from: [number, number, number]
  to: [number, number, number]
  progress: number
  speed: number
  country: string
}

function TradeRouteScene() {
  const shipRef = useRef<THREE.Group>(null)
  const shipsRef = useRef<Ship[]>([
    { id: 1, from: [-3, 0, -3], to: [0, 0, 0], progress: 0, speed: 0.003, country: "China" },
    { id: 2, from: [3, 0, 3], to: [0, 0, 0], progress: 0.3, speed: 0.003, country: "USA" },
    { id: 3, from: [-2, 0, 3], to: [0, 0, 0], progress: 0.6, speed: 0.003, country: "Europe" },
    { id: 4, from: [3, 0, -2], to: [0, 0, 0], progress: 0.15, speed: 0.003, country: "Japan" },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      shipsRef.current.forEach((ship) => {
        ship.progress += ship.speed
        if (ship.progress >= 1) {
          ship.progress = 0
        }
      })
    }, 16)

    return () => clearInterval(interval)
  }, [])

  // Render country markers
  const countries = [
    { name: "China", pos: [-3, 0, -3] as [number, number, number], color: "#FF6B6B" },
    { name: "USA", pos: [3, 0, 3] as [number, number, number], color: "#4ECDC4" },
    { name: "Europe", pos: [-2, 0, 3] as [number, number, number], color: "#45B7D1" },
    { name: "Japan", pos: [3, 0, -2] as [number, number, number], color: "#96CEB4" },
  ]

  return (
    <group>
      {/* Central India Marker */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#2563EB" emissive="#1E40AF" emissiveIntensity={0.8} />
      </mesh>
      <Text position={[0, -0.7, 0]} fontSize={0.5} color="#1F2937" anchorX="center">
        INDIA
      </Text>

      {/* Trade Route Lines */}
      {countries.map((country, idx) => {
        const points = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(country.pos[0], country.pos[1], country.pos[2])]
        const geometry = new THREE.BufferGeometry().setFromPoints(points)

        return (
          <line key={`line-${idx}`} geometry={geometry}>
            <lineBasicMaterial color="#93C5FD" linewidth={2} transparent opacity={0.6} />
          </line>
        )
      })}

      {/* Country Markers */}
      {countries.map((country, idx) => (
        <group key={`country-${idx}`}>
          <mesh position={country.pos}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial color={country.color} emissive={country.color} emissiveIntensity={0.5} />
          </mesh>
          <Text position={[country.pos[0], country.pos[1] - 0.6, country.pos[2]]} fontSize={0.35} color="#1F2937">
            {country.name}
          </Text>
        </group>
      ))}

      {/* Animated Ships */}
      {shipsRef.current.map((ship) => {
        const x = ship.from[0] + (ship.to[0] - ship.from[0]) * ship.progress
        const y = ship.from[1] + (ship.to[1] - ship.from[1]) * ship.progress
        const z = ship.from[2] + (ship.to[2] - ship.from[2]) * ship.progress

        return (
          <group key={`ship-${ship.id}`} position={[x, y, z]}>
            {/* Ship container */}
            <mesh>
              <boxGeometry args={[0.3, 0.2, 0.5]} />
              <meshStandardMaterial color="#0369A1" emissive="#0284C7" emissiveIntensity={0.6} />
            </mesh>
            {/* Ship top */}
            <mesh position={[0, 0.15, 0]}>
              <boxGeometry args={[0.25, 0.1, 0.4]} />
              <meshStandardMaterial color="#0C4A6E" />
            </mesh>
          </group>
        )
      })}

      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#60A5FA" />
    </group>
  )
}

export function TradeRouteAnimation() {
  return (
    <Canvas camera={{ position: [0, 5, 8], fov: 50 }} className="w-full h-full">
      <TradeRouteScene />
      <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} />
    </Canvas>
  )
}
