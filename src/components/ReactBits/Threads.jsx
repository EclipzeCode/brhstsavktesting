import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import './Threads.css';

const Threads = ({
  color = "#8400ff",
  amplitude = 0.8,
  distance = 0.6,
  className = ""
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create thread geometry
    const threadGeometry = new THREE.BufferGeometry();
    const threadCount = 20;
    const points = [];

    for (let i = 0; i < threadCount; i++) {
      for (let j = 0; j < 100; j++) {
        const x = (j / 100) * 10 - 5;
        const y = Math.sin(j * 0.1 + i * 0.5) * amplitude;
        const z = (i - threadCount / 2) * distance;
        points.push(x, y, z);
      }
    }

    threadGeometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));

    const threadMaterial = new THREE.LineBasicMaterial({ 
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.6
    });

    const threads = new THREE.LineSegments(threadGeometry, threadMaterial);
    scene.add(threads);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      
      threads.rotation.y += 0.005;
      threads.rotation.x += 0.002;
      
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      threadGeometry.dispose();
      threadMaterial.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [color, amplitude, distance]);

  return <div ref={containerRef} className={`threads-container ${className}`} />;
};

export default Threads;
