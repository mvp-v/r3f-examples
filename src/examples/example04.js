import {Suspense, useMemo, useRef} from 'react';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {Canvas, extend, useFrame, useLoader, useThree} from 'react-three-fiber'
import {constant, random, times, sum, forIn} from 'lodash';
import spriteImage from './sprite.png';
import * as THREE from 'three';

import Stats from './Stats';
import {fragmentShader, vertexShader} from './pointsShaders';

extend({OrbitControls});

function gauss(m = 0, w = 1, n = 100) {
  return m + w * sum(times(n, () => random(-1, 1, true))) / n;
}

function Scene({
  pointCount = 4000,
  maxSpeed = 2.0,
  maxTtl = 400,
  wide = 4,
}) {
  const {camera, gl: { domElement }} = useThree();
  const spriteTexture = useLoader(THREE.TextureLoader, spriteImage);

  const [positions, colors, alphas, sizes, speed, ttl] = useMemo(
    () => [
      new Float32Array(times(3 * pointCount, constant(0))),
      new Float32Array(times(3 * pointCount, constant(1))),
      new Float32Array(times(pointCount, constant(0.5))),
      new Float32Array(times(pointCount, constant(1))),
      times(pointCount, () => ({x: gauss(0, wide), y: random(1, maxSpeed, true), z: gauss(0, wide)})),
      times(pointCount, () => random(0.1, maxTtl, true)),
    ],
    [pointCount, maxSpeed, maxTtl, wide]
  );

  const geometryRef = useRef();

  useFrame(() => {
    const color = new THREE.Color('red');
    for(let i = 0; i < pointCount; i++) {
      positions[3 * i + 0] += speed[i].x;
      positions[3 * i + 1] += speed[i].y;
      positions[3 * i + 2] += speed[i].z;
      color.setHSL(random(0.0, 0.06), 1, 0.5 + 0.5 * (1 - positions[3 * i + 1] / ttl[i]) ** 2);
      color.toArray(colors, 3 * i);
      if (positions[3 * i + 1] > ttl[i]) {
        positions[3 * i + 0] = 
          positions[3 * i + 1] = 
            positions[3 * i + 2] = 0;  
      }
      alphas[i] = (1 - positions[3 * i + 1] / ttl[i]) ** 2;
      sizes[i] = 1 + 40 * (positions[3 * i + 1] / ttl[i]) ** 3;
    }
    forIn(geometryRef.current.attributes, (attr) => attr.needsUpdate = true);
    geometryRef.current.computeBoundingSphere();
  });

  return (
    <>
      <orbitControls args={[camera, domElement]} />
      <points>
        <bufferGeometry
          ref={geometryRef}
          attach='geometry'
        >
          <bufferAttribute
            attachObject={['attributes', 'position']}
            array={positions}
            itemSize={3}
            count={pointCount}
          />
          <bufferAttribute
            attachObject={['attributes', 'customColor']}
            array={colors}
            itemSize={3}
            count={pointCount}
          />
          <bufferAttribute
            attachObject={['attributes', 'alpha']}
            array={alphas}
            itemSize={1}
            count={pointCount}
          />
          <bufferAttribute
            attachObject={['attributes', 'size']}
            array={sizes}
            itemSize={1}
            count={pointCount}
          />
        </bufferGeometry>
        <shaderMaterial
          transparent
          attach='material'
          uniforms={{
            pointTexture: { value: spriteTexture },
          }}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          blending={THREE.AdditiveBlending}
          depthTest={false}
        />
      </points>
    </>
  );
}

export default function Example04({
  sceneSize = 200,
  cameraPos = [0, 0, 5],
}) {
  return (
    <Canvas
      orthographic
      style={{height: '100vh'}}
      camera={{
        left: -sceneSize,
        right: sceneSize,
        top: sceneSize,
        bottom: -sceneSize,
        near: -sceneSize,
        far: sceneSize,
        position: cameraPos
      }}
    >
      <Stats />
      <Suspense fallback={null}>
        <color attach='background' args={[0]} />
        <group position={[0, -300, 0]}>
          <Scene />
        </group>
      </Suspense>
    </Canvas>
  );
}
