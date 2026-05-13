import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, ExternalLink, PlayCircle } from 'lucide-react';
import { projects } from '../data/projects';

type PortfolioProps = {
  onNavigateToProjects: () => void;
  onOpenProject: (slug: string) => void;
  showHeader?: boolean;
  collapsible?: boolean;
};

export default function Portfolio({
  onNavigateToProjects,
  onOpenProject,
  showHeader = true,
  collapsible = false,
}: PortfolioProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = collapsible && !showAllProjects ? projects.slice(0, 8) : projects;
  const teaserProjects = collapsible && !showAllProjects ? projects.slice(8, 12) : [];

  const openProject = (slug: string) => {
    onOpenProject(slug);
  };

  return (
    <section id="portfolio" className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="theme-badge">Portfolio</span>
            <h2 className="theme-heading mt-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
              Selected projects with real previews, detail links, and video slots.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Each project card gives visitors a visual snapshot and a clean route into the work.
            </p>
          </motion.div>
        )}

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              role="button"
              tabIndex={0}
              onClick={() => openProject(project.slug)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openProject(project.slug);
                }
              }}
              className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[24px] border border-[rgba(11,61,102,0.08)] bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_52px_rgba(11,61,102,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
            >
              <div className="relative">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="group/preview block"
                    aria-label={`Open ${project.title} live preview in a new tab`}
                  >
                    <div className="relative h-[190px] overflow-hidden bg-[linear-gradient(180deg,#eff7fb,#dfeef5)] sm:h-[205px]">
                      <img
                        src={project.preview}
                        alt={`${project.title} preview`}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,38,63,0.24))]" />
                    </div>
                  </a>
                ) : (
                  <div className="relative">
                    <div className="relative h-[190px] overflow-hidden bg-[linear-gradient(180deg,#eff7fb,#dfeef5)] sm:h-[205px]">
                      <img
                        src={project.preview}
                        alt={`${project.title} preview`}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,38,63,0.24))]" />
                    </div>
                  </div>
                )}
                {/* <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-18`} /> */}
                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  {project.category}
                </div>
                <motion.div
                  animate={{
                    rotate: hoveredIndex === index ? 45 : 0,
                    scale: hoveredIndex === index ? 1.08 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/12 text-white backdrop-blur-sm"
                >
                  <ArrowUpRight size={16} />
                </motion.div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="theme-heading text-xl font-bold text-slate-900">{project.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-slate-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
                  {project.description}
                </p>

                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-slate-400">Result</div>
                    <div className="mt-1.5 text-lg font-bold text-[var(--color-corporate-blue)]">{project.result}</div>
                  </div>
                  {project.videoUrl ? (
                    <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(11,61,102,0.10)] px-3 py-1.5 text-[11px] font-semibold text-slate-700">
                      <PlayCircle size={16} />
                      Video included
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(11,61,102,0.10)] px-3 py-1.5 text-[11px] font-semibold text-slate-700">
                      Project preview
                    </div>
                  )}
                </div>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[var(--color-corporate-blue)] transition-soft hover:text-[var(--color-teal)]"
                  >
                    <span className="whitespace-nowrap">Open preview</span>
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openProject(project.slug);
                    }}
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[var(--color-corporate-blue)] transition-soft group-hover:translate-x-1 group-hover:text-[var(--color-teal)]"
                  >
                    <span className="whitespace-nowrap">View details</span>
                    <ArrowRight size={18} />
                  </button>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {teaserProjects.length > 0 && (
          <div className="relative mt-5 overflow-hidden rounded-[30px]">
            <div className="pointer-events-none grid max-h-[190px] gap-5 overflow-hidden opacity-30 blur-[0.15px] md:grid-cols-2 xl:grid-cols-4">
              {teaserProjects.map((project) => (
                <article
                  key={project.slug}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(11,61,102,0.08)] bg-white shadow-[var(--shadow-card)]"
                >
                  <div className="relative h-[190px] overflow-hidden bg-[linear-gradient(180deg,#eff7fb,#dfeef5)] sm:h-[205px]">
                    <img
                      src={project.preview}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,38,63,0.24))]" />
                  </div>
                  <div className="p-5">
                    <h3 className="theme-heading text-xl font-bold text-slate-900">{project.title}</h3>
                    <p className="mt-2.5 text-sm leading-6 text-slate-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(247,250,252,0.97))]" />
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          {collapsible ? (
            <button onClick={() => setShowAllProjects((value) => !value)} className="theme-button-secondary">
              {showAllProjects ? 'Hide projects' : 'Show all projects'}
            </button>
          ) : !collapsible ? (
            <button onClick={onNavigateToProjects} className="theme-button-secondary">
              View All Projects
            </button>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
