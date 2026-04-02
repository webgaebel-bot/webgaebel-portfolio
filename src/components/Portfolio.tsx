import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, PlayCircle } from 'lucide-react';
import { projects } from '../data/projects';

type PortfolioProps = {
  onNavigateToProjects: () => void;
  onOpenProject: (slug: string) => void;
};

export default function Portfolio({ onNavigateToProjects, onOpenProject }: PortfolioProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="theme-badge">Portfolio</span>
          <h2 className="theme-heading mt-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
            Selected projects with real previews, detail links, and video slots.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Each project card gives visitors a visual snapshot, a project summary, and a clean path
            to the detailed case view. It is designed to build trust without feeling cluttered.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative cursor-pointer overflow-hidden rounded-[28px] border border-[rgba(11,61,102,0.08)] bg-white shadow-[var(--shadow-card)] transition-soft hover:-translate-y-2 hover:shadow-[0_26px_56px_rgba(11,61,102,0.16)]"
            >
              <div className="relative">
                <img src={project.preview} alt={`${project.title} preview`} className="h-60 w-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-18`} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,38,63,0.56))]" />
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  {project.category}
                </div>
                <motion.div
                  animate={{
                    rotate: hoveredIndex === index ? 45 : 0,
                    scale: hoveredIndex === index ? 1.08 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/12 text-white backdrop-blur-sm"
                >
                  <ArrowUpRight size={18} />
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="theme-heading text-2xl font-bold text-slate-900">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>

                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-slate-400">Result</div>
                    <div className="mt-2 text-xl font-bold text-[var(--color-corporate-blue)]">{project.result}</div>
                  </div>
                  {project.videoUrl ? (
                    <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(11,61,102,0.10)] px-4 py-2 text-xs font-semibold text-slate-700">
                      <PlayCircle size={16} />
                      Video included
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(11,61,102,0.10)] px-4 py-2 text-xs font-semibold text-slate-700">
                      Project preview
                    </div>
                  )}
                </div>

                <button
                  onClick={() => onOpenProject(project.slug)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-corporate-blue)] transition-soft group-hover:translate-x-1 group-hover:text-[var(--color-teal)]"
                >
                  View project details
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <button onClick={onNavigateToProjects} className="theme-button-secondary">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
