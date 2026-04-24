// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { ClipboardList, Code2, FlaskConical, Lightbulb, Rocket, SearchCheck } from 'lucide-react';

// const steps = [
//   {
//     icon: SearchCheck,
//     short: '01',
//     phase: 'Discovery',
//     title: 'Requirement Analysis',
//     description:
//       'We study your business model, user pain points, competitors, and goals so the product direction starts on clear ground.',
//     items: ['Business discovery workshop', 'Audience and competitor review', 'Feature priority mapping'],
//   },
//   {
//     icon: Lightbulb,
//     short: '02',
//     phase: 'Planning',
//     title: 'Solution Architecture',
//     description:
//       'The roadmap, sitemap, wireframes, and technical scope are planned before design and development begin.',
//     items: ['Information architecture', 'Wireframes and journey mapping', 'Tech stack and delivery planning'],
//   },
//   {
//     icon: ClipboardList,
//     short: '03',
//     phase: 'Design',
//     title: 'UI/UX System Design',
//     description:
//       'We shape interfaces, messaging flow, and interaction patterns around clarity, trust, and brand positioning.',
//     items: ['Visual system and components', 'Responsive layout design', 'Prototype review and refinements'],
//   },
//   {
//     icon: Code2,
//     short: '04',
//     phase: 'Development',
//     title: 'Agile Build Execution',
//     description:
//       'Frontend, backend, integrations, and content structure are built in milestones with quality-focused delivery.',
//     items: ['Modular development sprints', 'CMS or admin implementation', 'Integration and performance setup'],
//   },
//   {
//     icon: FlaskConical,
//     short: '05',
//     phase: 'Testing',
//     title: 'QA and SDLC Validation',
//     description:
//       'SDLC is not complete without strong QA. We review flows, responsiveness, content, speed, and critical user actions.',
//     items: ['Cross-device testing', 'Bug fixing and performance tuning', 'UAT and launch approvals'],
//   },
//   {
//     icon: Rocket,
//     short: '06',
//     phase: 'Launch',
//     title: 'Deployment and Growth',
//     description:
//       'After launch, we support analytics, iteration, and ongoing optimization so the system keeps improving over time.',
//     items: ['Deployment and handover', 'Monitoring and reporting', 'Post-launch support roadmap'],
//   },
// ];

// export default function Process() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-120px' });

//   return (
//     <section id="process" className="py-20 md:py-32" ref={ref}>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.65 }}
//           className="mx-auto mb-16 max-w-3xl text-center"
//         >
//           <span className="theme-badge">Process + SDLC</span>
//           <h2 className="theme-heading mt-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
//             A polished delivery process with SDLC built into every stage.
//           </h2>
//           <p className="mt-5 text-lg leading-8 text-slate-600">
//             The attraction should not only be visual. Our process is clear, professional, and
//             dependable from discovery to deployment.
//           </p>
//         </motion.div>

//         <div className="relative">
//           <div className="absolute left-6 top-0 hidden h-full w-px bg-[linear-gradient(180deg,var(--color-deep-navy),var(--color-cyan),var(--color-teal))] lg:left-1/2 lg:block" />

//           <div className="space-y-8 lg:space-y-10">
//             {steps.map((step, index) => (
//               <motion.article
//                 key={step.title}
//                 initial={{ opacity: 0, y: 34 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.6, delay: index * 0.08 }}
//                 className={`relative grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center ${
//                   index % 2 === 0 ? '' : 'lg:[&>*:first-child]:order-3 lg:[&>*:last-child]:order-1'
//                 }`}
//               >
//                 <div className="theme-panel p-8">
//                   <div className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.28em] text-[var(--color-teal)]">
//                     <span>{step.phase}</span>
//                     <span className="h-px flex-1 bg-[rgba(47,178,177,0.22)]" />
//                   </div>
//                   <div className="theme-heading text-3xl font-bold text-[rgba(11,61,102,0.18)]">
//                     {step.short}
//                   </div>
//                   <h3 className="theme-heading mt-2 text-2xl font-bold text-slate-900">{step.title}</h3>
//                   <p className="mt-4 leading-7 text-slate-600">{step.description}</p>
//                   <div className="mt-6 flex flex-wrap gap-3">
//                     {step.items.map((item) => (
//                       <span
//                         key={item}
//                         className="rounded-full border border-[rgba(11,61,102,0.08)] bg-[rgba(244,251,253,0.95)] px-4 py-2 text-sm font-medium text-[var(--color-corporate-blue)]"
//                       >
//                         {item}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="relative z-10 hidden lg:flex">
//                   <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[linear-gradient(135deg,var(--color-deep-navy),var(--color-teal),var(--color-cyan))] text-white shadow-[0_18px_38px_rgba(11,61,102,0.2)]">
//                     <step.icon className="h-7 w-7" />
//                   </div>
//                 </div>

//                 <div className="hidden lg:block" />
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion, useInView } from 'framer-motion';
import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Trail, Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { ClipboardList, Code2, FlaskConical, Lightbulb, Rocket, SearchCheck } from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────────
const steps = [
  {
    icon: SearchCheck,
    short: '01',
    phase: 'Discovery',
    title: 'Requirement Analysis',
    description:
      'We study your business model, user pain points, competitors, and goals so the product direction starts on clear ground.',
    items: ['Business discovery workshop', 'Audience and competitor review', 'Feature priority mapping'],
    color: '#00d4ff',
  },
  {
    icon: Lightbulb,
    short: '02',
    phase: 'Planning',
    title: 'Solution Architecture',
    description:
      'The roadmap, sitemap, wireframes, and technical scope are planned before design and development begin.',
    items: ['Information architecture', 'Wireframes and journey mapping', 'Tech stack and delivery planning'],
    color: '#7c3aed',
  },
  {
    icon: ClipboardList,
    short: '03',
    phase: 'Design',
    title: 'UI/UX System Design',
    description:
      'We shape interfaces, messaging flow, and interaction patterns around clarity, trust, and brand positioning.',
    items: ['Visual system and components', 'Responsive layout design', 'Prototype review and refinements'],
    color: '#06b6d4',
  },
  {
    icon: Code2,
    short: '04',
    phase: 'Development',
    title: 'Agile Build Execution',
    description:
      'Frontend, backend, integrations, and content structure are built in milestones with quality-focused delivery.',
    items: ['Modular development sprints', 'CMS or admin implementation', 'Integration and performance setup'],
    color: '#0ea5e9',
  },
  {
    icon: FlaskConical,
    short: '05',
    phase: 'Testing',
    title: 'QA and SDLC Validation',
    description:
      'SDLC is not complete without strong QA. We review flows, responsiveness, content, speed, and critical user actions.',
    items: ['Cross-device testing', 'Bug fixing and performance tuning', 'UAT and launch approvals'],
    color: '#10b981',
  },
  {
    icon: Rocket,
    short: '06',
    phase: 'Launch',
    title: 'Deployment and Growth',
    description:
      'After launch, we support analytics, iteration, and ongoing optimization so the system keeps improving over time.',
    items: ['Deployment and handover', 'Monitoring and reporting', 'Post-launch support roadmap'],
    color: '#f59e0b',
  },
];

// ─── 3D: FLOATING ORB ────────────────────────────────────────────────────────
function FloatingOrb({ position, color, speed = 1, distort = 0.4, size = 1 }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.005 * speed;
    }
  });
  return (
    <Float speed={speed * 1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.1}
          metalness={0.6}
          transparent
          opacity={0.75}
        />
      </Sphere>
    </Float>
  );
}

// ─── 3D: PARTICLE FIELD ──────────────────────────────────────────────────────
function ParticleField({ count = 180 }) {
  const mesh = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 28;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 28;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 28;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.03;
      mesh.current.rotation.x = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.055} color="#00d4ff" transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

// ─── 3D: TIMELINE NODE ───────────────────────────────────────────────────────
function TimelineNode({ color, index }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.015;
      const scale = hovered
        ? 1.4 + Math.sin(state.clock.elapsedTime * 3) * 0.08
        : 1 + Math.sin(state.clock.elapsedTime * 1.5 + index) * 0.07;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <octahedronGeometry args={[0.38, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={hovered ? 1.2 : 0.55}
        roughness={0.15}
        metalness={0.85}
        transparent
        opacity={0.92}
      />
    </mesh>
  );
}

// ─── 3D: CONNECTOR LINE ──────────────────────────────────────────────────────
function ConnectorLine({ from, to, color }) {
  const points = useMemo(() => [new THREE.Vector3(...from), new THREE.Vector3(...to)], [from, to]);
  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);
  return (
    <line geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.3} linewidth={1} />
    </line>
  );
}

// ─── 3D: HERO SCENE ──────────────────────────────────────────────────────────
function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[10, 10, 10]} intensity={1.8} color="#00d4ff" />
      <pointLight position={[-10, -10, 5]} intensity={1.2} color="#7c3aed" />
      <Stars radius={80} depth={50} count={1200} factor={3} saturation={0.5} fade speed={0.6} />
      <ParticleField count={220} />
      <FloatingOrb position={[-5, 2, -6]} color="#00d4ff" speed={0.8} distort={0.45} size={1.4} />
      <FloatingOrb position={[5.5, -1.5, -8]} color="#7c3aed" speed={1.2} distort={0.6} size={1.1} />
      <FloatingOrb position={[0, 3.5, -10]} color="#0ea5e9" speed={0.6} distort={0.35} size={0.9} />
      <FloatingOrb position={[-3.5, -3, -5]} color="#10b981" speed={1.0} distort={0.5} size={0.7} />
    </>
  );
}

// ─── 3D: MINI STEP NODE CANVAS ───────────────────────────────────────────────
function StepNodeCanvas({ color, index }) {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 0, 3], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 2, 2]} intensity={2} color={color} />
      <pointLight position={[-2, -2, 2]} intensity={1} color="#ffffff" />
      <TimelineNode color={color} index={index} />
    </Canvas>
  );
}

// ─── STEP CARD ────────────────────────────────────────────────────────────────
function StepCard({ step, index, isInView }) {
  const isEven = index % 2 === 0;
  const Icon = step.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      key={step.title}
      initial={{ opacity: 0, x: isEven ? -60 : 60, y: 20 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative grid gap-0 lg:grid-cols-[1fr_80px_1fr] lg:items-center`}
    >
      {/* LEFT CONTENT (even) or empty (odd) */}
      <div className={isEven ? 'contents' : 'hidden lg:contents'}>
        {isEven ? <CardContent step={step} hovered={hovered} isEven={isEven} /> : <div />}
      </div>

      {/* CENTER NODE */}
      <div className="relative z-10 hidden lg:flex justify-center">
        <motion.div
          animate={hovered ? { scale: 1.15 } : { scale: 1 }}
          transition={{ type: 'spring', stiffness: 280, damping: 18 }}
          className="w-[80px] h-[80px] rounded-full overflow-hidden"
          style={{
            boxShadow: `0 0 32px 8px ${step.color}55, 0 0 0 3px ${step.color}33`,
          }}
        >
          <StepNodeCanvas color={step.color} index={index} />
        </motion.div>
      </div>

      {/* RIGHT CONTENT (odd) or empty (even) */}
      <div className={!isEven ? 'contents' : 'hidden lg:contents'}>
        {!isEven ? <CardContent step={step} hovered={hovered} isEven={isEven} /> : <div />}
      </div>

      {/* Mobile: full width */}
      <div className="lg:hidden col-span-full">
        <div className="flex items-center gap-4 mb-3">
          <div
            className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0"
            style={{ boxShadow: `0 0 20px 4px ${step.color}55` }}
          >
            <StepNodeCanvas color={step.color} index={index} />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: step.color }}>
              {step.phase}
            </span>
            <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
          </div>
        </div>
        <CardBody step={step} hovered={hovered} />
      </div>
    </motion.article>
  );
}

function CardContent({ step, hovered, isEven }) {
  return (
    <motion.div
      animate={hovered ? { y: -4 } : { y: 0 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className="hidden lg:block"
    >
      <div
        className="relative rounded-2xl p-8 border transition-all duration-500"
        style={{
          background: hovered
            ? `linear-gradient(135deg, rgba(255,255,255,0.97), ${step.color}10)`
            : 'rgba(255,255,255,0.92)',
          borderColor: hovered ? `${step.color}55` : 'rgba(11,61,102,0.08)',
          boxShadow: hovered
            ? `0 20px 60px ${step.color}22, 0 4px 16px rgba(0,0,0,0.06)`
            : '0 4px 24px rgba(0,0,0,0.05)',
          backdropFilter: 'blur(16px)',
        }}
      >
        {/* Glowing top border */}
        <div
          className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${step.color}, transparent)`,
            opacity: hovered ? 1 : 0.3,
          }}
        />

        <CardBody step={step} hovered={hovered} />
      </div>
    </motion.div>
  );
}

function CardBody({ step, hovered }) {
  const Icon = step.icon;
  return (
    <>
      <div className="mb-4 flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
          style={{
            background: `${step.color}18`,
            boxShadow: hovered ? `0 0 14px ${step.color}55` : 'none',
          }}
        >
          <Icon className="w-5 h-5" style={{ color: step.color }} />
        </div>
        <span
          className="text-xs font-bold uppercase tracking-[0.22em]"
          style={{ color: step.color }}
        >
          {step.phase}
        </span>
        <span className="ml-auto text-4xl font-black" style={{ color: `${step.color}20` }}>
          {step.short}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
      <p className="text-slate-500 leading-7 text-sm mb-5">{step.description}</p>

      <div className="flex flex-wrap gap-2">
        {step.items.map((item) => (
          <span
            key={item}
            className="rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300"
            style={{
              background: hovered ? `${step.color}15` : 'rgba(244,251,253,0.95)',
              border: `1px solid ${hovered ? step.color + '40' : 'rgba(11,61,102,0.08)'}`,
              color: step.color,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </>
  );
}

// ─── MAIN SECTION ─────────────────────────────────────────────────────────────
export default function Process() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #fafeff 50%, #f0f7ff 100%)' }}
    >
      {/* ── 3D HERO CANVAS BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <Canvas
          camera={{ position: [0, 0, 14], fov: 60 }}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
          style={{ width: '100%', height: '100%' }}
        >
          <HeroScene />
        </Canvas>
      </div>

      {/* ── CONTENT ── */}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.28em] mb-6"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.12), rgba(124,58,237,0.12))',
              border: '1px solid rgba(0,212,255,0.25)',
              color: '#0ea5e9',
              boxShadow: '0 0 24px rgba(0,212,255,0.15)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Process + SDLC
          </motion.span>

          <h2
            className="text-4xl font-extrabold sm:text-5xl md:text-6xl leading-tight"
            style={{
              background: 'linear-gradient(135deg, #0b3d66 0%, #0ea5e9 50%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            A polished delivery process with SDLC built into every stage.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500 max-w-2xl mx-auto">
            Our process is clear, professional, and dependable — from discovery to deployment,
            powered with precision at every step.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute hidden lg:block left-1/2 top-8 bottom-8 w-px -translate-x-1/2"
            style={{
              background: 'linear-gradient(180deg, #00d4ff, #7c3aed, #10b981, #f59e0b)',
              opacity: 0.25,
            }}
          />

          <div className="space-y-10 lg:space-y-14">
            {steps.map((step, index) => (
              <StepCard key={step.title} step={step} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.12) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
    </section>
  );
}