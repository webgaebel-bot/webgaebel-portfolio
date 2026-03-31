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
            className="theme-heading text-3xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Elevate Your Business with
            <span className="text-gradient-brand"> Enterprise-Grade Software & AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-600 sm:text-xl"
          >
            WebGaebel delivers high-performance MERN platforms, secure .NET enterprise systems,
            and custom machine learning solutions engineered to help global organizations scale,
            automate, and compete with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <button onClick={onNavigateToProjects} className="theme-button-primary w-full gap-2 sm:w-auto">
              Review Case Studies
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
            className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4"
          >
            {[
              { value: 'Enterprise', label: 'Delivery Standard' },
              { value: 'MERN', label: 'Scalable Product Engineering' },
              { value: '.NET', label: 'Secure Backend Architecture' },
              { value: 'AI', label: 'Automation and Intelligence' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 1.15 + index * 0.08 }}
                className="flex min-h-[132px] flex-col justify-center rounded-[22px] border border-[rgba(11,61,102,0.08)] bg-white/78 px-3 py-5 shadow-[0_16px_36px_rgba(11,61,102,0.08)] backdrop-blur-sm sm:rounded-[24px] sm:px-5 sm:py-6"
              >
                <div className="theme-heading text-2xl font-bold leading-none text-[var(--color-corporate-blue)] sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-3 text-sm leading-6 text-slate-600 sm:px-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
