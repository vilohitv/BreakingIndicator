import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function VolumetricLights() {
  const orb1Ref = useRef<THREE.Mesh>(null);
  const orb2Ref = useRef<THREE.Mesh>(null);
  const orb3Ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (orb1Ref.current) {
      orb1Ref.current.position.y = Math.sin(t * 0.4) * 1.5;
      orb1Ref.current.position.x = Math.cos(t * 0.3) * 2;
      (orb1Ref.current.material as THREE.MeshBasicMaterial).opacity =
        0.06 + Math.sin(t * 0.7) * 0.02;
    }
    if (orb2Ref.current) {
      orb2Ref.current.position.y = Math.cos(t * 0.35) * 1.2;
      orb2Ref.current.position.x = Math.sin(t * 0.25) * 2.5;
      (orb2Ref.current.material as THREE.MeshBasicMaterial).opacity =
        0.04 + Math.sin(t * 0.5) * 0.015;
    }
    if (orb3Ref.current) {
      orb3Ref.current.position.y = Math.sin(t * 0.3 + 2) * 1;
      (orb3Ref.current.material as THREE.MeshBasicMaterial).opacity =
        0.03 + Math.cos(t * 0.6) * 0.01;
    }
  });

  return (
    <group>
      {/* Main violet orb */}
      <mesh ref={orb1Ref} position={[-2, 0, -3]}>
        <sphereGeometry args={[3.5, 16, 16]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.06} depthWrite={false} />
      </mesh>

      {/* Secondary green orb */}
      <mesh ref={orb2Ref} position={[3, 0, -4]}>
        <sphereGeometry args={[2.5, 16, 16]} />
        <meshBasicMaterial color="#4ade80" transparent opacity={0.04} depthWrite={false} />
      </mesh>

      {/* Deepest background orb */}
      <mesh ref={orb3Ref} position={[0, 1, -8]}>
        <sphereGeometry args={[5, 16, 16]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.03} depthWrite={false} />
      </mesh>
    </group>
  );
}
