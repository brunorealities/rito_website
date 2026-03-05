import { useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { OBJLoader } from 'three-stdlib';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js';
import { useControls } from 'leva';

// MODO DEBUG: Troque para 'false' para esconder os controles da tela
export const DEBUG = true;

// Importação do modelo 3D (asset)
// Aqui você pode trocar o arquivo .obj que será usado como base para os pontos
import objUrl from '../../lib/assets/seashell_3.obj?url';

/**
 * Shaders Customizados para manipulação das partículas via GPU
 */
const vertexShader = `
uniform float uProgress;
uniform float uTime;
uniform float uAlpha;
uniform vec2 uMouse;

attribute vec3 aTarget;
attribute float aRandomStep;

varying float vProgress;
varying float vRandom;
varying float vAlpha;

void main() {
  vec3 currentPos = position;
  vec3 targetPos = aTarget;

  // Intensidade do ruído (Noise) que diminui conforme uProgress aumenta
  float noiseIntensity = (1.0 - uProgress) * 2.1;
  float noise = sin(uTime * 0.6 + aRandomStep * 2.0) * noiseIntensity;

  vec3 mixedPos = mix(currentPos, targetPos, uProgress);

  // --- REPEL EFFECT (SUAVE E INTENSO) ---
  // Projetamos a posição para NDC (-1 a 1) para bater com o uMouse
  vec4 mvpPos = projectionMatrix * viewMatrix * modelMatrix * vec4(mixedPos, 1.0);
  vec2 ndcPos = mvpPos.xy / mvpPos.w;

  float dist = distance(ndcPos, uMouse);
  float repulsionRadius = 0.75; // Área de influência na tela
  float repulsionStrength = 3.5 * (1.0 - uProgress); // Força aumentada significativamente

  if (dist < repulsionRadius) {
    float force = (1.0 - dist / repulsionRadius);
    force = pow(force, 3.0); // Curva que deixa o centro do mouse com repulsão máxima
    
    vec2 dir = normalize(ndcPos - uMouse);
    // Movemos os eixos X e Y no espaço do objeto para criar o efeito visual
    mixedPos.x += dir.x * force * repulsionStrength;
    mixedPos.y += dir.y * force * repulsionStrength;
  }
  
  mixedPos.x += noise * 0.06;
  mixedPos.y += noise * 0.3;
  mixedPos.z += noise * 0.05;

  vec4 mvPosition = modelViewMatrix * vec4(mixedPos, 1.0);
  
  float sizeMod = mix(60.0, 18.2, uProgress);
  gl_PointSize = sizeMod * (1.0 / -mvPosition.z) * uAlpha;
  gl_Position = projectionMatrix * mvPosition;
  
  vProgress = uProgress;
  vRandom = aRandomStep;
  vAlpha = uAlpha;
}
`;

const fragmentShader = `
varying float vProgress;
varying float vRandom;
varying float vAlpha;

void main() {
  float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
  if (distanceToCenter > 0.5) {
    discard;
  }

  vec3 color = mix(vec3(0.08), vec3(0.5), vProgress);
  float circleAlpha = (1.0 - (distanceToCenter * 2.0));
  float randomAlpha = mix(0.98, 1.0, vRandom); 
  float progressAlpha = mix(0.1, 0.9, vProgress);

  gl_FragColor = vec4(color, circleAlpha * randomAlpha * progressAlpha * vAlpha);
}
`;

export function Particles({ scrollProgress }: { scrollProgress: number }) {
    const count = 90000;
    const meshRef = useRef<THREE.Points>(null);
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    const obj = useLoader(OBJLoader, objUrl);

    const particlesData = useMemo(() => {
        const initialPositions = new Float32Array(count * 3);
        const targetPositions = new Float32Array(count * 3);
        const randomSteps = new Float32Array(count);

        const geometries: THREE.BufferGeometry[] = [];
        obj.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                geometries.push(child.geometry);
            }
        });

        const targetGeometry = geometries[0];

        if (targetGeometry) {
            const clonedGeo = targetGeometry.clone();
            clonedGeo.computeBoundingBox();
            const center = new THREE.Vector3();
            clonedGeo.boundingBox!.getCenter(center);
            clonedGeo.translate(-center.x, -center.y, -center.z);

            clonedGeo.computeBoundingSphere();
            const radius = clonedGeo.boundingSphere?.radius || 1;
            const desiredRadius = 3.5;
            const scaling = desiredRadius / radius;
            clonedGeo.scale(scaling, scaling, scaling);

            const tempMesh = new THREE.Mesh(clonedGeo, new THREE.MeshBasicMaterial());
            const sampler = new MeshSurfaceSampler(tempMesh).build();
            const samplePosition = new THREE.Vector3();

            for (let i = 0; i < count; i++) {
                sampler.sample(samplePosition);
                targetPositions[i * 3] = samplePosition.x;
                targetPositions[i * 3 + 1] = samplePosition.y;
                targetPositions[i * 3 + 2] = samplePosition.z;

                const zoomScale = 6.0;
                initialPositions[i * 3] = samplePosition.x * zoomScale + (Math.random() - 0.5) * 15;
                initialPositions[i * 3 + 1] = samplePosition.y * zoomScale + (Math.random() - 0.5) * 15;
                initialPositions[i * 3 + 2] = samplePosition.z * zoomScale + (Math.random() - 0.5) * 8;

                randomSteps[i] = Math.random();
            }
        }

        return { initialPositions, targetPositions, randomSteps };
    }, [obj, count]);

    // --- CONTROLES DE DEBUG (Leva) ---
    // Ative ou desative o painel de controle mudando a constante DEBUG no topo do arquivo
    const debugValues = useControls('Posição e Rotação', {
        targetX: { value: 3.5, min: -10, max: 10, step: 0.1 },
        targetY: { value: -0.2, min: -10, max: 10, step: 0.1 },
        targetZ: { value: 0.2, min: -10, max: 10, step: 0.1 },
        targetRotX: { value: 0.1, min: -Math.PI, max: Math.PI, step: 0.01 },
        targetRotY: { value: -3.1, min: -Math.PI, max: Math.PI, step: 0.01 },
        targetRotZ: { value: 0.0, min: -Math.PI, max: Math.PI, step: 0.01 },
        targetScale: { value: 0.95, min: 0.1, max: 5.0, step: 0.05 },
    });

    const uniforms = useMemo(
        () => ({
            uProgress: { value: 0 },
            uTime: { value: 0 },
            uAlpha: { value: 1.0 },
            uMouse: { value: new THREE.Vector2(0, 0) },
        }),
        []
    );

    // Variáveis auxiliares para suavização do mouse
    const mouseLerp = useMemo(() => new THREE.Vector2(0, 0), []);

    useFrame((state) => {
        if (!materialRef.current || !meshRef.current) return;

        // 1. MORPHING (Sessão 1 -> 2)
        const startPath = 0.0;
        const endPath = 0.18;
        let progress = 0;
        if (scrollProgress > startPath) {
            progress = Math.min(1, (scrollProgress - startPath) / (endPath - startPath));
        }

        const t = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        // 2. SUMIÇO / VANISH (Sessão 2 -> Cases)
        const vanishStart = 0.28;
        const vanishEnd = 0.40;
        let vT = 0;
        if (scrollProgress > vanishStart) {
            vT = Math.min(1, (scrollProgress - vanishStart) / (vanishEnd - vanishStart));
        }

        materialRef.current.uniforms.uProgress.value = t;
        materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
        materialRef.current.uniforms.uAlpha.value = 1.0 - vT;

        // Suavização do movimento do mouse para a repulsão
        mouseLerp.lerp(state.mouse, 0.1);
        materialRef.current.uniforms.uMouse.value.copy(mouseLerp);

        const { targetX, targetY, targetZ, targetRotX, targetRotY, targetRotZ, targetScale } = debugValues;

        const finalScale = (1 + t * (targetScale - 1)) * (1.0 - vT);

        meshRef.current.position.x = t * targetX;
        meshRef.current.position.y = t * targetY;
        meshRef.current.position.z = t * targetZ;

        meshRef.current.rotation.x = t * targetRotX;
        meshRef.current.rotation.y = t * targetRotY;
        meshRef.current.rotation.z = t * targetRotZ;

        meshRef.current.scale.setScalar(finalScale);

        const parallaxMult = (1.0 - t * 0.7) * (1.0 - vT);
        meshRef.current.position.x += (state.mouse.x * 0.4 * parallaxMult - meshRef.current.position.x + t * targetX) * 0.05;
        meshRef.current.position.y += (state.mouse.y * 0.4 * parallaxMult - meshRef.current.position.y + t * targetY) * 0.05;
    });

    return (
        <points ref={meshRef} frustumCulled={false}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={particlesData.initialPositions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-aTarget"
                    count={count}
                    array={particlesData.targetPositions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-aRandomStep"
                    count={count}
                    array={particlesData.randomSteps}
                    itemSize={1}
                />
            </bufferGeometry>
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent
                depthWrite={false}
                blending={THREE.NormalBlending}
            />
        </points>
    );
}
