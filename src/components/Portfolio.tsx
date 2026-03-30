import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
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
            Selected work designed to feel premium and perform hard.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Open any portfolio item and a branded loader now appears before the project detail page,
            giving the transition a polished studio feel.
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
              onClick={() => onOpenProject(project.slug)}
              className="group relative cursor-pointer overflow-hidden rounded-[28px] border border-[rgba(11,61,102,0.08)] bg-white shadow-[var(--shadow-card)] transition-soft hover:-translate-y-2 hover:shadow-[0_26px_56px_rgba(11,61,102,0.16)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-95`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.34),transparent_45%)]" />

              <div className="relative flex h-[300px] flex-col justify-between p-6 text-white">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-sm">
                      {project.category}
                    </span>
                    <motion.div
                      animate={{
                        rotate: hoveredIndex === index ? 45 : 0,
                        scale: hoveredIndex === index ? 1.08 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/12 backdrop-blur-sm"
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>
                  </div>

                  <h3 className="theme-heading mt-10 text-3xl font-bold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/88">{project.description}</p>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-sm uppercase tracking-[0.3em] text-white/70">Result</div>
                    <div className="mt-2 text-2xl font-bold">{project.result}</div>
                  </div>
                  <motion.div
                    animate={{ x: hoveredIndex === index ? 6 : 0 }}
                    className="rounded-full bg-white/14 px-4 py-2 text-sm font-semibold backdrop-blur-sm"
                  >
                    View Case
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,38,63,0.25))] pointer-events-none"
              />
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
