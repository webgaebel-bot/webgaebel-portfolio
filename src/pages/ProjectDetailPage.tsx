import { motion } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Layers3,
  Link2,
  PlayCircle,
  Sparkles,
  Target,
} from 'lucide-react';
import { ProjectItem } from '../data/projects';

type ProjectDetailPageProps = {
  project: ProjectItem;
  onBackToProjects: () => void;
};

const getProjectHighlights = (project: ProjectItem) => [
  { label: 'Category', value: project.category },
  { label: 'Outcome', value: project.result },
  { label: 'Scope', value: `${project.deliverables.length} deliverables` },
];

export default function ProjectDetailPage({
  project,
  onBackToProjects,
}: ProjectDetailPageProps) {
  const highlights = getProjectHighlights(project);

  return (
    <main className="min-h-screen pt-28">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(73,197,211,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(47,178,177,0.12),transparent_28%)]" />

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

          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="theme-badge gap-2">
                <Sparkles size={14} />
                {project.category}
              </span>
              <h1 className="theme-heading mt-6 max-w-4xl text-3xl font-bold text-slate-900 sm:text-5xl md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                {project.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[24px] border border-[rgba(11,61,102,0.08)] bg-white/84 px-5 py-5 shadow-[0_18px_34px_rgba(11,61,102,0.08)] backdrop-blur-sm"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                      {item.label}
                    </div>
                    <div className="theme-heading mt-3 text-lg font-bold text-[var(--color-corporate-blue)]">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 inline-flex max-w-full flex-col items-start gap-2 rounded-[24px] bg-[var(--color-ink)] px-5 py-4 text-white shadow-[0_22px_44px_rgba(11,61,102,0.18)] sm:flex-row sm:items-center sm:gap-4 sm:px-6">
                <span className="text-sm uppercase tracking-[0.24em] text-[var(--color-cyan)]">Project result</span>
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
                <img
                  src={project.preview}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(7,18,33,0.58))]" />
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                  <Link2 className="h-4 w-4" />
                  Project preview
                </div>
                <div className="absolute inset-x-6 bottom-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-white/14 bg-white/12 p-4 text-white backdrop-blur-md">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/64">
                      Delivery focus
                    </div>
                    <div className="mt-2 theme-heading text-xl font-bold">
                      Structured, conversion-aware build
                    </div>
                  </div>
                  <div className="rounded-[22px] border border-white/14 bg-[rgba(8,38,63,0.72)] p-4 text-white backdrop-blur-md">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/64">
                      Included
                    </div>
                    <div className="mt-2 text-sm leading-7 text-white/84">
                      Preview, outcomes, deliverables, and walkthrough-ready presentation.
                    </div>
                  </div>
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
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(73,197,211,0.14)] text-[var(--color-corporate-blue)]">
                <Target className="h-5 w-5" />
              </div>
              <h2 className="theme-heading mt-5 text-2xl font-bold text-slate-900">Challenge</h2>
              <p className="mt-4 leading-8 text-slate-600">{project.challenge}</p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="theme-panel p-6 sm:p-8"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(73,197,211,0.14)] text-[var(--color-corporate-blue)]">
                <Layers3 className="h-5 w-5" />
              </div>
              <h2 className="theme-heading mt-5 text-2xl font-bold text-slate-900">Solution</h2>
              <p className="mt-4 leading-8 text-slate-600">{project.solution}</p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="theme-panel p-6 sm:p-8"
            >
              <h2 className="theme-heading text-2xl font-bold text-slate-900">Impact</h2>
              <ul className="mt-5 space-y-3">
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
            <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr]">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Delivery scope
                </div>
                <h2 className="theme-heading mt-3 text-2xl font-bold text-slate-900">Deliverables</h2>
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
                  <h3 className="theme-heading text-xl font-bold">
                    {project.videoUrl ? 'Project walkthrough' : 'Video walkthrough slot'}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  {project.videoUrl
                    ? 'This walkthrough helps visitors see the product flow, UI quality, and interaction logic in a more realistic way.'
                    : 'If you have a Loom, MP4, or YouTube walkthrough for this project, it can live here as a trust-building video preview.'}
                </p>
                {project.videoUrl ? (
                  <video
                    key={project.videoUrl}
                    controls
                    preload="metadata"
                    playsInline
                    className="mt-5 aspect-video w-full rounded-2xl bg-black"
                    poster={project.preview}
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
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
