import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
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
  // Frontend
  { name: 'React', icon: Layers3 },
  { name: 'Next.js', icon: Triangle },
  { name: 'Vue.js', icon: Hexagon },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Tailwind CSS', icon: Zap },
  { name: 'Angular', icon: Triangle },

  // Backend
  { name: 'Node.js', icon: ServerCog },
  { name: 'Python', icon: Terminal },
  { name: 'Express.js', icon: Workflow },
  { name: 'GraphQL', icon: GitBranch },
  { name: 'PHP / Laravel', icon: Code2 },
  { name: 'Java / Spring', icon: Settings },

  // Databases
  { name: 'MongoDB', icon: Database },
  { name: 'PostgreSQL', icon: DatabaseBackup },
  { name: 'MySQL', icon: Database },
  { name: 'Redis', icon: Flame },
  { name: 'Firebase', icon: Flame },
  { name: 'Supabase', icon: Database },

  // Cloud & DevOps
  { name: 'AWS', icon: Cloud },
  { name: 'Azure', icon: CloudCog },
  { name: 'Docker', icon: Container },
  { name: 'Kubernetes', icon: Box },
  { name: 'Vercel', icon: Triangle },
  { name: 'Linux', icon: Terminal },

  // AI / ML
  { name: 'OpenAI', icon: BrainCircuit },
  { name: 'TensorFlow', icon: Cpu },
  { name: 'PyTorch', icon: Flame },
  { name: 'Hugging Face', icon: Sparkles },
  { name: 'Google Gemini', icon: Star },
  { name: 'Anthropic', icon: BrainCircuit },

  // Mobile
  { name: 'React Native', icon: Smartphone },
  { name: 'Flutter', icon: Sparkles },
  { name: 'Swift', icon: Triangle },
  { name: 'Kotlin', icon: Square },

  // Tools & Services
  { name: 'Git', icon: GitBranch },
  { name: 'Figma', icon: Figma },
  { name: 'Stripe', icon: CreditCard },
  { name: 'Jest / Testing', icon: TestTube },
  { name: 'OAuth / Auth', icon: Lock },
  { name: 'Enterprise Dashboards', icon: LayoutDashboard },

  // IDEs & Editors
  { name: 'VS Code', icon: Code2 },
  { name: 'WebStorm', icon: Terminal },
  { name: 'Cursor AI', icon: Sparkles },
  { name: 'IntelliJ IDEA', icon: Settings },

  // AI Tools & Assistants
  { name: 'GitHub Copilot', icon: BrainCircuit },
  { name: 'ChatGPT', icon: Sparkles },
  { name: 'Claude AI', icon: BrainCircuit },
  { name: 'Windsurf', icon: Zap },

  // API & Dev Tools
  { name: 'Postman', icon: Workflow },
  { name: 'Docker Desktop', icon: Container },
  { name: 'npm / Yarn', icon: Box },
  { name: 'VS Code Extensions', icon: Layers3 },
];

export default function TechStack() {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="tech-stack" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="theme-badge">Trusted Technology Stack</span>
          <h2 className="theme-heading mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            Built with proven technologies trusted by modern product and enterprise teams.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            This section reinforces technical credibility by showcasing the platforms and
            engineering capabilities behind our delivery model.
          </p>
        </motion.div>

        {/* Interactive Draggable Carousel */}
        <div
          ref={containerRef}
          className="relative mx-auto mt-12 max-w-full overflow-hidden cursor-grab active:cursor-grabbing"
        >
          {/* Gradient Masks */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            className="flex w-max gap-6"
            drag="x"
            dragConstraints={{ left: -8000, right: 0 }}
            dragElastic={0.05}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            animate={!isDragging ? { x: [0, -4000] } : undefined}
            transition={
              !isDragging
                ? {
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 60,
                      ease: "linear",
                    },
                  }
                : { type: "spring", stiffness: 300, damping: 30 }
            }
          >
            {/* First set */}
            {techStack.map((item, index) => (
              <div
                key={`first-${index}`}
                className="flex shrink-0 select-none items-center gap-4 rounded-2xl bg-slate-50/80 px-6 py-4 transition-all duration-300 hover:bg-slate-100/80"
              >
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-corporate-blue),var(--color-teal),var(--color-cyan))] text-white shadow-[0_16px_34px_rgba(11,61,102,0.16)]">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="theme-heading whitespace-nowrap text-lg font-semibold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 whitespace-nowrap text-sm text-slate-600">Production-ready expertise</p>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {techStack.map((item, index) => (
              <div
                key={`second-${index}`}
                className="flex shrink-0 select-none items-center gap-4 rounded-2xl bg-slate-50/80 px-6 py-4 transition-all duration-300 hover:bg-slate-100/80"
              >
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-corporate-blue),var(--color-teal),var(--color-cyan))] text-white shadow-[0_16px_34px_rgba(11,61,102,0.16)]">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="theme-heading whitespace-nowrap text-lg font-semibold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 whitespace-nowrap text-sm text-slate-600">Production-ready expertise</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
