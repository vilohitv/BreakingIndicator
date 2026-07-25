import { useRef, useState, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import type { ThreeEvent } from '@react-three/fiber';
import { Text, Sphere, Torus, Cylinder } from '@react-three/drei';
import * as THREE from 'three';
import type { Vegetable } from '../../types';

interface VegetableMeshProps {
  vegetable: Vegetable;
  index: number;
  onSelect: (v: Vegetable | null) => void;
  isSelected: boolean;
  mouseX: number;
  mouseY?: number;
}

export function VegetableMesh({
  vegetable,
  index,
  onSelect,
  isSelected,
  mouseX,
}: VegetableMeshProps) {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Target scale based on state
  const targetScale = isSelected ? 1.25 : hovered ? 1.12 : 1.0;
  const currentScale = useRef(1.0);
  const floatOffset = index * 2.1;

  useFrame(({ clock }) => {
    if (!groupRef.current || !innerRef.current) return;
    const t = clock.elapsedTime;

    // Smooth scale lerp
    currentScale.current = THREE.MathUtils.lerp(currentScale.current, targetScale, 0.08);
    groupRef.current.scale.setScalar(currentScale.current);

    // Floating animation
    const floatY = Math.sin(t * 0.6 + floatOffset) * 0.18;
    groupRef.current.position.y = vegetable.position[1] + floatY;

    // Gentle rotation
    innerRef.current.rotation.y += 0.004;
    innerRef.current.rotation.x = Math.sin(t * 0.3 + floatOffset) * 0.08;

    // Mouse parallax (subtle)
    groupRef.current.position.x = vegetable.position[0] + mouseX * 0.15;

    // Glow pulse
    if (glowRef.current) {
      const glowMat = glowRef.current.material as THREE.MeshBasicMaterial;
      glowMat.opacity = hovered || isSelected
        ? 0.25 + Math.sin(t * 2) * 0.08
        : 0.05 + Math.sin(t * 1.2) * 0.02;
      const glowScale = hovered || isSelected
        ? 1.4 + Math.sin(t * 2) * 0.05
        : 1.2;
      glowRef.current.scale.setScalar(glowScale);
    }
  });

  const handleClick = useCallback((e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSelect(isSelected ? null : vegetable);
  }, [isSelected, vegetable, onSelect]);

  const handlePointerOver = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(true);
    document.body.style.cursor = 'pointer';
  }, []);

  const handlePointerOut = useCallback(() => {
    setHovered(false);
    document.body.style.cursor = 'auto';
  }, []);

  // Different geometric shapes for each vegetable
  const VegetableShape = () => {
    if (vegetable.id === 'red-cabbage') {
      return (
        <group>
          {/* Cabbage layers */}
          {[1.0, 0.82, 0.64].map((s, i) => (
            <Sphere key={i} args={[s, 24, 24]} scale={[1, 0.72, 1]}>
              <meshStandardMaterial
                color={vegetable.color}
                roughness={0.3}
                metalness={0.05}
                emissive={vegetable.glowColor}
                emissiveIntensity={hovered || isSelected ? 0.25 : 0.08}
                transparent
                opacity={0.9 - i * 0.12}
              />
            </Sphere>
          ))}
          {/* Core highlight */}
          <Sphere args={[0.45, 16, 16]} position={[0, 0.15, 0]}>
            <meshStandardMaterial
              color="#d06090"
              roughness={0.2}
              metalness={0.1}
              emissive="#c044aa"
              emissiveIntensity={0.15}
            />
          </Sphere>
        </group>
      );
    }

    if (vegetable.id === 'red-onion') {
      return (
        <group>
          {/* Onion body */}
          <Sphere args={[0.85, 24, 24]} scale={[1, 1.2, 1]}>
            <meshStandardMaterial
              color={vegetable.color}
              roughness={0.35}
              metalness={0.08}
              emissive={vegetable.glowColor}
              emissiveIntensity={hovered || isSelected ? 0.2 : 0.06}
            />
          </Sphere>
          {/* Onion layers - rings */}
          {[0.86, 0.68, 0.52].map((r, i) => (
            <Torus key={i} args={[r * 0.7, 0.04, 8, 32]} rotation={[Math.PI / 2, 0, 0]} position={[0, (i - 1) * 0.22, 0]}>
              <meshStandardMaterial
                color="#9b4070"
                roughness={0.4}
                transparent
                opacity={0.6 - i * 0.1}
              />
            </Torus>
          ))}
          {/* Top stub */}
          <Cylinder args={[0.06, 0.08, 0.35, 8]} position={[0, 1.1, 0]}>
            <meshStandardMaterial color="#4a7a3a" roughness={0.5} />
          </Cylinder>
        </group>
      );
    }

    // Beetroot
    return (
      <group>
        {/* Main bulb */}
        <Sphere args={[0.9, 24, 24]} scale={[1, 1.15, 1]}>
          <meshStandardMaterial
            color={vegetable.color}
            roughness={0.28}
            metalness={0.12}
            emissive={vegetable.glowColor}
            emissiveIntensity={hovered || isSelected ? 0.22 : 0.07}
          />
        </Sphere>
        {/* Surface texture rings */}
        {[0, 1, 2].map((i) => (
          <Torus key={i} args={[0.55 - i * 0.12, 0.025, 6, 24]} rotation={[Math.PI / 2, 0, 0]} position={[0, -0.1 + i * 0.22, 0]}>
            <meshStandardMaterial
              color="#3d0518"
              roughness={0.6}
              transparent
              opacity={0.5}
            />
          </Torus>
        ))}
        {/* Taproot */}
        <Cylinder args={[0.05, 0.02, 0.6, 6]} position={[0, -1.05, 0]}>
          <meshStandardMaterial color="#7a2040" roughness={0.7} />
        </Cylinder>
        {/* Leaf stems */}
        {[-0.15, 0, 0.15].map((x, i) => (
          <Cylinder key={i} args={[0.03, 0.025, 0.5, 6]} position={[x, 1.0, 0]} rotation={[0, 0, (i - 1) * 0.3]}>
            <meshStandardMaterial color="#2d6a2a" roughness={0.6} />
          </Cylinder>
        ))}
      </group>
    );
  };

  return (
    <group
      ref={groupRef}
      position={vegetable.position}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      {/* Glow sphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.1, 16, 16]} />
        <meshBasicMaterial
          color={vegetable.glowColor}
          transparent
          opacity={0.05}
          depthWrite={false}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Main vegetable geometry */}
      <group ref={innerRef}>
        <VegetableShape />
      </group>

      {/* Shadow (darkened plane below) */}
      <mesh position={[0, -1.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.8, 32]} />
        <meshBasicMaterial
          color="#000000"
          transparent
          opacity={0.25}
          depthWrite={false}
        />
      </mesh>

      {/* Hover label */}
      {(hovered || isSelected) && (
        <Text
          position={[0, 1.6, 0]}
          fontSize={0.18}
          color="#f5f5f5"
          font="https://fonts.gstatic.com/s/dmsans/v15/rP2Hp2ywxg089UriCZOIHQ.woff"
          anchorX="center"
          anchorY="middle"
        >
          {vegetable.name}
        </Text>
      )}
      {(hovered || isSelected) && (
        <Text
          position={[0, 1.35, 0]}
          fontSize={0.11}
          color={vegetable.glowColor}
          anchorX="center"
          anchorY="middle"
        >
          {vegetable.scientificName}
        </Text>
      )}
    </group>
  );
}
