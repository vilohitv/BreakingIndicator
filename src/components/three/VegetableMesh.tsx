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
  mouseX: number;
  mouseY?: number;
}

export function VegetableMesh({ vegetable, index, onSelect, isSelected, mouseX }: Props) {
  const groupRef     = useRef<THREE.Group>(null);
  const glowRef      = useRef<THREE.Mesh>(null);
  const ringRef      = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const targetScale  = isSelected ? 1.3 : hovered ? 1.15 : 1.0;
  const currentScale = useRef(1.0);
  const floatOffset  = index * 2.1;
  const active       = hovered || isSelected;

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.elapsedTime;

    currentScale.current = THREE.MathUtils.lerp(currentScale.current, targetScale, 0.07);
    groupRef.current.scale.setScalar(currentScale.current);

    groupRef.current.position.y = vegetable.position[1] + Math.sin(t * 0.55 + floatOffset) * 0.22;
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      vegetable.position[0] + mouseX * 0.18,
      0.04
    );

    if (glowRef.current) {
      const mat = glowRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = active
        ? 0.28 + Math.sin(t * 2.2) * 0.08
        : 0.06 + Math.sin(t * 1.1) * 0.02;
      glowRef.current.scale.setScalar(active ? 1.5 + Math.sin(t * 2.2) * 0.06 : 1.25);
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += 0.006;
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.4) * 0.2;
      const rmat = ringRef.current.material as THREE.MeshBasicMaterial;
      rmat.opacity = active ? 0.6 : 0.0;
    }
  });

  const handleClick       = useCallback((e: ThreeEvent<MouseEvent>)   => { e.stopPropagation(); onSelect(isSelected ? null : vegetable); }, [isSelected, vegetable, onSelect]);
  const handlePointerOver = useCallback((e: ThreeEvent<PointerEvent>) => { e.stopPropagation(); setHovered(true);  document.body.style.cursor = 'pointer'; }, []);
  const handlePointerOut  = useCallback(()                            => { setHovered(false); document.body.style.cursor = 'auto'; }, []);

  return (
    <group ref={groupRef} position={vegetable.position}
      onClick={handleClick} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>

      {/* Aura glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.15, 16, 16]} />
        <meshBasicMaterial color={vegetable.glowColor} transparent opacity={0.06} depthWrite={false} side={THREE.BackSide} />
      </mesh>

      {/* Orbit ring */}
      <mesh ref={ringRef} rotation={[Math.PI/2, 0, 0]}>
        <torusGeometry args={[1.6, 0.012, 8, 64]} />
        <meshBasicMaterial color={vegetable.glowColor} transparent opacity={0} depthWrite={false} />
      </mesh>

      {/* Plain sphere */}
      <Sphere args={[0.9, 64, 64]}>
        <meshStandardMaterial
          color={vegetable.glowColor}
          roughness={0.2}
          metalness={0.15}
          emissive={vegetable.glowColor}
          emissiveIntensity={active ? 0.35 : 0.08}
        />
      </Sphere>

      {/* Shadow */}
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI/2, 0, 0]}>
        <circleGeometry args={[0.9, 32]} />
        <meshBasicMaterial color="#000" transparent opacity={0.2} depthWrite={false} />
      </mesh>
    </group>
  );
}
