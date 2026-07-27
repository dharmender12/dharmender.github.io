import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // --- Scene & Camera Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070a13, 0.015);

    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 28);

    // --- WebGL Renderer ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 4, 60);
    cyanLight.position.set(15, 12, 10);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0x8b5cf6, 4, 60);
    purpleLight.position.set(-15, -10, -10);
    scene.add(purpleLight);

    const mouseLight = new THREE.PointLight(0x38bdf8, 3, 35);
    scene.add(mouseLight);

    // --- Main 3D Container ---
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // =========================================================
    // 1. NEURAL DATA NETWORK / CONSTELLATION GRAPH (Data Science)
    // =========================================================
    const nodeCount = 75;
    const nodePositions: THREE.Vector3[] = [];
    const nodeVelocities: THREE.Vector3[] = [];
    const nodesGroup = new THREE.Group();

    const nodeGeo = new THREE.SphereGeometry(0.18, 12, 12);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8,
    });

    const instancedNodes = new THREE.InstancedMesh(nodeGeo, nodeMat, nodeCount);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 36,
        (Math.random() - 0.5) * 28,
        (Math.random() - 0.5) * 20
      );
      nodePositions.push(pos);
      nodeVelocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.015
        )
      );

      dummy.position.copy(pos);
      dummy.scale.setScalar(0.8 + Math.random() * 0.6);
      dummy.updateMatrix();
      instancedNodes.setMatrixAt(i, dummy.matrix);
    }
    instancedNodes.instanceMatrix.needsUpdate = true;
    nodesGroup.add(instancedNodes);

    // Network Edges Line Geometry
    const maxConnections = 180;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineColors = new Float32Array(maxConnections * 6);

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });

    const networkLines = new THREE.LineSegments(lineGeo, lineMat);
    nodesGroup.add(networkLines);
    mainGroup.add(nodesGroup);

    // =========================================================
    // 2. COSMIC ORBITAL MATRIX & DATA CORE (Astrophysics Theme)
    // =========================================================
    const orbitalGroup = new THREE.Group();
    orbitalGroup.position.set(0, 0, -4);

    // Central Data Sphere Core
    const coreGeo = new THREE.IcosahedronGeometry(2.2, 3);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      wireframe: true,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    orbitalGroup.add(coreMesh);

    // Inner Glowing Solid Kernel
    const kernelGeo = new THREE.SphereGeometry(1.2, 16, 16);
    const kernelMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.9,
      roughness: 0.1,
    });
    const kernelMesh = new THREE.Mesh(kernelGeo, kernelMat);
    orbitalGroup.add(kernelMesh);

    // Concentric Orbital Rings (Celestial mechanics & coordinates)
    const ringMaterials = [
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.5 }),
      new THREE.MeshBasicMaterial({ color: 0xa855f7, wireframe: true, transparent: true, opacity: 0.4 }),
      new THREE.MeshBasicMaterial({ color: 0x14b8a6, wireframe: true, transparent: true, opacity: 0.45 }),
    ];

    const rings: THREE.Mesh[] = [];
    const ringRadii = [4.2, 6.0, 8.2];

    ringRadii.forEach((radius, idx) => {
      const ringGeo = new THREE.TorusGeometry(radius, 0.04, 16, 100);
      const ringMesh = new THREE.Mesh(ringGeo, ringMaterials[idx % ringMaterials.length]);
      ringMesh.rotation.x = Math.PI / (2 + idx * 0.5);
      ringMesh.rotation.y = idx * 0.8;
      orbitalGroup.add(ringMesh);
      rings.push(ringMesh);
    });

    mainGroup.add(orbitalGroup);

    // =========================================================
    // 3. 3D TOPOGRAPHIC DATA LANDSCAPE MESH (Big Data Waves)
    // =========================================================
    const terrainGeo = new THREE.PlaneGeometry(60, 40, 48, 32);
    terrainGeo.rotateX(-Math.PI / 2.3);

    const terrainMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      wireframe: true,
      emissive: 0x0284c7,
      emissiveIntensity: 0.15,
      transparent: true,
      opacity: 0.35,
    });

    const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
    terrainMesh.position.set(0, -12, -8);
    mainGroup.add(terrainMesh);

    // =========================================================
    // 4. STARFIELD & COSMIC DUST PARTICLES
    // =========================================================
    const particleCount = 1400;
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cCyan = new THREE.Color(0x38bdf8);
    const cPurple = new THREE.Color(0xa855f7);
    const cTeal = new THREE.Color(0x2dd4bf);
    const cGold = new THREE.Color(0xfacc15);

    for (let i = 0; i < particleCount; i++) {
      particlePos[i * 3] = (Math.random() - 0.5) * 90;
      particlePos[i * 3 + 1] = (Math.random() - 0.5) * 90;
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 70;

      const pColor = cCyan.clone();
      const rand = Math.random();
      if (rand > 0.75) pColor.lerp(cPurple, Math.random());
      else if (rand > 0.5) pColor.lerp(cTeal, Math.random());
      else if (rand > 0.35) pColor.lerp(cGold, 0.5);

      particleColors[i * 3] = pColor.r;
      particleColors[i * 3 + 1] = pColor.g;
      particleColors[i * 3 + 2] = pColor.b;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // =========================================================
    // 5. INTERACTION & MOUSE PARALLAX
    // =========================================================
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

      mouseLight.position.x = mouseX * 18;
      mouseLight.position.y = mouseY * 18;
      mouseLight.position.z = 8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // =========================================================
    // 6. ANIMATION LOOP
    // =========================================================
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth Mouse Parallax Camera Drift
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      camera.position.x = targetX * 4;
      camera.position.y = 2 + targetY * 3;
      camera.lookAt(0, 0, 0);

      // --- Update Neural Network Node Drift & Dynamic Edges ---
      for (let i = 0; i < nodeCount; i++) {
        const pos = nodePositions[i];
        const vel = nodeVelocities[i];

        pos.add(vel);

        // Soft Boundary Bouncing
        if (Math.abs(pos.x) > 18) vel.x *= -1;
        if (Math.abs(pos.y) > 14) vel.y *= -1;
        if (Math.abs(pos.z) > 10) vel.z *= -1;

        dummy.position.copy(pos);
        dummy.updateMatrix();
        instancedNodes.setMatrixAt(i, dummy.matrix);
      }
      instancedNodes.instanceMatrix.needsUpdate = true;

      // Recalculate Node Connections
      let connectionIdx = 0;
      const positionsAttr = lineGeo.attributes.position as THREE.BufferAttribute;
      const colorsAttr = lineGeo.attributes.color as THREE.BufferAttribute;

      for (let i = 0; i < nodeCount && connectionIdx < maxConnections; i++) {
        for (let j = i + 1; j < nodeCount && connectionIdx < maxConnections; j++) {
          const dist = nodePositions[i].distanceTo(nodePositions[j]);
          if (dist < 6.8) {
            const p1 = nodePositions[i];
            const p2 = nodePositions[j];

            linePositions[connectionIdx * 6] = p1.x;
            linePositions[connectionIdx * 6 + 1] = p1.y;
            linePositions[connectionIdx * 6 + 2] = p1.z;

            linePositions[connectionIdx * 6 + 3] = p2.x;
            linePositions[connectionIdx * 6 + 4] = p2.y;
            linePositions[connectionIdx * 6 + 5] = p2.z;

            // Connection Alpha/Color based on distance
            const alpha = 1 - dist / 6.8;
            lineColors[connectionIdx * 6] = 0.2 * alpha;
            lineColors[connectionIdx * 6 + 1] = 0.7 * alpha;
            lineColors[connectionIdx * 6 + 2] = 0.95 * alpha;

            lineColors[connectionIdx * 6 + 3] = 0.5 * alpha;
            lineColors[connectionIdx * 6 + 4] = 0.3 * alpha;
            lineColors[connectionIdx * 6 + 5] = 0.9 * alpha;

            connectionIdx++;
          }
        }
      }

      // Zero out unused line segments
      for (let k = connectionIdx * 6; k < maxConnections * 6; k++) {
        linePositions[k] = 0;
        lineColors[k] = 0;
      }

      positionsAttr.needsUpdate = true;
      colorsAttr.needsUpdate = true;

      // --- Rotate Orbital Rings & Cosmic Core ---
      coreMesh.rotation.y = elapsedTime * 0.25;
      coreMesh.rotation.x = elapsedTime * 0.15;

      kernelMesh.rotation.y = -elapsedTime * 0.4;

      rings[0].rotation.z = elapsedTime * 0.2;
      rings[1].rotation.x = elapsedTime * 0.25;
      rings[2].rotation.y = elapsedTime * 0.18;

      // --- Topographic Wave Motion (Data Stream Waves) ---
      const posAttr = terrainGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < posAttr.count; i++) {
        const u = posAttr.getX(i);
        const v = posAttr.getY(i);
        const z = Math.sin(u * 0.2 + elapsedTime * 1.5) * Math.cos(v * 0.25 + elapsedTime * 1.2) * 1.2;
        posAttr.setZ(i, z);
      }
      posAttr.needsUpdate = true;

      // --- Cosmic Starfield Slow Gyro Rotation ---
      starField.rotation.y = elapsedTime * 0.02;
      starField.rotation.x = elapsedTime * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // =========================================================
    // CLEANUP
    // =========================================================
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }

      // Dispose Geometries & Materials
      nodeGeo.dispose();
      nodeMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      kernelGeo.dispose();
      kernelMat.dispose();
      ringMaterials.forEach((m) => m.dispose());
      terrainGeo.dispose();
      terrainMat.dispose();
      starGeo.dispose();
      starMat.dispose();

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

