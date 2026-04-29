import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Headphones, LineChart, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Proven Expertise',
    description: 'We combine product thinking, technical execution, and polished UX across web, mobile, and AI delivery.',
  },
  {
    icon: Cpu,
    title: 'Modern Tech Stack',
    description: 'Our builds use scalable frameworks, clean frontend systems, practical integrations, and production-ready foundations.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'You get clear communication, structured delivery, and dependable post-launch help when the product evolves.',
  },
  {
    icon: LineChart,
    title: 'Business-Focused Results',
    description: 'We optimize for conversion, efficiency, and measurable business value instead of surface-level visuals alone.',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="theme-badge">Why Choose Us</span>
          <h2 className="theme-heading mt-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
            Built to feel premium, perform reliably, and support real business outcomes.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We bring together strategy, UI polish, and scalable engineering so your digital product
            works as a growth asset, not just a launch deliverable.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              whileHover={{ y: -8 }}
              className="theme-panel group h-full p-6"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-[20px] bg-[linear-gradient(135deg,var(--color-corporate-blue),var(--color-teal),var(--color-cyan))] text-white shadow-[0_16px_34px_rgba(11,61,102,0.14)] transition-soft group-hover:scale-105">
                <reason.icon className="h-7 w-7" />
              </div>
              <h3 className="theme-heading mt-6 text-xl font-bold text-slate-900">{reason.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{reason.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
