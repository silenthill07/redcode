import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 1500 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0003;
      pointsRef.current.rotation.x += 0.0001;
      
      // Reactive to mouse
      const targetRotationX = state.mouse.y * 0.1;
      const targetRotationY = state.mouse.x * 0.1;
      pointsRef.current.rotation.x += (targetRotationX - pointsRef.current.rotation.x) * 0.05;
      pointsRef.current.rotation.y += (targetRotationY - pointsRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <Points positions={points} ref={pointsRef}>
      <PointMaterial
        transparent
        color="#ff0000"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
}

function SystemLines() {
  const lines = useMemo(() => {
    const l = [];
    for (let i = 0; i < 20; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      l.push({ start, end });
    }
    return l;
  }, []);

  return (
    <group>
      {lines.map((line, i) => (
        <Line
          key={i}
          points={[line.start, line.end]}
          color="#ff0000"
          lineWidth={1}
          transparent
          opacity={0.15}
        />
      ))}
    </group>
  );
}

function Grid() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = -Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
      
      // Subtle tilt based on mouse
      meshRef.current.rotation.y = state.mouse.x * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100, 60, 60]} />
      <meshBasicMaterial color="#440000" wireframe transparent opacity={0.1} />
    </mesh>
  );
}

function InteractiveSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      
      // Follow mouse subtly
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, state.mouse.x * 2 + 2, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, state.mouse.y * 1, 0.05);
    }
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.2, 64, 64]} position={[2, 0, 0]}>
        <MeshDistortMaterial
          color="#aa0000"
          distort={0.5}
          speed={3}
          roughness={0.1}
          metalness={0.9}
          emissive="#ff0000"
          emissiveIntensity={0.6}
          transparent
          opacity={0.9}
        />
      </Sphere>
    </Float>
  );
}

function Scene() {
  const { camera } = useThree();
  
  useFrame((state) => {
    // Camera movement reactive to mouse
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, state.mouse.x * 0.5, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, state.mouse.y * 0.5, 0.03);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} color="#ff0000" intensity={2} />
      <pointLight position={[-10, -10, -10]} color="#440000" intensity={1} />
      <spotLight position={[0, 10, 0]} color="#ff0000" intensity={1} angle={0.5} />
      
      <Particles count={2000} />
      <SystemLines />
      <Grid />
      <InteractiveSphere />
    </>
  );
}

export default function InteractiveBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505]">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/40 to-[#050505] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none opacity-60" />
    </div>
  );
}
