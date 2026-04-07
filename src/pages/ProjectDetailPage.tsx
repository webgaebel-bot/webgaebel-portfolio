import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ExternalLink, Link2, PlayCircle } from 'lucide-react';
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
          <div className="mb-8 flex flex-wrap gap-3">
            <button
              onClick={onBackToProjects}
              className="theme-button-secondary gap-2 !px-4 !py-3 text-sm sm:!px-5"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-button-primary gap-2 !px-4 !py-3 text-sm sm:!px-5"
              >
                Open Live Site
                <ExternalLink size={16} />
              </a>
            )}
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="theme-badge">{project.category}</span>
              <h1 className="theme-heading mt-6 text-3xl font-bold text-slate-900 sm:text-5xl md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{project.description}</p>

              <div className="mt-8 inline-flex max-w-full flex-col items-start gap-2 rounded-[24px] bg-[var(--color-ink)] px-5 py-4 text-white shadow-[0_22px_44px_rgba(11,61,102,0.18)] sm:flex-row sm:items-center sm:gap-4 sm:px-6">
                <span className="text-sm uppercase tracking-[0.24em] text-[var(--color-cyan)]">Result</span>
                <span className="theme-heading text-2xl font-bold">{project.result}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overflow-hidden rounded-[28px] border border-[rgba(11,61,102,0.08)] bg-white shadow-[0_28px_56px_rgba(11,61,102,0.18)] sm:rounded-[34px]"
            >
              <div className="relative">
                <img src={project.preview} alt={`${project.title} preview`} className="h-full w-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(7,18,33,0.58))]" />
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                  <Link2 className="h-4 w-4" />
                  Project preview
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
              <h2 className="theme-heading text-2xl font-bold text-slate-900">Challenge</h2>
              <p className="mt-4 leading-8 text-slate-600">{project.challenge}</p>
            </motion.article>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="theme-panel p-6 sm:p-8"
            >
              <h2 className="theme-heading text-2xl font-bold text-slate-900">Solution</h2>
              <p className="mt-4 leading-8 text-slate-600">{project.solution}</p>
            </motion.article>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="theme-panel p-6 sm:p-8"
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
            className="theme-panel mt-10 p-6 sm:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
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
              </div>

              <div className="overflow-hidden rounded-[28px] border border-[rgba(11,61,102,0.08)] bg-[linear-gradient(135deg,var(--color-ink),var(--color-deep-navy),var(--color-corporate-blue))] p-5 text-white">
                <div className="flex items-center gap-3">
                  <PlayCircle className="h-6 w-6 text-[var(--color-cyan)]" />
                  <h3 className="theme-heading text-xl font-bold">Video walkthrough slot</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  If you have a Loom, MP4, or YouTube walkthrough for this project, it can live here
                  as a trust-building video preview. The layout is already ready for it.
                </p>
                {project.videoUrl ? (
                  <video controls className="mt-5 aspect-video w-full rounded-2xl bg-black" poster={project.preview}>
                    <source src={project.videoUrl} />
                  </video>
                ) : (
                  <div className="mt-5 flex aspect-video items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-center">
                    <div>
                      <div className="theme-heading text-2xl font-bold">Video slot ready</div>
                      <p className="mt-2 text-sm text-white/72">
                        Drop in a project clip whenever you have one.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.section>
        </div>
      </section>
    </main>
  );
}
