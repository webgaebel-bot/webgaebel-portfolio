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
            Web development services, mobile app development, and AI delivery for modern businesses.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We help companies shape clearer digital experiences, stronger search visibility, and
            practical software systems across web development services, SaaS development, mobile apps,
            and automation.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service, index) => (
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
                Discuss this capability
                <ArrowRight size={18} />
              </button>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button onClick={onNavigateToServices} className="theme-button-secondary">
            Explore the Full Service Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
