import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import TechnicalPart from './TechnicalPart';

const ModelViewer: React.FC = () => {
  return (
    <div className="w-full h-[500px] bg-slate-950/50 rounded-[2.5rem] border border-slate-800 overflow-hidden relative group">
      <div className="absolute top-6 left-6 z-10 pointer-events-none">
        <div className="bg-brand-500/10 backdrop-blur-md border border-brand-500/20 px-4 py-2 rounded-full">
          <span className="text-brand-400 text-xs font-bold uppercase tracking-widest">Interaktivní 3D Náhled</span>
        </div>
      </div>
      
      <div className="absolute bottom-6 right-6 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 px-4 py-2 rounded-full">
          <span className="text-slate-400 text-xs">Uchopte a otáčejte myší</span>
        </div>
      </div>

      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={50} />
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <TechnicalPart />
          </Stage>
          <Environment preset="city" />
          <ContactShadows 
            position={[0, -1, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2} 
            far={4.5} 
          />
        </Suspense>
        <OrbitControls 
          enablePan={false} 
          enableZoom={true} 
          minDistance={3} 
          maxDistance={10}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
