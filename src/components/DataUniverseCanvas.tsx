import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Orbit, Cpu, Network, Sparkles, Layers } from 'lucide-react';

export type VisualizationMode = 'embeddings' | 'neural' | 'astronomy';

interface DataUniverseCanvasProps {
  interactive?: boolean;
  className?: string;
}

export const DataUniverseCanvas: React.FC<DataUniverseCanvasProps> = ({ 
  interactive = true,
  className = "" 
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<VisualizationMode>('embeddings');
  const [nodeCount, setNodeCount] = useState<number>(180);
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const isDraggingRef = useRef<boolean>(false);
  const previousMousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const sceneRef = useRef<THREE.Scene | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn("WebGL not supported or disabled:", e);
      return;
    }

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 110;
    cameraRef.current = camera;

    // Root Group for Rotation
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);
    groupRef.current = rootGroup;

    // Add Coordinate Grid Disk (simulating 3D tensor plane / accretion disk)
    const gridHelper = new THREE.PolarGridHelper(55, 16, 8, 64, 0x06b6d4, 0x1e293b);
    gridHelper.position.y = -25;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.35;
    rootGroup.add(gridHelper);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 3, 200);
    pointLight.position.set(40, 50, 60);
    scene.add(pointLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 2.5, 200);
    purpleLight.position.set(-50, -40, -40);
    scene.add(purpleLight);

    // Data Structure generation based on active mode
    let particlesMesh: THREE.Points;
    let linesMesh: THREE.LineSegments;
    let clusterMeshes: THREE.Mesh[] = [];

    const generateModeGeometry = (selectedMode: VisualizationMode) => {
      // Clear previous nodes
      while (rootGroup.children.length > 1) {
        const child = rootGroup.children[rootGroup.children.length - 1];
        rootGroup.remove(child);
      }
      clusterMeshes = [];

      const positions: number[] = [];
      const colors: number[] = [];
      const linePositions: number[] = [];
      const lineColors: number[] = [];

      const pointData: THREE.Vector3[] = [];

      if (selectedMode === 'neural') {
        // Multi-Layer Perceptron / Deep Architecture in 3D
        const layers = [12, 20, 28, 20, 10];
        const layerSpacing = 18;
        const startX = -((layers.length - 1) * layerSpacing) / 2;

        const layerNodes: THREE.Vector3[][] = [];

        layers.forEach((count, lIdx) => {
          const x = startX + lIdx * layerSpacing;
          const currentNodes: THREE.Vector3[] = [];
          const radius = Math.sqrt(count) * 4.5;

          for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const y = Math.sin(angle) * (radius + (i % 2) * 3);
            const z = Math.cos(angle) * (radius + (i % 2) * 3);
            const pos = new THREE.Vector3(x, y, z);
            currentNodes.push(pos);
            pointData.push(pos);

            // Colors: Cyan -> Violet -> Emerald across layers
            const col = new THREE.Color();
            col.setHSL(0.55 + (lIdx / layers.length) * 0.35, 0.9, 0.65);
            colors.push(col.r, col.g, col.b);
            positions.push(pos.x, pos.y, pos.z);
          }
          layerNodes.push(currentNodes);
        });

        // Inter-layer synaptic connections
        for (let l = 0; l < layerNodes.length - 1; l++) {
          const l1 = layerNodes[l];
          const l2 = layerNodes[l + 1];
          l1.forEach((p1) => {
            l2.forEach((p2) => {
              if (Math.random() > 0.72) {
                linePositions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
                lineColors.push(0.15, 0.65, 0.95, 0.65, 0.25, 0.95);
              }
            });
          });
        }
      } else if (selectedMode === 'astronomy') {
        // Galactic Spiral & Damped Lyman-Alpha absorption clusters
        const arms = 3;
        const totalStars = 240;
        const spiralFactor = 0.45;

        for (let i = 0; i < totalStars; i++) {
          const arm = i % arms;
          const dist = Math.pow(Math.random(), 1.5) * 45 + 3;
          const angle = (arm * (Math.PI * 2) / arms) + dist * spiralFactor + (Math.random() - 0.5) * 0.4;
          const x = Math.cos(angle) * dist;
          const z = Math.sin(angle) * dist;
          const y = (Math.random() - 0.5) * (18 - (dist / 45) * 12);

          const pos = new THREE.Vector3(x, y, z);
          pointData.push(pos);
          positions.push(pos.x, pos.y, pos.z);

          // Deep cosmic blues, hydrogen-alpha magenta, pulsar cyan
          const col = new THREE.Color();
          if (dist < 15) {
            col.setRGB(0.98, 0.92, 0.55); // galactic core
          } else if (arm === 0) {
            col.setRGB(0.22, 0.75, 0.98); // cyan arm
          } else if (arm === 1) {
            col.setRGB(0.92, 0.35, 0.85); // H-alpha arm
          } else {
            col.setRGB(0.45, 0.45, 0.98); // blue arm
          }
          colors.push(col.r, col.g, col.b);
        }

        // Filamentous cosmic web connections
        for (let i = 0; i < pointData.length; i++) {
          for (let j = i + 1; j < pointData.length; j++) {
            const d = pointData[i].distanceTo(pointData[j]);
            if (d < 7.5 && Math.random() > 0.4) {
              linePositions.push(pointData[i].x, pointData[i].y, pointData[i].z, pointData[j].x, pointData[j].y, pointData[j].z);
              lineColors.push(0.2, 0.5, 0.8, 0.7, 0.2, 0.7);
            }
          }
        }
      } else {
        // Embeddings: 4 distinct High-Dimensional Feature Clusters (Data Science classification manifold)
        const clusters = [
          { center: new THREE.Vector3(-22, 14, 0), color: new THREE.Color(0x38bdf8), size: 45 }, // NLP/LLM cluster (Cyan)
          { center: new THREE.Vector3(22, 16, -10), color: new THREE.Color(0xa855f7), size: 45 }, // Deep Learning (Purple)
          { center: new THREE.Vector3(0, -18, 15), color: new THREE.Color(0x10b981), size: 45 }, // Time-Series/Predictive (Emerald)
          { center: new THREE.Vector3(18, -12, -18), color: new THREE.Color(0xf59e0b), size: 45 }, // Anomaly Detection (Amber)
        ];

        clusters.forEach((clust) => {
          // Add glowing center orb for cluster centroid
          const sphereGeo = new THREE.SphereGeometry(1.6, 16, 16);
          const sphereMat = new THREE.MeshStandardMaterial({
            color: clust.color,
            emissive: clust.color,
            emissiveIntensity: 0.8,
            roughness: 0.2
          });
          const centroid = new THREE.Mesh(sphereGeo, sphereMat);
          centroid.position.copy(clust.center);
          rootGroup.add(centroid);
          clusterMeshes.push(centroid);

          for (let i = 0; i < clust.size; i++) {
            const u = Math.random();
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = Math.cbrt(u) * 14;

            const x = clust.center.x + r * Math.sin(phi) * Math.cos(theta);
            const y = clust.center.y + r * Math.sin(phi) * Math.sin(theta);
            const z = clust.center.z + r * Math.cos(phi);

            const pos = new THREE.Vector3(x, y, z);
            pointData.push(pos);
            positions.push(pos.x, pos.y, pos.z);
            colors.push(clust.color.r, clust.color.g, clust.color.b);
          }
        });

        // K-Nearest Neighbor (KNN) graphical linkages
        for (let i = 0; i < pointData.length; i++) {
          for (let j = i + 1; j < pointData.length; j++) {
            const d = pointData[i].distanceTo(pointData[j]);
            if (d < 6.8) {
              linePositions.push(pointData[i].x, pointData[i].y, pointData[i].z, pointData[j].x, pointData[j].y, pointData[j].z);
              lineColors.push(colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2]);
              lineColors.push(colors[j * 3], colors[j * 3 + 1], colors[j * 3 + 2]);
            }
          }
        }
      }

      setNodeCount(positions.length / 3);

      // Points Buffer Geometry
      const pointsGeo = new THREE.BufferGeometry();
      pointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      pointsGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

      // Custom Circular Particle Material
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.3, 'rgba(200,230,255,0.85)');
        gradient.addColorStop(0.7, 'rgba(60,160,255,0.3)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      const particleTexture = new THREE.CanvasTexture(canvas);

      const pointsMat = new THREE.PointsMaterial({
        size: 3.2,
        map: particleTexture,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      particlesMesh = new THREE.Points(pointsGeo, pointsMat);
      rootGroup.add(particlesMesh);

      // Lines Buffer Geometry
      const linesGeo = new THREE.BufferGeometry();
      linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      linesGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

      const linesMat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.28,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      linesMesh = new THREE.LineSegments(linesGeo, linesMat);
      rootGroup.add(linesMesh);
    };

    generateModeGeometry(mode);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (isRotating && !isDraggingRef.current) {
        rootGroup.rotation.y += delta * 0.18;
        rootGroup.rotation.x = Math.sin(clock.getElapsedTime() * 0.4) * 0.12;
      }

      // Gentle pulse on cluster centroid meshes
      clusterMeshes.forEach((mesh, idx) => {
        const scale = 1 + Math.sin(clock.getElapsedTime() * 3 + idx) * 0.15;
        mesh.scale.set(scale, scale, scale);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Mouse Interaction
    const handleMouseDown = (e: MouseEvent) => {
      if (!interactive) return;
      isDraggingRef.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive || !isDraggingRef.current) return;
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;

      rootGroup.rotation.y += deltaX * 0.008;
      rootGroup.rotation.x += deltaY * 0.008;

      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleWheel = (e: WheelEvent) => {
      if (!interactive || !camera) return;
      // Soft zoom
      camera.position.z = THREE.MathUtils.clamp(camera.position.z + e.deltaY * 0.05, 50, 180);
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('wheel', handleWheel);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [mode, interactive]);

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-3xl select-none group ${className}`}>
      {/* 3D Canvas Mount Point */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing" 
        title="Click and drag to rotate the 3D data space. Scroll to zoom."
      />

      {/* Floating 3D Telemetry HUD Overlay */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-950/50">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-semibold uppercase tracking-wider">3D Tensor Manifold</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400">{nodeCount} active nodes</span>
        </div>

        <button
          type="button"
          onClick={() => setIsRotating(!isRotating)}
          className="pointer-events-auto px-2.5 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-all cursor-pointer flex items-center gap-1.5 backdrop-blur-md"
          title="Toggle auto-orbit rotation"
        >
          <Orbit className={`w-3.5 h-3.5 ${isRotating ? "animate-spin text-cyan-400" : "text-slate-500"}`} />
          <span className="hidden sm:inline">{isRotating ? "Orbiting" : "Paused"}</span>
        </button>
      </div>

      {/* Interactive Mode Selector Switches */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center pointer-events-none z-20">
        <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/80 max-w-full">
          <button
            type="button"
            onClick={() => setMode('embeddings')}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
              mode === 'embeddings'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Vector Manifold</span>
          </button>

          <button
            type="button"
            onClick={() => setMode('neural')}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
              mode === 'neural'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>Neural Graph</span>
          </button>

          <button
            type="button"
            onClick={() => setMode('astronomy')}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
              mode === 'astronomy'
                ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Astrophysics Cloud</span>
          </button>
        </div>
      </div>

      {/* Atmospheric Vignette Gradient */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />
      <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-inset ring-white/10" />
    </div>
  );
};
