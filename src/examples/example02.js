import {createRef, useRef} from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, useFrame } from 'react-three-fiber'

// Three JS documentation https://threejs.org/docs/

function Scene({
  fov = 75,
  near = 0.1,
  far = 1000,
  color = 0x00ff00,
}) {
  const exampleObjectRef = useRef();
  //can only be used within the Canvas component
  useFrame(() => {
    exampleObjectRef.current.rotation.x += 0.01;
    exampleObjectRef.current.rotation.y += 0.011;
  });

  // componentDidMount() {
  //   const {fov, near, far, color} = this.props;
  //   this.scene = new THREE.Scene();
  //   this.camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, near, far);
  //   this.renderer = new THREE.WebGLRenderer();
  //   this.renderer.setSize(window.innerWidth, window.innerHeight);
  //   this.geometry = new THREE.TorusKnotGeometry();
  //   this.material = new THREE.MeshBasicMaterial( { color } );
  //   this.exampleObject = new THREE.Mesh(this.geometry, this.material);
  //   this.scene.add(this.exampleObject);
  //   // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  // }

  return (
    <>
      <perspectiveCamera
        fov={fov}
        near={near}
        far={far}
        aspect={window.innerWidth / window.innerHeight}
        position={[0, 0, 5]}
      />
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

export default function Example01() {
  return (
    <Canvas
      width={window.innerWidth}
      height={window.innerHeight}
    >
      <Scene />
    </Canvas>
  );
}