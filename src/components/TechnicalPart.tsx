import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';

const TechnicalPart: React.FC = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef}>
        {/* Main body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 0.5, 2]} />
          <meshStandardMaterial color="#e87817" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Central cylinder */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
          <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Top ring */}
        <mesh position={[0, 1, 0]}>
          <torusGeometry args={[0.6, 0.1, 16, 100]} />
          <meshStandardMaterial color="#94a3b8" metalness={1} roughness={0} />
        </mesh>

        {/* Side bolts */}
        {[0, 90, 180, 270].map((angle, i) => (
          <mesh 
            key={i} 
            position={[
              Math.cos((angle * Math.PI) / 180) * 0.8, 
              0.25, 
              Math.sin((angle * Math.PI) / 180) * 0.8
            ]}
          >
            <cylinderGeometry args={[0.1, 0.1, 0.2, 16]} />
            <meshStandardMaterial color="#64748b" />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

export default TechnicalPart;
