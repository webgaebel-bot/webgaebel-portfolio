import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

type ProjectsPageProps = {
  onOpenProject: (slug: string) => void;
};

export default function ProjectsPage({ onOpenProject }: ProjectsPageProps) {
  return (
    <main id="projects-page" className="min-h-screen pt-28">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="theme-badge">WEBGAEBEL Projects</span>
            <h1 className="theme-heading mt-6 text-4xl font-bold text-slate-900 sm:text-5xl md:text-6xl">
              Projects that turn bold ideas into measurable growth.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Explore selected work across e-commerce, healthcare, SaaS, service businesses, and
              premium lead-generation websites.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                onClick={() => onOpenProject(project.slug)}
                className="group cursor-pointer overflow-hidden rounded-[28px] border border-[rgba(11,61,102,0.08)] bg-white shadow-[var(--shadow-card)] transition-soft hover:shadow-[0_26px_56px_rgba(11,61,102,0.16)]"
              >
                <div className={`h-52 bg-gradient-to-br ${project.color} p-6 text-white`}>
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-sm">
                      {project.category}
                    </span>
                    <div className="rounded-full border border-white/20 bg-white/15 p-2 backdrop-blur-sm">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <div className="mt-10">
                    <h2 className="theme-heading text-2xl font-bold">{project.title}</h2>
                    <p className="mt-2 text-sm text-white/90">{project.result}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="leading-7 text-slate-600">{project.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-corporate-blue)] transition-soft group-hover:translate-x-1 group-hover:text-[var(--color-teal)]">
                    View project details
                    <ArrowRight size={18} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
