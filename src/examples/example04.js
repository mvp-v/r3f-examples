import {Suspense, useMemo, useRef} from 'react';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {Canvas, extend, useFrame, useLoader, useThree} from 'react-three-fiber'
import {constant, random, times, sum} from 'lodash';
import spriteImage from './disc.png';
import * as THREE from 'three';
import { Vector3 } from 'three';

extend({OrbitControls});

function gauss(m = 0, w = 1, n = 100) {
  return m + w * sum(times(n, () => random(-1, 1, true))) / n;
}

function Scene({
  pointCount = 4000,
  low = -100.0,
  high = 100.0,
  maxSpeed = 2.0,
  maxTtl = 300,
  wide = 3,
}) {
  const {camera, gl: { domElement }} = useThree();
  const spriteTexture = useLoader(THREE.TextureLoader, spriteImage);

  const [positions, colors, speed, ttl] = useMemo(
    () => [
      new Float32Array(times(3 * pointCount, constant(0))),
      new Float32Array(times(3 * pointCount, constant(0))),
      times(pointCount, () => ({x: gauss(0, wide), y: random(1, maxSpeed, true), z: gauss(0, wide)})),
      times(pointCount, () => random(0.1, maxTtl, true)),
    ],
    [pointCount, high, low]
  );

  const positionAttribute = useRef();
  const colorsAttribute = useRef();

  useFrame(() => {
    for(let i = 1; i < pointCount; i++) {
      positions[3 * i + 0] += speed[i].x;
      positions[3 * i + 1] += speed[i].y;
      positions[3 * i + 2] += speed[i].z;
      if (positions[3 * i + 1] > ttl[i]) {
        positions[3 * i + 0] = 0;
        positions[3 * i + 1] = 0;
        positions[3 * i + 2] = 0;  
      }
    }
    positionAttribute.current.needsUpdate = true;
    colorsAttribute.current.needsUpdate = true;
    positionAttribute.current.parent.computeBoundingSphere();
  });

  return (
    <>
      <orbitControls args={[camera, domElement]} />
      <points>
        <bufferGeometry
          attach='geometry'
        >
          <bufferAttribute
            ref={positionAttribute}
            attachObject={['attributes', 'position']}
            array={positions}
            itemSize={3}
            count={pointCount}
          />
          <bufferAttribute
            ref={colorsAttribute}
            attachObject={['attributes', 'color']}
            array={colors}
            itemSize={3}
            count={pointCount}
          />
        </bufferGeometry>
        <pointsMaterial
          transparent
          attach='material'
          map={spriteTexture}
          color='orange'
          size={10}
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
      <Suspense fallback={null}>
        <color attach='background' args={[0]} />
        <group position={[0, -300, 0]}>
          <Scene />
        </group>
      </Suspense>
    </Canvas>
  );
}