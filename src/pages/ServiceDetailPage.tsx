import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Layers3,
  Sparkles,
  Target,
  Workflow,
} from 'lucide-react';
import type { ServiceItem } from '../data/services';
import type { ServicePageContent } from '../data/servicePages';

type ServiceDetailPageProps = {
  service: ServiceItem;
  pageContent?: ServicePageContent;
  onBackToServices: () => void;
  onNavigateToContact: () => void;
  onNavigateToRelated: (path: string) => void;
};

const splitOutcome = (value: string) =>
  value.length > 84 ? `${value.slice(0, 84)}...` : value;

const SummaryCard = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div className="rounded-[24px] border border-[rgba(11,61,102,0.08)] bg-white/84 px-5 py-5 shadow-[0_18px_34px_rgba(11,61,102,0.08)] backdrop-blur-sm">
    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">{label}</div>
    <div className="theme-heading mt-3 text-lg font-bold text-[var(--color-corporate-blue)]">{value}</div>
  </div>
);

const SectionTitle = ({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) => (
  <>
    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">{eyebrow}</div>
    <h2 className="theme-heading mt-3 text-2xl font-bold text-slate-900">{title}</h2>
  </>
);

export default function ServiceDetailPage({
  service,
  pageContent,
  onBackToServices,
  onNavigateToContact,
  onNavigateToRelated,
}: ServiceDetailPageProps) {
  const summaryItems = [
    { label: 'Service type', value: pageContent?.primaryKeyword ?? service.title },
    { label: 'Best fit', value: splitOutcome(service.outcomes) },
    {
      label: 'Delivery scope',
      value: `${service.deliverables.length} deliverables`,
    },
  ];

  if (pageContent) {
    return (
      <main className="min-h-screen pt-28">
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 bg-grid-pattern opacity-15" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(73,197,211,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(47,178,177,0.12),transparent_28%)]" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={onBackToServices}
              className="theme-button-secondary mb-8 gap-2 !px-4 !py-3 text-sm sm:!px-5"
            >
              <ArrowLeft size={16} />
              Back to Services
            </button>

            <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="theme-badge gap-2">
                  <Sparkles size={14} />
                  {pageContent.primaryKeyword}
                </span>
                <h1 className="theme-heading mt-6 max-w-4xl text-3xl font-bold text-slate-900 sm:text-5xl md:text-6xl">
                  {pageContent.h1}
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                  {pageContent.subheading}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {pageContent.secondaryKeywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full border border-[rgba(11,61,102,0.10)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {summaryItems.map((item) => (
                    <SummaryCard key={item.label} label={item.label} value={item.value} />
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <button onClick={onNavigateToContact} className="theme-button-primary gap-2">
                    Start Your Project
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
                    <p className="mt-4 max-w-sm text-white/88">{pageContent.metaDescription}</p>
                  </div>
                  <div className="mt-10 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[20px] border border-white/14 bg-white/10 p-4 backdrop-blur-sm">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                        Structured for
                      </div>
                      <div className="mt-2 text-sm leading-7 text-white/86">Clarity, usability, and long-term maintainability.</div>
                    </div>
                    <div className="rounded-[20px] border border-white/14 bg-[rgba(8,38,63,0.42)] p-4 backdrop-blur-sm">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                        Built around
                      </div>
                      <div className="mt-2 text-sm leading-7 text-white/86">Business goals, user flow, and reliable implementation.</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-14 grid gap-8">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="theme-panel p-6 sm:p-8"
              >
                <SectionTitle eyebrow="Overview" title="Introduction" />
                <div className="mt-5 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                  {pageContent.introParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </motion.article>

              <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr]">
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="theme-panel p-6 sm:p-8"
                >
                  <SectionTitle eyebrow="Workflow" title="Our Approach / Process" />
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {pageContent.processSteps.map((step) => (
                      <div
                        key={step.title}
                        className="rounded-3xl border border-[rgba(11,61,102,0.08)] bg-[rgba(244,251,253,0.88)] p-5"
                      >
                        <div className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-teal)]">
                          {step.title}
                        </div>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{step.detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.article>

                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="theme-panel p-6 sm:p-8"
                >
                  <SectionTitle eyebrow="Why this works" title="Benefits of This Service" />
                  <div className="mt-6 space-y-4">
                    {pageContent.benefits.map((benefit) => (
                      <div
                        key={benefit.title}
                        className="rounded-3xl border border-[rgba(11,61,102,0.08)] bg-white p-5 shadow-[0_14px_30px_rgba(11,61,102,0.06)]"
                      >
                        <h3 className="theme-heading text-xl font-bold text-slate-900">{benefit.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.article>
              </div>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="theme-panel p-6 sm:p-8"
              >
                <SectionTitle eyebrow="Capabilities" title="Key Features or Capabilities" />
                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {pageContent.features.map((feature) => (
                    <div
                      key={feature.title}
                      className="rounded-3xl border border-[rgba(11,61,102,0.08)] bg-white p-5 shadow-[0_14px_30px_rgba(11,61,102,0.06)]"
                    >
                      <h3 className="theme-heading text-xl font-bold text-slate-900">{feature.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{feature.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.article>

              <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="theme-panel p-6 sm:p-8"
                >
                  <SectionTitle eyebrow="Technology" title="Technologies We Use" />
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {pageContent.technologies.map((techGroup) => (
                      <div
                        key={techGroup.group}
                        className="rounded-3xl border border-[rgba(11,61,102,0.08)] bg-white p-5"
                      >
                        <div className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-teal)]">
                          {techGroup.group}
                        </div>
                        <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                          {techGroup.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.article>

                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="theme-panel p-6 sm:p-8"
                >
                  <SectionTitle eyebrow="Why WebGaebel" title="Why Choose Us" />
                  <div className="mt-5 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                    {pageContent.whyChooseUsParagraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    {pageContent.whyChooseUsPoints.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-[rgba(11,61,102,0.08)] bg-[rgba(244,251,253,0.88)] px-5 py-4 text-sm font-medium text-[var(--color-corporate-blue)]"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </motion.article>
              </div>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="theme-panel p-6 sm:p-8"
              >
                <div className="rounded-[28px] bg-[linear-gradient(135deg,var(--color-ink),var(--color-deep-navy),var(--color-corporate-blue))] p-6 text-white sm:p-8">
                  <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/58">
                        Next step
                      </div>
                      <h2 className="theme-heading mt-3 text-2xl font-bold sm:text-3xl">{pageContent.ctaTitle}</h2>
                      <div className="mt-4 space-y-4 text-white/80">
                        {pageContent.ctaParagraphs.map((paragraph) => (
                          <p key={paragraph} className="leading-8">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      <button onClick={onNavigateToContact} className="theme-button-secondary mt-8 gap-2 !bg-white">
                        Start Your Project
                        <ArrowRight size={16} />
                      </button>
                    </div>

                    <div className="rounded-[24px] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/58">
                        Explore related services
                      </div>
                      <div className="mt-5 flex flex-wrap gap-3">
                        {pageContent.relatedLinks.map((link) => (
                          <button
                            key={link.path}
                            onClick={() => onNavigateToRelated(link.path)}
                            className="rounded-full border border-white/14 px-4 py-2 text-sm font-medium text-white transition-soft hover:bg-white/10"
                          >
                            {link.label}
                          </button>
                        ))}
                      </div>
                    </div>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(73,197,211,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(47,178,177,0.12),transparent_28%)]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBackToServices}
            className="theme-button-secondary mb-8 gap-2 !px-4 !py-3 text-sm sm:!px-5"
          >
            <ArrowLeft size={16} />
            Back to Services
          </button>

          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="theme-badge gap-2">
                <Sparkles size={14} />
                WEBGAEBEL Service
              </span>
              <h1 className="theme-heading mt-6 max-w-4xl text-3xl font-bold text-slate-900 sm:text-5xl md:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{service.overview}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <SummaryCard label="Service type" value={service.title} />
                <SummaryCard label="Best fit" value={splitOutcome(service.outcomes)} />
                <SummaryCard label="Delivery scope" value={`${service.deliverables.length} deliverables`} />
              </div>

              <div className="mt-8 inline-flex max-w-full flex-col items-start gap-2 rounded-[24px] bg-[var(--color-ink)] px-5 py-4 text-white shadow-[0_22px_44px_rgba(11,61,102,0.18)] sm:flex-row sm:items-center sm:gap-3 sm:px-6">
                <span className="text-sm uppercase tracking-[0.24em] text-[var(--color-cyan)]">Outcome</span>
                <span className="text-base font-semibold">{service.outcomes}</span>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button onClick={onNavigateToContact} className="theme-button-primary gap-2">
                  Start Your Project
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
                  <div className="theme-heading mt-6 text-2xl font-bold sm:text-3xl">{service.title}</div>
                  <p className="mt-4 max-w-sm text-white/88">{service.description}</p>
                </div>
                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[20px] border border-white/14 bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                      Includes
                    </div>
                    <div className="mt-2 text-sm leading-7 text-white/86">Planning, execution, and delivery-ready structure.</div>
                  </div>
                  <div className="rounded-[20px] border border-white/14 bg-[rgba(8,38,63,0.42)] p-4 backdrop-blur-sm">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                      Focus
                    </div>
                    <div className="mt-2 text-sm leading-7 text-white/86">Performance, clarity, and business-fit implementation.</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-14 grid gap-8 xl:grid-cols-[1.06fr_0.94fr]">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="theme-panel p-6 sm:p-8"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(73,197,211,0.14)] text-[var(--color-corporate-blue)]">
                <Target className="h-5 w-5" />
              </div>
              <h2 className="theme-heading mt-5 text-2xl font-bold text-slate-900">Key Inclusions</h2>
              <ul className="mt-5 space-y-3">
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
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(73,197,211,0.14)] text-[var(--color-corporate-blue)]">
                <Workflow className="h-5 w-5" />
              </div>
              <h2 className="theme-heading mt-5 text-2xl font-bold text-slate-900">Our Process</h2>
              <ul className="mt-5 space-y-3">
                {service.process.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 size={18} className="mt-1 text-[var(--color-teal)]" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>

          <div className="mt-8 grid gap-8 xl:grid-cols-[0.94fr_1.06fr]">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="theme-panel p-6 sm:p-8"
            >
              <SectionTitle eyebrow="Industry fit" title="Best Fit Industries" />
              <ul className="mt-5 space-y-3">
                {service.industries.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 size={18} className="mt-1 text-[var(--color-teal)]" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="theme-panel p-6 sm:p-8"
            >
              <SectionTitle eyebrow="Delivery scope" title="Typical Deliverables" />
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
        </div>
      </section>
    </main>
  );
}
