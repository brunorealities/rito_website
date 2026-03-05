import * as THREE from 'three';
import { useMemo, useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { GPUComputationRenderer } from 'three-stdlib';
import { useBirdsControls } from '../../hooks/useBirdsControls';

const WIDTH = 25;
const BIRDS = WIDTH * WIDTH;
const BOUNDS = 800;
const BOUNDS_HALF = BOUNDS / 2;

const fragmentShaderPosition = `
uniform float time;
uniform float delta;

void main()	{
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 tmpPos = texture2D( texturePosition, uv );
  vec3 position = tmpPos.xyz;
  vec3 velocity = texture2D( textureVelocity, uv ).xyz;
  float phase = tmpPos.w;

  phase = mod( ( phase + delta +
    length( velocity.xz ) * delta * 3. +
    max( velocity.y, 0.0 ) * delta * 6. ), 62.83 );

  gl_FragColor = vec4( position + velocity * delta * 15. , phase );
}
`;

const fragmentShaderVelocity = `
uniform float time;
uniform float testing;
uniform float delta; // about 0.016
uniform float separationDistance; // 20
uniform float alignmentDistance; // 40
uniform float cohesionDistance; //
uniform float freedomFactor;
uniform vec3 predator;

const float width = resolution.x;
const float height = resolution.y;

const float PI = 3.141592653589793;
const float PI_2 = PI * 2.0;

float zoneRadius = 40.0;
float zoneRadiusSquared = 1600.0;

float separationThresh = 0.45;
float alignmentThresh = 0.65;

const float UPPER_BOUNDS = BOUNDS;
const float LOWER_BOUNDS = -UPPER_BOUNDS;

const float SPEED_LIMIT = 9.0;

float rand( vec2 co ){
  return fract( sin( dot( co.xy, vec2(12.9898,78.233) ) ) * 43758.5453 );
}

void main() {
  zoneRadius = separationDistance + alignmentDistance + cohesionDistance;
  separationThresh = separationDistance / zoneRadius;
  alignmentThresh = ( separationDistance + alignmentDistance ) / zoneRadius;
  zoneRadiusSquared = zoneRadius * zoneRadius;

  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec3 birdPosition, birdVelocity;

  vec3 selfPosition = texture2D( texturePosition, uv ).xyz;
  vec3 selfVelocity = texture2D( textureVelocity, uv ).xyz;

  float dist;
  vec3 dir; // direction
  float distSquared;

  float f;
  float percent;

  vec3 velocity = selfVelocity;

  float limit = SPEED_LIMIT;

  dir = predator * UPPER_BOUNDS - selfPosition;
  dir.z = 0.;

  dist = length( dir );
  distSquared = dist * dist;

  float preyRadius = 150.0;
  float preyRadiusSq = preyRadius * preyRadius;

  // move birds away from predator
  if ( dist < preyRadius ) {
    f = ( distSquared / preyRadiusSq - 1.0 ) * delta * 100.;
    velocity += normalize( dir ) * f;
    limit += 5.0;
  }

  // Attract flocks to the center
  vec3 central = vec3( 0., 0., 0. );
  dir = selfPosition - central;
  dist = length( dir );

  dir.y *= 2.5;
  velocity -= normalize( dir ) * delta * 5.;

  for ( float y = 0.0; y < height; y++ ) {
    for ( float x = 0.0; x < width; x++ ) {

      vec2 ref = vec2( x + 0.5, y + 0.5 ) / resolution.xy;
      birdPosition = texture2D( texturePosition, ref ).xyz;

      dir = birdPosition - selfPosition;
      dist = length( dir );

      if ( dist < 0.0001 ) continue;

      distSquared = dist * dist;

      if ( distSquared > zoneRadiusSquared ) continue;

      percent = distSquared / zoneRadiusSquared;

      if ( percent < separationThresh ) {
        f = ( separationThresh / percent - 1.0 ) * delta;
        velocity -= normalize( dir ) * f;

      } else if ( percent < alignmentThresh ) {
        float threshDelta = alignmentThresh - separationThresh;
        float adjustedPercent = ( percent - separationThresh ) / threshDelta;

        birdVelocity = texture2D( textureVelocity, ref ).xyz;

        f = ( 0.5 - cos( adjustedPercent * PI_2 ) * 0.5 + 0.5 ) * delta;
        velocity += normalize( birdVelocity ) * f;

      } else {
        float threshDelta = 1.0 - alignmentThresh;
        float adjustedPercent;
        if( threshDelta == 0. ) adjustedPercent = 1.;
        else adjustedPercent = ( percent - alignmentThresh ) / threshDelta;

        f = ( 0.5 - ( cos( adjustedPercent * PI_2 ) * -0.5 + 0.5 ) ) * delta;

        velocity += normalize( dir ) * f;
      }
    }
  }

  // Speed Limits
  if ( length( velocity ) > limit ) {
    velocity = normalize( velocity ) * limit;
  }

  gl_FragColor = vec4( velocity, 1.0 );
}
`;

const birdVS = `
attribute vec2 reference;
attribute float birdVertex;

attribute vec3 birdColor;

uniform sampler2D texturePosition;
uniform sampler2D textureVelocity;

varying vec4 vColor;
varying float z;

uniform float time;

void main() {
  vec4 tmpPos = texture2D( texturePosition, reference );
  vec3 pos = tmpPos.xyz;
  vec3 velocity = normalize(texture2D( textureVelocity, reference ).xyz);

  vec3 newPosition = position;

  if ( birdVertex == 4.0 || birdVertex == 7.0 ) {
    // flap wings
    newPosition.y = sin( tmpPos.w ) * 5.;
  }

  newPosition = mat3( modelMatrix ) * newPosition;

  velocity.z *= -1.;
  float xz = length( velocity.xz );
  float xyz = 1.;
  float x = sqrt( 1. - velocity.y * velocity.y );

  float cosry = velocity.x / xz;
  float sinry = velocity.z / xz;

  float cosrz = x / xyz;
  float sinrz = velocity.y / xyz;

  mat3 maty =  mat3(
    cosry, 0, -sinry,
    0    , 1, 0     ,
    sinry, 0, cosry
  );

  mat3 matz =  mat3(
    cosrz , sinrz, 0,
    -sinrz, cosrz, 0,
    0     , 0    , 1
  );

  newPosition =  maty * matz * newPosition;
  newPosition += pos;

  z = newPosition.z;

  // Scale the world down to match our generic R3F scene.
  // 800 bounds is too big for a camera at z=6.
  newPosition *= 0.015;

  vColor = vec4( birdColor, 1.0 );
  gl_Position = projectionMatrix *  viewMatrix  * vec4( newPosition, 1.0 );
}
`;

const birdFS = `
varying vec4 vColor;
varying float z;

uniform vec3 color;
uniform float uOpacity;

void main() {
  // Use the uniform color and multiply by z2 for a fake depth/shading effect
  float z2 = 0.2 + ( 4000. - z ) / 4000. * vColor.x;
  gl_FragColor = vec4( color * z2, uOpacity );
}
`;

class BirdGeometry extends THREE.BufferGeometry {
  constructor() {
    super();

    const trianglesPerBird = 3;
    const triangles = BIRDS * trianglesPerBird;
    const points = triangles * 3;

    const vertices = new THREE.BufferAttribute(new Float32Array(points * 3), 3);
    const birdColors = new THREE.BufferAttribute(new Float32Array(points * 3), 3);
    const references = new THREE.BufferAttribute(new Float32Array(points * 2), 2);
    const birdVertex = new THREE.BufferAttribute(new Float32Array(points), 1);

    this.setAttribute('position', vertices);
    this.setAttribute('birdColor', birdColors);
    this.setAttribute('reference', references);
    this.setAttribute('birdVertex', birdVertex);

    let v = 0;

    function verts_push(...args: number[]) {
      for (let i = 0; i < args.length; i++) {
        vertices.array[v++] = args[i];
      }
    }

    const wingsSpan = 20;

    for (let f = 0; f < BIRDS; f++) {
      // Body
      verts_push(
        0, - 0, - 20,
        0, 4, - 20,
        0, 0, 30
      );

      // Wings
      verts_push(
        0, 0, - 15,
        - wingsSpan, 0, 0,
        0, 0, 15
      );

      verts_push(
        0, 0, 15,
        wingsSpan, 0, 0,
        0, 0, - 15
      );
    }

    for (let v = 0; v < triangles * 3; v++) {
      const triangleIndex = ~ ~(v / 3);
      const birdIndex = ~ ~(triangleIndex / trianglesPerBird);
      const x = (birdIndex % WIDTH) / WIDTH;
      const y = ~ ~(birdIndex / WIDTH) / WIDTH;

      const c = new THREE.Color(
        0x666666 +
        ~ ~(v / 9) / BIRDS * 0x666666
      );

      birdColors.array[v * 3 + 0] = c.r;
      birdColors.array[v * 3 + 1] = c.g;
      birdColors.array[v * 3 + 2] = c.b;

      references.array[v * 2] = x;
      references.array[v * 2 + 1] = y;

      birdVertex.array[v] = v % 9;
    }

    this.scale(0.2, 0.2, 0.2);
  }
}

export function BirdsEffect({ scrollProgress }: { scrollProgress?: number }) {
  const { gl } = useThree();

  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const pointerRef = useRef({ x: 10000, y: 10000 });
  const lastTimeRef = useRef(performance.now());

  const gpuComputeInfo = useMemo(() => {
    const compute = new GPUComputationRenderer(WIDTH, WIDTH, gl);

    const dtPosition = compute.createTexture();
    const dtVelocity = compute.createTexture();

    const theArrayPos = dtPosition.image.data;
    for (let k = 0, kl = theArrayPos.length; k < kl; k += 4) {
      theArrayPos[k + 0] = Math.random() * BOUNDS - BOUNDS_HALF;
      theArrayPos[k + 1] = Math.random() * BOUNDS - BOUNDS_HALF;
      theArrayPos[k + 2] = Math.random() * BOUNDS - BOUNDS_HALF;
      theArrayPos[k + 3] = 1;
    }

    const theArrayVel = dtVelocity.image.data;
    for (let k = 0, kl = theArrayVel.length; k < kl; k += 4) {
      theArrayVel[k + 0] = (Math.random() - 0.5) * 10;
      theArrayVel[k + 1] = (Math.random() - 0.5) * 10;
      theArrayVel[k + 2] = (Math.random() - 0.5) * 10;
      theArrayVel[k + 3] = 1;
    }

    const velocityVar = compute.addVariable('textureVelocity', fragmentShaderVelocity, dtVelocity);
    const positionVar = compute.addVariable('texturePosition', fragmentShaderPosition, dtPosition);

    compute.setVariableDependencies(velocityVar, [positionVar, velocityVar]);
    compute.setVariableDependencies(positionVar, [positionVar, velocityVar]);

    const posUniforms = positionVar.material.uniforms;
    const velUniforms = velocityVar.material.uniforms;

    posUniforms['time'] = { value: 0.0 };
    posUniforms['delta'] = { value: 0.0 };
    velUniforms['time'] = { value: 1.0 };
    velUniforms['delta'] = { value: 0.0 };
    velUniforms['testing'] = { value: 1.0 };
    velUniforms['separationDistance'] = { value: 20.0 };
    velUniforms['alignmentDistance'] = { value: 20.0 };
    velUniforms['cohesionDistance'] = { value: 20.0 };
    velUniforms['freedomFactor'] = { value: 0.75 };
    velUniforms['predator'] = { value: new THREE.Vector3() };

    velocityVar.material.defines.BOUNDS = BOUNDS.toFixed(2);

    velocityVar.wrapS = THREE.RepeatWrapping;
    velocityVar.wrapT = THREE.RepeatWrapping;
    positionVar.wrapS = THREE.RepeatWrapping;
    positionVar.wrapT = THREE.RepeatWrapping;

    const error = compute.init();
    if (error !== null) {
      console.error(error);
    }

    return { compute, positionVar, velocityVar, posUniforms, velUniforms };
  }, [gl]);

  // Controls for bird behavior
  // Controles dos pássaros agora organizados em um hook independente
  const controls = useBirdsControls();

  const birdUniforms = useMemo(() => ({
    color: { value: new THREE.Color('#f5da76') },
    texturePosition: { value: null },
    textureVelocity: { value: null },
    time: { value: 1.0 },
    delta: { value: 0.0 },
    uOpacity: { value: 0.2 }
  }), []);

  useEffect(() => {
    // Visibility logic: Fade out smoothly based on scroll.
    const fadeThreshold = 0.25;
    const fadeIntensity = scrollProgress ? Math.max(0, 1 - scrollProgress / fadeThreshold) : 1;

    if (gpuComputeInfo) {
      gpuComputeInfo.velUniforms['separationDistance'].value = controls.separation;
      gpuComputeInfo.velUniforms['alignmentDistance'].value = controls.alignment;
      gpuComputeInfo.velUniforms['cohesionDistance'].value = controls.cohesion;
      gpuComputeInfo.velUniforms['freedomFactor'].value = controls.freedom;
    }
    birdUniforms.uOpacity.value = controls.opacity * fadeIntensity;
    birdUniforms.color.value.set(controls.birdColor);
  }, [controls, gpuComputeInfo, birdUniforms, scrollProgress]);

  const geometry = useMemo(() => new BirdGeometry(), []);

  useEffect(() => {
    meshRef.current?.updateMatrix();
    const handlePointerMove = (e: PointerEvent) => {
      if (!e.isPrimary) return;
      pointerRef.current.x = e.clientX - window.innerWidth / 2;
      pointerRef.current.y = e.clientY - window.innerHeight / 2;
    };
    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  useFrame(() => {
    const now = performance.now();
    let delta = (now - lastTimeRef.current) / 1000;
    if (delta > 1) delta = 1;
    lastTimeRef.current = now;

    const { compute, posUniforms, velUniforms, positionVar, velocityVar } = gpuComputeInfo;

    posUniforms['time'].value = now;
    posUniforms['delta'].value = delta;
    velUniforms['time'].value = now;
    velUniforms['delta'].value = delta;
    birdUniforms.time.value = now;
    birdUniforms.delta.value = delta;

    velUniforms['predator'].value.set(
      0.5 * pointerRef.current.x / (window.innerWidth / 2),
      -0.5 * pointerRef.current.y / (window.innerHeight / 2),
      0
    );

    // Reset mouse immediately just like in the threejs example
    pointerRef.current.x = 10000;
    pointerRef.current.y = 10000;

    compute.compute();

    birdUniforms.texturePosition.value = compute.getCurrentRenderTarget(positionVar).texture;
    birdUniforms.textureVelocity.value = compute.getCurrentRenderTarget(velocityVar).texture;

    // Smooth scroll effect (optional, matching Particles scroll behavior roughly but simpler)
    if (meshRef.current) {
      meshRef.current.position.y = (scrollProgress || 0) * 2;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[0, Math.PI / 2, 0]} matrixAutoUpdate={false}>
      <shaderMaterial
        ref={materialRef}
        uniforms={birdUniforms}
        vertexShader={birdVS}
        fragmentShader={birdFS}
        side={THREE.DoubleSide}
        transparent={true}
        opacity={1.}
      />
    </mesh>
  );
}
