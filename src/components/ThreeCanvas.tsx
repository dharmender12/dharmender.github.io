import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090d16, 0.018);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 22;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x38bdf8, 3, 50); // Cyan light
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x818cf8, 3, 50); // Indigo light
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    const mouseLight = new THREE.PointLight(0xec4899, 2.5, 40); // Pink cursor light
    scene.add(mouseLight);

    // 3D Objects Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Centerpiece: Metallic Wireframe TorusKnot
    const knotGeo = new THREE.TorusKnotGeometry(4.5, 1.2, 128, 32);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.3,
    });
    const torusKnot = new THREE.Mesh(knotGeo, knotMat);
    torusKnot.position.set(0, 0, -2);
    mainGroup.add(torusKnot);

    // Inner Glowing Core
    const coreGeo = new THREE.IcosahedronGeometry(2.5, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.6,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Orbiting Floating Geometries
    const floatingObjects: THREE.Mesh[] = [];

    // 1. Dodecahedron
    const dodGeo = new THREE.DodecahedronGeometry(1.5);
    const dodMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      wireframe: true,
      emissive: 0x0891b2,
      emissiveIntensity: 0.4,
    });
    const dodMesh = new THREE.Mesh(dodGeo, dodMat);
    dodMesh.position.set(-11, 6, -3);
    mainGroup.add(dodMesh);
    floatingObjects.push(dodMesh);

    // 2. Octahedron
    const octGeo = new THREE.OctahedronGeometry(1.8);
    const octMat = new THREE.MeshStandardMaterial({
      color: 0xec4899,
      wireframe: true,
      emissive: 0xbe185d,
      emissiveIntensity: 0.4,
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    octMesh.position.set(12, -7, 2);
    mainGroup.add(octMesh);
    floatingObjects.push(octMesh);

    // 3. Tetrahedrons
    for (let i = 0; i < 6; i++) {
      const tetGeo = new THREE.TetrahedronGeometry(1 + Math.random() * 0.8);
      const tetMat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0x8b5cf6 : 0x14b8a6,
        wireframe: true,
      });
      const tetMesh = new THREE.Mesh(tetGeo, tetMat);
      tetMesh.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 15 - 5
      );
      mainGroup.add(tetMesh);
      floatingObjects.push(tetMesh);
    }

    // Interactive Particle Stars Field
    const particlesCount = 1200;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const color1 = new THREE.Color(0x38bdf8);
    const color2 = new THREE.Color(0x818cf8);
    const color3 = new THREE.Color(0xc084fc);

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

      const mixedColor = color1.clone();
      const rand = Math.random();
      if (rand > 0.6) mixedColor.lerp(color2, Math.random());
      else if (rand > 0.3) mixedColor.lerp(color3, Math.random());

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });

    const starParticles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(starParticles);

    // Mouse Interaction Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

      // Move mouse light in 3D space
      mouseLight.position.x = mouseX * 15;
      mouseLight.position.y = mouseY * 15;
      mouseLight.position.z = 5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Window Resize
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera movement based on mouse
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 3;
      camera.position.y = targetY * 3;
      camera.lookAt(scene.position);

      // Rotate Main 3D Geometries
      torusKnot.rotation.x = elapsedTime * 0.2;
      torusKnot.rotation.y = elapsedTime * 0.3;

      coreMesh.rotation.y = -elapsedTime * 0.4;
      coreMesh.rotation.x = elapsedTime * 0.15;

      // Animate floating objects
      floatingObjects.forEach((obj, idx) => {
        obj.rotation.x += 0.01 * (idx % 2 === 0 ? 1 : -1);
        obj.rotation.y += 0.015;
        obj.position.y += Math.sin(elapsedTime * 1.5 + idx) * 0.008;
      });

      // Slowly rotate star particles
      starParticles.rotation.y = elapsedTime * 0.03;
      starParticles.rotation.x = elapsedTime * 0.015;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070a13]"
      id="three-canvas-container"
    />
  );
};
