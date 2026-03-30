import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

type CTAProps = {
  onNavigateToContact: () => void;
  onNavigateToProcess: () => void;
};

export default function CTA({ onNavigateToContact, onNavigateToProcess }: CTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative overflow-hidden py-20 md:py-32" ref={ref}>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--color-deep-navy),var(--color-corporate-blue),var(--color-teal))]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-2 font-medium backdrop-blur-sm"
          >
            <Sparkles size={16} />
            <span>Professional Delivery</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="theme-heading text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Explore the full process, then let&apos;s plan your build.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl"
          >
            The homepage now delivers a cleaner overview, while the detailed process and contact
            experience are presented on dedicated pages for a more professional structure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button onClick={onNavigateToProcess} className="theme-button-secondary w-full gap-2 !bg-white sm:w-auto">
              View Process
              <ArrowRight size={20} />
            </button>

            <button
              onClick={onNavigateToContact}
              className="w-full rounded-full border border-white/18 px-8 py-4 text-lg font-semibold text-white transition-soft hover:bg-white/10 sm:w-auto"
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
