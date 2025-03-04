"use client";

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRandom } from "@react-three/drei";

interface SparklesCoreProps {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}

export function SparklesCore({
  background = "transparent",
  minSize = 0.4,
  maxSize = 1.0,
  particleDensity = 70,
  className = "",
  particleColor = "#FFFFFF",
}: SparklesCoreProps) {
  const meshRef = useRef<THREE.Points>(null);
  const particles = useRef<THREE.BufferGeometry>(null);
  const random = useRandom();

  useEffect(() => {
    if (!particles.current) return;

    const positions = new Float32Array(particleDensity * 3);
    const scales = new Float32Array(particleDensity);

    for (let i = 0; i < particleDensity; i++) {
      positions[i * 3] = (random.inRange(-1, 1) * 100);
      positions[i * 3 + 1] = (random.inRange(-1, 1) * 100);
      positions[i * 3 + 2] = (random.inRange(-1, 1) * 100);
      scales[i] = random.inRange(minSize, maxSize);
    }

    particles.current.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particles.current.setAttribute("scale", new THREE.BufferAttribute(scales, 1));
  }, [particleDensity, minSize, maxSize, random]);

  useFrame((state) => {
    if (!meshRef.current || !particles.current) return;

    const positions = particles.current.attributes.position.array as Float32Array;
    const scales = particles.current.attributes.scale.array as Float32Array;

    for (let i = 0; i < particleDensity; i++) {
      positions[i * 3] += random.inRange(-0.1, 0.1);
      positions[i * 3 + 1] += random.inRange(-0.1, 0.1);
      positions[i * 3 + 2] += random.inRange(-0.1, 0.1);
      scales[i] = random.inRange(minSize, maxSize);
    }

    particles.current.attributes.position.needsUpdate = true;
    particles.current.attributes.scale.needsUpdate = true;
  });

  return (
    <div className={`absolute inset-0 ${className}`} style={{ background }}>
      <canvas>
        <color attach="background" args={[background]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <points ref={meshRef}>
          <bufferGeometry ref={particles} />
          <pointsMaterial
            size={0.05}
            color={particleColor}
            sizeAttenuation
            transparent
          />
        </points>
      </canvas>
    </div>
  );
} 