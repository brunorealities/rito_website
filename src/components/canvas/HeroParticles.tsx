import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function HeroParticles({ scrollProgress }: { scrollProgress: number }) {
  const count = 2000;
  const meshRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      scales[i] = Math.random();
    }
    return { positions, scales };
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Slow organic movement
    meshRef.current.rotation.y = time * 0.05;
    meshRef.current.rotation.x = time * 0.02;
    
    // Scroll effect: move in Z
    meshRef.current.position.z = scrollProgress * 5;
    
    // Mouse parallax
    const mouseX = state.mouse.x * 0.2;
    const mouseY = state.mouse.y * 0.2;
    meshRef.current.position.x += (mouseX - meshRef.current.position.x) * 0.05;
    meshRef.current.position.y += (mouseY - meshRef.current.position.y) * 0.05;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-scale"
          count={count}
          array={particles.scales}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#111111"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}
