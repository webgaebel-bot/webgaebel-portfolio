import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';

type ServicesPageProps = {
  onOpenService: (slug: string) => void;
};

export default function ServicesPage({ onOpenService }: ServicesPageProps) {
  const [showAllServices, setShowAllServices] = useState(false);
  const visibleServices = showAllServices ? services : services.slice(0, 6);
  const teaserServices = showAllServices ? [] : services.slice(6, 9);

  return (
    <main id="services-page" className="min-h-screen pt-20 text-slate-900">
      <section className="relative overflow-hidden py-10 md:py-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(73,197,211,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(47,178,177,0.14),transparent_24%)]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="theme-badge">WEBGAEBEL Services</span>
            <h1 className="theme-heading mt-6 text-[2.2rem] font-bold leading-tight text-slate-900 sm:text-[2.7rem] md:text-[3.2rem]">
              Web development services for software, mobile, Shopify, and AI projects
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Explore focused services for websites, apps, e-commerce, automation, and growth
              systems with a cleaner path into the right solution
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleServices.map((service, index) => (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.06 * index }}
                whileHover={{ y: -10 }}
                className="theme-panel group flex h-full flex-col p-6"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,var(--color-corporate-blue),var(--color-teal),var(--color-cyan))] text-white shadow-[0_14px_30px_rgba(11,61,102,0.18)]">
                  <service.icon className="h-6 w-6" />
                </div>
                <h2 className="theme-heading min-h-[3.75rem] text-xl font-bold text-slate-900 sm:text-[1.35rem]">{service.title}</h2>
                <p className="mt-3 min-h-[6rem] text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-5 min-h-[6.75rem] space-y-2.5 text-sm text-slate-700">
                  {service.points.slice(0, 3).map((point) => (
                    <li key={point} className="flex min-h-[2.25rem] items-start gap-3 leading-6">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-cyan)] shadow-[0_0_0_5px_rgba(73,197,211,0.14)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 min-h-[5.5rem] rounded-2xl bg-[rgba(244,251,253,0.95)] p-4 text-sm leading-6 text-[var(--color-corporate-blue)]">
                  {service.outcomes}
                </div>

                <button
                  onClick={() => onOpenService(service.slug)}
                  className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[var(--color-corporate-blue)] transition-soft group-hover:translate-x-1 group-hover:text-[var(--color-teal)]"
                >
                  <span className="whitespace-nowrap">Explore service</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.article>
            ))}
          </div>

          {!showAllServices && teaserServices.length > 0 && (
            <div className="relative mt-5 overflow-hidden rounded-[30px]">
              <div className="pointer-events-none grid max-h-[220px] gap-5 overflow-hidden opacity-30 blur-[0.15px] md:grid-cols-2 xl:grid-cols-3">
                {teaserServices.map((service) => (
                  <article key={service.slug} className="theme-panel flex h-full flex-col p-6">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,var(--color-corporate-blue),var(--color-teal),var(--color-cyan))] text-white shadow-[0_14px_30px_rgba(11,61,102,0.18)]">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h2 className="theme-heading min-h-[3.75rem] text-xl font-bold text-slate-900 sm:text-[1.35rem]">{service.title}</h2>
                    <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-slate-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
                      {service.description}
                    </p>
                  </article>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(247,250,252,0.96))]" />
            </div>
          )}

          {services.length > 6 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAllServices((value) => !value)}
                className="theme-button-secondary"
              >
                {showAllServices ? 'Hide services' : 'Show all services'}
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
