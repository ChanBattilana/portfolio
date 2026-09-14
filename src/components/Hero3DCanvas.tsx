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
    camera.position.z = 7;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Group for the entire interactive 3D object
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Wireframe Polyhedron (Core)
    const coreGeometry = new THREE.IcosahedronGeometry(1.2, 1);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // Inner glowing vertices
    const vertexPointsGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const vertexPointsMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.08,
      transparent: true,
      opacity: 0.9,
    });
    const vertexPoints = new THREE.Points(vertexPointsGeo, vertexPointsMat);
    mainGroup.add(vertexPoints);

    // 2. Multi-Axis Orbital Gyroscope Rings
    const ringMaterials = [
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55 }),
      new THREE.LineBasicMaterial({ color: 0xe4e4e7, transparent: true, opacity: 0.4 }),
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 }),
    ];

    const rings: THREE.LineLoop[] = [];

    // Outer Ring 1
    const ring1Geo = new THREE.BufferGeometry();
    const ring1Pts: THREE.Vector3[] = [];
    const segments = 96;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      ring1Pts.push(new THREE.Vector3(Math.cos(theta) * 2.3, Math.sin(theta) * 2.3, 0));
    }
    ring1Geo.setFromPoints(ring1Pts);
    const ring1 = new THREE.LineLoop(ring1Geo, ringMaterials[0]);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);
    rings.push(ring1);

    // Outer Ring 2
    const ring2Geo = new THREE.BufferGeometry();
    const ring2Pts: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      ring2Pts.push(new THREE.Vector3(Math.cos(theta) * 2.6, 0, Math.sin(theta) * 2.6));
    }
    ring2Geo.setFromPoints(ring2Pts);
    const ring2 = new THREE.LineLoop(ring2Geo, ringMaterials[1]);
    ring2.rotation.z = Math.PI / 4;
    mainGroup.add(ring2);
    rings.push(ring2);

    // Outer Ring 3
    const ring3Geo = new THREE.BufferGeometry();
    const ring3Pts: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      ring3Pts.push(new THREE.Vector3(0, Math.cos(theta) * 2.45, Math.sin(theta) * 2.45));
    }
    ring3Geo.setFromPoints(ring3Pts);
    const ring3 = new THREE.LineLoop(ring3Geo, ringMaterials[2]);
    ring3.rotation.y = Math.PI / 5;
    mainGroup.add(ring3);
    rings.push(ring3);

    // Satellite beads traveling on rings
    const beadGeometry = new THREE.SphereGeometry(0.06, 12, 12);
    const beadMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const bead1 = new THREE.Mesh(beadGeometry, beadMaterial);
    const bead2 = new THREE.Mesh(beadGeometry, beadMaterial);
    ring1.add(bead1);
    ring2.add(bead2);

    // 3. Floating Particle Constellation
    const particleCount = 420;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.8 + Math.random() * 2.6;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(radius) * 2.2;
      const sinPhi = Math.sin(phi);

      particlePositions[i * 3] = r * sinPhi * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * sinPhi * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
      particleScales[i] = Math.random() * 0.04 + 0.02;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.04,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    mainGroup.add(particleSystem);

    // Subtle ambient soft lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // Interactive mouse tracking with smooth inertia
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

    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth inertia mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Group rotation guided by mouse
      mainGroup.rotation.y = elapsedTime * 0.12 + targetX * 0.55;
      mainGroup.rotation.x = targetY * 0.45;

      // Core rotation
      coreMesh.rotation.x = elapsedTime * 0.25;
      coreMesh.rotation.y = elapsedTime * 0.35;
      vertexPoints.rotation.x = elapsedTime * 0.25;
      vertexPoints.rotation.y = elapsedTime * 0.35;

      // Independent ring rotations for gyroscope effect
      ring1.rotation.z = elapsedTime * 0.35;
      ring2.rotation.y = elapsedTime * 0.25;
      ring3.rotation.x = elapsedTime * 0.3;

      // Move beads along rings
      bead1.position.x = Math.cos(elapsedTime * 1.5) * 2.3;
      bead1.position.y = Math.sin(elapsedTime * 1.5) * 2.3;

      bead2.position.x = Math.cos(elapsedTime * 1.2) * 2.6;
      bead2.position.z = Math.sin(elapsedTime * 1.2) * 2.6;

      // Gentle wave float on particle system
      particleSystem.rotation.y = -elapsedTime * 0.06;
      particleSystem.rotation.z = Math.sin(elapsedTime * 0.2) * 0.08;

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
      coreGeometry.dispose();
      coreMaterial.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      ring3Geo.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
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
          right: '-4%',
          width: '62%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 2,
          opacity: 0.95,
        }}
      />
      <style>{`
        @media (max-width: 900px) {
          .hero-3d-canvas-wrapper {
            opacity: 0.35 !important;
            width: 100% !important;
            right: 0 !important;
          }
        }
      `}</style>
    </>
  );
};
