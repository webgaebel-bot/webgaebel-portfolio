import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

type HeroProps = {
  onNavigateToProjects: () => void;
  onNavigateToContact: () => void;
};

export default function Hero({ onNavigateToProjects, onNavigateToContact }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(73,197,211,0.24),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(47,178,177,0.18),transparent_26%)]" />
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
            className="theme-heading text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            We transform ambitious businesses into
            <span className="text-gradient-brand"> standout digital brands</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl"
          >
            The home page is now more focused, with reviews kept on the homepage while detailed
            contact and process content live on their own dedicated pages.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <button onClick={onNavigateToProjects} className="theme-button-primary w-full gap-2 sm:w-auto">
              Explore Projects
              <ArrowRight size={20} />
            </button>

            <button onClick={onNavigateToContact} className="theme-button-secondary w-full gap-2 sm:w-auto">
              Start a Project
              <ArrowRight size={20} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-5 md:grid-cols-4"
          >
            {[
              { value: '700+', label: 'Clients Served' },
              { value: '97%', label: 'Satisfaction Rate' },
              { value: '6+', label: 'Years of Delivery' },
              { value: '30%+', label: 'Average Growth Lift' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 1.15 + index * 0.08 }}
                className="rounded-[24px] border border-[rgba(11,61,102,0.08)] bg-white/78 px-5 py-6 shadow-[0_16px_36px_rgba(11,61,102,0.08)] backdrop-blur-sm"
              >
                <div className="theme-heading text-3xl font-bold text-[var(--color-corporate-blue)]">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
