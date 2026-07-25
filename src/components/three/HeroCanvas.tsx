import { useRef, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { ParticleField } from './ParticleField';
import { VolumetricLights } from './VolumetricLights';
import { VegetableMesh } from './VegetableMesh';
import { VEGETABLES } from '../../utils/data';
import type { Vegetable } from '../../types';

interface SceneCameraProps {
  selected: Vegetable | null;
}

function SceneCamera({ selected }: SceneCameraProps) {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 0, 7));
  const targetLook = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    if (selected) {
      targetPos.current.set(
        selected.position[0] * 0.6,
        selected.position[1] + 0.5,
        4.5
      );
      targetLook.current.set(
        selected.position[0],
        selected.position[1],
        selected.position[2]
      );
    } else {
      targetPos.current.set(0, 0, 7);
      targetLook.current.set(0, 0, 0);
    }

    camera.position.lerp(targetPos.current, 0.04);
    camera.lookAt(targetLook.current);
  });

  return null;
}

interface HeroSceneProps {
  onSelect: (v: Vegetable | null) => void;
  selected: Vegetable | null;
  mouseX: number;
  mouseY: number;
}

function HeroScene({ onSelect, selected, mouseX, mouseY }: HeroSceneProps) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} color="#a78bfa" />
      <pointLight position={[-4, 4, 4]} intensity={1.2} color="#7c3aed" />
      <pointLight position={[4, 2, 3]} intensity={0.8} color="#4ade80" />
      <pointLight position={[0, -3, 2]} intensity={0.4} color="#1e1b4b" />
      <directionalLight position={[0, 5, 5]} intensity={0.6} color="#e0d5ff" castShadow />

      {/* Ambient fill replacing Environment preset */}
      <pointLight position={[0, 8, 0]}  intensity={0.3} color="#1a0040" />
      <pointLight position={[0, -8, 0]} intensity={0.2} color="#000820" />
      <pointLight position={[8, 0, 0]}  intensity={0.2} color="#0a0020" />
      <pointLight position={[-8, 0, 0]} intensity={0.2} color="#0a0020" />

      {/* Background elements */}
      <VolumetricLights />
      <ParticleField count={700} />

      {/* Vegetables */}
      {VEGETABLES.map((veg, i) => (
        <VegetableMesh
          key={veg.id}
          vegetable={veg}
          index={i}
          onSelect={onSelect}
          isSelected={selected?.id === veg.id}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}

      {/* Ground contact shadows */}
      <ContactShadows
        position={[0, -1.8, 0]}
        opacity={0.3}
        scale={10}
        blur={2.5}
        far={3}
        color="#4a0080"
      />

      <SceneCamera selected={selected} />
    </>
  );
}

interface HeroCanvasProps {
  onSelect: (v: Vegetable | null) => void;
  selected: Vegetable | null;
  mouseX: number;
  mouseY: number;
}

export function HeroCanvas({ onSelect, selected, mouseX, mouseY }: HeroCanvasProps) {
  const handleCanvasClick = useCallback((e: React.MouseEvent) => {
    // Deselect if clicking background (not a vegetable)
    const target = e.target as HTMLElement;
    if (target.tagName === 'CANVAS' && selected) {
      // Will be handled by OrbitControls / mesh click propagation
    }
  }, [selected]);

  return (
    <div className="hero-canvas" onClick={handleCanvasClick}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        shadows
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <HeroScene
          onSelect={onSelect}
          selected={selected}
          mouseX={mouseX}
          mouseY={mouseY}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={!selected}
          autoRotate={!selected}
          autoRotateSpeed={0.4}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 3}
          dampingFactor={0.05}
          enableDamping
        />
      </Canvas>
    </div>
  );
}
