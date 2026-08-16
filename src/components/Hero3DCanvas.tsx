import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Geometry: Detailed sphere for organic mesh distortion
    const geometry = new THREE.IcosahedronGeometry(2.1, 40);
    const originalPositions = geometry.attributes.position.clone();

    // Material: High-end physical translucent dark metallic mesh
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#0c131a'),
      emissive: new THREE.Color('#020f18'),
      roughness: 0.25,
      metalness: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
      flatShading: false,
      transparent: true,
      opacity: 0.85,
    });

    // Wireframe overlay mesh for futuristic editorial tech vibe
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#00f5d4'),
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });

    const mesh = new THREE.Mesh(geometry, material);
    const wireMesh = new THREE.Mesh(geometry, wireframeMaterial);
    wireMesh.scale.setScalar(1.002);
    mesh.add(wireMesh);
    scene.add(mesh);

    // Surgical Cyan & Aquamarine Lighting
    const cyanLight = new THREE.PointLight('#00f5d4', 25, 20);
    cyanLight.position.set(4, 3, 4);
    scene.add(cyanLight);

    const tealLight = new THREE.PointLight('#00f2fe', 20, 20);
    tealLight.position.set(-4, -3, 2);
    scene.add(tealLight);

    const topRimLight = new THREE.PointLight('#ffffff', 10, 15);
    topRimLight.position.set(0, 5, -2);
    scene.add(topRimLight);

    const ambientLight = new THREE.AmbientLight('#080d14', 2);
    scene.add(ambientLight);

    // Mouse parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) / windowHalfX;
      mouseY = (event.clientY - windowHalfY) / windowHalfY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Simplex/Perlin-style 3D noise vertex wave function
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth inertia mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mesh.rotation.y = elapsedTime * 0.15 + targetX * 0.4;
      mesh.rotation.x = Math.sin(elapsedTime * 0.1) * 0.2 + targetY * 0.3;

      // Dynamic 3D organic mesh vertex distortion
      const positions = geometry.attributes.position;
      const count = positions.count;

      for (let i = 0; i < count; i++) {
        const u = originalPositions.getX(i);
        const v = originalPositions.getY(i);
        const w = originalPositions.getZ(i);

        // Calculate organic wave displacement
        const distortion =
          Math.sin(u * 2.5 + elapsedTime * 1.5) * 0.12 +
          Math.cos(v * 3.0 + elapsedTime * 1.2) * 0.12 +
          Math.sin(w * 2.0 + elapsedTime * 1.8) * 0.1;

        // Apply radial displacement vector
        const vector = new THREE.Vector3(u, v, w).normalize();
        vector.multiplyScalar(2.1 + distortion);

        positions.setXYZ(i, vector.x, vector.y, vector.z);
      }

      positions.needsUpdate = true;
      geometry.computeVertexNormals();

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      wireframeMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div
        ref={mountRef}
        className="hero-3d-canvas-wrapper"
        style={{
          position: 'absolute',
          top: 0,
          right: '-5%',
          width: '65%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.85,
        }}
      />
      <style>{`
        @media (max-width: 768px) {
          .hero-3d-canvas-wrapper {
            width: 100% !important;
            right: 0 !important;
            opacity: 0.35 !important;
          }
        }
      `}</style>
    </>
  );
};
