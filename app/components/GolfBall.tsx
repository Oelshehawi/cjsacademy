'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function GolfBall() {
  const ballRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Rotate the ball
  useFrame((state) => {
    if (ballRef.current && groupRef.current) {
      // Smooth rotation based on mouse position
      const mouseX = (state.mouse.x * Math.PI) / 8;
      const mouseY = (state.mouse.y * Math.PI) / 8;

      groupRef.current.rotation.y += 0.003;
      groupRef.current.rotation.x = mouseY;
      groupRef.current.rotation.z = mouseX;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main golf ball sphere */}
      <Sphere ref={ballRef} args={[1, 64, 64]}>
        <MeshTransmissionMaterial
          backside={false}
          samples={16}
          thickness={0.5}
          roughness={0.1}
          transmission={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={3}
          distortion={0.2}
          distortionScale={0.2}
          temporalDistortion={0.1}
          metalness={0.2}
          attenuationDistance={0.8}
          attenuationColor='#ffffff'
          color='#ffffff'
          opacity={0.8}
        />
      </Sphere>

      {/* Dimples */}
      {Array.from({ length: 60 }).map((_, i) => {
        const phi = Math.acos(-1 + (2 * i) / 60);
        const theta = Math.sqrt(60 * Math.PI) * phi;

        return (
          <Sphere
            key={i}
            args={[0.06, 8, 8]}
            position={[
              0.9 * Math.cos(theta) * Math.sin(phi),
              0.9 * Math.sin(theta) * Math.sin(phi),
              0.9 * Math.cos(phi),
            ]}
          >
            <meshStandardMaterial
              color='#ffffff'
              roughness={0.3}
              metalness={0.4}
              transparent
              opacity={0.9}
            />
          </Sphere>
        );
      })}
    </group>
  );
}
