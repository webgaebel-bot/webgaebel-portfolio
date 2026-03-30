import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ClipboardList, Code2, FlaskConical, Lightbulb, Rocket, SearchCheck } from 'lucide-react';

const steps = [
  {
    icon: SearchCheck,
    short: '01',
    phase: 'Discovery',
    title: 'Requirement Analysis',
    description:
      'We study your business model, user pain points, competitors, and goals so the product direction starts on clear ground.',
    items: ['Business discovery workshop', 'Audience and competitor review', 'Feature priority mapping'],
  },
  {
    icon: Lightbulb,
    short: '02',
    phase: 'Planning',
    title: 'Solution Architecture',
    description:
      'The roadmap, sitemap, wireframes, and technical scope are planned before design and development begin.',
    items: ['Information architecture', 'Wireframes and journey mapping', 'Tech stack and delivery planning'],
  },
  {
    icon: ClipboardList,
    short: '03',
    phase: 'Design',
    title: 'UI/UX System Design',
    description:
      'We shape interfaces, messaging flow, and interaction patterns around clarity, trust, and brand positioning.',
    items: ['Visual system and components', 'Responsive layout design', 'Prototype review and refinements'],
  },
  {
    icon: Code2,
    short: '04',
    phase: 'Development',
    title: 'Agile Build Execution',
    description:
      'Frontend, backend, integrations, and content structure are built in milestones with quality-focused delivery.',
    items: ['Modular development sprints', 'CMS or admin implementation', 'Integration and performance setup'],
  },
  {
    icon: FlaskConical,
    short: '05',
    phase: 'Testing',
    title: 'QA and SDLC Validation',
    description:
      'SDLC is not complete without strong QA. We review flows, responsiveness, content, speed, and critical user actions.',
    items: ['Cross-device testing', 'Bug fixing and performance tuning', 'UAT and launch approvals'],
  },
  {
    icon: Rocket,
    short: '06',
    phase: 'Launch',
    title: 'Deployment and Growth',
    description:
      'After launch, we support analytics, iteration, and ongoing optimization so the system keeps improving over time.',
    items: ['Deployment and handover', 'Monitoring and reporting', 'Post-launch support roadmap'],
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section id="process" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="theme-badge">Process + SDLC</span>
          <h2 className="theme-heading mt-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
            A polished delivery process with SDLC built into every stage.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            The attraction should not only be visual. Our process is clear, professional, and
            dependable from discovery to deployment.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-[linear-gradient(180deg,var(--color-deep-navy),var(--color-cyan),var(--color-teal))] lg:left-1/2 lg:block" />

          <div className="space-y-8 lg:space-y-10">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 34 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`relative grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center ${
                  index % 2 === 0 ? '' : 'lg:[&>*:first-child]:order-3 lg:[&>*:last-child]:order-1'
                }`}
              >
                <div className="theme-panel p-8">
                  <div className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.28em] text-[var(--color-teal)]">
                    <span>{step.phase}</span>
                    <span className="h-px flex-1 bg-[rgba(47,178,177,0.22)]" />
                  </div>
                  <div className="theme-heading text-3xl font-bold text-[rgba(11,61,102,0.18)]">
                    {step.short}
                  </div>
                  <h3 className="theme-heading mt-2 text-2xl font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{step.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {step.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[rgba(11,61,102,0.08)] bg-[rgba(244,251,253,0.95)] px-4 py-2 text-sm font-medium text-[var(--color-corporate-blue)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 hidden lg:flex">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[linear-gradient(135deg,var(--color-deep-navy),var(--color-teal),var(--color-cyan))] text-white shadow-[0_18px_38px_rgba(11,61,102,0.2)]">
                    <step.icon className="h-7 w-7" />
                  </div>
                </div>

                <div className="hidden lg:block" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
