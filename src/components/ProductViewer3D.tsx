import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, Html } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, ZoomIn, ZoomOut, Info, X, Maximize2, Move3D } from 'lucide-react';
import * as THREE from 'three';

// Hotspot data for annotations
interface Hotspot {
  id: string;
  position: [number, number, number];
  title: string;
  description: string;
}

// C-Arm 3D Model Component (Stylized geometric representation)
const CArm3DModel = ({ hotspots, onHotspotClick, activeHotspot }: { 
  hotspots: Hotspot[]; 
  onHotspotClick: (id: string) => void;
  activeHotspot: string | null;
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current && !hovered) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Base/Stand */}
      <mesh position={[0, -1.5, 0]} castShadow>
        <cylinderGeometry args={[0.8, 1, 0.3, 32]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Main Column */}
      <mesh position={[0, -0.5, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 2, 16]} />
        <meshStandardMaterial color="#2d3748" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Horizontal Arm */}
      <mesh position={[0.8, 0.5, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 1.8, 16]} />
        <meshStandardMaterial color="#2d3748" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* C-Arc */}
      <mesh position={[1.5, 0.5, 0]} castShadow>
        <torusGeometry args={[1.2, 0.08, 16, 50, Math.PI]} />
        <meshStandardMaterial color="#0077b6" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* X-Ray Source (Top) */}
      <mesh position={[1.5, 1.7, 0]} castShadow>
        <boxGeometry args={[0.4, 0.5, 0.3]} />
        <meshStandardMaterial color="#003366" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Collimator */}
      <mesh position={[1.5, 1.4, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.1, 0.15, 16]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Image Intensifier/Detector (Bottom) */}
      <mesh position={[1.5, -0.7, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.35, 0.2, 32]} />
        <meshStandardMaterial color="#003366" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Detector Screen */}
      <mesh position={[1.5, -0.55, 0]} castShadow>
        <cylinderGeometry args={[0.32, 0.32, 0.05, 32]} />
        <meshStandardMaterial color="#00b4d8" metalness={0.3} roughness={0.1} emissive="#00b4d8" emissiveIntensity={0.2} />
      </mesh>

      {/* Control Panel */}
      <mesh position={[-0.4, 0, 0.3]} rotation={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[0.4, 0.5, 0.1]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Screen on Control Panel */}
      <mesh position={[-0.38, 0.05, 0.36]} rotation={[0, 0.3, 0]}>
        <planeGeometry args={[0.3, 0.25]} />
        <meshStandardMaterial color="#0077b6" emissive="#0077b6" emissiveIntensity={0.5} />
      </mesh>

      {/* Wheels */}
      {[[-0.5, -1.65, 0.5], [0.5, -1.65, 0.5], [-0.5, -1.65, -0.5], [0.5, -1.65, -0.5]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.12, 0.12, 0.08, 16]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}

      {/* Hotspots */}
      {hotspots.map((hotspot) => (
        <Html key={hotspot.id} position={hotspot.position}>
          <button
            onClick={() => onHotspotClick(hotspot.id)}
            className={`w-6 h-6 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              activeHotspot === hotspot.id
                ? 'bg-cyan-500 scale-125'
                : 'bg-white/90 hover:bg-cyan-400'
            }`}
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <span className={`text-xs font-bold ${activeHotspot === hotspot.id ? 'text-white' : 'text-[#003366]'}`}>
              +
            </span>
          </button>
          {activeHotspot === hotspot.id && (
            <div className="absolute left-8 top-0 bg-white rounded-lg shadow-xl p-3 w-48 z-10">
              <h4 className="font-bold text-gray-900 text-sm">{hotspot.title}</h4>
              <p className="text-xs text-gray-600 mt-1">{hotspot.description}</p>
            </div>
          )}
        </Html>
      ))}
    </group>
  );
};

// X-Ray System 3D Model
const XRaySystem3D = ({ hotspots, onHotspotClick, activeHotspot }: { 
  hotspots: Hotspot[]; 
  onHotspotClick: (id: string) => void;
  activeHotspot: string | null;
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Floor Rail */}
      <mesh position={[0, -1, 0]} receiveShadow>
        <boxGeometry args={[3, 0.1, 0.5]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Ceiling Rail */}
      <mesh position={[0, 2.5, 0]}>
        <boxGeometry args={[3, 0.1, 0.3]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Vertical Column */}
      <mesh position={[0, 0.75, 0]} castShadow>
        <boxGeometry args={[0.2, 3.5, 0.2]} />
        <meshStandardMaterial color="#2d3748" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Tube Head Housing */}
      <mesh position={[0, 1.5, 0.5]} castShadow>
        <boxGeometry args={[0.5, 0.4, 0.6]} />
        <meshStandardMaterial color="#003366" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Collimator */}
      <mesh position={[0, 1.2, 0.5]} castShadow>
        <boxGeometry args={[0.25, 0.2, 0.25]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Patient Table */}
      <mesh position={[0, -0.5, 1.5]} castShadow>
        <boxGeometry args={[1.8, 0.15, 2.5]} />
        <meshStandardMaterial color="#4a5568" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Table Base */}
      <mesh position={[0, -0.9, 1.5]} castShadow>
        <boxGeometry args={[0.8, 0.6, 1]} />
        <meshStandardMaterial color="#2d3748" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Wall Bucky */}
      <mesh position={[-1.2, 0.5, 0]} castShadow>
        <boxGeometry args={[0.1, 1.5, 1.2]} />
        <meshStandardMaterial color="#003366" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Detector Panel */}
      <mesh position={[-1.14, 0.5, 0]}>
        <boxGeometry args={[0.02, 1.3, 1]} />
        <meshStandardMaterial color="#00b4d8" emissive="#00b4d8" emissiveIntensity={0.3} />
      </mesh>

      {/* Hotspots */}
      {hotspots.map((hotspot) => (
        <Html key={hotspot.id} position={hotspot.position}>
          <button
            onClick={() => onHotspotClick(hotspot.id)}
            className={`w-6 h-6 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              activeHotspot === hotspot.id
                ? 'bg-cyan-500 scale-125'
                : 'bg-white/90 hover:bg-cyan-400'
            }`}
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <span className={`text-xs font-bold ${activeHotspot === hotspot.id ? 'text-white' : 'text-[#003366]'}`}>
              +
            </span>
          </button>
          {activeHotspot === hotspot.id && (
            <div className="absolute left-8 top-0 bg-white rounded-lg shadow-xl p-3 w-48 z-10">
              <h4 className="font-bold text-gray-900 text-sm">{hotspot.title}</h4>
              <p className="text-xs text-gray-600 mt-1">{hotspot.description}</p>
            </div>
          )}
        </Html>
      ))}
    </group>
  );
};

// Loading component
const Loader = () => (
  <Html center>
    <div className="flex flex-col items-center gap-3">
      <div className="w-12 h-12 border-4 border-[#003366]/20 border-t-[#0077b6] rounded-full animate-spin" />
      <p className="text-sm text-gray-500">Loading 3D Model...</p>
    </div>
  </Html>
);

// Main Product Viewer Component
interface ProductViewer3DProps {
  productType: 'c-arm' | 'x-ray' | 'mobile' | 'detector';
  productName: string;
}

const ProductViewer3D = ({ productType, productName }: ProductViewer3DProps) => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);

  const hotspotsCARM: Hotspot[] = [
    { id: '1', position: [1.5, 1.7, 0.3], title: 'X-Ray Source', description: 'High-frequency X-ray generator with rotating anode tube for superior image quality.' },
    { id: '2', position: [1.5, -0.7, 0.3], title: 'Flat Panel Detector', description: '9" high-resolution detector with digital image processing capabilities.' },
    { id: '3', position: [-0.4, 0.2, 0.4], title: 'Control Console', description: '10" touchscreen with ergonomic controls and dose management software.' },
    { id: '4', position: [1.5, 0.5, 0.8], title: 'C-Arc', description: 'Large immersion depth ensures optimal patient access during procedures.' },
  ];

  const hotspotsXRAY: Hotspot[] = [
    { id: '1', position: [0, 1.5, 0.8], title: 'X-Ray Tube', description: 'High-capacity tube with automatic exposure control for consistent imaging.' },
    { id: '2', position: [-1.1, 0.5, 0.5], title: 'Digital Detector', description: '14x17" flat panel with high DQE for excellent image quality.' },
    { id: '3', position: [0, -0.4, 1.8], title: 'Patient Table', description: 'Floating tabletop with 4-way movement for easy positioning.' },
    { id: '4', position: [0, 0.75, -0.2], title: 'Column System', description: 'Floor-to-ceiling support with smooth electromagnetic movements.' },
  ];

  const currentHotspots = productType === 'c-arm' ? hotspotsCARM : hotspotsXRAY;

  const handleHotspotClick = (id: string) => {
    setActiveHotspot(activeHotspot === id ? null : id);
    setShowInstructions(false);
  };

  return (
    <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-gray-900' : 'h-[500px] rounded-2xl overflow-hidden'}`}>
      {/* Header */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
          <div className="flex items-center gap-2">
            <Move3D size={18} className="text-[#0077b6]" />
            <span className="font-semibold text-gray-900">{productName}</span>
          </div>
          <p className="text-xs text-gray-500">Interactive 3D Model</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-colors"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <X size={18} /> : <Maximize2 size={18} />}
          </button>
        </div>
      </div>

      {/* Instructions Overlay */}
      <AnimatePresence>
        {showInstructions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-sm pointer-events-none"
          >
            <div className="bg-white rounded-2xl p-6 shadow-xl text-center max-w-xs pointer-events-auto">
              <Move3D size={40} className="text-[#0077b6] mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Interactive 3D Viewer</h3>
              <div className="text-sm text-gray-600 space-y-2 mb-4">
                <p>🖱️ <strong>Drag</strong> to rotate</p>
                <p>🔍 <strong>Scroll</strong> to zoom</p>
                <p>➕ <strong>Click hotspots</strong> for details</p>
              </div>
              <button
                onClick={() => setShowInstructions(false)}
                className="px-4 py-2 bg-[#003366] text-white rounded-lg text-sm font-medium hover:bg-[#0077b6] transition-colors"
              >
                Start Exploring
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-4">
          <button className="p-1 hover:text-[#0077b6] transition-colors" title="Zoom In">
            <ZoomIn size={18} />
          </button>
          <button className="p-1 hover:text-[#0077b6] transition-colors" title="Zoom Out">
            <ZoomOut size={18} />
          </button>
          <div className="w-px h-4 bg-gray-300" />
          <button className="p-1 hover:text-[#0077b6] transition-colors" title="Reset View">
            <RotateCcw size={18} />
          </button>
          <button 
            onClick={() => setShowInstructions(true)}
            className="p-1 hover:text-[#0077b6] transition-colors" 
            title="Help"
          >
            <Info size={18} />
          </button>
        </div>
      </div>

      {/* Hotspot Legend */}
      <div className="absolute bottom-4 right-4 z-20">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg max-w-[200px]">
          <p className="text-xs font-semibold text-gray-700 mb-2">Key Components:</p>
          <div className="space-y-1">
            {currentHotspots.map((h, i) => (
              <button
                key={h.id}
                onClick={() => handleHotspotClick(h.id)}
                className={`flex items-center gap-2 text-xs w-full p-1 rounded hover:bg-gray-100 transition-colors ${
                  activeHotspot === h.id ? 'bg-cyan-50 text-cyan-700' : 'text-gray-600'
                }`}
              >
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  activeHotspot === h.id ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {i + 1}
                </span>
                {h.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Canvas */}
      <Canvas shadows className={`${isFullscreen ? '' : 'rounded-2xl'} bg-gradient-to-b from-gray-100 to-gray-200`}>
        <Suspense fallback={<Loader />}>
          <PerspectiveCamera makeDefault position={[4, 2, 4]} fov={45} />
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <directionalLight position={[-5, 3, -5]} intensity={0.3} />
          <spotLight position={[0, 5, 0]} intensity={0.5} angle={0.5} penumbra={1} />
          
          {productType === 'c-arm' ? (
            <CArm3DModel 
              hotspots={currentHotspots} 
              onHotspotClick={handleHotspotClick}
              activeHotspot={activeHotspot}
            />
          ) : (
            <XRaySystem3D 
              hotspots={currentHotspots} 
              onHotspotClick={handleHotspotClick}
              activeHotspot={activeHotspot}
            />
          )}

          <ContactShadows
            position={[0, -1.65, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={4}
          />
          
          <OrbitControls
            enablePan={false}
            minDistance={3}
            maxDistance={10}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2}
          />
          
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ProductViewer3D;
