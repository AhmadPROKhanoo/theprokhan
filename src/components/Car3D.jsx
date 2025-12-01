import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import * as THREE from 'three'

function CarModel({ mousePosition }) {
  const carRef = useRef()
  const lightRef = useRef()

  useFrame((state) => {
    if (carRef.current) {
      // Smooth rotation
      carRef.current.rotation.y += 0.002

      // Mouse parallax effect
      const targetRotationY = mousePosition.current.x * 0.3
      const targetRotationX = mousePosition.current.y * 0.1
      
      carRef.current.rotation.y += (targetRotationY - carRef.current.rotation.y) * 0.05
      carRef.current.rotation.x += (targetRotationX - carRef.current.rotation.x) * 0.05
    }

    // Animate light position
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(state.clock.elapsedTime) * 5
      lightRef.current.position.z = Math.cos(state.clock.elapsedTime) * 5
    }
  })

  // Create a stylized sports car shape
  return (
    <group ref={carRef}>
      {/* Car Body */}
      <mesh castShadow position={[0, 0.5, 0]}>
        <boxGeometry args={[4, 0.8, 2]} />
        <meshStandardMaterial
          color="#DC0000"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1}
        />
      </mesh>

      {/* Car Top (Cabin) */}
      <mesh castShadow position={[0, 1.2, 0]}>
        <boxGeometry args={[2.5, 0.6, 1.8]} />
        <meshStandardMaterial
          color="#DC0000"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Front Hood */}
      <mesh castShadow position={[1.8, 0.5, 0]}>
        <boxGeometry args={[0.8, 0.6, 2]} />
        <meshStandardMaterial
          color="#DC0000"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Rear */}
      <mesh castShadow position={[-1.8, 0.5, 0]}>
        <boxGeometry args={[0.8, 0.6, 2]} />
        <meshStandardMaterial
          color="#DC0000"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Wheels */}
      {[
        [-1.5, 0, 1.1],
        [-1.5, 0, -1.1],
        [1.5, 0, 1.1],
        [1.5, 0, -1.1],
      ].map((position, index) => (
        <group key={index} position={position}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
            <meshStandardMaterial
              color="#1a1a1a"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          {/* Rim */}
          <mesh rotation={[0, 0, Math.PI / 2]} position={[0, 0, 0]}>
            <cylinderGeometry args={[0.25, 0.25, 0.35, 32]} />
            <meshStandardMaterial
              color="#D4AF37"
              metalness={1}
              roughness={0.1}
            />
          </mesh>
        </group>
      ))}

      {/* Headlights */}
      <pointLight position={[2.5, 0.5, 0.8]} intensity={2} color="#ffffff" distance={5} />
      <pointLight position={[2.5, 0.5, -0.8]} intensity={2} color="#ffffff" distance={5} />
      
      <mesh position={[2.5, 0.5, 0.8]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={2}
        />
      </mesh>
      <mesh position={[2.5, 0.5, -0.8]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Taillights */}
      <mesh position={[-2.3, 0.6, 0.9]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color="#DC0000"
          emissive="#DC0000"
          emissiveIntensity={3}
        />
      </mesh>
      <mesh position={[-2.3, 0.6, -0.9]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color="#DC0000"
          emissive="#DC0000"
          emissiveIntensity={3}
        />
      </mesh>

      {/* Underglow */}
      <pointLight position={[0, -0.2, 0]} intensity={3} color="#DC0000" distance={8} />
      
      {/* Spoiler */}
      <mesh position={[-2, 1.2, 0]} castShadow>
        <boxGeometry args={[0.3, 0.1, 2]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Side Mirrors */}
      <mesh position={[0.8, 1.5, 1.2]} castShadow>
        <boxGeometry args={[0.2, 0.15, 0.3]} />
        <meshStandardMaterial
          color="#DC0000"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      <mesh position={[0.8, 1.5, -1.2]} castShadow>
        <boxGeometry args={[0.2, 0.15, 0.3]} />
        <meshStandardMaterial
          color="#DC0000"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </group>
  )
}

const Car3D = ({ mousePosition }) => {
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[8, 4, 8]} fov={50} />
      
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#DC0000" />
      
      {/* Environment for reflections */}
      <Environment preset="night" />
      
      {/* Car */}
      <CarModel mousePosition={mousePosition} />
      
      {/* Floor with reflection */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Grid */}
      <gridHelper args={[50, 50, '#DC0000', '#1a1a1a']} position={[0, -0.49, 0]} />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        autoRotate={false}
      />
    </Canvas>
  )
}

export default Car3D
