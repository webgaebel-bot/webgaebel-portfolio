import { motion } from 'framer-motion';
import Portfolio from '../components/Portfolio';

type ProjectsPageProps = {
  onOpenProject: (slug: string) => void;
};

export default function ProjectsPage({ onOpenProject }: ProjectsPageProps) {
  return (
    <main id="projects-page" className="min-h-screen pt-20">
      <section className="relative overflow-hidden py-10 md:py-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="theme-badge">Portfolio</span>
            <h1 className="theme-heading mt-6 text-[2.2rem] font-bold text-slate-900 sm:text-[2.7rem] md:text-[3.2rem]">
              A clean portfolio with real previews, working links, and launch-ready media
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Scan selected work, open live previews where available, and review each build through a
              cleaner, more consistent portfolio layout
            </p>
          </motion.div>

          <div className="mt-16">
            <Portfolio
              showHeader={false}
              collapsible
              onNavigateToProjects={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              onOpenProject={onOpenProject}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
