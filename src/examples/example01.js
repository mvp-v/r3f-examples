import {Component, createRef} from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Three JS documentation https://threejs.org/docs/

export default class Example01 extends Component {
  static defaultProps = {
    fov: 75,
    near: 0.1,
    far: 1000,
    color: 0x00ff00,
  }

  ref = createRef();

  animate = () => {
    const {animate, camera, exampleObject, renderer, scene} = this;
    requestAnimationFrame(animate);
    exampleObject.rotation.x += 0.01;
    exampleObject.rotation.y += 0.011;
    renderer.render( scene, camera );
  };

  componentDidMount() {
    const {fov, near, far, color} = this.props;
    // https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene 
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, near, far);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.geometry = new THREE.TorusKnotGeometry();
    this.material = new THREE.MeshBasicMaterial( { color } );
    this.exampleObject = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.exampleObject);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.scene.add( new THREE.AxesHelper( 2 ) );

    this.camera.position.z = 5;
    this.ref.current.appendChild(this.renderer.domElement);
    this.animate();
  }

  componentWillUnmount() {
    this.controls.dispose();
    this.renderer.dispose();
  }

  render() {
    return <div ref={this.ref} />;
  }
}
