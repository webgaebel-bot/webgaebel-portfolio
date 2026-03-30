import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../data/projects';

type ProjectDetailPageProps = {
  project: ProjectItem;
  onBackToProjects: () => void;
};

export default function ProjectDetailPage({
  project,
  onBackToProjects,
}: ProjectDetailPageProps) {
  return (
    <main className="min-h-screen pt-28">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBackToProjects}
            className="theme-button-secondary mb-8 gap-2 !px-5 !py-3 text-sm"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </button>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="theme-badge">{project.category}</span>
              <h1 className="theme-heading mt-6 text-4xl font-bold text-slate-900 sm:text-5xl md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{project.description}</p>

              <div className="mt-8 inline-flex items-center gap-4 rounded-[24px] bg-[var(--color-ink)] px-6 py-4 text-white shadow-[0_22px_44px_rgba(11,61,102,0.18)]">
                <span className="text-sm uppercase tracking-[0.24em] text-[var(--color-cyan)]">Result</span>
                <span className="theme-heading text-2xl font-bold">{project.result}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`min-h-[340px] rounded-[34px] bg-gradient-to-br ${project.color} p-8 text-white shadow-[0_28px_56px_rgba(11,61,102,0.18)]`}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.32em] text-white/80">WEBGAEBEL</div>
                  <div className="theme-heading mt-6 text-3xl font-bold">{project.title}</div>
                  <p className="mt-4 max-w-sm text-white/90">{project.description}</p>
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Premium project case study
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
              className="theme-panel p-8"
            >
              <h2 className="theme-heading text-2xl font-bold text-slate-900">Challenge</h2>
              <p className="mt-4 leading-8 text-slate-600">{project.challenge}</p>
            </motion.article>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="theme-panel p-8"
            >
              <h2 className="theme-heading text-2xl font-bold text-slate-900">Solution</h2>
              <p className="mt-4 leading-8 text-slate-600">{project.solution}</p>
            </motion.article>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="theme-panel p-8"
            >
              <h2 className="theme-heading text-2xl font-bold text-slate-900">Impact</h2>
              <ul className="mt-4 space-y-3">
                {project.impact.map((item) => (
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
            className="theme-panel mt-10 p-8"
          >
            <h2 className="theme-heading text-2xl font-bold text-slate-900">Deliverables</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {project.deliverables.map((item) => (
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
