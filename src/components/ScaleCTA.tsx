import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

type ScaleCTAProps = {
  onNavigateToContact: () => void;
};

const benefits = [
  'Clear scope, milestones, and delivery plan',
  'High-performance design and development system',
  'Built for long-term scale, speed, and maintainability',
];

export default function ScaleCTA({ onNavigateToContact }: ScaleCTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative overflow-hidden py-16 md:py-24" ref={ref}>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--color-deep-navy),var(--color-corporate-blue),var(--color-teal))]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-white/8 blur-3xl" />
      <div className="absolute -right-10 bottom-8 h-52 w-52 rounded-full bg-[rgba(73,197,211,0.18)] blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl rounded-[32px] border border-white/12 bg-white/8 p-8 text-white shadow-[0_28px_60px_rgba(3,10,20,0.22)] backdrop-blur-sm md:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-white/14 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/82">
                Project kickoff
              </div>
              <h2 className="theme-heading mt-6 text-3xl font-bold sm:text-4xl md:text-5xl">
                Build a stronger digital system for your business
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                If you need a faster website, a clearer SaaS product, a stronger mobile flow, or an
                AI-powered internal system, we can map the right build and move it into delivery.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/12 bg-white/10 p-6 backdrop-blur-sm">
              <div className="space-y-4">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-7 text-white/84 sm:text-base">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--color-cyan)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={onNavigateToContact}
                className="theme-button-secondary mt-8 w-full gap-2 !bg-white sm:w-auto"
              >
                Start Your Project
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
