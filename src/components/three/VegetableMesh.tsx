import { useRef, useState, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import type { ThreeEvent } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import type { Vegetable } from '../../types';

interface Props {
  vegetable: Vegetable;
  index: number;
  onSelect: (v: Vegetable | null) => void;
  isSelected: boolean;
}

export function VegetableMesh({ vegetable, index, onSelect, isSelected }: Props) {
  const groupRef    = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const floatOffset = index * 2.1;

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.elapsedTime;
    groupRef.current.position.y = vegetable.position[1] + Math.sin(t * 0.55 + floatOffset) * 0.22;
    groupRef.current.position.x = vegetable.position[0];
    groupRef.current.position.z = vegetable.position[2];
  });

  const handleClick       = useCallback((e: ThreeEvent<MouseEvent>)   => { e.stopPropagation(); onSelect(isSelected ? null : vegetable); }, [isSelected, vegetable, onSelect]);
  const handlePointerOver = useCallback((e: ThreeEvent<PointerEvent>) => { e.stopPropagation(); setHovered(true);  document.body.style.cursor = 'pointer'; }, []);
  const handlePointerOut  = useCallback(()                            => { setHovered(false); document.body.style.cursor = 'auto'; }, []);

  const active = hovered || isSelected;

  return (
    <group ref={groupRef} position={vegetable.position}
      onClick={handleClick} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>

      <Sphere args={[0.9, 64, 64]}>
        <meshStandardMaterial
          color={vegetable.glowColor}
          roughness={0.2}
          metalness={0.15}
          emissive={vegetable.glowColor}
          emissiveIntensity={active ? 0.35 : 0.08}
        />
      </Sphere>

      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI/2, 0, 0]}>
        <circleGeometry args={[0.9, 32]} />
        <meshBasicMaterial color="#000" transparent opacity={0.2} depthWrite={false} />
      </mesh>
    </group>
  );
}
