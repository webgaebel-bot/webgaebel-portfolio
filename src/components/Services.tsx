import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, BrainCircuit, Database, ShieldCheck } from 'lucide-react';

type ServicesProps = {
  onNavigateToServices: () => void;
  onOpenService: (slug: string) => void;
};

export default function Services({ onNavigateToServices, onOpenService }: ServicesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const featuredServices = [
    {
      slug: 'custom-web-apps',
      title: 'MERN Stack Engineering',
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
      slug: 'application-development',
      title: '.NET Enterprise Solutions',
      description:
        'Our .NET delivery practice is built for organizations that value governance, stability, and long-term maintainability. We develop secure ASP.NET Core platforms and C# services with strong authentication models, integration-ready backend layers, and enterprise workflows that support internal operations, customer portals, and mission-critical digital products.',
      points: [
        'Secure backend engineering with ASP.NET Core and C#',
        'Enterprise-grade APIs, business logic, and integration layers',
        'Structured architecture for compliance, reliability, and maintainability',
      ],
      icon: ShieldCheck,
    },
    {
      slug: 'automation-solutions',
      title: 'AI Innovation Systems',
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
            Specialized engineering services for organizations that require performance, security, and scale.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            WebGaebel partners with ambitious companies to deliver modern application platforms,
            enterprise backend systems, and applied AI solutions that strengthen operations,
            improve customer experience, and accelerate growth.
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
