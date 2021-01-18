import {useRef} from 'react';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {Canvas, extend, useFrame, useThree} from 'react-three-fiber'

extend({OrbitControls});

function Scene({
  color = 0x00ff00,
}) {
  const exampleObjectRef = useRef();
  //can only be used within the Canvas component
  useFrame(() => {
    exampleObjectRef.current.rotation.x += 0.01;
    exampleObjectRef.current.rotation.y += 0.011;
  });

  const {camera, gl: { domElement }} = useThree();

  return (
    <>
      <orbitControls args={[camera, domElement]} />
      <mesh ref={exampleObjectRef}>
        <torusKnotGeometry
          attach='geometry'
        />
        <meshBasicMaterial
          attach='material'
          color={color}
        />
      </mesh>
      <axesHelper args={[2]} />
    </>
  );
}

export default function Example02({
  fov = 75,
  near = 0.1,
  far = 1000,
  cameraPos = [0, 0, 5],
}) {
  return (
    <Canvas
      style={{height: '100vh'}}
      camera={{
        fov,
        near,
        far,
        aspect: window.innerWidth / window.innerHeight,
        position: cameraPos
      }}
    >
      <color attach='background' args={[0]} />
      <Scene />
    </Canvas>
  );
}