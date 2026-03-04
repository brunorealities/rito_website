import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function OrganicRadial({ activeIndex }: { activeIndex: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    return new THREE.TorusKnotGeometry(1, 0.4, 128, 32);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Breathing motion
    const scale = 1 + Math.sin(time) * 0.05;
    meshRef.current.scale.set(scale, scale, scale);
    
    meshRef.current.rotation.y = time * 0.2;
    meshRef.current.rotation.z = time * 0.1;
  });

  const color = useMemo(() => {
    const colors = ['#111111', '#4A4A4A', '#8E8E8E', '#2D2D2D'];
    return colors[activeIndex] || colors[0];
  }, [activeIndex]);

  return (
    <mesh ref={meshRef} geometry={geometry} position={[2, 0, 0]}>
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}
