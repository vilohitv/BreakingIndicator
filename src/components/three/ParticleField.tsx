import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ParticleField({ count = 1200 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const smallRef  = useRef<THREE.Points>(null);

  const [pos, col] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r     = 8 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      pos[i*3]   = r * Math.sin(phi) * Math.cos(theta);
      pos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i*3+2] = r * Math.cos(phi);
      const t = Math.random();
      if (t < 0.55) {
        // violet
        col[i*3] = 0.48 + Math.random()*0.2; col[i*3+1] = 0.22 + Math.random()*0.1; col[i*3+2] = 0.95;
      } else if (t < 0.85) {
        // emerald
        col[i*3] = 0.08; col[i*3+1] = 0.72 + Math.random()*0.28; col[i*3+2] = 0.4 + Math.random()*0.2;
      } else {
        // white
        col[i*3] = 0.8; col[i*3+1] = 0.8; col[i*3+2] = 0.9;
      }
    }
    return [pos, col];
  }, [count]);

  // Dense inner sparkle layer
  const [sPos, sCol] = useMemo(() => {
    const n = 400;
    const p = new Float32Array(n * 3);
    const c = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 3 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      p[i*3]   = r * Math.sin(phi) * Math.cos(theta);
      p[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
      p[i*3+2] = r * Math.cos(phi);
      // Mostly white/violet for sparkle
      c[i*3] = 0.7 + Math.random()*0.3;
      c[i*3+1] = 0.6 + Math.random()*0.3;
      c[i*3+2] = 1.0;
    }
    return [p, c];
  }, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.008;
      pointsRef.current.rotation.x = Math.sin(t * 0.006) * 0.06;
    }
    if (smallRef.current) {
      smallRef.current.rotation.y = -t * 0.012;
      smallRef.current.rotation.z = t * 0.005;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pos, 3]} />
          <bufferAttribute attach="attributes-color"    args={[col, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.03} vertexColors transparent opacity={0.65} sizeAttenuation depthWrite={false} />
      </points>
      <points ref={smallRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[sPos, 3]} />
          <bufferAttribute attach="attributes-color"    args={[sCol, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.018} vertexColors transparent opacity={0.45} sizeAttenuation depthWrite={false} />
      </points>
    </group>
  );
}
