import * as THREE from 'three';
import earthPic from '../assets/earth.jpeg';

let camera;
let scene;
let renderer;
var mesh;
const width = 500;
const height = 500;

export function init() {
  camera = new THREE.PerspectiveCamera(50, width / height, 1, 1000);
  camera.position.z = 400;
  // 创建场景
  scene = new THREE.Scene();
  // 创建纹理
  const texture = new THREE.TextureLoader().load(earthPic);
  // 创建几何模型：球
  const geometry = new THREE.SphereGeometry(150, 30, 30);
  // 创建材质
  const material = new THREE.MeshBasicMaterial({ map: texture });
  // 创建网格
  mesh = new THREE.Mesh(geometry, material);
  // 加入场景
  scene.add(mesh);
  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  document.getElementById('earth').appendChild(renderer.domElement);
}

export function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.005;
  renderer.render(scene, camera);
}

export default function () {
  init();
  animate();
};
