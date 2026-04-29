import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

type SuccessStoriesProps = {
  onNavigateToProjects: () => void;
  onOpenProject: (slug: string) => void;
};

const featuredStories = [
  {
    slug: 'ai-content-generator',
    result: 'Reduced content production friction and improved workflow clarity by 45%.',
  },
  {
    slug: 'freelancer-booking-app',
    result: 'Improved booking completion flow by 38% with a cleaner mobile scheduling experience.',
  },
  {
    slug: 'real-estate-listings',
    result: 'Increased listing inquiry intent by 32% through clearer browsing and lead capture paths.',
  },
];

export default function SuccessStories({
  onNavigateToProjects,
  onOpenProject,
}: SuccessStoriesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stories = featuredStories
    .map((story) => {
      const project = projects.find((item) => item.slug === story.slug);
      return project ? { ...project, storyResult: story.result } : null;
    })
    .filter(Boolean);

  return (
    <section className="section-wash py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <span className="theme-badge">Case Studies</span>
            <h2 className="theme-heading mt-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
              Success Stories That Speak for Themselves
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A few selected builds that show how better systems, stronger UX, and clearer product
              structure translate into measurable business results.
            </p>
          </div>
          <div>
            <button onClick={onNavigateToProjects} className="theme-button-secondary">
              View All Projects
            </button>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {stories.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="theme-panel group overflow-hidden"
            >
              <div className="relative h-60 overflow-hidden bg-[linear-gradient(180deg,#eff7fb,#dfeef5)]">
                <img
                  src={project.preview}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-soft group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(7,18,33,0.32))]" />
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/14 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="theme-heading text-2xl font-bold text-slate-900">{project.title}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
                  {project.category}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{project.storyResult}</p>
                <button
                  onClick={() => onOpenProject(project.slug)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-corporate-blue)] transition-soft group-hover:translate-x-1 group-hover:text-[var(--color-teal)]"
                >
                  View Case Study
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
