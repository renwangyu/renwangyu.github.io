import * as THREE from 'three';
import jupiterPic from '../assets/jupiter.jpg';
import marsPic from '../assets/mars.jpg';
import venusPic from '../assets/venus.jpg';

class Planet {
  constructor(params) {
    const { name, img, r, ellipse, deltRotation, ratio = 1 } = params;
    this.name = name;
    this.img = img;
    this.r = r;
    this.a = ellipse.a;
    this.b = ellipse.b;
    this.deltRotation = deltRotation;
    this.ratio = ratio;
    this.init();
  }

  init() {
    // 创建纹理
    const texture = new THREE.TextureLoader().load(this.img);
    // 创建几何模型：球
    const geometry = new THREE.SphereGeometry(this.r, 30, 30); 
    // 创建材质
    const material = new THREE.MeshBasicMaterial({ map: texture });
    // 创建网格
    this.mesh = new THREE.Mesh(geometry, material);
  }

  add2scence(scene) {
    scene.add(this.mesh);
  }

  getEllipse() {
    return { a: this.ellipseA, b: this.ellipseB };
  }

  getPosition(deg) {
    const rad = this.ratio * deg * Math.PI / 180;
    const cosVal = Math.cos(rad);
    const sinVal = Math.sin(rad);
    const L = this.a * this.b / (Math.pow((Math.pow(this.b * cosVal, 2) + Math.pow(this.a * sinVal, 2)), 0.5));
    const x = L * cosVal;
    const y = L * sinVal;
    return [x, y];
  }

  animate(deg) {
    const [x, y] = this.getPosition(deg);
    this.mesh.position.x = x;
    this.mesh.position.z = y;
    this.mesh.rotation.x += this.deltRotation.x;
    this.mesh.rotation.y += this.deltRotation.y;
  }
}

let camera;
let scene;
let renderer;
const width = window.innerWidth;
const height = window.innerHeight;
var deg = 0;
const planets = [];

export function init() {
  camera = new THREE.PerspectiveCamera(50, width / height, 1, 1000);
  camera.position.z = 500;
  camera.position.y = -20;
  // 创建场景
  scene = new THREE.Scene();

  const jupiter = new Planet({
    name: 'jupiter',
    img: jupiterPic,
    r: 50,
    ellipse: {
      a: 500,
      b: 350,
    },
    deltRotation: {
      x: 0.0005,
      y: -0.01,
    },
  });
  const mars = new Planet({
    name: 'mars',
    img: marsPic,
    r: 10,
    ellipse: {
      a: 250,
      b: 180,
    },
    deltRotation: {
      x: 0.0001,
      y: -0.005,
    },
    ratio: 1.5
  });
  const venus = new Planet({
    name: 'venus',
    img: venusPic,
    r: 20,
    ellipse: {
      a: 350,
      b: 250,
    },
    deltRotation: {
      x: 0.0005,
      y: -0.005,
    },
    ratio: 0.8,
  })
  // 加入场景
  jupiter.add2scence(scene);
  mars.add2scence(scene)
  venus.add2scence(scene)
  planets.push(jupiter);
  planets.push(mars);
  planets.push(venus);

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  document.getElementById('planets').appendChild(renderer.domElement);
}

export function animate() {
  planets.forEach(p => p.animate(deg));

  renderer.render(scene, camera);
  deg += 0.1;
  requestAnimationFrame(animate);
}

export default function () {
  init();
  animate();
};