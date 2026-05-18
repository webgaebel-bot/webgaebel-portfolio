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
    color: 'from-[#0b3d66] to-[#1f6ea1]',
    ring: 'border-[#7cb9d8]',
    icon: Lightbulb,
    angle: -75,
  },
  {
    number: '2',
    title: 'Requirements Analysis & Plan',
    short: 'Scope mapping, timelines, and features',
    color: 'from-[#155e75] to-[#2fb2b1]',
    ring: 'border-[#8ed7d3]',
    icon: Search,
    angle: -45,
  },
  {
    number: '3',
    title: 'Design & Architecture',
    short: 'Wireframes, UI flow, and technical structure',
    color: 'from-[#1e3a5f] to-[#356f9f]',
    ring: 'border-[#9eb8d2]',
    icon: Brush,
    angle: -15,
  },
  {
    number: '4',
    title: 'Coding & Implementation',
    short: 'Frontend, backend, integrations, and content',
    color: 'from-[#0d9488] to-[#14b8a6]',
    ring: 'border-[#8be2d7]',
    icon: Code2,
    angle: 15,
  },
  {
    number: '5',
    title: 'Testing & QA',
    short: 'Cross-device QA, fixes, and validation',
    color: 'from-[#164e63] to-[#0891b2]',
    ring: 'border-[#8fc6d4]',
    icon: CheckCircle2,
    angle: 45,
  },
  {
    number: '6',
    title: 'Deployment',
    short: 'Launch, handover, and production checks',
    color: 'from-[#0f766e] to-[#2fb2b1]',
    ring: 'border-[#91ddd2]',
    icon: Rocket,
    angle: 75,
  },
  {
    number: '7',
    title: 'Maintenance & Feedback',
    short: 'Support, updates, and continuous improvement',
    color: 'from-[#102f4a] to-[#0b3d66]',
    ring: 'border-[#7ba9c8]',
    icon: Settings2,
    angle: 105,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative overflow-hidden py-8 md:py-14">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="theme-badge">Process & SDLC</span>
            <h1 className="theme-heading mt-6 text-[2.2rem] font-bold text-slate-900 sm:text-[2.7rem] md:text-[3.2rem]">
              Web development project timeline guide with a clear SDLC flow.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              See how each project moves from discovery to launch through a cleaner, easier-to-scan
              delivery framework.
            </p>
          </motion.div>

          <div className="mt-10 rounded-[26px] border border-[rgba(11,61,102,0.08)] bg-white/90 p-4 shadow-[var(--shadow-card)] sm:p-6 md:rounded-[34px] md:p-10">
            <motion.div
              className="hidden gap-10 xl:grid xl:grid-cols-[0.95fr_1.05fr] xl:items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="relative flex min-h-[540px] items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7 }}
                  className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full border border-[rgba(11,61,102,0.08)] bg-[radial-gradient(circle,rgba(244,251,253,1),rgba(255,255,255,0.94))] text-center shadow-[0_24px_54px_rgba(11,61,102,0.10)]"
                >
                  <div>
                    <div className="theme-heading text-5xl font-bold text-[var(--color-corporate-blue)]">SDLC</div>
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
                      whileInView={{ opacity: 1, scale: 1, x, y }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.6, delay: 0.14 * index, ease: [0.22, 1, 0.36, 1] as const }}
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

              <motion.div
                className="space-y-5"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
              >
                {sdlcSteps.map((step) => (
                  <motion.div
                    key={step.number}
                    variants={stepVariants}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ x: 8, scale: 1.01 }}
                    className="group flex items-center gap-4"
                  >
                    <div
                      className={`flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-full border-4 ${step.ring} bg-white text-2xl font-bold text-[var(--color-corporate-blue)] shadow-[0_12px_24px_rgba(11,61,102,0.10)]`}
                    >
                      {step.number}
                    </div>
                    <div
                      className={`flex-1 rounded-full bg-gradient-to-r ${step.color} px-6 py-5 text-white shadow-[0_14px_30px_rgba(11,61,102,0.12)] transition-soft group-hover:shadow-[0_18px_36px_rgba(11,61,102,0.18)]`}
                    >
                      <div className="theme-heading text-xl font-bold leading-tight md:text-2xl">
                        {step.title}
                      </div>
                      <div className="mt-1 text-sm text-white/90 md:text-base">{step.short}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="grid gap-4 xl:hidden"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="rounded-[24px] bg-[radial-gradient(circle,rgba(244,251,253,1),rgba(255,255,255,0.94))] px-5 py-8 text-center shadow-[0_18px_42px_rgba(11,61,102,0.08)]">
                <div className="theme-heading text-4xl font-bold text-[var(--color-corporate-blue)] sm:text-5xl">SDLC</div>
                <div className="mt-3 text-lg font-semibold text-[var(--color-corporate-blue)] sm:text-xl">
                  Software Development Life Cycle
                </div>
              </div>

              {sdlcSteps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={stepVariants}
                  viewport={{ once: true, amount: 0.2 }}
                  className="rounded-[24px] border border-[rgba(11,61,102,0.08)] bg-white p-4 shadow-[0_14px_30px_rgba(11,61,102,0.08)] sm:p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border-4 ${step.ring} bg-white text-lg font-bold text-[var(--color-corporate-blue)] shadow-[0_10px_22px_rgba(11,61,102,0.08)]`}>
                      {step.number}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-[0_12px_24px_rgba(11,61,102,0.12)]`}>
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div className="theme-heading mt-4 text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
                        {step.title}
                      </div>
                      <div className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                        {step.short}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <Stats />
    </main>
  );
}
