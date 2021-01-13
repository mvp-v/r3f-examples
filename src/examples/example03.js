import {useRef, useState} from 'react';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {Canvas, extend, useFrame, useThree} from 'react-three-fiber'
import { useSpring, animated } from 'react-spring/three';

extend({OrbitControls});

function Box(props) {
  const mesh = useRef()

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  const { color, scale } = useSpring({
    color: hovered ? 'red' : 'blue',
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
  })

  return (
    <animated.mesh
      {...props}
      scale={scale}
      ref={mesh}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      {/* play with materials https://threejs.org/examples/#webgl_materials_envmaps_exr */}
      <animated.meshPhongMaterial color={color} /> 
    </animated.mesh>
  )
}

function Scene() {
  const {camera, gl: { domElement }} = useThree();

  return (
    <>
      <orbitControls args={[camera, domElement]} />
      <ambientLight />
      <spotLight position={[10, 10, 0]} />
      <pointLight position={[10, 10, 10]} />
      {[-2, 0, 2].map((x) =>
        [-2, 0, 2].map((z) => <Box key={`${x}-${z}`} position={[x, 0, z]} />)
      )}
    </>
  );
}

function raycasterFilter(intersections) {
  console.log({intersections});
  return intersections.length ? [intersections[0]] : intersections;
}

export default function Example03({
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
        position: cameraPos
      }}
      // raycaster={{
      //   filter: raycasterFilter
      // }}
    >
      <color attach='background' args={[0]} />
      <Scene />
    </Canvas>
  );
}