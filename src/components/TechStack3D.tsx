import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Html, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  LayoutDashboard,
  Layers3,
  ServerCog,
  Box,
  Container,
  Flame,
  Cpu,
  Smartphone,
  GitBranch,
  Figma,
  CreditCard,
  TestTube,
  Lock,
  Workflow,
  Zap,
  Settings,
  Hexagon,
  Triangle,
  Square,
  Star,
  Sparkles,
  Terminal,
  CloudCog,
  DatabaseBackup,
} from 'lucide-react';

const techStack = [
  { name: 'React', icon: Layers3, color: '#61DAFB' },
  { name: 'Next.js', icon: Triangle, color: '#000000' },
  { name: 'Vue.js', icon: Hexagon, color: '#4FC08D' },
  { name: 'TypeScript', icon: Code2, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: Zap, color: '#06B6D4' },
  { name: 'Angular', icon: Triangle, color: '#DD0031' },
  { name: 'Node.js', icon: ServerCog, color: '#339933' },
  { name: 'Python', icon: Terminal, color: '#3776AB' },
  { name: 'MongoDB', icon: Database, color: '#47A248' },
  { name: 'PostgreSQL', icon: DatabaseBackup, color: '#336791' },
  { name: 'AWS', icon: Cloud, color: '#FF9900' },
  { name: 'Azure', icon: CloudCog, color: '#0089D6' },
  { name: 'Docker', icon: Container, color: '#2496ED' },
  { name: 'OpenAI', icon: BrainCircuit, color: '#412991' },
  { name: 'TensorFlow', icon: Cpu, color: '#FF6F00' },
  { name: 'GitHub Copilot', icon: BrainCircuit, color: '#000000' },
];

function Icon3D({ icon: Icon, color }: { icon: typeof Layers3; color: string }) {
  return (
    <div
      style={{
        width: 60,
        height: 60,
        background: `linear-gradient(135deg, ${color}20, ${color}40)`,
        borderRadius: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0 8px 32px ${color}30`,
        border: `2px solid ${color}40`,
      }}
    >
      <Icon size={32} color={color} />
    </div>
  );
}

function TechCard({ 
  tech, 
  position, 
  index 
}: { 
  tech: typeof techStack[0]; 
  position: [number, number, number];
  index: number;
}) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3 + index * 0.5) * 0.05;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.2, 0.2]}
    >
      <group ref={meshRef} position={position}>
        {/* Card Background */}
        <mesh>
          <boxGeometry args={[3, 1.5, 0.1]} />
          <meshStandardMaterial 
            color="#ffffff" 
            metalness={0.1} 
            roughness={0.2}
            transparent
            opacity={0.95}
          />
        </mesh>
        
        {/* Card Border */}
        <mesh position={[0, 0, -0.06]}>
          <boxGeometry args={[3.05, 1.55, 0.05]} />
          <meshStandardMaterial 
            color={tech.color}
            metalness={0.5}
            roughness={0.3}
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* HTML Icon */}
        <Html 
          transform 
          occlude 
          position={[-0.8, 0, 0.06]} 
          style={{
            width: '80px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon3D icon={tech.icon} color={tech.color} />
        </Html>

        {/* Text Label */}
        <Text
          position={[0.5, 0.2, 0.06]}
          fontSize={0.35}
          color="#1e293b"
          anchorX="left"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiJ-Ek-_EeA.woff2"
        >
          {tech.name}
        </Text>
        
        <Text
          position={[0.5, -0.25, 0.06]}
          fontSize={0.2}
          color="#64748b"
          anchorX="left"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiJ-Ek-_EeA.woff2"
        >
          3D Expertise
        </Text>
      </group>
    </Float>
  );
}

function Scene() {
  const positions = useMemo(() => {
    const pos: [number, number, number][] = [];
    const rows = 4;
    const cols = 4;
    const spacingX = 4;
    const spacingY = 2.5;
    
    for (let i = 0; i < techStack.length; i++) {
      const row = Math.floor(i / cols);
      const col = i % cols;
      const x = (col - (cols - 1) / 2) * spacingX;
      const y = ((rows - 1) / 2 - row) * spacingY;
      const z = Math.random() * 2 - 1;
      pos.push([x, y, z]);
    }
    return pos;
  }, []);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      <spotLight position={[0, 10, 0]} angle={Math.PI / 6} penumbra={1} intensity={0.8} />
      
      <Environment preset="city" />
      
      {techStack.map((tech, index) => (
        <TechCard 
          key={tech.name} 
          tech={tech} 
          position={positions[index] || [0, 0, 0]}
          index={index}
        />
      ))}
      
      <ContactShadows 
        position={[0, -4, 0]} 
        opacity={0.3} 
        scale={30} 
        blur={2} 
        far={10}
      />
    </>
  );
}

export default function TechStack3D() {
  return (
    <section id="tech-stack-3d" className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-1.5 text-sm font-medium text-white">
            Immersive 3D Experience
          </span>
          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            Our Technology Stack in 3D
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore our cutting-edge tools and technologies floating in 3D space.
            Drag to rotate, scroll to zoom!
          </p>
        </div>

        <div className="relative h-[600px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-2xl">
          <Canvas
            camera={{ position: [0, 0, 12], fov: 45 }}
            style={{ background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)' }}
          >
            <Scene />
          </Canvas>
          
          {/* 3D Badge */}
          <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm">
            <span className="text-sm font-semibold text-slate-700">
              🖱️ Drag to Rotate • Scroll to Zoom
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
