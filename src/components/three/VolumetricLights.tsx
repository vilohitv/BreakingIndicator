import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function GlowOrb({ color, basePos, speed, size, baseOpacity }: {
  color: string; basePos: [number,number,number];
  speed: number; size: number; baseOpacity: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime * speed;
    if (!ref.current) return;
    ref.current.position.set(
      basePos[0] + Math.sin(t * 0.7) * 1.2,
      basePos[1] + Math.sin(t * 0.5) * 1.0,
      basePos[2] + Math.cos(t * 0.4) * 0.5,
    );
    const mat = ref.current.material as THREE.MeshBasicMaterial;
    mat.opacity = baseOpacity + Math.sin(t * 1.3) * baseOpacity * 0.3;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={baseOpacity} depthWrite={false} />
    </mesh>
  );
}

export function VolumetricLights() {
  return (
    <group>
      <GlowOrb color="#7c3aed" basePos={[-3, 1, -4]} speed={0.4}  size={4}   baseOpacity={0.07} />
      <GlowOrb color="#34d399" basePos={[ 3, -1,-5]} speed={0.35} size={3.5} baseOpacity={0.045}/>
      <GlowOrb color="#a78bfa" basePos={[ 0, 2, -7]} speed={0.28} size={6}   baseOpacity={0.035}/>
      <GlowOrb color="#ec4899" basePos={[-2,-2, -3]} speed={0.5}  size={2}   baseOpacity={0.03} />
    </group>
  );
}
