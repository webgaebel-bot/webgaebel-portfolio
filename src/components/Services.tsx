import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';

type ServicesProps = {
  onNavigateToServices: () => void;
  onOpenService: (slug: string) => void;
};

export default function Services({ onNavigateToServices, onOpenService }: ServicesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-wash py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-16 text-center"
        >
          <span className="theme-badge">Our Services</span>
          <h2 className="theme-heading mt-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
            Every service is visible, structured, and built for business growth.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            From Shopify and WordPress to SaaS platforms, Search Engine Optimization, and Digital Marketing,
            we deliver services that are designed to look premium and perform with purpose.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 9).map((service, index) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="theme-panel group p-8 transition-soft hover:border-[rgba(47,178,177,0.35)]"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-corporate-blue),var(--color-teal),var(--color-cyan))] text-white shadow-[0_16px_34px_rgba(11,61,102,0.16)]">
                <service.icon className="h-7 w-7" />
              </div>

              <h3 className="theme-heading text-2xl font-bold text-slate-900">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{service.description}</p>

              <ul className="mt-6 space-y-3">
                {service.points.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-cyan)] shadow-[0_0_0_5px_rgba(73,197,211,0.12)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onOpenService(service.slug)}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-corporate-blue)] transition-soft group-hover:translate-x-1 group-hover:text-[var(--color-teal)]"
              >
                View service details
                <ArrowRight size={18} />
              </button>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button onClick={onNavigateToServices} className="theme-button-secondary">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
