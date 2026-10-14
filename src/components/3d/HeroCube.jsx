// This component renders the 3D matte black cube used in the hero section.
// The object rotation, lighting, and pointer-responsive tilt are configured here; edit `rotationSpeed` or `pointer` values to tweak the motion.
// Content and naming are kept separate from the landing copy, which lives in `src/constants/data.js`.
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function CubeMesh() {
  const groupRef = useRef();
  const baseX = useRef(0);
  const baseY = useRef(0);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const { pointer } = state;

    if (groupRef.current) {
      groupRef.current.rotation.x = -0.7 + pointer.y * 0.45 + Math.sin(time * 0.9) * 0.15;
      groupRef.current.rotation.y = 0.8 + pointer.x * 0.65 + time * 0.45;
      groupRef.current.position.y = Math.sin(time * 1.4) * 0.06;

      baseX.current += (pointer.x - baseX.current) * 0.04;
      baseY.current += (pointer.y - baseY.current) * 0.04;
      groupRef.current.rotation.z = baseX.current * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.1, 2.1, 2.1]} />
        <meshStandardMaterial color="#050505" roughness={0.2} metalness={0.8} />
      </mesh>
      <mesh position={[0, 0, 1.06]}>
        <boxGeometry args={[2.12, 2.12, 0.04]} />
        <meshBasicMaterial color="#292d30" transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

export function HeroCube() {
  return (
    <div className="h-[360px] w-full rounded-[24px] border border-[#292d30] bg-[#000000] md:h-[460px]">
      <Canvas camera={{ position: [0, 0, 5.6], fov: 34 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[3, 4, 3]} intensity={1.2} color="#ffffff" />
        <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.38}>
          <CubeMesh />
        </Float>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

export default HeroCube;
