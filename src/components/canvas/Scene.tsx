import { Canvas } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import { Particles } from './Particles';
import { BirdsEffect } from './BirdsEffect';
import { RarefiedPoints } from './RarefiedPoints';
import { useScroll } from 'motion/react';
import { useState, useEffect, Suspense } from 'react';

export function Scene() {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      setProgress(v);
      if (v < 0.2) setActiveIndex(0);
      else if (v < 0.4) setActiveIndex(1);
      else if (v < 0.6) setActiveIndex(2);
      else setActiveIndex(3);
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
            {/* The particle component is kept here for easy access later */}
            {/* {progress < 0.5 && <Particles scrollProgress={progress} />} */}
            {progress < 0.5 && <BirdsEffect scrollProgress={progress} />}
          </Suspense>
          {progress >= 0.5 && <RarefiedPoints />}
        </Float>
      </Canvas>
    </div>
  );
}
