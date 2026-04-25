'use client'

import { useEffect, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { camera } = useThree()
  const cameraPositionRef = useRef({ x: 0, y: 0, z: 3 })

  useEffect(() => {
    // Simple mouse controls
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      
      cameraPositionRef.current.x = x * 3
      cameraPositionRef.current.y = y * 3
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001
      meshRef.current.rotation.y += 0.002
    }

    // Smooth camera movement
    camera.position.lerp(
      new THREE.Vector3(
        cameraPositionRef.current.x,
        cameraPositionRef.current.y,
        cameraPositionRef.current.z
      ),
      0.1
    )
  })

  return (
    <mesh ref={meshRef} scale={1.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial
        color="#00d9ff"
        emissive="#00a8cc"
        shininess={100}
        wireframe={false}
      />
    </mesh>
  )
}

export default function ThreeDScene() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 3] }}
        className="w-full h-full"
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff006e" />
        
        <AnimatedSphere />
      </Canvas>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-6xl font-bold text-glow mb-4">3D Studio</h1>
        <p className="text-xl text-gray-300">Immersive Animation Experience</p>
      </div>
    </div>
  )
}
