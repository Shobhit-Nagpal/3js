//Recommended to use glTF (GL Transmission Format). '.GLTF' is focused on 
//runtime asset delivery, compact to transmit and fast to load

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0,0,100);
camera.lookAt(0,0,0);

const scene = new THREE.Scene();


scene.background = new THREE.Color(0xDDDDDD);


const loader = new GLTFLoader();
loader.load("./assets/ford_mustang_2015_edition.glb", function (gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
}, undefined, function (error) {
    console.error(error);
}); 
