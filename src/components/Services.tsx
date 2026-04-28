import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, BrainCircuit, Database, Smartphone } from 'lucide-react';

type ServicesProps = {
  onNavigateToServices: () => void;
  onOpenService: (slug: string) => void;
};

export default function Services({ onNavigateToServices, onOpenService }: ServicesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const featuredServices = [
    {
      slug: 'custom-web-app-development-services',
      title: 'Custom Web App Development Services',
      description:
        'Architected for high-growth businesses that require resilient web platforms, our MERN solutions combine MongoDB flexibility, Express-powered APIs, React performance optimization, and maintainable Node.js services. We design modular application layers, streamline state and rendering performance, and build delivery pipelines that support scale without compromising user experience.',
      points: [
        'Scalable MongoDB schema design and API architecture',
        'React performance optimization for faster, smoother interfaces',
        'Modular full-stack systems built for feature velocity and growth',
      ],
      icon: Database,
    },
    {
      slug: 'mobile-app-development',
      title: 'Mobile App Development',
      description:
        'Our mobile app development work is built for organizations that want a polished iOS and Android presence, a clear user journey, and a practical path from idea to launch. We plan the screens, flows, and integrations that support business goals without overcomplicating the product.',
      points: [
        'iOS and Android-ready builds with clean user flows',
        'API, payment, and third-party integrations for real workflows',
        'Mobile-first architecture that supports future scaling',
      ],
      icon: Smartphone,
    },
    {
      slug: 'ai-development-services',
      title: 'AI Development Services',
      description:
        'We help forward-looking companies operationalize AI through custom NLP pipelines, computer vision workflows, and OpenAI-powered product features. From intelligent document processing to conversational interfaces and predictive automation, our AI implementations are grounded in measurable business outcomes, practical deployment strategy, and secure integration with your existing technology stack.',
      points: [
        'Custom NLP and intelligent automation workflows',
        'Computer vision solutions for classification and analysis',
        'OpenAI integration for assistants, copilots, and AI-enabled products',
      ],
      icon: BrainCircuit,
    },
  ];

  return (
    <section id="services" className="section-wash py-18 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-12 text-center"
        >
          <span className="theme-badge">Our Services</span>
          <h2 className="theme-heading mt-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
            Web development services, mobile app development, and AI delivery for modern businesses.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We help companies shape clearer digital experiences, stronger search visibility, and
            practical software systems across web development services, SaaS development, mobile apps,
            and automation.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service, index) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.01 }}
              className="theme-panel group relative overflow-hidden p-6 transition-soft hover:border-[rgba(47,178,177,0.35)]"
            >
              <motion.div
                initial={{ opacity: 0.32, x: '-18%' }}
                animate={isInView ? { opacity: 0.65, x: '118%' } : {}}
                transition={{ duration: 1.6, delay: 0.3 + index * 0.14, ease: 'easeInOut' }}
                className="pointer-events-none absolute inset-y-0 left-0 w-24 -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)]"
              />
              <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(73,197,211,0.8),transparent)] opacity-70" />

              <motion.div
                whileHover={{ rotate: 4, scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 280, damping: 16 }}
                className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,var(--color-corporate-blue),var(--color-teal),var(--color-cyan))] text-white shadow-[0_14px_30px_rgba(11,61,102,0.16)]"
              >
                <service.icon className="h-6 w-6" />
              </motion.div>

              <h3 className="theme-heading text-xl font-bold text-slate-900 sm:text-[1.35rem]">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5] overflow-hidden">
                {service.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {service.points.slice(0, 3).map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-medium leading-6 text-slate-700">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-cyan)] shadow-[0_0_0_5px_rgba(73,197,211,0.12)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onOpenService(service.slug)}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-corporate-blue)] transition-soft group-hover:translate-x-1 group-hover:text-[var(--color-teal)]"
              >
                Discuss this capability
                <motion.span
                  className="inline-flex"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </button>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button onClick={onNavigateToServices} className="theme-button-secondary">
            Explore the Full Service Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
