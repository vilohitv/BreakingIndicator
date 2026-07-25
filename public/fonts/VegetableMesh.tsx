import React, { useRef, useState, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import type { ThreeEvent } from '@react-three/fiber';
import { Text, Sphere, Torus, Cylinder } from '@react-three/drei';
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
  const groupRef  = useRef<THREE.Group>(null);
  const innerRef  = useRef<THREE.Group>(null);
  const glowRef   = useRef<THREE.Mesh>(null);
  const ringRef   = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const targetScale   = isSelected ? 1.3 : hovered ? 1.15 : 1.0;
  const currentScale  = useRef(1.0);
  const floatOffset   = index * 2.1;
  const active        = hovered || isSelected;

  useFrame(({ clock }) => {
    if (!groupRef.current || !innerRef.current) return;
    const t = clock.elapsedTime;

    // Scale lerp
    currentScale.current = THREE.MathUtils.lerp(currentScale.current, targetScale, 0.07);
    groupRef.current.scale.setScalar(currentScale.current);

    // Float
    groupRef.current.position.y = vegetable.position[1] + Math.sin(t * 0.55 + floatOffset) * 0.22;

    // Mouse parallax
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      vegetable.position[0] + mouseX * 0.18,
      0.04
    );

    // Gentle auto-rotate
    innerRef.current.rotation.y += 0.003;
    innerRef.current.rotation.x = Math.sin(t * 0.28 + floatOffset) * 0.07;

    // Glow aura
    if (glowRef.current) {
      const mat = glowRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = active
        ? 0.28 + Math.sin(t * 2.2) * 0.08
        : 0.06 + Math.sin(t * 1.1) * 0.02;
      glowRef.current.scale.setScalar(active ? 1.5 + Math.sin(t * 2.2) * 0.06 : 1.25);
    }

    // Orbit ring
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.006;
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.4) * 0.2;
      const rmat = ringRef.current.material as THREE.MeshBasicMaterial;
      rmat.opacity = active ? 0.6 : 0.0;
    }
  });

  const handleClick        = useCallback((e: ThreeEvent<MouseEvent>)   => { e.stopPropagation(); onSelect(isSelected ? null : vegetable); }, [isSelected, vegetable, onSelect]);
  const handlePointerOver  = useCallback((e: ThreeEvent<PointerEvent>) => { e.stopPropagation(); setHovered(true);  document.body.style.cursor = 'pointer'; }, []);
  const handlePointerOut   = useCallback(()                            => { setHovered(false); document.body.style.cursor = 'auto'; }, []);

  // ── Cabbage ─────────────────────────────────────────────────────────────
  const Cabbage = () => (
    <group>
      {[1.0, 0.78, 0.58, 0.38].map((s, i) => (
        <Sphere key={i} args={[s, 32, 32]} scale={[1, 0.68, 1]}>
          <meshStandardMaterial
            color={i === 0 ? '#6b1f5e' : i === 1 ? '#7e2470' : i === 2 ? '#9b3085' : '#c04aaa'}
            roughness={0.25} metalness={0.08}
            emissive={vegetable.glowColor}
            emissiveIntensity={active ? 0.3 : 0.06}
            transparent opacity={1 - i * 0.08}
          />
        </Sphere>
      ))}
      {/* Leaf veins */}
      {[0,1,2,3,4].map(i => {
        const angle = (i / 5) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle)*0.6, 0.1, Math.sin(angle)*0.6]} rotation={[0, -angle, 0.3]}>
            <boxGeometry args={[0.55, 0.03, 0.06]} />
            <meshStandardMaterial color="#3d0a35" roughness={0.5} transparent opacity={0.5} />
          </mesh>
        );
      })}
    </group>
  );

  // ── Red Onion ────────────────────────────────────────────────────────────
  const Onion = () => (
    <group>
      <Sphere args={[0.88, 32, 32]} scale={[1, 1.22, 1]}>
        <meshStandardMaterial color="#5c1a3a" roughness={0.28} metalness={0.12}
          emissive={vegetable.glowColor} emissiveIntensity={active ? 0.25 : 0.05} />
      </Sphere>
      {/* Skin layers */}
      {[0.89, 0.72, 0.55].map((r, i) => (
        <Torus key={i} args={[r*0.65, 0.035, 8, 40]} rotation={[Math.PI/2, 0, 0]} position={[0, (i-1)*0.2, 0]}>
          <meshStandardMaterial color="#8b2558" roughness={0.4} transparent opacity={0.55 - i*0.12} />
        </Torus>
      ))}
      {/* Outer papery skin — slightly translucent */}
      <Sphere args={[0.91, 20, 20]} scale={[1, 1.22, 1]}>
        <meshStandardMaterial color="#4a1030" roughness={0.6} transparent opacity={0.35} side={THREE.FrontSide} />
      </Sphere>
      {/* Root stub */}
      <Cylinder args={[0.05, 0.07, 0.3, 8]} position={[0, -1.12, 0]}>
        <meshStandardMaterial color="#2d0c1c" roughness={0.8} />
      </Cylinder>
      {/* Neck */}
      <Cylinder args={[0.06, 0.04, 0.45, 8]} position={[0, 1.12, 0]}>
        <meshStandardMaterial color="#4a7c3a" roughness={0.6} />
      </Cylinder>
    </group>
  );

  // ── Beetroot ─────────────────────────────────────────────────────────────
  const Beet = () => (
    <group>
      <Sphere args={[0.92, 32, 32]} scale={[1, 1.12, 1]}>
        <meshStandardMaterial color="#4a0518" roughness={0.22} metalness={0.14}
          emissive={vegetable.glowColor} emissiveIntensity={active ? 0.28 : 0.06} />
      </Sphere>
      {/* Surface rings */}
      {[-0.15, 0.08, 0.3].map((y, i) => (
        <Torus key={i} args={[0.6 - i*0.1, 0.02, 8, 32]} rotation={[Math.PI/2, 0, 0]} position={[0, y, 0]}>
          <meshStandardMaterial color="#2a0010" roughness={0.7} transparent opacity={0.45} />
        </Torus>
      ))}
      {/* Taproot */}
      <Cylinder args={[0.06, 0.015, 0.75, 8]} position={[0, -1.15, 0]}>
        <meshStandardMaterial color="#6a1830" roughness={0.7} />
      </Cylinder>
      {/* Leaf stems */}
      {([-0.18, 0, 0.18] as number[]).map((x, i) => (
        <group key={i}>
          <Cylinder args={[0.03, 0.025, 0.55, 6]} position={[x, 1.08, 0]} rotation={[0, 0, (i-1)*0.28]}>
            <meshStandardMaterial color="#2d6a28" roughness={0.6} />
          </Cylinder>
          {/* Tiny leaf blade */}
          <mesh position={[x + (i-1)*0.12, 1.42, 0]} rotation={[0.3, 0, (i-1)*0.5]}>
            <boxGeometry args={[0.22, 0.12, 0.02]} />
            <meshStandardMaterial color="#3a8032" roughness={0.5} transparent opacity={0.85} />
          </mesh>
        </group>
      ))}
    </group>
  );

const shapes: Record<string, React.ReactElement> = {
    'red-cabbage': <Cabbage />,
    'red-onion':   <Onion  />,
    'beetroot':    <Beet   />,
  };

  return (
    <group ref={groupRef} position={vegetable.position}
      onClick={handleClick} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>

      {/* Aura glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.15, 16, 16]} />
        <meshBasicMaterial color={vegetable.glowColor} transparent opacity={0.06} depthWrite={false} side={THREE.BackSide} />
      </mesh>

      {/* Orbit ring (visible on hover/select) */}
      <mesh ref={ringRef} rotation={[Math.PI/2, 0, 0]}>
        <torusGeometry args={[1.6, 0.012, 8, 64]} />
        <meshBasicMaterial color={vegetable.glowColor} transparent opacity={0} depthWrite={false} />
      </mesh>

      {/* Geometry */}
      <group ref={innerRef}>{shapes[vegetable.id]}</group>

      {/* Shadow */}
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI/2, 0, 0]}>
        <circleGeometry args={[0.9, 32]} />
        <meshBasicMaterial color="#000" transparent opacity={0.2} depthWrite={false} />
      </mesh>

      {/* Hover label */}
      {active && (
        <>
          <Text position={[0, 1.75, 0]} fontSize={0.16} color="#ffffff"
            anchorX="center" anchorY="middle" font="/fonts/inter.woff2">
            {vegetable.name}
          </Text>
          <Text position={[0, 1.52, 0]} fontSize={0.1} color={vegetable.glowColor}
            anchorX="center" anchorY="middle" font="/fonts/jetbrains-mono.woff2">
            {vegetable.scientificName}
          </Text>
        </>
      )}
    </group>
  );
}
