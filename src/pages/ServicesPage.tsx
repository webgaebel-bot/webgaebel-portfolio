import { motion } from 'framer-motion';
import { ArrowRight, PanelTop } from 'lucide-react';
import { services } from '../data/services';

type ServicesPageProps = {
  onOpenService: (slug: string) => void;
};

const sdlcFlow = [
  { title: 'Discover', detail: 'Understand goals, users, blockers, and opportunities.' },
  { title: 'Plan', detail: 'Define features, timeline, architecture, and milestones.' },
  { title: 'Design', detail: 'Craft layouts, interactions, and conversion-friendly UI.' },
  { title: 'Develop', detail: 'Build reliable frontend, backend, and integration layers.' },
  { title: 'Test', detail: 'Validate responsiveness, QA, performance, and key journeys.' },
  { title: 'Deploy', detail: 'Launch confidently with support and iteration plans.' },
];

export default function ServicesPage({ onOpenService }: ServicesPageProps) {
  return (
    <main id="services-page" className="min-h-screen pt-28 text-slate-900">
      <section className="relative overflow-hidden py-16 md:py-24">
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
            <h1 className="theme-heading mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
              Web development services for software, mobile, Shopify, and AI projects.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Explore the full service catalogue built for businesses that want better page
              structure, cleaner search intent matching, and practical delivery across web, app, and
              AI projects.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600">
              This page acts as the main services hub. Each service has its own keyword focus,
              unique URL, and supporting content so the site can cover one search intent per page
              without overlapping the same keyword across multiple pages.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.06 * index }}
                whileHover={{ y: -10 }}
                className="theme-panel group p-6"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,var(--color-corporate-blue),var(--color-teal),var(--color-cyan))] text-white shadow-[0_14px_30px_rgba(11,61,102,0.18)]">
                  <service.icon className="h-6 w-6" />
                </div>
                <h2 className="theme-heading text-xl font-bold text-slate-900 sm:text-[1.35rem]">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4] overflow-hidden">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
                  {service.points.slice(0, 3).map((point) => (
                    <li key={point} className="flex items-start gap-3 leading-6">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-cyan)] shadow-[0_0_0_5px_rgba(73,197,211,0.14)]" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-2xl bg-[rgba(244,251,253,0.95)] p-4 text-sm leading-6 text-[var(--color-corporate-blue)]">
                  {service.outcomes}
                </div>

                <button
                  onClick={() => onOpenService(service.slug)}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-corporate-blue)] transition-soft group-hover:translate-x-1 group-hover:text-[var(--color-teal)]"
                >
                  Read full service details
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.article>
            ))}
          </div>

          <motion.section
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="theme-panel mt-16 overflow-hidden"
          >
            <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="bg-[linear-gradient(135deg,var(--color-deep-navy),var(--color-corporate-blue),var(--color-teal))] p-8 text-white md:p-10">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 backdrop-blur-sm">
                  <PanelTop className="h-7 w-7" />
                </div>
                <h2 className="theme-heading mt-6 text-3xl font-bold">How the service pages are structured</h2>
                <p className="mt-4 max-w-md leading-8 text-white/82">
                  Every page begins with a primary keyword in the H1, then supports it with related
                  terms, practical headings, and a clear call to action.
                </p>
              </div>

              <div className="grid gap-4 p-8 md:grid-cols-2 md:p-10">
                {sdlcFlow.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-[rgba(11,61,102,0.08)] bg-[rgba(244,251,253,0.86)] p-5"
                  >
                    <div className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[var(--color-teal)]">
                      Step {index + 1}
                    </div>
                    <h3 className="theme-heading text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </section>
    </main>
  );
}
