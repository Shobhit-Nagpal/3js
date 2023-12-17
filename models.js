//Recommended to use glTF (GL Transmission Format). '.GLTF' is focused on 
//runtime asset delivery, compact to transmit and fast to load

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0,5,-10);
camera.lookAt(0,0,0);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xDDDDDD);

const ambientLight = new THREE.AmbientLight(0xffffff, 15);
scene.add(ambientLight);
const dirLight = new THREE.DirectionalLight(0xffffff, 15);
dirLight.position.set(10, 20, 0); // x, y, z
scene.add(dirLight);

const loader = new GLTFLoader();
loader.load("./assets/ford_mustang_2015_edition.glb", function (gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
}, undefined, function (error) {
    console.error(error);
}); 

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera)
}

animate();
