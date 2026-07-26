import { useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import { VegetableMesh } from './VegetableMesh';
import { VEGETABLES } from '../../utils/data';
import type { Vegetable } from '../../types';

function HeroScene({ onSelect, selected }: { onSelect: (v: Vegetable | null) => void; selected: Vegetable | null }) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} color="#a78bfa" />
      <pointLight position={[-4, 4, 4]} intensity={1.2} color="#7c3aed" />
      <pointLight position={[4, 2, 3]} intensity={0.8} color="#4ade80" />
      <pointLight position={[0, -3, 2]} intensity={0.4} color="#1e1b4b" />
      <directionalLight position={[0, 5, 5]} intensity={0.6} color="#e0d5ff" castShadow />
      <pointLight position={[0, 8, 0]}  intensity={0.3} color="#1a0040" />
      <pointLight position={[0, -8, 0]} intensity={0.2} color="#000820" />
      <pointLight position={[8, 0, 0]}  intensity={0.2} color="#0a0020" />
      <pointLight position={[-8, 0, 0]} intensity={0.2} color="#0a0020" />

      {/* Vegetables */}
      {VEGETABLES.map((veg, i) => (
        <VegetableMesh
          key={veg.id}
          vegetable={veg}
          index={i}
          onSelect={onSelect}
          isSelected={selected?.id === veg.id}
        />
      ))}

      <ContactShadows
        position={[0, -1.8, 0]}
        opacity={0.3}
        scale={10}
        blur={2.5}
        far={3}
        color="#4a0080"
      />
    </>
  );
}

interface HeroCanvasProps {
  onSelect: (v: Vegetable | null) => void;
  selected: Vegetable | null;
  mouseX: number;
  mouseY: number;
}

export function HeroCanvas({ onSelect, selected }: HeroCanvasProps) {
  const handleCanvasClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'CANVAS' && selected) {
      // handled by mesh click propagation
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
        <HeroScene onSelect={onSelect} selected={selected} />
      </Canvas>
    </div>
  );
}
