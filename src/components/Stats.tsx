import { animate, motion, useMotionValue, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Award, Clock, TrendingUp, Users } from 'lucide-react';

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, suffix = '', duration = 2 }: CounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration });
      return controls.stop;
    }
  }, [isInView, count, value, duration]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Users, value: 700, suffix: '+', label: 'Happy Clients', description: 'Businesses trust us' },
    { icon: Award, value: 97, suffix: '%', label: 'Satisfaction Rate', description: 'Client approval rating' },
    { icon: Clock, value: 6, suffix: '+', label: 'Years Experience', description: 'In digital delivery' },
    { icon: TrendingUp, value: 30, suffix: '%+', label: 'Average Growth', description: 'For our clients' },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(135deg,var(--color-deep-navy),var(--color-corporate-blue),var(--color-teal))] py-16 md:py-20"
      ref={ref}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.12 }} className="absolute inset-0 bg-grid-pattern" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-cyan)]">
            Our Impact
          </span>
          <h2 className="theme-heading mt-3 text-3xl font-bold text-white sm:text-4xl">
            Numbers That Speak
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
            Trusted by growing businesses to deliver design clarity, stronger systems, and real performance improvements.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-[24px] border border-white/14 bg-white/10 p-5 text-center backdrop-blur-lg transition-soft hover:bg-white/14 sm:p-6"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-[18px] bg-white/14">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="theme-heading mb-1.5 text-3xl font-bold text-white md:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-lg font-semibold text-white">{stat.label}</div>
              <div className="mt-1.5 text-sm text-[var(--color-cyan)]">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
