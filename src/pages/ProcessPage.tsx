import { motion } from 'framer-motion';
import {
  Brush,
  CheckCircle2,
  Code2,
  Lightbulb,
  Rocket,
  Search,
  Settings2,
} from 'lucide-react';
import Stats from '../components/Stats';

const sdlcSteps = [
  {
    number: '1',
    title: 'Brainstorming & Setting Goals',
    short: 'Vision, priorities, and business outcomes',
    color: 'from-sky-300 to-sky-500',
    ring: 'border-sky-300',
    icon: Lightbulb,
    angle: -75,
  },
  {
    number: '2',
    title: 'Requirements Analysis & Plan',
    short: 'Scope mapping, timelines, and features',
    color: 'from-orange-200 to-orange-400',
    ring: 'border-orange-300',
    icon: Search,
    angle: -45,
  },
  {
    number: '3',
    title: 'Design & Architecture',
    short: 'Wireframes, UI flow, and technical structure',
    color: 'from-slate-400 to-slate-600',
    ring: 'border-slate-400',
    icon: Brush,
    angle: -15,
  },
  {
    number: '4',
    title: 'Coding & Implementation',
    short: 'Frontend, backend, integrations, and content',
    color: 'from-orange-500 to-orange-600',
    ring: 'border-orange-500',
    icon: Code2,
    angle: 15,
  },
  {
    number: '5',
    title: 'Testing & QA',
    short: 'Cross-device QA, fixes, and validation',
    color: 'from-amber-400 to-amber-500',
    ring: 'border-amber-400',
    icon: CheckCircle2,
    angle: 45,
  },
  {
    number: '6',
    title: 'Deployment',
    short: 'Launch, handover, and production checks',
    color: 'from-pink-500 to-fuchsia-500',
    ring: 'border-pink-400',
    icon: Rocket,
    angle: 75,
  },
  {
    number: '7',
    title: 'Maintenance & Feedback',
    short: 'Support, updates, and continuous improvement',
    color: 'from-teal-300 to-teal-500',
    ring: 'border-teal-300',
    icon: Settings2,
    angle: 105,
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen pt-28">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="theme-badge">Process & SDLC</span>
            <h1 className="theme-heading mt-6 text-4xl font-bold text-slate-900 sm:text-5xl md:text-6xl">
              A proper SDLC process page with animated chart and clearer professional structure.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              The process section now opens on its own dedicated page, with an SDLC chart designed
              to feel more visual, structured, and aligned with your reference.
            </p>
          </motion.div>

          <div className="mt-16 rounded-[34px] border border-[rgba(11,61,102,0.08)] bg-white/90 p-6 shadow-[var(--shadow-card)] md:p-10">
            <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
              <div className="relative flex min-h-[540px] items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full border border-[rgba(11,61,102,0.08)] bg-[radial-gradient(circle,rgba(244,251,253,1),rgba(255,255,255,0.94))] text-center shadow-[0_24px_54px_rgba(11,61,102,0.10)]"
                >
                  <div>
                    <div className="theme-heading text-5xl font-bold text-[#5c43cb]">SDLC</div>
                    <div className="mt-3 text-2xl font-semibold text-[var(--color-corporate-blue)]">
                      Software
                    </div>
                    <div className="text-2xl font-semibold text-[var(--color-corporate-blue)]">
                      Development
                    </div>
                    <div className="text-2xl font-semibold text-[var(--color-corporate-blue)]">
                      Life Cycle
                    </div>
                  </div>
                </motion.div>

                {sdlcSteps.map((step, index) => {
                  const angle = (step.angle * Math.PI) / 180;
                  const radius = 205;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, scale: 0.8, x: x * 0.82, y: y * 0.82 }}
                      animate={{ opacity: 1, scale: 1, x, y }}
                      transition={{ duration: 0.55, delay: 0.08 * index }}
                      whileHover={{ scale: 1.06, rotate: 2 }}
                      className="absolute left-1/2 top-1/2 -ml-[58px] -mt-[58px]"
                    >
                      <div className={`h-[116px] w-[116px] rounded-[30px] border-4 ${step.ring} bg-white p-4 shadow-[0_18px_32px_rgba(11,61,102,0.14)]`}>
                        <div className={`flex h-full w-full items-center justify-center rounded-[22px] bg-gradient-to-br ${step.color}`}>
                          <step.icon className="h-10 w-10 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="space-y-5">
                {sdlcSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, delay: 0.1 * index }}
                    whileHover={{ x: 6 }}
                    className="group flex items-center gap-4"
                  >
                    <div className={`flex h-[76px] w-[76px] flex-shrink-0 items-center justify-center rounded-full border-4 ${step.ring} bg-white text-2xl font-bold text-[var(--color-corporate-blue)] shadow-[0_12px_24px_rgba(11,61,102,0.10)]`}>
                      {step.number}
                    </div>
                    <div className={`flex-1 rounded-full bg-gradient-to-r ${step.color} px-6 py-5 text-white shadow-[0_14px_30px_rgba(11,61,102,0.12)] transition-soft group-hover:shadow-[0_18px_36px_rgba(11,61,102,0.18)]`}>
                      <div className="theme-heading text-xl font-bold leading-tight md:text-2xl">
                        {step.title}
                      </div>
                      <div className="mt-1 text-sm text-white/90 md:text-base">
                        {step.short}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Stats />
    </main>
  );
}
