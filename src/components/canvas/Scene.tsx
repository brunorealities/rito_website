import { Canvas } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import { BirdsEffect } from './BirdsEffect';
import { useScroll } from 'motion/react';
import { useState, useEffect, Suspense } from 'react';

export function Scene() {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      setProgress(v);
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Suspense fallback={null}>
            {progress < 0.5 && <BirdsEffect scrollProgress={progress} />}
          </Suspense>
        </Float>
      </Canvas>
    </div>
  );
}
