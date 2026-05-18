import { motion } from 'framer-motion';
import { ArrowRight, Box, Briefcase, Code2, Globe2, LayoutGrid, Layers3, Sparkles, Workflow } from 'lucide-react';

type AboutPageProps = {
  onNavigateToServices: () => void;
  onNavigateToContact: () => void;
};

const principles = [
  {
    icon: Code2,
    title: 'Clear architecture',
    text: 'We shape websites, apps, and systems around structures that stay clean, fast, and easier to scale.',
  },
  {
    icon: LayoutGrid,
    title: 'Strategic page planning',
    text: 'Every screen, flow, and content section is designed with stronger clarity, hierarchy, and business intent.',
  },
  {
    icon: Workflow,
    title: 'Practical delivery flow',
    text: 'We keep execution practical through clear scoping, iterative refinement, and a delivery rhythm clients can follow.',
  },
  {
    icon: Sparkles,
    title: 'Structured execution',
    text: 'We combine UI polish, technical depth, and business-focused decisions so the final result feels premium and usable.',
  },
];

const highlights = [
  { icon: Globe2, label: 'Modern websites', value: 'Conversion-focused builds' },
  { icon: Box, label: 'Custom systems', value: 'Dashboards, portals, and tools' },
  { icon: Layers3, label: 'Product design', value: 'Structured UX and visual systems' },
  { icon: Briefcase, label: 'Delivery model', value: 'Strategy through launch support' },
];

export default function AboutPage({ onNavigateToServices, onNavigateToContact }: AboutPageProps) {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative overflow-hidden py-10 md:py-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(73,197,211,0.22),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(47,178,177,0.14),transparent_24%)]" />
        <motion.div
          animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[8%] top-24 hidden h-44 w-44 rounded-[34px] border border-white/40 bg-white/30 shadow-[0_24px_54px_rgba(11,61,102,0.12)] backdrop-blur-xl lg:block"
        />
        <motion.div
          animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[10%] top-40 hidden h-32 w-32 rounded-full border border-white/40 bg-[rgba(73,197,211,0.16)] shadow-[0_24px_54px_rgba(11,61,102,0.1)] backdrop-blur-xl lg:block"
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <span className="theme-badge">About WEBGAEBEL</span>
              <h1 className="theme-heading mt-6 max-w-3xl text-[2.2rem] font-bold text-slate-900 sm:text-[2.7rem] md:text-[3.2rem]">
                A modern digital partner for websites, products, automation, and scalable delivery.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                WEBGAEBEL helps businesses move from scattered ideas and inconsistent execution to cleaner systems, stronger interfaces, and launch-ready digital products that feel more professional from the first impression to the final workflow.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                We work across company websites, internal platforms, mobile experiences, AI automation, and product improvement projects with a delivery style that stays practical, collaborative, and quality-focused.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button onClick={onNavigateToServices} className="theme-button-secondary gap-2">
                  View Services
                  <ArrowRight size={16} />
                </button>
                <button onClick={onNavigateToContact} className="theme-button-primary gap-2">
                  Contact Us
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[34px] border border-white/50 bg-white/65 p-6 shadow-[0_28px_60px_rgba(11,61,102,0.14)] backdrop-blur-xl sm:p-8">
                <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(73,197,211,0.9),transparent)]" />
                <div className="grid gap-4 sm:grid-cols-2">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.18 + index * 0.08 }}
                      whileHover={{ y: -6, rotateX: 3, rotateY: -3 }}
                      className="rounded-[26px] border border-[rgba(11,61,102,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,251,253,0.9))] p-5 shadow-[0_18px_34px_rgba(11,61,102,0.08)]"
                    >
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-corporate-blue),var(--color-teal),var(--color-cyan))] text-white shadow-[0_14px_28px_rgba(11,61,102,0.14)]">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
                      <div className="theme-heading mt-2 text-xl font-bold text-slate-900">{item.value}</div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="mt-6 rounded-[28px] border border-[rgba(11,61,102,0.08)] bg-[linear-gradient(145deg,rgba(11,61,102,0.94),rgba(47,178,177,0.9))] p-6 text-white shadow-[0_24px_46px_rgba(11,61,102,0.16)]"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/72">How we work</div>
                  <div className="theme-heading mt-3 text-2xl font-bold">Strategy, structure, and polished execution.</div>
                  <p className="mt-3 text-sm leading-7 text-white/82">
                    We focus on strong communication, dependable implementation, and visual quality that helps businesses look sharper and operate better.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="theme-panel p-6"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-deep-navy),var(--color-teal),var(--color-cyan))] text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <h2 className="theme-heading text-lg font-bold text-slate-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="theme-panel mt-14 grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1fr]"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">What clients get</div>
              <h2 className="theme-heading mt-3 text-2xl font-bold text-slate-900">A more complete delivery experience</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Beyond design or code alone, we help shape the direction, define the scope, refine the experience, and carry projects toward a more stable final outcome.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Sharper visual presentation for your brand or product',
                'Cleaner user journeys that improve clarity and trust',
                'Technical delivery planned around maintainability',
                'Practical collaboration from strategy through launch',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-[rgba(11,61,102,0.08)] bg-[rgba(244,251,253,0.88)] px-5 py-4 text-sm font-medium leading-7 text-[var(--color-corporate-blue)]">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
