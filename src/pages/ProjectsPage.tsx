import { motion } from 'framer-motion';
import { ArrowRight, Film, Image as ImageIcon, Link2, PlayCircle } from 'lucide-react';
import Portfolio from '../components/Portfolio';

type ProjectsPageProps = {
  onOpenProject: (slug: string) => void;
};

const trustPoints = [
  'Clear project previews that make the portfolio easy to scan',
  'Detailed project pages for deeper evaluation and internal linking',
  'Video slot support so walkthroughs can be attached when available',
  'Strong visual structure for desktop and mobile users',
];

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
            className="mx-auto max-w-4xl text-center"
          >
            <span className="theme-badge">Projects</span>
            <h1 className="theme-heading mt-6 text-4xl font-bold text-slate-900 sm:text-5xl md:text-6xl">
              Projects that show real design, real links, and real proof.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              This portfolio section is built to make trust easier. Visitors can scan the previews,
              open detailed project pages, and review the structure behind each build.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              The layout also supports image thumbnails and video walkthrough slots, so each project
              can be expanded with live evidence instead of only text.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { icon: ImageIcon, label: 'Image previews' },
              { icon: Link2, label: 'Project links' },
              { icon: PlayCircle, label: 'Video slots' },
              { icon: Film, label: 'Walkthrough-ready' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="theme-panel flex items-center gap-4 p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-deep-navy),var(--color-teal),var(--color-cyan))] text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-slate-400">Portfolio</div>
                  <div className="mt-1 font-semibold text-slate-900">{item.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <Portfolio
              onNavigateToProjects={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              onOpenProject={onOpenProject}
            />
          </div>

          <div className="mt-20 grid gap-6 lg:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="theme-panel p-8 md:p-10"
            >
              <h2 className="theme-heading text-3xl font-bold text-slate-900">Why the project section matters</h2>
              <p className="mt-5 leading-8 text-slate-600">
                A project section is one of the clearest ways to show how the agency thinks. It
                gives people proof of layout decisions, content structure, and execution quality
                without forcing them to guess what kind of work gets delivered.
              </p>
              <p className="mt-5 leading-8 text-slate-600">
                For software and AI clients, that matters even more. They usually want to see how
                pages are structured, how the design feels on mobile, and whether there is a simple
                path from preview to deeper project detail.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {trustPoints.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[rgba(11,61,102,0.12)] bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-[30px] bg-[linear-gradient(135deg,var(--color-ink),var(--color-deep-navy),var(--color-corporate-blue))] p-8 text-white shadow-[var(--shadow-soft)] md:p-10"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12">
                <PlayCircle className="h-7 w-7" />
              </div>
              <h2 className="theme-heading mt-6 text-3xl font-bold">Ready for images, links, and video</h2>
              <p className="mt-5 leading-8 text-white/80">
                The project cards now support preview images and clickable detail pages. A video
                slot is also available per project, so if you have walkthrough footage or client
                demos, we can plug them straight into the portfolio structure.
              </p>
              <p className="mt-5 leading-8 text-white/80">
                If you already have live URLs, screenshots, or Loom / MP4 clips, those can be
                assigned to individual projects without changing the page layout.
              </p>
              <button onClick={() => onOpenProject('luxe-fashion')} className="theme-button-secondary mt-8 gap-2 !bg-white">
                Open a sample project
                <ArrowRight size={18} />
              </button>
            </motion.article>
          </div>
        </div>
      </section>
    </main>
  );
}
