import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

type HeroProps = {
  onNavigateToServices: () => void;
  onNavigateToContact: () => void;
};

export default function Hero({ onNavigateToServices, onNavigateToContact }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-0 pb-16 pt-20 md:pb-24"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(73,197,211,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(47,178,177,0.14),transparent_26%)]" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
        className="absolute -left-20 top-28 h-72 w-72 rounded-full bg-[rgba(73,197,211,0.14)] blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.2 }}
        className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-[rgba(11,61,102,0.12)] blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="theme-badge mb-8 gap-2"
          >
            <Sparkles size={16} />
            <span>Premium Digital Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="theme-heading mx-auto max-w-4xl text-2xl font-bold leading-[0.96] tracking-[-0.04em] text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            <span className="block text-[var(--color-ink)]">We turn your business into a</span>
            <span className="block text-[var(--color-ink)]">modern digital experience</span>
            <span className="block text-gradient-brand">using AI and custom software solutions.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mt-8 max-w-3xl text-sm leading-7 text-slate-600 sm:text-lg"
          >
            WebGaebel helps businesses grow by turning their ideas into powerful digital solutions
            through modern software, mobile apps, SaaS development, and AI-driven technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <button onClick={onNavigateToServices} className="theme-button-primary w-full gap-2 sm:w-auto">
              Explore Services
              <ArrowRight size={20} />
            </button>

            <button onClick={onNavigateToContact} className="theme-button-secondary w-full gap-2 sm:w-auto">
              Schedule a Consultation
              <ArrowRight size={20} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4"
          >
            {[
              { value: 'Web', label: 'Development Services' },
              { value: 'Mobile', label: 'App Development' },
              { value: 'AI', label: 'Automation Systems' },
              { value: 'SEO', label: 'Organic Growth' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 1.15 + index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="flex min-h-[112px] flex-col justify-center rounded-[20px] border border-[rgba(11,61,102,0.08)] bg-white/80 px-4 py-4 shadow-[0_14px_30px_rgba(11,61,102,0.08)] backdrop-blur-sm sm:min-h-[120px] sm:rounded-[22px] sm:px-5 sm:py-5"
              >
                <div className="theme-heading text-xl font-bold leading-none text-[var(--color-corporate-blue)] sm:text-[1.7rem]">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
