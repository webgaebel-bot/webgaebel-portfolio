import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { ServiceItem } from '../data/services';
import type { ServicePageContent } from '../data/servicePages';

type ServiceDetailPageProps = {
  service: ServiceItem;
  pageContent?: ServicePageContent;
  onBackToServices: () => void;
  onNavigateToContact: () => void;
  onNavigateToRelated: (path: string) => void;
};

export default function ServiceDetailPage({
  service,
  pageContent,
  onBackToServices,
  onNavigateToContact,
  onNavigateToRelated,
}: ServiceDetailPageProps) {
  if (pageContent) {
    return (
      <main className="min-h-screen pt-28">
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 bg-grid-pattern opacity-15" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <button onClick={onBackToServices} className="theme-button-secondary mb-8 gap-2 !px-4 !py-3 text-sm sm:!px-5">
              <ArrowLeft size={16} />
              Back to Services
            </button>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="theme-badge">{pageContent.primaryKeyword}</span>
                <h1 className="theme-heading mt-6 text-3xl font-bold text-slate-900 sm:text-5xl md:text-6xl">
                  {pageContent.h1}
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                  {pageContent.subheading}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {pageContent.secondaryKeywords.map((keyword) => (
                    <span key={keyword} className="rounded-full border border-[rgba(11,61,102,0.10)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                      {keyword}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <button onClick={onNavigateToContact} className="theme-button-primary gap-2">
                    Start Your Project
                    <ArrowRight size={16} />
                  </button>
                  <button onClick={onNavigateToContact} className="theme-button-secondary gap-2">
                    Get Free Consultation
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-[28px] bg-[linear-gradient(135deg,var(--color-deep-navy),var(--color-corporate-blue),var(--color-teal))] p-6 text-white shadow-[0_28px_56px_rgba(11,61,102,0.18)] sm:rounded-[34px] sm:p-8"
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/12 backdrop-blur-sm">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <div className="theme-heading mt-6 text-2xl font-bold sm:text-3xl">{pageContent.h1}</div>
                    <p className="mt-4 max-w-sm text-white/88">
                      {pageContent.metaDescription}
                    </p>
                  </div>
                  <div className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Structured service page
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="theme-panel p-6 sm:p-8 lg:col-span-3">
                <h2 className="theme-heading text-2xl font-bold text-slate-900">Introduction</h2>
                <div className="mt-4 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                  {pageContent.introParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </motion.article>

              <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="theme-panel p-6 sm:p-8 lg:col-span-3">
                <h2 className="theme-heading text-2xl font-bold text-slate-900">Our Approach / Process</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {pageContent.processSteps.map((step) => (
                    <div key={step.title} className="rounded-3xl border border-[rgba(11,61,102,0.08)] bg-[rgba(244,251,253,0.88)] p-5">
                      <div className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-teal)]">{step.title}</div>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{step.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.article>

              <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="theme-panel p-6 sm:p-8 lg:col-span-3">
                <h2 className="theme-heading text-2xl font-bold text-slate-900">Key Features or Capabilities</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {pageContent.features.map((feature) => (
                    <div key={feature.title} className="rounded-3xl border border-[rgba(11,61,102,0.08)] bg-white p-5 shadow-[0_14px_30px_rgba(11,61,102,0.06)]">
                      <h3 className="theme-heading text-xl font-bold text-slate-900">{feature.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{feature.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.article>

              <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="theme-panel p-6 sm:p-8 lg:col-span-3">
                <h2 className="theme-heading text-2xl font-bold text-slate-900">Benefits of This Service</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {pageContent.benefits.map((benefit) => (
                    <div key={benefit.title} className="rounded-3xl border border-[rgba(11,61,102,0.08)] bg-[rgba(244,251,253,0.88)] p-5">
                      <h3 className="theme-heading text-xl font-bold text-slate-900">{benefit.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.article>

              <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="theme-panel p-6 sm:p-8 lg:col-span-3">
                <h2 className="theme-heading text-2xl font-bold text-slate-900">Technologies We Use</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {pageContent.technologies.map((techGroup) => (
                    <div key={techGroup.group} className="rounded-3xl border border-[rgba(11,61,102,0.08)] bg-white p-5">
                      <div className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-teal)]">{techGroup.group}</div>
                      <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                        {techGroup.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.article>

              <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }} className="theme-panel p-6 sm:p-8 lg:col-span-3">
                <h2 className="theme-heading text-2xl font-bold text-slate-900">Why Choose Us</h2>
                <div className="mt-4 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                  {pageContent.whyChooseUsParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  {pageContent.whyChooseUsPoints.map((point) => (
                    <div key={point} className="rounded-2xl border border-[rgba(11,61,102,0.08)] bg-[rgba(244,251,253,0.88)] px-5 py-4 text-sm font-medium text-[var(--color-corporate-blue)]">
                      {point}
                    </div>
                  ))}
                </div>
              </motion.article>

              <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="theme-panel p-6 sm:p-8 lg:col-span-3">
                <h2 className="theme-heading text-2xl font-bold text-slate-900">Call to Action</h2>
                <div className="mt-4 rounded-[28px] bg-[linear-gradient(135deg,var(--color-ink),var(--color-deep-navy),var(--color-corporate-blue))] p-6 text-white sm:p-8">
                  <h3 className="theme-heading text-2xl font-bold">{pageContent.ctaTitle}</h3>
                  <div className="mt-4 space-y-4 text-white/80">
                    {pageContent.ctaParagraphs.map((paragraph) => (
                      <p key={paragraph} className="leading-8">{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <button onClick={onNavigateToContact} className="theme-button-primary gap-2">
                      Start Your Project
                      <ArrowRight size={16} />
                    </button>
                    <button onClick={onNavigateToContact} className="theme-button-secondary gap-2 !bg-white">
                      Get Free Consultation
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Explore Our Other Services
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {pageContent.relatedLinks.map((link) => (
                      <button
                        key={link.path}
                        onClick={() => onNavigateToRelated(link.path)}
                        className="rounded-full border border-[rgba(11,61,102,0.12)] px-4 py-2 text-sm font-medium text-slate-700 transition-soft hover:border-[var(--color-cyan)] hover:text-[var(--color-corporate-blue)]"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-28">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={onBackToServices} className="theme-button-secondary mb-8 gap-2 !px-4 !py-3 text-sm sm:!px-5">
            <ArrowLeft size={16} />
            Back to Services
          </button>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="theme-badge">WEBGAEBEL Service</span>
              <h1 className="theme-heading mt-6 text-3xl font-bold text-slate-900 sm:text-5xl md:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{service.overview}</p>

              <div className="mt-8 inline-flex max-w-full flex-col items-start gap-2 rounded-[24px] bg-[var(--color-ink)] px-5 py-4 text-white shadow-[0_22px_44px_rgba(11,61,102,0.18)] sm:flex-row sm:items-center sm:gap-3 sm:px-6">
                <span className="text-sm uppercase tracking-[0.24em] text-[var(--color-cyan)]">Outcome</span>
                <span className="text-base font-semibold">{service.outcomes}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-[28px] bg-[linear-gradient(135deg,var(--color-deep-navy),var(--color-corporate-blue),var(--color-teal))] p-6 text-white shadow-[0_28px_56px_rgba(11,61,102,0.18)] sm:rounded-[34px] sm:p-8"
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/12 backdrop-blur-sm">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="theme-heading mt-6 text-2xl font-bold sm:text-3xl">{service.title}</div>
                  <p className="mt-4 max-w-sm text-white/88">{service.description}</p>
                </div>
                <div className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Detailed service overview
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="theme-panel p-6 sm:p-8"
            >
              <h2 className="theme-heading text-2xl font-bold text-slate-900">Key Inclusions</h2>
              <ul className="mt-4 space-y-3">
                {service.points.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 size={18} className="mt-1 text-[var(--color-teal)]" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="theme-panel p-6 sm:p-8"
            >
              <h2 className="theme-heading text-2xl font-bold text-slate-900">Our Process</h2>
              <ul className="mt-4 space-y-3">
                {service.process.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 size={18} className="mt-1 text-[var(--color-teal)]" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="theme-panel p-6 sm:p-8"
            >
              <h2 className="theme-heading text-2xl font-bold text-slate-900">Best Fit Industries</h2>
              <ul className="mt-4 space-y-3">
                {service.industries.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 size={18} className="mt-1 text-[var(--color-teal)]" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="theme-panel mt-10 p-6 sm:p-8"
          >
            <h2 className="theme-heading text-2xl font-bold text-slate-900">Typical Deliverables</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {service.deliverables.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[rgba(11,61,102,0.08)] bg-[rgba(244,251,253,0.88)] px-5 py-4 font-medium text-[var(--color-corporate-blue)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </section>
    </main>
  );
}
