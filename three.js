// 1. Setup Scene, Camera, and Renderer
const canvas = document.querySelector('#bg-canvas');
const scene = new THREE.Scene();

// We make the renderer transparent so your CSS background color shows through
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

// 2. Create the Particle Geometry
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 700; // Adjust this number for more/fewer dots
const posArray = new Float32Array(particlesCount * 3);

// Randomly spread particles across the screen
for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 100;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

// 3. Create the Material (Dark grey dots to contrast the light background)
const material = new THREE.PointsMaterial({
    size: 0.15,
    color: 0x444444,
    transparent: true,
    opacity: 0.8
});

// 4. Combine Geometry and Material into a Mesh and add to Scene
const particlesMesh = new THREE.Points(particlesGeometry, material);
scene.add(particlesMesh);

// 5. Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Slowly rotate the entire particle field
    particlesMesh.rotation.y += 0.001;
    particlesMesh.rotation.x += 0.0005;

    renderer.render(scene, camera);
}
animate();

// 6. Handle Window Resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});