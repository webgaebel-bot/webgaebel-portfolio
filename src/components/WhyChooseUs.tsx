import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Headphones, LineChart, Palette, Target, Zap } from 'lucide-react';

type WhyChooseUsProps = {
  onNavigateToContact: () => void;
};

export default function WhyChooseUs({ onNavigateToContact }: WhyChooseUsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const reasons = [
    {
      icon: Target,
      title: 'Conversion-Focused Design',
      description: 'Every section is planned to guide users clearly toward inquiry, booking, or action.',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'We move efficiently with structure, milestones, and clear communication throughout delivery.',
    },
    {
      icon: Palette,
      title: 'Clean UI/UX',
      description: 'Interfaces are designed to feel premium, readable, and reliable across devices.',
    },
    {
      icon: LineChart,
      title: 'ROI-Driven Strategy',
      description: 'Design and development choices are tied back to trust, growth, and measurable outcomes.',
    },
    {
      icon: Headphones,
      title: 'Long-Term Support',
      description: 'We stay available for updates, improvements, and practical post-launch support.',
    },
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description: 'Our delivery style is built around consistency, polish, and business-first problem solving.',
    },
  ];

  return (
    <section className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="theme-badge">Why Choose Us</span>
          <h2 className="theme-heading mt-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
            A stronger blend of design taste, technical structure, and growth thinking.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            We combine visual polish, development discipline, and business clarity so your website
            works hard, not just looks good.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="theme-panel group p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(11,61,102,0.08)] transition-soft group-hover:bg-[var(--color-corporate-blue)]">
                <reason.icon className="h-7 w-7 text-[var(--color-corporate-blue)] transition-soft group-hover:text-white" />
              </div>
              <h3 className="theme-heading mb-3 text-xl font-bold text-slate-900">{reason.title}</h3>
              <p className="leading-7 text-slate-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="rounded-[32px] bg-[linear-gradient(135deg,var(--color-deep-navy),var(--color-corporate-blue),var(--color-teal))] p-8 text-white shadow-[0_26px_56px_rgba(11,61,102,0.18)] md:p-12">
            <h3 className="theme-heading text-2xl font-bold md:text-3xl">Ready to transform your business?</h3>
            <p className="mx-auto mt-4 mb-8 max-w-2xl text-white/80">
              Join businesses that want cleaner execution, sharper branding, and smoother digital systems.
            </p>
            <button onClick={onNavigateToContact} className="theme-button-secondary !bg-white">
              Start Your Project Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
