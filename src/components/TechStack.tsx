import { motion } from 'framer-motion';
import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  LayoutDashboard,
  Layers3,
  ServerCog,
  ShieldCheck,
} from 'lucide-react';

const techStack = [
  { name: 'React', icon: Layers3 },
  { name: 'Node.js', icon: ServerCog },
  { name: 'MongoDB', icon: Database },
  { name: 'ASP.NET Core', icon: ShieldCheck },
  { name: 'C#', icon: Code2 },
  { name: 'OpenAI', icon: BrainCircuit },
  { name: 'Azure', icon: Cloud },
  { name: 'Enterprise Dashboards', icon: LayoutDashboard },
];

export default function TechStack() {
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

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="theme-panel flex items-center gap-4 p-5"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-corporate-blue),var(--color-teal),var(--color-cyan))] text-white shadow-[0_16px_34px_rgba(11,61,102,0.16)]">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="theme-heading text-lg font-semibold text-slate-900">{item.name}</h3>
                <p className="mt-1 text-sm text-slate-600">Production-ready expertise</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
