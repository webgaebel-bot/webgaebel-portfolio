import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Layers3, Sparkles, TrendingUp } from 'lucide-react';

type HeroProps = {
  onNavigateToContact: () => void;
  onNavigateToProjects: () => void;
};

const trustBadges = [
  '10+ Projects Delivered',
  '100% Client Satisfaction',
  'Fast Delivery',
];

const kpiCards = [
  { label: 'Launch-ready delivery', value: '2-6 Weeks' },
  { label: 'System performance focus', value: 'Faster Ops' },
  { label: 'Built for long-term scale', value: 'Future Ready' },
];

export default function Hero({ onNavigateToContact, onNavigateToProjects }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-0 pb-16 pt-24 md:pb-24"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      <div className="animate-gradient-flow absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(73,197,211,0.22),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(47,178,177,0.18),transparent_28%),linear-gradient(180deg,rgba(252,254,255,0.98),rgba(244,251,253,0.96))]" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -left-20 top-28 h-72 w-72 rounded-full bg-[rgba(73,197,211,0.18)] blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-[rgba(11,61,102,0.12)] blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="theme-badge gap-2"
            >
              <Sparkles size={16} />
              <span>Premium Digital Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="theme-heading mt-7 max-w-3xl text-4xl font-bold leading-[0.96] tracking-[-0.05em] text-slate-900 sm:text-5xl lg:text-6xl"
            >
              High-Performance Digital Systems Built for Business Growth
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              We design and build fast, scalable websites, SaaS platforms, mobile apps, and AI
              workflows that improve operations, increase conversions, and support measurable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <button onClick={onNavigateToContact} className="theme-button-primary w-full gap-2 sm:w-auto">
                Start Your Project
                <ArrowRight size={18} />
              </button>
              <button onClick={onNavigateToProjects} className="theme-button-secondary w-full gap-2 sm:w-auto">
                View Case Studies
                <ArrowRight size={18} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.52 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              {trustBadges.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(11,61,102,0.08)] bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-[0_12px_30px_rgba(11,61,102,0.08)] backdrop-blur-sm"
                >
                  <BadgeCheck className="h-4 w-4 text-[var(--color-teal)]" />
                  {item}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.62 }}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {kpiCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-[22px] border border-[rgba(11,61,102,0.08)] bg-white/76 px-5 py-4 shadow-[0_16px_36px_rgba(11,61,102,0.08)] backdrop-blur-sm"
                >
                  <div className="theme-heading text-xl font-bold text-[var(--color-corporate-blue)]">
                    {card.value}
                  </div>
                  <div className="mt-1 text-sm leading-6 text-slate-600">{card.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto w-full max-w-[620px] lg:ml-auto"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="glass-panel relative overflow-hidden p-5 sm:p-6"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(73,197,211,0.8),transparent)]" />
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-teal)]">
                    Growth Dashboard
                  </div>
                  <div className="theme-heading mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                    Revenue, leads, and delivery visibility
                  </div>
                </div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-corporate-blue),var(--color-teal),var(--color-cyan))] text-white shadow-[0_16px_34px_rgba(11,61,102,0.16)]">
                  <TrendingUp className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[24px] border border-white/40 bg-white/72 p-5 shadow-[0_18px_38px_rgba(11,61,102,0.1)]">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-500">Monthly growth</span>
                    <span className="rounded-full bg-[rgba(73,197,211,0.14)] px-3 py-1 text-xs font-semibold text-[var(--color-corporate-blue)]">
                      +28%
                    </span>
                  </div>
                  <div className="theme-heading mt-3 text-4xl font-bold text-slate-900">$48.2k</div>
                  <div className="mt-1 text-sm text-slate-500">Pipeline value influenced by design and automation</div>
                  <div className="mt-5 flex h-32 items-end gap-3">
                    {[44, 68, 58, 82, 74, 96].map((height, index) => (
                      <motion.div
                        key={height}
                        initial={{ height: 24 }}
                        animate={{ height }}
                        transition={{ duration: 0.7, delay: 0.55 + index * 0.08 }}
                        className="flex-1 rounded-t-[16px] bg-[linear-gradient(180deg,rgba(73,197,211,0.88),rgba(14,61,89,0.82))]"
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[24px] border border-white/40 bg-[linear-gradient(160deg,rgba(11,61,102,0.94),rgba(47,178,177,0.9))] p-5 text-white shadow-[0_18px_38px_rgba(11,61,102,0.14)]">
                    <div className="flex items-center gap-3">
                      <Layers3 className="h-5 w-5 text-[var(--color-cyan)]" />
                      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/72">
                        Delivery
                      </span>
                    </div>
                    <div className="theme-heading mt-3 text-3xl font-bold">92%</div>
                    <div className="mt-1 text-sm text-white/74">Milestones completed on schedule</div>
                  </div>

                  <div className="rounded-[24px] border border-white/40 bg-white/72 p-5 shadow-[0_18px_38px_rgba(11,61,102,0.1)]">
                    <div className="text-sm font-semibold text-slate-500">Automation wins</div>
                    <div className="mt-3 space-y-3">
                      {[
                        'Lead qualification workflows',
                        'Client follow-up automation',
                        'Reporting dashboards',
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-teal)] shadow-[0_0_0_6px_rgba(73,197,211,0.12)]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6.4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-3 top-10 hidden rounded-[22px] border border-white/35 bg-white/78 px-4 py-4 shadow-[0_18px_36px_rgba(11,61,102,0.12)] backdrop-blur-xl sm:block"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Lead volume</div>
              <div className="theme-heading mt-2 text-2xl font-bold text-[var(--color-corporate-blue)]">+41%</div>
              <div className="mt-1 text-sm text-slate-600">after UX refinement</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-2 bottom-8 hidden rounded-[22px] border border-white/35 bg-[rgba(8,38,63,0.92)] px-4 py-4 text-white shadow-[0_18px_36px_rgba(11,61,102,0.16)] backdrop-blur-xl sm:block"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">Client ops</div>
              <div className="theme-heading mt-2 text-2xl font-bold">3.2x</div>
              <div className="mt-1 text-sm text-white/72">faster response workflows</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
