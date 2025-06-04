'use client';

import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from '@react-three/drei';
import { GolfBall } from './GolfBall';
import { Suspense } from 'react';

export function GolfBallScene() {
  return (
    <div className='h-screen w-full relative'>
      {/* Background Image */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: "url('/Heroimagefinal.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8,
        }}
      />

      {/* Canvas with transparent background */}
      <div className='relative z-10'>
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <Environment files='/Heroimagefinal.jpg' background blur={0.5} />

            {/* Lights */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />

            {/* Golf Ball */}
            <GolfBall />

            {/* Controls */}
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2.5}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
