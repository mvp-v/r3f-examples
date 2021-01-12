import {Suspense, useMemo, useState} from 'react';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {Canvas, extend, useLoader, useThree, useResource} from 'react-three-fiber'
import {map, random, times} from 'lodash';
import spriteImage from './disc.png';
import * as THREE from 'three';

extend({OrbitControls});

function Scene({pointCount = 4000, low = -100.0, high = 100.0}) {
  const {camera, gl: { domElement }} = useThree();
  const spriteTexture = useLoader(THREE.TextureLoader, spriteImage);
  const spriteMaterial = useResource();

  const positions = useMemo(() => times(pointCount, () => [random(low, high), random(low, high), random(low, high)]), []);
  return (
    <>
      <orbitControls args={[camera, domElement]} />
      <spriteMaterial
        ref={spriteMaterial}
        transparent
        opacity={0.5}
        attach='material'
        color='red'
        map={spriteTexture}
      />
      {map(positions,
        (p, i) => (
          <sprite
            key={i}
            position={p}
            scale={[3, 3, 3]}
            material={spriteMaterial.current}
          >
          </sprite>
        )
      )}
    </>
  );
}

function raycasterFilter(intersections) {
  console.log({intersections});
  return intersections.length ? [intersections[0]] : intersections;
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
      // raycaster={{
      //   filter: raycasterFilter
      // }}
    >
      <Suspense fallback={null}>
        <color attach='background' args={[0]} />
        <Scene />
      </Suspense>
    </Canvas>
  );
}