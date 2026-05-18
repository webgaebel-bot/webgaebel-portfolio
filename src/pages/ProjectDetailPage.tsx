import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Globe,
  Layers3,
  Link2,
  PlayCircle,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Volume2,
  VolumeX,
  Zap,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ProjectItem } from '../data/projects';

type ProjectDetailPageProps = {
  project: ProjectItem;
  onBackToProjects: () => void;
};

const featureIcons = [Zap, ShieldCheck, Smartphone, Globe];

export default function ProjectDetailPage({ project, onBackToProjects }: ProjectDetailPageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const hasVideo = Boolean(project.videoUrl);

  useEffect(() => {
    if (videoRef.current && hasVideo) {
      videoRef.current.play().catch(() => {});
    }
  }, [hasVideo]);

  const metrics = useMemo(
    () => [
      { label: 'Project Duration', value: project.duration || '8 Weeks', icon: Calendar, detail: 'Planned from strategy to launch' },
      { label: 'Team Size', value: project.teamSize || '4 Members', icon: Users, detail: 'Design and development support' },
      { label: 'Launch Status', value: project.result || 'Successfully Delivered', icon: Rocket, detail: 'Optimized for production readiness' },
    ],
    [project.duration, project.teamSize, project.result]
  );

  const detailedImpact = project.impact.length > 0
    ? project.impact
    : [
        'Clearer user experience that reduced friction across key interactions',
        'Stronger visual hierarchy that improved product trust and readability',
        'A cleaner technical foundation for future iteration and scale',
      ];

  const deliverables = project.deliverables?.length
    ? project.deliverables
    : ['User journey planning', 'UI refinement', 'Responsive interface system', 'Launch-ready polish'];

  const features = [
    'Responsive layout built for mobile and desktop users',
    'Structured content blocks that improve scanability and flow',
    'Clean visual hierarchy with modern interaction patterns',
    hasVideo ? 'Embedded project walkthrough support when media is available' : 'Preview-ready layout for visual presentation and case study detail',
  ];

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fcff,#ffffff)] pt-20">
      <article className="py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10 flex flex-wrap items-center justify-between gap-4"
          >
            <button
              onClick={onBackToProjects}
              className="group inline-flex items-center gap-2 rounded-full border border-[rgba(11,61,102,0.1)] bg-white px-5 py-3 text-sm font-medium text-slate-600 shadow-[0_12px_26px_rgba(11,61,102,0.08)] transition-soft hover:border-[var(--color-cyan)] hover:text-[var(--color-corporate-blue)]"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
              Back to Projects
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--color-corporate-blue),var(--color-teal))] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(11,61,102,0.14)] transition-soft hover:brightness-110"
              >
                View Live Project
                <ExternalLink size={16} />
              </a>
            )}
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(73,197,211,0.12)] px-4 py-2 text-sm font-semibold text-[var(--color-corporate-blue)]">
                <Sparkles size={14} />
                {project.category}
              </div>
              <h1 className="theme-heading mt-6 max-w-4xl text-[2.2rem] font-bold tracking-tight text-slate-900 sm:text-[2.8rem] lg:text-[3.4rem]">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                {project.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[24px] border border-[rgba(11,61,102,0.08)] bg-white/92 p-5 shadow-[0_18px_34px_rgba(11,61,102,0.08)]"
                  >
                    <metric.icon className="h-5 w-5 text-[var(--color-corporate-blue)]" />
                    <div className="theme-heading mt-3 text-lg font-bold text-slate-900">{metric.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{metric.label}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-600">{metric.detail}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(73,197,211,0.12)] px-4 py-2 text-sm font-semibold text-[var(--color-corporate-blue)]">
                  <CheckCircle2 size={16} />
                  Delivery-ready presentation
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(47,178,177,0.12)] px-4 py-2 text-sm font-semibold text-[var(--color-corporate-blue)]">
                  <TrendingUp size={16} />
                  Business-focused execution
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overflow-hidden rounded-[30px] border border-[rgba(11,61,102,0.08)] bg-white shadow-[0_28px_54px_rgba(11,61,102,0.12)]"
            >
              <div className="relative aspect-video bg-[linear-gradient(180deg,#edf7fb,#dfeef5)]">
                {hasVideo ? (
                  <>
                    <video
                      ref={videoRef}
                      key={project.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                      poster={project.preview}
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                    </video>
                    <button
                      onClick={toggleMute}
                      className="absolute bottom-4 right-4 rounded-full bg-white/90 p-3 text-[var(--color-corporate-blue)] shadow-[0_14px_30px_rgba(11,61,102,0.14)] transition-soft hover:bg-white"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                  </>
                ) : (
                  <img src={project.preview} alt={`${project.title} preview`} className="h-full w-full object-cover object-top" />
                )}
              </div>
              <div className="border-t border-[rgba(11,61,102,0.08)] bg-[rgba(244,251,253,0.88)] px-5 py-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  {hasVideo ? <PlayCircle className="h-4 w-4 text-[var(--color-teal)]" /> : <Link2 className="h-4 w-4 text-[var(--color-teal)]" />}
                  <span>{hasVideo ? 'Project walkthrough video is available on this case study.' : 'Project preview is presented in a clean visual format.'}</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 grid gap-8 xl:grid-cols-[1.04fr_0.96fr]">
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="theme-panel p-6 sm:p-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(73,197,211,0.12)] px-4 py-2 text-sm font-semibold text-[var(--color-corporate-blue)]">
                <Target size={14} />
                Project challenge
              </div>
              <h2 className="theme-heading mt-5 text-2xl font-bold text-slate-900">What needed to be solved</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{project.challenge}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  'Cleaner product clarity for visitors and decision makers',
                  'Better structure across content, sections, and interaction flow',
                  'A presentation style that feels more modern and trustworthy',
                  'A foundation that supports future iteration and growth',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-[rgba(11,61,102,0.08)] bg-[rgba(244,251,253,0.84)] px-5 py-4 text-sm leading-7 text-slate-600">
                    {item}
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="theme-panel p-6 sm:p-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(73,197,211,0.12)] px-4 py-2 text-sm font-semibold text-[var(--color-corporate-blue)]">
                <Layers3 size={14} />
                Our approach
              </div>
              <h2 className="theme-heading mt-5 text-2xl font-bold text-slate-900">How the solution was shaped</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{project.solution}</p>

              <div className="mt-8 space-y-3">
                {[
                  'Define the right structure and page hierarchy',
                  'Refine visuals, messaging, and user flow',
                  'Build a cleaner, more adaptable delivery system',
                ].map((item, index) => (
                  <div key={item} className="flex items-start gap-4 rounded-2xl border border-[rgba(11,61,102,0.08)] bg-white px-5 py-4 shadow-[0_12px_26px_rgba(11,61,102,0.05)]">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(73,197,211,0.14)] text-sm font-bold text-[var(--color-corporate-blue)]">
                      {index + 1}
                    </div>
                    <div className="text-sm leading-7 text-slate-600">{item}</div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="mt-8 theme-panel p-6 sm:p-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(73,197,211,0.12)] px-4 py-2 text-sm font-semibold text-[var(--color-corporate-blue)]">
              <TrendingUp size={14} />
              Key results
            </div>
            <h2 className="theme-heading mt-5 text-2xl font-bold text-slate-900">What this project delivers</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {detailedImpact.slice(0, 3).map((item, index) => {
                const Icon = featureIcons[index % featureIcons.length];

                return (
                  <div key={item} className="rounded-[24px] border border-[rgba(11,61,102,0.08)] bg-white p-6 shadow-[0_16px_32px_rgba(11,61,102,0.06)]">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(73,197,211,0.14)] text-[var(--color-corporate-blue)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                );
              })}
            </div>
          </motion.section>

          <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_1fr]">
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="theme-panel p-6 sm:p-8"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Feature set</div>
              <h2 className="theme-heading mt-3 text-2xl font-bold text-slate-900">Experience highlights</h2>
              <div className="mt-6 space-y-3">
                {features.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-[rgba(11,61,102,0.08)] bg-[rgba(244,251,253,0.84)] px-5 py-4 text-sm leading-7 text-slate-600">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--color-teal)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="theme-panel p-6 sm:p-8"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Deliverables</div>
              <h2 className="theme-heading mt-3 text-2xl font-bold text-slate-900">What was included</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {deliverables.map((item) => (
                  <div key={item} className="rounded-2xl border border-[rgba(11,61,102,0.08)] bg-white px-5 py-4 text-sm font-medium leading-7 text-[var(--color-corporate-blue)] shadow-[0_12px_24px_rgba(11,61,102,0.05)]">
                    {item}
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="mt-10 rounded-[30px] border border-[rgba(11,61,102,0.08)] bg-[linear-gradient(180deg,rgba(244,251,253,0.96),rgba(255,255,255,0.94))] p-8 text-center shadow-[0_24px_50px_rgba(11,61,102,0.1)] sm:p-12"
          >
            <h3 className="theme-heading text-2xl font-bold text-slate-900">Ready to build something equally polished?</h3>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-slate-600">
              If you want a cleaner website, sharper product presentation, or a more structured digital system, we can shape the next build with the same focus on clarity and quality.
            </p>
            <button
              onClick={onBackToProjects}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-corporate-blue)] px-6 py-3 text-sm font-semibold text-white transition-soft hover:brightness-110"
            >
              Explore More Projects
              <ArrowLeft size={14} className="rotate-180" />
            </button>
          </motion.div>
        </div>
      </article>
    </main>
  );
}
