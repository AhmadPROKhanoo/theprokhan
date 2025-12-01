import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

function InteractiveCar() {
  const carRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (carRef.current && !hovered) {
      carRef.current.rotation.y += 0.005
    }
  })

  return (
    <group
      ref={carRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Main Body */}
      <mesh castShadow position={[0, 0.5, 0]}>
        <boxGeometry args={[4, 0.8, 2]} />
        <meshPhysicalMaterial
          color="#DC0000"
          metalness={0.95}
          roughness={0.05}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Cabin */}
      <mesh castShadow position={[0, 1.2, 0]}>
        <boxGeometry args={[2.5, 0.6, 1.8]} />
        <meshPhysicalMaterial
          color="#DC0000"
          metalness={0.95}
          roughness={0.05}
          clearcoat={1}
        />
      </mesh>

      {/* Windows */}
      <mesh position={[0.3, 1.2, 0]}>
        <boxGeometry args={[2, 0.55, 1.75]} />
        <meshPhysicalMaterial
          color="#1a1a1a"
          metalness={0.1}
          roughness={0.1}
          transmission={0.9}
          thickness={0.5}
        />
      </mesh>

      {/* Hood */}
      <mesh castShadow position={[1.8, 0.5, 0]}>
        <boxGeometry args={[0.8, 0.6, 2]} />
        <meshPhysicalMaterial
          color="#DC0000"
          metalness={0.95}
          roughness={0.05}
          clearcoat={1}
        />
      </mesh>

      {/* Rear */}
      <mesh castShadow position={[-1.8, 0.5, 0]}>
        <boxGeometry args={[0.8, 0.6, 2]} />
        <meshPhysicalMaterial
          color="#DC0000"
          metalness={0.95}
          roughness={0.05}
          clearcoat={1}
        />
      </mesh>

      {/* Wheels */}
      {[[-1.5, 0, 1.1], [-1.5, 0, -1.1], [1.5, 0, 1.1], [1.5, 0, -1.1]].map((position, index) => (
        <group key={index} position={position}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.25, 0.25, 0.35, 32]} />
            <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
          </mesh>
        </group>
      ))}

      {/* Headlights */}
      {[[2.5, 0.5, 0.8], [2.5, 0.5, -0.8]].map((position, index) => (
        <group key={index}>
          <pointLight position={position} intensity={2} color="#ffffff" distance={5} />
          <mesh position={position}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
          </mesh>
        </group>
      ))}

      {/* Underglow */}
      <pointLight position={[0, -0.2, 0]} intensity={4} color="#DC0000" distance={8} />

      {/* Spoiler */}
      <mesh position={[-2, 1.2, 0]} castShadow>
        <boxGeometry args={[0.3, 0.1, 2]} />
        <meshPhysicalMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  )
}

const CarViewer360 = () => {
  const [cameraAngle, setCameraAngle] = useState('front')

  const cameraPositions = {
    front: [8, 3, 0],
    side: [0, 3, 8],
    rear: [-8, 3, 0],
    top: [0, 10, 0.1],
  }

  return (
    <section id="viewer" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-ferrari-dark to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-ferrari-gold text-sm tracking-[0.3em] mb-4 uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            360° Experience
          </motion.p>

          <motion.h2
            className="text-5xl md:text-7xl font-black text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Inspect Every <span className="text-ferrari-red neon-text">DETAIL</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Drag to rotate. Scroll to zoom. Experience every angle of automotive perfection.
          </motion.p>
        </motion.div>

        {/* 3D Viewer */}
        <motion.div
          className="relative h-[600px] glass rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Red glow border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-ferrari-red/30 pointer-events-none"></div>

          <Canvas shadows>
            <PerspectiveCamera makeDefault position={cameraPositions[cameraAngle]} fov={50} />
            
            <ambientLight intensity={0.4} />
            <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#DC0000" />
            <pointLight position={[10, 5, -10]} intensity={0.5} color="#D4AF37" />
            
            <Environment preset="night" />
            
            <InteractiveCar />
            
            <ContactShadows
              position={[0, -0.5, 0]}
              opacity={0.5}
              scale={10}
              blur={2}
              far={4}
            />
            
            <OrbitControls
              enableZoom={true}
              enablePan={false}
              minDistance={5}
              maxDistance={15}
              minPolarAngle={0}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>

          {/* Instructions overlay */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 glass px-6 py-3 rounded-full">
            <p className="text-white text-sm flex items-center space-x-4">
              <span className="flex items-center space-x-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                <span>Drag to Rotate</span>
              </span>
              <span className="text-ferrari-red">•</span>
              <span className="flex items-center space-x-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                <span>Scroll to Zoom</span>
              </span>
            </p>
          </div>
        </motion.div>

        {/* View Controls */}
        <motion.div
          className="flex justify-center space-x-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {Object.keys(cameraPositions).map((angle) => (
            <motion.button
              key={angle}
              onClick={() => setCameraAngle(angle)}
              className={`px-6 py-3 rounded-full font-semibold uppercase transition-all duration-300 ${
                cameraAngle === angle
                  ? 'bg-ferrari-red text-white shadow-lg shadow-ferrari-red/50'
                  : 'glass text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {angle}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CarViewer360
