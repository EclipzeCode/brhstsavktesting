/* eslint-disable react/no-unknown-property */
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import "./Beams.css";

const BeamPlane = ({ position, color, opacity = 0.3 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(color) },
        opacity: { value: opacity },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color;
        uniform float opacity;
        varying vec2 vUv;
        
        void main() {
          float wave = sin(vUv.y * 10.0 + time * 2.0) * 0.1;
          float alpha = opacity * (0.5 + 0.5 * sin(time + vUv.y * 5.0));
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
  }, [color, opacity]);

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[0.5, 8]} />
      <primitive object={shaderMaterial} />
    </mesh>
  );
};

const Beams = ({
  beamWidth = 2,
  beamHeight = 15,
  beamNumber = 12,
  lightColor = "#ffffff",
  speed = 2,
  noiseIntensity = 1.75,
  scale = 0.2,
  rotation = 0,
}) => {
  const beams = useMemo(() => {
    const beamArray = [];
    for (let i = 0; i < beamNumber; i++) {
      const x = (i - beamNumber / 2) * beamWidth;
      beamArray.push({
        position: [x, 0, 0],
        key: i,
      });
    }
    return beamArray;
  }, [beamNumber, beamWidth]);

  return (
    <Canvas
      className="beams-container"
      camera={{ position: [0, 0, 10], fov: 50 }}
    >
      <group rotation={[0, 0, (rotation * Math.PI) / 180]}>
        {beams.map((beam) => (
          <BeamPlane
            key={beam.key}
            position={beam.position}
            color={lightColor}
            opacity={0.4}
          />
        ))}
      </group>
      <ambientLight intensity={0.5} />
      <color attach="background" args={["#000000"]} />
    </Canvas>
  );
};

export default Beams;
